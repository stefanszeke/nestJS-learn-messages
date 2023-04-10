import { MessagesRepository } from "./messages.repository";
import { Injectable } from '@nestjs/common'

@Injectable()
export class MessagesService {

  constructor(private messagesRepository: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async findAll() {
    return this.messagesRepository.findAll();
  }

  async create(content: string) {
    return this.messagesRepository.create(content);
  }
}