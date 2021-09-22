/*
Creates fucntion to verify if the array of three cards passed is a set. Checks to see if each of the card attributes are the same.
If they are all not the same for each attribute then checks to make sure all of them are then different for the attribute to ensure a set. 
*/

/*Verify's the array of three cards that are selected by the player*/
function VerifySet (card1,card2,card3) {
    let isAset = true;

    /*if a non-existing card is sent to VerifySet? then return false*/
    if(card1 === undefined || card2 === undefined || card3 === undefined) {
        return false;
    }
     
    /*Checks to see if all card numbers are the same*/
    if(!(card1.number === card2.number && card1.number === card3.number && card2.number === card3.number)) {
        /*If card numbers are the same between any two cards the cards are not a set */
        if (card1.number === card2.number || card2.number === card3.number || card1.number === card3.number) {
            isAset = false;
        }
    }

    /*Checks to see if all card colors are the same*/
    if(!(card1.color === card2.color && card1.color === card3.color && card2.color === card3.color)) {
        /*If card colors are the same between any two cards the cards are not a set */
        if (card1.color === card2.color || card2.color === card3.color || card1.color === card3.color) {
            isAset = false;
        }
    }

    /*Checks to see if all card shading are the same*/
    if(!(card1.shading === card2.shading && card1.shading === card3.shading && card2.shading === card3.shading)) {
        /*If card shading are the same between any two cards the cards are not a set */
        if (card1.shading === card2.shading || card2.shading === card3.shading || card1.shading === card3.shading) {
            isAset = false;
        } 
    }

    /*Checks to see if all card shape are the same*/
    if(!(card1.shape === card2.shape && card1.shape === card3.shape && card2.shape === card3.shape)) {
        /*If card shape are the same between any two cards the cards are not a set */
        if (card1.shape === card2.shape || card2.shape === card3.shape|| card1.shape === card3.shape) {
            isAset = false;
        } 
    } 
    
    return isAset;
}