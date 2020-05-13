import React, { Component } from 'react';
import { Menu } from 'grommet';


import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'

import './styles/menuCentral.css';

class MenuCentral extends Component {


  constructor(){
    super();
    this.state={
      width:0
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(e){
    this.setState({
      width:"80%"
    })
  }

  closeMenu(e){
    this.setState({
      width:"0px"
    })
  }

  render(){

    const styleDrawer = {
      width:this.state.width
    }

    return(
      <div className="div-principalMenuCentral">

        {/*MENU MOVIL*/}
          <div style={styleDrawer} id="mySidenav" class="sidenav">
            <img class="tecmmicon" src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm-blanco.png"/>
            <a class="closebtn" onClick={this.closeMenu.bind(this)}><i class="times icon"></i></a>
            <a>
              SOMOS TECMM
              <ul>
                <li>
                  <a href="http://tecmm.edu.mx/quienesSomos">Quienés Somos</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/rectoria">Rectoria</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/bienvenida">Bienvenida</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/modeloAcademico">Modelo Académico</a>
                </li>
              </ul>
            </a>

            <a href="http://controlescolar.tecmm.edu.mx">ADMISIÓN</a>
            <a href="http://tecmm.edu.mx/vidaEstudiantil">VIDA ESTUDIANTIL</a>
            <a href="http://vinculacion.tecmm.edu.mx/">VINCULACIÓN</a>
            <a href="http://www.areaacademica.tecmm.edu.mx/">ÁREA ACADÉMICA</a>
            <a href="http://tecmm.edu.mx/contacto">CONTACTO</a>
            <a href="http://tecmm.edu.mx/igualdad">SGIG</a>
            <a href="http://tecmm.edu.mx/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>
          </div>
          <span className="span-menuMovilButton" onClick={this.openMenu.bind(this)}>&#9776;</span>
        {/*MENU MOVIL*/}

        {/*MENU CENTRAL ESCRITORIO*/}

        <div className="div-menuGobMx">
          <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"/>

          <div className="div-linksMenuGobMx">

            <ul>
              <li> <a target="_blank" href="https://www.gob.mx/gobierno">Gobierno</a> </li>
              <li> <a target="_blank" href="https://www.participa.gob.mx/">Participa</a> </li>
              <li> <a target="_blank" href="https://datos.gob.mx/">Datos</a> </li>
              <li> <a target="_blank" href="https://www.gob.mx/gobierno"><i class="search icon"></i></a> </li>
            </ul>

          </div>

        </div>
        <a href="/">
          <img className="img-menuCentral-header" src="http://vallarta.tecmm.edu.mx/imagenes/banner-tecmm.jpg"/>
        </a>
        <img className="img-menuCentral-nombre" src="http://vallarta.tecmm.edu.mx/imagenes/vallarta.png"/>

        <Nav id="menuCentralBootstrap" variant="pills" activeKey="1">
          <Dropdown >
            <Dropdown.Toggle id="dropdownBootstrap">SOMOS TECMM</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="http://tecmm.edu.mx/quienesSomos" id="dropdownItemBootstrap">Quienés Somos</Dropdown.Item>
              <Dropdown.Item href="http://tecmm.edu.mx/rectoria" id="dropdownItemBootstrap">Rectoria</Dropdown.Item>
              <Dropdown.Item href="http://tecmm.edu.mx/modeloAcademico" id="dropdownItemBootstrap">Modelo Académico</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle id="dropdownBootstrap">COMUNIDAD TEC</Dropdown.Toggle>
            <Dropdown.Menu>

              <Dropdown drop={'right'} >
              <Dropdown.Toggle id="droprightBootstrap">Estudiantes</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="http://tecmm.edu.mx/enConstruccion">Manual de Induccion</Dropdown.Item>
                  <Dropdown.Item href="http://tecmm.edu.mx/enConstruccion">Reglamentos</Dropdown.Item>
                  <Dropdown.Item href="/cursosEspeciales">Cursos Especiales</Dropdown.Item>
                  <Dropdown.Item >Re-Inscripciones</Dropdown.Item>
                  <Dropdown.Item >Actividades Complementarias</Dropdown.Item>
                  <Dropdown.Item >Proyecto Integrador</Dropdown.Item>
                  <Dropdown.Item >Evaluacion Docente</Dropdown.Item>
                  <Dropdown.Item >Cursos de Verano</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown drop={'right'} >
              <Dropdown.Toggle id="droprightBootstrap">Egresados</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Seguimiento a Egresados</Dropdown.Item>
                  <Dropdown.Item >Titulación</Dropdown.Item>
                  <Dropdown.Item >Bolsa de Trabajo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown drop={'right'} >
              <Dropdown.Toggle id="droprightBootstrap">Docentes</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Convocatorias Docentes</Dropdown.Item>
                  <Dropdown.Item >Programa Tutorias</Dropdown.Item>
                  <Dropdown.Item >Coordinadores</Dropdown.Item>
                  <Dropdown.Item >Registro de Calificaciones (CONECT)</Dropdown.Item>
                  <Dropdown.Item >Materias en Linea (Moodle)</Dropdown.Item>
                  <Dropdown.Item >Formatos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item href="http://tecmm.edu.mx/vidaEstudiantil">Administrativos</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Dropdown >
            <Dropdown.Toggle id="dropdownBootstrap">SERVICIOS</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >Centro Integral de Salud</Dropdown.Item>
              <Dropdown.Item >Servicio Psicopedagógico</Dropdown.Item>
              <Dropdown.Item >Servicios Escolares</Dropdown.Item>
              <Dropdown.Item >Biblioteca</Dropdown.Item>
              <Dropdown.Item >Centro de Cómputo</Dropdown.Item>
              <Dropdown.Item >Caja</Dropdown.Item>
              <Dropdown.Item >Referencia Bancaria</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle id="dropdownBootstrap">TRAMITES</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >Condonaciones (becas)</Dropdown.Item>
              <Dropdown.Item >Cambio de carrera</Dropdown.Item>
              <Dropdown.Item >Revalidación y Equivalencia</Dropdown.Item>
              <Dropdown.Item >Traslados y Movilidad</Dropdown.Item>
              <Dropdown.Item >Servicio Social</Dropdown.Item>
              <Dropdown.Item >Residencias Profesionales</Dropdown.Item>
              <Dropdown.Item >Titulación</Dropdown.Item>
              <Dropdown.Item >EGEL-CENEVAL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://controlescolar.tecmm.edu.mx">
              VIDA ESTUDIANTIL
            </Nav.Link>
          </Nav.Item>

          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://controlescolar.tecmm.edu.mx">
              CONTACTO
            </Nav.Link>
          </Nav.Item>

          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://controlescolar.tecmm.edu.mx">
              ADMISIÓN
            </Nav.Link>
          </Nav.Item>

          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/igualdad">
              SGIG
            </Nav.Link>
          </Nav.Item>

          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/quejasYDenuncias">
              QUEJAS Y DENUNCIAS
            </Nav.Link>
          </Nav.Item>
        </Nav>


      </div>
    );
  }
}

export default MenuCentral;
