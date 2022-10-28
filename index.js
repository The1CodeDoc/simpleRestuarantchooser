/*A simple restuarant chooser console app that allows users to input:
-Their name
-Age
-How much they have.
*/
        let userName = prompt("Please enter your name:");
        let age = +prompt("Enter your age:");
        let cash = +prompt("How much do you have?");
        console.log(userName);
        console.log(age);
        console.log(cash);

        function check(userName, age, cash) {
            if (age >= 15 && cash <= 10) {
                alert(`Hello ${userName}, with your ${cash}, I would recommend you visit the Pizza Hut.`)
            }
            if (age < 15) {
                alert(`Hello ${userName}, you are less than 15years old and we currently do not have kids and teens restuarant options!`);
            }
            if (cash >= 100 || cash <= 250) {
                alert(`Hi ${userName}! You can try Xhi Chinese Restaurant with your ${cash} budget.`)
            }
            else if (cash >= 300 || cash <= 600) {
                alert(`Hey there ${userName}! With your ${cash}, Tiana's Deluxe Lounge is the perfect place for you.`)
            }
        }
        

        check(userName, age, cash)