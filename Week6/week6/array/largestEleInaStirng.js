const strings = ['banana','mango','orange','elephant']

const largest = strings.reduce((max, current) => (current > max ? current : max))
console.log(largest);
