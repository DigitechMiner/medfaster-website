// Backend expects E.164 format (+917098765432)
export const formatToE164 = (phone: string, countryCode: string = '91'): string => {
  const clean = phone.replace(/\D/g, '');
  
  // Indian mobile: 10 digits starting 6-9
  if (/^[6789]\d{9}$/.test(clean)) {
    return `+${countryCode}${clean}`;
  }
  
  // Already E.164
  if (clean.startsWith(`${countryCode}`)) {
    return `+${clean}`;
  }
  
  return phone; // Fallback
};
