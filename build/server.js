"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var connection_1 = require("./database/connection/connection");
var apollo_server_express_1 = require("apollo-server-express");
var RootTypeDefs_1 = require("./graphql/type-defs/RootTypeDefs");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var aws_1 = require("./aws");
var RootReducer_1 = require("./graphql/resolvers/RootReducer");
var jwt_1 = require("./jwt");
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
aws_sdk_1.default.config.update({credentials: aws_1.credentials, region: process.env.AWS_S3_REGION});
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: RootTypeDefs_1.rootTypeDefs,
    resolvers: RootReducer_1.rootReducer,
    context: function (_a) {
        var req = _a.req;
        var token = req.headers.authorization;
        if (token) {
            var result = jwt_1.getUser(token);
            return result;
        }
    }
});
connection_1.connectDatabase().then(function () {
    server.start().then(function () {
        server.applyMiddleware({app: app, path: "/graphql"});
        app.post('/getImage', function (req, res) {
            var s3 = new aws_sdk_1.default.S3();
            var presignedGETURL = s3.getSignedUrl('getObject', {
                Bucket: "" + process.env.AWS_S3_BUCKET_NAME,
                Key: req.body.key,
                Expires: 100
            });
            res.send(presignedGETURL);
        });
        app.post('/uploadImage', function (req, res) {
            var s3 = new aws_sdk_1.default.S3();
            var presignedGETURL = s3.getSignedUrl('putObject', {
                Bucket: "" + process.env.AWS_S3_BUCKET_NAME,
                Key: req.body.key,
                Expires: 100,
                ContentType: req.body.content_type
            });
            res.send(presignedGETURL);
        });
        app.delete('/deleteImage', function (req, res) {
            var s3 = new aws_sdk_1.default.S3();
            s3.deleteObject({
                Bucket: "" + process.env.AWS_S3_BUCKET_NAME,
                Key: req.body.key,
            }, function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        });
        app.listen({port: process.env.PORT}, function () {
            console.log("Apollo Server on http://localhost:" + process.env.PORT + "/graphql");
        });
    });
}).catch(function () {
    console.log("Server error");
});
