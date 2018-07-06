var wordTypes = ['adjective', 'adverb', 'definitive article', 'noun', 'number', 'preposition', 'verb'];

var words = [
   {
    'word': 'backstairs',
    'types': [
      {
        'type': 'adjective',
        'score': 100
      }
    ]
   },
   {
      'word': 'bank',
      'types': [
         {
            'type': 'noun',
            'score': 75
         },
         {
            'type': 'verb',
            'score': 25
         }
      ]
   },
   {
      'word': 'black',
      'types': [
         {
            'type': 'noun',
            'score': 75
         },
         {
            'type': 'adjective',
            'score': 25
         }
      ]
   },
   {
      'word': 'brickbat',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   },
   {
      'word': 'campcraft',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   },   
   {
      'word': 'catachresis',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
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
      'word': 'company',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   },
   {
      'word': 'contract',
      'types': [
         {
            'type': 'noun',
            'score': 65
         },
         {
            'type': 'adjective',
            'score': 25
         },
         {
            'type': 'verb',
            'score': 10
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
         }
      ]
   },
   {
      'word': 'cup',
      'types': [
         {
            'type': 'noun',
            'score': 85
         },
         {
            'type': 'verb',
            'score': 15
         }
      ]
   },
   {
    'word': 'debonair',
    'types': [
      {
        'type': 'adjective',
        'score': 100
      }
    ]
   },   
   {
    'word': 'edentate',
    'types': [
      {
        'type': 'adjective',
        'score': 65
      },
      {
        'type': 'noun',
        'score': 35
      }
    ]
   },
   {
      'word': 'exchange',
      'types': [
         {
            'type': 'verb',
            'score': 65
         },
         {
            'type': 'noun',
            'score': 35
         }
      ]
   },
   {
      'word': 'extemporaneous',
      'types': [
         {
            'type': 'adjective',
            'score': 100
         }
      ]
   },
   {
      'word': 'financial',
      'types': [
         {
            'type': 'adjective',
            'score': 100
         }
      ]
   },
   {
    'word': 'farouche',
    'types': [
      {
        'type': 'adjective',
        'score': 100
      }
    ]
   },
   {
      'word': 'five',
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
    'word': 'fizgig',
    'types': [
      {
        'type': 'noun',
        'score': 100
      }
    ]
   },   
   {
      'word': 'for',
      'types': [
         {
            'type': 'preposition',
            'score': 100
         }
      ]
   },
   {
      'word': 'four',
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
      'word': 'good',
      'types': [
         {
            'type': 'adjective',
            'score': 90
         },
         {
            'type': 'noun',
            'score': 10
         }
      ]
   },
   {
      'word': 'in',
      'types': [
         {
            'type': 'preposition',
            'score': 87
         },
         {
            'type': 'adverb',
            'score': 10
         },
         {
            'type': 'adjective',
            'score': 3
         }
      ]
   },
   {
      'word': 'management',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   },
   {
      'word': 'mondegreen',
      'types': [
         {
            'type': 'noun',
            'score': 100
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
      'word': 'mnemonic',
      'types': [
         {
            'type': 'adjective',
            'score': 50
         },
         {
            'type': 'noun',
            'score': 50
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
         }
      ]
   },
   {
      'word': 'one',
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
      'word': 'pellucid',
      'types': [
         {
            'type': 'adjective',
            'score': 100
         }
      ]
   },
   {
      'word': 'portfolio',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   },
   {
      'word': 'protean',
      'types': [
         {
            'type': 'adjective',
            'score': 100
         }
      ]
   },
   {
      'word': 'quiddity',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
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
         }
      ]
   },
   {
      'word': 'say',
      'types': [
         {
            'type': 'verb',
            'score': 95
         },
         {
            'type': 'adverb',
            'score': 5
         }
      ]
   },
   {
    'word': 'scupper',
    'types': [
      {
        'type': 'noun',
        'score': 100
      }
    ]
   },
   {
      'word': 'security',
      'types': [
         {
            'type': 'noun',
            'score': 80
         },
         {
            'type': 'adjective',
            'score': 20
         }
      ]
   },
   {
      'word': 'serotinal',
      'types': [
         {
            'type': 'adjective',
            'score': 100
         }
      ]
   },
   {
      'word': 'sit',
      'types': [
         {
            'type': 'verb',
            'score': 100
         }
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
    'word': 'snowflake',
    'types': [
      {
        'type': 'noun',
        'score': 100
      }
    ]
   },
   {
      'word': 'soup',
      'types': [
         {
            'type': 'noun',
            'score': 92
         },
         {
            'type': 'verb',
            'score': 8
         }
      ]
   },
   {
      'word': 'summerize',
      'types': [
         {
            'type': 'verb',
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
      'word': 'three',
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
      'word': 'time',
      'types': [
         {
            'type': 'noun',
            'score': 80
         },
         {
            'type': 'adjective',
            'score': 8
         },
         {
            'type': 'verb',
            'score': 12
         }
      ]
   },
   {
      'word': 'to',
      'types': [
         {
            'type': 'preposition',
            'score': 92
         },
         {
            'type': 'adverb',
            'score': 8
         }
      ]
   },
   {
      'word': 'two',
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
      'word': 'up',
      'types': [
         {
            'type': 'adverb',
            'score': 65
         },
         {
            'type': 'preposition',
            'score': 25
         },
         {
            'type': 'adjective',
            'score': 7
         },
         {
            'type': 'noun',
            'score': 3
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
         }
      ]
   },
   {
      'word': 'with',
      'types': [
         {
            'type': 'preposition',
            'score': 100
         }
      ]
   },
   {
      'word': 'xeriscaping',
      'types': [
         {
            'type': 'noun',
            'score': 100
         }
      ]
   }
];

exports.words = words;
exports.wordTypes = wordTypes;