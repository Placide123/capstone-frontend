
function signup(event){
event.preventDefault();
location.reload();
var formData={
    firstname:document.getElementById("txtFirstname").value,
   lastname:document.getElementById("txtLastname").value,
   email:document.getElementById("txtEmail").value,
   pwd:document.getElementById("txtPwd").value   
   };
   localStorage.setItem('formData',JSON.stringify(`formData`));
   console.log(localStorage.getItem(`formdata`));
   event.preventDefault();
}

const   signup =e =>{
    let formData={
     firstname:document.getElementById("txtFirstname").value,
    lastname:document.getElementById("txtLastname").value,
    email:document.getElementById("txtEmail").value,
    pwd:document.getElementById("txtPwd").value   
    }
    localStorage.setItem('formData',JSON.stringify(formData));
    console.log(localStorage.getItem('formdata'));
    e.preventDefault();
}