"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router.get("/teste", (req, res) => {
    res.status(200).send("API Working");
});
