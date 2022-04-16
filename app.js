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

let formSubscribe=document.getElementById("formSubscribe");
const inputsubscriber=formSubscribe['subscriber'];

const subscribers=[];
const addSubscriber=(subscriber) =>{
    subscribers.push({
        subscriber:subscriber,
    });
    localStorage.setItem("Subscribers",JSON.stringify(subscribers));
    return {subscriber};
};
formSubscribe.onsubmit=e =>{
    e.preventDefault();
    const newSubscriber=addSubscriber(
        inputsubscriber.value,
    )
};

let formMessage= document.getElementById("formMessage");
const inputName=formMessage['name1'];
const inputEmail=formMessage['email'];
const inputMessage=formMessage['message'];

const messages=[];
const addMessage=(name1,email,message) =>{
    messages.push({
        name1,
        email,
        message,
    });
    localStorage.setItem("Messages",JSON.stringify(messages));
    return {name1,email,message}
};
formMessage.onsubmit= e =>{
    e.preventDefault();
    const newMessage=addMessage(
        inputName.value,
        inputEmail.value,
        inputMessage.value
    )
};

let formPost =document.getElementById("formPost");
const inputTitle=formPost['title'];
const inputAuthor=formPost['author'];
const inputImage=formPost['image1'];
const inputPost=formPost['post'];

const posts=[];
const addPost=(title,author,image1,post) =>{
posts.push({
    title,
    author,
    image,
    post,
});
localStorage.setItem("Posts",JSON.stringify(posts));
return {title,author,image1,post};
};

formPost.onsubmit= e =>{
    e.preventDefault();
    const newPost=addPost(
        inputTitle.value,
        inputAuthor.value,
        inputImage.value,
        inputPost.value,
    )
}; 



 