import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../Style/Content.css';
import { actionSaveDebit, actionGetDebits } from '../actions/index';

class Form extends Component {

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
        const { listUsers, saveDebit, getDebits } = this.props;
        const { client, motivo, valor } = this.state;
        return (
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
                            const { client,
                                motivo,
                                valor, } = this.state;
                            const debit = {
                                client,
                                motivo,
                                valor,
                            }
                            saveDebit(debit);
                            getDebits();

                        }}
                    >Salvar</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listUsers: state.user.listUsers,
    listDebits: state.debits.listDebits,
});

const mapDispatchToProps = (dispatch) => ({
    saveDebit: (debit) => dispatch(actionSaveDebit(debit)),
    getDebits: () => dispatch(actionGetDebits()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);