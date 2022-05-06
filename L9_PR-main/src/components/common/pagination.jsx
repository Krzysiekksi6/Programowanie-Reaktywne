import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ( props ) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props; // pobranie props

    const pagesCount = Math.ceil(itemsCount / pageSize); //obliczenie ilości

    if (pagesCount === 1) {
        return null;
    }
    const pages =_.range(1, pagesCount + 1);




    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                {pages.map((item, key) => (
                        <li key={key} className={ item === currentPage ? 'page-item active' : 'page-item' }>
                            <a style={{cursor: 'pointer'}} className="page-link" onClick={() => onPageChange(item)}>{item}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};


export default Pagination;