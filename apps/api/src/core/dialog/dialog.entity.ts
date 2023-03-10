import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { AccountEntity } from '../account/account.entity';

@Entity({ name: 'dialog' })
export class DialogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  dialog: string;

  // @Column({ nullable: false })
  // nickname: string;

  @CreateDateColumn()
  createDate: string;

  @ManyToOne(
    type => AccountEntity,
    account => account.dialog,
    { eager: false },
  )
  account: AccountEntity;
}
