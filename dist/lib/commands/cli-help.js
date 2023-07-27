"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cliHelpCommand(program) {
    program
        .command("help")
        .description("Display help for the deri CLI")
        .action(() => {
        console.log(`
  Deri CLI - A Custom CLI for Simplifying Package Management

  Usage: deri [command]

  Commands:
    install|i|in|add <pkg...>   Package Installation
    uninstall|un|remove|rm <pkg...>   Package Uninstallation
    help                        Display help for the deri CLI

  Options:
    -g, --global                Install the packages globally
    -D, --save-dev              Save the packages as dev dependencies

  Version 1.0.0
    `);
    });
}
exports.default = cliHelpCommand;
