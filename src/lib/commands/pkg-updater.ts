import printLogAsciiBrand from "../../utils/logger/printLogAsciiBrand";
import { execSync } from "child_process";
import DeriCliError from "../../utils/errorHandlers/DeriCliError";
import { Command } from "commander";

export default function pkgUpdaterCommand(program: Command) {
  program
    .command("upgrade <pkg...>")
    .alias("u")
    .alias("up")
    .alias("update")
    .description("Package Upgrade")
    .option("-g, --global", "Upgrade the packages globally")
    .action((pkgs: string[], cmd: { global: boolean }): void => {
      printLogAsciiBrand();
      console.info("Deri CLI is trying to upgrade your requested packages...");
      console.log("=============== upgrading start ===============");
      try {
        let upgradeCommand = "npm update";

        if (cmd.global) {
          upgradeCommand += " -g";
        }

        upgradeCommand += " " + pkgs.join(" ");

        execSync(upgradeCommand, { stdio: "inherit" });

        console.log("Packages have been upgraded successfully.");
      } catch (error: any) {
        console.error(
          new DeriCliError("An error occurred while upgrading packages.")
            .message
        );
      }
      console.log("=============== upgrading finish ===============");
    });
}
