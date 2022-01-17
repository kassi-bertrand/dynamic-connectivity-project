let network;

function setup(){
    createCanvas(windowWidth, windowHeight)
    network = new Network();
}

function draw(){
    //update network
    network.Update();
    //display current state of network
    network.Display();
}

//called once after a mouse click
function mouseClicked(){
    //adds a new node to the network
    let node = new Node(mouseX, mouseY, 0, 0);
    network.AddNode(node);

    //attempts a connection between two randomly chosen node in the network.
    //let size = network._nodes.length;

    let node_x = random(network._nodes) //FIXME: Bad OOP - Accessing attribute directly
    let node_y = random(network._nodes) //FIXME: Bad OOP - Accessing Attribute directly

    network.Union(node_x, node_y);
}