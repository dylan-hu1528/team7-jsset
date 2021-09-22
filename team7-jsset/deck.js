/*
Creates Deck object which makes an array of 81 unique Card objects. The deck object can
be shuffled.
*/
class deck{
    constructor(){
        this.cards = new Array();

        //Characteristics of each card
        let numbers = [1,2,3];
        let colors =  ["Blue", "Green", "Red"];
        let shadings = ["Solid","Shaded","Open"];
        let shapes =  ["Oval","Square","Triangle"];

        //Creating all 81 cards and saving it to the deck
        numbers.forEach(number =>{
            colors.forEach(color =>{
                shadings.forEach(shading =>{
                    shapes.forEach(shape =>{
                        this.cards.push(new card(number,color,shading,shape));
                    });
                });
            });
        });
    }

    shuffle(){
        let temp = new card();
        for (let i = 0; i<this.cards.length; i++){
            let randomIndex = Math.floor(Math.random()*this.cards.length);
            temp = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }
}
