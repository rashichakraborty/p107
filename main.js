function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZcanS3uHb/model.json",modelReady);

}

function modelReady()
{
    var myAudio = new Audio('Welcome.ogg');

    myAudio.play();

    classifier.classify(gotResult);
}