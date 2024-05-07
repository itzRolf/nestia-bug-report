import { Injectable } from '@nestjs/common';
import { IUser } from './types/user.interface';

@Injectable()
export class AppService {
  async update(body: IUser) {
    return body;
  }
}
