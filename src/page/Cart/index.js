import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Menu, Button, MenuItem, TextField, GridList, GridListTile, GridListTileBar, IconButton, StarBorderIcon } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";





const ColorlibConnector = withStyles({
    root: {
        background: 'red'
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    list: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'flex',
        flexDirection: 'row',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    fistStep: {
        background: '#E5E4E2'
    },
    secondStep: {
        background: '#E5E4E2'
    },
    gridList: {
        display: "flex",
        alignItems: "center",
        transform: 'translateZ(0)'
    },
}));




function getSteps() {
    return ['Carrinho', 'Finalizar Compra'];
}


export default function Cart() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (

        <div className={classes.root}>
            <div className="header">
                <img height="100px" src={logo} />
                <TextField id="standard-basic" label="Search" />
                <div className="icons">
                    <div className="carrinho">
                        <Link to="/cart"><img src={shopcart} /></Link>
                    </div>
                    <img onClick={handleClick} id="person" src={person} />
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem >Meus Pedidos</MenuItem>
                        <MenuItem >Meus Endereços</MenuItem>
                        <MenuItem >Sair</MenuItem>
                    </Menu>
                </div>
            </div>

            <div className="body-cart">
                <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div >
                    {activeStep === 0 ? (
                        <div className={classes.fistStep}>
                            <List className={classes.list}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="imagem do produto" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="NOME DO PRODUTO"
                                        secondary={
                                            <div
                                                className={classes.inline}
                                            >
                                                <p>Infos produto</p>
                                                <p>Preço produto    </p>
                                            </div>

                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </div>
                    ) : (
                        <div className={classes.secondStep}>
                            <h1>second step</h1>
                        </div>

                    )}
                </div>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>

            </div>
        </div>
    );
}