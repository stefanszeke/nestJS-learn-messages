import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { RequestMessageDto } from './dtos/request-message.dto';
import { MessagesService } from './messages.service';

@Controller('/message')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}


  @Get() // get all messages
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id') // get message by id
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException(`Message #${id} not found`);
    }

    return message;
  }

  @Post() // post a new message
  createMessage(@Body() body: RequestMessageDto) {
    return this.messagesService.create(body.content);
  }

}
