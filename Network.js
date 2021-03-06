class Network{
    constructor(){
        this._nodes = []; //set of Nodes AKA "sites" 
        this._compSz = []; //sizes of components in the network
        this._connections = [];
        this._nextNodeId = 0; //id to be assigned to the next node entering our in our network.
    }

    AddNode(node){
        //make sure the node to be added has the right id
        node.SetId(this._nextNodeId);
        node.SetNextNodeId(this._nextNodeId);

        //node added the array here
        this._nodes.push(node);

        //a component of size 1 is created
        this._compSz.push(1);

        //update _nextNodeId for next time!
        this._nextNodeId++;
    }

    //Returns the "component id" of a given node
    Find(node){
        let p = node.GetId();
        
        while(p != node.GetNextNodeId()){
            p = node.GetNextNodeId();
        }

        return p;
    }

    //Tells us if two nodes are connected
    //Two nodes are connected iff they share the same "component id"
    Connected(node_A, node_B){
        return this.Find(node_A) == this.Find(node_B);
    }

    //Responsible for connecting (merging) two component in the network
    Union(node_A, node_B){
        let a = this.Find(node_A);
        let b = this.Find(node_B);
        
        if(a === b) return;

        //Make smaller component point to the larger one
        if(this._compSz[a] < this._compSz[b]){
            node_A.SetNextNodeId(b);
            //update component size
            this._compSz[b] += this._compSz[a];
            this._compSz[a] = 0;
        }
        else{
            node_B.SetNextNodeId(a);
            //updata component size
            this._compSz[a] += this._compSz[b];
            this._compSz[b] = 0;
        }

        //create a connection
        let connection = new Connection(node_A, node_B);

        //add it to the set of active connections
        this._connections.push(connection);
    }


    Update(){

        //update network
        for(let i = 0; i < this._connections.length; i++){
            this._connections[i].Update();
        }
        
    }

    Display(){
        clear();
        for(let i = 0; i < this._connections.length; i++){
            this._connections[i].Display();
        }
        
        for(let i = 0; i < this._nodes.length; i++){
            this._nodes[i].Display();
        }

    }
}