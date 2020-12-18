import { Epic as ReduxEpic } from 'redux-observable';
import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>;
  }
}

declare module 'ROOT' {
  export type Store = StateType<typeof import('./store').default>;

  export type State = StateType<typeof import('./root-reducer').default>;

  export type Action = ActionType<typeof import('./root-action').default>;

  export type Epic = ReduxEpic<Action, Action, State>
}
