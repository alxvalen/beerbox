const assert = require('assert');
const Beer = require('../models/beer');

describe('Testing Beer Model', function(){

  var testBeer, returnedBeer;


  // TEST - Create new Beer
  it('Create a new Beer', function(done){
    testBeer = new Beer({
      title: 'Dummy IPA',
      author: 'Ivar Valen',
      brewed: '04.06.17',
      vol: 5.6
    });

    testBeer.save().then(function(){
      assert(testBeer.isNew === false);
      done();
    });
  });

  // TEST - Get Beer
  it('Get a sample of that new beer', function(done){
    Beer.findOne({title:'Dummy IPA'}).then(function(result){
      returnedBeer = result;
      assert(result.title === 'Dummy IPA');
      done();
    })
  });

  // TEST - Update Beer
  it('Update Beer', function(done){
    Beer.findOneAndUpdate({title:'Dummy IPA'}, {title:'Stupid Stout'}).then(function(){
      Beer.findOne({_id:testBeer._id}).then(function(result){
        assert(result.title != testBeer.title);
        done();
      })
    });
  });

});
