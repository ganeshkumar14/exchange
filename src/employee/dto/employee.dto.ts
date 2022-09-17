import { Field, InputType } from "@nestjs/graphql";
import { Type } from '@nestjs/common';


@InputType()
export class EmployeeCreateDTO {
    @Field()
    firstName: string;
    @Field({nullable:true})
    lastName?: string;
    @Field({nullable:true})
    designation?: string;
    @Field({nullable:true})
    city?: string;
}