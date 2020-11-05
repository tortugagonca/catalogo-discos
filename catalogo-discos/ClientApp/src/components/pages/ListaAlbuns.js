import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { ViewListRounded, ViewModuleRounded } from '@material-ui/icons';
import { OportuniCardsList } from 'components/Album/CardsList';
import AlbumDetalhes from 'components/Album/Detalhes.js';
import React, { Component } from 'react';



export class ListaAlbuns extends Component {
    static displayName = ListaAlbuns.name;

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const albumId = this.props.match.params.id;
        this.setState({ albumSelecionada: albumId });
    }

    exibeDetalhes = (event) => {
        var albumId = event.currentTarget.dataset.album;
        window.history.pushState(null, null, 'albums/' + albumId);
        this.setState({ albumSelecionada: albumId });
    }

    render() {

        let contents = (
            <div style={{ marginBottom: '20px' }}>
                <OportuniCardsList exibeDetalhes={this.exibeDetalhes} />
            </div>
        );
        return (
            <div>
                <AlbumDetalhes album={this.state.albumSelecionada} time={Date.now()} loaded={false}></AlbumDetalhes>
                <h1 className="page-title display-5 text-light">
                    Albums
                </h1>
                <Typography className="subtitle display-5 text-light" variant="subtitle1">
                    <span class='user-name'>Fulano da Silva Sauro</span>, selecione novos investimentos
                </Typography>
                <div className="albums-filter float-left">
                    <ButtonGroup aria-label="filtros albums">
                        <Button size="small" color="secondary" variant="contained" disableElevation>Em Breve</Button>
                        <Button size="small" color="primary" variant="contained" disableElevation disabled>Abertas</Button>
                        <Button size="small" color="secondary" variant="contained" disableElevation>Fechadas</Button>
                    </ButtonGroup>
                </div>
                <div className="albums-view float-right">
                    <ButtonGroup aria-label="filtros albums">
                        <Button size="small" color="primary" variant="contained" disableElevation disabled>
                            <ViewModuleRounded fontSize="large" />
                        </Button>
                        <Button size="small" color="secondary" variant="contained" disableElevation>
                            <ViewListRounded fontSize="large" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div style={{ clear: 'both', overflow: 'hidden' }}>
                    {contents}
                    <br />
                    <br />
                </div>
            </div>
        );
    }
} 