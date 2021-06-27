import React, { Component } from 'react'
import Header from '../components/Header';
import Form from '../components/Form';
import Debits from '../components/Debits';
import { connect } from 'react-redux';
import { actionNewDebit, actionSendDebtor } from '../actions/index';


class Content extends Component {

    render() {
        const { listUsers, listDebits, newDebit, newDebitButton, sendDebtor } = this.props;
        return (
            <main>
                <Header />
                <div className="content">
                    <div className="box-list-clients">
                        <h1>Devedores</h1>
                        <ul className="list-clients">

                            {listUsers.map(user => {

                                let thisDebists = [];
                                listDebits.forEach((debit) => {
                                    if (user.id === debit.idUsuario) {
                                        thisDebists.push(debit);
                                    }
                                })

                                return <div
                                    className="divida"
                                    onClick={() => {
                                        sendDebtor(user.id);
                                    }}>
                                    <h2>
                                        {user.name}
                                    </h2>
                                    {/* <div>
                                        {thisDebists.map((debit) => <h5>{`Motivo: ${debit.motivo} Valor: ${debit.valor}`}</h5>)}
                                    </div> */}
                                </div>
                            }
                            )}
                        </ul>
                    </div>
                    {newDebit ? <Form /> : <Debits />}
                </div>
                <button
                    type="button"
                    onClick={() => { newDebitButton() }}>Nova</button>
            </main >
        )
    }
}
const mapStateToProps = (state) => ({
    listUsers: state.user.listUsers,
    listDebits: state.debits.listDebits,
    newDebit: state.debits.newDebit,
});

const mapDispatchToProps = (dispatch) => ({
    newDebitButton: () => dispatch(actionNewDebit()),
    sendDebtor: (id) =>dispatch(actionSendDebtor(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Content);