function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count)
    }, milliseconds)
  })
}

async function dramaticWelcome(): Promise<void> {
  console.log('hello')
  for(let i = 0; i < 5; i ++) {
    const count: number = await delay(500, i)
    console.log(count)
  }
  console.log('world!')
}

dramaticWelcome()
