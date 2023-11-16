// General en to Bn

export const toBN = (n) => {
    return n?.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}

// En to bn date time 
export const toBnDateTime = (dateTimeString) => {
    const numbersToBn = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };

    const [datePart, timePart]   = dateTimeString.split(' ');
    const [year, month, day]     = datePart.split('-');
    const [hour, minute, second] = timePart.split(':');

    const bnDate = `${day.replace(/\d/g, d => numbersToBn[d] || d)}-${month.replace(/\d/g, d => numbersToBn[d] || d)}-${year.replace(/\d/g, d => numbersToBn[d] || d)}`;

    let bnTime = '';
    if (hour === '00') {
        bnTime = '১২';
    } else if (parseInt(hour, 10) <= 12) {
        bnTime = parseInt(hour, 10).toString().replace(/\d/g, d => numbersToBn[d] || d);
    } else {
        bnTime = (parseInt(hour, 10) - 12).toString().replace(/\d/g, d => numbersToBn[d] || d);
    }

    bnTime += `:${minute.replace(/\d/g, d => numbersToBn[d] || d)}:${second.replace(/\d/g, d => numbersToBn[d] || d)}`;

    // Add AM or PM in Bengali
    const amPM = parseInt(hour, 10) >= 12 ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ';
    bnTime += ` ${amPM}`;

    return `${bnDate} ${bnTime}`;
}

// En to bn date time with month  
export const toBnMonthDateTime = (n) => {
    const numbersToBn = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };

    const monthsInBengali = {
        '01': 'জানুয়ারী', '02': 'ফেব্রুয়ারী', '03': 'মার্চ', '04': 'এপ্রিল',
        '05': 'মে', '06': 'জুন', '07': 'জুলাই', '08': 'আগস্ট',
        '09': 'সেপ্টেম্বর', '10': 'অক্টোবর', '11': 'নভেম্বর', '12': 'ডিসেম্বর'
    };

    const [datePart, timePart] = dateTimeString.split(' ');
    const [year, month, day]   = datePart.split('-');
    const [hour, minute]       = timePart.split(':');

    const bnDate = `${parseInt(day, 10).toString().replace(/\d/g, d => numbersToBn[d] || d)} ${monthsInBengali[month]} ${parseInt(year, 10).toString().replace(/\d/g, d => numbersToBn[d] || d)}`;

    let bnTime = '';
    if (hour === '00') {
        bnTime = '১২';
    } else if (parseInt(hour, 10) <= 12) {
        bnTime = parseInt(hour, 10).toString().replace(/\d/g, d => numbersToBn[d] || d);
    } else {
        bnTime = (parseInt(hour, 10) - 12).toString().replace(/\d/g, d => numbersToBn[d] || d);
    }

    bnTime += ` টা ${parseInt(minute, 10).toString().replace(/\d/g, d => numbersToBn[d] || d)} মিনিট`;

    // Add AM or PM in Bengali
    const amPM = parseInt(hour, 10) >= 12 ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ';
    bnTime += ` ${amPM}`;

    return `${bnDate}, ${bnTime}`;
}