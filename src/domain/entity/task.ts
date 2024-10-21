class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description?: string,
    public statusId?: string,
    public priority?: string,
    public projectId?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {
    this.createdAt = createdAt || new Date();
  }
}

export { Task }
