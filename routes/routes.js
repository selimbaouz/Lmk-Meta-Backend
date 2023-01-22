import express from 'express';

import { createContact, getContact } from '../controllers/contactController.js';

const router = express.Router();

router.post("/api/contact", createContact);
router.get("/api/contact", getContact);

export default router;