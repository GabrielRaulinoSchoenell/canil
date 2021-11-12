import {Request, Response} from 'express';
import { Pet } from '../models/Pet';
import { createMenu } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response)=>{

    let query: string = req.query.q as string;

    let list = Pet.getFromName(query); 

    
    console.log(query, list);

    res.render('pages/page', {
        menu: createMenu(''),
        list,
        query
    });
}