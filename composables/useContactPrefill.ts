export type ContactPrefill = {
  subject: string
  message: string
}

export const useContactPrefill = () =>
  useState<ContactPrefill>('contactPrefill', () => ({ subject: '', message: '' }))
