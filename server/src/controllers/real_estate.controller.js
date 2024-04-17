import { realEstateModel } from "../models/real_estate.model.js";

const GET_ALL_REAL_ESTATES = async (req, res) => {
  try {
    const realEstate = await realEstateModel.find();

    if (!realEstate.length) {
      return res.status(200).json({ message: "Data not exist" });
    }

    return res.json({ List: realEstate });
  } catch (err) {
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const GET_REAL_ESTATE_BY_ID = async (req, res) => {
  try {
    const findRealEstate = await realEstateModel.findById(req.params.id);

    if (!findRealEstate) {
      return res.status(400).json({
        message: `The entered ID (${req.params.id}) does not exist. Please try entering a different ID.`,
      });
    }

    return res.json(findRealEstate);
  } catch (err) {
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const ADD_REAL_ESTATE = async (req, res) => {
  try {
    const realEstate = new realEstateModel({
      pictureUrl: req.body.pictureUrl,
      type: req.body.type,
      area: req.body.area,
      floor: req.body.floor,
      location: req.body.location,
      price: req.body.price,
    });
    realEstate.id = realEstate._id.toString();

    const response = await realEstate.save();

    return res.status(201).json({
      response: response,
      message: `${req.body.type} was added successfully`,
    });
  } catch (err) {
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export { GET_ALL_REAL_ESTATES, GET_REAL_ESTATE_BY_ID, ADD_REAL_ESTATE };
