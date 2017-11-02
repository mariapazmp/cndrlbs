/*'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32');
var EmailType = require('mongoose-type-email');

var SpecialitiesSchema = new Schema({
  id:        Schema.Types.ObjectId,
  name:       String,
  createdBy:  Int32,
  createdAt:  {type: Date, default: Date.now},
  updatedBy:  Int32,
  updatedAt:  {type: Date, default: Date.now}
});

var ProvidersSchema = new Schema({
  id:                Schema.Types.ObjectId,
  firstName:          String,
  lastName:           String,
  middleName:         String,
  email:              EmailType,
  speciality :        [{ type: Schema.Types.ObjectId, ref: 'Specialities' }],
  proyectedStartDate: {type: Date, default: Date.now},
  employerId:         Int32,
  providerType:       {type: String, enum: ['DO', 'NP', 'PA', 'MD', 'DPM', 'ARNP']},
  staffStatus:        {type: String, enum: ['CONSULTING', 'AFFILIATE', 'HONORARY', 'ASSOCIATE', 'TEACHING', 'COURTESY', 'ACTIVE', 'PROVISIONAL', 'COMMUNITY']},
  assignedTo:         Int32,
  status:             {type: String, enum: ['DENIED', 'AWAITING_CREDENTIALS', 'UNDER_REVIEW', 'READY_FOR_REVIEW', 'AWAITING_DECISION', 'APPROVED']},
  createdBy:          Int32,
  createdAt:          {type: Date, default: Date.now },
  updatedBy:          Int32,
  updatedAt:          {type: Date, default: Date.now },
});

*/
//module.exports = mongoose.model('Providers', ProvidersSchema);
//module.exports = mongoose.model('Specialities', SpecialitiesSchema);