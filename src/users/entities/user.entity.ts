import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email: string;

  @Column(() => Date)
  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @Column(() => Date)
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;
}
