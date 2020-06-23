// Chapter # 21-25 Qno 1
function assignment21_25Q1() {
    var firstName = prompt("Enter First Name: ");
    var lastName = prompt("Enter Last Name: ");
    var firstNameChar = firstName.charAt(0);
    var firstNameRemaining = firstName.slice(1, firstName.length);
    firstName = firstNameChar.toUpperCase() + firstNameRemaining.toLowerCase();
    var lastNameChar = lastName.charAt(0);
    var lastNameRemaining = lastName.slice(1, lastName.length);
    lastName = lastNameChar.toUpperCase() + lastNameRemaining.toLowerCase();
    var fullName = firstName + " " + lastName;
    document.write("<p>Good Morning " + fullName + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 2
function assignment21_25Q2() {
    var modelNumber = prompt("Enter your favourite mobile model number: ");
    document.write("<p>My favourite phone is: " + modelNumber + "</p>");
    document.write("<p>Length of string: " + modelNumber.length + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 3
function assignment21_25Q3() {
    var str = "Pakistani";
    var find = str.indexOf("n");
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Index of 'n': " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 4
function assignment21_25Q4() {
    var str = "Hello World";
    var find = str.lastIndexOf("l")
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Last Index of 'l': " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 5
function assignment21_25Q5() {
    var str = "Pakistani";
    var find = str.charAt(3)
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Character at index 3: " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 6
function assignment21_25Q6() {
    var firstName = prompt("Enter First Name: ");
    var lastName = prompt("Enter Last Name: ");
    var firstNameChar = firstName.charAt(0);
    var firstNameRemaining = firstName.slice(1, firstName.length);
    firstName = firstNameChar.toUpperCase() + firstNameRemaining.toLowerCase();
    firstName = firstName + " ";
    var lastNameChar = lastName.charAt(0);
    var lastNameRemaining = lastName.slice(1, lastName.length);
    lastName = lastNameChar.toUpperCase() + lastNameRemaining.toLowerCase();
    // var fullName = firstName + " " + lastName;
    document.write("<p>Good Morning " + firstName.concat(lastName) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 7
function assignment21_25Q7() {
    var city = "Hyderabad";
    var replacement = city.replace("Hyderabad", "Islamabad");
    document.write("<p>City: " + city + "</p>");
    document.write("<p>After replacement: " + replacement + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 8
function assignment21_25Q8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var replacement = message.replace(/and/g, "&");
    document.write("<p>Message: " + message + "</p>");
    document.write("<p>After replacement: " + replacement + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 9
function assignment21_25Q9  () {
    var value = "472";
    document.write("<p>Value: " + value + "</p>");
    document.write("<p>Type: " + typeof(value) + "</p>");
    value = parseInt(value);
    document.write("<p>Value: " + value + "</p>");
    document.write("<p>Type: " + typeof(value) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 10
function assignment21_25Q10() {
    var userInput = prompt("User Input to capitalize string: ");
    var capitalize = userInput.toUpperCase();
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Upper Case: " + capitalize + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 11
function assignment21_25Q11() {
    var userInput = prompt("User Input for title case: ");
    var userInputChr = userInput.charAt(0);
    var userInputRem = userInput.slice(1);
    var titleCase = userInputChr.toUpperCase() + userInputRem.toLowerCase();
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Upper Case: " + titleCase + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 12
function assignment21_25Q12() {
    var number = 35.36;
    var str = number.toString();
    var result = str.replace(".", "");
    document.write("<p>number: " + number + "</p>");
    document.write("<p>Result: " + result + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 13
function assignment21_25Q13() {
    var userInput = prompt("Enter username: ");
    var flag = true;
    for (var i = 0; i < userInput.length; i++) {
        if (userInput.charCodeAt(i) === 33 || userInput.charCodeAt(i) === 44 || userInput.charCodeAt(i) === 46 || userInput.charCodeAt(i) === 64) {
            flag = false;
            break;
        }
    }
    if (flag === false) {
        alert("Please enter a valid username");
    }
    else {
        alert("Username is correct!");
    }
    document.write("<p>" + userInput + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 14
function assignment21_25Q14() {
    var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userSearch = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
    userSearch = userSearch.toLowerCase();
    var flag = false;
    var temp = 0;
    for (var i = 0; i < bakeryItems.length; i++) {
        if (bakeryItems[i] === userSearch) {
            flag = true;
            temp = i;
            break;            
        }
    }
    if (flag === true) {
        document.write("<p>" + userSearch + " is <b>available</b> at index " + temp + " in our bakery</p>");
    }
    else {
        document.write("<p>We are sorry " + userSearch + " is <b>not available</b> in our bakery</p>");
    }


    document.write("<p>number: " + number + "</p>");
    document.write("<p>Result: " + result + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 15
function assignment21_25Q15() {
    var password = prompt("Enter password: ");
    var flag = false;
    document.write("<p>Entered password: " + password + "</p>");
    for (var i = 0; i < password.length; i++) {
        if ( (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) || (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) ) {
            if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
                document.write("<p>Invalid password. It should not start with a number</p>");
                break;                
            }
            else {
                if(password.length > 5) {
                    flag = true;
                }
                else {
                    document.write("<p>Invalid password word. It must at least 6 characters long</p>");
                    break;
                }
            }
        }
        else {
            document.write("<p>Invalid password. Password must be a-z, A-Z & 0-9</p>");
            break;
        }
    }
    if (flag === true) {
        document.write("<p>Password is correct! Welcome Sir/ Ma'am");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 16
function assignment21_25Q16() {
    var university = "University of Karachi";
    var arr = university.split("");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        document.write("<p>" + arr.shift(i) + "</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 17
function assignment21_25Q17() {
    var userInput = prompt("User Input: ");
    var lastChar = userInput.charAt(userInput.length - 1);
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Last Character of Input: " + lastChar + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 18
function assignment21_25Q18() {
    var text = "The quick brown fox jumps over the lazy dog";
    var textArr = text.split(" ");
    var tempThe = 0;
    for (var i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i].toLowerCase();
    }

    for (var j = 0; j < textArr.length; j++) {
        if (textArr[j] === "the") {
            tempThe++;            
        }
    }
    document.write("<p>User Input: " + text + "</p>");
    document.write("<p>There are " + tempThe + " occurrence(s) of word 'the'</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 26-30 Qno 1
function assignment26_30Q1() {
    var userInput = parseFloat(prompt("Enter positive integer number: "));
    document.write("<p>Number: " + userInput + "</p>");
    document.write("<p>Round off value: " + Math.round(userInput) + "</p>");
    document.write("<p>Floor value: " + Math.floor(userInput) + "</p>");
    document.write("<p>Ceil value: " + Math.ceil(userInput) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 2
function assignment26_30Q2() {
    var userInput = parseFloat(prompt("Enter negative floating point number: "));
    document.write("<p>Number: " + userInput + "</p>");
    document.write("<p>Round off value: " + Math.round(userInput) + "</p>");
    document.write("<p>Floor value: " + Math.floor(userInput) + "</p>");
    document.write("<p>Ceil value: " + Math.ceil(userInput) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 3
function assignment26_30Q3() {
    var userInput = parseFloat(prompt("Enter an integer number: "));
    var absolute = Math.abs(userInput);
    document.write("<p>The absolute value of " + userInput + " is " + absolute + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 4
function assignment26_30Q4() {
    var randomDice = Math.random();
    randomDice = (randomDice * 6) + 1;
    randomDice = Math.floor(randomDice);
    document.write("<p>Random dice value: <b>" + randomDice + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 5
function assignment26_30Q5() {
    var randomDice = Math.random();
    randomDice = (randomDice * 2) + 1;
    randomDice = Math.floor(randomDice);
    document.write("<p>" + randomDice + "</p>");
    if (randomDice === 1) {
        document.write("<p>Random coin value: Heads</p>");
    }
    else {
        document.write("<p>Random coin value: Tails</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 6
function assignment26_30Q6() {
    var randomNum = Math.random();
    randomNum = (randomNum * 100) + 1;
    randomNum = Math.floor(randomNum);
    document.write("<p>Random number between 1 and 100: <b>" + randomNum + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 7
function assignment26_30Q7() {
    var userWeight = parseFloat(prompt("Enter your weight in Kilograms"));
    document.write("<p>The weight of user is <b>" + userWeight + "</b> kilograms</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 8
function assignment26_30Q8() {
    var randomNum = Math.random();
    randomNum = (randomNum * 10) + 1;
    randomNum = Math.floor(randomNum);
    var userGuess = parseInt(prompt("Enter a number between 1 to 10"));
    if (randomNum === userGuess) {
        document.write("<p>Correct answer! Contragulate the user</p>"); 
    }
    else {
        document.write("<p>Incorrect answer! Try again</p>"); 
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 31-34 Qno 1
function assignment31_34Q1() {
    var currentDate = new Date();
    document.write("<p>" + currentDate + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 2
function assignment31_34Q2() {
    var monthName = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    alert("Current month: " + monthName[currentMonth]);
    document.write("<p>Current month: " + monthName[currentMonth] + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 3
function assignment31_34Q3() {
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
    var currentDay = new Date();
    var currentDayName = currentDay.getDay();
    alert("Today is " + dayName[currentDayName]);
    document.write("<p>Today is " + dayName[currentDayName] + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 4
function assignment31_34Q4() {
    var currentDay = new Date();
    var currentDayName = currentDay.getDay();
    if (currentDayName === 0 || currentDayName === 6) {
        document.write("<p>It's fun day</p>");
    }
    else {
        document.write("<p>It's working day</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 5
function assignment31_34Q5() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    if (currentDay <= 16) {
        document.write("<p>First fifteen days of the month</p>");
    }
    else {
        document.write("<p>Last days of the month</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 6
function assignment31_34Q6() {
    var currentDate = new Date();
    var miliSeconds = currentDate.getTime();
    var minutes = miliSeconds/60000;
    document.write("<p>Current Date: <b>" + currentDate + "</b></p>");
    document.write("<p>Elapsed milliseconds since January 1, 1970: <b>" + miliSeconds + "</b></p>");
    document.write("<p>Elapsed minute since January 1, 1970: <b>" + minutes + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 7
function assignment31_34Q7() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    if (hours < 12) {
        alert("It's AM");
        document.write("<p><b> It's AM </b></p>");
    }
    else {
        alert("It's PM");
        document.write("<p><b> It's PM </b></p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 8
function assignment31_34Q8() {
    var laterDate = new Date();
    laterDate.setFullYear(2020);
    laterDate.setMonth(11);
    laterDate.setDate(31);
    laterDate.setHours(0);
    laterDate.setMinutes(0);
    laterDate.setSeconds(0);
    document.write("<p>Later date: <b>" + laterDate + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 9
function assignment31_34Q9() {
    var Current = new Date();
    var ramadan2020 = new Date();
    ramadan2020.setFullYear(2020);
    ramadan2020.setMonth(3);
    ramadan2020.setDate(24);
    var diff = (Current.getTime() - ramadan2020.getTime()) / 86400000;
    document.write("<p><b>" + diff + "</b> days have passed since 1st Ramadan, 2020</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 10
function assignment31_34Q10() {
    var referenceDate = new Date();
    var elapsedDate = new Date();
    elapsedDate.setFullYear(2020);
    elapsedDate.setMonth(0);
    elapsedDate.setDate(1);
    elapsedDate.setHours(0);
    elapsedDate.setMinutes(0);
    elapsedDate.setSeconds(0);
    var diff = (referenceDate.getTime() - elapsedDate.getTime()) / 1000;
    document.write("<p>On reference date <b>" + referenceDate + "</b>,</p>");
    document.write("<p><b>" + diff + "</b> seconds had passed since beginning of 2020</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 11
function assignment31_34Q11() {
    var current = new Date();
    var ahead = current.getHours();
    document.write("<p>Current date: <b>" + current + "</b></p>");
    current.setHours(ahead - 1);
    document.write("<p>1 hour ago, it was <b>" + current + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 12
function assignment31_34Q12() {
    var current = new Date();
    document.write("<p>Current date: <b>" + current + "</b></p>");
    current.setFullYear(1920);
    document.write("<p>100 years back, it was <b>" + current + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 13
function assignment31_34Q13() {
    var age = parseInt(prompt("Enter your age: "));
    var current = new Date();
    var currentYear = current.getFullYear();
    document.write("<p>Your age is <b>" + age + "</b></p>");
    document.write("<p>Your birth year is <b>" + (currentYear-age) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 14
function assignment31_34Q14() {
    var customerName = prompt("Enter customer Name: ");
    var current = new Date();
    var currentMonth = current.getMonth();
    var numberOfUnit = parseFloat(prompt("Enter number of Units: ")).toFixed(2);
    var chargesPerUnit = 16;
    var lateCharge = 350;
    document.write("<h1>K-Electric Bill</h1>");
    document.write("<p>Customer Name: <b>" + customerName + "</b></p>");
    document.write("<p>Month: <b>" + currentMonth + "</b></p>");
    document.write("<p>Number of units: <b>" + numberOfUnit + "</b></p>");
    document.write("<p>Charges per units: <b>" + chargesPerUnit + "</b></p></br></br>");
   
    document.write("<p>Net Amount Payable (within Due Date): <b>" + (numberOfUnit * chargesPerUnit).toFixed(2) + "</b></p>");
    document.write("<p>Late payment surcharge: <b>" + lateCharge + "</b></p>");
    document.write("<p>Gross Amount Payable (after Due Date): <b>" + ( (numberOfUnit * chargesPerUnit) + lateCharge).toFixed(2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 35-38 Qno 1
function assignment35_38Q1() {
    document.write("<button onclick = 'showDate()'>Show Current Date</button>");
}
function showDate () {
    var currentDate = new Date();
    document.write("<p>" + currentDate + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 2
var fullName;
function assignment35_38Q2() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    fullName = firstName + " " + lastName;
    document.write("<button onclick = 'greet(fullName)'>Greet user</button>");
}
function greet(name) {
    document.write("<p>Hello! Good Evening " + name + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 3
function assignment35_38Q3() {
    var num1 = parseInt(prompt("Enter 1st number:"));
    var num2 = parseInt(prompt("Enter 2nd number:"));
    document.write("<p>Sum of " + num1 + " + " + num2 + " = <b>" + sumOfTwo(num1, num2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function sumOfTwo(n1, n2) {
    return n1 + n2;
}
// Chapter # 35-38 Qno 4
function assignment35_38Q4() {
    var num1 = parseInt(prompt("Enter 1st number:"));
    var num2 = parseInt(prompt("Enter 2nd number:"));
    var operator = prompt("Enter operator: ");
    document.write("<p>" + num1 + " " + operator + " " + num2 + " = <b>" + sumOfTwo(num1, num2, operator) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function sumOfTwo(n1, n2, opr) {
    if (opr === "+") {
        return n1 + n2;
    }
    else if (opr === "-") {
        return n1 - n2;
    }
    else if (opr === "*") {
        return n1 * n2;
    }
    else if (opr === "/") {
        return n1 / n2;
    }
    else if (opr === "%") {
        return n1 % n2;
    }
    else {
        return "Unknown operator";
    }
}
// Chapter # 35-38 Qno 5
function assignment35_38Q5() {
    var num1 = parseInt(prompt("Enter number for its square: "));
    document.write("<p>Square of " + num1 + " is <b>" + squareOf(num1) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function squareOf(n1) {
    return n1 * n1;
}
// Chapter # 35-38 Qno 6
function assignment35_38Q6() {
    var num1 = parseInt(prompt("Enter number for its factorial: "));
    document.write("<p>Factorial of " + num1 + " is <b>" + factorialOf(num1) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function factorialOf(n1) {
    for (var i = n1 - 1; i > 0; i--) {
        n1 = n1 * i;
    }
    return n1;
}
// Chapter # 35-38 Qno 7
var start, end;
function assignment35_38Q7() {
    start = parseInt(prompt("Enter start number: "));
    end = parseInt(prompt("Enter end number: "));
    document.write("<button onclick = 'squareOf(start, end)'>Show counting</button>");
}
function squareOf(n1, n2) {
    for (var i = n1; i <= n2; i++) {
        document.write("<p><b>" + i + "</b></p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 8
function assignment35_38Q8() {
    var perpendicular = parseFloat(prompt("Enter perpendicular: "));
    var base = parseFloat(prompt("Enter base: "));
    calculateSquare();
    var hypotenuse = perpendicular + base;
    function calculateSquare() {
        perpendicular = perpendicular * perpendicular;
        base = base * base;
    }
    document.write("<p>Hypotenuse of right angle triangle is <b>" + hypotenuse + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 9
var width, height;
function assignment35_38Q9() {
    document.write("<button onclick = 'byValue(6,7)'>Arguments as value</button>");
    document.write("<button onclick = 'takeInput()'>Arguments as variable</button>");
}
function byValue(n1, n2) {
    document.write("<p>Area = <b>" + (n1*n2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function takeInput() {
    width = parseFloat(prompt("Enter width"));
    height = parseFloat(prompt("Enter height"));
    document.write("<button onclick = 'byVariable(width, height)'>Area</button>");
}
function byVariable(n1,n2) {
    document.write("<p>Area = <b>" + (n1*n2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 10
var palindromeStr;
function assignment35_38Q10() {
    palindromeStr = prompt("Enter string to check palindrome: ");
    palindromeStr = palindromeStr.toLowerCase();
    var bool = palindrome(palindromeStr);
    if(bool === true) {
        document.write("String is Palindrome");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
    else {
        document.write("String is not Palindrome");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
    function palindrome(palindromeStr) {
        lengthStr = palindromeStr.length;
        midStr = Math.floor(lengthStr/2);
        for (var i = 0; i < midStr; i++) {
            if (palindromeStr[i] !== palindromeStr[lengthStr - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
// Chapter # 35-38 Qno 11
var string;
function assignment35_38Q11() {
    string = prompt("Enter string: ");
    document.write("<p>String: " + string + "</p>");
    document.write("<button onclick = 'upperCase(string)'>String Transformation</button>");
}
function upperCase(string) {
    var strArr = string.split(" ");
    var up, low;
    for (var i = 0; i < strArr.length; i++) {
        up = strArr[i].charAt(0);
        low = strArr[i].slice(1);
        strArr[i] = up.toUpperCase() + low.toLowerCase();
    }
    string = strArr.join(" ");
    document.write("<p>Output: <b>" + string + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 12
var string;
function assignment35_38Q12() {
    string = prompt("Enter string: ");
    document.write("<p>String: " + string + "</p>");
    document.write("<button onclick = 'longestStr(string)'>Find longest string</button>");
}
function longestStr(string) {
    strArr = string.split(" ");
    var longest;
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr.length; j++) {
            if (strArr[i] < strArr[j]) {
                break;
            }
        }
        longest = strArr[i];
    }
    document.write("<p>Output: <b>" + longest + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 13
var string;
var letter;
function assignment35_38Q13() {
    string = prompt("Enter string: ");
    letter = prompt("Enter letter: ");
    document.write("<button onclick = 'occurence(string, letter)'>Find occurence of letter</button>");
}
function occurence(string, letter) {
    strArr = string.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter) {
            count = count + 1;
        }
    }
    document.write("<p>The occurence of <b>" + letter + "</b> in <b>" + string + "</b> is <b>" + count + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 14
var radius;
function assignment35_38Q14() {
    radius = parseFloat(prompt("Enter radius of a circle: "));
    document.write("<button onclick = 'calcCircumference(radius)'>Click to find Circumference of Circle</button>");
    document.write("&nbsp;&nbsp;&nbsp;<button onclick = 'calcArea(radius)'>Click to find Area of Circle</button>");
}
function calcCircumference(radius) {
    var circumference = 2 * (3.147) * radius;
    document.write("<p>The Circumference is <b>" + circumference + "</b></p>");
}
function calcArea(radius) {
    var area = (3.147) * radius * radius;
    document.write("<p>The Area is <b>" + area + "</b></p>");
}