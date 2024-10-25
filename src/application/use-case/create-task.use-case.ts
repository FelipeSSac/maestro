import { Injectable } from "@nestjs/common"
import { CreateTaskDTO } from "../dto/create-task.dto"
import { Task } from "../../domain/entity/task"
import { randomUUID } from "crypto"
import { TaskRepository } from "../../domain/repository/task.repository"

@Injectable()
class CreateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository
  ) {}

  public async create(dto: CreateTaskDTO): Promise<Task> {
    const id = randomUUID()

    const task = new Task(
      id,
      dto.title,
      dto.description,
      dto.projectId
    )

    await this.taskRepository.save(task)

    return task;
  }

}

export { CreateTaskUseCase }
