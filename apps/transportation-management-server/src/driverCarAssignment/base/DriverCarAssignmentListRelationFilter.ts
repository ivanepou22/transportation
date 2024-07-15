/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DriverCarAssignmentWhereInput } from "./DriverCarAssignmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DriverCarAssignmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DriverCarAssignmentWhereInput,
  })
  @ValidateNested()
  @Type(() => DriverCarAssignmentWhereInput)
  @IsOptional()
  @Field(() => DriverCarAssignmentWhereInput, {
    nullable: true,
  })
  every?: DriverCarAssignmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => DriverCarAssignmentWhereInput,
  })
  @ValidateNested()
  @Type(() => DriverCarAssignmentWhereInput)
  @IsOptional()
  @Field(() => DriverCarAssignmentWhereInput, {
    nullable: true,
  })
  some?: DriverCarAssignmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => DriverCarAssignmentWhereInput,
  })
  @ValidateNested()
  @Type(() => DriverCarAssignmentWhereInput)
  @IsOptional()
  @Field(() => DriverCarAssignmentWhereInput, {
    nullable: true,
  })
  none?: DriverCarAssignmentWhereInput;
}
export { DriverCarAssignmentListRelationFilter as DriverCarAssignmentListRelationFilter };
