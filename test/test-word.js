(function () {
   'use strict';

	var expect = require('chai').expect;
	var WordForward = require('../index');
	var wordForward = new WordForward();

	describe('#word', function() {
		it('return a random string', function() {
			var result = wordForward.word();
			expect(result).to.have.length.above(0);
		});
		it('return a random noun', function() {
			var result = wordForward.word('noun');
			expect(result).to.have.length.above(0);
		});
		it('return a random number', function() {
			var result = wordForward.word('number');
			expect(result).to.have.length.above(0);
		});
		it('random word from a random word type', function() {
			var wordTypes = wordForward.wordTypes();
			var wordType = wordTypes[Math.floor(Math.random()*wordTypes.length)];
			var result = wordForward.word(wordType);
			expect(result).to.have.length.above(0);
		});
		it('be empty for unknown type', function() {
			var result = wordForward.word('test');
			expect(result).to.equal('unknown word type');
		});	
		//var randomWord = 
	});

}());
