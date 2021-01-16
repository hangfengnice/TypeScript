// export type Key = string | number | symbol

// export type Raw = object

// export type ReactiveProxy = object

// export type ReactionFunction = Function & {
//   cleaners?: ReactionForKey[]
// }

// export type ReactionForRaw = Map<Key, ReactionForKey>

// export type ReactionForKey = Set<ReactionFunction>

// export interface Operation {
//   type: "get" | "iterate" | "add" | "set" | "delete" | "clear" | "has"
//   target: object
//   key?: Key
//   receiver?: any
//   value?: any
//   oldValue?: any
// }

// // 用来存储原始值和响应式proxy的映射
// export const proxyToRaw = new WeakMap<ReactiveProxy, Raw>()
// // 用来存储响应式proxy和原始值的映射
// export const rawToProxy = new WeakMap<Raw, ReactiveProxy>()

// const connectionStore = new WeakMap<Raw, ReactionForRaw>()

// function storeObservable(value: object) {
//   // 存储对象和它内部的key -> reaction的映射
//   connectionStore.set(value, new Map() as ReactionForRaw)
// }

// function createReactive<T extends Raw>(raw: T): T {
//   const reactive = new Proxy(raw, baseHandlers)
//   rawToProxy.set(raw, reactive)
//   proxyToRaw.set(reactive, raw)

//   storeObservable(raw)

//   return reactive as T
// }
// const reactionStack: ReactionFunction[] = []

// function get(target: Raw, key: Key, receiver: ReactiveProxy) {
//   const result = Reflect.get(target, key, receiver)

//   registerRunningReaction({target, key, receiver, type: 'get'})

//   return result
// }

// export function registerRunningReaction(operation: Operation) {
//   const runningReaction = getRunningReaction()
//   if (runningReaction) {
//     const reactionsForRaw = connectionStore.get(target)
//     let reactionsForKey = reactionsForRaw.get(key)

//       if (!reactionsForKey) {
//         // 如果这个key之前没有收集过观察函数 就新建一个
//         reactionsForKey = new Set()
//         // set到整个value的存储里去
//         reactionsForRaw.set(key, reactionsForKey)
//       }

//       if (!reactionsForKey.has(reaction)) {
//         // 把这个key对应的观察函数收集起来
//         reactionsForKey.add(reaction)
//         // 把key收集的观察函数集合 加到cleaners队列中 便于后续取消观察
//         reaction.cleaners.push(reactionsForKey)
//       }
//   }
// }

// function getRunningReaction() {
//   const [runningReaction] = reactionStack.slice(-1)
//   return runningReaction
// }



