let a = 5;
let b = 7;

console.log(a, b);
a = b;
b = a;
const temp = a;
a = b;
b = temp;
console.log(a, b);

//------------------
let x = 5;
let y = 7;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

//--------explain the code-------------------
let a = 5;
let b = 7;

console.log(a, b); // প্রথম আউটপুট: a = 5, b = 7

// এখানে ভুলভাবে swap করার চেষ্টা করা হয়েছে
a = b; // a এর মান b এর সমান করা হচ্ছে, এখন a = 7
b = a; // b এর মান আবারও a এর সমান করা হচ্ছে, কিন্তু এখানে b ইতিমধ্যেই 7 হয়ে গেছে

// এবার temp ভেরিয়েবল ব্যবহার করে সঠিক swap করা হচ্ছে
const temp = a; // temp এ a এর মান সংরক্ষণ করা (7)
a = b;          // a এ b এর মান দেয়া হচ্ছে (7)
b = temp;       // b তে temp এর মান দেয়া হচ্ছে, যা a এর পুরোনো মান ছিল (7)

console.log(a, b); // আউটপুট হবে: 7 7 (যেহেতু উপরের কোড ব্লকে কোনো মান সঠিকভাবে swap হয়নি)

// ------------------

let x = 5;
let y = 7;
console.log(x, y); // আউটপুট: x = 5, y = 7

// destructuring assignment দিয়ে সরাসরি swap করা হচ্ছে
[x, y] = [y, x]; // x এবং y এর মান একে অপরের সাথে swap করা

console.log(x, y); // আউটপুট: x = 7, y = 5 (swap সফলভাবে হয়েছে)





















JavaScript-এ ভেরিয়েবল swap করার কয়েকটি সাধারণ উপায় আছে। চলো এই তিনটি উপায় দেখি:

### 1. সাধারণভাবে swap (একটি temp ভেরিয়েবল দিয়ে)
এই পদ্ধতিতে একটি অতিরিক্ত `temp` ভেরিয়েবল ব্যবহার করে ভেরিয়েবল swap করা হয়।

```javascript
let a = 5;
let b = 10;

let temp = a; // temp এ a এর মান সংরক্ষণ করা
a = b;        // a তে b এর মান সংরক্ষণ করা
b = temp;     // b তে temp এর মান (আগের a এর মান) সংরক্ষণ করা

console.log(a); // আউটপুট: 10
console.log(b); // আউটপুট: 5
```

### 2. swap করা temp ভেরিয়েবল ছাড়াই
অতিরিক্ত ভেরিয়েবল ছাড়া swap করার একটি উপায় হল যোগ এবং বিয়োগ ব্যবহার করা।

```javascript
let a = 5;
let b = 10;

a = a + b; // a = 5 + 10 = 15
b = a - b; // b = 15 - 10 = 5
a = a - b; // a = 15 - 5 = 10

console.log(a); // আউটপুট: 10
console.log(b); // আউটপুট: 5
```

### 3. destructuring দিয়ে swap করা (সবচেয়ে সহজ উপায়)
JavaScript-এ `destructuring` ব্যবহার করে swap করা যায়।

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a]; // a এবং b এর মান একে অপরের সাথে swap করা

console.log(a); // আউটপুট: 10
console.log(b); // আউটপুট: 5
```

এই তিনটি পদ্ধতির মধ্যে `destructuring` সবচেয়ে সহজ এবং কোড কম রাখে।