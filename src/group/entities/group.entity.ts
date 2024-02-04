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

  @Column({ type: 'float', default: 0 })
  groupBill: string;

  @Column({ type: 'float', default: 0 })
  groupCashDesk: string;

  @Column({ type: 'float', default: 0 })
  groupExpense: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  ownerUser: Relation<User>;
}

@Entity()
export class GroupMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  memberName: string;

  @Column({ type: 'float', default: 0 })
  memberCashDesk: string;

  @Column({ type: 'float', default: 0 })
  memberExpense: string;

  @Column({ type: 'float', default: 0 })
  memberBill: string;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  ownerGroup: Relation<Group>;
}
