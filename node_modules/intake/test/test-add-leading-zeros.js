(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#addLeadingZeros', function() {
		it('add one leading zero to a single digit', function() {
			var num = 1;
			var result = intake.addLeadingZeros(num, 2);
			expect(result).to.equal('01');
		});
		it('add a random number of leading zeros', function() {
			var num = 2;
			var randomLength = Math.floor(Math.random()*100);
			var result = intake.addLeadingZeros(num, randomLength);
			expect(result.length).to.equal(randomLength);
			var leadingCharacterSum = 0;
			for (var i = 0; i < (result.length - num.toString().length); i++) {
				leadingCharacterSum += parseInt(result[i]);
			}
			expect(leadingCharacterSum).to.equal(0);
		});		
		it('add one leading zero to a single character', function() {
			var str = 'A';
			var result = intake.addLeadingZeros(str, 2);
			expect(result).to.equal('0A');
		});	
		it('should only work on a number or string not an object', function() {
			var obj = {
				'test': 'pass'
			};
			var result = intake.addLeadingZeros(obj, 2);
			expect(result).to.equal(obj);
		});
		it('should only work on a number or string not an array', function() {
			var arr = ['1','2','3'];
			var result = intake.addLeadingZeros(arr, 3);
			expect(result).to.equal(arr);
		});		
		it('should ignore an empty string', function() {
			var str = '';
			var result = intake.addLeadingZeros(str, 10);
			expect(result).to.equal(str);
		});		
		it('return string length paramater should be ignored if not a number', function() {
			var str = 'ABC';
			var result = intake.addLeadingZeros(str, 'A');
			expect(result).to.equal(str);
		});
		it('if len is negative no leading zeros should be added', function() {
			var num = 5;
			var result = intake.addLeadingZeros(num, -1);
			expect(result).to.equal(num.toString());
		});
	});

}());
