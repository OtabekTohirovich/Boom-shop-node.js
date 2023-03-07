import { Router } from "express";
const router = Router();

router.get("/rigister", (req, res) => {
  res.render("rigister");
});
router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
