import React, {Component} from 'react';
import MenuCentral from './menuCentral.js'
import Footer from './footer.js'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './styles/dropRightEstudiantes.css';



class CursosEspeciales extends Component {
  constructor(props){
    super();
    this.state={

    }
  }


  render(){
    return(

      <div className="cursosEspecialesContainer">
        <MenuCentral/>

        <img className="portadaCursosEspeciales" src="http://vallarta.tecmm.edu.mx/imagenes/portada-cursosEspeciales.jpg"/>

        <h1>¿Qué es el examen especial?</h1>
        <p>El curso especial es cuando el estudiante no acreditó la asignatura en curso de repetición y cursa dicha asignatura por tercera vez. El estudiante tiene derecho a cursar la asignatura por única vez en curso especial en el siguiente período semestral o en verano, siempre y cuando ésta se ofrezca. Con base a las causas de baja definitiva del Instituto (apartado 5.4.6), si el estudiante no acredita la asignatura en el curso especial es dado de baja definitiva de su plan de estudios del Instituto de adscripción. (Apartado 5.4.2.5.)</p>

        <Tabs id="uncontrolled-tab-example">
          <Tab eventKey="pago" title="PAGO">

          </Tab>

          <Tab eventKey="registro" title="REGISTRO">

          </Tab>

          <Tab eventKey="inscripcion" title="INSCRIPCIÓN">

          </Tab>

          <Tab eventKey="ojo" title="¡OJO!">

          </Tab>
        </Tabs>

        <Footer/>
      </div>
    );
  }
}

export default CursosEspeciales;
