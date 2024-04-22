
//Тесты для Pet Store (хоть это и самая что ни на есть демо версия, мне, как совсем новичку, было удобнее 
//воспользоваться ею, так как с Book Store было не всё понятно)
describe("API тесты для https://petstore.swagger.io/v2", () => {
  describe("API тесты для GET запроса", () => {
  test("этот запрос должен выполняться со статусом 200", async () => {
  const response = await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");
  expect(response.status).toBe(200);
  });
  test("этот запрос возвращает json", async () => {
  const response = await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");
  expect(response.json).toBeDefined();
  });
  test("этот запрос возвращает json с конкретными полями и их значениями", async () => {
    const response = await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");
    const json = await response.json();
    expect(json[0].id).toBe(875); //скорее всего на данный момент уже не 875, но на момент прохождения тестов тест проходил успешно
    expect(json[1]).toHaveProperty("category");
    expect(json[2]).toHaveProperty("name");
  });  
});
describe("API тесты для POST запроса", () => {
  test('Этот запрос возвращает статус 200, выдаёт json и учпешно добавляет новое животное', async() => {
  const data = 
  {
    "id": 1556,
    "category": {
        "id": 1556,
        "name": "frog"
    },
    "name": "Klava",
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
}
  const response = await fetch("https://petstore.swagger.io/v2/pet", {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
      },
    body: JSON.stringify(data)})
    expect(response.status).toBe(200);
    expect(response.json).toBeDefined();
    const responseData = await response.json();
    expect(responseData.id).toBe(1556);
  });
});
describe("API тесты для PUT запроса", () => {
  test("этот запрос должен выполняться со статусом 200", async () => {
    const data = 
  {
    "id": 1617,
    "category": {
        "id": 1617,
        "name": "frog"
    },
    "name": "Klava",
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
}
  const response = await fetch("https://petstore.swagger.io/v2/pet", { method: 'PUT', headers: {
    'Content-Type': 'application/json',
    },
  body: JSON.stringify(data)});
  expect(response.status).toBe(200);
  });
  test("этот запрос должен возвращает json", async () => {
    const data = 
  {
    "id": 1617,
    "category": {
        "id": 1617,
        "name": "frog"
    },
    "name": "Klava",
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
}
  const response = await fetch("https://petstore.swagger.io/v2/pet", { method: 'PUT', headers: {
    'Content-Type': 'application/json',
    },
  body: JSON.stringify(data)});
  const responseData = await response.json();
  expect(responseData).toBeDefined();
  expect(responseData.id).toBe(1617);
  });
});
describe("API тесты для DELETE запроса", () => {
  test("этот запрос действительно удаляет животное", async () => {
  const response = await fetch("https://petstore.swagger.io/v2/pet/1620", {method: 'DELETE',});
  expect(response.status).toBe(404);
  });
});
});

