let spinArray = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];
let delay = -100;
spinArray.forEach((input, index) => {
  if (index === spinArray.length - 1) {
    setTimeout(() => {
      console.log(input);
    }, (delay += 200));
    return;
  }
  setTimeout(() => {
    process.stdout.write(input);
  }, (delay += 200));
});
