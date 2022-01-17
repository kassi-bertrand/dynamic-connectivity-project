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
}