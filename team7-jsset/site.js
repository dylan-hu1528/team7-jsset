/*Make a new deck, suffle, and initialzie points*/
let sdeck = new deck();
let points = 0;
//sdeck.shuffle();

/*Print points onto page*/
document.getElementById("Enter").innerHtml = "Point Total: " + points;

/*Create hand/displayed cards and intial time*/
hand =[];
dealTwelve();
displayHand();
startTime = new Date();

/*This function checks if the card numbers entered are in a set and displays appropiate messages, modify points, and display time */
function submitSet(){
    /*Updates time */
    endTime = new Date()
    time(endTime, startTime)

    let isASet = false;
    let index = 0;
    
    /*Store each card value */
    let x = document.getElementById("card1").value;
    let y = document.getElementById("card2").value;
    let z = document.getElementById("card3").value;

    /*Reset text area fields */
    document.getElementById("card1").value ='';
    document.getElementById("card2").value ='';
    document.getElementById("card3").value ='';

    /*Grab each card that was entered */
    card1 = hand[x-1];
    card2 = hand[y-1];
    card3 = hand[z-1];

    /*Check to see if the cards are a set */
    isASet = VerifySet(card1,card2,card3);
    
    /*If a set add points,update messages, and update cards */
    if(isASet){
        points+=100;
        document.getElementById("points").innerHTML = "Point Total: " + points;
        document.getElementById("setValue").innerHTML = "Nice! Completed Set!";

        hand.splice((x-1),1);
        index = hand.indexOf(card2);
        hand.splice(index,1);
        index = hand.indexOf(card3);
        hand.splice(index,1);
        /*Deal three more cards only if hand less than 12 and more cards in deck */
        if(hand.length<12 && sdeck.cards.length>0){
            dealThree();
        }
        else{
            displayHand();
        }
        /*if not a set and set exists display messages and subtract points */
    } else if (hint() !== null){
        points-=50;
        document.getElementById("points").innerHTML= "Point Total: " + points;
        document.getElementById("setValue").innerHTML = "Sorry! That was not a Set, try again!";
    }

    /*If no set exists */
    if(hint() === null){
        document.getElementById("setValue").innerHTML = "You Have Finished The Game! Your total score was: " + points;
    }
}

/*Fucntion to deal twelve cards */
function dealTwelve() {
    /*Display message for no more cards in deck */
    /*Otherwise push 12 cards form deck into hand */
    if (sdeck.cards.length==0){
        document.getElementById("setValue").innerHTML = "NO MORE CARDS IN DECK";
    }
    else{
        for (let i=0; i<12; i++){
            if (sdeck.cards.length>0){
                let popFromDeck = sdeck.cards.pop();
                hand.push(popFromDeck);
            }
        }
    }
    displayHand();
}

/*Fucntion to deal three more cards to the hand */
function dealThree() {
    /*Update time */
    endTime = new Date()
    time(endTime, startTime)
    /*If no more cards or more than 21 cards in hand display appropiate message */
    /*Otherwise push 3 cards into hand */
    if (sdeck.cards.length==0){
        document.getElementById("setValue").innerHTML = "NO MORE CARDS IN DECK";
    }
    else if (hand.length >= 21){
        document.getElementById("setValue").innerHTML = "This the Max amount of cards you can have. There must be a set on the table.";
    }
    else{
        for (let i=0; i<3; i++){
            if (sdeck.cards.length>0){
                let popFromDeck = sdeck.cards.pop();
                hand.push(popFromDeck);
            }
        }
    }
    displayHand();
}

/*Function to restart game */
function restartGame(){
    /*Make a new deck and shuffle it and reset time ,points, and messages*/
    sdeck = new deck();
    sdeck.shuffle();
    points = 0;
    hand = [];
    document.getElementById("points").innerHTML = "Point Total: " + points;
    document.getElementById("setValue").innerHTML = "Game Restarted! Enter 3 card numbers from the pictures above!";
    dealTwelve();

    startTime= new Date()
    endTime = new Date()
    time(endTime, startTime)
}

/*Display rules in an alert */
function rules() {
    endTime = new Date()
    window.alert("Game Rules:\n\n1. The goal of the game is find all the sets. \n\n2. Each card has several features: " +  "\n\n    a. Color (Blue, Green, Red)." + "\n\n    b. Shape (Oval, Square, Triangle)." + "\n\n    c. Number of shapes (1, 2, 3)." + "\n\n    d. Shading (Solid, Shaded, Open)." +
    " \n\n3. To satisfy a set, three cards must meet all of these conditions: " + "\n\n    a. Same color OR different colors."+ "\n\n    b. Same shape OR different shapes." + "\n\n    c. Same number OR different number of shapes." + "\n\n    d. Same shading OR different shadings.");
}

/*Fucntion to make a image tag for each card and link to respective card image */
function displayImage(cardImage, i) {
    /*Make img and div tag */
    let image = document.createElement("img");
    let div = document.createElement("div");
    div.id = "display" +i;

    /*Image has certain size and src(based on card) */
    image.src = cardImage.img;
    image.width = 120;
    image.height = 180;

    /*Number each card with paragraph tag in each cards individual div */
    let number = document.createElement("p");
    number.textContent = i;
    
    /*Add a div to pictures div and to that div at p tag with number and img tag with image */
    document.getElementById("pictures").appendChild(div);
    document.getElementById("display"+i).appendChild(number);
    document.getElementById("display" +i).appendChild(image);
}

/*Function to display each card in the hand */
function displayHand(){
    document.getElementById("pictures").innerHTML = "";
    for (let i = 0; i <hand.length; i++) {
        displayImage(hand[i], i+1);
    }
}

/*Function to display the time to the page */
function time(end,start){
        total = (end-start)/1000;
        document.getElementById("ET").innerHTML = "Time elapsed: " + total + " seconds";
}

/*Fucntion to find if there is a set/give a hint */
function hint(){
    setFound = false;
    for(let i =0;i<hand.length;i++){
        for(let  j=0;j<hand.length;j++){
            for(let k =0;k<hand.length;k++){
                if(!(hand[i] === hand[k] || hand[j] === hand[k] || hand[i] === hand[k])){
                    setFound = VerifySet(hand[i],hand[j],hand[k]);
                    if(setFound){
                        return i+1;
                    }
                }
            }
       
        }
    }
    return null;
}

/*Function to display hint to page */
function giveHint(){
    i = hint();
    document.getElementById("setValue").innerHTML = "Card " + i + " is part of a set!";
}