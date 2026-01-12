import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthUser } from './interfaces/auth-user.interface';

@Injectable()
export class AuthService {
  async validateUser(loginDto: LoginDto): Promise<AuthUser> {
    const { username, password } = loginDto;

    // MOCK USER, REPLACE WITH FIREBASE LOGIC LATER
    if (username === 'admin' && password === '1234') {
      return {
        username: 'admin',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        birthDate: '1990-01-01',
      };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
