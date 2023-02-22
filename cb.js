console.log('1')
console.log('2')
// console.log('3')
const user = getUser(1, (user) => {
  console.log(user)
  getRepos(user.userName, (repos) => {
    console.log(repos)
    getRepoCommits(repos[0], (commit) => {
      console.log(commit)
    })
  })
})
// console.log(user?.id)
// function getUser(id, callback) {
//   setTimeout(() => {
//     callback({ id: id, userName: 'AliWIsam' })
//   }, 2000)
// }

//Call back hell
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, userName: 'AliWIsam' })
  }, 2000)
}
function getRepos(userName, callback) {
  setTimeout(() => {
    callback(['Repo1', 'Repo2', 'Repo3'])
  }, 2000)
}
function getRepoCommits(userName, callback) {
  setTimeout(() => {
    callback(['Commit1', 'Commit2', 'Commit3'])
  }, 2000)
}

console.log('4')
