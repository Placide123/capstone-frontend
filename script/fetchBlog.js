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


            result?.length ?
                document.querySelector(".blog-image").innerHTML = result.map((res) =>
                `
                <div class="blog-image">
                <div class="blog-image1 blog__image__container">
                  <img src=" ${res.photo}" alt="showing a design" />
            
                  <h3>${res.title}</h3>
                  <p>
                  ${res.description}
                    <a href="portifolio.html">read more</a>
                  </p>
                </div>
           
      
                
                `).join(" ") :
                document.querySelector(".").innerHTML = "blogs not found";
        })
    }

    fetchBlogs()

