class Vuex <S, A> {
  state: S
  action: Actions<S, A>
  constructor({state, action}: {state: S, action: Actions<S, A>}) {
    this.state = state
    this.action = action
  }
  dispatch(action: any) {

  }
  createDispatch<A>() {
    return this.dispatch.bind(this) as Dispatch<A>
  }
}
interface Dispatch<A> {
  (action: A): any
}


type Actions<S, A> = {
  [K in keyof A]: (state: S, playload: any) => Promise<any>
}

const ADD = 'ADD';
const CHAT = 'CHAT';

type AddType = typeof ADD;
type ChatType = typeof CHAT;

type ActionTypes =
  | {
      type: AddType;
      payload: number;
    }
  | {
      type: ChatType;
      payload: string;
    };



const store = new Vuex({
  state: {
    count: 0,
    message: ''
  },
  action: {
    async ADD(state, payload) {
      state.count += payload
    },
    async CHAT(state, message) {
      state.message = message
    }
  }
})


const dispatch = store.createDispatch<ActionTypes>()
