import program from "./__instance__";
import cliHelpCommand from "./commands/cli-help";
import pkgInstallerCommand from "./commands/pkg-installer";
import pkgUninstallerCommand from "./commands/pkg-uninstaller";
import pkgUpdaterCommand from "./commands/pkg-updater";
import versionCommand from "./commands/version";

/**
 * @description
 * The registery of the deri CLI commands.
 *
 * @export
 * @function commandsRegistery
 * @example
 * import commandsRegistery from "./__registery__";
 *
 * commandsRegistery();
 */
export default function commandsRegistery() {
  const CLIVersion = "1.0.0";

  versionCommand(program, CLIVersion);
  cliHelpCommand(program);
  pkgInstallerCommand(program);
  pkgUninstallerCommand(program);
  pkgUpdaterCommand(program);

  program.parse(process.argv);
}
