
    const fetchMessage = async () => {
        let result = [];
        const token = localStorage.getItem('token');
        console.log(token);
        await fetch('https://ptplacide.herokuapp.com/api/message', {
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
            ${res.Name}
            </td>
            <td>
            ${res.Email}
            </td>
            <td>
            ${res.message}
            </td>

            </tr>
          </tbody>
        </table>
          `  ).join(" ") :
          document.querySelector("#messages").innerHTML = "message not found";
          
                
            })
        }
 fetchMessage();


