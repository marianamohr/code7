import React, { Component } from 'react'
import Header from '../components/Header';
import { connect } from 'react-redux';
import '../Style/Content.css';
import { actionSaveDebit } from '../actions/index';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: '',
            motivo: '',
            valor: 0,
        }
    }

    handleChange({ target }) {
        const { value, name } = target;
        if (name === 'client') {
            console.log(value[0]);
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
        const { listUsers, saveDebit, listDebits } = this.props;
        const { client, motivo, valor } = this.state;
        return (
            <main>
                <Header />
                <div className="content">
                    <div className="box-list-clients">
                        <h1>Devedores</h1>
                        <ul className="list-clients">
                           {listDebits.map(debit=> <li key={debit.idUsuario}>{debit.idUsuario}</li>)}
                           {listDebits.map(debit=> <li key={debit.idUsuario}>{debit.idUsuario}</li>)}
                        </ul>
                    </div>
                    <div className="form">
                        <h1>Form</h1>
                        <form>
                            <label>
                                Cliente:
                           <select
                                    name="client"
                                    id="client"
                                    value={client}
                                    onChange={(event) => {
                                        this.handleChange(event);
                                    }}
                                >
                                    {listUsers.map(user => <option key={user.id}>{`${user.id} - ${user.name}`}</option>)}
                                </select>
                            </label>
                            <label>
                                Motivo:
                                <input
                                    type="text"
                                    name="motivo"
                                    id="motivo"
                                    value={motivo}
                                    onChange={(event) => {
                                        this.handleChange(event);
                                    }}
                                />
                            </label>
                            <label>
                                Valor:
                                <input
                                    type="text"
                                    name="valor"
                                    id="valor"
                                    value={valor}
                                    onChange={(event) => {
                                        this.handleChange(event);
                                    }}
                                />
                            </label>
                            <button
                                type="button"
                                onClick={() => {
                                   // const { } = this.state;
                                    const debit = {
                                        idUsuario: 2,
                                        motivo: 'Parcela 3 carro',
                                        valor: '199.99'
                                    }
                                    saveDebit(debit)
                                }}
                            >Salvar</button>
                        </form>
                    </div>
                </div>
            </main >
        )
    }
}
const mapStateToProps = (state) => ({
    listUsers: state.user.listUsers,
    listDebits: state.debits.listDebits,
});

const mapDispatchToProps = (dispatch) => ({
    saveDebit: (debit) => dispatch(actionSaveDebit(debit)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Content);