import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { GroupMember } from '../../group/entities/group-member.entity';

@Entity()
export class MemberAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  ownerGroup: Relation<Group>;

  @Column()
  expenseName: string;

  @ManyToOne(() => GroupMember, (member) => member.id)
  @JoinColumn()
  ownerMember: Relation<GroupMember>;

  @Column({ type: 'float', default: 0 })
  paid: string;

  @Column(() => Date)
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @Column(() => Date)
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
