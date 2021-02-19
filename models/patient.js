const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patientschema = new Schema({
    doctor: {
    type: String,
    required: true
    },
    name: {
      type: String,
      required: true
      },
    email: {
    type: String,
    required: true
      },
    contact: {
      type: String,
      required: true
    },
    profession: {
      type: String,
      required: true
    },
    gender: {
      type: String
     
    },
    birthdate: {
      type: String
      
    },
    reasonConsultation: {
      type: String,
      required: true
    },
    takeScan: {
      type: String,
      required: true
    },
    haveDisease: {
      type: String,
      required: true
    },
    newInfo: {
      type: String
      
    },
    leftEye: {
      type: String
      
    },
    rightEye: {
      type: String
    },
    consultantDate: {
        type: Object
    }
    // consultant : [new Schema({
    //     cons: {type: Array},
    // }, {strict: false})
    // ]
  });
  
  module.exports = Patient = mongoose.model("patients", Patientschema);