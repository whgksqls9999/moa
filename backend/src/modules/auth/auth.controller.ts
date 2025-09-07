import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto);
    }
}
