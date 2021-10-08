describe("String Test", function(){
    describe("Filtering a word from a sentence", function(){
        it("Expected output of filter('I am not feeling good today, I don't like food in Argiro') is 'I am feeling good today, I like food in Argiro'", function(){
            assert.equal("I am feeling good today, I like food in Argiro", "I am not feeling good today, I don't like food in Argiro".filter(["don't", "not"]))
        });

        it("Expected output of filter('This house is not nice!') is 'This house is nice!'", function(){
            assert.equal("This house is nice!", "This house is not nice!".filter(['not']))
        });
    });
});


describe("Array Test", function(){
    describe("Bubble Sort", function(){
        it("Expected output of bubbleSort([6, 4, 0, 3,-2, 1]) is [-2, 0, 1, 3, 4, 6]", function(){
            assert.deepEqual([-20, 0,  3, 4, 6, 11], [6, 4, 0, 3,-20, 11].bubbleSort());
        });

        it("Expected output of bubbleSort([10, 2, 88, -99, 3, 5]) is [-99, 2, 3, 5, 10, 88]", function(){
            assert.deepEqual([-9, 2, 3, 5, 10, 88], ([10, 2, 88, -9, 3, 5].bubbleSort()));
        });
    });
});


describe("Inheritance Test : Teacher", function(){
    describe("Prototype teach", function(){
        it("Expected output of Teacher.teach('Math') is 'Patrick is now teaching Math'", function(){
            let teacher1 = new Teacher();
            teacher1.initialize("Patrick", 40);
            teacher1.teach("Math");

            assert.deepEqual('Patrick is now teaching Math', teacher1.teach('Math'));
        });

        it("Expected output of Teacher.teach('Chemistry') is 'Frank is now teaching Chemistry'", function(){
            let teacher2 = new Teacher();
            teacher2.initialize("Frank", 60);
            teacher2.teach("Chemistry");

            assert.deepEqual('Frank is now teaching Chemistry', teacher2.teach('Chemistry'));
        });
    });
});