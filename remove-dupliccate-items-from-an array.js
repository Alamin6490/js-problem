/**
 * array has some duplicate elements
 * []
 */


const biryaniKhor = ['abul', 'babul', 'cabul','cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

const numbers = [1, 5,61, 5, 87, 7, 81,61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
 

}

const uniqueArray = noDuplocate(numbers);
console.log(uniqueArray);

// ----- explain the code 

Here’s your code with added comments for better understanding. I also noticed a typo in the function call (`noDuplocate` should be `noDuplicate`), so I've corrected it as well.

```javascript
// Initial array with duplicate names
const biryaniKhor = ['abul', 'babul', 'cabul','cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

// Initial array with duplicate numbers
const numbers = [1, 5, 61, 5, 87, 7, 81, 61];

// Function to remove duplicates from an array
function noDuplicate(array) {
    // Array to store unique elements
    const unique = [];

    // Loop through each element in the input array
    for (const item of array) {
        // Check if the item is not already in the unique array
        if (unique.includes(item) === false) {
            // If it's not included, add it to the unique array
            unique.push(item);
        }
    }

    // Return the array with unique elements
    return unique;
}

// Call the function to remove duplicates from numbers array
const uniqueArray = noDuplicate(numbers);

// Log the result to the console
console.log(uniqueArray);
```

Explanation:
1. The function `noDuplicate` iterates through each item in the array.
2. For each item, it checks if the item is already in the `unique` array.
3. If the item isn’t found in `unique`, it gets added.
4. Finally, the function returns the array of unique values.

Let me know if you have more questions!




জাভাস্ক্রিপ্টে একটি অ্যারেতে ডুপ্লিকেট আইটেম রিমুভ করার সবচেয়ে সহজ উপায় হলো **`Set`** ডেটা স্ট্রাকচার ব্যবহার করা। **`Set`** এমন একটি স্ট্রাকচার, যা শুধুমাত্র ইউনিক (অনন্য) মান রাখে। যখন আমরা একটি অ্যারেকে `Set`-এ কনভার্ট করি, তখন ডুপ্লিকেট মান স্বয়ংক্রিয়ভাবে বাদ চলে যায়। পরে এই `Set`-কে আবার অ্যারেতে রূপান্তরিত করা যায়।

এখন এই পদ্ধতি দিয়ে ডুপ্লিকেট রিমুভ করার কোডটি দেখি:

```javascript
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// Set ব্যবহার করে ডুপ্লিকেট রিমুভ করা হচ্ছে
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

### কোড ব্যাখ্যা:

1. **`new Set(arrayWithDuplicates)`** – এখানে আমরা অ্যারের মানগুলো `Set`-এ কনভার্ট করছি, যা ডুপ্লিকেট মান স্বয়ংক্রিয়ভাবে বাদ দিয়ে দেবে।
2. **`[...new Set(arrayWithDuplicates)]`** – `Set`-কে আবার অ্যারেতে রূপান্তর করতে **স্প্রেড অপারেটর (`...`)** ব্যবহার করছি।

এই কোডটি রান করলে `uniqueArray`-এ শুধুমাত্র ইউনিক আইটেমগুলো থাকবে, এবং ডুপ্লিকেটগুলো বাদ পড়বে।