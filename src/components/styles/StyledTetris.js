import styled from "styled-components";

import bgImage from "../../img/space-03.jpg"

export const StyledTetrisWrapper = styled.div`
    width: 6s0vw;
    height 83vh;
    background: url(${bgImage}) ;
    background-size:cover;
    overflow:hidden;
`

export const StyledTetris = styled.div`
    display:flex;
    align-items: flex-start;
    padding: 30px;
    margin 0 auto;
    max-width 900px;

    aside{
        width:100%;
        max-width:200px;
        display: block;
        padding: 0 20px
    }
`