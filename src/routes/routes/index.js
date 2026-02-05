import { Router } from 'express';
import { bookingPage, processBookingRequest } from './book.js';
import confirmationPage from './confirm.js';
import listRoutesPage from './list.js';
import routeDetailsPage from './details.js';

const router = Router();

// 1) List all routes
router.get('/', listRoutesPage);

// 2) Booking (más específico)
router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

// 3) Confirmation (más específico)
router.get('/confirmation/:confirmationId', confirmationPage);

// 4) Route details (genérico) → SIEMPRE al final
router.get('/:routeId', routeDetailsPage);

export default router;
