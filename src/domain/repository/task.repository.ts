import { Task } from "../entity/task";

interface TaskRepository {

  save(task: Task): Promise<void>

}

export { TaskRepository }
