"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printLogAsciiBrand_1 = __importDefault(require("../../utils/logger/printLogAsciiBrand"));
const child_process_1 = require("child_process");
const DeriCliError_1 = __importDefault(require("../../utils/errorHandlers/DeriCliError"));
function pkgUninstallerCommand(program) {
    program
        .command("uninstall <pkg...>")
        .alias("un")
        .alias("remove")
        .alias("rm")
        .description("Package Uninstallation")
        .action((pkgs) => {
        (0, printLogAsciiBrand_1.default)();
        console.info("Deri CLI is trying to uninstall your requested packages...");
        console.log("=============== uninstalling start ===============");
        try {
            let uninstallCommand = "npm uninstall";
            uninstallCommand += " " + pkgs.join(" ");
            (0, child_process_1.execSync)(uninstallCommand, { stdio: "inherit" });
            console.log("Packages have been uninstalled successfully.");
        }
        catch (error) {
            console.error(new DeriCliError_1.default("An error occurred while uninstalling packages.")
                .message);
        }
        console.log("=============== uninstalling finish ===============");
    });
}
exports.default = pkgUninstallerCommand;
