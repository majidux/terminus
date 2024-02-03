import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  TableForeignKey,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  groupName: string;

  @ManyToOne(() => User, (group) => group.id)
  @JoinColumn()
  ownerUser: Relation<User>;
}

@Entity()
export class GroupMember {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  memberName: string;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  ownerGroup: Relation<Group>;
}
