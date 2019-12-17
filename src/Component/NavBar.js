import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './NavBar.css';

export default function NavBar (props) {
 
  const [search,setSearch]=React.useState({})

  const handlesearch =(e)=>{
    const {name,value} = e.target;
    setSearch({...search,[name]:value});
    props.onSearch(value);
  }
  const onSearch =(e) => {
    props.onSearch(search);
    e.preventDefault()
  };

        return (
          <div>
            <form className="form-inline">
              <input
                className="form-control w-50"
                type="search"
                placeholder="Type movie name to search"
                aria-label="Search"
                name="filmtitle"
                onChange={handlesearch}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 m-1"
                onClick={onSearch}
              >
                Search
              </button>
              <div>
              <p className="para">Minimum rating {props.rating}</p>
              <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.rating}
                onStarClick={props.onStarClick}
              />
            </div>
            </form>
          </div>
        );
}