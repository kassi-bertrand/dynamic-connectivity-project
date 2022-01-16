class Node{
    //(int, int)
    constructor(positionX, positionY, nextNodeId){
        this._position = createVector(positionX, positionY);
        this._nextNodeId = nextNodeId; //id of the next node in the network
        this._radius = 32;
    }

    //Getters
    GetPosition(){
        return this._position;
    }

    GetNextNodeId(){
        return this._nextNodeId;
    }

    GetRadius(){
        return this._radius;
    }

    //Setters
    SetPosition(positionX, positionY){
        this._position.set(positionX, positionY);
    }

    SetNextNodeId(id){
        this._nextNodeId = id;
    }

    SetRadius(radius){
        this._radius = radius;
    }
}