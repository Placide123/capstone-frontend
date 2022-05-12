
const DataId = location.search.substring(1);
console.log(DataId)
const getblog = async () => {
    let result = [];
    fetch("https://ptplacide.herokuapp.com/api/blog/single/" + DataId, {
        method: "GET",

    })
        .then((response) => response.json())
        .then((json) => {
            result = json.data;
            console.log(result)
            document.getElementById("title").value = result.title;
            document.getElementById("author").value = result.author;
            document.getElementById("desc").value = result.description;
        })
        .catch((err) => console.log(err));
};
getblog();
