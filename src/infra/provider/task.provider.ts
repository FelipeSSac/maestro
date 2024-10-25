
import { DataSource } from 'typeorm';
import { TaskEntity } from '../persistence/typeorm/entity/task.entity';

const TaskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TaskEntity),
    inject: ['DATA_SOURCE'],
  },
];

export { TaskProviders }
