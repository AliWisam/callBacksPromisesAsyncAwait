console.log('1')
console.log('2')
// calculation().then((res) => console.log(res)) = getUser(1)
//   .then((user) => {
//     console.log(user)
//     return getRepos(user)
//   })
//   .then((repos) => {
//     console.log(repos)
//     return getRepoCommits(repos[0])
//   })
//   .then((commit) => console.log(commit))
//   .then((err) => console.log('error', err))

let data = Promise.allSettled([getUser(1), getRepos(), getRepoCommits()]).then(
  (res) => {
    console.log(res)
    res.forEach((ele) => {
      if (ele.status === 'fulfilled') console.log(ele)
    })
  },
)
// console.log(data)
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
      //   resolve(['Repo1', 'Repo2', 'Repo3'])
      //   reject({ success: false, error: new Error('something went wrong') })
      reject({ success: false, error: 'something went wrong' })
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
