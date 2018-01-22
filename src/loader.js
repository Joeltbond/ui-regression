import glob from "glob";
import path from "path";

export const load = dir => {
  glob.sync(path.join(dir, "**", "*.js")).forEach(file => {
    require(path.resolve(file));
  });
};
