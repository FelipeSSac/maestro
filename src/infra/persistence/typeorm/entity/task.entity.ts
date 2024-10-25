import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'tasks' })
class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ type: 'varchar', length: 255 })
  public title: string;

  @Column({ type: 'text', nullable: true })
  public description?: string | null;

  @Column({ type: 'uuid', nullable: true })
  public projectId?: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt?: Date;

  constructor(
    id: string,
    title: string,
    description?: string | null,
    projectId?: string | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
  ) {
    this.id = id ?? uuidv4();
    this.title = title;
    this.description = description ?? null;
    this.projectId = projectId ?? null;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}

export { TaskEntity };
