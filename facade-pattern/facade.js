const axios = require('axios');


/**
 * Facade pattern implementation: Client facing code: Complex logic code write here
 */
function getFetch(userId){

  let baseUrl = "https://jsonplaceholder.typicode.com/users";

  if (userId) baseUrl += `?userId=${userId}`;

  return axios.get(baseUrl)
  .then((response)=> response.data).catch(err => console.log(err));
}


function getUsers(){
  return getFetch();
}

function getUserPosts(userId){
  return getFetch(userId);
}

getUsers()
  .then(users=> {
    users.forEach(user => {
      getUserPosts(user.id).then(posts =>{
        console.log(user.name);
        console.log(posts.length);
      })
    })
});