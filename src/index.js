// // type Constructor<T = {}> = new (...args: any[]) => T
// // function Timestamped<TBase extends Constructor>(Base: TBase) {
// //   return class extends Base {
// //     timeStamp = Date.now()
// //   }
// // }
// // class User {
// //   name: string
// //   constructor(name: string) {
// //     this.name = name
// //   }
// // }
// // const TimestampedUser = Timestamped(User)
// // const user = new TimestampedUser('John ')
// // // console.log(user.)
// // function Tagged<TBase extends Constructor>(Base: TBase) {
// //   return class extends Base {
// //     tag: string | null
// //     constructor(...args: any[]) {
// //       super(...args)
// //       this.tag = null
// //     }
// //   }
// // }
// // const TaggerUser = Tagged(User)
// // let user1 = new TaggerUser('hangfeg')
// // // user1.
// // function Activatable<TBase extends Constructor>(Base: TBase) {
// //   return class extends Base {
// //     isActivated = false
// //     activate() {
// //       this.isActivated = true
// //     }
// //     deactivate() {
// //       this.isActivated = false
// //     }
// //   }
// // }
// // const Tag = Activatable(User)
// // let t = new Tag('yes')
// // const Special = Activatable(Tagged(Timestamped(User)))
// // const s = new Special('special')
// // s.
// declare namespace React {
//   class Component<Porps = any, State = any> {
//     props: Porps
//     state: State
//   }
// }
// type GreetingProps = {
//   name: string
// }
// class Greeting extends React.Component<GreetingProps> {
//   render() {
//     return <span>htello {this.props.name.}</span>
//   }
// }


// class User {
//   username: string
// }

