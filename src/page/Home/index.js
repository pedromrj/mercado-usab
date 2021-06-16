import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import {Menu, Button,MenuItem,TextField, GridList,GridListTile,GridListTileBar,IconButton,StarBorderIcon, makeStyles} from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import data from './tileData';
import image1 from "../../assets/image/super3.jpeg";
import arrowDown from "../../assets/arrowup.svg";

const useStyles = makeStyles((theme) => ({
    gridList: {
      transform: 'translateZ(0)',
      width: "97%"
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(255,153,0,0.7) 0%, ' +
        'rgba(255,153,0,0.3) 70%, rgba(255,153,0,0) 100%)',
    }
  }));

function Home() {
    const [tileData, setData] = useState(data);
    const [find, setFind] = useState(true);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    //TODO Ajustar filtro pois tornalo reativo para deixar só o que está na lista do filtro.
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
                    
                    <Link to="/supermercado/items" >Selecionar</Link>
                </li>
                ))}
            </ul>
        );  
    }

    function getDivVazia() {
        return <ul><li>Não Encontrado</li></ul>;
    }

    const classes = useStyles();
    return (
        <div className="container-home">
            <div className="header">
                <img height="100px" src={logo} />    
                <TextField onChange={handlerChange} id="standard-basic" label="Search"/>
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
                        <h2>Supermercados.</h2>
                        {!find ? getDivVazia():getListaPopulada()}    
                    </div>
                
            </div>
        </div>        
    );
}

export default Home;