const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
{"sk_test_51IMFnVK7esPNr8xaXoX0pScwbuWMdt6R957PMtvJuqhmrDxUlUmHBwtgnUTFpp8wXWVTaQaffnHrb1KIsvUTC0A500zfQx4knS"}

// API

// - APP CONFIG

const app = express();

// - MIDDLEWARES

app.use(cors({origin: true}));
app.use(express.json());

// - API ROUTES

app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Recieved yay >>> the amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
// OK - CREATED SOMETHING
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - LISTEN COMMAND

exports.api = functions.https.onRequest(app)

// EXAMPLE ENDPOINT
// http://localhost:5001/clone-9babb/us-central1/api