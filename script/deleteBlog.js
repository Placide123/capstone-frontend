async function deleteBlog(blogId) {
    console.log(blogId);
    const token = localStorage.getItem('token');
    try {
        const deleteBlog = await fetch("https://ptplacide.herokuapp.com/api/blog/delete/" + blogId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": 'Bearer ' + token
            },
        });
        response = await deleteBlog.json();
console.log(response);
        if (response.success) {
            console.log(response);
            console.log(blogId);
            alert(" Blog deleted")
            location.reload();
        }

        else {
            alert("error occured")
        }
    } catch (error) {

    }
}
