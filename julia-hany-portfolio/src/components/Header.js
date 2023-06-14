// Referring to Activity 22 -> src -> components -> Header.js
import React from 'react';
import NavTabs from './NavTabs'

const styles = {
    headerStyle: {
        backgroundColor: 'black',
        padding: '30px'
    },
    headingStyle: {
        fontSize: '50px',
        color: 'white'
    },
}

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header style={styles.headerStyle}>
            <h1 style={styles.headingStyle} >Julia Hany's Portfolio</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}