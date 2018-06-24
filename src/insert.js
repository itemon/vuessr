console.log('just print insert script')

async function promiseSomething () {
  const letency = await '123'
  console.log('letency is ', letency)
  return 'watching event'
}

promiseSomething().then(v => {
  console.log('got promise ', v)
})
