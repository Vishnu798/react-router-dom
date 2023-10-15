import React from "react"
import { useParams, Link} from "react-router-dom"
import HostDetailsLayout from "../../../components/HostDetailsLayout"

export default function HostVansDetails() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

        
    return (
        <section>
            <Link
            relative="path"
                to=".."
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <HostDetailsLayout HostVanDetails={currentVan}/>
            </div>
         
        </section>
        
    )
}