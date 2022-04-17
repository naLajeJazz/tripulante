import React,{useState} from 'react'
import {Text,View} from 'react-native'
import Estilo from '../FolhasEstilo/FolhaEstilo'

export default props =>{



//horas
const [hrs,setHrs]=useState(0);
//dias
const [dia,setdia]=useState(0);

//LOOP
const l= setTimeout(()=>{loop()}, 3000);
function loop(){

  hrs ==24? [setHrs(0), setdia(dia+1)]:setHrs(hrs+1);   

  
  }


return( 

<Text style={Estilo.txt}>{hrs} hrs/ dia {dia} 

</Text>

  )
}