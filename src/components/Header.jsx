import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Header.css';

class Header extends Component {
    render() {
        const { nome, email } = this.props;
        return (
            <header>
                <h4  className="player" >{nome}</h4>
                <h4  className="email">{email}</h4>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    nome: state.user.nome,
    email: state.user.email,
});
export default connect(mapStateToProps)(Header);