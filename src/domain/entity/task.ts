import { v4 as uuidv4 } from 'uuid';

class Task {
  public readonly id: string;

  public title: string;

  public description?: string | null;

  public projectId?: string | null;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(
    id: string,
    title: string,
    description?: string | null,
    projectId?: string | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
  ) {
    this.id = id ?? uuidv4;
    this.title = title;
    this.description = description ?? null;
    this.projectId = projectId ?? null;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}

export { Task }
