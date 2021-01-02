import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';


const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: { type: Number, unique: true, required: true},
  title: {type: String, required: true },
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  favourites: [MovieSchema] 
});

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

//encrypts the password property before it is saved or updated
UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, (err, salt)=> {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, (err, hash)=> {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

export default mongoose.model('User', UserSchema);