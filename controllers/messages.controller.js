const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
}

function postMessages(req, res) {
  console.log("update");
}

module.exports = {
  getMessages,
  postMessages,
};
