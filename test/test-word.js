(function () {
   'use strict';

	var expect = require('chai').expect;
	var WordForword = require('../index');
	var wordForword = new WordForword();

	describe('#word', function() {
		it('return a random string', function() {
			var result = wordForword.word();
			expect(result).to.have.length.above(0);
		});
		it('return a random noun', function() {
			var result = wordForword.word('noun');
			expect(result).to.have.length.above(0);
		});
		it('return a random number', function() {
			var result = wordForword.word('number');
			expect(result).to.have.length.above(0);
		});
		it('random word from a random word type', function() {
			var wordTypes = wordForword.wordTypes();
			var wordType = wordTypes[Math.floor(Math.random()*wordTypes.length)];
			var result = wordForword.word(wordType);
			expect(result).to.have.length.above(0);
		});
		it('be empty for unknown type', function() {
			var result = wordForword.word('test');
			expect(result).to.equal('unknown word type');
		});	
		//var randomWord = 
	});

}());
