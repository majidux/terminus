import { User } from '../../users/entities/user.entity';
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

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  groupName: string;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  ownerUser: Relation<User>;

  @Column(() => Date)
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @Column(() => Date)
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
