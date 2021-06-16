import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import {Menu, Button,MenuItem,TextField, GridList,GridListTile,GridListTileBar,IconButton,StarBorderIcon, makeStyles} from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import shopcart from "../../assets/shopcart.svg";
import person from "../../assets/person.svg";
import data from './tileData';
import image1 from "../../assets/image/super3.jpeg";

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
        } else {
            setData(temp)
        }
        console.log(tileData);
    }

    const classes = useStyles();
    return (
        <div className="container-home">
            <div className="header">
                <img height="100px" src={logo} />    
                <TextField onChange={handlerChange} id="standard-basic" label="Search"/>
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
            <div className="body">
                <div className="grade">
                    <h2>Supermercados.</h2>
                    <GridList cellHeight={200} spacing={10} className={classes.gridList}>
                        {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <Link to="/supermercado/nome" >
                                <img src={image1} alt={tile.title} />
                                <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                            </Link>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>        
    );
}

export default Home;