const axios = require('axios')
console.log('1')
console.log('2')

async function callMe() {
  try {
    // const user = await getUser(1)
    // console.log(user)
    // const repos = await getRepos(user.userName)
    // console.log(repos)
    // const commits = await getRepoCommits(repos[0])
    // console.log(commits)
    //////////////
    let links = []
    for (let i = 0; i <= 200; i++) {
      links.push(`https://jsonplaceholder.typicode.com/todos/${i}`)
    }
    // for (let j = 0; j < links.length; j++) {
    //   const { data } = await axios.get(links[j + 1])
    //   console.log(data)
    // }
    let resultInPromisses = links.map((link) => {
      return axios.get(link)
    })
    console.log('resultInPromisses', resultInPromisses)
    let result = Promise.allSettled(resultInPromisses).then((res) =>
      console.log(res),
    )
    result.map((ele) => {
      if (ele.status === 'fulfilled') {
        console.log(ele.value.data)
      } else {
      }
    })
    console.log(result)
    console.log(error)
  } catch (error) {
    console.log(error)
  }
}
callMe()

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, userName: 'AliWIsam' })
    }, 2000)
  })
}
function getRepos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Repo1', 'Repo2', 'Repo3'])
      //   reject({ success: false, error: new Error('something went wrong') })
      //   reject({ success: false, error: 'something went wrong' })
    }, 2000)
  })
}
function getRepoCommits(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Commit1', 'Commit2', 'Commit3'])
    }, 2000)
  })
}

function calculation() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 1000000000; i++) {}
    resolve('result')
  })
}
console.log('4')
