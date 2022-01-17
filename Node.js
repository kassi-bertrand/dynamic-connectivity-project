class Node{
    //(int, int, int, int)
    constructor(positionX, positionY, id, nextNodeId){
        this._position = createVector(positionX, positionY);
        this._id = id;
        this._nextNodeId = nextNodeId; //id of the next node in the network
        this._radius = 32;
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

    GetRadius(){
        return this._radius;
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

    SetRadius(radius){
        this._radius = radius;
    }
}