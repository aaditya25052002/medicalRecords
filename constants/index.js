const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "AccessDenied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "AccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "AccessRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
    ],
    name: "PatientRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "denyAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "grantAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "hasAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "patients",
    outputs: [
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registerPatient",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "patientID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doctorID",
        type: "uint256",
      },
    ],
    name: "requestAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const CONTRACT_ADDRESS = "0xf983E64c73D677799657d4F1490C899BeCc1Ec64";

module.exports = { ABI, CONTRACT_ADDRESS };

//1019448852461
//961201516965
