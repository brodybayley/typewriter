const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 50)
// }

for (const char of sentence) {
  delay(char)
}

function delay(char) {
  setTimeout(() => {
    process.stdout.write(char)
  }, 10000)
}
