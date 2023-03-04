const baseURL = 'http://localhost:5000'

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': `gehad__${localStorage.getItem('token')}`
}


const articleID = localStorage.getItem('articleID')

console.log({articleID});

function getArticle() {

    axios({
        method: 'get',
        url: `${baseURL}/article/getToShow/${articleID}`,
        headers
    }).then(function (response) {
        const {message, articles} = response.data
        console.log(response);
        if (message == "Done") {
          document.getElementById('title').innerHTML = articles.title;
          document.getElementById('content').innerHTML = articles.content;
          document.getElementById('author').innerHTML = articles.userId.userName;
          document.getElementById('date').innerHTML = articles.createdAt;
        }else{
          alert("fail")
        }
    }).catch(function (error) {
        console.log(error);
    })
}

getArticle()

