let network;

function setup(){
    createCanvas(windowWidth, windowHeight)
    network = new Network();

    let node_A = new Node(232, 345, 0, 0);
    network.AddNode(node_A);

    let node_B = new Node(500, 50, 0, 0);
    network.AddNode(node_B);

    let node_C = new Node(500, 300, 0, 0);
    network.AddNode(node_C);

    //Print the node array and component
    console.log(network._nodes);
    console.log(network._compSz);

    //Node component id test
    console.log("Before any connection");
    console.log("Node_A component id before any connection " + network.Find(node_A));
    console.log("Node_B component id before any connection " + network.Find(node_B));
    console.log("Node_C component id before any connection " + network.Find(node_C));

    //Union test(1): Node A & Node B
    // Node A & B must have the same component id since they are now connected
    console.log("A&B Union")
    network.Union(node_A, node_B);

    console.log("Node_A component id after A&B Union " + network.Find(node_A));
    console.log("Node_B component id after A&B Union " + network.Find(node_B));
    console.log("Node_C component id after A&B Union " + network.Find(node_C));

    console.log("The componenent size array after A&B Union " + network._compSz);


    //Union test(2): Node B & Node C
    //All node must have the same component id by now.
    console.log("B&C Union")
    network.Union(node_B, node_C);

    console.log("Node_A component id after B&C Union " + network.Find(node_A));
    console.log("Node_B component id after B&C Union " + network.Find(node_B));
    console.log("Node_C component id after B&C Union " + network.Find(node_C));

    console.log("The componenent size array after B&C Union " + network._compSz);

    //Union test(3): NodeA & Node C
    network.Union(node_A, node_C); //This connection should not take place
}

function draw(){
    //update network
    network.Update();
    //display current state of network
    network.Display();
}