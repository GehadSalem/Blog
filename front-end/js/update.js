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
        url: `${baseURL}/article/getToUpdate/${articleID}`,
        headers
    }).then(function (response) {
        const {message, articles} = response.data
        console.log(response);
        if (message == "Done") {
          $('#title').val(articles.title);
          $('#content').val(articles.content);
        }else{
          alert("Please Log In first")
        }
    }).catch(function (error) {
        console.log(error);
    })
}

getArticle()



$('#updatePost').click( () => {

  const title = $('#title').val();
  const content = $('#content').val();

  const data = {
    title,
    content
  }

  console.log({data});

  axios({
    method: 'put',
    url: `${baseURL}/article/update/${articleID}`,
    data,
    headers
  }).then(function (response) {
    console.log({response});
    const {message} = response.data
    if(message == "Done") {
      alert('update success')
      window.location.href = 'dashboard.html'
    } else {
      console.log('failed to add post');
      alert(message)
    }
  }).catch(function (error) {
    console.log(error);
  })
});