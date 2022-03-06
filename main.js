Webcam .set ({
    width : 350,
    height : 300,
    image_forma : 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="catured_image"src="'+data_uri+'"/>';
    });
}
console.log('ml5 vertion:',ml5.verinon);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelloaded);

function modelloaded(){
    console.log('model loaded1');
}
 
function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_object_name").innerHtML=results[0].label;
    document.getElementById("result_object_accuracy").innerHtML=results[0].cnfidence.toFixed(3);
}
}











