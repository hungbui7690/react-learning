import axios from 'axios'

const searchImages = async (url, term) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: ' Client-ID 1mf80cw2hf50L5ASYObbsE0OCw7yjDaGpXpmfL1IWNA',
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
