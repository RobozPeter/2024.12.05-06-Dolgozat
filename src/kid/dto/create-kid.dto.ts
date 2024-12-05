import { IsBoolean, IsNotEmpty, IsString, isString } from "class-validator"

export class CreateKidDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    address: string
    @IsBoolean()
    @IsNotEmpty()
    goodOrBad: boolean
}
