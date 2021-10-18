import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity("sleep")
export class Sleep extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  bedTime: string;

  @Field(() => String)
  @Column()
  wakeUp: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.sleeps, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
