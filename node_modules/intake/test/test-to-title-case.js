(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#toTitleCase - String Formatted to Title Case', function() {
		it('String contents unchanged ignoring minor words', function() {
			var str = 'This Is A Title Case Sentence';
			var result = intake.toTitleCase(str);
			expect(result).to.equal(str);
		});
		it('String contents unchanged', function() {
			var str = 'This is a Sentence Case Sentence';
			var result = intake.toTitleCase(str, true);
			expect(result).to.equal(str);
		});
		it('First character changed to upper case', function() {
			var str = 'test';
			var result = intake.toTitleCase(str)[0];
			expect(result).to.equal('T');
		});
		it('First character of each word changed to upper case', function() {
			var str = 'this is a test';
			var strArray = str.split(' ');
			var strTitleCase = intake.toTitleCase(str);
			var strTitleCaseArray = strTitleCase.split(' ');
			for (var i = 0; i < strArray.length; i++) {
				var result = strTitleCaseArray[i][0];
				expect(result).to.equal(strArray[i][0].toUpperCase());
			}
		});
		it('First character in minor word only changed to upper case', function() {
			var str = 'and';
			var result = intake.toTitleCase(str)[0];
			expect(result).to.equal('A');
		});	
		it('First character in minor word only changed to upper case with minorsToLowerCase true', function() {
			var str = 'and';
			var result = intake.toTitleCase(str, true)[0];
			expect(result).to.equal('A');
		});
		it('First character in minor word only changed to upper case in sentence with minorsToLowerCase true', function() {
			var str = 'and all the words were changed';
			var result = intake.toTitleCase(str, true);
			expect(result).to.equal('And All the Words Were Changed');
		});	
		it('Hyphenated word set to title case', function() {
			var str = 'hyphenated-word';
			var result = intake.toTitleCase(str);
			expect(result).to.equal('Hyphenated-word');
		});
		it('Possessive word set to title case', function() {
			var str = 'it\'s';
			var result = intake.toTitleCase(str);
			expect(result).to.equal('It\'s');
		});
		it('Possessive word in sentence set to title case', function() {
			var str = 'this test is for it\'s';
			var result = intake.toTitleCase(str, true);
			expect(result).to.equal('This Test is for It\'s');
		});
		it('Ignored word is ignored', function() {
			var str = 'III';
			var result = intake.toTitleCase(str);
			expect(result).to.equal('III');
		});	
		it('Ignored word in a different case changed to title case', function() {
			var str = 'iii';
			var result = intake.toTitleCase(str);
			expect(result).to.equal('Iii');
		});	
	});

	describe('#toTitleCase - Does Not Break for Non-Strings', function() {
		it('Number is ignored', function() {
			var num = 0;
			var result = intake.toTitleCase(num);
			expect(result).to.equal(num);
		});
		it('Object is ignored', function() {
			var obj = {
				'name': 'test'
			};
			var result = intake.toTitleCase(obj);
			expect(result).to.equal(obj);
		});
		it('Null is ignored', function() {
			var obj = null;
			var result = intake.toTitleCase(obj);
			expect(result).to.equal(obj);
		});
		it('Undefined is ignored', function() {
			var obj;
			var result = intake.toTitleCase(obj);
			expect(result).to.equal(obj);
		});

	});

}());
