const express = require('express');
const mongoose = require('mongoose');
const cardsRoute = require('./routes/cards');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());
app.use("/cards", cardsRoute);

app.get("/", (req, res) => {
    res.send("wellcome to tinder backend");
});


mongoose.connect('mongodb+srv://root:kiran@cluster0.cjkd2.mongodb.net/tinderDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).
then(() => console.log('Database connected successfuly')).
catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server listning at port no - ${PORT}`))
