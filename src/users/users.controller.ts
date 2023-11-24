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

@Controller('users')
export class UsersController {
  @Get() // GET /users?role=ADMIN
  findAll(@Query('role') role: string) {
    return role;
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: number) {
    return { id };
  }

  @Post() //POST /users
  addUser(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  updateUser(@Param('id') id: number, @Body() user: {}) {
    return user;
  }

  @Delete(':id') //DELETE /users/:id
  deleteOne(@Param('id') id: number) {
    return id;
  }
}
