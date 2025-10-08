/* drone_pages/DroneHome.tsx */
/*import DroneBreadcrumbs from "../drone_components/DroneBreadcrumbs"; */
import "./DroneHome.css";

export default function DroneHome() {
  return (
    <div className="home-page">
      {/* # <DroneBreadcrumbs items={[{ label: "Главная" }]} /> */}
      <h1>Прогноз скорости разряда аккумулятора дрона</h1>
      <p>Цель проекта - сделать возможность прогнозирования скорости разряда аккумулятора дрона от разных услуг и параметров</p>
    </div>
  );
}

