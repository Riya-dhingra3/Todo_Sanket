const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("pages/index", {
      task: [
        { caption: "First", isCompleted: false },
        { caption: "Second", isCompleted: true },
      ],
    });
  });
  
  app.post("/addTodo", (req, res) => {
    const newTask = req.body.caption;
    res.send("Hey"+newTask);
  });


  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
    