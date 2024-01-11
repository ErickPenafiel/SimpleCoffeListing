export const fetchProducts = () => {
  return fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('Error fetching products')
    })
}
