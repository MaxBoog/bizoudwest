import Link from 'next/link'


export default function CategoryCard({slug, key, winkelnaam, winkel_categorie, winkel_beschrijving, color}){
    return(
        <Link href={`/boutiques/${slug}`}>
            <div key={key} className={`${color} card my-2 mx-5 cursor-pointer border border-l-8 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200`}>

                    <div className="my-3 mx-5">
                        <h2 className="boutique-name text-lg">{winkelnaam}
                        </h2>
                        <p className="text-sm bg-gray-700 text-white rounded-lg inline p-2 -ml-1">{winkel_categorie}</p>
                        <p className="boutique-description font-mono text-lg text-gray-800">{winkel_beschrijving}</p>
                    </div>
            </div>
        </Link>
    )
}