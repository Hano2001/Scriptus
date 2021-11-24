const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/users");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }

  return token;
};

// const jwtOptions = {
//   // Telling Passport to check authorization headers for JWT
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
//   // Telling Passport where to find the secret
//   secretOrKey: "Scriptus",
//   passReqToCallback: true, //<= Important, so that the verify function can accept the req param ie verify(req,payload,done)
// };

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "Scriptus",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }

      user.comparePassword(password, done);
    });
  })
);
