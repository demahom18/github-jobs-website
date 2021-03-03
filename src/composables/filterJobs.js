import { ref } from 'vue'
const jobs = ref(null)
const onLoading = ref(false)
const error = ref(null)
const baseUrl = 'https://cors.bridged.cc/https://jobs.github.com/positions.json'

/**
 * Filter data from the github job api
 * @param {String} url the url of the api call
 * @returns {Object} The jobs data or an error msg
 */
const fetchJobs = (url) => {
  //  Init values
  onLoading.value = true
  jobs.value = null
  error.value = null

  fetch(url)
    .then(res => res.json())
    .then(data => {
      jobs.value = data
      onLoading.value = false
      error.value = null

      return { jobs, error, onLoading }
    })
    .catch(err => {
      jobs.value = null
      onLoading.value = false
      error.value = 'Can\' fetch data. Please try again in 30s'
      console.error('Can\'t fetch data', err)
      return { jobs, error, onLoading }
    })
}

/**
 * Filter jobs data
 * @param {String} text text to search by description
 * @param {String} loc text to search by location
 * @param {String} ft text to search by fulltime
 * @returns {Object} results of filtering
 */
const filterJobs = (text = '', loc = '', ft = '') => {
  const url = baseUrl + `?description=${text}&location=${loc}&full_time=${ft}`
  fetchJobs(url)
  return { jobs, onLoading, error }
}

export default filterJobs
