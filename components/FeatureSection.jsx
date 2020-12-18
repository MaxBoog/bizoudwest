import Container from 'components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMugHot, faStore, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Separator from 'components/Separator'

export default function FeatureSection() {
    return (
        <>
            <Container>
            <div className="pb-12">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                    <h2 className="text-base color-primary font-semibold tracking-wide uppercase">Bedrijfs en Investerings Zone OUD WEST</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Van horeca en pitoreske winkeltjes tot de basic-fit en de bever
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                    <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                            <FontAwesomeIcon icon={faUtensils}/>
                            </div>
                        </div>
                        <div className="ml-4 mt-4">
                            <dt className="text-2xl leading-6 font-medium text-gray-900">
                            Restaurantjes
                            </dt>
                            <dd className="mt-2 text-lg text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>
                        </div>

                        <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                <FontAwesomeIcon icon={faMugHot}/>
                            </div>
                        </div>
                        <div className="ml-4 mt-4">
                            <dt className="text-2xl leading-6 font-medium text-gray-900">
                            Cafetjes
                            </dt>
                            <dd className="mt-2 text-lg text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>
                        </div>

                        <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                <FontAwesomeIcon icon={faStore}/>
                            </div>
                        </div>
                        <div className="ml-4 mt-4">
                            <dt className="text-2xl leading-6 font-medium text-gray-900">
                            Boetiekjes
                            </dt>
                            <dd className="mt-2 text-lg text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>
                        </div>

                        <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                <FontAwesomeIcon icon={faDumbbell}/>
                            </div>
                        </div>
                        <div className="ml-4 mt-4">
                            <dt className=" text-2xl leading-6 font-medium text-gray-900">
                                Sport
                            </dt>
                            <dd className="mt-2 text-lg text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>
                        </div>
                    </dl>
                    </div>
                </div>
                <Separator/>
            </div>
            </Container>
        </>
    )
}