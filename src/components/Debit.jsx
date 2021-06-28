import React, { Component } from 'react'
import { } from '../actions/index';

class Debit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            motivo: '',
            valor: 0,
            idUsuario: 0,
            id: '',
        }
    }

    handleChange({ target }) {
        const { value, name } = target;
        if (name === 'client') {
            const newValue = value[0];
            this.setState({
                [name]: newValue,
            });
        } else {

            this.setState({
                [name]: value,
            });
        }
    }


    render() {
        const { debit, id, deleteDebit, getDebits, updateDebit } = this.props;
        const { edit } = this.state;
        if (debit.idUsuario === id) {
            return <div className="box-debit">
                <div className="debit" >
                    <h5 >{`Motivo: ${debit.motivo}`}</h5>
                    <h5>{`Valor: R$${debit.valor}`}</h5>
                    <button type="button" onClick={() => {
                        deleteDebit(debit._id);
                        getDebits()
                    }}>Excluir</button>
                    <button type="button" onClick={() => {
                        this.setState((prevState) => ({
                            edit: !prevState.edit,
                            motivo: debit.motivo,
                            valor: debit.valor,
                            idUsuario: debit.idUsuario,
                            id: debit._id,

                        }))
                    }}>Editar</button>
                </div>
                {edit
                    ? <div className="edit-debit" >
                        <label>Motivo: <input name='motivo' value={this.state.motivo} onChange={(event) => {
                            this.handleChange(event);
                        }} /></label>
                        <label>Valor: <input name='valor' value={this.state.valor} onChange={(event) => {
                            this.handleChange(event);
                        }} /></label>
                        <button type="button" onClick={() => {
                            updateDebit(this.state);
                            getDebits();
                        }}>Salvar</button>
                    </div>
                    : <div></div>}
            </div>
        }
        return (<></>);
    }
}


export default (Debit);