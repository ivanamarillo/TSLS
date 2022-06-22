/*-------------------------------------------------------------------
Este es el concepto de componente:

AvatarJSX es un componente que estoy insertando en el componente
App.

Puedo utilizarlo cuantas veces quiera cambiando sus parámetros por
'props'.
-------------------------------------------------------------------*/

const AvatarJSX = (props) => {
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`;
  return (
    <picture>
      <img src={src} alt={'Lego'}/>
      {props.name}
    </picture>
  );
}

function App() {
  return (
    <div>
      <AvatarJSX id={1} name={'Ivan'}/>
      <AvatarJSX id={2} name={'Seba'}/>
      <AvatarJSX id={3} name={'Nico'}/>
    </div>
  );
}

export default App;
