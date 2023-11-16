# React En to Bn ( English to Bangla) Convertion

A utility package providing functions to convert English numerals and date-time to Bengali numerals and date-time representations in React applications.

## Installation

You can install this package via npm or yarn:

```bash
npm install react-en-bn
# or
yarn add react-en-bn
```

## Usage 

### `toBN`
Converts English numerals to Bengali numerals.

```
import { toBN } from 'react-en-bn';

const currentDate   = '07-10-2023'
const bnNumber = toBN(currentDate); // Output: '০৭-১০-২০২৩'

```

### `toBnDateTime` 
Converts English date-time to Bengali date-time representation.

```
import { toBnDateTime } from 'react-en-bn';

const enDateTime = '2023-11-14 12:45:00';
const bnDateTime = toBnDateTime(enDateTime); // Output: '২০২৩-১১-১৪, ১২:৪৫:০০ অপরাহ্ণ'

```

### `toBnMonthDateTime`

Converts English date-time to Bengali date-time with the month name.

```
import { toBnMonthDateTime } from 'react-en-bn';

const enDateTime = '2023-11-14 12:45:00';
const bnDateTimeMonth = toBnDateTimeMonth(enDateTime); // Output: '১৪ নভেম্বর ২০২৩, ১২ টা ৪৫ মিনিট অপরাহ্ণ'

```




