import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Group of Infinity car rental and wedding photography enquiries.',
  alternates: { canonical: '/privacy-policy' },
}

const sections = [
  { title: 'Information We Collect', items: ['Name, phone number, email address and enquiry details submitted through the website.', 'Event date, pickup location, destination, venue and service preferences.', 'Basic technical information such as browser, device and analytics data when analytics is enabled.'] },
  { title: 'How We Use Information', items: ['To respond to enquiries and prepare custom quotations.', 'To coordinate car rental, driver, photography and event requirements.', 'To improve website performance, service quality and customer support.', 'To meet legal, safety, fraud-prevention or accounting obligations.'] },
  { title: 'Sharing of Information', paragraphs: ['We do not sell personal information. Information may be shared only with assigned drivers, photographers, service providers or authorities when required to complete a booking or comply with law.'] },
  { title: 'Data Retention and Security', paragraphs: ['Enquiry and booking information is retained only as long as reasonably necessary for service, accounting, dispute resolution and legal requirements. Reasonable safeguards are used, but no online system can guarantee absolute security.'] },
  { title: 'Your Choices', paragraphs: ['You may request access, correction or deletion of your personal information, subject to applicable legal and business-record requirements. You may also ask us to stop non-essential marketing communication.'] },
  { title: 'Third-Party Services', paragraphs: ['The website may use WhatsApp, email, analytics, hosting or social platforms. Their own privacy policies apply when you use those services.'] },
  { title: 'Contact', paragraphs: ['For privacy questions or requests, use the official Contact page. Replace the placeholder email and phone details on the website before treating this policy as final.'] },
]

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" description="Aapki enquiry aur booking information ko hum kaise handle karte hain." sections={sections} />
}
