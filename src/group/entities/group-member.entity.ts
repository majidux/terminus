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
import { Group } from './group.entity';

@Entity()
export class GroupMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  memberName: string;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  ownerGroup: Relation<Group>;

  @Column(() => Date)
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @Column(() => Date)
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
