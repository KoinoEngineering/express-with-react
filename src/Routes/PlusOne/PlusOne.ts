import express from "express";
import { HelpInfo } from "../Help/Help";
import { Query } from "../../interfaces/Params";
import { wait } from "../../utils/utils";

const plusOne: express.RequestHandler<never, {}, {}, EchoQuery> = async (req, res) => {
    const value = Number(req.query.value);

    const getDelay = (delayString: EchoQuery["delay"]): number => {
        const delay = Number(delayString);
        return isNaN(delay) ?
            0
            : delay > 10000
                ? 10000
                : delay;
    };

    return wait(getDelay(req.query.delay)).then(() => isNaN(value) ? res.status(400).json({ message: "" }) : res.json(value + 1)).catch(() => res.status(500).json());
};

export default plusOne;

export const plusOneHelp: PlusOneHelp = {
    description: "add 1 to request query value",
    params: {},
    query: {
        value: "add 1 to this.(if this is not number. return status code 400)",
        delay: "If set, the response will be delayed(min:0ms , max:10000ms)",
    }
};

type EchoQueryKey = "value" | "delay";
type EchoQuery = Query<EchoQueryKey>;

interface PlusOneHelp extends HelpInfo<EchoQuery> { }
