import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello docker!🐳");
});

app.listen(3000,()=>{
  console.log('Listening on http://localhost:3000')
})


