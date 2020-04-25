import express from 'express';
import fetch from 'node-fetch';

import { Room, Player } from './models';

const app: any = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/create', (req: any, res: any) => {
  res.send('POST request to the homepage');
});

app.get("/claims", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.get("/timeout", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.post('/join', (req: any, res: any) => {
  res.send('POST request to the homepage');
});

app.post('/ready', (req: any, res: any) => {
  res.send('POST request to the homepage');
});

app.get("/ready", (req: any, res: any) => {
  // tslint:disable-next-line:no-console
  console.log("Ready called");
  res.send('GET request to the homepage');
});

app.post("/number", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.post('/claim', (req: any, res: any) => {
  res.send('POST request to the homepage');
});

app.get("/status", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.get("/logs", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.get("/leaderboard", (req: any, res: any) => {
  res.send('GET request to the homepage');
});

app.listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
