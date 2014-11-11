var q = QUnit.test;

q( "Check Split Name", function( assert ) {
  var adamSplit = "adam".split('');
  var result = ["a","d","a","m"]; 
  assert.deepEqual(adamSplit, result);
});


q( "Check Cheer", function( assert ) {
  assert.equal(name, "adam");
});
