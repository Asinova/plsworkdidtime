var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start()


}
recognition.onresult= function(event){
console.log(event)
var Content=event.results[0][0].transcript;
console.log()
document.getElementById("textbox").innerHTML=Content;

}
function speak(){
var synth = window.speechSynthesis;
speak_data = document.getElementById("textbox").innerHTML;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(macadamianut);
}
macadamianut = document.getElementById("macadamianut")

Webcam.set({
    width: 320,
    height: 343,
    image_format: 'png',
    png_quality: 90
 });
 

