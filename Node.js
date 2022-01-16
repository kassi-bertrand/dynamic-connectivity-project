class Node{
    //(int, int)
    constructor(positionX, positionY, id){
        this._position = createVector(positionX, positionY);
        this._connections = []; //set of "Connection" objects
        this._id = id; //Node-id in the network
        this._radius = 32;
    }
}