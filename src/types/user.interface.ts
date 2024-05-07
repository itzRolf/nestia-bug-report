import { tags } from 'typia';

export interface IUser {
  name: string & tags.MaxLength<24>;
  description: string & tags.MaxLength<500>;
}
