"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printLogAsciiBrand_1 = __importDefault(require("../../utils/logger/printLogAsciiBrand"));
const child_process_1 = require("child_process");
const DeriCliError_1 = __importDefault(require("../../utils/errorHandlers/DeriCliError"));
function pkgUpdaterCommand(program) {
    program
        .command("upgrade <pkg...>")
        .alias("u")
        .alias("up")
        .alias("update")
        .description("Package Upgrade")
        .option("-g, --global", "Upgrade the packages globally")
        .action((pkgs, cmd) => {
        (0, printLogAsciiBrand_1.default)();
        console.info("Deri CLI is trying to upgrade your requested packages...");
        console.log("=============== upgrading start ===============");
        try {
            let upgradeCommand = "npm update";
            if (cmd.global) {
                upgradeCommand += " -g";
            }
            upgradeCommand += " " + pkgs.join(" ");
            (0, child_process_1.execSync)(upgradeCommand, { stdio: "inherit" });
            console.log("Packages have been upgraded successfully.");
        }
        catch (error) {
            console.error(new DeriCliError_1.default("An error occurred while upgrading packages.")
                .message);
        }
        console.log("=============== upgrading finish ===============");
    });
}
exports.default = pkgUpdaterCommand;
