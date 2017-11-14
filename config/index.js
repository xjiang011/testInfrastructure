'use strict';

const yaml = require('js-yaml');
const fs = require('fs');
const env = process.env.NODE_ENV;

const _ = require('underscore');
const baseConfig = 'config.base.yml';
const envOverride = env ?  `config.${env}.yml`  : 'config.dev.yml';
 

var convertToJson=function(baseFileName,envFileName)
{
try {
    const baseConfig = yaml.safeLoad(fs.readFileSync(__dirname +'/'+baseFileName, 'utf8'));
    const envConfig = yaml.safeLoad(fs.readFileSync(__dirname +'/'+envFileName, 'utf8'));
    return  _.extend(baseConfig,envConfig);

} catch (e) {
    console.log(e);
     }
 }
      
  module.exports = convertToJson(baseConfig,envOverride);  
