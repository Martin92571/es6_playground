import {addHeader,addParagraph} from './helpers'
import superPerson from './person';

const martin = new superPerson('Martin','Death');
addParagraph(martin.talk("this is the paragrpah"));
addParagraph(martin.saySuperPower());