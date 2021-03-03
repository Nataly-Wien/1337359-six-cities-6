import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {SORTS} from '../../const';

const SortList = ({activeSort, dispatch}) => {
  const [hovering, setHovering] = useState(false);

  const setActiveSort = (i) => {
    dispatch(ActionCreator.setSort(i));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" >Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onMouseEnter={(() => setHovering(true))} >Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${hovering ? ` places__options--opened` : ``}`} onMouseLeave={() => setHovering(false)} >
        {SORTS.map((item, i) => <li className={`places__option${i === activeSort ? ` places__option--active` : ``}`}
          key={`${item}-${i}`} tabIndex="0" onClick={() => setActiveSort(i)}>{item}</li>)}
      </ul>
    </form>
  );
};

SortList.propTypes = {
  activeSort: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.sort,
});

export default connect(mapStateToProps, null)(SortList);
