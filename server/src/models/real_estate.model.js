import mongoose from "mongoose";

const realEstateSchema = mongoose.Schema({
  id: { type: String, required: true },
  pictureUrl: { type: String, required: true, min: 3 },
  type: { type: String, required: true, min: 3 },
  area: { type: String, required: true, min: 3 },
  floor: { type: String, required: true, min: 3 },
  location: { type: String, required: true, min: 3 },
  price: { type: Number, required: true },
  // userId: { type: String, required: true },
});

const realEstateModel = mongoose.model("real_estate", realEstateSchema);

export { realEstateModel };
