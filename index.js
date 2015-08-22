//  word-forword by Brendan Conrad
//  word-forword may be freely distributed or modified under the MIT license.

(function () {

	var Intake = require('intake');
	var intake = new Intake();
	var _ = require('lodash');

	var wordTypes = ['adjective', 'adverb', 'definitive article', 'noun', 'number', 'preposition', 'verb']

	var words = [
		{
			'word': 'bank',
			'types': [
				{
					'type': 'noun',
					'score': 75
				},
				{
					'type': 'verb',
					'score': 75
				},
			]
		},
		{
			'word': 'centipede',
			'types': [
				{
					'type': 'noun',
					'score': 100
				}
			]
		},		
		{
			'word': 'credit',
			'types': [
				{
					'type': 'noun',
					'score': 50
				},
				{
					'type': 'verb',
					'score': 50
				},
			]
		},
		{
			'word': 'good',
			'types': [
				{
					'type': 'adjective',
					'score': 90
				},
				{
					'type': 'noun',
					'score': 35
				}
			]
		},		
		{
			'word': 'nine',
			'types': [
				{
					'type': 'noun',
					'score': 100
				},
				{
					'type': 'number',
					'score': 100
				}
			]
		},			
		{
			'word': 'of',
			'types': [
				{
					'type': 'preposition',
					'score': 100
				}
			]
		},
		{
			'word': 'on',
			'types': [
				{
					'type': 'adjective',
					'score': 33
				},
				{
					'type': 'adverb',
					'score': 33
				},
				{
					'type': 'noun',
					'score': 1
				},
				{
					'type': 'preposition',
					'score': 33
				},				
			]
		},
		{
			'word': 'red',
			'types': [
				{
					'type': 'noun',
					'score': 75
				},
				{
					'type': 'adjective',
					'score': 25
				},				
			]
		},
		{
			'word': 'six',
			'types': [
				{
					'type': 'noun',
					'score': 100
				},
				{
					'type': 'number',
					'score': 100
				}
			]
		},
		{
			'word': 'the',
			'types': [
				{
					'type': 'definitive article',
					'score': 99
				},
				{
					'type': 'adverb',
					'score': 1
				}			
			]
		},
		{
			'word': 'up',
			'types': [
				{
					'type': 'adverb',
					'score': 88
				},
				{
					'type': 'preposition',
					'score': 65
				},	
				{
					'type': 'adjective',
					'score': 25
				},
				{
					'type': 'noun',
					'score': 10
				}		
			]
		},		
		{
			'word': 'wig',
			'types': [
				{
					'type': 'noun',
					'score': 95
				},
				{
					'type': 'verb',
					'score': 5
				},				
			]
		}
	];

	// Constructor
	function WordForword () {
  		return this;
	}

	// ****************************************************************************************************
	// word
	// ****************************************************************************************************
	//		args: 
	//		summary:
	//			returns a random English word from a static set of words
	// ****************************************************************************************************
	WordForword.prototype.word = function(wordType, randomScoreReduction) {
		// check the wordType
		if (wordTypes.indexOf(wordType) < 0) {
			return 'unknown word type';
		}
		if (intake.isEmptyOrUndefined(randomScoreReduction)) {
			randomScoreReduction = 0;
		}
		var anyWord = false;
		if (intake.isEmptyOrUndefined(wordType)) {
			anyWord = true;
		}
		else {
			// use lodash to reduce the list to nouns only
			var matchedWords = _.where(words, { 'types': [{ 'type': wordType }] });
			// iterate over matched words and keep only those that are obove the random score
			var randomScore = Math.floor(Math.random() * (100 - randomScoreReduction));
			var wordsToChooseFrom = [];
			for (var w = 0; w < matchedWords.length; w++) {
				var matchedWord = matchedWords[w];
				for (var t = 0; t < matchedWord.types.length; t++) {
					var matchedWordType = matchedWord.types[t];
					if ((matchedWordType.type === wordType) && (matchedWordType.score >= randomScore)) {
						wordsToChooseFrom.push(matchedWord);
					}
				}
			}
		}
		var matchedWords = (anyWord) ? words : wordsToChooseFrom;
		var randomWord = matchedWords[Math.floor(Math.random()*matchedWords.length)];
		var result = intake.isEmptyOrUndefined(randomWord) ? '' : randomWord.word;
		// expect to find a result but try again if the result is empty
		// a result should almost always be found if the dictionary and word type scores are large enough
		return (result === '') ? this.word(wordType, randomScoreReduction++) : result;
	};
	// ****************************************************************************************************

	// ****************************************************************************************************
	// wordTypes
	// ****************************************************************************************************
	//		args: 
	//		summary:
	//			returns the list of wordTypes that word-forward makes available
	// ****************************************************************************************************
	WordForword.prototype.wordTypes = function() {
		return wordTypes;
	};
	// ****************************************************************************************************

	// CommonJS module
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = WordForword;
		}
		exports.WordForword = WordForword;
	}

	// Register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return WordForword;
		});
	}

	// if there is a importsScrips object define wordForword for worker
	if (typeof importScripts !== 'undefined') {
		wordForword = new WordForword();
	}

	// If there is a window object, that at least has a document property,
	// instantiate and define wordForword on the window
	if (typeof window === "object" && typeof window.document === "object") {
		window.WordForword = WordForword;
		window.wordForword = new WordForword();
	}

})();
