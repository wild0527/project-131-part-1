status = "";

function preload() {
    img = loadImage(".png")
}

function setup() {
    canvas = createCanvas(640, 430);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded() {
    console.log("model is initialized");
    status = True;
    objectDetector.detect(img, gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);

}