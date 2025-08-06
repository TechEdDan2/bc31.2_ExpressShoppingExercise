process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let itemDb = require("../fakeDB");


let food = { id: 1, name: "apples", price: 5.99 }

beforeEach(() => {
    itemDb.push(food);
});

afterEach(() => {
    itemDb.length = 0;
});

describe("GET /items", () => {
    test("Get a list of items", async () => {
        const res = await request(app).get("/items");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ items: [food] });
    });

    test("Get a single item", async () => {
        const res = await request(app).get(`/items/${food.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: food });
    });

    test("Responds with 404 if item not found", async () => {
        const res = await request(app).get(`/items/999`);
        expect(res.statusCode).toBe(404);
    });
});

describe("POST /items", () => {
    test("Create a new item", async () => {
        const res = await request(app)
            .post("/items")
            .send({ name: "banana", price: 3.99 });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            item: { id: 2, name: "banana", price: 3.99 }
        });
    });
});

describe("PATCH /items/:id", () => {
    test("Update an existing item", async () => {
        const res = await request(app)
            .patch(`/items/${food.id}`)
            .send({ name: "green apples", price: 6.99 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            item: { id: 1, name: "green apples", price: 6.99 }
        });
    });
});

describe("DELETE /items/:id", () => {
    test("Delete an existing item", async () => {
        const res = await request(app)
            .delete(`/items/${food.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Deleted" });
    });

    test("Responds with 404 if item not found", async () => {
        const resp = await request(app)
            .delete(`/items/999`);
        expect(resp.statusCode).toBe(404);
    });
});
// End of tests
