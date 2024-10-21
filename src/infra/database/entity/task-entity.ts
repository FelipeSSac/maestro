import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from "../../../domain/entity/task";

@Entity('task')
class TaskEntity implements Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('varchar')
  description?: string;

  @Column('uuid')
  statusId?: string;

  @Column('integer')
  priority?: string;

  @Column('uuid')
  projectId?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

export { TaskEntity }
