"use strict";
const fs = require('fs');

const mainFolder = "./fedor-rusak.ru/notes/"

const contentIndexString =  fs.readFileSync(mainFolder+"content/index.json");

const contentIndex = JSON.parse(contentIndexString);

const pageTemplate =  fs.readFileSync(mainFolder+"templates/page.html.template").toString();

contentIndex.forEach(
	blogPostContent => {
		const postName = blogPostContent.name;
		const date = blogPostContent.date;
		const dateString = blogPostContent.date_string;

		const postData = fs.readFileSync(mainFolder+"content/"+postName).toString();


		//windows \r\n thingy
		let separatorLength = 4;
		let indexOfDataSeparator = postData.indexOf("\r\n\r\n");

		if (indexOfDataSeparator === -1) {
			//unix \n thingy
			separatorLength = 2;
			indexOfDataSeparator = postData.indexOf("\n\n");
		}


		const localizedName = postData.substring(0, indexOfDataSeparator);

		const content = postData.substring(indexOfDataSeparator+separatorLength);


		let newPage = pageTemplate
			.replace(new RegExp("%PAGE_HEADER%", 'g'), localizedName)
			.replace("%PAGE_DATE%", date)
			.replace("%PAGE_DATE_STRING%", dateString)
			.replace("%CONTENT%", content);


		let fd = fs.openSync("./fedor-rusak.ru/notes/"+postName+".html", 'w+');
  		fs.appendFileSync(fd, newPage, 'utf8');

		console.log(">>> "+postName+".html");
	}
);