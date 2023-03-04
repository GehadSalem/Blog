const baseURL = 'http://localhost:5000'

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': `gehad__${localStorage.getItem('token')}`
}

const articleID = localStorage.getItem('articleID')


function getData() {

  axios({
      method: 'get',
      url: `${baseURL}/article`,
      headers
  }).then(function (response) {
      const {message, articles} = response.data
      showData(articles)
      
  }).catch(function (error) {
      console.log(error);
  })
}

function showData(articles = []) {
  let box = ``
  for (let i=0; i < articles.length; i++){
      box += `
      <tr>
          <td>${[i]}</td>
          <td>${articles[i].title}</td>
          <td>${articles[i].content}</td>
          <td class="profile" onclick="window.location.href = 'profile.html'">${articles[i].userId.userName}</td>
          <td>
              <button onclick='deleteItem("${articles[i]._id}")' class="btn btn-danger">Delete</button>
          </td>
          <td>
              <button onclick='updateItem("${articles[i]._id}")' class="btn btn-success">Update</button>
          </td>
      </tr>`
  }
  document.getElementById('tbody').innerHTML = box

  
  
}

getData()



$('#addPost').click( () => {
  const title = $('#title').val();
  const content = $('#content').val();

  const data = {
    title,
    content
  }

  console.log({data});

  axios({
    method: 'post',
    url: `${baseURL}/article`,
    data,
    headers
  }).then(function (response) {
    console.log({response});
    const {message} = response.data
    if(message == "Done") {
      alert('added success')
      getData()
      // localStorage.setItem("articleID", response.data.article._id)
      console.log(response);
      window.location.href = 'dashboard.html'

    } else {
      console.log('failed to add post');
      alert(message)
    }
  }).catch(function (error) {
    console.log(error);
  })
});



function deleteItem(id) {
  axios({
      method: 'delete',
      url: `${baseURL}/article/${articleID}`,
      headers
  }).then(function (response) {
      console.log({response});
      const {message} = response.data
      if(message == "Done") {
        alert('deleted successfully')
        getData()
      } else {
        console.log('failed to delete post');
        alert(message)
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
  
  
  function updateItem(id) {
  localStorage.setItem("articleID", id)
  window.location.href = 'update.html'
  }
  