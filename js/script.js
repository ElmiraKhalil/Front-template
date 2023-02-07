import { langdata } from "../data/langdata.js";
import { langlink } from "../data/langlink.js";
import { langlive } from "../data/langlive.js"; 


const langBtn= document.querySelector('#lang'); 
const langItem= document.querySelectorAll('.nav-link'); 
const langItem1=document.querySelectorAll('.item');
const langItem2=document.querySelectorAll('.live');


const multiLang = ()=>{
    if (langBtn.innerHTML === 'AZ') {
      for( let x in langdata.az){
        langItem[x].innerHTML = langdata.az[x];
      }
      langBtn.innerHTML = 'EN'
      for( let x in langlink.az){
        langItem1[x].innerHTML = langlink.az[x];
      }
      langBtn.innerHTML = 'EN'
      for( let x in langlive.az){
        langItem2[x].innerHTML = langlive.az[x];
      }


    }else{
        for( let x in langdata.en){
            langItem[x].innerHTML = langdata.en[x];
          }
          langBtn.innerHTML = 'AZ'

          for( let x in langlink.en){
            langItem2[x].innerHTML = langlink.en[x];
          }
          langBtn.innerHTML = 'AZ'

          for( let x in langlive.en){
            langItem2[x].innerHTML = langlive.en[x];
          }
          langBtn.innerHTML = 'AZ'
    }

    
    }


langBtn.onclick = multiLang;




