# front-end

## implemant the quick search in drop down

1. how omri fima did it in the last class-trie-data structure

## requests

1. once the page loads-make a request for the items list of city list,in order to create a useful dropdown

## validation

- check input before send to the backend,such as:
  1. strong password
  2. valid e mail
  3. all the fields are full
  4. valid name
  5. check on img url

# back-end:

## requests:

### GET who has the item the user need:

- filter by id of items who has it on his list
- filter out only those in the user's city!(did it in order to use less og google api)
- on the others find by distance
- return only the users which their distance lower the the requested one

### PUT another item in the user's offer list:

- check if the user has it already
- find by id/name the right item in the right collation
- add it to the user info in the DB
- add it to the user in the State!

### DELETE item from user's offer list:

- find the item in the user's offer list DB and delete it
- find the item in the user's offer list State and delete it

### POST login

- find the user by email
- check if password===hashed password

### POST create user

- save the info to the data base
- add user info to the state
- take the user to what he has to offer

### DELETE user

- find the user-and delete it
- empty the state

### PATCH update user info

- find the user-find what value is you want to change
- update the user in the db
- update the user in the state

## models

### Work tools-items

- id string generate by mongodb required
- img string of source required
- name string required

### medicine-items

- id string generate by mongodb required
- img string of source required
- name string required

### food-items

- id string generate by mongodb required
- img string of source required
- name string required

### reviews

- id string generate by mongodb required
- from_id number required
- to_id number required
- content string not required
- rating Number required

### address

- id-using google place id
- Street String required
- number not required
- City String required
- lat Number required using google
- long Number required using google

### user

- Name String required
- Items list:Array
  - item:id Number required,img string of source required,name string required
- img not required
- email String required will be index!
- address:String required(refrence)
- isActive: Boolean(further i'll change it by the hours)
- reviews :Array of id not required
- token:String id not required
- password:String required
