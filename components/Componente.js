import React, { useState,Fragment } from 'react';
import { Text, View } from 'react-native';
import Estilo from '../FolhasEstilo/FolhaEstilo';

export default (props) => {
  const [f, setF] = useState(10);
  const [c, setC] = useState(false);
  const [s,setS]=useState(10);
  const[d,setD]=useState(false);
  const [info,setInfo]=useState('trabalhando')


  const  tripulante = {
    nome: 'Zé',
    cargo: 'engenheiro',
    saude: 10,
    estado: { fome: f, sono: s, humor: '' },
    acao: { comer: c, dormir: false, entreter: false },
     
  }; 

 

  //LOOP
  const l = setTimeout(() => { loop();}, 1000);
  const l2 = setTimeout(() => { loop2();}, 1000*4);


  function loop() {
   
if (d==false){
    if(c==false){setF(f-1); if(f==0){setC(true);setInfo('comendo')}} else if(f<=10){setF(f+4);if(f==10){setC(false);setInfo('trabalhando')}}
   
}
  }
  function loop2(){
    if(d==false){setS(s-1); if(s==0){setD(true);setInfo('dormindo')}} else if(s<=10){setS(s+4);if(s==10){setD(false);setInfo('trabalhando')}} 
  }

  return (

<View >

    <Text style={Estilo.txt}>nome: {tripulante.nome} </Text>
    <Text style={Estilo.txt}>cargo: {tripulante.cargo} </Text>
    <Text style={Estilo.txt}>Status: {info}</Text>
    
</View>
     
    
  );
};
