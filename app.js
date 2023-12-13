// Look, it's Javascript!
console.log("Hello class!!!") 

addEventListener("DOMContentLoaded", (event) => {
  const surpriseButton = document.querySelector("#surpiseButton");
  surpriseButton.addEventListener("click", on);
});


function on() {
  document.getElementById("overlay").style.display = "block";
  const audio = new Audio("https://cdn.glitch.global/c3cf1911-856f-4310-b5b5-5a8dc66d4a02/jumpscareAudio.mp3?v=1695941334504");
  const surpriseButton = document.querySelectorAll("#surpriseButton");
    audio.play()
}
  
function off() {
  document.getElementById("overlay").style.display = "none";

}
  
                          
                          
                       