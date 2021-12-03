const jwt_decode = require("jwt-decode");

exports.checkLogin = async (req, res) => {
  if (req.cookies.access_token) {
    const jwtCookie = jwt_decode(req.cookies.access_token);
    const onlineUser = jwtCookie.sub;
    res.send({ online: true, userId: onlineUser });

    res.end();
  } else {
    res.send(false);
    res.end();
  }
};
