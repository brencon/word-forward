(function () {
   'use strict';

	var expect = require('chai').expect;
	var WordForward = require('../index');
	var wordForward = new WordForward();

	describe('#wordTypes', function() {
		it('returns a non-empty array', function() {
			var result = wordForward.wordTypes();
			expect(result).to.be.instanceOf(Array);
			expect(result).to.have.length.above(0);
		});
	});

}());
