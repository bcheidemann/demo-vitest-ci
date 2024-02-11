import axios from "axios";
import { describe, expect, test } from "vitest";

describe("GET User", () => {
  test("should return a valid user", async () => {
    // Arrange
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://gorest.co.in/public/v2/users/6265173",
      headers: {
        "Authorization":
          "Bearer ce4c6db71f7829fda83f02aeda9091df7214a42b9969a96a1bb38cdf34d7c29d",
      },
      validateStatus: () => true,
    };

    // Act
    const result = await axios.request(config);

    // Assert
    expect(result.status).toBe(200);
    expect(result.data).toMatchInlineSnapshot(`
      {
        "email": "bhadraksh_devar@koepp.example",
        "gender": "male",
        "id": 6265173,
        "name": "Bhadraksh Devar",
        "status": "active",
      }
    `);
  });
});

describe("POST Users", () => {
  test("should provide appropriate field validation on the request", async () => {
    // Arrange
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        "Authorization":
          "Bearer ce4c6db71f7829fda83f02aeda9091df7214a42b9969a96a1bb38cdf34d7c29d",
      },
      validateStatus: () => true,
    };

    // Act
    const result = await axios.request(config);

    // Assert
    expect(result.status).toBe(422);
    expect(result.data).toMatchInlineSnapshot(`
      [
        {
          "field": "email",
          "message": "can't be blank",
        },
        {
          "field": "name",
          "message": "can't be blank",
        },
        {
          "field": "gender",
          "message": "can't be blank, can be male of female",
        },
        {
          "field": "status",
          "message": "can't be blank",
        },
      ]
    `);
  });
});
