const {TranslationServiceClient} = require('@google-cloud/translate');
const express = require('express');
var api = express.Router();

const projectId = 'silver-bird-321713';
const keyFilename = 'silver-bird-321713-468a72ba25fe.json';
const {Translate} = require('@google-cloud/translate').v2;

api.post('/translate', function(req, res) {
    const translate = new Translate({
        projectId: projectId,
        keyFilename: keyFilename
    });

    async function quickTranslate() {
        // The text to translate
        const text = req.query.text;
        // The target language
        const target = req.query.target;
        const [translation] = await translate.translate(text, target);
            console.log(`Text: ${text}`);
            console.log(`Translation: ${translation}`);
            res.send(translation)
    }
    quickTranslate();
});

module.exports = api;