import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ContentService } from './content.service';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { CaseStudyQueryDto } from './dto/case-study-query.dto';
import { CreateFaqDto, UpdateFaqDto } from './dto/faq.dto';
import { CreateTestimonialDto, UpdateTestimonialDto } from './dto/testimonial.dto';

@Controller()
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('metadata/contact-options')
  getContactOptions() {
    return this.contentService.getContactOptions();
  }

  @Get('services')
  getServices(@Query() query: PaginationQueryDto) {
    return this.contentService.getServices(query);
  }

  @Get('industries')
  getIndustries(@Query() query: PaginationQueryDto) {
    return this.contentService.getIndustries(query);
  }

  @Get('case-studies')
  getCaseStudies(@Query() query: CaseStudyQueryDto) {
    return this.contentService.getCaseStudies(query);
  }

  @Get('faqs')
  getFaqs() {
    return this.contentService.getFaqs();
  }

  @Post('faqs')
  createFaq(@Body() body: CreateFaqDto) {
    return this.contentService.createFaq(body);
  }

  @Patch('faqs/:id')
  updateFaq(@Param('id') id: string, @Body() body: UpdateFaqDto) {
    return this.contentService.updateFaq(id, body);
  }

  @Delete('faqs/:id')
  removeFaq(@Param('id') id: string) {
    return this.contentService.removeFaq(id);
  }

  @Get('testimonials')
  getTestimonials() {
    return this.contentService.getTestimonials();
  }

  @Post('testimonials')
  createTestimonial(@Body() body: CreateTestimonialDto) {
    return this.contentService.createTestimonial(body);
  }

  @Patch('testimonials/:id')
  updateTestimonial(@Param('id') id: string, @Body() body: UpdateTestimonialDto) {
    return this.contentService.updateTestimonial(id, body);
  }

  @Delete('testimonials/:id')
  removeTestimonial(@Param('id') id: string) {
    return this.contentService.removeTestimonial(id);
  }
}
