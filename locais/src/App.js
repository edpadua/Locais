import logo from './logo.svg';
import './App.css';

import {CssBaseline, Grid} from '@material-ui/core';

import Cabecalho from './Componentes/Cabecalho/index';
import Lista from './Componentes/Lista/index';
import Mapa from './Componentes/Mapa/index';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Cabecalho/>
      <Grid>
          
      </Grid>
    </div>
  );
}

export default App;
