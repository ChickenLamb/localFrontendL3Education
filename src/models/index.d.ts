import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SUBSCRIPTIONMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type STUDENTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type COURSESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TEACHERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SUBSCRIPTION {
  readonly id: string;
  readonly coursesID?: string | null;
  readonly studentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SUBSCRIPTION, SUBSCRIPTIONMetaData>);
  static copyOf(source: SUBSCRIPTION, mutator: (draft: MutableModel<SUBSCRIPTION, SUBSCRIPTIONMetaData>) => MutableModel<SUBSCRIPTION, SUBSCRIPTIONMetaData> | void): SUBSCRIPTION;
}

export declare class STUDENT {
  readonly id: string;
  readonly name?: string | null;
  readonly SUBSCRIPTIONS?: (SUBSCRIPTION | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<STUDENT, STUDENTMetaData>);
  static copyOf(source: STUDENT, mutator: (draft: MutableModel<STUDENT, STUDENTMetaData>) => MutableModel<STUDENT, STUDENTMetaData> | void): STUDENT;
}

export declare class COURSES {
  readonly id: string;
  readonly teacherID?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly SUBSCRIPTIONS?: (SUBSCRIPTION | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<COURSES, COURSESMetaData>);
  static copyOf(source: COURSES, mutator: (draft: MutableModel<COURSES, COURSESMetaData>) => MutableModel<COURSES, COURSESMetaData> | void): COURSES;
}

export declare class TEACHER {
  readonly id: string;
  readonly COURSES?: (COURSES | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TEACHER, TEACHERMetaData>);
  static copyOf(source: TEACHER, mutator: (draft: MutableModel<TEACHER, TEACHERMetaData>) => MutableModel<TEACHER, TEACHERMetaData> | void): TEACHER;
}