import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Group } from '../../group/entities/group.entity';

export class GroupAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', default: 0 })
  groupBill: string;

  @Column({ type: 'float', default: 0 })
  groupCashDesk: string;

  @Column({ type: 'float', default: 0 })
  groupExpense: string;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  groupId: Relation<Group>;
}
