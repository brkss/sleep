import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Sleep } from "./Sleep";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email?: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => [Sleep])
  @OneToMany(() => Sleep, (sleeps) => sleeps.user)
  sleeps: Sleep[];
}
