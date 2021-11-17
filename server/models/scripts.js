const mongoose = require("mongoose");
const ScriptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pdf: {
      type: Buffer,
      required: true,
    },
  },
  { collection: "scripts" }
);

module.exports = mongoose.model("Script", ScriptSchema);
