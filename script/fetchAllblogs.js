//fetching blog

const fetchBlogs = async () => {
    let result = [];
    await fetch('https://ptplacide.herokuapp.com/api/blog/get/', {
        method: "GET",
    })
        .then(response => response.json())
        .then(json => {
            result = json.data
            console.log(result)


            result?.length?
                document.querySelector("#blogs").innerHTML = result.map((res) =>
                `
               
                <table>
          
                <tbody>
                <tr>
                 <td>
                 ${res._id}
                 </td>
                 <td>
                 ${res.title}
                 </td>
                 <td>
                 ${res.author}
                 </td>
                 <td><a href="updateblog.html?${res?._id}">Edit</a> </td>
                 <td>
                <button id="${res?._id}"  onclick="deleteBlog(this.id)">DELETE</button>
                </td>
                 </tr>
               </tbody>
             </table>
              
      
                
                `).join(" ") :
                document.querySelector("#blogs").innerHTML = "blogs not found";
        })
    }

    fetchBlogs()