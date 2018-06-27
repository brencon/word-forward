// ****************************************************************************************************
// word-forward by Brendan Conrad
// word-forward may be freely distributed or modified under the MIT license.
// ****************************************************************************************************

var dictionary = require('./dictionary');
var intake = new (require('intake'))();

(function () {

   var words = dictionary.words;
   var wordTypes = dictionary.wordTypes;

   // Constructor
   function WordForward() {
      return this;
   }

   // ****************************************************************************************************
   // word
   // ****************************************************************************************************
   //		args:
   //		summary:
   //			returns a random English word from a static set of words
   // ****************************************************************************************************
   WordForward.prototype.word = function (wordType) {
      // check the wordType
      var anyWord = false;
      if (!wordType) {
         anyWord = true;
      }
      else {
         if (wordTypes.indexOf(wordType) < 0) {
            return 'unknown word type';
         }
      }
      var filteredWords = words;
      // iterate over matched words and keep only those that are above the random score
      var randomScore = Math.floor(Math.random() * 100);
      var wordsToChooseFrom = [];
      for (var w = 0; w < filteredWords.length; w++) {
         var matchedWord = filteredWords[w];
         for (var t = 0; t < matchedWord.types.length; t++) {
            var matchedWordType = matchedWord.types[t];
            if ((matchedWordType.type === wordType) && (matchedWordType.score >= randomScore)) {
               wordsToChooseFrom.push(matchedWord);
            }
         }
      }
      var matchedWords = (anyWord) ? words : wordsToChooseFrom;
      var randomWord = matchedWords[Math.floor(Math.random() * matchedWords.length)];
      return randomWord.word;
   };
   // ****************************************************************************************************

   // ****************************************************************************************************
   // wordTypes
   // ****************************************************************************************************
   //		args:
   //		summary:
   //			returns the list of wordTypes that word-forward makes available
   // ****************************************************************************************************
   WordForward.prototype.wordTypes = function () {
      return wordTypes;
   };
   // ****************************************************************************************************

   // ****************************************************************************************************
   // businessName
   // ****************************************************************************************************
   //		args:
   //		summary:
   //			returns a [noun] [preposition] [noun]
   // ****************************************************************************************************
   WordForward.prototype.businessName = function () {
      return this.word('noun') + ' ' + this.word('preposition') + ' ' + this.word('noun');
   };
   // ****************************************************************************************************

   // CommonJS module
   if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
         exports = module.exports = WordForward;
      }
      exports.WordForward = WordForward;
   }

   // Register as an anonymous AMD module
   if (typeof define === 'function' && define.amd) {
      define([], function () {
         return WordForward;
      });
   }

   // if there is a importsScrips object define wordForward for worker
   if (typeof importScripts !== 'undefined') {
      wordForward = new WordForward();
   }

   // If there is a window object, that at least has a document property,
   // instantiate and define wordForward on the window
   if (typeof window === "object" && typeof window.document === "object") {
      window.WordForward = WordForward;
      window.wordForward = new WordForward();
   }

})();
