import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Header.css';

class Header extends Component {
    render() {
        const { nome, email } = this.props;
        return (
            <header>
                <img  className="img-header" alt="img" src="https://image.flaticon.com/icons/png/512/31/31684.png"/>
                <h4  className="player" >{`Nome: ${nome}`}</h4>
                <h4  className="email">{`Email: ${email}`}</h4>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    nome: state.user.nome,
    email: state.user.email,
});
export default connect(mapStateToProps)(Header);