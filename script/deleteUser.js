async function deleteUser(userId) {
    console.log(userId);
    const token = localStorage.getItem('token');
    try {
        const deleteUser = await fetch("https://ptplacide.herokuapp.com/api/user/delete/" + userId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": 'Bearer ' + token
            },
        });
        response = await deleteUser.json();
        console.log(response);
        if (response.success) {
            console.log(response);
            console.log(userId);
            alert(" user deleted successfully")
            location.reload();
        }

        else {
            alert("error occured")
        }
    } catch (error) {

    }
}