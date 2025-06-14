let value = "racecar";

const revValue = () => {
    let revStr =  value.toString().split('').reverse().join('');
    let givenStr = value.toString();
    if (givenStr === revStr) {
       console.log("The given value is a palindrome");
    } else {
         console.log("The given value is not a palindrome");
    }
}
revValue();