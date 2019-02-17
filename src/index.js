import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1
        }
    }

    
}

ReactDOM.render(
    <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                NoobMusic
            </Typography>
        </Toolbar>
    </AppBar>,
    document.getElementById('root')
)