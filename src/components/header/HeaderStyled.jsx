import React from 'react';
import styled from "styled-components";
import { device } from '../../general/device';
// import styles from './Header.module.css';
import NavMenu from "./NavMenu";

const Head = styled.div`
    height: 60px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media ${device.laptop}{
        max-width: 960px;
    }
    
    @media ${device.laptopL}{
        max-width: 1100px;
    }
`;

function Header() {
    return (
        <Head>
            <Container>
                <NavMenu/>
            </Container>
        </Head>
    );
}


// function Header() {
//     return (
//         <div className={styles.header}>
//             <div className={styles.container}>
//                 <NavMenu/>
//             </div>
//         </div>
//     );
// }

export default Header;
