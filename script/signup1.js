// let firstname=document.getElementById("txtFirstname");
// let lastname=document.getElementById("txtLastname");
// let email=document.getElementById("txtEmail");
// let pwd=document.getElementById("txtPwd");
// let conPwd=document.getElementById("txtConPwd");
// let btnRegister=document.getElementById("btnRegister");
// let form=document.querySelector("form");
// let formUser=document.getElementById("formUser");
// let formSubscribe=document.getElementById("formSubscribe")
// //let subscribeEmail=document.getElementById("subscribeEmail");

// const inputfirstname=formUser['firstname'];
// const inputlastname=formUser['lastname'];
// const inputemail=formUser['email'];
// const inputpassword=formUser['pwd'];
// // const inputsubscriber=formSubscribe['subscriber'];

// const users=[];

// const addUser =(firstname,lastname,email,pwd) =>{
//     users.push({
//     firstname,
//     lastname,
//     email,
//     pwd,
//     });
//     localStorage.setItem("users",JSON.stringify(users));
//     return{firstname,lastname,email,pwd};
// };

// formUser.onsubmit= e =>{
//     e.preventDefault();
//     validateInput();
//     const newUser= addUser(
//         inputfirstname.value,
//         inputlastname.value,
//         inputemail.value,
//         inputpassword.value
//     )
// };
// const subscribers=[];
// const addSubscriber=(subscriber) =>{
//     subscribers.push({
//         subscriber:subscriber,
//     });
//     localStorage.setItem("Subscribers",JSON.stringify(subscribers));
//     return {subscriber};
// };
// formSubscribe.onsubmit=e =>{
//     e.preventDefault();
//     const newSubscriber=addSubscriber(
//         inputsubscriber.value,
//     )
// };

// function validateInput(){
//     //check firstname is empty 
//     if(firstname.value.trim()===""){
//        onError(firstname,"firstname cannot be empty");
//     }else{
//         onSuccess(firstname);
//     }
    
//     if(lastname.value.trim()===""){
//         onError(lastname,"Second Name can not be empty");
//     }else{
//         onSuccess(lastname);
//     }

//     if(email.value.trim()===""){
//         onError(email,"Email cannot be empty");
//     }else{
//         if(!isValidEmail(email.value.trim())){
//             onError(email,"Email is not valid");
//         }else{
//             onSuccess(email);
//         }
//     }

//     //password
//     if(pwd.value.trim()===""){
//         onError(pwd,"Password cannot be empty");
//      }else{
//          onSuccess(pwd);
//      }
//      if(conPwd.value.trim()===""){
//         onError(conPwd," Confirm Password cannot be empty");
//      }else{
//          if(pwd.value.trim()!==conPwd.value.trim()){
//             onError(conPwd,"Password & Confirm password not matching");
//          }
//          else
//          onSuccess(conPwd);
//      }
// }

// document.querySelector("button")
// .addEventListener("click",(event)=>{
//     event.preventDefault();
//     validateInput();
//     //signup(event);
//     //subscribe(event);
// });

// function onSuccess(input){
//     let parent=input.parentElement;
//     let messageEle=parent.querySelector("small");
//     messageEle.style.visibility="hidden"; 
//     parent.classList.remove("error");
//     parent.classList.add("success");  
// }
// function onError(input,message){
//     let parent=input.parentElement;
//     let messageEle=parent.querySelector("small");
//     messageEle.style.visibility="visible";
//     messageEle.innerText=message;  
//     parent.classList.add("error");
//     parent.classList.remove("success");

// }

// function isValidEmail(email){
//    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


    

    async function addUser1() {

    const firstname=document.getElementById("txtFirstname").value;
    const lastname=document.getElementById("txtLastname").value;
    const email=document.getElementById("txtEmail").value;
    const password=document.getElementById("txtPwd").value; 

    
        const role = "user";
        try {
            const SignUp = await fetch("https://ptplacide.herokuapp.com/api/user/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                    role: role,
                    password: password,
                }),
            });
    
            const response = await SignUp.json();
            console.log(response);
            if (response?.success == "true") {
                alert('success');
            }
            else {
                alert('Error');
            }
        } catch (error) {
            alert(error)
        }
    }
addUser1();

