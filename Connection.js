class Connection{
    //(Node, Node)
    constructor(from, to){
        this._from = from;
        this._to = to;
        this._packet = this._from.GetPosition().copy();
    }

    //Getters
    GetFrom(){
        return this._from;
    }

    GetTo(){
        return this._to;
    }

    Update(){

        this._packet.x = lerp(this._packet.x, this._to._position.x, 0.1);
        this._packet.y = lerp(this._packet.y, this._to._position.y, 0.1);
    
    }
    //Display
    //REMEMBER: All Images are 90 x 90 pixels
    Display(){
        stroke('#cacfd2');
        strokeWeight(1.6);

        let x_offset = this._from.GetImgWidth() / 2;
        let y_offset = this._from.GetImgHeight() / 2;

        line(this._from.GetPosition().x + x_offset, this._from.GetPosition().y + y_offset, this._to.GetPosition().x + x_offset, this._to.GetPosition().y + y_offset);

        fill(0);
        strokeWeight(1);
        ellipse(this._packet.x + x_offset, this._packet.y + y_offset, 17, 17);
    }
}