import { ref } from 'vue'
/**
  * Fetch data from github api
  *
*/
const getJobs = (url) => {
  const jobs = ref(null)
  const onLoading = ref()
  const error = ref(null)
  const baseUrl = 'https://cors.bridged.cc/https://jobs.github.com/positions.json'
  const loadData = () => {
    onLoading.value = true
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        jobs.value = data
        error.value = null
        onLoading.value = false
      })
      .catch(err => {
        jobs.value = null
        onLoading.value = false
        error.value = 'Can\' fetch data. Please try again in 30s'
        console.error('Can\'t fetch data', err)
      })
  }
  return { loadData, jobs, onLoading, error }
}

export default getJobs
