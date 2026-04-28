import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const services = [
  { slug: 'growth-marketing', name: 'Growth & Marketing', category: 'GROWTH' as const },
  { slug: 'creative-branding', name: 'Creative & Branding', category: 'CREATIVE' as const },
  { slug: 'technology-development', name: 'Technology & Development', category: 'BUILD' as const },
  { slug: 'ai-automation-cloud', name: 'AI Automation & Cloud', category: 'AUTOMATE' as const },
  { slug: 'other', name: 'Other', category: 'GROWTH' as const },
];

const industries = [
  { slug: 'real-estate', name: 'Real Estate' },
  { slug: 'hospitality-restaurants', name: 'Hospitality & Restaurants' },
  { slug: 'beauty-fashion', name: 'Beauty & Fashion' },
  { slug: 'sports-education', name: 'Sports & Education' },
  { slug: 'travel-agencies', name: 'Travel Agencies' },
  { slug: 'it-saas', name: 'IT & SaaS' },
  { slug: 'other', name: 'Other' },
];

async function main() {
  console.log('🌱 Seeding HOOK...');

  for (const item of services) {
    await prisma.service.upsert({
      where: { slug: item.slug },
      update: { name_en: item.name, name_fr: item.name, category: item.category },
      create: {
        slug: item.slug,
        name_en: item.name,
        name_fr: item.name,
        category: item.category,
      },
    });
  }

  for (const item of industries) {
    await prisma.industry.upsert({
      where: { slug: item.slug },
      update: { name_en: item.name, name_fr: item.name },
      create: { slug: item.slug, name_en: item.name, name_fr: item.name },
    });
  }

  await prisma.fAQ.deleteMany({});
  await prisma.fAQ.createMany({
    data: [
      {
        question: 'What types of businesses do you work with?',
        answer:
          "We work with startups, scale-ups, and growth-stage companies across SaaS, e-commerce, and professional services.",
        sortOrder: 0,
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'Most projects take 2-8 weeks depending on scope. We provide a clear timeline during discovery.',
        sortOrder: 1,
      },
      {
        question: 'Do you offer ongoing support after launch?',
        answer:
          'Yes, we provide ongoing support retainers for monitoring, optimization, and iteration.',
        sortOrder: 2,
      },
    ],
  });

  await prisma.testimonial.deleteMany({});
  await prisma.testimonial.createMany({
    data: [
      {
        quote:
          'Hook transformed our digital growth. We now have a predictable acquisition system running continuously.',
        author: 'Sarah M.',
        role: 'CEO, E-Commerce Startup',
        avatar: 'SM',
        stars: 5,
        sortOrder: 0,
      },
      {
        quote:
          'The AI automation replaced over 20 hours of manual work weekly. ROI was visible in month one.',
        author: 'James K.',
        role: 'Founder, SaaS Company',
        avatar: 'JK',
        stars: 5,
        sortOrder: 1,
      },
    ],
  });

  const realEstate = await prisma.industry.findUnique({ where: { slug: 'real-estate' } });
  const automate = await prisma.service.findUnique({ where: { slug: 'ai-automation-cloud' } });

  if (realEstate && automate) {
    const caseStudy = await prisma.caseStudy.upsert({
      where: { slug: 'ai-lead-qualification-engine' },
      update: {
        title: 'AI Lead Qualification Engine',
        headline: 'Tripled qualified pipeline through AI routing and nurturing',
        description:
          'AI system that scored, routed, and nurtured inbound leads automatically for a real estate group.',
        type: 'AUTOMATION',
        metricValue: '+3x',
        metricLabel: 'Qualified leads',
        status: 'FEATURED',
        featured: true,
        industryId: realEstate.id,
      },
      create: {
        slug: 'ai-lead-qualification-engine',
        title: 'AI Lead Qualification Engine',
        headline: 'Tripled qualified pipeline through AI routing and nurturing',
        description:
          'AI system that scored, routed, and nurtured inbound leads automatically for a real estate group.',
        type: 'AUTOMATION',
        metricValue: '+3x',
        metricLabel: 'Qualified leads',
        status: 'FEATURED',
        featured: true,
        industryId: realEstate.id,
      },
    });

    await prisma.caseStudyService.upsert({
      where: {
        caseStudyId_serviceId: {
          caseStudyId: caseStudy.id,
          serviceId: automate.id,
        },
      },
      update: {},
      create: { caseStudyId: caseStudy.id, serviceId: automate.id },
    });
  }

  await prisma.user.upsert({
    where: { email: 'admin@hook.agency' },
    update: {},
    create: {
      email: 'admin@hook.agency',
      password: 'hashed-password-here',
      name: 'HOOK Admin',
      role: 'ADMIN',
    },
  });

  await prisma.analyticsEvent.create({
    data: {
      eventName: 'seed_completed',
      payload: { app: 'api' },
    },
  });

  console.log('✅ Seed completed');
}

main()
  .catch((error) => {
    console.error('❌ Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });