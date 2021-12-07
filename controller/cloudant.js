const Cloudant = require('@cloudant/cloudant');
const asyncHandler = require("../middleware/async");

const cloudant = Cloudant({
    url: "https://354afe76-5675-43f9-b208-491321b6cef6-bluemix.cloudantnosqldb.appdomain.cloud",
    plugins: {
        iamauth: {
            iamApiKey: 'YIMS-BJ273jZXrXOm-iOLfWJibSUo9Ovr98zyNjjAGsM'
        }
    }
});

exports.create = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    cloudant.use('rkstdb').insert(req.body).then((data) => {
        res.status(200).json({
            data: data
        });
    }).catch(function (error) {
        console.log(error);
    })
});

exports.query = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    var db = cloudant.db.use('rkstdb');
    db.find({
        selector: {
            email: req.body.email
        }
    }, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json({
            data: result.docs
        });
    });
});