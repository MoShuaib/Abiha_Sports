import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = { title: 'Store Policies | Abiha Sports Industries', description: 'Our store policies regarding orders, advances, and refunds.' }

export default function PoliciesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Policies</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Store <span className="text-primary">Policies.</span>
            </h1>
          </Reveal>

          <Reveal delay={100} className="mt-12 space-y-12 text-muted-foreground leading-8">
            <div>
              <p>
                At <strong className="text-foreground">Abiha Sports Industries</strong>, we are committed to providing high-quality, handcrafted wooden sports and traditional training equipment. Since many of our products are made or prepared specifically for individual orders, we have established the following policies to ensure a clear and fair experience for both our customers and our business.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">1. Advance Payment | Order Confirmation</h2>
              <p>An advance payment is required to confirm and secure an order.</p>
              <p>Once the advance payment has been received, we reserve the required materials, allocate production capacity, and begin processing the order according to the specifications provided by the customer.</p>
              <p>An order will be considered confirmed only after the required advance payment has been successfully received.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">2. Order Cancellation Policy</h2>
              <p>Customers may request cancellation of an order within <strong className="text-foreground">3 days of making the advance payment</strong>.</p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 my-4">
                <p className="font-medium text-foreground text-lg">
                  If an order is cancelled after the 3-day cancellation period, the advance payment will be strictly non-refundable.
                </p>
              </div>
              <p>This policy is necessary because, after the initial 3-day period, we may have already:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Procured or allocated raw materials.</li>
                <li>Reserved production capacity.</li>
                <li>Started manufacturing or handcrafting the product.</li>
                <li>Prepared the product according to specific customer requirements.</li>
              </ul>
              <p>Therefore, cancellation requests received after the applicable period will not qualify for a refund of the advance payment.</p>
            </div>



            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">3. Payment Policy</h2>
              <p>All payments must be made through the payment methods provided or approved by Abiha Sports Industries.</p>
              <p>Customers are responsible for ensuring that the correct amount is paid and that the order details are accurate before making payment.</p>
              <p>Any applicable balance payment must be completed as communicated by our team before dispatch or delivery of the order.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">4. Shipping | Delivery</h2>
              <p>We make every reasonable effort to process and dispatch orders within the estimated timeframe communicated at the time of purchase.</p>
              <p>Delivery and shipping charges are the responsibility of the customer and will be payable in addition to the product price, unless otherwise agreed upon in writing.</p>
              <p>Shipping charges may vary depending on:</p>
              <ul className="list-disc pl-6 space-y-2 grid grid-cols-2 sm:grid-cols-2">
                <li>Delivery location</li>
                <li>Order quantity</li>
                <li>Product weight and dimensions</li>
                <li>Shipping method</li>
                <li>Courier or transportation provider</li>
                <li>Special handling or packaging requirements</li>
              </ul>
              <p>The estimated delivery date is provided as a guideline and should not be considered an absolute guarantee.</p>
              <p>The applicable delivery charges will be communicated to the customer before dispatch, where applicable.</p>
            </div>





            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">5. Returns | Exchanges</h2>
              <p>Returns and exchanges are subject to product eligibility and approval by Abiha Sports Industries.</p>
              <p>Products must generally be returned in their original condition and must not have been misused, modified, damaged, or altered after delivery.</p>
              <p>For hygiene, customization, and manufacturing reasons, certain products—particularly customized or made-to-order equipment—may not be eligible for return or exchange.</p>
              <p>Customers should contact us before sending any product back. Unauthorized returns may not be accepted.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">6. Refund Policy</h2>
              <p>Where a refund is approved, the applicable refund amount and method will be determined based on the circumstances of the order and the applicable policy.</p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 my-4">
                <p className="font-medium text-foreground text-lg">
                  Advance payments for orders cancelled after the 3-day cancellation period are strictly non-refundable.
                </p>
              </div>
              <p>Refunds, where applicable, may be subject to deductions for costs already incurred, including materials, customization, production, shipping, or other applicable charges.</p>
              <p>Approved refunds will be processed within a reasonable timeframe after confirmation.</p>
            </div>





            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">7. Order Changes</h2>
              <p>Requests to modify an order should be made as early as possible.</p>
              <p>Once production, customization, or material preparation has begun, changes to the order may not be possible.</p>
              <p>Any additional costs resulting from an approved modification may be payable by the customer.</p>
            </div>



            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">8. Customer Responsibility</h2>
              <p>Customers are responsible for providing accurate information when placing an order, including:</p>
              <ul className="list-disc pl-6 space-y-2 grid grid-cols-2">
                <li>Name</li>
                <li>Contact information</li>
                <li>Delivery address</li>
                <li>Product specifications</li>
                <li>Quantity</li>
                <li>Customization requirements</li>
              </ul>
              <p>Abiha Sports Industries will not be responsible for delays or additional costs resulting from incorrect or incomplete information provided by the customer.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">9. Policy Updates</h2>
              <p>Abiha Sports Industries reserves the right to update or modify these policies from time to time.</p>
              <p>Any changes will be published on this page and will apply to orders placed after the updated policy becomes effective.</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">10. Contact Us</h2>
              <p>If you have any questions regarding our store policies, orders, cancellations, returns, or products, please contact our team before placing your order.</p>
              <p className="font-semibold text-foreground text-lg">Abiha Sports Industries</p>
              <p>We appreciate your trust and understanding and remain committed to providing quality products and reliable service to our customers.</p>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
