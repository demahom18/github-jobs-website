const filterJobs = async (text, loc, ft) => {
  const baseUrl = 'https://cors.bridged.cc/https://jobs.github.com/positions.json'
  const url = baseUrl + `?description=${text}&location=${loc}&fulltime=${ft}`

  const results = await fetch(url).then(res => res.json())
  console.log('url: ', url)

  return { results }
}

export default filterJobs
