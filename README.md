## Introduction
A smart recursive scraper to download any website into a local directory (including all css, images, js, etc.)

## Installation 
After cloning the repository, download and install npm modules using the command below:
```
npm install
```

## Run the spider 
To run the spider in **normal** mode:
```
npm run build <website_url> 
```

To run the spider in **debug** mode:
```
npm run build:debug <website_url> 
```

To run the spider and specify a **folder** name as the output directory for the scraped website:
```
npm run build <website_url> [folder_name]
```

Scrapify will create an empty directory as per the provided argument [folder_name] to host the downloaded files, if the folder is already exists, scrapify will remove it and create it again.

By default, all folders will be created under {PROJECT_ROOT}/www/

Example: 
```
npm run build http://www.github.com github.com
```

## Configure the spider (optional)
Before running the spider, you need to edit the config file using your favorite editor.
```
vi src/config.js
```
After opening the file, add the target websites into the urls list, for multiple websites you can provide multiple entries "comma seperated"
```
module.exports = {
  urls: ["https://www.yourwebsite.com"],
  output: "html",
  recursive: false,
  maxRecursiveDepth: 1,
  bySiteStructure: false
};
```

## options
* [urls](#urls) - urls to download, *required*
* [output](#output) - path to save files, *required*
* [sources](#sources) - selects which resources should be downloaded
* [recursive](#recursive) - follow hyperlinks in html files
* [maxRecursiveDepth](#maxrecursivedepth) - maximum depth for hyperlinks
* [maxDepth](#maxdepth) - maximum depth for all dependencies

## Run the website 
This command will spin an express server to run the website on port 3000
```
npm start
```

## Credits
[node-website-scraper](https://github.com/website-scraper/node-website-scraper)
