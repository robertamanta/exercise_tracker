# Exercise tracker


[![Run on Repl.it](https://replit.com/badge/github/robertamanta/exercise_tracker)](https://exercise_tracker.robertamanta.repl.co)


This project is a part of Back End Development and APIs certification on freeCodeCamp.

## Documentation

1. You can create a user by posting form data username to /api/users.
2. You can make a GET request to /api/users to get a list of all users
3. You can add an exercise to any user by posting form data _id (userId), description, duration, and optionally date to /api/users/_id/exercises. If no date is supplied it will use current date. 
3. You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
4. You can retrieve part of the log of any user by also passing along optional parameters: from / to / limit. (Date format: yyyy-mm-dd, limit: number)

## Installation

npm install - to install all the dependencies
Update the URI in .env file with your own.

## Example usage:

1.Create a user:

![image](https://user-images.githubusercontent.com/116081834/211199332-0a5aa822-0c18-4d86-87a8-c00918cbd5d7.png)

The JSON response:

![image](https://user-images.githubusercontent.com/116081834/211199354-c317fe73-91f7-4afd-bd6d-5f6acf991877.png)

2.Visiting <i>/api/users</i> will show a list of all users

![image](https://user-images.githubusercontent.com/116081834/211199435-7d022b09-32e5-416c-acdd-4a5bcfaad3b2.png)

3.Create an exercise:

![image](https://user-images.githubusercontent.com/116081834/211199540-154eb2c5-b599-4b12-a08c-c633fe3a385a.png)

The JSON response:

![image](https://user-images.githubusercontent.com/116081834/211199559-b8a1ac46-2e7f-450c-bc90-84516131e616.png)

4.Retreving a full exercise log:

![image](https://user-images.githubusercontent.com/116081834/211199629-278f304b-a456-42c0-b813-d6dcf26b0834.png)


