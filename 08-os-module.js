const os = require('os');


const user = os.userInfo()
console.log(user);

//method returs system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);

function totalMemoryInGB(amountInBytes) {
  let amountInKilobytes = amountInBytes / 1024;
  let amountInMegabytes = amountInKilobytes / 1024;
  let amountInGigabytes = amountInMegabytes / 1024;
  return amountInGigabytes;
}

console.log(`The total RAM of my computer is ${currentOS.totalMem} bytes, or ${totalMemoryInGB(currentOS.totalMem)} GB.`);
console.log(`The total free RAM of my computer is ${currentOS.freeMem} bytes, or ${totalMemoryInGB(currentOS.freeMem)} GB.`);