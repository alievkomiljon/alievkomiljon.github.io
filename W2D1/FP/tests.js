describe("sum", function() {

    it("Expected output of sum([1,2,3,4]) is 10", function() {
      assert.equal(sum([1,2,3,4]), 10);
    });
  
    it("Expected output of sum([11,22,33,44]) is 110", function() {
      assert.equal(sum([11,22,33,44]), 110);
    });
  
});

describe("multiplies", function() {

    it("Expected output of multiplies([1,2,3,4]) is 24", function() {
      assert.equal(multiplies([1,2,3,4]), 24);
    });
  
    it("Expected output of multiplies([11,2,33]) is 726", function() {
      assert.equal(multiplies([11,2,33]), 726);
    });
  
});
describe("reverse", function() {

    it("Expected output of multiplies(\"hello world\") is dlrow olleh", function() {
      assert.equal(reverse("hello world"), "dlrow olleh");
    });
  
    it("Expected output of multiplies(\"Komiljon Aliev\") is veilA nojlimoK", function() {
      assert.equal(reverse("Komiljon Aliev"), "veilA nojlimoK");
    });
  
});
describe("filterLongWords", function() {

    it("Expected output of filterLongWords([\'first\',\'second\',\'third\',\'fourth\']) is [\'second\',\'fourth\']", function() {
      assert.deepEqual(filterLongWords(['first','second','third','fourth'], 5), ['second','fourth']);
    });
    it("Expected output of filterLongWords([\'Hi\',\'Hello\',\'What\'s up\',\'How are you doing\']) is [\'What\'s up\',\'How are you doing\']", function() {
        assert.deepEqual(filterLongWords(['Hi','Hello','What\'s up','How are you doing'], 5), ['What\'s up','How are you doing']);
      });
  
});