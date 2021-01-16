// export type Raw = object
// export type ReactiveProxy = object

// export const proxyToRaw = new WeakMap<ReactiveProxy, Raw>()

// export const rawToProxy = new WeakMap<Raw, ReactiveProxy>()

// const connectionStore = new WeakMap<Raw, ReactionForRaw>()

// function createReactive<T extends Raw>(raw: T): T {
//   const reactive = new Proxy(raw, baseHandlers)

//   rawToProxy.set(raw, reactive)
//   proxyToRaw.set(reactive, raw)

//   storeObservable(raw)

//   return reactive as T
// }

// function storeObservable(value: object) {
//   connectionStore.set(value, new Map() as ReactionForRaw)
// }


// export type ReactionForRaw = Map<Key, ReactionForKey>
// export type ReactionForKey = Set<ReactionFunction>

// // 收集响应依赖的的函数
// export type ReactionFunction = Function & {
//   cleaners?: ReactionForKey[]
//   unobserved?: boolean
// }

