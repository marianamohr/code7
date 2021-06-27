import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionDeleteDebit, actionGetDebits } from '../actions/index';

class Debits extends Component {
    render() {
        const { listUsers, listDebits, id, deleteDebit, getDebits } = this.props;

        return (
            <div className="box-debit-client">
                {listUsers.map((user) => {
                    let nameUser = '';
                    if (id === user.id) {
                        nameUser = user.name;
                    }
                    return <h2 className="name-debtor">{nameUser}</h2>
                })}

                {listDebits.map((debit) => {
                    if (id === debit.idUsuario) {
                        return (
                            <div>
                                <h5 className="debit">{`Motivo: ${debit.motivo} Valor: npm testeR$${debit.valor}`}</h5>
                                <button type="button" onClick={() => {
                                    deleteDebit(debit._id);
                                    getDebits()
                                }}>Excluir</button>
                                <button type="button">Editar</button>
                            </div>
                        )
                    }
                    return false;
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listUsers: state.user.listUsers,
    listDebits: state.debits.listDebits,
    id: state.debits.id,
});

const mapDispatchToProps = (dispatch) => ({
    deleteDebit: (id) => dispatch(actionDeleteDebit(id)),
    getDebits: () => dispatch(actionGetDebits()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Debits);