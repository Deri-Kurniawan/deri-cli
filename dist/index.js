"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __instance__1 = __importDefault(require("./lib/__instance__"));
const cli_help_1 = __importDefault(require("./lib/commands/cli-help"));
const pkg_installer_1 = __importDefault(require("./lib/commands/pkg-installer"));
const pkg_uninstaller_1 = __importDefault(require("./lib/commands/pkg-uninstaller"));
const pkg_updater_1 = __importDefault(require("./lib/commands/pkg-updater"));
const version_1 = __importDefault(require("./lib/commands/version"));
const CLIVersion = "1.0.0";
(0, version_1.default)(__instance__1.default, CLIVersion);
(0, cli_help_1.default)(__instance__1.default);
(0, pkg_installer_1.default)(__instance__1.default);
(0, pkg_uninstaller_1.default)(__instance__1.default);
(0, pkg_updater_1.default)(__instance__1.default);
__instance__1.default.parse(process.argv);
