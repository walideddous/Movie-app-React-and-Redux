import React from 'react';
import './MovieCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StarRatingComponent from 'react-star-rating-component';
import { addnewmovie } from '../actions';
import { removeMovie } from '../actions';
import { editMovie } from '../actions';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const mapStateToProps = (state) =>{
  return {
    films: state.films,
    recherche : state.recherche,
    rating: state.rating
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addnewmovie : newMovie =>dispatch(addnewmovie(newMovie)),
    removeMovie : payload => dispatch(removeMovie(payload)),
    editMovie : payload=>dispatch(editMovie(payload))
  }
}

const ConnectedMovieCard =(props)=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newMovie,setNewMovie]=React.useState({})
  const [openEdit,setOpenEdit]=React.useState(false);
  const [editMovie,setEditMovie]=React.useState({});

  const handleOpenEdit = (i)=>{
    setOpenEdit(true)
    setEditMovie({...editMovie, i:i})
  }

  const handleCloseEdit = ()=>{
    setOpenEdit(false)
  }
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddfilm =()=>{
  props.addnewmovie(newMovie)
   setOpen (false);
  };

  const handleChange=(e)=>{
    const {name , value} = e.target;
    setNewMovie({...newMovie,[name]:value})
  };

  const handleChangeEdit =(e)=>{
    const { name , value} = e.target;
    setEditMovie({...editMovie,[name]:value})
    
  }

  const onEdit =()=>{
    props.editMovie(editMovie)
    setOpenEdit(false);
  }

const DescJocker =()=>(
  <div>
  <h3>SYNOPSIS ET DÉTAILS</h3>
  <h6>Interdit aux moins de 12 ans avec avertissement</h6>
  <p>Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. </p>
  <div style={{display:"flex",justifyContent:"center"}}><Link to="/"><button className="btn btn-danger">Home page</button></Link></div>
  </div>
)

const DescBreakingBad =()=>(
  <div>
  <h3>SYNOPSIS ET DÉTAILS</h3>
  <h6>Interdit aux moins de 12 ans avec avertissement</h6>
  <p>Après avoir été libéré par Walter White du repaire du gang de Jack où il était séquestré dans l'épisode concluant la série Breaking Bad, Jesse Pinkman doit se réconcilier avec son passé pour pouvoir prétendre à un avenir plus radieux, alors qu'il se trouve traqué par les forces de l'ordre2.</p>
  <div style={{display:"flex",justifyContent:"center"}}><Link to="/"><button className="btn btn-danger">Home page</button></Link></div>
  </div>
 )

 const DescDragon = ()=>(
  <div>
  <h3>SYNOPSIS ET DÉTAILS</h3>
  <p>Dragons 2 (How to Train Your Dragon 2) est un film d'animation américain réalisé par Dean DeBlois sorti en 2014. Ce film est la suite de Dragons, sorti en 2010 et est suivi par Dragons 3 en 2019.</p>
  <div style={{display:"flex",justifyContent:"center"}}><Link to="/"><button className="btn btn-danger">Home page</button></Link></div>
  </div> 
 )
 
 const DescFast =()=>(
  <div>
  <h3>SYNOPSIS ET DÉTAILS</h3>
  <h6>Interdit aux moins de 12 ans avec avertissement</h6>
  <p>Dom et Letty sont maintenant en lune de miel à Cuba, Brian et Mia se sont rangés et ont accueilli une petite fille, et le reste de l'équipe est disculpé. Cependant, une nouvelle menace pèse à présent sur le groupe : une femme, une mystérieuse et redoutable cyberterroriste, force Dom à la rejoindre sur le chemin de la criminalité. Pour mettre fin aux agissements de Cipher et de Dom, l'équipe est obligée de collaborer avec un ancien ennemi qu'ils ne voulaient plus croiser : Deckard Shaw.</p>
  <div style={{display:"flex",justifyContent:"center"}}><Link to="/"><button className="btn btn-danger">Home page</button></Link></div>
  </div> 
 )

 const DescIron =()=>(
  <div>
  <h3>SYNOPSIS ET DÉTAILS</h3>
  <h6>A partir de 10 ans</h6>
  <p>Tony Stark, inventeur de génie, vendeur d'armes et playboy milliardaire, est kidnappé en Aghanistan. Forcé par ses ravisseurs de fabriquer une arme redoutable, il construit en secret une armure high-tech révolutionnaire qu'il utilise pour s'échapper. Comprenant la puissance de cette armure, il décide de l'améliorer et de l'utiliser pour faire régner la justice et protéger les innocents.</p>
  <div style={{display:"flex",justifyContent:"center"}}><Link to="/"><button className="btn btn-danger">Home page</button></Link></div>
  </div> 
 )

  return (
    <div className="listcontent">
      <div className="filmlist">
        {props.films
          .filter(
            m =>
              m.rating >= props.rating &&
              m.filmtitle.toLowerCase().includes(props.recherche.toLowerCase())
          )
          .map((el, i) => (
            <div className="filmcarte" key={i}>
              <div className="imageetetoile">
                <img src={el.imagesource} style={{ width: "100%" }} />
                <StarRatingComponent
                  className="etoile"
                  name="rate1"
                  starCount={5}
                  value={el.rating}
                />
              </div>
              <p className="movietitle" style={{marginBottom:"0px"}}>
                <strong>{el.filmtitle}</strong>
              </p>
              <p className="year" style={{marginBottom:"0px"}}>
                <strong>{el.year}</strong>
              </p>
              <div className="description">           
              <button  className="btn btn-primary" style={{fontSize : "15px"}} >
              <Link to={el.filmtitle} style={{color:"white"}}>Movie description</Link>
              </button>
              </div>
              <div className="editedelete">
              <input type='button' value="Edit" className="btn btn-secondary" onClick={()=>handleOpenEdit(i)}/>
              <input type='button' value="delete" className="btn btn-danger" onClick={()=>props.removeMovie(i)}/>
              </div>
            </div>
          ))}
          <Switch>
          <Route exact path='Jocker' component={DescJocker}/>
          <Route exact path='Breaking bad' component={DescBreakingBad}/>
          <Route exact path='Dragon' component={DescDragon}/>
          <Route exact path='Fast and furious 8' component={DescFast}/>
          <Route exact path='Iron man' component={DescIron}/>
          </Switch>
        <div className="buttonadd">
          <button type="button" onClick={handleOpen} className="plus">
            +
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper} style={{ width: "51%" }}>
                <h4 id="transition-modal-title">Add a new Film</h4>
                <input
                  id="transition-modal-description"
                  placeholder="Add a new film title..."
                  name="filmtitle"
                  onChange={handleChange}
                />
                <input
                  id="transition-modal-description"
                  style={{ width: "35%" }}
                  placeholder="Add a new image source..."
                  name="imagesource"
                  onChange={handleChange}
                />
                <input
                  id="transition-modal-description"
                  style={{ width: "35%" }}
                  placeholder="Add the year..."
                  name="year"
                  onChange={handleChange}
                />
                <input
                  id="transition-modal-description"
                  style={{ width: "15%" }}
                  placeholder="Rating..."
                  type="number"
                  min="0"
                  max="5"
                  name="rating"
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary btn-sm m-2"
                  onClick={onAddfilm}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </Fade>
          </Modal>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openEdit}
            onClose={handleCloseEdit}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={openEdit}>
            <div className={classes.paper} style={{ width: "51%" }}>
              <h4 id="transition-modal-title">Add a new Film</h4>
              <input
                id="transition-modal-description"
                placeholder="Edit film title..."
                name="filmtitle"
                onChange={handleChangeEdit}
              />
              <input
                id="transition-modal-description"
                style={{ width: "35%" }}
                placeholder="Edit image source..."
                name="imagesource"
                onChange={handleChangeEdit}
              />
              <input
                id="transition-modal-description"
                style={{ width: "35%" }}
                placeholder="Edit the year..."
                name="year"
                onChange={handleChangeEdit}
              />
              <input
                id="transition-modal-description"
                style={{ width: "15%" }}
                placeholder="Rating..."
                type="number"
                min="0"
                max="5"
                name="rating"
                onChange={handleChangeEdit}
              />
              <button
                className="btn btn-primary btn-sm m-2" onClick={onEdit}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={handleCloseEdit}
              >
                Cancel
              </button>
            </div>
          </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
}

const MovieCard = connect(mapStateToProps,mapDispatchToProps)(ConnectedMovieCard)

export default MovieCard
