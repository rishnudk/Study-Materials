const map = new Map();

// Add key-value pairs
map.set('name', 'Alice');
map.set(42, 'The Answer');

// Access values
console.log(map.get('name')); // Output: Alice

// Check for a key
console.log(map.has(42)); // Output: true

// Delete a key
map.delete(42);

// Get size
console.log(map.size); // Output: 1

// Iterate through keys and values
for (const [key, value] of map) {
    console.log(key, value);
}
