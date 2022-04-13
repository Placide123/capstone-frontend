
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let form=document.querySelector("form");

function validateInput(){
    //check Email is empty 

    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //password
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }else{
         onSuccess(pwd);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
    LoginFunc(event);
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function LoginFunc(e){
event.preventDefault();

var email= document.getElementById('txtEmail').value;
var pwd=document.getElementById('txtPwd').value;
var result=document.getElementById('result').value;
var user=localStorage.getItem('formData');
var data=JSON.parse(user);
console.log(data);

if(user==null){
    alert("wrong username");
    
}else if(email==data.email && pwd==data.pwd){
    
    location.href="dashboardformessage.html";
}
else{
    alert("wrong password");
}
}
// var user=localStorage.getItem('formData');
//  var data=JSON.parse(user);
// console.log(data);
