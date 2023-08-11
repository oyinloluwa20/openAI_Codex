import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container')
let loadInterval;
function loader(element){
  element.textContent ='';

  loadInterval = setInterval(()=>{
  element.textContent +='.';

  if(element.textContent ==='....'){
  element.textContent ='';
  }
  }, 300)
}

function generateUniqueId(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}



function typeText(element, text){
  let index =0;
  let Interval = setInterval(()=>{
    if(index <text.length){
      element.innerHTML =text.charAt(index);
      index++;
    }else{
      clearInterval(Interval);
    }
  }, 20)


}

function chatStripe (isAi, value, unqiueId){
  return(
    `
      <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
       <div class="profile">
        <img
          src ="${isAi? bot : user}"
          alt= ="${isAi? 'bot' : 'user'}"
       </div>
       <div class='message' id=${unqiueId}>${value}</div>
      </div>
      </div>
    `
  )
}

const handleSubmit = async (e) =>{
  e.preventDefault();

  const data = new FormData(form);

  chatContainer.innerHTML += chatStripe(false,data.get('prompt'))
  form.reset();

  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, "")

  chatContainer.scrollTop =chatContainer.scrollHeight;

  const messageDiv =document.getElementById(uniqueId)
  loader(messageDiv);

}   

form.addEventListener('submit', handleSubmit)
form.addEventListener('keyup', (e)=>{
  if (e.keycode === 13){
    handleSubmit(e)
  }
})