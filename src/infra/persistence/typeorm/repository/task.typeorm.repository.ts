import { Inject, Injectable } from "@nestjs/common";
import { TaskRepository } from "../../../../domain/repository/task.repository";
import { Repository } from "typeorm";
import { TaskEntity } from "../entity/task.entity";

@Injectable()
class TaskTypeOrmRepository implements TaskRepository {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<TaskEntity>,
  ) {}

  public async save(task: TaskEntity): Promise<void> {
    await this.taskRepository.save(task)
  }

}

export { TaskTypeOrmRepository }
