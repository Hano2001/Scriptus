const mongoose = require("mongoose");
const ScriptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pdf: {
      type: Array,
      required: true,
    },
  },
  { collection: "scripts" },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Script", ScriptSchema);
