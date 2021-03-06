import { spawn } from "cross-spawn";

export const runChildProcess = (command, args, options) => {
  return new Promise((resolve, reject) => {
    // process.chdir(directoryPath);
    const child = spawn(command, args, options);
    child.on("close", code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(" ")}`
        });
        return;
      }

      resolve();
    });
  });
};
