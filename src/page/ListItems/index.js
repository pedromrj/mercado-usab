import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { TextField, Menu, MenuItem, Grid, Paper, makeStyles, Typography, ButtonBase } from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import add from "../../assets/add.svg";
import less from "../../assets/less.svg";
import tileData from './tileData';
import ArrowBack from "../../assets/arrow_back.svg";
import CartData from "../../server/cart.json";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    marginRight: "10px",
    marginBottom: "10px",
    maxWidth: 300,
    maxHeight: 100
  },
  image: {
    width: 100,
    height: 128,
  },
  img: {
    paddingBottom: "20px",
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ListItems() {



  const initValue = []

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [cart, setCart] = useState(initValue)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  


  function addToCart(title) {
    setCart([...cart, title])
    window.localStorage.setItem("cart", JSON.stringify(cart))
    
  }


  const handleClose = () => {
    setAnchorEl(null);
  };

  // TODO criar filtro reativo com a mesma ideia da Home

  return (
    <div className="container-home">
      <div className="header">
        <img height="100px" src={logo} />
        <div className="icons">
          <div className="carrinho">
            <Link to="/carrinho"><img src={shopcart} /></Link>
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
      <div className="title">
        <img src={ArrowBack} />
        <label>Nome do Mercado</label>
        <TextField id="standard-basic" label="Search" />
      </div>
      <div className="body">
        {tileData.map((title) => (
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" height="90" src={title.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {title.name}
                      </Typography>
                    </Grid>
                    <div className="qtditems">
                      <img src={add} />
                      <label>1</label>
                      <img src={less} />
                    </div>

                  </Grid>
                  <div className="valor">
                    <label>R$: {title.valor}</label>
                  </div>
                </Grid>
                <button id="button-add-cart" className="button-add-cart" type="submit" onClick={() => { addToCart(title) }}>Adicionar ao carrinho</button>
              </Grid>
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
}