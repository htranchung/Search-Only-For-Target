const router = require("express").Router();
const data = require("../seeds/targetLocations.json");
const guest = require('./guestRoute');
// User Routes to pages
router.use("/", guest);
// API Route to get target location data
router.get("/api/:value", (req, res) => {
  const search = req.params.value;

  const targetObject = data.find(
    (obj) =>
      obj.tNumber.toLowerCase() === search.toLowerCase() ||
      obj.address.toLowerCase() === search.toLowerCase()
  );

  if (targetObject) {
    const filteredObject = {
      tNumber: targetObject.tNumber,
      address: targetObject.address,
      city: targetObject.city,
      state: targetObject.state,
      postal: targetObject.postal,
      latitude: targetObject.latitude,
      longitude: targetObject.longitude,
    };
    res.json(filteredObject);
  } else {
    res.status(404).send("T-Number OR Address Not Found!");
  }
});

module.exports = router;
