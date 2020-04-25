import express from 'express';
import fs from 'fs';
import fetch from 'node-fetch';

import { Room, Player } from './models';

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/create', (req, res) => {
  res.send('POST request to the homepage');
});

app.get("/claims", (req, res) => {
  res.send('GET request to the homepage');
});

app.get("/timeout", (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/join', (req, res) => {
  res.send('POST request to the homepage');
});

app.post('/ready', (req, res) => {
  res.send('POST request to the homepage');
});

app.get("/ready", (req, res) => {
  // tslint:disable-next-line:no-console
  console.log("Ready called");
  res.send('GET request to the homepage');
});

app.post("/number", (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/claim', (req, res) => {
  res.send('POST request to the homepage');
});

app.get("/status", (req, res) => {
  res.send('GET request to the homepage');
});

app.get("/logs", (req, res) => {
  res.send('GET request to the homepage');
});

app.get("/leaderboard", (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
