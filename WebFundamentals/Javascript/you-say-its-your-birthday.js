function ifMyBirthday(num1, num2){
    console.log(num1, num2, "my birthday is 5/23");
    if((num1 == 5 && num2 == 23) || (num1 == 23 && num2 == 5)) {
        console.log("how did you know?");
    }
    else {
        console.log("just another day ...");
    }
}
ifMyBirthday(1,2);
ifMyBirthday(5,23);
ifMyBirthday(5,24);
ifMyBirthday(23,5);
ifMyBirthday(23,10);

