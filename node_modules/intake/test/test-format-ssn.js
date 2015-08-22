(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#formatSSN', function() {
		it('nine-character string of numbers should be XXX-XX-XXXX', function() {
			var ssn = '111111111';
			var result = intake.formatSSN(ssn);
			expect(result).to.equal('111-11-1111');
		});
		it('string with letters will not be formatted to SSN', function() {
			var ssn = '12345678A';
			var result = intake.formatSSN(ssn);
			expect(result).to.equal(ssn);
		});	
		it('string already formatted as SSN will not change', function() {
			var ssn = '111-11-1111';
			var result = intake.formatSSN(ssn);
			expect(result).to.equal(ssn);
		});	
	});

}());
