
import { SiteLayout } from "@/components/layout";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form (such as the solar calculator), and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, and phone number.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. How We Use Collected Information</h2>
            <p>Elleyhill Power Zambia may collect and use Users personal information for the following purposes:</p>
            <ul>
                <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order.</li>
            </ul>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. How We Protect Your Information</h2>
            <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Sharing Your Personal Information</h2>
            <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.</p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Changes to This Privacy Policy</h2>
            <p>Elleyhill Power Zambia has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
