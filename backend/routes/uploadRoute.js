import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFiles(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    console.log("no error");

    return cb(null, true);
  } else {
    console.log("error");
    cb("Error: Images Only!");
  }
}
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => checkFiles(file, cb),
});

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file.path);
  res.send(`/${req.file.path.replace(/\\/g, "/")}`);
  // console.log("inside upload");
  // res.json({ mes: "loshara" });
});

export default router;
