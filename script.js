const wordText=document.querySelector(".word");
hintText=document.querySelector(".hint span");
timerText=document.querySelector(".Time b");
refreshButton=document.querySelector(".refresh");
wordCheck=document.querySelector(".check");
inputField=document.querySelector("input");

let correctWord,timer;
const initTimer=maxtime=>{
  clearInterval(timer);
  timer=setInterval(()=>{
    if(maxtime>0){
      maxtime--;
      return timerText.innerText=maxtime;
    }
    clearInterval(timer);
    alert(`TimeOut! ${correctWord.toUpperCase()} was correct word`);
    initGame();
  },1000);
}

const initGame=()=>{
  initTimer(30);
  let randomObj=words[Math.floor(Math.random()*words.length)];
  let wordArray=randomObj.word.split("");
  for(let i=wordArray.length;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
  }
  wordText.innerHTML=wordArray.join(" ");
  hintText.innerHTML=randomObj.hint;
  correctWord=randomObj.word.toLowerCase();
  inputField.value="";
  inputField.setAttribute("maxlength",correctWord.length);
 
}
initGame();
const checkWord=()=>{
  let userWord=inputField.value.toLowerCase();
  if(!userWord) return alert(`please enter a word check`);

  if(userWord!==correctWord) return alert(`Oops! ${userWord} is not correct`);
  alert(`Congrats! ${userWord.toUpperCase()} is correct`);
  initGame();
}

refreshButton.addEventListener("click",initGame);
wordCheck.addEventListener("click",checkWord);