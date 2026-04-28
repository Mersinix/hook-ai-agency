import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  async getContactOptions() {
    const [services, industries] = await Promise.all([
      this.prisma.service.findMany({ orderBy: { name_en: 'asc' } }),
      this.prisma.industry.findMany({ orderBy: { name_en: 'asc' } }),
    ]);

    return {
      services: services.map((item) => item.name_en),
      industries: industries.map((item) => item.name_en),
    };
  }

  async getServices(query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const where = query.search
      ? {
          OR: [
            { name_en: { contains: query.search, mode: 'insensitive' as const } },
            { name_fr: { contains: query.search, mode: 'insensitive' as const } },
            { slug: { contains: query.search, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const [items, total] = await Promise.all([
      this.prisma.service.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.service.count({ where }),
    ]);

    return this.paginated(items, total, page, limit);
  }

  async getIndustries(query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const where = query.search
      ? {
          OR: [
            { name_en: { contains: query.search, mode: 'insensitive' as const } },
            { name_fr: { contains: query.search, mode: 'insensitive' as const } },
            { slug: { contains: query.search, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const [items, total] = await Promise.all([
      this.prisma.industry.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.industry.count({ where }),
    ]);

    return this.paginated(items, total, page, limit);
  }

  async getCaseStudies(query: PaginationQueryDto & { service?: string; industry?: string }) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const where = {
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: 'insensitive' as const } },
              { description: { contains: query.search, mode: 'insensitive' as const } },
              { headline: { contains: query.search, mode: 'insensitive' as const } },
            ],
          }
        : {}),
      ...(query.industry
        ? {
            industry: {
              name_en: { equals: query.industry, mode: 'insensitive' as const },
            },
          }
        : {}),
      ...(query.service
        ? {
            services: {
              some: {
                service: { name_en: { equals: query.service, mode: 'insensitive' as const } },
              },
            },
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.prisma.caseStudy.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
        include: {
          industry: true,
          services: { include: { service: true } },
        },
      }),
      this.prisma.caseStudy.count({ where }),
    ]);

    return this.paginated(items, total, page, limit);
  }

  async getFaqs() {
    return this.prisma.fAQ.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async getTestimonials() {
    return this.prisma.testimonial.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async createFaq(data: { question: string; answer: string; sortOrder?: number }) {
    return this.prisma.fAQ.create({
      data,
    });
  }

  async updateFaq(id: string, data: { question?: string; answer?: string; isPublished?: boolean; sortOrder?: number }) {
    await this.requireFaq(id);
    return this.prisma.fAQ.update({
      where: { id },
      data,
    });
  }

  async removeFaq(id: string) {
    await this.requireFaq(id);
    return this.prisma.fAQ.delete({ where: { id } });
  }

  async createTestimonial(data: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
    stars?: number;
    sortOrder?: number;
  }) {
    return this.prisma.testimonial.create({ data });
  }

  async updateTestimonial(
    id: string,
    data: {
      quote?: string;
      author?: string;
      role?: string;
      avatar?: string;
      stars?: number;
      isPublished?: boolean;
      sortOrder?: number;
    },
  ) {
    await this.requireTestimonial(id);
    return this.prisma.testimonial.update({ where: { id }, data });
  }

  async removeTestimonial(id: string) {
    await this.requireTestimonial(id);
    return this.prisma.testimonial.delete({ where: { id } });
  }

  private paginated<T>(items: T[], total: number, page: number, limit: number) {
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

  private async requireFaq(id: string) {
    const row = await this.prisma.fAQ.findUnique({ where: { id } });
    if (!row) throw new NotFoundException(`FAQ ${id} not found`);
  }

  private async requireTestimonial(id: string) {
    const row = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!row) throw new NotFoundException(`Testimonial ${id} not found`);
  }
}
