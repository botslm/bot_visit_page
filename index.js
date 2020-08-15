const puppeteer = require('puppeteer');

(async () => {
  // Read websites file
  const fs = require('fs');
  const contentFile = fs.readFileSync('website_list.txt', 'utf8');
  const arrayWebSite = contentFile.split('\n');

  // Open browser
  const browser = await puppeteer.launch({ headless: true });
  while(true){
    for(let i = 0; i < arrayWebSite.length; i++){
      if(arrayWebSite[i].match(/^$/g) === null){
        // Open a new page
        const page = await browser.newPage();
        await page.waitFor(5000);

        // Redirect to page
        await page.goto(arrayWebSite[i]);
        await page.waitFor(10000);

        // Close page
        await page.close();
        console.log("Visited: " + arrayWebSite[i]);
        await page.waitFor(8000);
      }
    }
  }
})();