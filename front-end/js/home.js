const baseURL = 'http://localhost:5000'

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': `gehad__${localStorage.getItem('token')}`
}


function getData() {

  axios({
      method: 'get',
      url: `${baseURL}/article`,
      headers
  }).then(function (response) {
      const {message, articles} = response.data
      showData(articles)
      console.log(articles);
      
  }).catch(function (error) {
      console.log(error);
  })
}

function showData(articles = []) {
  let box = ``
  for (let i=0; i < articles.length; i++){
      box += `
      <div class="mt-4 shadow-lg text-light text-start ps-4 pt-3 pb-2 rounded-3 bg-light text-dark">
      <h4 class="article" onclick='getArticle("${articles[i]._id}")'>${articles[i].title}</h4>
        <h6 class="d-inline">${articles[i].userId.userName}</h6>
        <p class="d-inline">${articles[i].createdAt}</p>
        <p class="text-info">${articles[i].content}</p>
      </div>
      
      `
  }
  document.getElementById('hometbody').innerHTML = box

  
  
}

getData()



function getArticle(id) {
    localStorage.setItem("articleID", id)
    window.location.href = 'article.html'
}