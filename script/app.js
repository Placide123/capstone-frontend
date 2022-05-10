// const mainMenu=document.querySelector('.mainMenu');
// const closeMenu=document.querySelector('.closeMenu');
// const openMenu=document.querySelector('.openMenu');



// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);

// function show(){
//     mainMenu.style.display='flex';
//     mainMenu.style.top='0';
// }

// function close(){
//     mainMenu.style.top='-100%';
// }

// let formSubscribe=document.getElementById("formSubscribe");
// const inputsubscriber=formSubscribe['subscriber'];

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

// let formMessage= document.getElementById("formMessage");
// const inputName=formMessage['name1'];
// const inputEmail=formMessage['email'];
// const inputMessage=formMessage['message'];

// const messages=[];
// const addMessage=(name1,email,message) =>{
//     messages.push({
//         name1,
//         email,
//         message,
//     });
//     localStorage.setItem("Messages",JSON.stringify(messages));
//     return {name1,email,message}
// };
// formMessage.onsubmit= e =>{
//     e.preventDefault();
//     const newMessage=addMessage(
//         inputName.value,
//         inputEmail.value,
//         inputMessage.value
//     )
// };

// let formPost =document.getElementById("formPost");
// const inputTitle=formPost['title'];
// const inputAuthor=formPost['author'];
// const inputImage=formPost['image1'];
// const inputPost=formPost['post'];

// const posts=[];
// const addPost=(title,author,image1,post) =>{
// posts.push({
//     title,
//     author,
//     image,
//     post,
// });
// localStorage.setItem("Posts",JSON.stringify(posts));
// return {title,author,image1,post};
// };

// formPost.onsubmit= e =>{
//     e.preventDefault();
//     const newPost=addPost(
//         inputTitle.value,
//         inputAuthor.value,
//         image.target.value,
//         inputPost.value,
//     )
// }; 







    async function Subscribe() {
        const subemail = document.getElementById("subscribeEmail").value;
        console.log(subemail)
    
        try {
            const Sub = await fetch("https://ptplacide.herokuapp.com/api/subscriber/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                
                body: JSON.stringify({
                    Email: subemail,
                }),
            });
           
          
            const response = await Sub.json();
            // console.log(response);
            if (Subscribe.status == 201) {
                alert("Success");
                }
            else {
                alert("Error");
            }
        } catch (error) {
            alert("Error");
        }
    }
    
    Subscribe();



    async function SendMessage() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        var form = document.getElementById("formMessage");
    
        if (email == "") {
            alert("Error", "Please fill in the email", "error");
        } else {
            try {
                const SendMessage = await fetch("https://ptplacide.herokuapp.com/api/message", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Name: name,
                        Email: email,
                        message: message,
                    }),
                });
                response = await SendMessage.json();
                console.log(response);
                if (SendMessage.success && SendMessage.data) {
                    form.reset();
                    alert("Message Sent Successfully");
                } else {
                    alert("Error", response.message, "error");
                }
            } catch (error) {
                alert("Error");
            }
        }
    }

    SendMessage();
