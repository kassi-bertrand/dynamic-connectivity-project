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
    //REMEMBER: Images are 35 x 35 pixels
    Display(){
        stroke('#17202a');
        strokeWeight(2.3);
        line(this._from.GetPosition().x + 35, this._from.GetPosition().y + 35, this._to.GetPosition().x + 35, this._to.GetPosition().y + 35);

    }
}