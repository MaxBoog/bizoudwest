import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from "react-scroll-up-button"
import styled from '@emotion/styled'



export default function ScrollToTopButton() {
    return (         
        <ScrollUpButtonStyled>
            <ScrollUpButton
                EasingType="easeInOutQuint"
                AnimationDuration={1500}
                ContainerClassName="AnyClassForContainer"
                TransitionClassName="AnyClassForTransition"
            >
                <FontAwesomeIcon icon={faChevronUp}/>
            </ScrollUpButton>
        </ScrollUpButtonStyled>
    )
}

const ScrollUpButtonStyled = styled.div`
    .AnyClassForContainer {
        position: fixed;
        right: -100px;
        bottom: 50px;
        transition: right 0.5s;
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        font-size: 30px;
        padding: 10px;
    }
    
    .AnyClassForTransition {
        right: 20px;
    }
`