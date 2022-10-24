// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//GRAB HTML HEART DRAWING AND ADD AN EVENT LISTENER TO IT SO WE CAN CLICK ON IT.
let heart=document.querySelector ('.like-glyph')
heart.addEventListener ("click", (clickEmptyHeart))


function heartChange(heart){
  
}
//CREATE A FUNCTION WHERE I SAY THAT IF I CLICK THE EMPTY HEART IT WILL INVOKE MIMICSERVERCALL 

function clickEmptyHeart (e) {
  fetch ("http://mimicServer.example.com")
  .then (function(response){
    return response.json();
  })
  

  .catch(function(error){
    let errorRedSign= document.getElementById("modal");
    errorRedSign.className=''
    //document.getElementById("modal").removeAttribute("hidden");
    
    alert ('There is an Error');
    console.log (error.message);
    //setTimeOut(()=> {console.log ('#modal')},3000);
    setTimeout(()=> {
        errorRedSign.className="hidden"
  },3000);
  //full heart when clicked and red
  
})
  
  
}

//QUEDA PENDIENTE QUE DESAPAREZCA CON TIMEOUT EL ERRR Y HACER EL CORAZON, Y LO DEMAS DESPUES DE ESO EN LAS INSTRUCCIONES
  //e.target.FULL_HEART.value()

//IT WILL CHANGE TO FULL_HEART, IF I CLICK AGAIN IT WILL CHANGE TO EMPTY HEART
//function likeUnlikeHeartLoop {


//(EMPTY_HEART,FULL_HEART)=>{

//})

//const input= EMPTY_HEART.addEventListener('click',mimicServerCall)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
