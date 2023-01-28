const { Bmi } = require("../Models/bmi.model");

const bmiCal = async (req, res) => {
  const { weight, height } = req.body;
  const bmiVal = weight / (height * height);
  const bmi = new Bmi({ bmiVal });
  await bmi.save();
  res.send({ msg: "BMI calculated", bmi });
};

module.exports = { bmiCal };
