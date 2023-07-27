"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printLogAsciiBrand_1 = __importDefault(require("../../utils/logger/printLogAsciiBrand"));
const child_process_1 = require("child_process");
const DeriCliError_1 = __importDefault(require("../../utils/errorHandlers/DeriCliError"));
function pkgInstallerCommand(program) {
    program
        .command("install <pkg...>")
        .alias("i")
        .alias("in")
        .alias("add")
        .description("Package Installation")
        .option("-g, --global", "Install the packages globally")
        .option("-D, --save-dev", "Save the packages as dev dependencies")
        .action((pkgs, cmd) => {
        (0, printLogAsciiBrand_1.default)();
        console.info("Deri CLI is trying to install your requested packages...");
        console.log("=============== installing start ===============");
        try {
            let installCommand = "npm i";
            if (cmd.global) {
                installCommand += " -g";
            }
            if (cmd.saveDev) {
                installCommand += " -D";
            }
            installCommand += " " + pkgs.join(" ");
            (0, child_process_1.execSync)(installCommand, { stdio: "inherit" });
            console.log("Packages have been installed successfully.");
        }
        catch (error) {
            console.error(new DeriCliError_1.default("An error occurred while installing packages.")
                .message);
        }
        console.log("=============== installing finish ===============");
    });
}
exports.default = pkgInstallerCommand;
