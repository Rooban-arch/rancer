import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  Scale,
  Users,
  Briefcase,
  CreditCard,
  Lock,
  FolderArchive,
  EyeOff,
  AlertTriangle,
  LifeBuoy,
  Server,
  Activity,
  UserX,
  AlertCircle,
  RefreshCw,
  Compass,
  Mail,
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Rancer.in — Marketplace Terms & Conditions',
  description:
    'Read the official Terms of Service for Rancer.in. Understand client and freelancer rights, responsibilities, payments, intellectual property, source code storage, and platform policies.',
};

export default function TermsPage() {
  const sections = [
    { id: 'section-1', number: '1', title: 'Acceptance of Terms', icon: CheckCircle2 },
    { id: 'section-2', number: '2', title: 'User Accounts', icon: Users },
    { id: 'section-3', number: '3', title: 'Freelancer Responsibilities', icon: Briefcase },
    { id: 'section-4', number: '4', title: 'Client Responsibilities', icon: Users },
    { id: 'section-5', number: '5', title: 'Payments, Fees, and Refunds', icon: CreditCard },
    { id: 'section-6', number: '6', title: 'Intellectual Property and Ownership of Work', icon: Lock },
    { id: 'section-7', number: '7', title: 'Portfolio and Bio Showcase Policy', icon: EyeOff },
    { id: 'section-8', number: '8', title: 'Temporary Storage of Sold Source Code and Files', icon: FolderArchive },
    { id: 'section-9', number: '9', title: 'Privacy and Data Protection', icon: ShieldCheck },
    { id: 'section-10', number: '10', title: 'Prohibited Activities', icon: AlertTriangle },
    { id: 'section-11', number: '11', title: 'Project Disputes and Complaints', icon: LifeBuoy },
    { id: 'section-12', number: '12', title: 'Third-Party Services', icon: Server },
    { id: 'section-13', number: '13', title: 'Service Availability', icon: Activity },
    { id: 'section-14', number: '14', title: 'Account Suspension and Termination', icon: UserX },
    { id: 'section-15', number: '15', title: 'Limitation of Liability', icon: AlertCircle },
    { id: 'section-16', number: '16', title: 'Changes to These Terms', icon: RefreshCw },
    { id: 'section-17', number: '17', title: 'Governing Law', icon: Compass },
    { id: 'section-18', number: '18', title: 'Contact Information', icon: Mail },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <Scale className="w-3.5 h-3.5 text-blue-400" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Rancer.in — Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
            Welcome to Rancer.in, an online freelancing marketplace that connects clients with freelancers offering digital services, programming, development, design, and other professional work.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>Effective Date: <strong>October 25, 2025</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Important Notice Callout */}
        <div className="mb-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-950 flex flex-col sm:flex-row items-start gap-4">
          <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <p className="font-semibold text-blue-900 mb-1">
              Please read these Terms carefully before using the platform.
            </p>
            <p className="text-blue-800">
              By accessing or using Rancer.in, you agree to these Terms of Service. If you do not agree to these Terms, please do not use the platform.
            </p>
          </div>
        </div>

        {/* Quick Navigation Drawer */}
        <div className="mb-14 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-slate-600" />
            <span>Table of Contents</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-xs transition text-slate-700 flex items-center gap-2"
              >
                <span className="font-bold text-slate-400 w-5">{sec.number}.</span>
                <span className="truncate">{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-12">
          
          {/* 1. Acceptance of Terms */}
          <article id="section-1" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Acceptance of Terms
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                By creating an account, posting a project, hiring a freelancer, offering services, or purchasing work on Rancer.in, you agree to comply with these Terms and all applicable laws.
              </p>
              <p>
                If you do not agree to these Terms, please do not use the platform.
              </p>
            </div>
          </article>

          {/* 2. User Accounts */}
          <article id="section-2" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                User Accounts
              </h2>
            </div>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside">
              <li>Users must provide accurate and up-to-date information when creating an account.</li>
              <li>You are responsible for keeping your login credentials secure.</li>
              <li>You must not impersonate another person or use another person&apos;s account without permission.</li>
              <li>You must not use the platform for illegal, fraudulent, or misleading activities.</li>
              <li>Rancer.in may suspend or terminate accounts that violate these Terms, subject to applicable law.</li>
            </ul>
          </article>

          {/* 3. Freelancer Responsibilities */}
          <article id="section-3" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Freelancer Responsibilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-medium mb-3">
              Freelancers agree to:
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-4">
              <li>Provide the services they advertise honestly and professionally.</li>
              <li>Deliver work according to the agreed project requirements and deadlines.</li>
              <li>Communicate clearly with clients regarding progress, changes, and delays.</li>
              <li>Submit original work or work they have the legal right to use.</li>
              <li>Respect clients&apos; confidentiality and intellectual property rights.</li>
              <li>Avoid plagiarism, fraud, scams, and unauthorized distribution of client materials.</li>
            </ul>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <strong>Note:</strong> Freelancers are independent service providers and are not employees of Rancer.in.
            </div>
          </article>

          {/* 4. Client Responsibilities */}
          <article id="section-4" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Client Responsibilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-medium mb-3">
              Clients agree to:
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-4">
              <li>Provide clear project requirements and necessary information.</li>
              <li>Make payments according to the agreed terms.</li>
              <li>Communicate respectfully with freelancers.</li>
              <li>Review delivered work fairly and report genuine issues promptly.</li>
              <li>Avoid requesting illegal services, stolen code, or work that infringes third-party rights.</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              Clients must not use Rancer.in to deceive, harass, exploit, or defraud freelancers.
            </p>
          </article>

          {/* 5. Payments, Fees, and Refunds */}
          <article id="section-5" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Payments, Fees, and Refunds
              </h2>
            </div>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-4">
              <li>Project prices, platform fees, and payment conditions will be communicated through the platform where applicable.</li>
              <li>Clients must pay the agreed amount for authorized work.</li>
              <li>Freelancers must follow Rancer.in&apos;s payment and withdrawal procedures.</li>
              <li>Refunds, cancellations, and disputes will be handled according to the applicable refund and dispute policies.</li>
              <li>Rancer.in may investigate suspicious transactions and take reasonable action to prevent fraud.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 italic">
              Specific payment processing arrangements and refund conditions may be described in separate policies.
            </p>
          </article>

          {/* 6. Intellectual Property and Ownership of Work */}
          <article id="section-6" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Intellectual Property and Ownership of Work
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Unless the client and freelancer agree otherwise in writing, ownership and usage rights for commissioned work will be governed by their project agreement and applicable law.
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-4">
              <li>Freelancers must have the right to deliver the work they submit.</li>
              <li>Clients must not claim ownership of third-party materials they have no right to use.</li>
              <li>Rancer.in does not automatically become the owner of work created or sold through the platform.</li>
              <li>No provision of these Terms gives Rancer.in permission to commercially exploit a user&apos;s work without appropriate authorization.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold">
              Users should clearly agree on ownership, licensing, and permitted uses before a project begins.
            </p>
          </article>

          {/* 7. Portfolio and Bio Showcase Policy */}
          <article id="section-7" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                7
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Portfolio and Bio Showcase Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">
              Rancer.in may allow freelancers to showcase their completed projects, skills, and previous work in their public profile, biography, or portfolio.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              By submitting work for public display, the freelancer confirms that they have the necessary rights or permission to showcase it.
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-5">
              <li>Freelancers may display project descriptions, screenshots, demonstrations, or other approved portfolio materials.</li>
              <li>Confidential information, private client data, passwords, API keys, and sensitive source code must not be publicly displayed.</li>
              <li>Client work may be showcased only when permitted by the applicable project agreement or the client&apos;s authorization.</li>
              <li>Rancer.in may remove portfolio material that violates these Terms or another person&apos;s rights.</li>
            </ul>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">Important Showcase Rule:</strong>
                Selling work through Rancer.in does not automatically grant permission to publish that work in a freelancer&apos;s bio or portfolio. Any required client approval must be obtained first.
              </div>
            </div>
          </article>

          {/* 8. Temporary Storage of Sold Source Code and Files */}
          <article id="section-8" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                8
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Temporary Storage of Sold Source Code and Files
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              To support delivery, transaction records, technical troubleshooting, dispute resolution, and platform operations, Rancer.in may temporarily store source code, project files, and other deliverables submitted through the platform.
            </p>
            <p className="text-sm sm:text-base text-slate-700 font-semibold mb-3">
              Our policy is as follows:
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 mb-5">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>Storage period:</strong> Rancer.in intends to retain sold source code and related deliverable files for up to a few months after the relevant sale or project completion, unless a different period is disclosed or agreed upon.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>Purpose:</strong> Stored files may be accessed only as reasonably necessary for delivery, technical support, security, dispute resolution, legal compliance, and other disclosed operational purposes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>No unauthorized reuse:</strong> Rancer.in will not independently use, commercially exploit, resell, redistribute, publish, or incorporate a client&apos;s sold source code into its own products merely because the files are stored on the platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>No ownership claim:</strong> Temporary storage does not transfer ownership of the source code or other intellectual property to Rancer.in.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>Limited access:</strong> Access to stored files should be restricted to authorized personnel and service providers who need it for legitimate operational purposes and are subject to appropriate confidentiality obligations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>Deletion:</strong> After the applicable retention period, Rancer.in intends to delete the stored files or arrange for their deletion, subject to applicable legal obligations, unresolved disputes, security requirements, and necessary backup-retention periods.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span><strong>Backups:</strong> Copies in routine backups may remain for a limited additional period until those backups are overwritten or deleted in the normal course of operations.</span>
              </li>
            </ul>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
              <p>Rancer.in will not promise that every copy can be deleted immediately where technical or legal limitations prevent immediate deletion.</p>
              <p>Users should not submit confidential or sensitive materials unless they understand the platform&apos;s storage and handling practices.</p>
            </div>
          </article>

          {/* 9. Privacy and Data Protection */}
          <article id="section-9" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                9
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Privacy and Data Protection
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Rancer.in may collect and process account information, project details, transaction records, communications, and technical information as necessary to operate the platform.
              </p>
              <p>
                We will handle personal information according to our Privacy Policy and applicable data protection laws.
              </p>
              <p>
                Users should not share passwords, payment credentials, private keys, or other sensitive information through public profiles or project listings.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                A separate Privacy Policy explains what information is collected, why it is collected, who may receive it, how long it is retained, and how users can exercise their applicable privacy rights.
              </p>
            </div>
          </article>

          {/* 10. Prohibited Activities */}
          <article id="section-10" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center font-bold text-sm text-red-600">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Prohibited Activities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-medium mb-3">
              Users must not:
            </p>
            <ul className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-2.5 list-disc list-inside mb-4">
              <li>Engage in fraud, scams, impersonation, or deceptive transactions.</li>
              <li>Upload malicious software or intentionally harmful code.</li>
              <li>Infringe copyrights, trademarks, trade secrets, or other intellectual property rights.</li>
              <li>Share confidential client materials without authorization.</li>
              <li>Harass, threaten, discriminate against, or abuse other users.</li>
              <li>Manipulate reviews, ratings, or transactions.</li>
              <li>Attempt to access accounts, systems, or data without authorization.</li>
              <li>Use the platform for unlawful activities or to evade applicable legal requirements.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Rancer.in may investigate suspected violations and take proportionate action, including removing content, restricting features, suspending accounts, or terminating access where justified.
            </p>
          </article>

          {/* 11. Project Disputes and Complaints */}
          <article id="section-11" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Project Disputes and Complaints
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                If a disagreement arises between a client and freelancer, both parties should attempt to resolve it through clear communication and the platform&apos;s available dispute process.
              </p>
              <p>
                Rancer.in may review relevant project records, submitted deliverables, and communications where reasonably necessary to investigate a dispute.
              </p>
              <p>
                Rancer.in does not guarantee that every dispute will be resolved in favor of either party. Any dispute-resolution process will be subject to applicable law and the platform&apos;s published policies.
              </p>
            </div>
          </article>

          {/* 12. Third-Party Services */}
          <article id="section-12" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                12
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Third-Party Services
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Rancer.in may rely on external providers for hosting, payment processing, file storage, communications, or other technical services.
              </p>
              <p>
                Such providers may process information as necessary to supply their services and subject to applicable contractual and legal requirements.
              </p>
              <p>
                Rancer.in is not responsible for services outside its reasonable control, but this does not exclude responsibilities that cannot legally be excluded.
              </p>
            </div>
          </article>

          {/* 13. Service Availability */}
          <article id="section-13" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                13
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Service Availability
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Rancer.in aims to provide a reliable service but does not guarantee uninterrupted access, error-free operation, or permanent availability of every feature.
              </p>
              <p>
                Maintenance, technical failures, security incidents, or circumstances beyond our reasonable control may temporarily affect the platform.
              </p>
              <p>
                Nothing in these Terms excludes any consumer or other rights that cannot legally be excluded.
              </p>
            </div>
          </article>

          {/* 14. Account Suspension and Termination */}
          <article id="section-14" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                14
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Account Suspension and Termination
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Rancer.in may restrict, suspend, or terminate accounts when reasonably necessary to address fraud, security threats, unlawful activity, or serious violations of these Terms.
              </p>
              <p>
                Users may stop using the platform and request account closure through the available procedures.
              </p>
              <p>
                Account closure does not automatically remove records that must lawfully be retained or files still subject to a legitimate retention requirement.
              </p>
            </div>
          </article>

          {/* 15. Limitation of Liability */}
          <article id="section-15" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                15
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Limitation of Liability
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                To the extent permitted by applicable law, Rancer.in will not be liable for indirect or consequential losses arising from platform interruptions, user misconduct, or disputes between clients and freelancers.
              </p>
              <p>
                Nothing in these Terms excludes liability for fraud, intentional misconduct, or any other liability that applicable law does not permit us to exclude or limit.
              </p>
            </div>
          </article>

          {/* 16. Changes to These Terms */}
          <article id="section-16" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                16
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Changes to These Terms
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Rancer.in may update these Terms to reflect changes in its services, policies, security practices, or legal obligations.
              </p>
              <p>
                The updated version will display a revised effective date. Where required by law, Rancer.in will provide notice or obtain renewed consent before implementing material changes.
              </p>
            </div>
          </article>

          {/* 17. Governing Law */}
          <article id="section-17" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-600">
                17
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Governing Law
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                These Terms will be governed by the laws applicable to the legal entity operating Rancer.in, subject to mandatory consumer protection and other applicable legal requirements.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                The operator&apos;s legal name, registered address, and any applicable jurisdiction-specific details are published on the website.
              </p>
            </div>
          </article>

          {/* 18. Contact Information */}
          <article id="section-18" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
                18
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Contact Information
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              For questions, complaints, intellectual property concerns, privacy requests, or other matters relating to these Terms, please contact:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Official Website
                </span>
                <a
                  href="https://rancer.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-medium"
                >
                  https://rancer.in
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Support & Legal Email
                </span>
                <a
                  href="mailto:rooban@rancer.in"
                  className="text-blue-400 hover:underline font-medium"
                >
                  rooban@rancer.in
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Platform Operator
                </span>
                <span className="text-slate-200 font-medium">
                  Rancer Technologies
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Direct Line
                </span>
                <a
                  href="tel:+919600683605"
                  className="text-blue-400 hover:underline font-medium"
                >
                  +91 96006 83605
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
              By using Rancer.in, you acknowledge that you have read and understood these Terms of Service and agree to comply with them.
            </div>
          </article>

        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Have questions about our Terms or Platform?
            </h3>
            <p className="text-sm text-slate-600">
              Our team is available to assist you with any legal, project, or operational inquiries.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-sm flex-shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </div>
  );
}
