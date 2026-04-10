# EmailJS Booking Template

Use this template in your EmailJS dashboard for the **Booking Form**.

## Template Content

```
Subject: New Booking Request — {{roomTypeId}}

Hi,

You have a new booking request:

─────────────────────────────
  GUEST DETAILS
─────────────────────────────
Name:     {{name}}
Email:    {{email}}
Phone:    {{phone}}

─────────────────────────────
  BOOKING DETAILS
─────────────────────────────
Room:     {{roomTypeId}}
Check-in: {{checkIn}}
Check-out:{{checkOut}}
Adults:   {{adults}}
Children: {{children}}

─────────────────────────────
  SPECIAL REQUESTS
─────────────────────────────
{{message}}

─────────────────────────────
Reply to this guest at: {{email}}
```

## .env Variables (same as ContactForm)

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_booking_xxx   ← create a SEPARATE template for bookings
VITE_EMAILJS_PUBLIC_KEY=user_xxx
```

> Tip: Create two separate EmailJS templates —
> one for contact messages, one for booking requests.
> Use different TEMPLATE_IDs for each in your .env.