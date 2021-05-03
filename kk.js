const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "com.sigma.test.263248768798.asankha.us-east-1",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};