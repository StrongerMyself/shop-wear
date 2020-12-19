import { Epic } from 'redux-observable';
import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>;
  }
}

declare module 'root-types' {
  export type RootStore = StateType<typeof import('./store').default>;

  export type RootState = StateType<typeof import('./root-reducer').default>;

  export type RootAction = ActionType<typeof import('./root-action').default>;

  export type RootEpic = Epic<RootAction, RootAction, RootState>
}
