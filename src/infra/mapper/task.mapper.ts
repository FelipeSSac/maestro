import { Task } from "../../domain/entity/task";
import { TaskEntity } from "../persistence/typeorm/entity/task.entity";

class TaskMapper {
  public static toPersistence(task: Task): TaskEntity {
    return new TaskEntity(
      task.id,
      task.title,
      task.description,
      task.projectId,
      task.createdAt,
      task.updatedAt,
    )
  }

  public static toDomain(taskEntity: TaskEntity): Task {
    return new Task(
      taskEntity.id,
      taskEntity.title,
      taskEntity.description,
      taskEntity.projectId,
      taskEntity.createdAt,
      taskEntity.updatedAt,
    )
  }
}
