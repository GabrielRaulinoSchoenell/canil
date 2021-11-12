import {Request, Response} from 'express';

import { Pet } from '../models/Pet';
import { createMenu } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response)=>{
    let list = Pet.getAll();


    res.render('pages/page', {
        menu: createMenu('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list,
    });
}

export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenu('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenu('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenu('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}