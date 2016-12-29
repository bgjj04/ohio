'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.bdc7b5bd-027b-4b57-ae36-a626d7d9651b"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Ohio Test';

/**
 * Array containing space facts.
 */
 


   
var FACTS = [
    "<say-as interpret-as='spell-out'>IO</say-as>"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetScore': function (){
       // var req = new XMLHttpRequest();  
        //req.open('GET', 'http://www.espn.com/ncf/bottomline/scores', false);   
       // req.send(null);  
       // if(req.status == 200) { 
         //var scores = dump(req.responseText);
        //return "Hello";
       // }
       // return "Hello";
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var score = this.emit('GetScore');
        var speechOutput = " " + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say <say-as interpret-as='spell-out'>OH</say-as>, and I'll reply <say-as interpret-as='spell-out'>IO</say-as>. Try it?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};