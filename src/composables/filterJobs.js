
/**
 *
 * @param {String} url The url to get the data from
 * @returns {Promise<Array> | []} the jobs data filtered
 */
const filter = (url) => fetch(url).then(res => res.json()).then(data => data)

const filterJobs = (text, loc, ft) => {
  const baseUrl = 'https://cors.bridged.cc/https://jobs.github.com/positions.json'
  const urlText = baseUrl + `?search=${text}`
  const urlLoc = baseUrl + `?search=${loc}`
  const urlFulltime = baseUrl + '?full_time=on'

  const textResult = text ? filter(urlText) : null
  const locationResult = loc ? filter(urlLoc) : null
  const fulltimeResult = ft ? filter(urlFulltime) : null

  return { textResult, locationResult, fulltimeResult }
}
export default filterJobs
