import fs from "fs";

// 1️⃣ Read your HTML file (save the chasing No page as valentine.html)
let html = fs.readFileSync("valentine.html", "utf8");

// 2️⃣ Minify slightly: remove newlines and extra spaces
html = html.replace(/\n+/g, "").replace(/\s{2,}/g, " ");

// 3️⃣ Convert to Base64
const b64 = Buffer.from(html).toString("base64");

// 4️⃣ Output the data URL
console.log("data:text/html;base64," + b64);
