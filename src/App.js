/*-------------------------------------------------------------------
Primeros pasos con JSX:

Los estilos se le pueden agregar a las etiquetas tanto en linea como
importando un archivo .css (preferible). Para hacerlo en linea basta
con incluir style={{}} como atributo y dentro de los segundos {}
podemos escribir las propiedades de CSS convencionales pero usando
camelCase y pasando el parámetro entre comillas '' o "".

También le puedo pasar funciones en linea a los event listeners como
--> onClick = {() => console.log('hice click')}, notar que paso un
arrow function que despues ejecuta la acción o función que yo le
quiera asignar.
-------------------------------------------------------------------*/
import NavBar from "./components/NavBar/NavBar";

const AvatarJSX = (props) => {
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`;
  return (
    <picture style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <img style={{borderRadius:'50%', width:'120px', boxShadow:'1px 1px 5px grey'}} src={src} alt={'Lego'}/>
      {props.name}
    </picture>
  );
}

function App() {
  return (
    <div>
      <NavBar/>
      <div style={{textAlign:'center', fontWeight:'bold'}}>
        <h1 style={{color:'red', marginBottom:'50px'}} onClick={() => console.log('Hice Click!')}>CODERHOUSE</h1>
        <AvatarJSX id={1} name={'Ivan'}/>
        <AvatarJSX id={2} name={'Seba'}/>
        <AvatarJSX id={3} name={'Nico'}/>
      </div>
    </div>
  );
}

export default App;
