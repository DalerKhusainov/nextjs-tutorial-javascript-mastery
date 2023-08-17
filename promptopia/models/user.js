import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

///////////////////////////////////////////////////////////
// USUALLY IF WE'RE WORKING WITH A REGULAR EXPRESS BACKEND
// WE WOULD SAY SOMETHING LIKE THIS:

// const User = model('User', UserSchema)

// WE WOULD DO THIS IF WE WERE WORKING WITH A REGULAR
// ALWAYS ON ALWAYS RUNNING BACK-END
///////////////////////////////////////////////////////////

// BUT IN NEXTJS IT'S A BIT DIFFERENT, WE SAID THE ROUTE IS ONLY
// GOING TO BE CREATED AND RUNNING FOR THE TIME WHEN IT IS GETTING COLD
// SO THERE IS ONE CHECK WE HAVE TO MAKE
// THE 'MODELS' OBJECT IS PROVIDED BY THE MONGOOSE
// LIBRARY AND STORES ALL THE REGISTERED MODELS.
// IF A MODEL NAMED 'USER' ALREADY EXISTS IN THE
// 'MODELS' OBJECT, IT ASIGGNS THAT EXISTING MODEL TO
// THE 'USER' VARIABLE.
// THIS PREVENTS REDEFINING THE MODEL AND ENSURES
// THAT THE EXISTING MODEL IS REUSED.

// IF A MODEL NAMED 'USER' DOES NOT EXIST IN THE
// 'MODELS' OBJECT, THE 'MODEL' FUNCTION FROM MONGOOSE
// IS CALLED TO CREATE A NEW MODEL
// THE NEWLY CREATED MODEL IS THEN ASSIGNED TO THE
// 'USER' VARIABLE.

// SO ESSENTIALLY ALONGSIDE JUST CREATING A NEW MODEL WE CAN
// SAY FIRST LOOK INTO THE MODEL.USER, SEE IF IT'S THERE AND
// ONLY IF IT'S NOT THERE THEN CREATE A NEW MODEL
const User = models.User || model("User", UserSchema);
// THAT'S BECAUSE THIS ROUTE GETS CALLED EVERY TIME AND THE CONNECTION IS
// ESTABLISHED EVERY SINGLE TIME FROM SCRATCH, SO WE HAVE TO MAKE THIS ADDITIONAL CHECK

export default User;
