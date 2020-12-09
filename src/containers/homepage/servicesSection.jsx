import React from 'react'
import styled from 'styled-components'
import {Element} from "react-scroll"
import {SectionTitle} from  "../../components/sectionTitle";
import {Marginer} from "../../components/marginer";
import {OurService} from "../../components/ourService";
import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

export function ServicesSection(props)
{
   return( <ServicesContainer name="servicesSection">
       <SectionTitle>Best Quality Software</SectionTitle> 
       <Marginer direction="vertical" margin="3em"/>
       <OurService title="Fully integrated services" description="We build and deliver 
       fully integrated web apps with customized control panels that fit your company needs"
       imgUrl={Service1Img}/>
        <OurService title="Mobile Optimized" description="We build and deliver 
       fully integrated web apps with customized control panels that fit your company needs"
       imgUrl={Service2Img}
       isReversed/>
          <OurService title="Quality is our priority" description="We have teams of professional developers, designers and managers that ensures 
          delivering the best software for your company."
       imgUrl={Service3Img}/>
    </ServicesContainer>
   )
}
