const asyncHandler = require("../middleware/async");
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const {
    IamAuthenticator
} = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
    authenticator: new IamAuthenticator({
        apikey: '7FUUy47uHfIHo06YwI-Tq7mW1E3kX3y5yzbXWC8oHM8r'
    }),
    serviceUrl: 'https://api.au-syd.language-translator.watson.cloud.ibm.com/instances/b7c1c63a-05a2-468a-af91-0711caa1ce30',
    version: '2021-11-23'
});

exports.identify = asyncHandler(async (req, res, next) => {
    languageTranslator.identify(req.body)
        .then(response => {
            res.status(200).json({
                sucess: "true",
                data: response.result
            });
        })
        .catch(err => {
            console.log('error: ', err);
        });
});

exports.translate = asyncHandler(async (req, res, next) => {
    languageTranslator.translate(req.body)
        .then(response => {
            res.status(200).json({
                sucess: "true",
                data: response.result
            });
        })
        .catch(err => {
            console.log('error: ', err);
        });
});