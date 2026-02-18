# EmailJS Setup Guide — Send Contact Form to Gmail

## Step 1 — Install EmailJS

```bash
npm install @emailjs/browser
```

---

## Step 2 — Create EmailJS Account

1. Go to https://www.emailjs.com/ and sign up (free)
2. Free tier: **200 emails/month** — enough for a guest house

---

## Step 3 — Connect Your Gmail

1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** → sign in with your Gmail
4. Give it a name e.g. `hikal_gmail`
5. Copy the **Service ID** → e.g. `service_abc123`

---

## Step 4 — Create Email Template

1. Dashboard → **Email Templates** → **Create New Template**
2. Set **To Email** → your Gmail address
3. Paste this template:

```
Subject: New Contact Form Message - {{subject}}

Name:    {{name}}
Email:   {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save and copy the **Template ID** → e.g. `template_xyz789`

> ⚠️ Variable names `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
> MUST match the input `name` attributes in ContactForm.jsx exactly.

---

## Step 5 — Get Your Public Key

1. Dashboard → **Account** → **General**
2. Copy your **Public Key** → e.g. `user_XXXXXXXXXXXXXXX`

---

## Step 6 — Add to .env File

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_XXXXXXXXXXXXXXX
```

> ✅ Vite automatically loads `VITE_` prefixed env vars
> ❌ Never commit `.env` to Git — add it to `.gitignore`

---

## Step 7 — Add .env to .gitignore

```
# .gitignore
.env
.env.local
```

---

## Step 8 — Test It

1. Run your dev server: `npm run dev`
2. Fill out the contact form and submit
3. Check your Gmail inbox — email should arrive within seconds

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Service not found" | Check `VITE_EMAILJS_SERVICE_ID` matches dashboard |
| "Template not found" | Check `VITE_EMAILJS_TEMPLATE_ID` matches dashboard |
| Variables show as `{{name}}` in email | Input `name` attrs must match template vars exactly |
| Emails go to spam | In Gmail, mark first email as "Not Spam" |
| 200/month limit hit | Upgrade EmailJS plan or use Resend API |

---

## File Summary

```
src/
  components/
    ContactInfoItem.jsx   ← single icon + text row
    ContactInfoPanel.jsx  ← left column with all contact info
    ContactForm.jsx       ← EmailJS form (main file)
    ContactPage.jsx       ← full page assembly
.env                      ← your EmailJS keys (never commit)
```
