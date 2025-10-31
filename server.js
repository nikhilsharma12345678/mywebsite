const express = require("express");
const app = express();
app.use(express.json());

let vendors = [
  { id: 1, name: "Vendor A", email: "admin@test.com", status: "Approved" },
  
];

// Get all vendors
app.get("/api/vendors", (req, res) => res.json(vendors));

// Approve vendor
app.post("/api/vendors/approve/:id", (req, res) => {
  const vendor = vendors.find(v => v.id == req.params.id);
  if (vendor) vendor.status = "Approved";
  res.json({ message: "Vendor approved", vendors });
});

// Reject vendor
app.post("/api/vendors/reject/:id", (req, res) => {
  const vendor = vendors.find(v => v.id == req.params.id);
  if (vendor) vendor.status = "Pending";
  res.json({ message: "Vendor rejected", vendors });
});
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

