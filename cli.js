#!/usr/bin/env node
var event = require('./App'),
chalk = require('chalk');
(async () => {
var data = await event();
data.map((events,index) => console.log(chalk.cyanBright.bold(` \n ${chalk.yellowBright.bold(data.length-index)} : ${events.title} at ${events.at}`)))
})();
