import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { GroupMember } from '../../group/entities/group-member.entity';

@Entity()
export class MemberAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  groupId: Relation<Group>;

  @Column({ type: 'float', default: 0 })
  groupBill: string;

  @Column({ type: 'float', default: 0 })
  groupCashDesk: string;

  @Column({ type: 'float', default: 0 })
  groupExpense: string;

  @ManyToOne(() => GroupMember, (member) => member.id)
  @JoinColumn()
  memberId: Relation<GroupMember>;
}
