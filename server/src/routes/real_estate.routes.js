import express from "express";
import {
  GET_ALL_REAL_ESTATES,
  GET_ALL_USER_REAL_ESTATES,
  GET_REAL_ESTATE_BY_ID,
  ADD_REAL_ESTATE,
  DELETE_REAL_ESTATE_BY_ID,
} from "../controllers/real_estate.controller.js";
import auth from "../middlewares/authorization.js";

const router = express.Router();

router.get("/real_estates", GET_ALL_REAL_ESTATES);

router.get("/real_estates/user", auth, GET_ALL_USER_REAL_ESTATES);

router.get("/real_estates/:id", GET_REAL_ESTATE_BY_ID);

router.post("/real_estates", auth, ADD_REAL_ESTATE);

router.delete("/real_estates/:id", auth, DELETE_REAL_ESTATE_BY_ID);

export default router;
