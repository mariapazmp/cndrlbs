'use strict';


var mongoose = require('mongoose'),
  Record = mongoose.model('Records');

exports.list_all_recs = function(req, res) {
  Record.find({}, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};

exports.create_a_rec = function(req, res) {
  var new_rec = new Record(req.body);
  new_rec.save(function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};

exports.read_a_rec = function(req, res) {
  Record.findById(req.params.recordId, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};

exports.update_a_rec = function(req, res) {
  Record.findOneAndUpdate({_id: req.params.recordId}, req.body, {new: true}, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};

exports.delete_a_rec = function(req, res) {
  Record.remove({
    _id: req.params.recordId
  }, function(err, record) {
    if (err)
      res.send(err);
    res.json({ message: 'Record successfully deleted from Database' });
  });
};