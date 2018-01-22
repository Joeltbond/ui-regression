import puppeteer from "puppeteer";

const tests = [];

export const test = props => {
  tests.push(props);
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const runTest = async (page, config) => {
  console.log(config);

  // go to page
  await page.goto(config.url);

  // setupScripts

  // moveTo

  // clickElement

  // wait

  // screenshotElement
  await page.screenshot({ path: `${config.name}.png` });

  // diff

  // write results
};

export const run = async answers => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (let config of tests) {
      await runTest(page, Object.assign({}, config, answers));
    }

    await browser.close();

  } catch (error) {

    console.error(error);

  }
};
