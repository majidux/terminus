import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, default: 'majid' })
  username: string;

  @Prop({ required: true, default: '123' })
  password: string;
}

export const UserModel = SchemaFactory.createForClass(User);

// import {
//   Entity,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   Index,
//   PrimaryGeneratedColumn,
// } from 'typeorm';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//   id: number;

//   @Column({ unique: true })
//   username: string;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   @Column()
//   password: string;

//   @Index({ unique: true })
//   @Column({ type: 'varchar' })
//   email: string;

//   @Column(() => Date)
//   @CreateDateColumn({ type: 'date' })
//   createdAt: Date;

//   @Column(() => Date)
//   @UpdateDateColumn({ type: 'date' })
//   updatedAt: Date;
// }
