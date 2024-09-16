# API Documentation - User and File Upload Services

This document provides an overview of the API endpoints for managing users and uploading files (PDFs) using this server.

---

## Table of Contents

- [API Documentation - User and File Upload Services](#api-documentation---user-and-file-upload-services)
  - [Table of Contents](#table-of-contents)
  - [User Routes](#user-routes)
    - [POST /users/create](#post-userscreate)
    - [GET /users](#get-users)
  - [Upload Routes](#upload-routes)
    - [POST /upload/pdf](#post-uploadpdf)
  - [Authentication and Verification](#authentication-and-verification)
    - [POST /users/login](#post-userslogin)
    - [GET /users/verify/:id/:token](#get-usersverifyidtoken)
  - [Error Handling](#error-handling)
    - [Sample Error Response](#sample-error-response)

---

## User Routes

### POST /users/create

- **Description**: Creates a new user in the database.
- **Request Body**:
    - `name`: User's name (String)
    - `email`: User's email (String)
    - `password`: User's password (String)
- **Response**:
    - `201 Created`: User created successfully.
    - `500 Internal Server Error`: If there was a problem during user creation.
- **Sample Request**:

    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```

- **Sample Response**:

    ```json
    {
        "message": "User created successfully",
        "user": {
            "_id": "abc123",
            "name": "John Doe",
            "email": "john@example.com"
        }
    }
    ```

---

### GET /users

- **Description**: Retrieves all users from the database.
- **Response**:
    - `200 OK`: Returns an array of users.
    - `500 Internal Server Error`: If there was a problem retrieving users.
- **Sample Response**:

    ```json
    [
        {
            "_id": "abc123",
            "name": "John Doe",
            "email": "john@example.com"
        },
        {
            "_id": "xyz456",
            "name": "Jane Doe",
            "email": "jane@example.com"
        }
    ]
    ```

---

## Upload Routes

### POST /upload/pdf

- **Description**: Uploads a PDF file.
- **Request**:
    - Multipart form data with a file field named `pdf` (Only PDF files allowed).
- **Response**:
    - `200 OK`: PDF uploaded and returned as a response.
    - `400 Bad Request`: No file uploaded or file is not a PDF.
    - `500 Internal Server Error`: If there was an issue during file upload.
- **Sample Request**:

    ```bash
    curl -X POST -F "pdf=@file.pdf" http://localhost:5000/upload/pdf
    ```

- **Sample Response**:
    The uploaded PDF is returned as a downloadable file.

---

## Authentication and Verification

### POST /users/login

- **Description**: Logs a user into the system by verifying credentials.
- **Request Body**:
    - `Username`: User's username or email (String)
    - `password`: User's password (String)
- **Response**:
    - `200 OK`: Login successful, returns user data and token.
    - `400 Bad Request`: Invalid credentials or unverified email.
    - `500 Internal Server Error`: If there was an issue during login.
- **Sample Request**:

    ```json
    {
        "Username": "john@example.com",
        "password": "password123"
    }
    ```

- **Sample Response**:

    ```json
    {
        "info": {
            "_id": "abc123",
            "name": "John Doe",
            "email": "john@example.com",
            "Username": "john123"
        },
        "message": "Login successful"
    }
    ```

---

### GET /users/verify/:id/:token

- **Description**: Verifies a user's email using a token sent to their email.
- **Parameters**:
    - `id`: The user's ID (String)
    - `token`: The verification token sent to the user's email (String)
- **Response**:
    - `200 OK`: Email verified successfully.
    - `400 Bad Request`: Invalid link or token.
    - `500 Internal Server Error`: If there was an issue during verification.
- **Sample Request**:

    ```
    GET /users/verify/abc123/verificationToken
    ```

- **Sample Response**:

    ```json
    {
        "info": "john123",
        "message": "Email verified successfully"
    }
    ```

---

## Error Handling

In case of an error, the server responds with the appropriate HTTP status code and a descriptive message:

- **400 Bad Request**: This error is returned when the client provides invalid data (e.g., missing fields, wrong data type).
- **500 Internal Server Error**: This error occurs if there is a server-side issue, such as a problem connecting to the database or processing the request.

### Sample Error Response

```json
{
    "message": "Internal server error"
}
