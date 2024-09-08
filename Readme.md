## A recovery plugin for an e-commerce business for an abandoned cart.

### Steps to run the application

- clone the repository `https://github.com/Anushka-shukla/GHC_Assignment.git`
- run: `npm install` in your terminal
- to start the node app server : `npm run dev`

- hit the `http://127.0.0.1:8080/events` api from postman with below data in body: 

`{
    "data": {
        "id": "9",
        "user": "Timmo"
    },
    "event": "cart_abandoned"
}`
- then you'll be able to see the scheduler sending reminders for T+30 mins, T+1 days, T+3 days (T = time at which cart was abandoned)

- to cancel the event trigger hit the `http://127.0.0.1:8080/events` api with below data in body:

`
{
    "data": {
        "id": "9",
        "user": "Timmo"
    },
    "event": "order_placed"
}`
- this will cancel the event that was sheduled as we get "order_placed" in event.
