# Social Media App
This is an example of a basic social media site, which allows users to sign in using Azure AD (Microsoft authentication service), and post comments onto a wall. Comments may then be liked by others or deleted by the user who posted it.

**Demo: https://jdp-socialmedia.herokuapp.com/**

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Azure AD Authentication, Mongo DB (Mongoose) and Node.js (Express). The site is hosted on Heroku. 


## Optimizations

If I had more time I would optimise the site so that users had the option to create public or private posts, and decide which posts other users could view. I would also introduce a feature so that posts had an option to reply, so other users could start a conversation. 

## Lessons Learned:

I learned that implementing an authentication feature can be intricate and it is essential to input the correct configuration details. I was using the secret user key instead of the secret user value, but the auth was not returning an error. It was hard to spot the bug, so this took a great deal of time. 