import axios from 'axios'

const searchImages = async (url) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: ' Client-ID 1mf80cw2hf50L5ASYObbsE0OCw7yjDaGpXpmfL1IWNA',
    },
    params: {
      query: 'cars', // search term
    },
  })

  console.log(response)

  return response
}

export default searchImages
