# User-Registration-Portal-With-Document-OCR
User registration portal with document ocr
I created backend, different API’s and frontend as well using MERN stack. On the starting page of the browser, the user needs to enter his/her basic details and also need to upload his/her PAN and AADHAR card and he has to click on getMyLocation button so that system can get get the live location of the user based on google api. On submit the user is navigated to another page where his picture is clicked with some constraints like time duration and only a single face must be present in the captured picture. After all this the user is displayed  his/her dashboard with all the information and documents he/she has uploaded. Here I also calculated the percentage of the similarity between the name entered by the user and the name readed from his/her uploaded documents.
There is another API for admin, who has privileges to see all the users present in the database with React-pagination at the bottom showing only 10 users per page, can modify their details, admin can download the user registration page as a password protected PDF and he can also delete any user. 
In this project i used many different technologies and packages like Nodejs, React, Express, MongoDB, SQL and packages like fs, mongoose, express, ID analyzer, multer, mysql, nodeqpdf, reverse-geocoding-google,uuid, jspdf-htmltocanvas, react-paginate, axios, bootstrap etc..
