import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {SORTS} from '../../const';

const SortList = ({activeSort, setActiveSort}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" >Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onMouseEnter={() => setHovering(true)}
        onFocus={() => setHovering(true)}>{SORTS[activeSort].type}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${hovering ? ` places__options--opened` : ``}`} onMouseLeave={() => setHovering(false)} >
        {SORTS.map((item, i) => <li className={`places__option${i === activeSort ? ` places__option--active` : ``}`}
          key={`${item.type}-${i}`} tabIndex="0" onClick={() => setActiveSort(i)}>{item.type}</li>)}
      </ul>
    </form>
  );
};

SortList.propTypes = {
  activeSort: PropTypes.number.isRequired,
  setActiveSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveSort: (sort) => dispatch(ActionCreator.setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
