
const mongoose = require('mongoose');
import app from './app'

const port = 5000;

// database
async function main() {
     try {
          await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
          console.log("Database connected successful");

          app.listen(port, () => {
               console.log(`Example app listening on port ${port}`)
          })
     }catch(err){
          console.log(`Failed to connect database, ${err}`);
     }
   }

main();



