const express = require("express");
const { ethers } = require("ethers");
const app = express();
const PORT = 3000;
const { ABI, CONTRACT_ADDRESS } = require("./constants/index.js");

const OWNER_PRIVATE_KEY = "";
const PROVIDER_URL = "";

const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
const wallet = new ethers.Wallet(OWNER_PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

app.use(express.json());

// Register a new patient
app.post("/patients", async (req, res) => {
  try {
    const tx = await contract.registerPatient();
    const receipt = await tx.wait();
    const event = receipt.events.find((e) => e.event === "PatientRegistered");

    if (!event || !event.args.patientID) {
      return res
        .status(500)
        .json({ error: "Event not found or invalid event format." });
    }

    const patientID = event.args.patientID.toString();
    res.json({ patientID });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Request access to a patient's records
app.post("/patients/:patientID/request-access", async (req, res) => {
  let doctorID, patientID;
  console.log(
    "Doctor ID Value:",
    req.body.doctorID,
    "Type:",
    typeof req.body.doctorID
  );
  console.log(
    "Patient ID Value:",
    req.params.patientID,
    "Type:",
    typeof req.params.patientID
  );
  try {
    const doctorIDInt = parseInt(req.body.doctorID);
    const patientIDInt = parseInt(req.params.patientID);

    doctorID = ethers.BigNumber.from(doctorIDInt);
    patientID = ethers.BigNumber.from(patientIDInt);
  } catch (e) {
    return res.status(400).json({ error: "Invalid number conversion" });
  }

  try {
    const tx = await contract.requestAccess(patientID, doctorID);
    await tx.wait();
    res.json({ status: "Request logged" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Grant access to a doctor
app.post("/patients/:doctorID/grant-access", async (req, res) => {
  let doctorID, patientID;
  try {
    const doctorIDInt = parseInt(req.params.doctorID);
    const patientIDInt = parseInt(req.body.patientID);

    doctorID = ethers.BigNumber.from(doctorIDInt);
    patientID = ethers.BigNumber.from(patientIDInt);
  } catch (e) {
    return res.status(400).json({ error: "Invalid number conversion" });
  }

  try {
    const tx = await contract.grantAccess(patientID, doctorID);
    await tx.wait();
    res.json({ status: "Access granted" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Deny access to a doctor
app.post("/patients/:patientID/deny-access", async (req, res) => {
  let doctorID, patientID;
  try {
    const doctorIDInt = parseInt(req.params.doctorID);
    const patientIDInt = parseInt(req.body.patientID);

    doctorID = ethers.BigNumber.from(doctorIDInt);
    patientID = ethers.BigNumber.from(patientIDInt);
  } catch (e) {
    return res.status(400).json({ error: "Invalid number conversion" });
  }

  try {
    const tx = await contract.denyAccess(patientID, doctorID);
    await tx.wait();
    res.json({ status: "Access denied" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Check if a doctor has access
app.get("/patients/:patientID/has-access/:doctorID", async (req, res) => {
  let doctorID, patientID;
  try {
    const doctorIDInt = parseInt(req.params.doctorID);
    const patientIDInt = parseInt(req.params.patientID);

    doctorID = ethers.BigNumber.from(doctorIDInt);
    patientID = ethers.BigNumber.from(patientIDInt);
  } catch (e) {
    return res.status(400).json({ error: "Invalid number conversion" });
  }

  try {
    const hasAccess = await contract.hasAccess(patientID, doctorID);
    res.json({ hasAccess });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
