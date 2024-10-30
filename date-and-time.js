const today = new Date();
const date = new Date('2062-10-19')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(20911, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));

// unix epoc
// বর্তমান তারিখ ও সময় তৈরি করা
const today = new Date();

// 2062 সালের 19 অক্টোবর নির্দিষ্ট তারিখ সেট করে একটি নতুন Date অবজেক্ট তৈরি করা
const date = new Date('2062-10-19');

// date থেকে মাস বের করা (getMonth() ব্যবহার করে)
// আউটপুট হবে 9 (অক্টোবর হল 0 থেকে শুরু হওয়া সূচকে 9তম মাস)
console.log(date.getMonth()); 

// date থেকে সপ্তাহের দিন বের করা (getDay() ব্যবহার করে)
// আউটপুট হবে 5 (0 = রবিবার, 5 = শুক্রবার)
console.log(date.getDay());

// 20911 সালের 26 জানুয়ারিতে নির্দিষ্ট একটি তারিখ তৈরি করা
const specificDate = new Date(20911, 0, 26);
console.log(specificDate); // অস্বাভাবিক বড় তারিখ দেখাবে (যেমন, 20911-01-26)

// specificDate এর মাস পরিবর্তন করে 10তম মাস (নভেম্বর) করা (setMonth() ব্যবহার করে)
specificDate.setMonth(10);

// তারিখকে 'en-GB' ফরম্যাটে (দিন-মাস-বছর) দেখানো
console.log(specificDate.toLocaleDateString('en-GB')); // আউটপুট হবে "26/11/20911"

























JavaScript-এ `Date` অবজেক্ট দিয়ে তারিখ এবং সময় নিয়ে কাজ করা যায়। এটি তারিখ তৈরি, তারিখের বিভিন্ন অংশ বের করা, এবং সময় গণনা করার জন্য ব্যবহৃত হয়। নিচে কিছু সাধারণ ব্যবহার দেখা যাক:

### 1. Date তৈরি করা
একটি নতুন তারিখ অবজেক্ট তৈরি করতে `new Date()` ব্যবহার করা হয়।

```javascript
const now = new Date();
console.log(now); // বর্তমান তারিখ এবং সময় দেখাবে
```

### 2. নির্দিষ্ট তারিখ তৈরি করা
আপনি যেকোনো নির্দিষ্ট তারিখ দিয়ে `Date` অবজেক্ট তৈরি করতে পারেন।

```javascript
const specificDate = new Date('2022-10-10');
console.log(specificDate); // আউটপুট: 2022-10-10 তারিখ
```

### 3. Date থেকে বিভিন্ন অংশ বের করা
**getFullYear(), getMonth(), getDate(), getDay()** ইত্যাদি মেথড দিয়ে তারিখের বিভিন্ন অংশ বের করা যায়।

```javascript
const date = new Date();
console.log(date.getFullYear()); // বর্তমান বছর দেখাবে
console.log(date.getMonth());    // বর্তমান মাস (0 থেকে শুরু করে, অর্থাৎ 0 = জানুয়ারি)
console.log(date.getDate());     // বর্তমান দিন (তারিখ)
console.log(date.getDay());      // সপ্তাহের দিন (0 = রবিবার)
```

### 4. সময় বের করা
**getHours(), getMinutes(), getSeconds()** ইত্যাদি মেথড দিয়ে সময়ের বিভিন্ন অংশ বের করা যায়।

```javascript
console.log(date.getHours());   // বর্তমান সময় (ঘন্টা)
console.log(date.getMinutes()); // বর্তমান সময় (মিনিট)
console.log(date.getSeconds()); // বর্তমান সময় (সেকেন্ড)
```

### 5. টাইমস্ট্যাম্প বা মি. সেকেন্ড
`getTime()` মেথড দিয়ে ১ জানুয়ারি, ১৯৭০ থেকে বর্তমান সময় পর্যন্ত মি. সেকেন্ড হিসেবে সময় বের করা যায়। এটি দুটি সময়ের পার্থক্য বের করতে সহায়ক।

```javascript
const timestamp = date.getTime();
console.log(timestamp); // মি. সেকেন্ডে বর্তমান সময়
```

### 6. তারিখ সেট করা
**setFullYear(), setMonth(), setDate()** মেথডগুলো দিয়ে তারিখ পরিবর্তন করা যায়।

```javascript
date.setFullYear(2023);
console.log(date); // বছর ২০২৩-এ সেট হবে
```

এই ফাংশনগুলো দিয়ে JavaScript-এ তারিখ এবং সময় নিয়ে বিভিন্ন কাজ সহজেই করা যায়।