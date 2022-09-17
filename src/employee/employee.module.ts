import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';

@Module({
  providers: [EmployeeResolver, EmployeeService, PrismaService]
})
export class EmployeeModule {}
