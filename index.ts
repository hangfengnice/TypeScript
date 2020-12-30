type Action =
  | {
      type: "INIT";
    }
  | {
      type: "SYNC";
    }
  | {
      type: "LOG_IN";
      emailAddress: string;
    }
  | {
      type: "LOG_IN_SUCCESS";
      accessToken: string;
    };

type ActionType = Action['type']
type ExtractActionParameters<A, T> = A extends {type: T} ? A : never

declare function dispatch<T extends ActionType>(type: T, args: ExtractActionParameters<Action, T>): void

type Test = ExtractActionParameters<Actoin, 'LOG_IN'>
