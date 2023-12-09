require("dotenv").config();
const express = require("express");

const app = express();

const gitData = {
  login: "SravanUppaluri",
  id: 35332430,
  node_id: "MDQ6VXNlcjM1MzMyNDMw",
  avatar_url: "https://avatars.githubusercontent.com/u/35332430?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SravanUppaluri",
  html_url: "https://github.com/SravanUppaluri",
  followers_url: "https://api.github.com/users/SravanUppaluri/followers",
  following_url:
    "https://api.github.com/users/SravanUppaluri/following{/other_user}",
  gists_url: "https://api.github.com/users/SravanUppaluri/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SravanUppaluri/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/SravanUppaluri/subscriptions",
  organizations_url: "https://api.github.com/users/SravanUppaluri/orgs",
  repos_url: "https://api.github.com/users/SravanUppaluri/repos",
  events_url: "https://api.github.com/users/SravanUppaluri/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SravanUppaluri/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2018-01-11T10:49:39Z",
  updated_at: "2023-12-09T06:26:05Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("hello Home");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at sravan.dev</h1>");
});

app.get("/github", (req, res) => {
  res.json(gitData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
