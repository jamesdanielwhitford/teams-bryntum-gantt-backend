# GanttChartBackend

1. Download the project from Github (click on the Download ZIP file or through SSH)
2. Open the downloaded folder in Visual Studio Code
3. Run "npm install" to download the necessary node packages
4. Run "npm run build" to generate a dist folder (this command to converts the Typescript files to Javascript files).
4. Finally, run "npm run start" to start the project. If your database credentials are set to a local database and it is not running, the app will throw an error. 


How to setup a local database:

1. Go to the XAMPP website to download it: https://www.apachefriends.org/hu/index.html.
2. Follow the instruction to set up a mysql server.
3. After it is downloaded, click on Start Apache and Mysql button on the Admin panel.


If a mysql server will be connected to the app in future, you don't have to set up one locally.
You can edit the database settings in src/config/sequelizeInstance.ts file.
