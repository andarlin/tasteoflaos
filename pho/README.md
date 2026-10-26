# Pho storefront

This folder contains the current pho storefront deployed to the separate Vercel project `tasteoflaos-pho` (tasteoflaos.vercel.app). The repository root remains the original family food website.

EmailJS uses service_1nen55o and template_3h3c89a with user_name, user_email, reply_to, message, contact_number. The SDK public key is intentionally public. No private API key is needed.

The existing production image files are preserved in Vercel. To populate this folder's assets for local development, run `python3 restore-assets.py`. Serve this folder with any static HTTP server.

Order flow: prepare/review, confirm/send via EmailJS, success only after the promise resolves. Errors preserve the request, permit retry, and log the provider response. Duplicate sends are disabled while sending and after success.

Live test on October 25, 2026 reached EmailJS but returned 412: Gmail_API: Invalid grant. Please reconnect your Gmail account. Reconnect the Gmail account in EmailJS before repeating the test. No order was sent by that failed test.
