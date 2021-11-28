function preload() {

}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 300);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p3aNrIkNf/model.json", modelLoaded);    
}

function draw() {
    image(video, 0, 0, 500, 300);
    classifier.Classify(video, gotResult);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}