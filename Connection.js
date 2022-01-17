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
    Display(){
        stroke('#b2babb');
        strokeWeight(2.3);
        line(this._from.GetPosition().x, this._from.GetPosition().y, this._to.GetPosition().x, this._to.GetPosition().y)
    }
}