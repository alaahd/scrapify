var scrape = require("website-scraper");
var rimraf = require("rimraf");
var config = require("./config");
var sleep = require("await-sleep");

const { urls, recursive, maxRecursiveDepth, output, bySiteStructure } = config;
var options = {
  urls: [...urls],
  //   urlFilter: url =>
  //     url.indexOf("https://www.google.com/") !== 0, // Filter links to other websites
  directory: `./${output}`,
  recursive,
  maxRecursiveDepth,
  request: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
    }
  }
  // sources: [
  //     {selector: 'a[rel="lightbox"] img', attr: 'src'},
  // ]
};

if (bySiteStructure) {
  options.filenameGenerator = "bySiteStructure";
}

// once the folder is deleted successfully then we start scrapping the website
rimraf(options.directory, function() {
  console.log(`Deleting directory: ${options.directory}`);
  console.log(
    `Start scrapping content with debug mode ${
      process.env.DEBUG ? "ON" : "OFF"
    } ...`
  );

  (async function() {
    try {
      await sleep(3000);
      const results = await scrape(options);
      console.log("Scrapping done");
      console.log(`Scrapping results: ${results}`);
    } catch (error) {
      console.log(error.message);
    }
  })();
});
