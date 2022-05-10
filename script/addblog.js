async function SendArticle() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const image1 = document.getElementById("image1").value;
    const Description=document.getElementById("Description").value;
    var form = document.getElementById("formPost");

    const token = localStorage.getItem('token');

    if (title == "") {
        alert("Error", "Please fill in the title", "error");
    } else {
        try {
            const SendArticle = await fetch("https://ptplacide.herokuapp.com/api/blog/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": 'Bearer ' + token
                },
                body: JSON.stringify({
                    title: title,
                    author: author,
                    description:Description,
                    photo:image1,
                    
                }),
            });
            const response = await SendArticle.json();
            console.log(response);
            if (SendArticle.success && SendArticle.data) {
                form.reset();
                alert("post Sent Successfully");
            } else {
                alert("Error", response.message, "error");
            }
        } catch (error) {
            alert("Error");
        }
    }
}
//SendArticle();


