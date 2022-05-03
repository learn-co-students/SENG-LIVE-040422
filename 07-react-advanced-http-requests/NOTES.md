Problem: We need to complete the edit feature


2 things we are concerned with:

1. How to update the backend(server) with the new entries 

- fetch()
- PATCH
- body: formData(the state inside of edit component)


WE ARE GOING TO SEND A PATCH REQUEST AND UPDATE THE RESOURCE IN THE DATABASE

2. How to update the frontend(client) with the new state

- inside of our .then we are going to figure out how to update the state 




# Delete a project 


1. an event attached to the delete button inside of projectlistitem component