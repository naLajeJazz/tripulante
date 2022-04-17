import React from 'react'
import Componente from './components/Componente'
import DiaHoras from './components/DiaHoras'
import Estilo from './FolhasEstilo/FolhaEstilo'


import {View} from 'react-native'

export default props =>{


  return(
    
<View style={Estilo.container}>



<Componente/>
<DiaHoras/>




</View>
  )
}