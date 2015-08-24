(function () {
   'use strict';

	var expect = require('chai').expect;
	var WordForward = require('../index');
	var wordForward = new WordForward();

	describe('#businessName', function() {
		it('returns a non-empty array', function() {
			var result = wordForward.businessName();
			expect(result).to.have.length.above(0);
		});
	});
	describe('#businessName', function() {
		it('is three words', function() {
			var result = wordForward.businessName();
			var resultArray = result.split(' ');
			expect(resultArray).to.have.length(3);
		});
	});	

}());
