import express from "express";
import { rootHelp } from "..";
import { Description, Params, Query, WithParams, WithQuery } from "../../interfaces/Params";
import ROUTES from "../../utils/routes";
import { echoHelp } from "../Echo/Echo";
import { echoWithParamHelp } from "../EchoWithParam/EchoWithParam";
import { plusOneHelp } from "../PlusOne/PlusOne";

const help: express.RequestHandler = (req: express.Request, res: express.Response) => {
    res.json(Help);
};

export default help;

const helpHelp: HelpInfo = {
    query: {},
    params: {},
    description: "this"
};

const Help: Help = {
    outline: "typescript + expressで作ったecho用のサーバ",
    endpoints: {
        [ROUTES.ROOT]: rootHelp,
        [ROUTES.HELP]: helpHelp,
        [ROUTES.ECHO]: echoHelp,
        [ROUTES.ECHO_WITH_PARAM]: echoWithParamHelp,
        [ROUTES.PLUS_ONE]: plusOneHelp,
    }
};

type Help = {
    outline: Description
    endpoints: { [K in ROUTES]: HelpInfo };
};

export interface HelpInfo<Q extends Query<any> = {}, P extends Params<any> = {}> extends WithQuery<Q>, WithParams<P> {
    description: Description
}
