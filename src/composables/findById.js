import { ref } from 'vue'
/**
 *
 * @param {String} id The id of the job Offer
 * @returns {Object} the job found or error
 */
const findById = (id) => {
  const job = ref(null)
  const error = ref(null)
  const onLoading = ref(true)
  const url = `https://cors.bridged.cc/https://jobs.github.com/positions/${id}.json`

  fetch(url).then(res => res.json())
    .then(data => {
      job.value = data
      error.value = null
      onLoading.value = false
      return { job, error, onLoading }
    })
    .catch(err => {
      console.error(err)
      error.value = 'Page Not found! Go back to home page'
      job.value = null
      onLoading.value = false
      return { job, error, onLoading }
    })

  return { job, error, onLoading }
}

export default findById
