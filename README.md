# Local Setup Instructions

## Purpose
This document explains how to set up optional environment variables for local development after cloning from GitHub.

## Steps

### 1. Create the `.env.local` file
Create a file named `.env.local` in the **root** of your project (same level as `package.json`).

### 2. Add keys for the integrations you use
Firebase and the Instagram API are not used by the website. Add only the credentials for the optional email or reCAPTCHA integrations you plan to use:

```dotenv
REACT_APP_DRE_MAIL_PUBLIC_KEY=
REACT_APP_DRE_MAIL_SERVICE_ID=
REACT_APP_DRE_MAIL_TEMPLATE_ID=
REACT_APP_DRE_RECAPTCHA_SITEKEY=
```

Leave out keys for integrations you do not use. Do not put secret credentials in source control.
