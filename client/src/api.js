import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/photos', {
    headers: {
      Authorization: ' Client-ID 1mf80cw2hf50L5ASYObbsE0OCw7yjDaGpXpmfL1IWNA',
    },
    params: {
      query: term,
    },
  })

  return response.data // ***
}

export default searchImages
