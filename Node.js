class Node{
    //(int, int, int, int, image)
    constructor(positionX, positionY, id, nextNodeId, png){
        this._position = createVector(positionX, positionY);
        this._id = id;
        this._nextNodeId = nextNodeId; //id of the next node in the network
        this._thumbnail = png; //node picture
    }

    //Getters
    GetPosition(){
        return this._position;
    }

    GetId(){
        return this._id;
    }

    GetNextNodeId(){
        return this._nextNodeId;
    }

    //Setters
    SetPosition(positionX, positionY){
        this._position.set(positionX, positionY);
    }

    SetId(id){
        this._id = id;
    }

    SetNextNodeId(id){
        this._nextNodeId = id;
    }

    //thumbnail Displayed here
    Display(){
        image(this._thumbnail, this._position.x, this._position.y);
    }
}