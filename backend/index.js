const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(cors());

function getBirthday(timestamp) {

    let dateObject = new Date(Number(timestamp));

    // Check if the date is valid
    if (isNaN(dateObject.getTime())) {
        return 'Invalid date';
    }

    let monthNumber = dateObject.getMonth() + 1;
    let month;
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();

    switch(monthNumber) {
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
        default: month = "Unknown"; break;
    }

    return `${month} ${day}, ${year}`;
}

function getAge(timestamp) {

    let birthDate = new Date(Number(timestamp));
    let dateToday = new Date();

    let age = dateToday.getFullYear() - birthDate.getFullYear();
    let monthDifference = dateToday.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && dateToday.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function getDaysUntilNextBirthday(timestamp) {

    let birthDate = new Date(Number(timestamp));
    let dateToday = new Date();

      // Create UTC-only dates
    const currentYear = dateToday.getUTCFullYear();
    const nextBirthday = new Date(Date.UTC(currentYear, birthDate.getUTCMonth(), birthDate.getUTCDate()));

    if (nextBirthday < dateToday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    let difference = nextBirthday - dateToday;
    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

function isLeapYear(timestamp) {
    let year = new Date(timestamp).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getZodiacSign(timestamp) {
    let dateObject = new Date(Number(timestamp));
    let month = dateObject.getMonth() + 1; 
    let day = dateObject.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";

    return "Unknown";
}

function getChineseZodiacSign(timestamp) {
    const birthDate = new Date(Number(timestamp));
    const year = birthDate.getFullYear();
    const zodiac = [
        "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
        "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"
    ];
    return zodiac[year % 12];
}

function getLifeRemainingYears(timestamp) { 

    // Average life expectancy of human
    const HumanAverageLifeExpectancy = 72;

    let age = getAge(timestamp)
    let remainingYears = HumanAverageLifeExpectancy - age;
    
    // Ensure the remaining years isn't negative
    if (remainingYears < 0) {
        remainingYears = 0;
    }

    return remainingYears;
}

function getLifeRemainingPercentage(timestamp) {

    // Average life expectancy of human
    const HumanAverageLifeExpectancy = 72;

    let remainingYears = getLifeRemainingYears(timestamp);
    let remainingLifePercentage = (remainingYears / HumanAverageLifeExpectancy) * 100;

    return remainingLifePercentage.toFixed(2);
}

function getLifeRemainingMonths(timestamp) {

    let birthDate = new Date(Number(timestamp));
    let dateToday = new Date();
    
    // Calculate the person's current age
    let age = dateToday.getFullYear() - birthDate.getFullYear();
    let monthDifference = dateToday.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && dateToday.getDate() < birthDate.getDate())) {
        age--; // Subtract one year if the birthday hasn't occurred yet this year
    }
    
    // Average life expectancy in years and months
    const averageLifeExpectancy = 72;
    const averageLifeExpectancyInMonths = averageLifeExpectancy * 12;

    let yearsLiveInMonths = age * 12;
    let additionalMonths = monthDifference < 0 ? 12 + monthDifference : monthDifference;
    let totalMonthsLived = yearsLiveInMonths + additionalMonths;

    let remainingMonths = averageLifeExpectancyInMonths - totalMonthsLived;

    // Ensure remaining months isn't negative
    if (remainingMonths < 0) {
        remainingMonths = 0;
    }

    return remainingMonths;

}

function getLifeRemainingDays(timestamp) {

    let birthDate = new Date(Number(timestamp));
    let dateToday = new Date();
    
    // Calculate the person's current age
    let age = dateToday.getFullYear() - birthDate.getFullYear();
    let monthDifference = dateToday.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && dateToday.getDate() < birthDate.getDate())) {
        age--; // Subtract one year if the birthday hasn't occurred yet this year
    }

    // Average life expectancy in years and days
    const averageLifeExpectancy = 72; // years
    const averageLifeExpectancyInDays = averageLifeExpectancy * 365.25; // account for leap years


    // Calculate the total days lived
    let birthDateInDays = birthDate.getTime() / (1000 * 60 * 60 * 24); // birth date in days since epoch
    let todayInDays = dateToday.getTime() / (1000 * 60 * 60 * 24); // current date in days since epoch
    let totalDaysLived = todayInDays - birthDateInDays;

    // Calculate the remaining days
    let remainingDays = Math.round(averageLifeExpectancyInDays - totalDaysLived);
    
    // Ensure remaining days isn't negative
    if (remainingDays < 0) {
        remainingDays = 0;
    }
    
    return remainingDays;
}

function getDaysSinceBirth(timestamp) {
    let birthDate = new Date(Number(timestamp));
    let todayDate = new Date();
    let difference = todayDate - birthDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

function getMonthsSinceBirth(timestamp) {
    let birthDate = new Date(Number(timestamp));
    let todayDate = new Date();

    let yearsDifference = todayDate.getFullYear() - birthDate.getFullYear();
    let monthsDifference = todayDate.getMonth() - birthDate.getMonth();

    return yearsDifference * 12 + monthsDifference + (todayDate.getDate() >= birthDate.getDate() ? 0 : -1);
}

function getYearsSinceBirth(timestamp) {
    let birthDate = new Date(Number(timestamp));
    let todayDate = new Date();
    let yearsDifference = todayDate.getFullYear() - birthDate.getFullYear();
    if (
        todayDate.getMonth() < birthDate.getMonth() ||
        (todayDate.getMonth() === birthDate.getMonth() && todayDate.getDate() < birthDate.getDate())
    ) {
        return yearsDifference - 1;
    }
    return yearsDifference;
}

app.get('/api', (req, res) => {

    let name = req.query.name;
    let birthday = req.query.birthday;

    // Ensure the birthday is a valid number
    if (isNaN(Number(birthday))) {
        return res.status(400).json({ error: "Invalid birthday timestamp" });
    }

    res.json({
        'name': name || "Unknown",
        'birthday':  getBirthday(birthday),
        'today': getBirthday(new Date()),
        'age': getAge(birthday),
        'Next Birthday in Days': getDaysUntilNextBirthday(birthday),
        'Leap Year Birthday': isLeapYear(birthday) ? 'Yes' : 'No',
        'Zodiac Sign': getZodiacSign(birthday),
        'Chinese Zodiac Sign': getChineseZodiacSign(birthday),
        'Remaining Life': getLifeRemainingPercentage(birthday),
        'Remaining Years': getLifeRemainingYears(birthday),
        'Remaining Months': getLifeRemainingMonths(birthday),
        'Remaining Days': getLifeRemainingDays(birthday),
        'Days Since Birth': getDaysSinceBirth(birthday),
        'Months Since Birth': getMonthsSinceBirth(birthday),
        'Years Since Birth': getYearsSinceBirth(birthday)
    });

});

// const port = 3000;
// app.listen(port, () => {
//     console.log(`listening on http://localhost:${port}/`);
// });

module.exports = app;
