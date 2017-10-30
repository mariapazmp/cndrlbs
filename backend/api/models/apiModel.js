'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32');
var EmailType = require('mongoose-type-email');

var SpecialitiesSchema = new Schema({
  name: {
    type: String
  },
  createdBy: {
    type: Int32
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: Int32
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

var ProvidersSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  middleName: {
    type: String
  },
  email: {
    type: EmailType
  },
  speciality : {
    type: 
  },
  proyectedStartDate: {
    type: Date,
    default: Date.now
  },
  employerId: {
    type: Int32
  },
  providerType: {
    type: String,
    enum: ['DO', 'NP', 'PA', 'MD', 'DPM', 'ARNP']
  },
  staffStatus: {
    type: String,
    enum: ['CONSULTING', 'AFFILIATE', 'HONORARY', 'ASSOCIATE', 'TEACHING', 'COURTESY', 'ACTIVE', 'PROVISIONAL', 'COMMUNITY']
  },
  assignedTo: {
    type: Int32
  },
  status: {
    type: String,
    enum: ['DENIED', 'AWAITING_CREDENTIALS', 'UNDER_REVIEW', 'READY_FOR_REVIEW', 'AWAITING_DECISION'. 'APPROVEDw']
  },
  createdBy: {
    type: Int32
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: { 
    type: Int32
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});





var RecordSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Records', RecordSchema);