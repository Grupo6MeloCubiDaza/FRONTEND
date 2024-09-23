import * as jspb from 'google-protobuf'



export class Task extends jspb.Message {
  getId(): number;
  setId(value: number): Task;

  getTitle(): string;
  setTitle(value: string): Task;

  getDescription(): string;
  setDescription(value: string): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
  }
}

export class TaskRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TaskRequest;

  getTitle(): string;
  setTitle(value: string): TaskRequest;

  getDescription(): string;
  setDescription(value: string): TaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRequest): TaskRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRequest;
  static deserializeBinaryFromReader(message: TaskRequest, reader: jspb.BinaryReader): TaskRequest;
}

export namespace TaskRequest {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
  }
}

export class TaskResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): TaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskResponse): TaskResponse.AsObject;
  static serializeBinaryToWriter(message: TaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskResponse;
  static deserializeBinaryFromReader(message: TaskResponse, reader: jspb.BinaryReader): TaskResponse;
}

export namespace TaskResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class TaskListResponse extends jspb.Message {
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): TaskListResponse;
  clearTasksList(): TaskListResponse;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListResponse): TaskListResponse.AsObject;
  static serializeBinaryToWriter(message: TaskListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListResponse;
  static deserializeBinaryFromReader(message: TaskListResponse, reader: jspb.BinaryReader): TaskListResponse;
}

export namespace TaskListResponse {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

