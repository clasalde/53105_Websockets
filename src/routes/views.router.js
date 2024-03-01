import {Router} from "express";
const router = Router();

//Products Array
const productsArray = [
    {modelo: "Kamado Argentino", descripcion: "Kamado Exterior", precio: 125000},
    {modelo: "Kamado Pampa", descripcion: "Kamado para comidas gourmet", precio: 87000},
    {modelo: "Kamado Norte", descripcion: "Kamado base cerámica", precio: 350000},
]


//View Routes
router.get("/", (req, res) => {
    res.render("index", {title: "Inicio"});
})

router.get("/nosotros", (req, res) => {
    res.render("nosotros", {title: "Quienes Somos"});
})

router.get("/productos", (req, res) => {
    res.render("productos", {title: "Nuestros Productos", productsArray});
})

export default router;