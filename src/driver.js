export const screenshotElement = async (page, selector) => {
  const element = await page.$(selector);
  return element.screenshot();
};

export const getDimensions = async (page, selector) => {
  const element = await page.$(selector);
  const { height, width } = await element.boundingBox();
  return { height, width };
};
