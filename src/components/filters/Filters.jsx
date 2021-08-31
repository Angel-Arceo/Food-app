import React, { useState, Fragment } from 'react';
import './Filters.css';
import Icon from "../iconComponent/Icon";
import Modal from '../modal/Modal';

const Filters = () => {
    const [ active, setActive ] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    return (
        <Fragment>
            <button className="filters" onClick={toggle}>
                <Icon name="filter" width="25" height="25" fill="transparent" stroke="#fff"></Icon>
            </button>

            <Modal active={active} toggle={toggle}>
                <h1>Hello World</h1>
            </Modal>
        </Fragment>
    )
}

export default Filters;