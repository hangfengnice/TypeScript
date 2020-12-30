// interface Dinner1 {
//   fish?: number
//   bear?: number
// }

// type Dinner2 = {
//   fish: number
// } | {
//   bear: number
// }

// let d1: Dinner1 = {}

// let d2: Dinner2 = {fish: 1}

// interface Person {
//   addr: {
//     city: string
//   }
// }

// interface Address {
//   city: string
// }

// interface Person1 {
//   addr: Address
// }

// type a = Person1['addr']

interface API {
  '/user': { name: string },
  '/menu': { foods: number },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}


// get('/user').then(user => user.name)
