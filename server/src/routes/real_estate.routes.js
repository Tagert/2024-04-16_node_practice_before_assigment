import express from "express";
import {
  GET_ALL_REAL_ESTATES,
  GET_REAL_ESTATE_BY_ID,
  ADD_REAL_ESTATE,
} from "../controllers/real_estate.controller.js";
import auth from "../middlewares/authorization.js";

const router = express.Router();

router.get("/real_estates", auth, GET_ALL_REAL_ESTATES);

router.get("/real_estates/:id", GET_REAL_ESTATE_BY_ID);

router.post("/real_estates", ADD_REAL_ESTATE);

export default router;
