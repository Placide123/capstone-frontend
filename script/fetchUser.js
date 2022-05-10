const fetchUsers = async () => {
    let result = [];
    const token = localStorage.getItem('token');
    console.log(token);
    await fetch('https://ptplacide.herokuapp.com/api/user/get/', {
        method: "GET",
        headers: {
            "Content-type": "application/json", 
            "authorization": 'Bearer ' + token
        
        },
    })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(result)
            result?.length ?
            document.querySelector("#messages").innerHTML=result.map((res) =>

            `
            <table>
      
       <tbody>
       <tr>
       <td>
        ${res._id}
        <td>
        ${res.firstName}
        </td>
        <td>
        ${res.lastName}
        </td>
        <td>
        ${res.email}
        </td>
        <td>
        ${res.password}
        </td>
        <td>
        <a href="#">Delete</a>
        </td>

        </tr>
      </tbody>
    </table>
      `  ).join(" ") :
      document.querySelector("#messages").innerHTML = "message not found";
      
            
        })
    }
fetchUsers();