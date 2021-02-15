import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function ArrowDown() {
    return (
        <div className="animate-bounce pt-10">
            <AnchorLink href="#down" offset="50">
                <FontAwesomeIcon icon={faArrowDown} color="#e7335d" size="2x"/>
            </AnchorLink>
        </div>
    )
}