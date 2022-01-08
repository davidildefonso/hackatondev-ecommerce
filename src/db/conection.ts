
import config from '../config/config';
import mongoose from 'mongoose';

const { username, password, database } = config;

const uri =
  `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;

const connect  =  () => mongoose.connect(uri);

export default connect;