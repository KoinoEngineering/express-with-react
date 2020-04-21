import express from "express";
import { Query } from "../../interfaces/Params";
import { HelpInfo } from "../Help/Help";

const echo: express.RequestHandler<never, {}, {}, EchoQuery> = (req, res) => {
    return res.json(req.query.value + "\n");
};

export default echo;

export const echoHelp: EchoHelp = {
    description: "this is echo. this endpoint is return query \"value\".",
    params: {},
    query: {
        value: "this request return this",
    }
};

type EchoQueryKey = "value"
type EchoQuery = Query<EchoQueryKey>;

interface EchoHelp extends HelpInfo<EchoQuery> { }
