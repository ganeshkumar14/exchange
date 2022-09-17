import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeCreateDTO } from './dto/employee.dto';
import { Employee } from './model/employee.model';

@Injectable()
export class EmployeeService {

    constructor(private readonly prisma: PrismaService){}

    async findAll(): Promise<Employee[]> {
        return this.prisma.employee.findMany();
    }

    async create(data: EmployeeCreateDTO): Promise<Employee> {
        return this.prisma.employee.create({ data });
    }
}
