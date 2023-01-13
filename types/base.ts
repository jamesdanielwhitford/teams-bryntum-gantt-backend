export interface Base {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseParanoid extends Base {
  deletedAt: Date;
}
