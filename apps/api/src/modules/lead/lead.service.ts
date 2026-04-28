import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { QueryLeadDto } from './dto/query-lead.dto';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    source?: string;
    service?: string[];
    industry?: string[];
  }) {
    const { name, service = [], industry = [], ...rest } = data;
    const normalizedServices = [...new Set(service.map((item) => item.trim()).filter(Boolean))];
    const normalizedIndustries = [...new Set(industry.map((item) => item.trim()).filter(Boolean))];

    const selectedServices = await Promise.all(
      normalizedServices.map((label) =>
        this.prisma.service.upsert({
          where: { slug: this.toSlug(label) },
          update: {
            name_en: label,
            name_fr: label,
          },
          create: {
            slug: this.toSlug(label),
            name_en: label,
            name_fr: label,
            category: this.getServiceCategory(label),
          },
        }),
      ),
    );

    const selectedIndustries = await Promise.all(
      normalizedIndustries.map((label) =>
        this.prisma.industry.upsert({
          where: { slug: this.toSlug(label) },
          update: {
            name_en: label,
            name_fr: label,
          },
          create: {
            slug: this.toSlug(label),
            name_en: label,
            name_fr: label,
          },
        }),
      ),
    );

    return this.prisma.lead.create({
      data: {
        fullName: name,
        ...rest,
        services: {
          create: selectedServices.map((item) => ({
            service: { connect: { id: item.id } },
          })),
        },
        industries: {
          create: selectedIndustries.map((item) => ({
            industry: { connect: { id: item.id } },
          })),
        },
      },
      include: {
        services: { include: { service: true } },
        industries: { include: { industry: true } },
      },
    });
  }

  async findAll(query: QueryLeadDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const where = {
      ...(query.status ? { status: query.status } : {}),
      ...(query.source ? { source: query.source } : {}),
      ...(query.search
        ? {
            OR: [
              { fullName: { contains: query.search, mode: 'insensitive' as const } },
              { email: { contains: query.search, mode: 'insensitive' as const } },
              { company: { contains: query.search, mode: 'insensitive' as const } },
              { message: { contains: query.search, mode: 'insensitive' as const } },
            ],
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.prisma.lead.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          services: { include: { service: true } },
          industries: { include: { industry: true } },
        },
      }),
      this.prisma.lead.count({ where }),
    ]);

    return {
      items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private toSlug(value: string) {
    return value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private getServiceCategory(label: string): 'GROWTH' | 'CREATIVE' | 'BUILD' | 'AUTOMATE' {
    const lower = label.toLowerCase();
    if (lower.includes('creative') || lower.includes('brand')) return 'CREATIVE';
    if (lower.includes('automation') || lower.includes('cloud')) return 'AUTOMATE';
    if (lower.includes('technology') || lower.includes('development')) return 'BUILD';
    return 'GROWTH';
  }
}