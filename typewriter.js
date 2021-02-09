const sentence = "hello there from lighthouse labs";

const finalString = () => {
  let count = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)
    }, count * 50)
    count++;
  };

  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 50)
}


finalString()



