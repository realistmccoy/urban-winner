const api = {
    count: 5,
    sorted: 'created: asc',
}

export const getGithub = (username) =>
    fetch(`https://api.github.com/users/${username}/repos?per_page=${api.count}&sort=${api.sorted}&client_id=${api.clientId}&client_secret=${api.clientSecret}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));