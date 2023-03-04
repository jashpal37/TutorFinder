const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose
  .connect(
    "mongodb+srv://manthan:<password>@cluster0.etx0kun.mongodb.net/mernstack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });