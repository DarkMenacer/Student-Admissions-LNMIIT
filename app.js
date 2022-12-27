import express from "express";
import * as url from "url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import {SignUp, Login, StoreData, EvaluateApplicantOptions, AdministratorFunction, Tutorial} from "./Controller/app_controller.js"

const PORT = 3001 | process.env.PORT;

const app = express();
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.resolve(__dirname, './frontend/build')));
}

app.get("/load", Tutorial);

app.post("/signUpData", SignUp);

app.post("/loginData", Login);

app.post("/store", StoreData);

app.post("/roundsEval", EvaluateApplicantOptions);

app.post("/administrator", AdministratorFunction);

app.get("*", (req, res) => {res.send("<h1>Error!</h1><br/><p>Change URL</p>");});

app.listen(PORT, async () => {
  console.clear();
  console.log(`Server listening on ${PORT}`);
});
