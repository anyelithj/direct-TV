import React, {Component} from 'react'

class Listado extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.tareas.nombre}</h2>
                <p>
                    {this.props.tareas.numero_canal}
                </p>
                <p>
                    {this.props.tareas.hd}
                </p>
                <p>
                    {this.props.tareas.programas}
                </p>
            </div>
        );
    }
}
export default Listado;