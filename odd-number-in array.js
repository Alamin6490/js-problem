/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 * 1. put odd numbers in an array
 */

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(numbers);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers

   //console.log(odds)  
   let sum = 0;
   for(const number of odds){
    sum = sum +number;
   }
   const count = odds.length;
   console.log(sum, count);
   count avg = sum / count;
   return avg;
}

const numbers = [42,13,58,65,81];
const avg = oddAverage(numbers);
console.log('average of the odd number is:', avg);



//------code explain-------
 

### Function ব্যাখ্যা:

```javascript
function oddAverage(numbers) {
    const odds = []; // শুধু বিজোড় সংখ্যাগুলো সংরক্ষণের জন্য একটি খালি অ্যারে
    
    for (const number of numbers) { // numbers অ্যারের প্রতিটি উপাদানের জন্য লুপ
        if (number % 2 === 1) { // যদি number বিজোড় হয়
            odds.push(number); // তাহলে odds অ্যারেতে সেটি যোগ করা হবে
        }
    }
    // এখন odds অ্যারেতে শুধু বিজোড় সংখ্যাগুলো আছে

    let sum = 0; // সব বিজোড় সংখ্যার যোগফল রাখার জন্য sum ভেরিয়েবল
    for (const number of odds) { // odds অ্যারের প্রতিটি বিজোড় সংখ্যার জন্য লুপ
        sum += number; // sum এর সাথে প্রতিটি বিজোড় সংখ্যা যোগ করা হচ্ছে
    }

    const count = odds.length; // বিজোড় সংখ্যার মোট সংখ্যা বের করা হচ্ছে
    const avg = sum / count; // sum কে count দিয়ে ভাগ করে গড় বের করা হচ্ছে
    return avg; // গড় ফেরত দিচ্ছে
}

// ফাংশনকে কল করা এবং রেজাল্ট দেখা
const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd number is:', avg);
```

### সংক্ষেপে কী কী হচ্ছে:

1. **বিজোড় সংখ্যা সংগ্রহ:** প্রথমে একটি খালি অ্যারে `odds` ডিক্লেয়ার করা হয়েছে, যেখানে শুধু বিজোড় সংখ্যাগুলো যোগ করা হবে।
2. **বিজোড় সংখ্যা যোগ করা:** `for` লুপ ব্যবহার করে `numbers` অ্যারের প্রতিটি সংখ্যা চেক করা হচ্ছে এবং যদি সংখ্যা বিজোড় হয় তবে সেটি `odds` অ্যারেতে যোগ করা হচ্ছে।
3. **বিজোড় সংখ্যা গুলোর যোগফল ও গড়:** দ্বিতীয় লুপে সব বিজোড় সংখ্যা যোগ করে `sum` বের করা হয়েছে। পরে বিজোড় সংখ্যাগুলোর মোট সংখ্যা `count` এবং গড় (`avg`) বের করে সেটি রিটার্ন করেছে।

### আউটপুট:

অ্যারের বিজোড় সংখ্যা `13, 65,` এবং `81`, তাই এদের যোগফল ১৫৯, এবং গড় ৫৩।

---

**নোট:** কোডে `count avg = sum / count;` লাইনে একটি টাইপো আছে। এটি হবে `const avg = sum / count;`