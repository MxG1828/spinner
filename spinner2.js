const array = ["\r|", "\r/", "\r-", "\r\\"];
for (let i = 0; i <= 8; i++) {
  setTimeout(() => {
    process.stdout.write(array[i % 4]);
    if (i === 8) {
      setTimeout(() => {
        console.log();
      }, 300);
    }
  }, 300 * (i + 1));
}
