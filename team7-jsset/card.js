/*
Creates Card class which holds a cards number, color, shading and shape attributes.
*/
class card{
    constructor(number,color,shading,shape){
        this.number = number;
        this.color = color;
        this.shading = shading;
        this.shape = shape;
        this.img = "cards/"+number+color+shading+shape+".jpg";
    }
}