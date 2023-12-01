import express, { Router } from 'express';

const bookingRouter: Router = express.Router();

// create a booking
bookingRouter.post('/create/:bid');

// delete a booking
bookingRouter.delete('/:bid');

// get all booking
bookingRouter.get('/');

export default bookingRouter;
