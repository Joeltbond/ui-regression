import * as squire from "./squire";
import * as loader from "./loader";
import * as prompt from "./prompt";

// allow squire to be run from inside config files
(async () => {
  const {files, url, rebase} = await prompt.run();
  global.squire = squire;

  loader.load(files === "*" ? "" : files);
  squire.run(url, rebase);
})();
