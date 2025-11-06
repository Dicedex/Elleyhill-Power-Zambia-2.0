
import { SiteLayout } from "@/components/layout";

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8">Terms and Conditions</h1>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to Elleyhill Power Zambia. These are the terms and conditions governing your access to and use of the website Elleyhill and its related sub-domains, sites, services, and tools. By using the Site, you hereby accept these terms and conditions and represent that you agree to comply with these terms and conditions.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. Use of the Site</h2>
            <p>You are granted a non-transferable and revocable license to use the Site, under the Terms and Conditions described, for the purposes of shopping for personal items sold on the Site. Commercial use or use on behalf of any third party is prohibited, except as explicitly permitted by us in advance.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. User Submissions</h2>
            <p>Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions will become our sole and exclusive property and shall not be returned to you.</p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Products and Pricing</h2>
            <p>All products listed on the Site are subject to change, as is product information, pricing, and availability. We reserve the right, at any time, to modify, suspend, or discontinue any Site feature or the sale of any product with or without notice.</p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>The solar calculator provides an estimate based on the data you provide. It is for informational purposes only. Elleyhill Power Zambia is not liable for any inaccuracies or discrepancies in the final system design or performance. A physical site assessment is required for a formal quote.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">6. Governing Law</h2>
            <p>These Terms and Conditions shall be interpreted and governed by the laws in force in Lusaka, Zambia. Each party hereby agrees to submit to the jurisdiction of the courts of Zambia and to waive any objections based upon venue.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
