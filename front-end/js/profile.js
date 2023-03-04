const baseURL = 'http://localhost:5000'

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': `gehad__${localStorage.getItem('token')}`
}


const userID = localStorage.getItem('userID')


function getUserProfile() {

  axios({
      method: 'get',
      url: `${baseURL}/user/${userID}`,
      headers
  }).then(function (response) {
      const {message, user} = response.data
      console.log(response);
      if (message == "Done") {
        $('#userName').val(user.userName);
        $('#oldPass').val('');
        $('#age').val(user.age);
      }else{
        alert("fail")
      }
  }).catch(function (error) {
      console.log(error);
  })
}

getUserProfile()


$('#updateProfile').click( () => {

  const userName = $('#userName').val();
  const oldPass = $('#oldPass').val();
  const newPass = $('#newPass').val();
  const cNewPass = $('#cNewPass').val();
  const age = $('#age').val();

  const data = {
    userName,
    oldPass,
    newPass,
    cNewPass,
    age
  }

  console.log({data});

  axios({
    method: 'put',
    url: `${baseURL}/user/${userID}`,
    data,
    headers
  }).then(function (response) {
    console.log({response});
    const {message} = response.data
    if(message == "Done") {
      alert('update success')
      window.location.href = 'add-post.html'
    } else {
      console.log('failed to update');
      alert(message)
    }
  }).catch(function (error) {
    console.log(error);
  })
});


function deleteprofile(id) {
  axios({
      method: 'delete',
      url: `${baseURL}/user/${userID}`,
      headers
  }).then(function (response) {
      console.log({response});
      const {message} = response.data
      if(message == "Done") {

        localStorage.removeItem('token')

        alert('deleted successfully')
        window.location.href = 'sign-up.html'
      } else {
        console.log('failed to delete post');
        alert(message)
      }
    }).catch(function (error) {
      console.log(error);
    })
}



function updateProfile(id) {
  localStorage.setItem("userID", id)
}