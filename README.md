# hngx-stage-two-backend
CRUD operation

Creating a README.md file to document how to use your REST API for creating, reading, updating, and deleting (CRUD) operations is a good practice for making your API user-friendly. Below is a template for such a README file:
Your API Name

Briefly describe your API and its purpose here.
Table of Contents

    Introduction
    Prerequisites
    Installation
    Usage
        Create a User
        Read All Users
        Read a User by ID
        Update a User
        Delete a User
    Sample Requests
    

Introduction

Provide a brief introduction to your REST API, explaining its purpose and what it allows users to do.
Prerequisites

List any prerequisites that users need to have installed or configured before they can use your API. This might include Node.js, MongoDB, or any specific packages or tools.
Installation

Explain how to install and set up your API. Include instructions for cloning the repository, installing dependencies, and configuring environment variables if necessary.

bash

# Clone the repository
git clone https://github.com/jjeett0007/hngx-stage-two-backend.git

# Navigate to the project directory
cd hngx-stage-two-backend

# Install dependencies
npm install

Usage

Provide detailed instructions on how to use your API for CRUD operations.
Create a User

To create a new user, send a POST request to the following endpoint:

http or https

POST /api

Include the user data in the request body in JSON format. The required fields are name.

Example request body:

json

{
  "name": "John Doe"
}


Read a User by ID

To retrieve a specific user by their ID, send a GET request to the following endpoint:

http or https

GET /api/user_id/:id

Replace :id with the actual ID of the user you want to retrieve.
Update a User

To update a user's information, send a PUT request to the following endpoint:

http or https

PUT /api/user_id/:id

Replace :id with the ID of the user you want to update. Include the updated user data in the request body in JSON format.

Example request body:

json

{
  "name": "Updated Name"
}

Delete a User

To delete a user, send a DELETE request to the following endpoint:

http or https

DELETE /api/user_id/:id

Replace :id with the ID of the user you want to delete.
Sample Requests

Provide some sample API requests that users can copy and use as a reference.

http

# Sample POST Request (Create a User)
POST /api
Content-Type: application/json

{
  "name": "Alice Smith"
}


# Sample GET Request (Read a User by ID)
GET /api/user_id/5f85a5b9d0ab8e5c897a16ef

# Sample PUT Request (Update a User)
PUT /api/user_id/5f85a5b9d0ab8e5c897a16ef
Content-Type: application/json

{
  "name": "Updated Name"
}

# Sample DELETE Request (Delete a User)
DELETE /api/user_id/5f85a5b9d0ab8e5c897a16ef
