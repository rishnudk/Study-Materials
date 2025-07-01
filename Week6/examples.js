function* countTo(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

for (const num of countTo(5)) {
  console.log(num); // Logs 1, 2, 3, 4, 5
}
