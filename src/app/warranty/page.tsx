
import { SiteLayout } from "@/components/layout";

export default function WarrantyPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8">Warranty Information & Claims</h1>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
            <p>Elleyhill Power Zambia is committed to providing high-quality solar products. Our products come with manufacturer-backed warranties to ensure your peace of mind. Warranty periods and terms vary by product and manufacturer. Please refer to the specific product documentation for detailed warranty information.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">What is Covered?</h2>
            <p>Warranties typically cover defects in materials and workmanship under normal application, installation, use, and service conditions. Specific coverage includes:</p>
            <ul>
                <li><strong>Solar Panels:</strong> Typically come with a 10-25 year product warranty and a 25-year linear performance warranty.</li>
                <li><strong>Inverters:</strong> Generally covered by a 5-10 year warranty.</li>
                <li><strong>Batteries:</strong> Usually have a 5-10 year warranty or are rated for a certain number of cycles.</li>
            </ul>
            <p>This warranty does not cover issues resulting from improper installation, misuse, accidents, or unauthorized repairs.</p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">How to File a Claim</h2>
            <p>If you believe you have a warranty claim, please follow these steps:</p>
            <ol>
                <li>Contact our support team at <a href="mailto:admin@elleyhill.co.za">admin@elleyhill.co.za</a> with your proof of purchase, a description of the issue, and any relevant photos or videos.</li>
                <li>Our team will assess your claim and may require further information or a physical inspection.</li>
                <li>If the claim is approved, we will coordinate with the manufacturer to repair or replace the defective product according to their warranty terms.</li>
            </ol>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            <p>Elleyhill Power Zambia facilitates the warranty claim on behalf of the customer with the manufacturer. The final decision for any warranty claim rests solely with the product manufacturer.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
