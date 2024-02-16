import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Group } from './group.entity';

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
