let network;
let images = [];

//node picture
function preload(){
    images[0] = loadImage('./images/base-station-1.png');
    images[1] = loadImage('./images/cloud-1.png');
    images[2] = loadImage('./images/freelancer-1.png');
    images[3] = loadImage('./images/router-1.png');
    images[4] = loadImage('./images/router-2.png');
    images[5] = loadImage('./images/satellite-2.png');
    images[6] = loadImage('./images/server-1.png');
    images[7] = loadImage('./images/smart-home-1.png');
    images[8] = loadImage('./images/smartphone-1.png');
    images[9] = loadImage('./images/smartphone-2.png');

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    network = new Network();

    //resizing our image here
    images.forEach(function(img){
        img.resize(70,70);  
    });
}

function draw(){
    //update network & display current state of network 
    network.Update();
    network.Display();
}

//For each click, a new node is added
function mouseClicked(){

    let node = new Node(mouseX, mouseY, 0, 0, random(images));
    network.AddNode(node);

    let node_x = random(network._nodes) //FIXME: Bad OOP - Accessing attribute directly
    let node_y = random(network._nodes) //FIXME: Bad OOP - Accessing Attribute directly

    network.Union(node_x, node_y);
}