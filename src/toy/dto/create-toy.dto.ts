import { Contains, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateToyDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    @IsIn(["plastic","wood","metal","other"])
    material: string
    @IsNumber()
    @IsNotEmpty()
    weight: number
}
