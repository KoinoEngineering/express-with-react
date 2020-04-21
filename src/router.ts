import express from "express";
import ROUTES from "./utils/routes";
import help from "./Routes/Help/Help";
import root from "./Routes";
import echo from "./Routes/Echo/Echo";
import echoWithParam from "./Routes/EchoWithParam/EchoWithParam";
import plusOne from "./Routes/PlusOne/PlusOne";

export default express.Router()
    .all(ROUTES.ROOT, root)
    .all(ROUTES.HELP, help)
    .get(ROUTES.ECHO, echo)
    .get(ROUTES.ECHO_WITH_PARAM, echoWithParam)
    .get(ROUTES.PLUS_ONE, plusOne);
