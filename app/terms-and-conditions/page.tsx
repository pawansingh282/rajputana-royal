import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Group of Infinity car rental and photography services.',
  alternates: { canonical: '/terms-and-conditions' },
}

const sections = [
  { title: 'Bookings and Quotations', items: ['Website content and sample pricing are informational; the written quotation shared for your date and requirements is final.', 'A booking is confirmed only after availability confirmation and receipt of the agreed advance.', 'The customer must provide accurate dates, locations, timings, routes and event requirements.'] },
  { title: 'Car Rental Service', items: ['Vehicle allocation is subject to availability, maintenance and operational conditions.', 'Pickup time, included kilometres, waiting time, tolls, parking, driver allowance and decoration must be confirmed in writing.', 'Illegal activity, unsafe behaviour, overloading or damage to the vehicle may result in service termination and additional charges.'] },
  { title: 'Photography Service', items: ['Coverage hours, team size, deliverables, editing style and delivery timeline are determined by the selected quotation or package.', 'Customers are responsible for venue permissions and for informing the team about restricted rituals, locations or persons.', 'Raw files are not included unless specifically mentioned in writing.'] },
  { title: 'Payments', items: ['Advance and payment milestones will be stated in the written quotation.', 'Additional hours, distance, locations, deliverables or last-minute requirements may incur extra charges.', 'Taxes or third-party costs apply where stated.'] },
  { title: 'Customer Responsibilities', items: ['Provide safe and timely access to venues and pickup locations.', 'Obtain permissions needed for photography, drone use, parking or vehicle entry.', 'Review and approve the written booking summary before paying the advance.'] },
  { title: 'Force Majeure and Service Changes', paragraphs: ['Weather, government restrictions, road closures, breakdowns, illness or events outside reasonable control may require rescheduling, substitute arrangements or service changes. Any remedy will depend on the circumstances and written booking terms.'] },
  { title: 'Liability and Disputes', paragraphs: ['Liability, where legally permitted, is limited to the amount paid for the affected service. Concerns should first be raised through the official Contact page so both parties can attempt a practical resolution. Applicable jurisdiction should be confirmed by the business owner before publication.'] },
]

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" description="Booking, payment aur service delivery se judi sample conditions." sections={sections} />
}
