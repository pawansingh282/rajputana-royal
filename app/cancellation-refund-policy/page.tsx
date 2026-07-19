import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'Draft cancellation, rescheduling and refund policy for Group of Infinity bookings.',
  alternates: { canonical: '/cancellation-refund-policy' },
}

const sections = [
  { title: 'Cancellation Requests', paragraphs: ['All cancellation requests must be sent through the official contact channel and are effective only after written acknowledgement. The customer should provide the booking name, date and service details.'] },
  { title: 'Advance and Refund Eligibility', items: ['The advance reserves the date, car, driver or photography team and may be non-refundable after confirmation.', 'Any refundable amount depends on notice period, work already completed, committed third-party costs and the written quotation.', 'Payment gateway, decoration, travel, accommodation, permit or other committed costs may be deducted where applicable.'] },
  { title: 'Rescheduling', paragraphs: ['One reschedule may be considered subject to availability and written approval. Rate differences, seasonal pricing and already committed costs may apply to the new date.'] },
  { title: 'Cancellation by Group of Infinity', paragraphs: ['If we cannot provide the confirmed service and no acceptable substitute or reschedule is agreed, the amount received for the unavailable service will be refunded. This does not cover indirect losses or third-party expenses, to the extent permitted by law.'] },
  { title: 'Weather and Force Majeure', paragraphs: ['Refunds are not automatic for weather, venue restrictions, road closures, government action or other events outside reasonable control. Rescheduling or credit may be offered depending on availability and committed costs.'] },
  { title: 'Refund Processing', paragraphs: ['Approved refunds will be returned to the original payment method or agreed bank account within the timeline confirmed in writing. The final business timeline must be added before this draft is treated as binding.'] },
  { title: 'Important Confirmation', paragraphs: ['The cancellation and refund terms written in the customer quotation or booking confirmation take priority over this general draft policy.'] },
]

export default function CancellationPolicyPage() {
  return <LegalPage title="Cancellation & Refund Policy" description="Cancellation, rescheduling aur refund ke sample rules." sections={sections} />
}
