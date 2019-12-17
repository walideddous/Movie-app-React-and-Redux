import React from 'react';
import './MovieCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StarRatingComponent from 'react-star-rating-component';


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

export default function MovieCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newMovie,setNewMovie]=React.useState({})
  
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

  return (
  <div className="listcontent">
    <div className="filmlist">
    {props.films.map((el, i) => (
      <div className="filmcarte" key={i}>
        <div className="imageetetoile">
          <img
            src={el.imagesource}
            style={{ width: "100%" }}
          />
          <StarRatingComponent
            className="etoile"
            name="rate1"
            starCount={5}
            value={el.rating}
          />
        </div>
        <p className="movietitle"><strong>{el.filmtitle}</strong></p>
      </div>
    ))}
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
              style={{ width: "15%" }}
              placeholder="Rating..."
              type="number"
              min="0"
              max="5"
              name="rating"
              onChange={handleChange}
            />
            <button className="btn btn-primary btn-sm m-2" onClick={onAddfilm}>
              Add
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={handleClose}>
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


