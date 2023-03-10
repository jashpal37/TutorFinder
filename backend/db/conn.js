const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose
  .connect(
    "mongodb://manthan:manthan123@ac-iswaaki-shard-00-00.etx0kun.mongodb.net:27017,ac-iswaaki-shard-00-01.etx0kun.mongodb.net:27017,ac-iswaaki-shard-00-02.etx0kun.mongodb.net:27017/mernstack?ssl=true&replicaSet=atlas-ag1a0d-shard-0&authSource=admin&retryWrites=true&w=majority",
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

  