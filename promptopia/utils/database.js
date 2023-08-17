import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";

// let isConnected = false; // TRACK THE CONNECTION

// export const connectToDB = async () => {
//   // THIS SETS THE MONGOOSE OPTIONS
//   // IF WE DON'T DO THIS WE'RE GOING TO GET WARNINGS IN THE CONSOLE
//   // IT'S RECOMMENDED SETTING STRICT QUERY TO TRUE
//   mongoose.set("strictQuery", true);

//   // CHECK IF WE CURRENTLY CONNECTED
//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     // IF TRUE WE RETURN OUT OF THIS FUNCTION TO STOP IT FROM RUNNING
//     return;
//   }
//   // IF WE ARE NOT ALREADY CONNECTED DO THIS
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
