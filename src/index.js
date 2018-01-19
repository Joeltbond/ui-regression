import fs from "fs";
import puppeteer from "puppeteer";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { bufferToPng } from "./png";
import { screenshotElement, getDimensions } from "./driver";

const diff = new PNG({ width: 600, height: 600 });

const updateH1 = newH1 => {
  document.querySelector("h1").innerHTML = newH1;
};

const clip = { x: 0, y: 0, width: 600, height: 600 };

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://joeltbond.github.io");
    const dimensions = await getDimensions(page, "h1");
    const diff = new PNG(dimensions);
    const test1 = await bufferToPng(await screenshotElement(page, "h1"));
    page.evaluate(updateH1, "Jack Bond");

    const shot2 = await screenshotElement(page, "h1");
    const test2 = await bufferToPng(shot2);

    console.log(shot2);
    console.log(test2);

    pixelmatch(test1.data, test2.data, diff.data, 600, 600, { threshold: 0.1 });

    await diff.pack().pipe(fs.createWriteStream("diff.png"));

    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
