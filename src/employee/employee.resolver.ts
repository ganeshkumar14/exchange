import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee.model';

@Resolver(()=>Employee)
export class EmployeeResolver {

    constructor(private readonly employeeService: EmployeeService) { }

    @Query(()=> [Employee])
    async findAll(): Promise<Employee[]>{
        return this.employeeService.findAll();
    }

    @Mutation(()=>Employee)
    async create(@Args('data') data: EmployeeCreateDTO): Promise<Employee>{
        return this.employeeService.create(data);
    }
}
