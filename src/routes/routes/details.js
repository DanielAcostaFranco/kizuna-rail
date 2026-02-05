import { getRouteById, getSchedulesByRoute } from '../../models/model.js';
import { monthNumberToText } from '../../includes/months.js';

export default async (req, res) => {
  const { routeId } = req.params;

  const details = await getRouteById(routeId);
  details.schedules = await getSchedulesByRoute(routeId);

  res.render('routes/details', { 
    title: 'Route Details',
    details,
    monthNumberToText
  });
};
