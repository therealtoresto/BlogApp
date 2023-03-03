import mongoose from 'mongoose';
import config from '../config.json' assert {type: 'json'};

const { connect } = mongoose;
const { development } = config;

const username = development.username;
const password = development.password;
const connection = `yourConnectionString`;

const db = async () => {
  try {
    await connect(connection);
    console.log('Server is connected to MongoDB 🌱');
  }
  catch(err) {
    if (err) {
      console.log(err);
    };
  };
}

export { db };