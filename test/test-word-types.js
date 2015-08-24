(function () {
   'use strict';

	var expect = require('chai').expect;
	var WordForword = require('../index');
	var wordForword = new WordForword();

	describe('#wordTypes', function() {
		it('returns a non-empty array', function() {
			var result = wordForword.wordTypes();
			expect(result).to.be.instanceOf(Array);
			expect(result).to.have.length.above(0);
		});
	});

}());
