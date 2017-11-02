'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var SpecialitiesSchema = new Schema({
  id:        Schema.Types.ObjectId,
  name:       String,
  createdBy:  ObjectId,
  createdAt:  {type: Date, default: Date.now},
  updatedBy:  ObjectId,
  updatedAt:  {type: Date, default: Date.now}
});

var ProvidersSchema = new Schema({
  id:                Schema.Types.ObjectId,
  firstName:          String,
  lastName:           String,
  middleName:         String,
  email:              String,
  speciality :        [{ type: Schema.Types.ObjectId, ref: 'Specialities' }],
  proyectedStartDate: {type: Date, default: Date.now},
  employerId:         ObjectId,
  providerType:       {type: String, enum: ['DO', 'NP', 'PA', 'MD', 'DPM', 'ARNP']},
  staffStatus:        {type: String, enum: ['CONSULTING', 'AFFILIATE', 'HONORARY', 'ASSOCIATE', 'TEACHING', 'COURTESY', 'ACTIVE', 'PROVISIONAL', 'COMMUNITY']},
  assignedTo:         ObjectId,
  status:             {type: String, enum: ['DENIED', 'AWAITING_CREDENTIALS', 'UNDER_REVIEW', 'READY_FOR_REVIEW', 'AWAITING_DECISION', 'APPROVED']},
  createdBy:          ObjectId,
  createdAt:          {type: Date, default: Date.now },
  updatedBy:          ObjectId,
  updatedAt:          {type: Date, default: Date.now },
});

module.exports = mongoose.model('Providers', ProvidersSchema);
module.exports = mongoose.model('Specialities', SpecialitiesSchema);