var num1 = document.querySelectorAll(".drum").length ;
for(var i=0;i<num1;i++){
document.getElementsByTagName("button")[i].addEventListener("click",function(){
        var innerHtmlContent = this.innerHTML;
        clickHandle(innerHtmlContent);
        addAnimation(innerHtmlContent);
        // this.classList.toggle("color");
});
}

document.addEventListener("keypress",function(event){
        clickHandle(event.key);
        addAnimation(event.key);
})

function clickHandle(key){
        
        
        switch (key){
                case "w":
                        var audio = new Audio("/crash.mp3");
                        audio.play();
                
                break;
                
                case "a":
                        var audio1 = new Audio("/kick-bass.mp3");
                        audio1.play();
                break;

                case "s":
                        var audio2 = new Audio("/snare.mp3");
                        audio2.play();
                break;

                case "d":
                        var audio3 = new Audio("/tom-1.mp3");
                        audio3.play();
                break;

                case "j":
                        var audio4 = new Audio("/tom-2.mp3");
                        audio4.play();
                break;

                case "k":
                        var audio5 = new Audio("/tom-3.mp3");
                        audio5.play();
                break;

                case "l":
                        var audio6 = new Audio("/tom-4.mp3");
                        audio6.play();
                break;

                default: alert("INVALID");

        }
}

function addAnimation(currentKey){
        // document.querySelector("."+currentKey).classList.toggle("pressed");
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
                activeButton.classList.remove("pressed");
        }, 100);
}