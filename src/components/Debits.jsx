import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionDeleteDebit, actionGetDebits, actionUpdateDebit } from '../actions/index';
import Debit from '../components/Debit';

class Debits extends Component {
    render() {
        const { listUsers, listDebits, id, deleteDebit, getDebits, updateDebit } = this.props;
        return (
            <div className="container-debit-client" >

                {listUsers.map((user) => {
                    if (id === user.id) {
                        return <h2 className="name-debtor" key={user.id}>{`${user.name}`}</h2>
                    }
                    return false;
                })}
                <div className="box-debit-client" >
                    {listDebits.map((debit) => (<Debit debit={debit} deleteDebit={deleteDebit} getDebits={getDebits} id={id} updateDebit={updateDebit} />))}
                </div>
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
    updateDebit: (debit) => dispatch(actionUpdateDebit(debit)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Debits);