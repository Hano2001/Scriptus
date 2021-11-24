exports.test = async (req, res) => {
  console.log("TESTAR");
};
exports.checkLogin = async (req, res) => {
  if (req.cookies.access_token) {
    res.send(true);
    console.log("COOKIE TRUE");
    res.end();
  } else {
    console.log("COOKIE FALSE");
    res.send(false);
    res.end();
  }
};
// router.get("/checklogin"),
//   (req, res) => {
//     if (req.cookies.access_token) {
//       res.send(true);
//       console.log("COOKIE TRUE");
//       res.end();
//     } else {
//       console.log("COOKIE FALSE");
//       res.send(false);
//       res.end();
//     }
//   };
