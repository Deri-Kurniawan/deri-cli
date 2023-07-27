import printLogAsciiBrand from "../../utils/logger/printLogAsciiBrand";
import { execSync } from "child_process";
import DeriCliError from "../../utils/errorHandlers/DeriCliError";
import { Command } from "commander";

export default function pkgInstallerCommand(program: Command) {
  program
    .command("install <pkg...>")
    .alias("i")
    .alias("in")
    .alias("add")
    .description("Package Installation")
    .option("-g, --global", "Install the packages globally")
    .option("-D, --save-dev", "Save the packages as dev dependencies")
    .action(
      (pkgs: string[], cmd: { global: boolean; saveDev: boolean }): void => {
        printLogAsciiBrand();
        console.info(
          "Deri CLI is trying to install your requested packages..."
        );
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

          execSync(installCommand, { stdio: "inherit" });

          console.log("Packages have been installed successfully.");
        } catch (error: any) {
          console.error(
            new DeriCliError("An error occurred while installing packages.")
              .message
          );
        }
        console.log("=============== installing finish ===============");
      }
    );
}
