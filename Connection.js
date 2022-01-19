class Connection{
    //(Node, Node)
    constructor(from, to){
        this._from = from;
        this._to = to;
    }

    //Getters
    GetFrom(){
        return this._from;
    }

    GetTo(){
        return this._to;
    }

    //Display
    //REMEMBER: All Images are 90 x 90 pixels
    Display(){
        stroke('#cacfd2');
        strokeWeight(1.6);

        let x_offset = this._from.GetImgWidth() / 2;
        let y_offset = this._from.GetImgHeight() / 2;

        line(this._from.GetPosition().x + x_offset, this._from.GetPosition().y + y_offset, this._to.GetPosition().x + x_offset, this._to.GetPosition().y + y_offset);
    }
}