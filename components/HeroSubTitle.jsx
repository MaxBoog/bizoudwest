import styled from '@emotion/styled'

export default function HeroSubTitle({ children }) {
    return (
        <HeroSubTitleStyled>
            <div className="hero-subtitle text-3xl lg:text-4xl pb-10 lg:pl-1">{children}</div>
        </HeroSubTitleStyled>
    )
}

const HeroSubTitleStyled = styled.h3`
    .hero-subtitle {
        color: ${props => props.theme.colors.grey};
    }

`