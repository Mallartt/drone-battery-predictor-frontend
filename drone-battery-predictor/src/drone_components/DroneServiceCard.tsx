/* drone_components/DroneServiceCard.tsx */

import { Link } from "react-router-dom";
import type { DroneService } from "../DroneServiceTypes";
import "./DroneServiceCard.css";

export default function DroneServiceCard({ service }: { service: DroneService }) {
  const imageUrl = service.image || "http://localhost:9000/images/img.jpg";

  return (
    <div className="service-card">
      <div className="card-image-wrap">
        <img src={imageUrl} alt={service.name} />
      </div>
      <div className="card-content">
        <div className="service-title">{service.name}</div>
        <div className="category">Множитель мощности: {service.power_multiplier}</div>
        <div className="card-buttons">
          <Link to={`/services/${service.id}`} className="details-btn">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}
