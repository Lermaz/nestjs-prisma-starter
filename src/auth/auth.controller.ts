import { LoginDto } from './dto/login.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SigupDto } from './dto/signup.dto';
import { AuthEntity } from './entity/auth.entity';
import { TokenEntity } from './entity/token.entity';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() sigupDto: SigupDto) {
    sigupDto.email = sigupDto.email.toLowerCase();
    const { accessToken, refreshToken } = await this.authService.createUser(
      sigupDto,
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto) {
    const { accessToken, refreshToken } = await this.authService.login(
      email.toLowerCase(),
      password,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('refreshToken')
  @ApiOkResponse({ type: TokenEntity })
  async refreshToken(@Body() { token }: RefreshTokenDto) {
    return this.authService.refreshToken(token);
  }
}
