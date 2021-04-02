const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
}
const END_POINT = "http://localhost:3333"

const API = {
  get: {
    JsonInputString: async () => {
      const response = await fetch("http://localhost:3333/data/").then(async (res) => {
        return await res.json();
      });
      return response;
    }
  },
  post: {
    JsonInputString: async (body) => {
      const response = await fetch(`${END_POINT}/data/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ data: body }),
      });
      return response.json();
    }
  }
}

export default API;