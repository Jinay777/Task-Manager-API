const notFound = (req, res) => {
  res.status(404).send("ROUTE CANNOT BE FOUND");
};

module.exports = notFound;
