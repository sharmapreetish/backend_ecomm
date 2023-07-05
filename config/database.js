const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Preetish23:Preetish23@cluster0.ojnph2u.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual MongoDB URI

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
