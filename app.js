const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}

function close(){
    mainMenu.style.top='-100%';
}

const subscribeEmail=document.getElementById("subscribeEmail");
const subscribe=document.getElementById("subscribe");

// subscribe.addEventListener("click",function(){
// const email=subscribeEmail.value;
// console.log(email);
// });
function saveStorage(){
    localStorage.setItem("Email",subscribeEmail.value);
}
subscribe.addEventListener("click",saveStorage);

 const getMessage=document.getElementById("getMessage");
 let name=document.getElementById("name").value;
 let email=document.getElementById("email").value;
let message=document.getElementById("message").value  ;

function saveMessage(){
    console.log("herro there");
    var messageData={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value  
    }
      
       localStorage.setItem("messageData",JSON.stringify(messageData));
       console.log(localStorage.getItem(messageData.data));
       e.preventDefault();
       location.reload();
       
}
getMessage.addEventListener("click",saveMessage);
