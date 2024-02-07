import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  groupName: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  ownerUser: Relation<User>;
}
