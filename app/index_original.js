import {addHeader,addParagraph} from './helpers'
import add,{multi} from './add'
addHeader('This function is from a diffrent file!');
addHeader(`The sum of 54 + 57 equal ${add(54,57)}`);
addHeader(`The multi of 54 + 57 equal ${multi(54,57)}`);
addParagraph(`I want to assign a keyboard short cut within ConEmu that will 
open a new tab, in the same directory as the current tab is within. So something like`);