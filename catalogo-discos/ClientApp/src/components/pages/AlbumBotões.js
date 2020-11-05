import { Button, ButtonGroup } from '@material-ui/core';
import React, { Component } from 'react';

class AlbumBotões extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonGroup className="w-100" variant="contained" color="secondary" aria-label="contained primary button group">
                <Button className="w-25 no-border-radius" data-toggle="collapse" data-target="#sidebar" onClick={this.props.exibeDetalhes} data-oportunidade={this.props.oportunidade} aria-expanded="false" aria-controls="sidebar">
                    <i className="material-icons-round md-24" style={{ fontSize: "3.2rem" }}>zoom_in</i>
                </Button>
                <Button className="w-75 no-border-radius" color="primary" style={{ fontSize: '26px', fontWeight: '400' }}>
                    Investir <i className="material-icons-round md-24 spin-hover" style={{ fontSize: "2rem", verticalAlign: "text-top", marginLeft: '4px' }}>toys</i>
                </Button>
            </ButtonGroup>
        );
    }
}

export default AlbumBotões;
