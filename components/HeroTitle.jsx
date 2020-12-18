import styled from '@emotion/styled'

export default function HeroTitle({ children }) {
    return (
        <HeroTitleStyled>
            <div className="hero-title py-6">{children}</div>
        </HeroTitleStyled>
    )
}

const HeroTitleStyled = styled.h1`
    .hero-title {
            color: ${props => props.theme.colors.white};
            font-weight: bold;
            margin-top: 10rem;
            font-size: 40px;
        }

    @media (min-width: 1024px) {
        .hero-title {
            font-size: 72px;
            margin-top: 20rem;
        }
    }

`