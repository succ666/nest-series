import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

  @Get() // GET /users?role=ADMIN
  findAll(@Query('role') role: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role)
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Post() //POST /users
  addUser(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.userService.create(user);
  }

  @Patch(':id') //PATCH /users/:id
  updateUser(@Param('id') id: string, @Body() user: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.userService.update(+id, user);
  }

  @Delete(':id') //DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return this.userService.delete(+id)
  }
}
