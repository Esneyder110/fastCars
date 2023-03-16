import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

import { AuthService } from './auth.service';
import { Public } from './decorators/public/public.decorator';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // TODO tipar el dato que me envia
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('register')
  async register(@Body() payload: CreateUserDto) {
    // Guardar el nuevo usuario en la base de datos
    return this.authService.register(payload);
  }
}
