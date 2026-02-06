'use strict';

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send('Welcome to the Playlist app!');   
  },
};


import logger from "../utils/logger.js";

export default start;
