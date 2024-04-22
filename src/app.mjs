const baseUrl = "https://petstore.swagger.io/v2";
console.log('GET')
import fetch from "node-fetch";
(async () => {
  try {
    const response = await fetch(`${baseUrl}/pet/findByStatus?status=sold`);
    console.log("status", response.status);
    const json = await response.json(); 
    console.log("JSON response", json); 
  } catch (error) {
    console.error("Не получилось получить список животных", error);
  }
})();


(async () => {
console.log("POST")
const data = 
  {
    "id": 1551,
    "category": {
      "id": 1551,
      "name": "dog"
    },
    "name": "Rex",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };
const response = await fetch(`${baseUrl}/pet`, {
  method: 'POST',
  body: JSON.stringify(data)})
  console.log(response.body());
})();


