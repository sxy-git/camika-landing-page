import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./PolicyDialog.module.css";

export default function TermsOfServicePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadeIn">
      <div className="h-full overflow-y-auto overflow-x-hidden px-12 pt-20 scrollbar-hide">
        <button
          onClick={() => navigate("/")}
          className="absolute top-10 left-10 z-10 flex items-center gap-2 text-yellow hover:bg-white/10 px-4 py-2 rounded-full transition-colors cursor-pointer"
          aria-label="Back"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>{t("back")}</span>
        </button>
        <div className={styles["policy-dialog"]}>
          <h1>Terms and Conditions</h1>

          <h2 className="mt-0!">Introduction</h2>
          <p>
            These Terms of Service (the &quot;Terms&quot;) constitute a legally
            binding document between you (&quot;User&quot; or &quot;You&quot;)
            and Camika.ai (&quot;Camika&quot;, &quot;we&quot;, or
            &quot;our&quot;) regarding your use of the Camika.ai intelligent
            agent services (the &quot;Website&quot; or &quot;Services&quot;).
            Before using the Services, please carefully read and fully
            understand all contents of these Terms, especially the provisions
            concerning disclaimers or limitations of liability, applicable law,
            and dispute resolution methods. By registering, logging in, or using
            the Services, you acknowledge that you have read, understood, and
            agree to be bound by all contents of these Terms. If you do not
            agree with any part of these Terms, please immediately discontinue
            use of the Services.
          </p>

          <p>
            If you still have any questions or concerns regarding the Terms and
            the products/services we offer, you can also check our{" "}
            <a href="https://Camika.ai/">Privacy Policy</a>, or contact us via{" "}
            <a href="https://Camika.ai/">support@Camika.ai.</a>
          </p>

          <h2>Eligibility</h2>
          <p>
            To use our Service, you must be at least 18 years old or have
            reached the age of majority in your jurisdiction. By using the
            Service, you represent and warrant that you meet this eligibility
            requirement. If you are using the Service on behalf of a company,
            organization, or other entity, you represent and warrant that you
            have the authority to bind that entity to these Terms.
          </p>

          <h2>Account Registration</h2>
          <p>
            To access certain features of the Service, you may be required to
            create an account. You agree to provide accurate, complete, and
            up-to-date information during the registration process and to update
            such information as necessary. You are responsible for safeguarding
            your account credentials and for any activities or actions under
            your account, whether authorized or not. You must notify us
            immediately if you suspect any unauthorized use and activities of
            your account.
          </p>

          <h2>Use of the Service</h2>

          <h3>Permitted Use</h3>
          <p>
            Camika.ai grants you a limited, non-exclusive, non-transferable, and
            revocable license to use the Service for applicable purposes,
            subject to these Terms. You agree not to use the Service for any
            purpose that is unlawful or prohibited by these Terms.
          </p>

          <h3>Prohibited Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Service to generate or distribute any content that is
              illegal, harmful, abusive, defamatory, obscene, or otherwise
              objectionable.
            </li>
            <li>
              Attempt to reverse engineer, decompile, or disassemble any part of
              the Service.
            </li>
            <li>
              Use any automated system, including bots, spiders, or scrapers, to
              access the Site or the Service.
            </li>
            <li>
              Engage in any activity that interferes with or disrupts the
              Service or the servers and networks connected to the Service.
            </li>
            <li>
              Use the Service to infringe upon the intellectual property rights
              of others.
            </li>
          </ul>

          <h2>App-Specific Permissions and Updates</h2>
          <p>By installing the App, you agree that:</p>
          <ul>
            <li>
              Camika.ai may, from time to time, provide automatic updates, bug
              fixes, and patches to the App without prior notice.
            </li>
            <li>
              We reserve the right, at our sole discretion, to introduce test or
              Beta features or products (the &quot;Beta Features&quot;) in the
              Services from time to time. Your use of Beta Features is entirely
              voluntary and optional. Beta Features are provided &quot;as
              is&quot; and may contain errors, defects, bugs, or inaccuracies
              that could result in loss or damage to your device data. You
              understand and agree that you use Beta Features at your own risk.
              You agree that once you use Beta Features, your content or data
              may not be able to be rolled back to the previous non-beta
              version. Even if rollback is technically feasible, you may not be
              able to recover data generated during the Beta period. If Beta
              Features are provided to you on a closed testing or confidential
              basis, you will be notified accordingly. For Beta Features that
              are designated as confidential, you agree not to disclose,
              display, or make public in any form without written consent.
            </li>
          </ul>

          <h2>User Content</h2>

          <h3>Ownership and Responsibility</h3>
          <p>
            You retain ownership of any content, including videos, text, images,
            or other materials, that you upload or generate using the Service
            (&quot;User Content&quot;). You are solely responsible for the User
            Content you create, upload, publish, or share through the Service.
          </p>

          <h3>License to Camika.ai</h3>
          <p>
            By submitting User Content to the Service, you grant Camika.ai a
            worldwide, non-exclusive, royalty-free, sublicensable, and
            transferable license to use, reproduce, modify, distribute, and
            display such User Content for the purpose of operating, improving,
            and promoting the Service.
          </p>

          <h3>Content Restrictions</h3>
          <p>
            You agree not to upload, generate, or share any User Content that:
          </p>
          <ul>
            <li>Is misleading, false, or inaccurate.</li>
            <li>Violates any applicable laws or regulations.</li>
            <li>Engages in unauthorized face-swapping.</li>
            <li>
              Infringes on the intellectual property rights of others (including
              but not limited to film and television, animation, game
              characters, trademarks, and more).
            </li>
            <li>
              Includes any unsolicited promotions, political campaigning or
              solicitations.
            </li>
            <li>
              Shares personal details of others without their explicit consent.
            </li>
            <li>
              Discloses information you are not authorized to share due to
              legal, contractual or fiduciary obligations.
            </li>
            <li>
              Could endanger or exploit children by exposing them to
              inappropriate content.
            </li>
            <li>
              Contains any form of malware, viruses, or other harmful code.
            </li>
            <li>Contains explicit sexual material or themes.</li>
            <li>
              Is deemed, in our sole judgment, inappropriate or disruptive to
              other users' experience, or poses potential harm or liability to
              us or others.
            </li>
          </ul>

          <p>
            Any violation of these terms may result in the suspension or
            termination of your account.
          </p>
          <h2>Content Public Visibility</h2>

          <p>
            Our Service allows you to generate videos and other content
            (&quot;Generated Content&quot;) from the materials you upload or
            submit, such as images, text, or other data (&quot;User
            Submissions&quot;). You have the option to make your Generated
            Content publicly available, for example, by publishing it to the
            Explore feed.
          </p>

          <p>
            If you set your Generated Content to public, for any files or
            content you upload to the public section of the Camika.ai platform
            (including but not limited to models, images, training data, etc.),
            you expressly grant us and our affiliated entities (including but
            not limited to Camika.ai and related products) a perpetual,
            non-exclusive, transferable, sublicensable, free, royalty-free,
            irrevocable, worldwide license to use, display, download, and/or
            distribute such files or content. This also includes creating
            derivative works or assets generated based on your instructions, in
            any form, on current or future internet media.
          </p>

          <p>
            The above license applies to the Camika.ai platform and other
            related business platforms of the company, including but not limited
            to activities related to modifying, improving, and enhancing
            artificial intelligence models, as well as promoting and
            redistributing part or all of the services (and their derivative
            works) in any media format and through any media channels.
          </p>

          <h2>Intellectual Property</h2>

          <h3>Ownership of Camika.ai Content</h3>

          <p>
            All intellectual property rights in the Site, the Service, and any
            content provided by Camika.ai, including but not limited to
            software, text, graphics, logos, and trademarks, are owned by
            Camika.ai or its licensors. You are granted no rights or licenses in
            these materials except as expressly stated in these Terms.
          </p>

          <p>
            To use our Services or User Content in any manner not specified in
            this document, please contact us at{" "}
            <a href="https://Camika.ai/">support@Camika.ai</a> for permission.
            If permission is granted, you must acknowledge us as the owners or
            licensors of the content used.
          </p>

          <h3>User Feedback</h3>

          <p>
            Any feedback, suggestions, or ideas you provide to Camika.ai
            regarding the Service (&quot;Feedback&quot;) will be the exclusive
            property of Camika.ai. You hereby assign all rights in the Feedback
            to Camika.ai and agree that Camika.ai is free to use such Feedback
            without any compensation to you.
          </p>

          <h2>Payment and Subscription</h2>

          <h3>Fees</h3>

          <p>
            Certain features of the Service may require payment of fees. You
            agree to pay all applicable fees associated with your use of the
            Service. Camika.ai reserves the right to change its fees and billing
            methods at any time upon notice to you.
          </p>

          <h3>Billing</h3>

          <p>
            Payments for the Service may be processed through third-party
            payment processors. By providing payment information, you authorize
            Camika.ai and its payment processors to charge the applicable fees
            to your payment method.
          </p>

          <h3>Refunds</h3>

          <p>
            If you have not performed any generation activities, used any
            benefits, or consumed any credits since your most recent payment,
            you may apply for a full refund within 24 hours of purchase. Once
            there is any usage, all service fees are non-refundable. Camika.ai
            may, at its sole discretion, provide refunds or credits in specific
            circumstances.
          </p>

          <h3>Auto-Renewal</h3>

          <p>
            If you choose auto-renewal, the system will automatically charge the
            current price upon expiration. You may cancel auto-renewal through
            your account settings before the end of the current billing cycle.
            Once cancelled, no further charges will be made.
          </p>

          <h3>Cancel Subscription</h3>
          <ul>
            <li>
              You may cancel your subscription at any time through your account
              subscription settings. To do so: On the left sidebar of the
              homepage, select &quot;Subscription&quot;, then click
              &quot;Subscription Management&quot; &gt; &quot;Cancel
              Subscription&quot;.
            </li>
            <li>
              After cancellation, your service will remain active until the end
              of your current billing cycle. No further charges will be applied.
            </li>
            <li>
              Cancellation requests must be submitted before the next billing
              date. Failure to do so will result in a charge for the next
              billing period, and this charge is non-refundable.
            </li>

            <li>
              No partial refunds or prorated credits will be issued for unused
              time, mid-cycle cancellations, or subscription downgrades under
              any circumstances.
            </li>
          </ul>

          <h2>Termination</h2>

          <h3>Termination by You</h3>

          <p>
            You may terminate your account at any time by following the
            instructions provided on the Site. Upon termination, your right to
            access and use the Service will immediately cease.
          </p>

          <h3>Termination by Camika.ai</h3>

          <p>
            Camika.ai may terminate or suspend your account or access to the
            Service, with or without notice, for any reason, including but not
            limited to your violation of these Terms.
          </p>

          <h3>Effect of Termination</h3>

          <p>
            Upon termination, all licenses granted to you under these Terms will
            immediately terminate, and you must cease all use of the Service.
            Any accrued rights or obligations will survive termination,
            including those related to payment and intellectual property.
          </p>

          <h2>Disclaimers and Limitation of Liability</h2>

          <h3>Disclaimer of Warranties</h3>

          <p>
            The Service is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without any warranties of any kind, whether
            express, implied, or statutory. Camika.ai does not warrant that the
            Service will be uninterrupted, error-free, or free of harmful
            components. To the fullest extent permitted by law, Camika.ai
            disclaims all warranties, including, but not limited to, warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>

          <h3>Limitation of Liability</h3>

          <p>
            To the maximum extent permitted by law, Camika.ai will not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including loss of profits, data, or use, arising out of or
            in connection with your use of the Service, whether based on
            warranty, contract, tort, or any other legal theory, even if
            Camika.ai has been advised of the possibility of such damages.
          </p>

          <h3>Indemnification</h3>

          <p>
            You agree to indemnify, defend, and hold harmless Camika.ai and its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses, including
            reasonable attorneys' fees, arising out of or in any way connected
            with your use of the Service, your violation of these Terms, or your
            infringement of any intellectual property or other rights of any
            third party.
          </p>

          <h2>Miscellaneous</h2>

          <h3>Entire Agreement</h3>

          <p>
            These Terms constitute the entire agreement between you and
            Camika.ai regarding your use of the Service and supersede any prior
            agreements between you and Camika.ai.
          </p>

          <h3>Severability</h3>

          <p>
            If any provision of these Terms is found to be invalid or
            unenforceable, that provision will be enforced to the maximum extent
            possible, and the remaining provisions will remain in full force and
            effect.
          </p>

          <h3>Waiver</h3>

          <p>
            The failure of Camika.ai to enforce any right or provision of these
            Terms will not be deemed a waiver of such right or provision.
          </p>

          <h3>Assignment</h3>

          <p>
            You may not assign or transfer these Terms or any of your rights or
            obligations under these Terms without the prior written consent of
            Camika.ai. Camika.ai may freely assign these Terms without
            restriction.
          </p>

          <h2>Contact Information</h2>

          <p>
            If you have any questions or concerns about these Terms, please
            contact us at: <a href="https://Camika.ai/">support@Camika.ai</a>.
          </p>

          <p>
            These Terms and Conditions are legally binding between you and
            Camika.ai. By using the Site and the Service, you acknowledge that
            you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </div>
    </div>
  );
}
