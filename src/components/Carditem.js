import React from 'react'
import Category from './Category'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

function Carditem(props) {
  const history = useHistory();

  const handleClick = (cat) => {

    const sess = window.sessionStorage.getItem("patID");

    if (!sess) {
      history.push('/login')
    } else {
      window.sessionStorage.setItem("category", cat)


    }
  }


  return (
    <div onClick={() => handleClick(props.label)}>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='category image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Carditem
