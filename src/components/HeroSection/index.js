import React from 'react'; //, {useState} 
// import {Button} from "../Buttons/ButtonElements";
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroBg,
    VideoBg
    // HeroBtnWrapper,
    // ArrowForward,
    // ArrowRight
} from "./HeroSectionElements";


const HeroSection = () => {
    // const [hover, setHover] = useState (false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Website...</HeroH1>
                {/* <HeroBtnWrapper>
                    <Button to="/page1"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            //smooth={true}
                            duration={500}
                            // spy={true}
                            exact='true'
                            offset={-80}
                    >
                        Page 1 {hover?<ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to="/page2"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            //smooth={true}
                            duration={500}
                            // spy={true}
                            exact='true'
                            offset={-80}
                    >
                        Page2 {hover?<ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to="/page3"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            //smooth={true}
                            duration={500}
                            // spy={true}
                            exact='true'
                            offset={-80}
                    >
                        Page3 {hover?<ArrowForward/>: <ArrowRight/>}
                    </Button>   
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
};


export default HeroSection

