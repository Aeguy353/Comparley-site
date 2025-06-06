Comparley Smart Product Comparison Platform

This is the source code for GetComparley (getcomparley.com), a product comparison platform integrating CJ.com and eBay APIs.

Setup and Deployment





Clone the Repository

git clone https://github.com/Aeguy353/Comparley-site.git
cd Comparley-site



Install Dependencies

npm install



Set Up Environment Variables





Copy .env.example to .env:

cp .env.example .env



Open .env and add your API tokens:

PORT=3000
CJ_TOKEN=your-cj-token-here
CJ_WEBSITE_ID=your-cj-website-id-here
EBAY_CLIENT_ID=your-ebay-client-id-here
EBAY_CLIENT_SECRET=your-ebay-client-secret-here



Test Locally

npm start

Visit http://localhost:3000 to test the site.



Deploy to Render





Push to GitHub:

git add .
git commit -m "Ready for deployment"
git push origin main



In Render, create a new Web Service, link your GitHub repository, and set the following:





Runtime: Node



Build Command: npm install



Start Command: npm start



Add environment variables (from your .env file) in Render’s dashboard.

Adding New Stores





Edit stores.json to add or remove stores:

{"id": "new-store", "name": "New Store", "categories": ["category1", "category2"]}



Commit and push changes to update the live site.

Adding New APIs (e.g., Amazon)





Open apiManager.js and add a new function (e.g., searchAmazon).



Update server.js to call the new function in /api/search or /api/trust-us-search.



Add any new environment variables to .env.example and Render.

Notes





The site uses affiliate links, and commissions may be earned on purchases.



Contact support via the website for issues.
