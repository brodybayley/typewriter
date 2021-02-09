const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  delay(char)
};

function delay(char) {
  setTimeout(() => {
    process.stdout.write(char)
  }, 50)
}

console.log(delay())

