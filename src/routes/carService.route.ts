import express, { Router } from 'express';

const carServicesRoute: Router = express.Router();

// get all service

carServicesRoute.get('/');

// get a service
carServicesRoute.get('/:csid');

// creat a service
carServicesRoute.post('/');

// update a service
carServicesRoute.put('/:csid');

// delete a service
carServicesRoute.delete('/:csid');

export default carServicesRoute;
