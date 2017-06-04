const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to DB before each test
before(function(done){
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made... go grab that Beer!');

    // Drop the collection
    mongoose.connection.collections.beers.drop(function(){
      done();
    });
  }).on('error', function(error){
    console.log('Connection Error ', error);
  });


});


// Drop the characters collection before each test
//beforeEach(function(done){
  // Drop the collection
//  mongoose.connection.collections.beers.drop(function(){
//    done();
//  });
//});
