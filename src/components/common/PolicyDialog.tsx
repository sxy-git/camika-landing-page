import styles from "./PolicyDialog.module.css";
interface PolicyDialogProps {
  type: "Privacy Policy" | "Terms and Conditions";
  onClose: () => void;
}

export default function PolicyDialog({ type, onClose }: PolicyDialogProps) {
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black/90">
      <div className="h-full overflow-y-auto overflow-x-hidden px-12 pt-20 scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 z-10 size-12 scale-150 flex items-center justify-center text-yellow hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="Close"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {type === "Privacy Policy" ? (
          <div className={styles["policy-dialog"]}>
            <h1>Privacy Policy</h1>

            <p>
              This Privacy Policy is established by Camika.ai (hereinafter
              referred to as &quot;we&quot; or &quot;us&quot;) to explain how we
              collect, store, use, and/or share your information when you use
              our services, including our website https://Camika.ai/
              (hereinafter referred to as the &quot;Website&quot;). We value
              your privacy and are committed to protecting your personal data.
              This Policy applies when you access or use our Services, including
              any websites or platforms that link to this Policy.
            </p>

            <p>
              We use Your Personal Data to provide and improve the Service. By
              using the Website or the App, You agree to the collection and use
              of information in accordance with this Privacy Policy.
            </p>

            <p>
              Should you have any questions or concerns regarding this Privacy
              Policy and our services, please check our Terms and Conditions, or
              contact us directly via{" "}
              <a href="https://Camika.ai/">support@Camika.ai.</a>
            </p>

            <h2>Interpretation and Definitions</h2>

            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural.
            </p>

            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>

            <ol>
              <li>
                <strong>Website</strong> refers to Camika.ai, accessible from
                <a href="https://Camika.ai/">https://Camika.ai/</a>.
              </li>
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                &quot;control&quot; means ownership of 50% or more of the
                shares, equity interest or other securities entitled to vote for
                election of directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either &quot;the
                Company&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;
                in this Agreement) refers to Camika AI.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Camika AI platform and
                Website.
              </li>
              <li>
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company.
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself.
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ol>

            <h2>Collecting and Using Your Personal Data</h2>

            <h3>Types of Data We May Collect</h3>

            <h4>Personal Data</h4>
            <p>
              While using Our Service, whether through the Website or the App,
              We may ask You to provide Us with certain personally identifiable
              information that can be used to contact or identify You.
              Personally identifiable information may include, but is not
              limited to:
            </p>

            <ul>
              <li>Email address</li>
              <li>Usage Data</li>
              <li>Social Media Information</li>
              <li>Web Cookies</li>
            </ul>

            <h4>Information from Third-Party Social Media Services</h4>
            <p>
              The Company allows You to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </p>

            <ul>
              <li>Google</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>

            <p>
              If You decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal Data
              that is already associated with Your third-party account, such as
              Your name, Your email address, Your activities, or Your contact
              list. This applies regardless of whether You interact with these
              services through the Website or the App.
            </p>

            <h3>Tracking Technologies and Cookies</h3>
            <p>
              If you are accessing our mobile application through computers we
              place “Cookies” on your computer to identify it. “Cookies” are
              identifiers we transfer to your computer or mobile device that
              allow us to recognize your browser or mobile device and tell us
              how and when pages and features in our Services are visited and by
              how many people. You may be able to change the preferences on your
              browser or mobile device to prevent or limit your computer or
              device’s acceptanceor device’s acceptance of cookies, but this may
              prevent you from taking advantage of some of our features. If you
              click on a link to a third party website, such third party may
              also transmit cookies to you. You hereby agree that this Privacy
              Policy does not cover the use of cookies by any third parties.
            </p>

            <h3>Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>

            <ol>
              <li>
                To provide and maintain our Service, including monitoring the
                usage of our Service on both the Website and the App.
              </li>
              <li>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </li>
              <li>
                To provide You with news, special offers, and general
                information about other goods, services, and events that we
                offer that are similar to those that you have already purchased
                or enquired about, unless You have opted not to receive such
                information.
              </li>
              <li>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </li>
              <li>
                For other purposes: We may use Your information for other
                purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns, as
                well as evaluating and improving our Service, products,
                services, marketing, and your overall experience.
              </li>
            </ol>

            <h2>Retention of Your Personal Data</h2>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>

            <h2>Delete Your Personal Data</h2>
            <p>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </p>
            <p>
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </p>

            <h2>Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
            <p>
              You are responsible for ensuring the security of Your Device and
              the credentials You use to access the App.
            </p>

            <h2>Content Restrictions</h2>
            <p>
              To maintain a safe, ethical, and responsible platform, we have
              established the following content restrictions for all users of
              our AI-generated content website. These restrictions apply to any
              content generated, uploaded, or shared on our platform.
            </p>

            <h3>Prohibited Content</h3>
            <p>We prohibit the following types of content:</p>

            <ul>
              <li>
                <strong>Illegal Content:</strong> Any content that promotes,
                facilitates, or engages in illegal activities, including but not
                limited to fraud, violence, or the sale of illegal goods or
                services.
              </li>
              <li>
                <strong>Harmful Content:</strong> Content that incites hatred,
                violence, or discrimination based on race, religion, gender,
                sexual orientation, or other protected characteristics.
              </li>
              <li>
                <strong>Explicit or Adult Content:</strong> Pornographic,
                excessively violent, or otherwise inappropriate content,
                including depictions of sexual abuse, child exploitation, or
                animal cruelty.
              </li>
              <li>
                <strong>Intellectual Property Infringement:</strong> Content
                that infringes upon the copyrights, trademarks, or other
                intellectual property rights of others.
              </li>
              <li>
                <strong>False or Misleading Content:</strong> Content that is
                intentionally false, misleading, or deceptive, particularly when
                presented as factual.
              </li>
              <li>
                <strong>Privacy Violations:</strong> Content that discloses
                personal information without consent or invades someone&apos;s
                privacy.
              </li>
              <li>
                <strong>Hate Speech:</strong> Content that promotes hatred,
                discrimination, or hostility towards individuals or groups based
                on protected characteristics.
              </li>
              <li>
                <strong>Harassment and Bullying:</strong> Content that targets
                individuals or groups with the intent to harass, threaten, or
                bully.
              </li>
              <li>
                <strong>Self-Harm and Suicide:</strong> Content that promotes or
                glorifies self-harm, suicide, or other dangerous behaviors.
              </li>
              <li>
                <strong>Spam and Malware:</strong> Spam, content containing
                malware, or content intended to phish, scam, or harm users.
              </li>
              <li>
                <strong>Impersonation:</strong> Content that impersonates
                individuals, organizations, or entities in a misleading or
                deceptive manner.
              </li>
              <li>
                <strong>Prohibited Uses:</strong> Using our services for any
                illegal or prohibited purposes, including but not limited to
                illegal gambling, spreading viruses, or interfering with our
                services.
              </li>
            </ul>

            <h3>Additional Restrictions for AI-Generated Content</h3>
            <ul>
              <li>
                <strong>No Misrepresentation:</strong> You must not represent
                AI-generated content as being created by you without proper
                disclosure.
              </li>
              <li>
                <strong>No Sensitive Data Input:</strong> You must not input
                sensitive personal data (such as racial or ethnic origin,
                political opinions, religious beliefs, health data, or sexual
                orientation) into our AI tools.
              </li>
              <li>
                <strong>No Harmful Outputs:</strong> You must not use our AI
                tools to generate content that is harmful, offensive, or
                violates the above prohibitions.
              </li>
            </ul>

            <h2>Enforcement</h2>
            <p>
              We reserve the right to remove any content that violates these
              restrictions and to take appropriate action, including suspending
              or terminating accounts. We may also report illegal activities to
              the appropriate authorities.
            </p>

            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. You are
              advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page. We may also communicate major updates
              directly through notices on the Website or notifications in the
              App.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              you can contact us by email at:{" "}
              <a href="https://Camika.ai/">support@Camika.ai</a>
            </p>
          </div>
        ) : (
          <div className={styles["policy-dialog"]}>
            <h1>Terms and Conditions</h1>

            <h2 className="mt-0!">Introduction</h2>
            <p>
              These Terms of Service (the &quot;Terms&quot;) constitute a
              legally binding document between you (&quot;User&quot; or
              &quot;You&quot;) and Camika.ai (&quot;Camika&quot;,
              &quot;we&quot;, or &quot;our&quot;) regarding your use of the
              Camika.ai intelligent agent services (the &quot;Website&quot; or
              &quot;Services&quot;). Before using the Services, please carefully
              read and fully understand all contents of these Terms, especially
              the provisions concerning disclaimers or limitations of liability,
              applicable law, and dispute resolution methods. By registering,
              logging in, or using the Services, you acknowledge that you have
              read, understood, and agree to be bound by all contents of these
              Terms. If you do not agree with any part of these Terms, please
              immediately discontinue use of the Services.
            </p>

            <p>
              If you still have any questions or concerns regarding the Terms
              and the products/services we offer, you can also check our{" "}
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
              up-to-date information during the registration process and to
              update such information as necessary. You are responsible for
              safeguarding your account credentials and for any activities or
              actions under your account, whether authorized or not. You must
              notify us immediately if you suspect any unauthorized use and
              activities of your account.
            </p>

            <h2>Use of the Service</h2>

            <h3>Permitted Use</h3>
            <p>
              Camika.ai grants you a limited, non-exclusive, non-transferable,
              and revocable license to use the Service for applicable purposes,
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
                Attempt to reverse engineer, decompile, or disassemble any part
                of the Service.
              </li>
              <li>
                Use any automated system, including bots, spiders, or scrapers,
                to access the Site or the Service.
              </li>
              <li>
                Engage in any activity that interferes with or disrupts the
                Service or the servers and networks connected to the Service.
              </li>
              <li>
                Use the Service to infringe upon the intellectual property
                rights of others.
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
                We reserve the right, at our sole discretion, to introduce test
                or Beta features or products (the &quot;Beta Features&quot;) in
                the Services from time to time. Your use of Beta Features is
                entirely voluntary and optional. Beta Features are provided
                &quot;as is&quot; and may contain errors, defects, bugs, or
                inaccuracies that could result in loss or damage to your device
                data. You understand and agree that you use Beta Features at
                your own risk. You agree that once you use Beta Features, your
                content or data may not be able to be rolled back to the
                previous non-beta version. Even if rollback is technically
                feasible, you may not be able to recover data generated during
                the Beta period. If Beta Features are provided to you on a
                closed testing or confidential basis, you will be notified
                accordingly. For Beta Features that are designated as
                confidential, you agree not to disclose, display, or make public
                in any form without written consent.
              </li>
            </ul>

            <h2>User Content</h2>

            <h3>Ownership and Responsibility</h3>
            <p>
              You retain ownership of any content, including videos, text,
              images, or other materials, that you upload or generate using the
              Service (&quot;User Content&quot;). You are solely responsible for
              the User Content you create, upload, publish, or share through the
              Service.
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
                Infringes on the intellectual property rights of others
                (including but not limited to film and television, animation,
                game characters, trademarks, and more).
              </li>
              <li>
                Includes any unsolicited promotions, political campaigning or
                solicitations.
              </li>
              <li>
                Shares personal details of others without their explicit
                consent.
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
              (including but not limited to models, images, training data,
              etc.), you expressly grant us and our affiliated entities
              (including but not limited to Camika.ai and related products) a
              perpetual, non-exclusive, transferable, sublicensable, free,
              royalty-free, irrevocable, worldwide license to use, display,
              download, and/or distribute such files or content. This also
              includes creating derivative works or assets generated based on
              your instructions, in any form, on current or future internet
              media.
            </p>

            <p>
              The above license applies to the Camika.ai platform and other
              related business platforms of the company, including but not
              limited to activities related to modifying, improving, and
              enhancing artificial intelligence models, as well as promoting and
              redistributing part or all of the services (and their derivative
              works) in any media format and through any media channels.
            </p>

            <h2>Intellectual Property</h2>

            <h3>Ownership of Camika.ai Content</h3>

            <p>
              All intellectual property rights in the Site, the Service, and any
              content provided by Camika.ai, including but not limited to
              software, text, graphics, logos, and trademarks, are owned by
              Camika.ai or its licensors. You are granted no rights or licenses
              in these materials except as expressly stated in these Terms.
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
              property of Camika.ai. You hereby assign all rights in the
              Feedback to Camika.ai and agree that Camika.ai is free to use such
              Feedback without any compensation to you.
            </p>

            <h2>Payment and Subscription</h2>

            <h3>Fees</h3>

            <p>
              Certain features of the Service may require payment of fees. You
              agree to pay all applicable fees associated with your use of the
              Service. Camika.ai reserves the right to change its fees and
              billing methods at any time upon notice to you.
            </p>

            <h3>Billing</h3>

            <p>
              Payments for the Service may be processed through third-party
              payment processors. By providing payment information, you
              authorize Camika.ai and its payment processors to charge the
              applicable fees to your payment method.
            </p>

            <h3>Refunds</h3>

            <p>
              If you have not performed any generation activities, used any
              benefits, or consumed any credits since your most recent payment,
              you may apply for a full refund within 24 hours of purchase. Once
              there is any usage, all service fees are non-refundable. Camika.ai
              may, at its sole discretion, provide refunds or credits in
              specific circumstances.
            </p>

            <h3>Auto-Renewal</h3>

            <p>
              If you choose auto-renewal, the system will automatically charge
              the current price upon expiration. You may cancel auto-renewal
              through your account settings before the end of the current
              billing cycle. Once cancelled, no further charges will be made.
            </p>

            <h3>Cancel Subscription</h3>
            <ul>
              <li>
                You may cancel your subscription at any time through your
                account subscription settings. To do so: On the left sidebar of
                the homepage, select &quot;Subscription&quot;, then click
                &quot;Subscription Management&quot; &gt; &quot;Cancel
                Subscription&quot;.
              </li>
              <li>
                After cancellation, your service will remain active until the
                end of your current billing cycle. No further charges will be
                applied.
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
              Upon termination, all licenses granted to you under these Terms
              will immediately terminate, and you must cease all use of the
              Service. Any accrued rights or obligations will survive
              termination, including those related to payment and intellectual
              property.
            </p>

            <h2>Disclaimers and Limitation of Liability</h2>

            <h3>Disclaimer of Warranties</h3>

            <p>
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without any warranties of any kind, whether
              express, implied, or statutory. Camika.ai does not warrant that
              the Service will be uninterrupted, error-free, or free of harmful
              components. To the fullest extent permitted by law, Camika.ai
              disclaims all warranties, including, but not limited to,
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>

            <h3>Limitation of Liability</h3>

            <p>
              To the maximum extent permitted by law, Camika.ai will not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or use, arising
              out of or in connection with your use of the Service, whether
              based on warranty, contract, tort, or any other legal theory, even
              if Camika.ai has been advised of the possibility of such damages.
            </p>

            <h3>Indemnification</h3>

            <p>
              You agree to indemnify, defend, and hold harmless Camika.ai and
              its officers, directors, employees, and agents from and against
              any claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys' fees, arising out of or in any way connected
              with your use of the Service, your violation of these Terms, or
              your infringement of any intellectual property or other rights of
              any third party.
            </p>

            <h2>Miscellaneous</h2>

            <h3>Entire Agreement</h3>

            <p>
              These Terms constitute the entire agreement between you and
              Camika.ai regarding your use of the Service and supersede any
              prior agreements between you and Camika.ai.
            </p>

            <h3>Severability</h3>

            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, that provision will be enforced to the maximum
              extent possible, and the remaining provisions will remain in full
              force and effect.
            </p>

            <h3>Waiver</h3>

            <p>
              The failure of Camika.ai to enforce any right or provision of
              these Terms will not be deemed a waiver of such right or
              provision.
            </p>

            <h3>Assignment</h3>

            <p>
              You may not assign or transfer these Terms or any of your rights
              or obligations under these Terms without the prior written consent
              of Camika.ai. Camika.ai may freely assign these Terms without
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
        )}
      </div>
    </div>
  );
}
