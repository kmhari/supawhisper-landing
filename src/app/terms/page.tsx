import React from "react";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Terms of Service
        </h1>
        <Separator className="mb-8" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing or using SupaWhisper, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground mb-4">
              SupaWhisper provides real-time audio transcription services
              through our desktop application for macOS. The service captures
              audio input and converts it to text using automated speech
              recognition technology.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to modify, suspend, or discontinue any part
              of the service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. User Accounts and Responsibilities
            </h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account.
            </p>
            <p className="text-muted-foreground">
              You agree not to use the service for any illegal purposes or in
              violation of any applicable local, state, national, or
              international law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground mb-4">
              SupaWhisper and its original content, features, and functionality
              are owned by us and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <p className="text-muted-foreground">
              You retain all rights to your content. By using our service, you
              grant us a license to use, store, and process your content solely
              for the purpose of providing and improving our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitations of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              In no event shall SupaWhisper, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Your access to or use of or inability to access or use the
                service
              </li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
            <p className="text-muted-foreground">
              Your use of the service is at your sole risk. The service is
              provided on an "AS IS" and "AS AVAILABLE" basis. The service is
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, or course of performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account and bar access to the
              service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at
              support@supawhisper.com.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Last updated: June 30, 2025</p>
        </div>
      </div>
    </div>
  );
}
