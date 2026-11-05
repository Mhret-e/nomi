/** Email sign-in is performed immediately before deleting the same authenticated account. */
export async function deleteEmailAccount(config, email, password, confirmation, fetcher = fetch) {
  if (confirmation !== 'DELETE') throw new Error('Type DELETE to confirm.');
  if (!email.trim() || !password) throw new Error('Enter your account email and password.');
  const base = new URL(config.url);
  if (base.protocol !== 'https:' || base.username || base.password || base.pathname !== '/' || !config.publicKey || config.publicKey.startsWith('sb_secret_')) throw new Error('This deletion page is not configured.');
  let login;
  try {
    login = await fetcher(`${base.origin}/auth/v1/token?grant_type=password`, {
      method: 'POST', headers: { apikey: config.publicKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), password }), signal: AbortSignal.timeout(30000),
    });
  } catch { throw new Error('Sign-in could not be confirmed. Please try again when connected.'); }
  if (!login.ok) throw new Error('Sign-in failed. Check your email and password.');
  const session = await login.json();
  if (typeof session.access_token !== 'string' || !session.access_token) throw new Error('Sign-in did not return a session. No deletion was requested.');
  let response;
  try {
    response = await fetcher(`${base.origin}/functions/v1/delete-account`, {
      method: 'POST', headers: { apikey: config.publicKey, Authorization: `Bearer ${session.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirmation: 'DELETE' }), signal: AbortSignal.timeout(30000),
    });
  } catch { throw new Error('Deletion could not be confirmed. Check your account before retrying.'); }
  if (!response.ok) throw new Error('Deletion could not be confirmed. Please contact Nomi support if this continues.');
  const result = await response.json();
  if (result.deleted !== true) throw new Error('Deletion was not confirmed.');
  return true;
}
