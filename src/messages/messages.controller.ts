import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('/message')
export class MessagesController {


  @Get() // get all messages
  listMessages() {
    return 'All messages';
  }

  @Get('/:id') // get message by id
  getMessage(@Param('id') id: string) {
    return {"response": `Message ${id}`};
  }

  @Post() // post a new message
  createMessage(@Body() body: any) {
    return {"response": `Message created: ${body.message}`}
  }

}
