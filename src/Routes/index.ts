import express from "express";
import { HelpInfo } from "./Help/Help";
import ROUTES from "../utils/routes";

const root: express.RequestHandler = (req, res) => res.redirect(308, ROUTES.HELP);

export default root;

export const rootHelp: HelpInfo = {
    query: {},
    params: {},
    description: "redirect to help"
};
