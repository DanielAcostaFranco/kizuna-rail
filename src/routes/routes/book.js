import { createConfirmation, getScheduleById, getTicketOptionsForRoute } from '../../models/model.js';
import { yenToUsd } from '../../includes/helpers.js';

const bookingPage = async (req, res) => {
  const { scheduleId } = req.params;

  const schedule = await getScheduleById(scheduleId);
  const ticketOptions = await getTicketOptionsForRoute(schedule.routeId, scheduleId);

  res.render('routes/book', {
    title: 'Book Trip',
    schedule,
    ticketOptions,
    yenToUsd
  });
};

// ✅ ESTA FUNCIÓN FALTABA
const processBookingRequest = async (req, res) => {
  const data = req.body;

  const confirmationNum = await createConfirmation(data);

  res.redirect(`/routes/confirmation/${confirmationNum}`);
};

// ✅ AHORA SÍ existe lo que exportas
export { bookingPage, processBookingRequest };
