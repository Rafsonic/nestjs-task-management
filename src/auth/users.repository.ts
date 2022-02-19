import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(credentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = credentialsDto;

    const user = this.create({ username, password });
    await this.save(user);
  }
}
