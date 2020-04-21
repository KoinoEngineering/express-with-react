import express from "express";
import { Params } from "../../interfaces/Params";
import { HelpInfo } from "../Help/Help";

const echoWithParam: express.RequestHandler<EchoWithParams, {}, {}, never> = (req, res) => {
    return res.json(req.params.value + "\n");
};

export default echoWithParam;

export const echoWithParamHelp: EchoWithParamHelp = {
    description: "this is echo. this endpoint is return param's \"value\".",
    params: {
        value: "this request return this",
    },
    query: {}
};

type EchoWithParamsKey = "value"
type EchoWithParams = Params<EchoWithParamsKey>;

interface EchoWithParamHelp extends HelpInfo<{}, EchoWithParams> { }
