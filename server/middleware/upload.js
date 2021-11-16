const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const storage = new GridFsStorage({
  url: db,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    file: (req, file) => {
      const match = ["pdf"];

      if (match.indexOf(file.mimetype) === -1) {
        const filename = `${Date.now()}-any-name-${file.originalname}`;
        return filename;
      }
      return {
        bucketName: "pdfs",
        filename: `${Date.now()}-any-name-${file.originalname}`,
      };
    },
  },
});

module.exports = multer({ storage });
