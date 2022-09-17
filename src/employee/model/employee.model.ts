import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {
    @Field()
    id: number;
    @Field()
    firstName: string;
    @Field({nullable: true})
    lastName: string;
    @Field({nullable: true})
    designation: string;
    @Field({nullable: true})
    city: string;
}