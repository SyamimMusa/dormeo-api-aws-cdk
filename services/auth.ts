export default class AuthService {
    async SignIn(data?: { email: string; password: string }) {
      // Mock authentication logic
      if (data.email === 'test@example.com' && data.password === 'password123') {
        return { token: 'mock-jwt-token' };
      }
      throw new Error('Invalid credentials');
    }
  }
  