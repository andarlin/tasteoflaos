'use strict';
const form = document.getElementById('order-form');
const q = document.getElementById('quantity');
const review = document.getElementById('review');
const send = document.getElementById('send-order');
const status = document.getElementById('send-status');
const submit = form.querySelector('[type="submit"]');
const money = n => `$${n} CAD`;
let sending = false, sent = false;
function update() {
  const n = Number(q.value), valid = Number.isInteger(n) && n >= 1 && n <= 20;
  document.getElementById('subtotal').textContent = valid ? money(n * 12) : '—';
  document.getElementById('minus').disabled = valid && n <= 1;
  document.getElementById('plus').disabled = valid && n >= 20;
  review.hidden = true;
}
for (const [id, delta] of [['minus', -1], ['plus', 1]]) {
  document.getElementById(id).addEventListener('click', () => {
    q.value = Math.min(20, Math.max(1, (Number(q.value) || 1) + delta)); update();
  });
}
q.addEventListener('input', update);
const today = new Date();
document.getElementById('pickup').min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
form.addEventListener('input', () => { if (!sending && !sent) review.hidden = true; });
form.addEventListener('submit', event => {
  event.preventDefault();
  if (sending || sent || !form.reportValidity()) return;
  const f = new FormData(form), count = Number(f.get('quantity'));
  if (!Number.isInteger(count) || count < 1 || count > 20) return;
  if (!String(f.get('user_name')).trim()) { document.getElementById('name').focus(); return; }
  const summary = `TASTES OF LAOS — ORDER REQUEST\n\nLao Beef Bone Broth: ${count} × 1 L\nUnit price: $12 CAD\nProduct subtotal: ${money(count*12)}\n\nName: ${f.get('user_name').trim()}\nEmail: ${f.get('user_email').trim()}\nPhone: ${f.get('phone').trim() || 'Not provided'}\nPreferred pickup: ${f.get('pickup') || 'Please advise available dates'}\nNotes: ${f.get('notes').trim() || 'None'}\n\nBroth only. Noodles, beef and garnishes not included.\nAvailability, pickup and final payment details require confirmation.`;
  form.elements.message.value = summary;
  form.elements.reply_to.value = f.get('user_email').trim();
  form.elements.contact_number.value = String(Math.floor(Math.random() * 100000));
  document.getElementById('summary').textContent = summary;
  status.textContent = '';
  review.hidden = false; review.focus();
  review.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'nearest'});
});
document.getElementById('edit-order').addEventListener('click', () => { review.hidden = true; document.getElementById('name').focus(); });
send.addEventListener('click', async () => {
  if (sending || sent || review.hidden || !form.reportValidity()) return;
  sending = true; send.disabled = true; submit.disabled = true;
  const controls = [...form.querySelectorAll('input:not([type="hidden"]), textarea, #minus, #plus, #edit-order')];
  // Read-only fields remain serializable by sendForm; quantity buttons and edits are locked.
  for (const control of controls) { if (control.tagName === 'BUTTON' || control.type === 'checkbox') control.disabled = true; else control.readOnly = true; }
  status.textContent = 'Sending your order request…';
  send.textContent = 'Sending…';
  try {
    if (!window.emailjs) throw new Error('Email service unavailable');
    await emailjs.sendForm('service_1nen55o', 'template_3h3c89a', form, {publicKey:'u_fRsF1o-B0munqYb'});
    sent = true;
    document.getElementById('order-state').textContent = 'ORDER REQUEST SENT';
    document.getElementById('review-title').textContent = 'Thank you for your order request!';
    document.getElementById('review-description').textContent = 'Your request has been sent. We’ll reply to confirm availability, pickup and payment details.';
    status.textContent = 'Request sent successfully. Your order is confirmed only after we reply.';
    send.textContent = 'Request sent ✓';
    document.getElementById('edit-order').hidden = true;
    submit.hidden = true;
  } catch (error) {
    status.textContent = 'Your request could not be sent. Please try again, or contact tasteoflaosorderform@gmail.com. Your details are still here.';
    console.error('EmailJS order failed:', error.status || '', error.text || error.message);
    send.disabled = false; submit.disabled = false;
    send.textContent = 'Try sending again ↗';
    for (const control of controls) { control.disabled = false; control.readOnly = false; }
    update(); review.hidden = false;
  } finally { sending = false; }
});
update();
