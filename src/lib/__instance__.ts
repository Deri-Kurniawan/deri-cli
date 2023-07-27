import { Command } from "commander";

/**
 * @description
 * The instance of the commander program.
 *
 * @export {Command}
 * @const {Command}
 * @example
 * import program from "./__instance__";
 *
 * program
 *  .version("1.0.0")
 *  .description(
 *    "A CLI that is often used by developers to simplify the installation and development of software applications."
 *  );
 *
 * program.parse(process.argv);
 */
const program: Command = new Command();

export default program;
