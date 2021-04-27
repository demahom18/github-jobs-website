// import { ref } from 'vue'
import { fetchJobs } from './filterJobs'

/**
 *
 * @param {String} id The id of the job Offer
 * @returns {Object} the job found or error
 */
const findById = (id) => {
  const url = `https://cors.bridged.cc/https://jobs.github.com/positions/${id}.json`

  const { jobs, error, onLoading } = fetchJobs(url)

  if (error.value) {
    error.value = 'Page Not found! Go back to home page'
    return error
  }

  return { job: jobs, error, onLoading }
}

export default findById
