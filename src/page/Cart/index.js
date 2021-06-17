import React, { useState } from "react";
import "./styles.css"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItems from "../../server/cart.json";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import add from "../../assets/add.svg";
import less from "../../assets/less.svg";
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import { Menu, Button, MenuItem, TextField } from "@material-ui/core";
import Swal from 'sweetalert2'



const ColorlibConnector = withStyles({
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


}));

function getSteps() {
    return ['Carrinho', 'Finalizar Compra'];
}

export default function Cart() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    const handleNext = () => {
        if (activeStep >= 1) {
            window.localStorage.clear();
            Swal.fire({
                icon: 'success',
                title: 'Compra efetuada com sucesso',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                history.push("/home");
            })
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const valueTotal = () => {
        let cartLocalStorage = JSON.parse(window.localStorage.getItem('cart'));

        let value = 0;
        for (let i = 0; i < cartLocalStorage.length; i++) {
            value += (cartLocalStorage[i].valor)

        }
        return (
            <div className="value-total">
                <h2> Valor Total: R$ {value}</h2>
            </div>
        )
    }

    const createCart = () => {
        let cartLocalStorage = JSON.parse(window.localStorage.getItem('cart'));
        return (
            <div className="itens">
                {cartLocalStorage.map(el =>
                    <div className="item">
                        <img className="image" src={el.img} />
                        <h2>{el.nome}</h2>
                        <h2>R$ {el.valor}</h2>
                        <div className="qtditemsCart">
                            <img src={add} />
                            <label className="qntdItens">1</label>
                            <img src={less} />
                        </div>
                        <h2>R$ {el.valor}</h2>
                    </div>)}
            </div>
        )
    }

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
                            <div>
                                {createCart()}
                                <h2>{valueTotal()}</h2>
                            </div>
                        </div>
                    ) : (
                        <div className="secondStep">
                            <div className="infos">
                                <h2>Finalizar Compra</h2>
                                <TextField className="input-secondStep" label="Número do cartão" variant="outlined" />
                                <TextField className="input-secondStep" label="Código de segurança" variant="outlined" />
                                <TextField className="input-secondStep" label="Nome do cartão" variant="outlined" />
                                <TextField className="input-secondStep" label="Mes de vencimento" variant="outlined" />
                                <TextField className="input-secondStep" label="Ano de vencimento" variant="outlined" />


                            </div>
                        </div>

                    )}
                </div>
                <div className="buttons">
                    {activeStep === 0 ? (
                        <div></div>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleBack} className="button-cart">
                            Voltar
                        </Button>
                    )}
                    <Button variant="contained" color="primary" onClick={handleNext} className="button-cart">
                        {activeStep === 1 ? 'Finalizar' : 'Próximo'}
                    </Button>

                </div>

            </div>
        </div>
    );
}