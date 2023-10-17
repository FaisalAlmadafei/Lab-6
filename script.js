const initLikes = 220 ; 
const initDisLikes = 34 ; 


let likesCount = initLikes ; 
let DisLikesCount = initDisLikes  ; 

let LikesBtn = document.getElementById('likeBtn') ; 
let DisLikesBtn =  document.getElementById('dislikeBtn') ; 

LikesBtn.innerText = "👍" + initLikes ; 
DisLikesBtn.innerText = "👎" + initDisLikes ; 

function doLike(){
    likesCount ++ ; 
    LikesBtn.innerText = "👍" + likesCount ; 
    disableButtons() ; 
    setCooki();
    
    

}

function doDislike(){
    DisLikesCount ++ ; 
    DisLikesBtn.innerText = "👎" + DisLikesCount ; 
    disableButtons() ; 
    setCooki() ; 


}


function disableButtons(){
    LikesBtn.disabled= true ; 
    DisLikesBtn.disabled = true ; 
  
  }


  function setCooki(){
    document.cookie = "Voted=true; SameSite=Strict; Max-Age=" + 60 ; 
  }

  window.onload = function(){
    if(document.cookie && document.cookie.indexOf("Voted") >-1){
        disableButtons() ; 

    }
  }
  
  

