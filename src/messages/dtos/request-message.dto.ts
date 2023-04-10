import { IsString } from 'class-validator'

export class RequestMessageDto {
  @IsString()
  content: string;
}