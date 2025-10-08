/* Droneapi.ts */
import type { DroneService } from "./DroneServiceTypes";

export async function listServices(params?: { name?: string; date_from?: string; date_to?: string }): Promise<DroneService[]> {
  try {
    let path = "/api/drone_services/";
    if (params) {
      const query = new URLSearchParams();
      if (params.name) query.append("drone_services_search", params.name);
      if (params.date_from) query.append("date_from", params.date_from);
      if (params.date_to) query.append("date_to", params.date_to);
      const queryString = query.toString();
      if (queryString) path += `?${queryString}`;
    }

    const res = await fetch(path, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("[API] error fetching services", err);
    return [];
  }
}

export async function getService(id: number): Promise<DroneService | null> {
  try {
    const res = await fetch(`/api/drone_services/${id}/`, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("[API] error fetching service", err);
    return null;
  }
}
