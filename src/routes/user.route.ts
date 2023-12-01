import express, { Router } from 'express';

const userRoute: Router = express.Router();

// get all users
userRoute.get('/');

// get an user
userRoute.get('/:uid');

// delete and user
userRoute.delete('/:uid');

// update an user
userRoute.put('/:uid');

export default userRoute;
