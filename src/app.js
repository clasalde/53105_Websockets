import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import multer from "multer";

const app = express();
const PUERTO = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);


//Upload images with multer - START
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

app.post("/upload", upload.array("kamado"), (req, res) => {
    res.send("Image uploaded!")
})
//Upload images with multer - END


app.listen(PUERTO, () => {
    console.log(`Server running on port: ${PUERTO}`);
});