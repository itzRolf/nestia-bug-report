import { TypedFormData, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './types/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Patch()
  async update(@TypedFormData.Body() body: IUser): Promise<IUser> {
    return this.appService.update(body);
  }
}
