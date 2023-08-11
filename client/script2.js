// import bot from 'assets/bot.svg'
// import user from './assets/user.svg'


let result = document.getElementById('result');
const form = document.querySelector('form');
function chatStripe(isAi,value){

return(
`
<div class="wrapper">


<div class="chat">
       
        
       
       <div class='message'>
       <span>${isAi? 'Bot: ' : 'User:'}</span>

       ${value}</div>
      

</div>
</div>



`
)
}


const handleSubmit = async (e) =>{
    e.preventDefault()
    const formx = new FormData(form)

result.innerHTML+= chatStripe(false, formx.get('chat-box'))




form.reset()
}

form.addEventListener('submit', handleSubmit)


// function addcode(word){
//     text.innerHTML +='love thikjnkjs'

//     result.innerHTML +=`<h1>${word}</h1> <h2>${word}</h2>`
// }

// addcode('give')

















