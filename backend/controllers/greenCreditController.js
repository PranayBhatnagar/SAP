const GreenCredit = require('../models/GreenCredit');

const createGreenCredit = async (req, res) => {
  const { userId, activities, score } = req.body;
  try {
    const greenCredit = new GreenCredit({
      userId,
      activities,
      score
    });
    const savedGreenCredit = await greenCredit.save();
    res.status(201).json(savedGreenCredit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGreenCreditByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const greenCredits = await GreenCredit.find({ userId });
    res.status(200).json(greenCredits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createGreenCredit, getGreenCreditByUser };
