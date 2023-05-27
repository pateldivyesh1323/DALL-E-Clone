import {surpriseMePrompts} from '../Constants/index';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt){
    let randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    let randomPrompt = surpriseMePrompts[randomIndex];
    
    if(randomPrompt === prompt) 
    {
        return getRandomPrompt(prompt);
    }
    return randomPrompt;
}

export async function downloadImage(_id,photo){
    console.log(photo)
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}