const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

exports.transcribeAudio = async (req, res) => {
  try {
    const filePath = req.file.path;

    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));
    formData.append("model", "whisper-1");

    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ text: response.data.text });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Transcription failed" });
  }
};