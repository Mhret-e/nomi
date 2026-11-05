import { deleteEmailAccount } from './client.mjs';
const form = document.querySelector('#delete-form');
const status = document.querySelector('#status');
const fields = [...form.querySelectorAll('input')];
const submit = document.querySelector('#submit');
let busy = false;
if (window.top !== window.self) {
  status.textContent = 'Open this Nomi privacy page in its own browser window.';
} else {
  try {
    const response = await fetch('config.json', { cache: 'no-store' });
    if (!response.ok) throw new Error();
    const config = await response.json();
    if (!config.url?.startsWith('https://') || !config.publicKey) throw new Error();
    if (config.supportEmail) {
      const link = document.querySelector('#support');
      link.href = 'mailto:' + config.supportEmail + '?subject=Nomi%20account%20deletion'; link.hidden = false;
    } else document.querySelector('#support-missing').hidden = false;
    if (config.accountServiceReady !== true) {
      form.hidden = true;
      status.textContent = 'Automatic account deletion is not available yet. Email nomidigitalapp@gmail.com to request deletion. Do not send passwords or private keys. Ownership must be verified before an account can be removed.';
    } else {
    fields.forEach(field => field.disabled = false);
    status.textContent = 'Nothing is deleted until you confirm.';
    const update = () => { submit.disabled = busy || !form.checkValidity() || document.querySelector('#confirmation').value !== 'DELETE'; };
    form.addEventListener('input', update); update();
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || submit.disabled) return;
      busy = true; update(); fields.forEach(field => field.disabled = true);
      status.textContent = 'Confirming account deletion…';
      try {
        await deleteEmailAccount(config, document.querySelector('#email').value, document.querySelector('#password').value, document.querySelector('#confirmation').value);
        form.reset(); status.textContent = 'Your Nomi account and its online records were deleted. Clear Nomi history on any other devices you use.';
      } catch (error) {
        status.textContent = error.message;
      } finally {
        document.querySelector('#password').value = ''; busy = false;
        fields.forEach(field => field.disabled = false); update();
      }
    });
    }
  } catch { status.textContent = 'This account-deletion page is not connected yet. Use Nomi’s in-app Privacy controls or contact the publisher.'; }
}
