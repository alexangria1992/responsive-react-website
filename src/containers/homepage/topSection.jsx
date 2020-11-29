import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Logo } from "../../components/logo/";
import {Marginer} from "../../components/marginer";

const TopContainer = styled.div`
width: 100%;
height: 100vh;
padding: 0;
background-image: url(${BackgroundImg});

`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MotivationalText = styled.h1`
    margin: 0;
    font-size: 34px;
    line-height: 1.4;
    font-weight: 500;
    color:#fff;
`;

export function TopSection(props)
{
    return <TopContainer>
            <BackgroundFilter>
              <Marginer direction="vertical" margin="7em"/>
              <Logo />
              <Marginer direction="vertical" margin="2em"/>
              <MotivationalText>Software Development</MotivationalText>
              <MotivationalText>From the best in the industry</MotivationalText>

           </BackgroundFilter>   
        </TopContainer>
}