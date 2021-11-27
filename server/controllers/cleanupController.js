exports.pdfCleanup = async (req, res) => {
  if (req.cookies.access_token) {
    res.send(true);

    res.end();
  } else {
    res.send(false);
    res.end();
  }
};
