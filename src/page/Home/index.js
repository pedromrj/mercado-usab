import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import {RadioGroup, StyledRadio,Grid,Paper,ButtonBase,Typography,FormControlLabel,Radio,Menu, Button,MenuItem,TextField, GridList,GridListTile,GridListTileBar,IconButton,StarBorderIcon, makeStyles} from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import data from './tileData';
import arrowDown from "../../assets/arrowup.svg";
import dataProduto from "./produtos";
import arrowUp from "../../assets/arrowdown.svg";

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

function Home() {
    const classes = useStyles();
    const [tileData, setData] = useState(data);
    const [find, setFind] = useState(true);
    const [findProduto, setFindProduto] = useState(true);
    const [filtro, setFiltro] = useState({ name: "Supermercado", status: true});
    const [produtos, setProdutos] = useState(dataProduto);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    function handlerFiltro(e) {
        setFiltro({ name: "true" === e.target.value ? "Supermercado" : "Produtos" , status : e.target.value === "true" });
    }

    function handlerChangeCategoria(e) {
        var temp2 = dataProduto.filter(x => {
            return x.name.includes(e.target.value);
        });

        if (e.target.value === "") {
            setProdutos(dataProduto);
            setFindProduto(false);
            setFindProduto(true);       
        } else {
            setProdutos(temp2);
            setFindProduto(false);
            setFindProduto(true);
        }
    }

    function handlerChange(e) {
        var temp = data.filter(x => {
            return x.title.includes(e.target.value)
        });

        if (e.target.value === "") {
            setData(data);
            setFind(false);
            setFind(true);       
        } else {
            setData(temp);
            setFind(false);
            setFind(true);
        }
    }

    function getListaPopulada() {
        return (
            <ul>
                {tileData.map(data => (
                <li key={data.key}>
                    <img src={logo} height="75" alt="nome do mercado"/>

                    <strong>Nome: </strong>
                    <p>{data.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{"Um local com preço ideal para você."}</p>
                    
                    <Link onClick={localStorage.setItem("nome-super", data.title)}to="/supermercado/items" >Selecionar</Link>
                </li>
                ))}
            </ul>
        );  
    }

    function getDivVazia() {
        return <ul><li>Não Encontrado</li></ul>;
    }

    function getProdutos() {
        return (<div>
        {produtos.map((title) => (
            <div key={title.key} className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={1}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" height="90" src={logo} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={1}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {title.name}
                        </Typography>
                      </Grid>
                      <div className="qtditems">
                        <img src={arrowUp}/>
                        <label>1</label>
                        <img src={arrowDown}/>
                      </div>
                      
                    </Grid>
                    <div className="valor">
                        <label>R$: {title.valor}</label>
                      </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
        ))}</div>);
    }

    function handler() {
        if (filtro.status) {
            setFind(true);
            return handlerChange;
        } else {
            setFindProduto(true);
            return handlerChangeCategoria;
        }        
    }

    return (
        <div className="container-home">
            <div className="header">
                <img height="100px" src={logo} />    
                <div className="search-header">
                    <div className="search-input">
                        <TextField onChange={filtro.status === true ? handlerChange : handlerChangeCategoria} id="standard-basic" label="Search"/>
                    </div>
                    <RadioGroup onChange={handlerFiltro} defaultValue="true" aria-label="gender" name="filtro">
                        <FormControlLabel value="true" control={<Radio />} label="Supermercado" />
                        <FormControlLabel value="false" control={<Radio />} label="Categoria" />
                    </RadioGroup>
                </div>
                <div className="icons">
                    <div className="carrinho">
                        <Link to="/carrinho"><img src={shopcart} /></Link>
                    </div>
                    <img id="person" src={person} />    
                    <img onClick={handleClick} src={arrowDown}/>
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
            <div className="body">
                    <div className="profile-container">
                        <h2>{filtro.name}</h2>
                        {console.log(filtro.status)}
                        { filtro.status === true ?
                            !find ? getDivVazia() : getListaPopulada() : 
                            !findProduto ? getDivVazia() : getProdutos() 
                        }     
                    </div>
                
            </div>
        </div>        
    );
}

export default Home;