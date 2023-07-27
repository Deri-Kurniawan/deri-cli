"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function versionCommand(program, version = null) {
    program
        .command("version")
        .description("Display the deri CLI version")
        .action(() => {
        if (version) {
            console.log(version);
        }
    });
}
exports.default = versionCommand;
