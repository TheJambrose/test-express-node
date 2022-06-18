const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }

  const first = result;
  console.log('got first result.')

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;
    console.log('got second result.')
    writeFile(
      './content/result-async,txt',
      `Here is the async result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task');
      }
    )
  })
})


console.log('starting the next one');