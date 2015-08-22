(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#isEmptyOrUndefined', function() {
		it('object should be undefined', function() {
			var obj = {};
			var result = intake.isEmptyOrUndefined(obj.test);
			expect(result).to.equal(true);
		});
		it('object should be empty', function() {
			var obj = {};
			var result = intake.isEmptyOrUndefined(obj);
			expect(result).to.equal(true);
		});	
		it('string should be empty', function() {
			var str = '';
			var result = intake.isEmptyOrUndefined(str);
			expect(result).to.equal(true);
		});
		it('whitespace should be empty', function() {
			var str = ' ';
			var result = intake.isEmptyOrUndefined(str);
			expect(result).to.equal(true);
		});	
		it('object should not be empty', function() {
			var obj = {
				'intake': 'test'
			};
			var result = intake.isEmptyOrUndefined(obj);
			expect(result).to.equal(false);
		});	
		it('string should not be empty', function() {
			var str = 'intake test';
			var result = intake.isEmptyOrUndefined(str);
			expect(result).to.equal(false);
		});
		it('number should not be empty', function() {
			var num = 0;
			var result = intake.isEmptyOrUndefined(num);
			expect(result).to.equal(false);
		});	
	});

}());
