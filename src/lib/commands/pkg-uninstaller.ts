import printLogAsciiBrand from "../../utils/logger/printLogAsciiBrand";
import { execSync } from "child_process";
import DeriCliError from "../../utils/errorHandlers/DeriCliError";
import { Command } from "commander";

export default function pkgUninstallerCommand(program: Command) {
  program
    .command("uninstall <pkg...>")
    .alias("un")
    .alias("remove")
    .alias("rm")
    .description("Package Uninstallation")
    .action((pkgs: string[]): void => {
      printLogAsciiBrand();
      console.info(
        "Deri CLI is trying to uninstall your requested packages..."
      );
      console.log("=============== uninstalling start ===============");
      try {
        let uninstallCommand = "npm uninstall";

        uninstallCommand += " " + pkgs.join(" ");

        execSync(uninstallCommand, { stdio: "inherit" });

        console.log("Packages have been uninstalled successfully.");
      } catch (error: any) {
        console.error(
          new DeriCliError("An error occurred while uninstalling packages.")
            .message
        );
      }
      console.log("=============== uninstalling finish ===============");
    });
}
