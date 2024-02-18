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

@Entity()
export class GroupAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', default: 0 })
  bill: string;

  @Column({ type: 'float', default: 0 })
  cashDesk: string;

  @Column({ type: 'float', default: 0 })
  expense: string;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  groupId: Relation<Group>;

  @Column(() => Date)
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @Column(() => Date)
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
