import { Command } from "commander";

export default function versionCommand(
  program: Command,
  version: string | null = null
) {
  program
    .command("version")
    .description("Display the deri CLI version")
    .action(() => {
      if (version) {
        console.log(version);
      }
    });
}
