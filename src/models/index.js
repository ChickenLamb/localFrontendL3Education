// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SUBSCRIPTION, STUDENT, COURSES, TEACHER } = initSchema(schema);

export {
  SUBSCRIPTION,
  STUDENT,
  COURSES,
  TEACHER
};