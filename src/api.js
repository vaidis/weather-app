import axios from 'axios';

export const api = {
  get: async function get(url) {
    return axios.get(url, {
      headers: {
        "Content-Type": "application/hal+json",
      },
      timeout: 5000,
    })
      .then(response => response)
      .catch(error => {
        throw new Error(
          `${error.response.statusText} (${error.response.status})`
        );
      });

  }
}