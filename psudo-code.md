# back-end:

## requests:

### GET who has the item the user need:

-filter by id of items who has it on his list  
-on the others-find their location  
-on the others find by distance

### PUT another item in the user's offer list:

-check if the user has it already  
-find by id/name the right item in the right collation  
-add it to the user info in the DB  
-add it to the user in the State!

### DELETE item from user's offer list:

-find the item in the user's offer list DB and delete it  
-find the item in the user's offer list State and delete it

### POST login

-find the user by email  
-check if password===hashed password

### POST create user

-save the info to the data base  
-add user info to the state  
-take the user to what he has to offer

### DELETE user

-find the user-and delete it  
-empty the state

### PATCH update user info

-find the user-find what value is you want to change  
-update the user in the db  
-update the user in the state
