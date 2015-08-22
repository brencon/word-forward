(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#isNumeric', function() {
		it('single digit is a number', function() {
			var str = '1';
			var result = intake.isNumeric(str);
			expect(result).to.equal(true);
		});
		it('single letter is not a number', function() {
			var str = 'a';
			var result = intake.isNumeric(str);
			expect(result).to.equal(false);
		});	
		it('number is a number', function() {
			var str = '12345';
			var result = intake.isNumeric(str);
			expect(result).to.equal(true);
		});	
		it('sentence is not a number', function() {
			var str = 'this is not a number';
			var result = intake.isNumeric(str);
			expect(result).to.equal(false);
		});	
		it('numbers and letters combined is not a number', function() {
			var str = '1111 Drive Way';
			var result = intake.isNumeric(str);
			expect(result).to.equal(false);
		});	
		it('float is numeric', function() {
			var str = '9.99';
			var result = intake.isNumeric(str);
			expect(result).to.equal(true);
		});
		it('multiple decimals in string is not a number', function() {
			var str = '0.1.2';
			var result = intake.isNumeric(str);
			expect(result).to.equal(false);
		});	
	});

}());
