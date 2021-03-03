"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./constant");
const Post_1 = require("./entities/Post");
exports.default = {
    entities: [Post_1.Post],
    dbName: 'long-project',
    password: process.env.POSTRES_PWD,
    type: 'postgresql',
    debug: !constant_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map