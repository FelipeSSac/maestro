// infrastructure/database/mappers/user.mapper.ts
import { Task } from '../../../domain/entity/task';
import { TaskEntity } from '../entity/task-entity';

export class UserMapper {
  static toDomain(entity: TaskEntity): Task {
    return new Task(
      entity.id,
      entity.title,
      entity.description,
      entity.statusId,
      entity.priority,
      entity.projectId,
      entity.createdAt,
      entity.updatedAt,
    );
  }

  static toPersistence(domain: Task): TaskEntity {
    const entity = new TaskEntity();
    entity.id = domain.id;
    entity.title = domain.title;
    entity.description = domain.description;
    entity.statusId = domain.statusId;
    entity.priority = domain.priority;
    entity.projectId = domain.projectId;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }
}
