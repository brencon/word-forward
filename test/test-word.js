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
		it('return a random number', function() {
			var result = wordForward.word('number');
			expect(result).to.have.length.above(0);
		});
		const wordTypes = wordForward.wordTypes();
		for (let wordType of wordTypes) {
			it('random word of word type ' + wordType, function() {
				var result = wordForward.word(wordType);
				expect(result).to.have.length.above(0);			
			});
		}
		it('be empty for unknown type', function() {
			var result = wordForward.word('test');
			expect(result).to.equal('unknown word type');
		});	
	});

}());
