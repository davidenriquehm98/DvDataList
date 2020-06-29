import { props } from './propiedades'
import { dataEstructura } from './dataEstructura'
import { itemsEstructura } from './itemsEstructura'

export const Api = [
  { title: 'Propiedades',
    items: props },
  { title: 'Estructura Data',
    descripcion: 'Cada objeto dentro del array <b style="font-size:15px">data</b> puede contener las siguientes propiedades:',
    items: dataEstructura },
  { title: 'Estructura Items',
    descripcion: 'Cada objeto dentro del array <b style="font-size:15px">items</b>, que a su vez se encuentre dentro de un objeto en el array <b style="font-size:15px">data</b>, puede contener las siguientes propiedades:',
    items: itemsEstructura }
]