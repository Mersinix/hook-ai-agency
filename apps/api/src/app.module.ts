import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LeadModule } from './modules/lead/lead.module';
import { ContentModule } from './modules/content/content.module';

@Module({
  imports: [PrismaModule, LeadModule, ContentModule],
})
export class AppModule {}