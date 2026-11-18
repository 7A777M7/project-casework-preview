(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`cities`,label:`Cities & Municipalities`,shortLabel:`Cities & Municipalities`,icon:`building-2`,eyebrow:`Entitlement Cities, Charter Municipalities & Civic Departments`,headline:`End-to-end intake, drawdown reconciliation, and audit defense across every city hall department.`,summary:`Municipalities juggle HUD entitlement awards, state housing allocations, capital infrastructure reimbursements, and General Fund relief programs across siloed departments. Project Casework and DocuShield unify packet assembly and pre-payout forensic verification on city workstations.`,statLabel:`5 Core Municipal Divisions Covered`,entities:[{name:`Housing & Community Development Departments`,grantsManaged:`HUD CDBG, HOME, PLHA, Inclusionary Housing Trust Funds`,focus:`LMI household intake, CHDO/subrecipient RFR desk reviews, and CAPER closeouts`},{name:`Finance, Controller & City Treasury`,grantsManaged:`2 CFR 200 Single Audit Ledgers, General Fund & Warrant Disbursements`,focus:`Pre-warrant invoice verification, general ledger tie-outs, and duplicate-payment prevention`},{name:`Public Works & Capital Improvements`,grantsManaged:`DOT Infrastructure, CDBG Public Facilities, FEMA Public Assistance`,focus:`Contractor progress billings, prevailing-wage Davis-Bacon certified payrolls, and change-order audits`},{name:`Economic Development & Workforce Divisions`,grantsManaged:`CDBG Microenterprise,Facade Grants, Municipal Small-Business Relief`,focus:`Tax return & payroll verification, UEI/SAM checks, and job-creation/retention documentation`},{name:`Human & Social Services Departments`,grantsManaged:`ESG, Emergency Rental & Utility Arrears, Senior & Youth Services`,focus:`Rapid crisis eligibility packets, altered lease/bill detection, and survivor-safe offline storage`}],challenges:[`Decentralized spreadsheets across Housing, Public Works, and Finance create blind spots where a vendor invoice can be billed twice to separate city funds.`,`Strict HUD CDBG 60-day 1.5x expenditure timeliness deadlines force staff to rush high-volume reimbursement approvals with minimal forensic review.`,`Manual verification of 60- to 90-day bank statements, consecutive paystubs, and landlord ledgers consumes 3–5 hours per household or microenterprise file.`,`Annual Single Audit preparation triggers weeks of retroactive file reconstruction across city divisions and funded community nonprofits.`],regulations:[`24 CFR Part 570 (HUD CDBG Entitlement) — National Objectives (§ 570.208), Eligible Activities, and 1.5x Timeliness Standard (§ 570.902)`,`24 CFR Part 92 (HOME Investment Partnerships) & 24 CFR Part 576 (Emergency Solutions Grants — ESG)`,`2 CFR Part 200 Uniform Guidance — Cost Principles (Subpart E), Procurement (§§ 200.318–320), and Single Audit (Subpart F)`,`Davis-Bacon & Related Acts (40 U.S.C. 3141) certified payroll verification and municipal charter warrant controls`],automation:[`Assembles standardized LMI beneficiary and contractor reimbursement packets automatically on city desktops with zero cloud uploads.`,`Forensically scans vendor invoices, bank statements, paystubs, and leases for PDF metadata edits, font-metric shifts, and altered balances before treasury payout.`,`Cross-checks invoice numbers, vendor EINs, and property addresses across Housing, Public Works, and General Fund ledgers to block double-dipping.`,`Generates one-click HUD IDIS PR03/PR26 support binders and City Council executive audit summaries with linked evidentiary trails.`]},{id:`counties`,label:`Counties & Regional Authorities`,shortLabel:`Counties & Regional`,icon:`landmark`,eyebrow:`Urban Counties, PHAs, Continuums of Care & Joint Powers Authorities`,headline:`Unified fiscal oversight and subrecipient risk monitoring at countywide and multi-jurisdictional scale.`,summary:`County administrative offices, Health & Human Services Agencies, Public Housing Authorities, and regional JPAs oversee dozens of pass-through contracts simultaneously. Our local suite standardizes compliance across every regional partner without centralizing sensitive constituent PII in vendor clouds.`,statLabel:`6 Regional & County Governance Bodies`,entities:[{name:`County Executive / Chief Administrative Offices (CEO/CAO)`,grantsManaged:`ARPA/SLFRF Closeouts, Voter-Approved Tax Measures, Cross-Agency Fiscal Oversight`,focus:`Portfolio burn-rate tracking, Board of Supervisors reporting, and countywide subrecipient risk scoring`},{name:`Health & Human Services Agencies (HHSA / DPSS)`,grantsManaged:`CSBG, CalWORKs Housing Support, Behavioral Health (MHSA/BHSA), Child Welfare`,focus:`HIPAA/WIC 4514 protected intake packets, provider cost-reimbursement desk audits, and subsidy integrity`},{name:`Public Housing Authorities (PHAs)`,grantsManaged:`Section 8 HCV (24 CFR 982), Public Housing Operating/Capital, MTW, VASH`,focus:`14-day portability turnarounds, annual/interim recertifications, RFTA lease packets, and SEMAP quality control`},{name:`Continuums of Care (CoCs) & Collaborative Applicants`,grantsManaged:`HUD CoC Program (24 CFR 578), State HHAP, Encampment Resolution Funds`,focus:`Rapid rehousing rental calculations, master-lease ledger audits, and VAWA-compliant offline verification`},{name:`Regional Transit & Infrastructure Agencies`,grantsManaged:`FTA Urbanized Area Formula (49 U.S.C. 5307), DOT RAISE, State TIRCP`,focus:`Sub-consultant billing verification, split-purchase procurement detection, and grant-to-ledger reconciliation`},{name:`Joint Powers Authorities (JPAs) & Councils of Governments (COGs)`,grantsManaged:`Regional Housing Trust Funds, Multi-City Homelessness & Climate Consortia`,focus:`Standardized multi-city subrecipient RFR validation and consolidated Single Audit readiness`}],challenges:[`Managing 40 to 150+ subrecipient contracts across county departments makes 100% manual desk review impossible—leaving 90% of invoices unchecked until post-payout sampling.`,`Same non-profit providers frequently receive concurrent awards from the County HHSA, CoC, PHA, and member cities, heightening overlapping payroll and duplicate-billing risk.`,`Strict HIPAA, WIC § 4514/5328, and VAWA confidentiality rules prohibit uploading behavioral health, disability, and domestic violence records to third-party SaaS clouds.`,`Voucher portability and rapid-rehousing lease-ups stall when eligibility workers spend hours manually tallying multi-account bank deposits and gig-economy paystubs.`],regulations:[`2 CFR § 200.332 — Requirements for Pass-Through Entities (pre-award risk evaluation, monitoring, and Corrective Action Plans)`,`24 CFR Part 982 (Section 8 HCV / SEMAP Indicators) & 24 CFR Part 578 (Continuum of Care Program)`,`HIPAA Privacy/Security Rules (45 CFR Parts 160/164), VAWA Confidentiality (34 U.S.C. 12291), and CA WIC §§ 4514 & 5328`,`FTA Master Agreement & 2 CFR § 200.430 Time-and-Effort Personnel Allocation Standards`],automation:[`Validates 100% of subrecipient Requests for Reimbursement (RFRs) against approved line-item budgets and indirect cost caps prior to County Auditor warrant release.`,`Detects overlapping FTE timesheet hours and duplicate vendor invoices submitted across County Measure, CoC, and City CDBG portfolios.`,`Accelerates PHA Section 8 intake and recertifications with instant local income/asset packet assembly and altered paystub/statement detection.`,`Tracks subrecipient compliance health scores, LMI beneficiary targets, and Corrective Action Plan (CAP) deadlines in one audit-ready local workspace.`]},{id:`state`,label:`State Pass-Through & Entitlements`,shortLabel:`State Pass-Throughs`,icon:`shield-check`,eyebrow:`State Housing, Infrastructure, Disaster Recovery & Non-Entitlement UGLG Programs`,headline:`Standardized pass-through compliance from state administering departments down to rural UGLGs.`,summary:`State administering agencies distribute billions in federal pass-through and state block funds to hundreds of local governments, tribes, and developers. DocuShield enforces uniform evidentiary and anti-fraud controls across every downstream grantee without requiring statewide cloud PII repositories.`,statLabel:`Statewide Formula, Block & DR Coverage`,entities:[{name:`State Housing & Community Development Departments`,grantsManaged:`State CDBG Non-Entitlement, HOME, PLHA, Homekey, LIHTC / CTCAC Oversight`,focus:`Standardizing grantee drawdown packets, long-term affordability monitoring, and Form 8823 defense`},{name:`Disaster Recovery & Emergency Management Offices`,grantsManaged:`HUD CDBG-DR, CDBG-MIT, FEMA Public Assistance (44 CFR Part 206) & Hazard Mitigation`,focus:`Duplication of Benefits (DOB) verification under Stafford Act § 312 and rapid contractor invoice forensics`},{name:`State Infrastructure, Energy & Weatherization Administrators`,grantsManaged:`LIHEAP, DOE WAP, Cap-and-Trade AHSC/TIRCP, Clean Water/Drinking Water SRFs`,focus:`Sub-grantee expenditure milestone verification, weatherization contractor invoice checks, and 2 CFR 200 audits`},{name:`Non-Entitlement Units of General Local Government (UGLGs)`,grantsManaged:`Small-City & Rural County State CDBG, HOME, and Emergency Relief Allocations`,focus:`Turnkey compliance checklists for lean rural staff without dedicated internal audit departments`}],challenges:[`Disaster recovery (CDBG-DR / FEMA PA) demands rapid fund deployment while Stafford Act § 312 imposes zero tolerance for Duplication of Benefits across insurance, SBA, and grant payouts.`,`Small non-entitlement cities and rural counties often lack specialized grant compliance staff, leading to incomplete beneficiary files and avoidable state monitoring findings.`,`Remote desk audits of multi-million-dollar capital and housing awards bog down state grant representatives when PDFs arrive unindexed and unverified.`,`Federal OIG audits hold the State pass-through administrator financially liable for disallowed downstream UGLG and developer expenditures.`],regulations:[`24 CFR Part 570 Subpart I (State CDBG Non-Entitlement Program) & Federal Register CDBG-DR Action Plan Waivers`,`Robert T. Stafford Disaster Relief Act § 312 (42 U.S.C. 5155) — Mandatory Duplication of Benefits (DOB) Prevention`,`2 CFR §§ 200.331–200.333 Pass-Through Oversight, Fixed Amount Subawards, and Federal Audit Clearinghouse Closeout`,`42 U.S.C. 8621 et seq. (LIHEAP Statute) & IRC § 42 / CTCAC Compliance Monitoring Regulations`],automation:[`Gives small UGLGs and regional grantees turnkey pre-submission validators so drawdown packets arrive 100% complete and rule-checked on the first submission.`,`Automates Stafford Act Duplication of Benefits cross-checks across insurance proceeds, SBA loans, FEMA awards, and state housing reconstruction grants.`,`Flags fabricated contractor receipts, altered lien waivers, and manipulated bank proofs locally before state disbursement.`,`Compiles standardized Federal Audit Clearinghouse, HUD DRGR/IDIS, and state legislative oversight binders in one click.`]},{id:`nonprofits`,label:`Non-Profits & Subrecipients`,shortLabel:`Non-Profits & Subrecipients`,icon:`heart-handshake`,eyebrow:`501(c)(3) Direct-Service Agencies, CHDOs, Shelters, Workforce Boards & Legal Clinics`,headline:`Spend time serving families—not wrestling grant spreadsheets or fearing Single Audit clawbacks.`,summary:`Community nonprofits blend 5 to 20 restricted public and philanthropic funding streams to keep doors open. Project Casework makes intake effortless for front-line caseworkers, while DocuShield protects your agency from altered applicant documents and costly grant disallowances.`,statLabel:`162 CA Nonprofits Mapped Across 8 Sectors`,entities:[{name:`501(c)(3) Direct-Service & Community Action Agencies`,grantsManaged:`CSBG, LIHEAP, CDBG Public Services, EFSP, United Way & Foundation Grants`,focus:`Multi-program client intake, 30-day crisis income proofs, and clean cost-allocation documentation`},{name:`Community Housing Development Organizations (CHDOs)`,grantsManaged:`HOME CHDO Set-Aside (24 CFR 92.300), LIHTC, Affordable Housing Trust Funds`,focus:`Tenant initial income certifications, developer draw schedules, and 15- to 55-year compliance files`},{name:`Homelessness, Domestic Violence & Rapid-Rehousing Providers`,grantsManaged:`HUD ESG, CoC Rapid Rehousing, VAWA/FVPSA, CalWORKs HSP, County Measure Funds`,focus:`Air-gapped survivor confidentiality, landlord W-9/lease verification, and 30%-of-income rent worksheets`},{name:`Workforce Development Boards & Child Care Resource Agencies`,grantsManaged:`WIOA Title I Youth/Adult/Dislocated Worker, CCDF Child Care Subsidies`,focus:`Participant eligibility checklists, supportive-service stipends, and training provider invoice verification`},{name:`Civil Legal Aid & Eviction Defense Clinics`,grantsManaged:`Legal Services Corporation (LSC — 45 CFR 1611), State Bar IOLTA, Right-to-Counsel Grants`,focus:`Attorney-client privileged financial screening and forensic inspection of disputed landlord rent ledgers`}],challenges:[`Blending CDBG, ESG, State HHAP, and foundation grants requires airtight cost boundaries so no client rental check or staff hour is accidentally billed to two funders.`,`Sophisticated online fake-paystub and bank-statement generators put front-line caseworkers in an impossible position during urgent eviction or utility-shutoff intakes.`,`Crossing the $1,000,000 federal expenditure threshold triggers mandatory 2 CFR 200 Subpart F Single Audits that overwhelm lean nonprofit finance teams.`,`Uploading domestic violence survivor records or privileged legal aid files to commercial cloud OCR tools violates VAWA, LSC, and board privacy mandates.`],regulations:[`2 CFR Part 200 Subpart E Cost Principles — Direct vs. Indirect Costs (§ 200.412–414) & Personnel Time Distribution (§ 200.430)`,`24 CFR § 92.300 (HOME CHDO Qualification & Underwriting) & 24 CFR § 576.400 (ESG Coordinated Assessment & Rent Reasonableness)`,`45 CFR Part 1611 (LSC Financial Eligibility) & State Bar IOLTA Trust Accounting / Attorney-Client Privilege`,`VAWA Non-Disclosure Mandates (34 U.S.C. 12291(b)(2)) prohibiting external PII/personally identifying cloud storage`],automation:[`Guides caseworkers through clear, funder-specific intake checklists and assembles clean PDF case packets in seconds.`,`Screens applicant paystubs, bank statements, utility shutoff notices, and landlord leases locally for digital tampering—protecting nonprofit grant funds.`,`Pre-validates monthly Requests for Reimbursement (RFRs) before submission to City or County monitors so reimbursements get paid fast without rejections.`,`Maintains 100% air-gapped client privacy on local agency PCs—satisfying VAWA, HIPAA, and legal privilege on day one.`]}],t=[{id:`federal`,label:`Federal Entitlement, Formula & Competitive Grants`,shortLabel:`Federal Grants (2 CFR 200 / HUD)`,icon:`scale`,eyebrow:`HUD, FEMA, DOT, HHS & Federal Pass-Through Awards`,headline:`Complete statutory compliance from federal Notice of Funding Opportunity to 5-year closeout retention.`,summary:`Every federal award—whether direct entitlement or state/county pass-through—carries strict Uniform Guidance cost principles, national objective documentation, and Single Audit scrutiny. DocuShield enforces federal rules before a single drawdown hits IDIS, DRGR, or PMS.`,statBadge:`2 CFR Part 200 + 24 CFR 570 / 92 / 576 / 982`,programs:[{code:`HUD CDBG`,name:`Community Development Block Grants`,authority:`24 CFR Part 570`,useCase:`LMI housing rehab, public services (15% cap), infrastructure, microenterprise, 1.5x timeliness tracking`},{code:`HUD HOME`,name:`HOME Investment Partnerships`,authority:`24 CFR Part 92`,useCase:`CHDO 15% set-aside, affordable rental construction, TBRA tenant vouchers, long-term rent/income limits`},{code:`HUD ESG & CoC`,name:`Emergency Solutions & Continuum of Care`,authority:`24 CFR Parts 576 & 578`,useCase:`Street outreach, shelter operations, rapid rehousing rent reasonableness, VAWA-safe homelessness prevention`},{code:`Section 8 HCV`,name:`Housing Choice Vouchers & VASH`,authority:`24 CFR Part 982`,useCase:`Initial income/asset verification, EIV discrepancy resolution, RFTA packets, SEMAP quality control`},{code:`FEMA PA & CDBG-DR`,name:`Disaster Recovery & Public Assistance`,authority:`44 CFR Part 206 • Stafford Act § 312`,useCase:`Force-account labor/equipment logs, contractor invoice forensics, Duplication of Benefits (DOB) checks`},{code:`DOT / WIOA / CSBG`,name:`Infrastructure & Federal Pass-Throughs`,authority:`2 CFR Part 200 Uniform Guidance`,useCase:`Procurement competition logs (§ 200.320), multi-grant payroll allocation (§ 200.430), Single Audit binders`}],lifecycleCoverage:[{stage:`01. Intake & Pre-Award`,detail:`UEI/SAM status, 2 CFR 200.332 risk scoring, LMI & Stafford Act DOB intake screening`},{stage:`02. Budgeting & Caps`,detail:`15% CDBG public service cap, 20% admin cap, 10% de minimis or NICRA indirect enforcement`},{stage:`03. Pre-Payout Verification`,detail:`Forensic check on invoices/paystubs/leases + ACH/check proof of payment tie-out`},{stage:`04. IDIS & Single Audit Closeout`,detail:`PR03/PR26 reconciliation, SEFA tie-out, and indexed 5-year evidentiary archive`}],challenges:[`Strict statutory caps (15% CDBG public services, 20% planning/admin, 15% HOME CHDO reserve) and HUD May 2 timeliness tests leave zero room for accounting drift.`,`Federal OIG auditors routinely disallow entire cost categories when multi-funded staff lack compliant 2 CFR § 200.430 time-and-effort records.`,`Duplication of Benefits across federal relief streams triggers mandatory treasury recapture years after projects close.`],regulations:[`2 CFR Part 200 Subparts D, E & F — Internal Controls (§ 200.303), Procurement (§ 200.320), Cost Allocability (§ 200.405), Single Audit (§ 200.501)`,`24 CFR § 570.208 (CDBG National Objectives), § 570.506 (Recordkeeping), and § 570.902 (Timeliness)`,`Stafford Act § 312 Duplication of Benefits & 24 CFR § 982.516 PHA Family Income Reexaminations`],automation:[`Maps every RFR line item directly to eligible CFR citations, budget caps, and national objective codes before voucher generation.`,`Flags altered applicant income proofs, duplicate vendor invoices, and split-purchase procurement violations locally in seconds.`,`Exports audit-ready HUD IDIS, CAPER, and Single Audit SEFA evidentiary packages with tamper-evident document hashes.`]},{id:`state_grants`,label:`State Block & Categorical Grants`,shortLabel:`State Block & Categorical`,icon:`building`,eyebrow:`State Housing Trust Funds, Homelessness Grants, Cap-and-Trade & Behavioral Health`,headline:`Keep pace with fast-moving state obligation milestones and multi-agency expenditure audits.`,summary:`State categorical awards combine aggressive obligation/expenditure cliffs with specialized reporting templates across housing, homelessness, climate transit, and behavioral health. Our local suite aligns front-line casework and subrecipient drawdowns to exact state contract guidelines.`,statBadge:`PLHA • HHAP • ERF • AHSC/TIRCP • MHSA/BHSA`,programs:[{code:`PLHA & Homekey`,name:`State Housing Trust & Acquisition Grants`,authority:`CA HCD Guidelines • SB 2 / AB 140`,useCase:`Permanent supportive housing operating subsidies, rehab drawdowns, AMI tenant eligibility files`},{code:`HHAP & ERF`,name:`Homelessness Prevention & Encampment Resolution`,authority:`Cal ICH Statutory Mandates`,useCase:`Rapid interim/permanent housing placements, landlord incentive verification, strict obligation cliffs`},{code:`AHSC & TIRCP`,name:`Climate, Cap-and-Trade & Transit Allocations`,authority:`SGC / CalSTA Guidelines`,useCase:`Affordable housing + sustainable transit capital invoices, milestone billing, sub-contractor lien checks`},{code:`MHSA / BHSA`,name:`Behavioral Health & Supportive Housing`,authority:`CA WIC §§ 5328 & 5892`,useCase:`HIPAA/WIC-protected housing & clinical wrap-around cost reconciliation, county cost-report defense`}],lifecycleCoverage:[{stage:`01. Allocation & Milestones`,detail:`Tracks 50% / 100% statutory obligation and expenditure deadlines across rounds`},{stage:`02. Sub-Grantee Contracting`,detail:`Aligns provider budgets to eligible state cost categories and Youth/Prevention set-asides`},{stage:`03. Monthly Desk Verification`,detail:`Verifies rent ledgers, motel invoices, and capital progress draws offline`},{stage:`04. State Controller Audit Prep`,detail:`Compiles clean fiscal & outcome trails for State Auditor and HCD/Cal ICH reviews`}],challenges:[`Overlapping multi-round state awards (e.g., HHAP Rounds 3, 4, and 5 running concurrently) create severe expenditure-tracking and cost-shifting risks.`,`Strict statutory set-asides (such as Youth Set-Asides or behavioral health housing buckets) fail audits when intake files lack standardized eligibility proofs.`,`State Controller and Bureau of State Audits reviews penalize jurisdictions when rapid-response emergency payouts lack verified landlord or vendor documentation.`],regulations:[`State HCD Standard Agreement General Terms, AMI Income Calculation Rules, and Annual Progress Report (APR) Mandates`,`Cal ICH HHAP/ERF Fiscal Obligation & Expenditure Timeliness Benchmarks and HMIS/Outcome Reconciliation`,`California Welfare & Institutions Code (WIC) §§ 4514 & 5328 Strict Confidentiality & County Behavioral Health Cost Reporting`],automation:[`Separates concurrent funding rounds cleanly with real-time burn-rate alerts well ahead of state recapture cliffs.`,`Verifies landlord ownership/lease packets, motel vouchers, and contractor progress billings locally for tampering or duplicate billing.`,`Protects confidential behavioral health and disability records 100% on-device while producing clean fiscal summaries for state monitors.`]},{id:`local_funds`,label:`County, Municipal & Dedicated Local Funds`,shortLabel:`County, City & Local Funds`,icon:`wallet`,eyebrow:`General Funds, Voter-Approved Ballot Measures, Housing Trusts & Philanthropic Pass-Throughs`,headline:`Give taxpayers, oversight commissions, and foundation boards ironclad proof for every local dollar.`,summary:`Local General Fund appropriations, voter-approved sales/parcel tax measures, municipal inclusionary housing trusts, and philanthropic partnerships face intense public, media, and Citizens’ Oversight Committee scrutiny. DocuShield brings federal-grade financial controls to local flexible funds without slowing relief.`,statBadge:`General Fund • Voter Measures • Housing Trusts • Foundations`,programs:[{code:`GENERAL FUND`,name:`City & County General Fund Human Services`,authority:`Municipal Charter & Annual Budget Ordinance`,useCase:`Eviction defense, emergency rent/utility relief, guaranteed income & senior nutrition contracts`},{code:`VOTER MEASURES`,name:`Dedicated Sales, Transfer & Parcel Tax Measures`,authority:`Ballot Ordinance & Citizens’ Oversight Audits`,useCase:`Homelessness services, affordable housing production, mental health & transit measure disbursements`},{code:`HOUSING TRUSTS`,name:`Municipal Inclusionary & Linkage Fee Trusts`,authority:`Local Inclusionary Zoning & Trust Covenants`,useCase:`Gap financing draws, down-payment assistance underwriting, covenant compliance recertifications`},{code:`PHILANTHROPIC`,name:`Foundation & Public-Private Pass-Throughs`,authority:`Restricted Grant Agreements & IRS 501(c)(3) Rules`,useCase:`Flexible client barrier-removal funds paired seamlessly alongside restricted federal/state awards`}],lifecycleCoverage:[{stage:`01. Flexible Fund Guardrails`,detail:`Pairs rapid local intake speed with automated identity, residency, and lease forensics`},{stage:`02. Braided Funding Control`,detail:`Tracks braided local + federal dollars so local match never double-counts federal draws`},{stage:`03. Warrant & Check Integrity`,detail:`Screens 100% of direct-assistance requests and nonprofit invoices before treasury release`},{stage:`04. Public Oversight Reporting`,detail:`Generates Board, Council, and Citizens’ Oversight Commission transparency reports`}],challenges:[`Local General Fund and ballot-measure relief programs are prime targets for doctored leases, fabricated W-9s, and synthetic PDF bank statements when speed is prioritized.`,`When local measure dollars serve as non-federal match for HUD HOME or ESG grants, poor documentation jeopardizes both the local fund and the federal award.`,`Citizens’ Oversight Committees, Grand Juries, and investigative audits demand line-item proof that voter-approved tax dollars reached verified local households.`],regulations:[`Municipal & County Charter Controller Warrant Verification Rules and Local False Claims Ordinances`,`Voter-Approved Measure Expenditure Restrictions, Administrative Cost Caps, and Independent Citizens’ Oversight Audits`,`2 CFR § 200.306 Cost Sharing / Matching Requirements (when local trust or General Fund dollars match federal grants)`],automation:[`Catches edited residential leases, fake utility bills, and altered bank statements in seconds—letting cities disburse fast without fraud losses.`,`Prevents vendors and subrecipients from billing local ballot-measure funds for expenses already reimbursed by federal CDBG or state grants.`,`Produces executive-ready Council, Board of Supervisors, and Citizens’ Oversight Committee reports backed by complete local evidentiary trails.`]}],n=[{stageNumber:`STAGE 01`,shortTitle:`Pre-Award & Intake`,title:`Pre-Award Risk Assessment & Intake Eligibility`,cfrCitation:`2 CFR § 200.332(b) • 24 CFR § 570.208`,summary:`Before obligating funds or approving household assistance, pass-through entities must evaluate subrecipient fiscal risk and verify beneficiary Low-to-Moderate Income (LMI) or categorical eligibility.`,traditionalBottleneck:`Risk questionnaires sit in static PDFs while intake workers manually calculate 60–90 days of mixed paystubs, gig deposits, and self-certifications across unindexed email attachments.`,docuShieldControl:`Project Casework standardizes pre-award risk scoring and household LMI worksheets automatically, while DocuShield screens submitted income, tax, and identity PDFs locally for tampering prior to enrollment.`,keyDeliverables:[`Scored 2 CFR § 200.332(b) Subrecipient Risk Tier & Monitoring Schedule`,`Verified UEI / SAM.gov Exclusion & Debarment Check Record`,`Standardized LMI Income/Asset Worksheet & Forensic Document Seal`]},{stageNumber:`STAGE 02`,shortTitle:`Budget Controls`,title:`Subrecipient Agreements & Line-Item Budget Controls`,cfrCitation:`2 CFR § 200.332(a) • 24 CFR § 570.503`,summary:`Legally binding subrecipient agreements must lock in Federal Award Identification (FAIN), Assistance Listing numbers, eligible cost categories, statutory caps, and approved indirect cost rates.`,traditionalBottleneck:`Executed contract budgets are re-keyed manually into disconnected Excel trackers, allowing unapproved budget shifts, exceeded 15% public-service caps, or misapplied indirect rates.`,docuShieldControl:`Locks approved line-item budgets, indirect cost caps (10% de minimis or NICRA), and statutory timeliness milestones directly into the local validation ledger so out-of-scope charges cannot clear.`,keyDeliverables:[`Line-Item Budget Ledger Mapped to 2 CFR 200 / 24 CFR 570 Eligible Codes`,`Automated Indirect Rate & Administrative Cap Guardrails`,`Braided Match & Duplication-of-Benefits Baseline Registry`]},{stageNumber:`STAGE 03`,shortTitle:`Reimbursement Audits`,title:`Desk Audits & Reimbursement Verification`,cfrCitation:`2 CFR §§ 200.305 & 200.403 • 24 CFR § 570.506`,summary:`Every Request for Reimbursement (RFR) requires proof that costs are allowable, allocable, reasonable, incurred within the period of performance, and backed by source invoices and proof of payment.`,traditionalBottleneck:`Overwhelmed grant analysts only sample 5%–10% of receipts months after payment, missing altered vendor invoices, math errors, and duplicate bills submitted across city and county grants.`,docuShieldControl:`Performs continuous 100% pre-payout reconciliation—tying every RFR line item to general ledger entries, cancelled checks/ACH confirmations, compliant timesheets, and forensic PDF integrity checks.`,keyDeliverables:[`100% Reconciled Request for Reimbursement (RFR) Clearance Packet`,`Cross-Grant Duplicate Invoice & Split-Purchase Screening Log`,`Forensic Authenticity Report on Invoices, Leases & Paystubs`]},{stageNumber:`STAGE 04`,shortTitle:`CAPs & Intervention`,title:`Early Intervention & Corrective Action Plans (CAPs)`,cfrCitation:`2 CFR §§ 200.332(d)–(f) & 200.339 • 24 CFR § 570.902`,summary:`Pass-through administrators must monitor expenditure timeliness (including HUD’s May 2 CDBG 1.5x test), issue written findings promptly when deficiencies arise, and verify Corrective Action Plan completion.`,traditionalBottleneck:`Underspending and documentation gaps go unnoticed until year-end CAPER or Single Audit season—too late to reallocate stalled funds or cure missing beneficiary records.`,docuShieldControl:`Flags lagging burn rates, incomplete beneficiary documentation, and recurring RFR exceptions in real time—generating structured Corrective Action Plans with tracked cure deadlines.`,keyDeliverables:[`Automated Timeliness & Burn-Rate Early Warning Alerts`,`Structured Deficiency Notice & Corrective Action Plan (CAP) Tracker`,`Verified Evidentiary Cure Log Prior to Management Decision Deadlines`]},{stageNumber:`STAGE 05`,shortTitle:`Audit & Closeout`,title:`Single Audit & HUD IDIS Closeout Readiness`,cfrCitation:`2 CFR Part 200 Subpart F • 2 CFR § 200.344`,summary:`At fiscal year-end and award closeout, jurisdictions must reconcile IDIS/DRGR drawdowns to general ledgers, substantiate National Objective attainment, and pass independent Single Audits without questioned costs.`,traditionalBottleneck:`Staff spend 3 to 6 weeks pulling paper folders, redacting PII manually, and chasing subrecipients for missing cancelled checks when external CPA or HUD OIG auditors arrive.`,docuShieldControl:`Compiles indexed, tamper-evident closeout binders in one click—linking every disbursed dollar to its intake eligibility proof, forensic verification log, procurement record, and payment trail.`,keyDeliverables:[`HUD IDIS PR03 / PR26 & CAPER Reconciled Evidentiary Binder`,`2 CFR 200 Subpart F Single Audit & SEFA Substantiation Package`,`5-Year Air-Gapped Local Retention Archive with Hash Chain`]}],r=[{id:`payroll-allocations`,rank:`FINDING 01`,title:`Unsupported Payroll & Time-and-Effort Allocations`,cfrReference:`2 CFR § 200.430 (Compensation — Personal Services)`,exposureLevel:`High Repayment Exposure`,mechanismOfFailure:`Charging staff salaries to federal or state grants using pre-set budget percentages rather than contemporaneous time-distribution records reflecting actual after-the-fact activity—or billing >100% combined FTE across overlapping awards.`,realWorldScenario:`A housing caseworker’s salary is billed 50% to City CDBG Public Services, 40% to County ESG Rapid Rehousing, and 25% to a State HHAP contract (115% total FTE) during the same biweekly pay period without signed activity logs.`,automatedPrevention:`DocuShield reconciles payroll registers and timesheet hours across all active grant ledgers per employee ID, blocking >100% FTE overlaps and flagging unsubstantiated budget-estimate charges before RFR approval.`},{id:`duplicate-billing`,rank:`FINDING 02`,title:`Duplicate Invoice Submissions ("Double-Dipping")`,cfrReference:`2 CFR §§ 200.403 & 200.405 • Stafford Act § 312`,exposureLevel:`Zero-Tolerance Clawback`,mechanismOfFailure:`Submitting the same vendor invoice, motel voucher batch, utility arrears bill, or contractor progress draw to two separate funding buckets (e.g., City CDBG and County Measure funds) where siloed reviewers cannot see each other’s ledgers.`,realWorldScenario:`An emergency shelter provider submits Invoice #INV-88412 ($18,450 for motel vouchers) to the City’s CDBG-CV closeout desk in October and accidentally includes the identical PDF in November’s County Measure H reimbursement packet.`,automatedPrevention:`Fingerprints every invoice number, vendor EIN, service date range, dollar figure, and document perceptual hash across all municipal, county, state, and federal ledgers—halting duplicate disbursements prior to payout.`},{id:`lmi-beneficiary-files`,rank:`FINDING 03`,title:`Unverified or Altered LMI Beneficiary Eligibility Files`,cfrReference:`24 CFR § 570.208(a) & § 570.506 • 24 CFR § 982.516`,exposureLevel:`National Objective Disallowance`,mechanismOfFailure:`Disbursing rental, rehab, or microenterprise funds with missing consecutive income proofs, outdated AMI limits, or digitally edited PDF bank statements and paystubs that mask above-limit household income.`,realWorldScenario:`During a HUD monitoring visit, 4 sampled housing rehabilitation files lack complete 60-day asset statements, and 1 emergency rental packet contains a PDF bank statement edited in an online template tool—jeopardizing the entire activity’s LMI qualification.`,automatedPrevention:`Project Casework enforces complete source-documentation checklists by household size and current HUD AMI tables, while DocuShield inspects PDF object streams, font metrics, and revision metadata locally to catch altered proofs.`},{id:`procurement-records`,rank:`FINDING 04`,title:`Missing Competition & Split-Purchase Procurement Violations`,cfrReference:`2 CFR §§ 200.318–200.320 (Procurement Standards)`,exposureLevel:`100% Contract Cost Questioned`,mechanismOfFailure:`Awarding vendor contracts above micro-purchase ($10,000) or simplified acquisition thresholds without documented price/rate quotations, sole-source justification, or SAM.gov debarment checks—or splitting one purchase into sequential smaller invoices.`,realWorldScenario:`A subrecipient submits three separate $9,850 facility rehab invoices dated within 48 hours from the same contractor ($29,550 total) to bypass the $10,000 micro-purchase competitive quote threshold.`,automatedPrevention:`Scans cumulative vendor spend velocity, sequential invoice numbering, and split-transaction patterns against 2 CFR § 200.320 thresholds, requiring attached 3-quote competition logs and SAM.gov clearance before drawdown.`},{id:`ledger-discrepancies`,rank:`FINDING 05`,title:`General Ledger-to-Receipt & Proof-of-Payment Discrepancies`,cfrReference:`2 CFR § 200.302 (Financial Management) & § 200.305`,exposureLevel:`Single Audit Material Weakness`,mechanismOfFailure:`Reimbursement cover sheets fail to reconcile to underlying general ledger cost centers, include expenses incurred outside the contract period of performance, or lack cleared ACH/check proof that vendors were actually paid.`,realWorldScenario:`A quarterly RFR claims $64,200 in direct program supplies, but the general ledger export totals $58,900 due to voided vendor credits and an October invoice billed against a grant period that expired September 30.`,automatedPrevention:`Automates three-way tie-out between the RFR summary, general ledger cost-center export, and cleared bank/ACH records—automatically flagging out-of-period service dates and uncredited vendor adjustments.`}],i=[{metric:`Verification Coverage Scope`,manualApproach:`5%–10% random sample pulled 6 to 14 months after funds have already left treasury`,docuShieldApproach:`100% of invoices, paystubs, bank statements, leases, and ledgers verified prior to payout`,impactDelta:`10x–20x Coverage`},{metric:`Average Desk-Review Time per RFR / Case Packet`,manualApproach:`3.8 to 4.5 hours of manual PDF sorting, calculator tape checks, and spreadsheet cross-referencing`,docuShieldApproach:`14 to 18 minutes via automated packet assembly, line-item tie-out, and plain-English exception alerts`,impactDelta:`-89% Review Hours`},{metric:`Cross-Grant Duplicate Invoice Detection`,manualApproach:`Siloed per-grant Excel trackers; blind to identical invoices submitted to neighboring departments`,docuShieldApproach:`Automatic cross-fund invoice, EIN, address, and document hash matching across all active grants`,impactDelta:`Pre-Payout Block`},{metric:`Altered / Synthetic PDF Fraud Detection`,manualApproach:`Visual eyeball check only—misses edited PDF text layers, font substitutions, and cloned templates`,docuShieldApproach:`Local forensic inspection of PDF metadata, XRef revision chains, font metrics, and figure alignment`,impactDelta:`Forensic Grade`},{metric:`Reimbursement & Household Payout Turnaround`,manualApproach:`28 to 45+ days due to back-and-forth incomplete packet rejections and manual supervisor queues`,docuShieldApproach:`3 to 7 business days with pre-validated checklists and standardized compliance summaries`,impactDelta:`5x Faster Relief`},{metric:`Data Privacy & IT Security Exposure`,manualApproach:`Emailing unencrypted SSN/PII attachments or uploading constituent records to third-party SaaS clouds`,docuShieldApproach:`100% local, air-gapped workstation execution—0 bytes transmitted to external vendor servers`,impactDelta:`Zero Cloud Risk`},{metric:`Single Audit & HUD OIG Closeout Readiness`,manualApproach:`3 to 6 weeks of emergency binder assembly and high risk of 2 CFR 200 questioned-cost repayments`,docuShieldApproach:`One-click HUD IDIS, CAPER, and Single Audit binders with linked evidentiary chain for every dollar`,impactDelta:`Day-One Audit Ready`}],a=[{key:`all`,label:`All Funds`,shortCode:`ALL PORTFOLIOS`},{key:`cdbg_hud`,label:`CDBG / HUD`,shortCode:`24 CFR 570 / 92 / 576`},{key:`state_housing`,label:`State Housing`,shortCode:`HCD PLHA / HHAP`},{key:`county_measure`,label:`County Measure`,shortCode:`VOTER TAX MEASURES`},{key:`municipal_gf`,label:`Municipal General Fund`,shortCode:`CITY CHARTER FUNDS`}],o=[{id:`led-01`,fundKey:`cdbg_hud`,fundBadge:`CDBG / HUD`,department:`City Housing & Community Development`,grantName:`HUD CDBG Entitlement Allocation`,grantCode:`B-26-MC-06-0521`,awarded:845e4,encumbered:762e4,approvedDrawdowns:618e4,timelinessTargetPct:70,timelinessDeadline:`HUD May 2 1.5x Test (24 CFR § 570.902)`,timelinessStatus:`Ahead of Target`},{id:`led-02`,fundKey:`cdbg_hud`,fundBadge:`CDBG / HUD`,department:`Public Housing & Community Partnerships`,grantName:`HOME Investment Partnerships & CHDO Reserve`,grantCode:`M-26-MC-06-0214`,awarded:52e5,encumbered:468e4,approvedDrawdowns:349e4,timelinessTargetPct:65,timelinessDeadline:`24-Month CHDO Commitment Cliff`,timelinessStatus:`On Pace`},{id:`led-03`,fundKey:`state_housing`,fundBadge:`State Housing`,department:`Municipal Housing Trust & Homelessness Div.`,grantName:`CA HCD Permanent Local Housing Allocation (PLHA)`,grantCode:`25-PLHA-17842`,awarded:68e5,encumbered:615e4,approvedDrawdowns:4896e3,timelinessTargetPct:70,timelinessDeadline:`HCD Annual APR & Expenditure Milestone`,timelinessStatus:`Ahead of Target`},{id:`led-04`,fundKey:`state_housing`,fundBadge:`State Housing`,department:`Regional Continuum of Care (CoC) Lead`,grantName:`Homeless Housing, Assistance & Prevention (HHAP-5)`,grantCode:`26-HHAP-00419`,awarded:91e5,encumbered:794e4,approvedDrawdowns:5369e3,timelinessTargetPct:62,timelinessDeadline:`Cal ICH Statutory 50% Expenditure Gate`,timelinessStatus:`Watch — Accelerated Draw`},{id:`led-05`,fundKey:`county_measure`,fundBadge:`County Measure`,department:`County CEO — Homeless Initiative & HHSA`,grantName:`Measure H Rapid Rehousing & Diversion Allocation`,grantCode:`CNTY-MH-FY26-08`,awarded:114e5,encumbered:1038e4,approvedDrawdowns:8436e3,timelinessTargetPct:72,timelinessDeadline:`Citizens’ Oversight Q3 Burn Benchmark`,timelinessStatus:`On Pace`},{id:`led-06`,fundKey:`county_measure`,fundBadge:`County Measure`,department:`Regional Housing & Transit JPA`,grantName:`County Measure A Supportive Housing & Senior Relief`,grantCode:`JPA-MA-2026-14`,awarded:49e5,encumbered:441e4,approvedDrawdowns:3675e3,timelinessTargetPct:70,timelinessDeadline:`JPA Board Semi-Annual Audit Cutoff`,timelinessStatus:`Ahead of Target`},{id:`led-07`,fundKey:`municipal_gf`,fundBadge:`Municipal General Fund`,department:`City Human Services & Finance Controller`,grantName:`General Fund Eviction Defense & Rental Arrears Pool`,grantCode:`GF-ORD-2026-310`,awarded:425e4,encumbered:391e4,approvedDrawdowns:3272500,timelinessTargetPct:75,timelinessDeadline:`FY26 Q4 Municipal Charter Encumbrance`,timelinessStatus:`On Pace`},{id:`led-08`,fundKey:`municipal_gf`,fundBadge:`Municipal General Fund`,department:`Economic Development & Public Works`,grantName:`Local Inclusionary Trust & Small-Business Corridor Fund`,grantCode:`GF-ITF-2026-119`,awarded:34e5,encumbered:299e4,approvedDrawdowns:2448e3,timelinessTargetPct:68,timelinessDeadline:`City Council Mid-Year Capital Review`,timelinessStatus:`Ahead of Target`}],s=[{id:`sub-01`,agencyName:`Harborlight Community Housing CHDO`,entityType:`501(c)(3) Certified CHDO`,fundKey:`cdbg_hud`,grantSource:`HUD HOME CHDO Set-Aside (24 CFR 92.300)`,awardAmount:185e4,approvedDrawdowns:1387500,drawdownPct:75,docCompletenessScore:99,deskAuditStatus:`Cleared Q3 Desk Audit`,riskTier:`Low Risk`,highlightNote:`42/42 LMI tenant certifications & contractor lien waivers verified locally.`},{id:`sub-02`,agencyName:`San Gabriel Valley Legal Aid & Eviction Clinic`,entityType:`501(c)(3) Legal Aid Subrecipient`,fundKey:`municipal_gf`,grantSource:`Municipal General Fund Right-to-Counsel`,awardAmount:98e4,approvedDrawdowns:784e3,drawdownPct:80,docCompletenessScore:98,deskAuditStatus:`Cleared Q3 Desk Audit`,riskTier:`Low Risk`,highlightNote:`Air-gapped privilege preserved; 310 household intake files 100% verified.`},{id:`sub-03`,agencyName:`Foothill Rapid Rehousing & Shelter Coalition`,entityType:`501(c)(3) Homelessness Provider`,fundKey:`county_measure`,grantSource:`County Measure H Rapid Rehousing`,awardAmount:224e4,approvedDrawdowns:1523200,drawdownPct:68,docCompletenessScore:84,deskAuditStatus:`CAP Milestone Open`,riskTier:`Elevated — CAP Active`,highlightNote:`1 duplicate motel invoice ($18,450) across City CDBG & Measure H blocked pre-payout.`},{id:`sub-04`,agencyName:`Metro Workforce & Microenterprise Opportunity Board`,entityType:`Regional Workforce Subrecipient`,fundKey:`cdbg_hud`,grantSource:`HUD CDBG Economic Dev (24 CFR 570.201(o))`,awardAmount:112e4,approvedDrawdowns:817600,drawdownPct:73,docCompletenessScore:96,deskAuditStatus:`Cleared Q3 Desk Audit`,riskTier:`Low Risk`,highlightNote:`UEI/SAM checks and LMI job-creation payroll stubs 100% reconciled.`},{id:`sub-05`,agencyName:`Pacific Crest Supportive Housing Partners`,entityType:`Non-Profit Developer / Operator`,fundKey:`state_housing`,grantSource:`CA HCD PLHA Supportive Operating Reserve`,awardAmount:265e4,approvedDrawdowns:1961e3,drawdownPct:74,docCompletenessScore:97,deskAuditStatus:`Verified — Ready to Close`,riskTier:`Low Risk`,highlightNote:`All 30% AMI rent roll calculations and operating draws tied to bank clearing.`},{id:`sub-06`,agencyName:`Inland Valley Crisis & Domestic SafeHouse`,entityType:`501(c)(3) VAWA Confidential Shelter`,fundKey:`cdbg_hud`,grantSource:`HUD ESG & CDBG Public Services`,awardAmount:79e4,approvedDrawdowns:576700,drawdownPct:73,docCompletenessScore:95,deskAuditStatus:`Cleared Q3 Desk Audit`,riskTier:`Low Risk`,highlightNote:`Zero survivor PII uploaded to cloud; VAWA § 12291 compliance certified.`},{id:`sub-07`,agencyName:`Eastside Utility & Emergency Arrears Center`,entityType:`Community Action Subrecipient`,fundKey:`state_housing`,grantSource:`State HHAP-5 Homelessness Prevention`,awardAmount:148e4,approvedDrawdowns:858400,drawdownPct:58,docCompletenessScore:89,deskAuditStatus:`Pre-Payout Review`,riskTier:`Moderate`,highlightNote:`2 altered applicant PDF bank statements caught & held prior to landlord ACH.`},{id:`sub-08`,agencyName:`Bayview Regional Transit & Accessibility JPA`,entityType:`Joint Powers Authority`,fundKey:`county_measure`,grantSource:`County Measure A Senior & ADA Mobility`,awardAmount:192e4,approvedDrawdowns:1459200,drawdownPct:76,docCompletenessScore:91,deskAuditStatus:`Pre-Payout Review`,riskTier:`Moderate`,highlightNote:`Split-purchase HVAC vendor billing ($29,550 across 3 invoices) held for 3-quote log.`},{id:`sub-09`,agencyName:`Civic Renewal Corridor & Facade Improvement Corp`,entityType:`Municipal Economic Subrecipient`,fundKey:`municipal_gf`,grantSource:`Local Inclusionary & Corridor Fund`,awardAmount:86e4,approvedDrawdowns:619200,drawdownPct:72,docCompletenessScore:94,deskAuditStatus:`Cleared Q3 Desk Audit`,riskTier:`Low Risk`,highlightNote:`Prevailing-wage payrolls and contractor progress draws reconciled to GL.`},{id:`sub-10`,agencyName:`South County Behavioral & Bridge Housing Network`,entityType:`501(c)(3) Health/Housing Agency`,fundKey:`state_housing`,grantSource:`State HHAP-5 & Behavioral Bridge Allocation`,awardAmount:175e4,approvedDrawdowns:1015e3,drawdownPct:58,docCompletenessScore:86,deskAuditStatus:`CAP Milestone Open`,riskTier:`Elevated — CAP Active`,highlightNote:`Overlapping 1.35 FTE case-manager timesheet across HHAP & ESG paused for reallocation.`}],c=[{id:`rec-01`,timestamp:`Today • 09:42 PST`,packetRef:`RFR-2026-1108`,fundKey:`cdbg_hud`,secondaryFundKey:`county_measure`,subrecipient:`Foothill Rapid Rehousing & Shelter Coalition`,amount:18450,outcome:`FLAGGED_PRE_PAYOUT`,categoryTag:`Duplicate Invoice Blocked`,summary:`Vendor Invoice #INV-88412 ( Crestview Motel Master Voucher ) matched an identical invoice hash already submitted under City CDBG-CV Packet #RFR-2026-1041. Disbursement held prior to warrant.`,ruleReference:`2 CFR § 200.403(a) & § 200.405 — Duplicate Cross-Grant Billing Prevention`},{id:`rec-02`,timestamp:`Today • 09:18 PST`,packetRef:`RFR-2026-1107`,fundKey:`cdbg_hud`,subrecipient:`Harborlight Community Housing CHDO`,amount:142800,outcome:`VERIFIED`,categoryTag:`3-Way Tie-Out Cleared`,summary:`Construction Draw #07 reconciled 100% against HOME CHDO budget line items, conditional lien releases, Davis-Bacon WH-347 payrolls, and cleared wire confirmation.`,ruleReference:`24 CFR § 92.300 & 2 CFR § 200.305 — Verified Eligible Drawdown`},{id:`rec-03`,timestamp:`Yesterday • 16:51 PST`,packetRef:`RFR-2026-1104`,fundKey:`state_housing`,secondaryFundKey:`cdbg_hud`,subrecipient:`South County Behavioral & Bridge Housing Network`,amount:9640,outcome:`FLAGGED_PRE_PAYOUT`,categoryTag:`Timesheet >100% FTE Overlap`,summary:`Personnel cost allocation for Staff ID #EMP-409 claimed 0.75 FTE on State HHAP-5 and 0.60 FTE on HUD ESG (1.35 combined FTE) for pay period ending 10/31/2026.`,ruleReference:`2 CFR § 200.430(i) — Personnel Time-and-Effort Distribution Cap`},{id:`rec-04`,timestamp:`Yesterday • 15:14 PST`,packetRef:`RFR-2026-1101`,fundKey:`municipal_gf`,subrecipient:`San Gabriel Valley Legal Aid & Eviction Clinic`,amount:64500,outcome:`VERIFIED`,categoryTag:`Privilege-Safe Verified`,summary:`48 emergency eviction-prevention arrears packets verified locally; landlord W-9s, court stipulation ledgers, and ≤50% AMI household proofs passed 100% forensic integrity.`,ruleReference:`Municipal Charter § 412 — Pre-Warrant Evidentiary Clearance`},{id:`rec-05`,timestamp:`Yesterday • 13:29 PST`,packetRef:`RFR-2026-1098`,fundKey:`county_measure`,subrecipient:`Bayview Regional Transit & Accessibility JPA`,amount:29550,outcome:`FLAGGED_PRE_PAYOUT`,categoryTag:`Split-Purchase Threshold Alert`,summary:`Three sequential $9,850 invoices (#4410, #4411, #4412) from Apex Mechanical LLC dated within 36 hours exceed the $10,000 micro-purchase limit without attached 3-quote price analysis.`,ruleReference:`2 CFR § 200.320(a)(1)–(2) — Micro-Purchase Split-Transaction Prohibition`},{id:`rec-06`,timestamp:`Nov 09 • 17:05 PST`,packetRef:`RFR-2026-1095`,fundKey:`state_housing`,subrecipient:`Eastside Utility & Emergency Arrears Center`,amount:6820,outcome:`FLAGGED_PRE_PAYOUT`,categoryTag:`PDF Balance Tampering Caught`,summary:`DocuShield forensic check detected non-native Helvetica glyph substitution and XRef revision edits on 2 submitted bank statements prior to HHAP prevention payout.`,ruleReference:`Cal ICH HHAP Program Integrity & Pre-Disbursement Verification`},{id:`rec-07`,timestamp:`Nov 09 • 11:20 PST`,packetRef:`RFR-2026-1092`,fundKey:`state_housing`,subrecipient:`Pacific Crest Supportive Housing Partners`,amount:118400,outcome:`VERIFIED`,categoryTag:`APR & Ledger Reconciled`,summary:`Monthly operating subsidy draw reconciled against 64 verified 30% AMI tenant recertifications, property general ledger, and bank clearing statement.`,ruleReference:`CA HCD PLHA Guidelines § 302 — Verified Operating Subsidy Draw`},{id:`rec-08`,timestamp:`Nov 08 • 14:40 PST`,packetRef:`RFR-2026-1089`,fundKey:`municipal_gf`,subrecipient:`Civic Renewal Corridor & Facade Improvement Corp`,amount:51200,outcome:`VERIFIED`,categoryTag:`Contractor Draw Verified`,summary:`8 small-business facade improvement reimbursements cleared forensic vendor invoice check, municipal business tax match, and ACH settlement proof.`,ruleReference:`Local Inclusionary & Corridor Ordinance § 19.04 — Cleared Drawdown`}];function l(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e)}function u(e){return e>=1e6?`$`+(e/1e6).toFixed(2)+`M`:e>=1e3?`$`+(e/1e3).toFixed(0)+`K`:l(e)}function d(e,t=o){let n=e===`all`?t:t.filter(t=>t.fundKey===e),r=n.reduce((e,t)=>e+t.awarded,0),i=n.reduce((e,t)=>e+t.encumbered,0),a=n.reduce((e,t)=>e+t.approvedDrawdowns,0),s=Math.max(0,r-a),c=r>0?Math.round(a/r*1e3)/10:0,l=r>0?Math.round(i/r*1e3)/10:0,u=n.filter(e=>e.timelinessStatus===`On Pace`||e.timelinessStatus===`Ahead of Target`).length;return{totalAwarded:r,totalEncumbered:i,approvedDrawdowns:a,remainingBalance:s,utilizationPct:c,encumberedPct:l,streamCount:n.length,onTrackCount:u,ledgers:n}}function f(e,t=``,n=`ALL`,r=s){let i=t.trim().toLowerCase();return r.filter(t=>{let r=e===`all`||t.fundKey===e,a=n===`ALL`||t.riskTier===n,o=!i||t.agencyName.toLowerCase().includes(i)||t.grantSource.toLowerCase().includes(i)||t.entityType.toLowerCase().includes(i)||t.deskAuditStatus.toLowerCase().includes(i)||t.highlightNote.toLowerCase().includes(i);return r&&a&&o})}function p(e,t=`ALL`,n=c){let r=e===`all`?n:n.filter(t=>t.fundKey===e||t.secondaryFundKey===e),i=r.filter(e=>e.outcome===`FLAGGED_PRE_PAYOUT`),a=r.filter(e=>e.outcome===`VERIFIED`),o=i.reduce((e,t)=>e+t.amount,0);return{items:t===`ALL`?r:r.filter(e=>e.outcome===t),flaggedTotalUSD:o,flaggedCount:i.length,verifiedCount:a.length}}var m=[{id:`forensics_ocr`,numberLabel:`MODULE 01`,shortName:`Document Reader`,name:`Document Reader & Forensic Verifier`,icon:`scan-search`,tagline:`Reads PDFs, extracts figures, and catches tampered statements 100% locally.`,purpose:`Built-in OCR and PDF forensics eliminate manual data entry and flag altered files before approval.`,targetUsers:[`Housing & eligibility specialists`,`County & nonprofit caseworkers`,`Finance & grant reviewers`,`Legal aid & intake teams`],supportedInputs:[`30–120 day PDF bank statements`,`Paystubs, W-2s & tax filings`,`Residential leases & utility bills`,`Contractor invoices & W-9 forms`],automatedChecks:[`PDF revision & edit history scan`,`Font & glyph tampering detection`,`Beginning-to-ending balance math check`,`Instant OCR field extraction`],previewColumnHeaders:[`Extracted Field / Layer`,`Parsed Value`,`Forensic / Math Check`,`Confidence`],previewVariants:[{key:`bank_stmt`,label:`Sample A: Edited Bank Statement`,headerRef:`LOCAL PREVIEW • Chase_Checking_Oct2026_Packet412.pdf`,statusBadge:`Tampering Flagged — Hold Payout`,statusTone:`burgundy`,summaryBanner:`Alert: Ending balance digits modified via external browser PDF editor 14 minutes prior to submission; deposit ledger sum mismatches stated ending balance by $4,200.00.`,metricsRow:[{label:`OCR Field Confidence`,value:`99.4%`,sub:`18/18 fields parsed locally`},{label:`PDF Revision Layers`,value:`3 Edits`,sub:`Non-bank producer metadata`},{label:`Ledger Math Delta`,value:`-$4,200`,sub:`Stated vs. summed transactions`}],rows:[{col1:`Institution & Routing Header`,col2:`JPMorgan Chase • Acct ••••4819`,col3:`Template vector geometry intact`,statusLabel:`99.8% Verified`,tone:`verify`},{col1:`Stated Ending Balance`,col2:`$1,140.22 (Edited Layer)`,col3:`Font glyph mismatch: ArialMT over ChaseSans`,statusLabel:`Tampered`,tone:`burgundy`},{col1:`Reconciled Transaction Sum`,col2:`$5,340.22 Actual Ending`,col3:`3 unreported Zelle/ACH deposits omitted from summary`,statusLabel:`Math Mismatch`,tone:`burgundy`},{col1:`PDF Producer & XRef Chain`,col2:`Modified: iLovePDF / Cairo 1.17`,col3:`2 incremental save objects appended after bank seal`,statusLabel:`Review Required`,tone:`warn`}],footerAuditTrail:`Executed 100% On-Device • SHA-256: 9f84c2...d107 • 0 Bytes Sent to External Servers`},{key:`vendor_inv`,label:`Sample B: Clean Contractor Invoice`,headerRef:`LOCAL PREVIEW • INV-2026-0841_ApexRoofing_CDBGRehab.pdf`,statusBadge:`Authentic & Math-Verified`,statusTone:`verify`,summaryBanner:`All line items, California contractor license #994120, prevailing-wage labor subtotals, and native accounting PDF export metadata verified clean.`,metricsRow:[{label:`OCR Field Confidence`,value:`99.7%`,sub:`24/24 invoice fields extracted`},{label:`PDF Revision Layers`,value:`1 Original`,sub:`Direct QuickBooks PDF export`},{label:`Line-Item Math Delta`,value:`$0.00`,sub:`Materials + Labor = $34,650.00`}],rows:[{col1:`Vendor & UEI / License`,col2:`Apex Roofing Inc. • CSLB #994120`,col3:`Matches active SAM.gov & W-9 tin record`,statusLabel:`99.9% Verified`,tone:`verify`},{col1:`Service Period & Site`,col2:`10/02/2026–10/19/2026 • Parcel 412-B`,col3:`Within executed CDBG Rehab Grant window`,statusLabel:`99.6% Verified`,tone:`verify`},{col1:`Labor & Material Subtotal`,col2:`$34,650.00 (0% Tax Exempt Labor)`,col3:`Matches WH-347 certified payroll gross hours`,statusLabel:`99.8% Verified`,tone:`verify`},{col1:`PDF Object & Font Integrity`,col2:`Single-pass XRef • Embedded Subset`,col3:`Zero post-creation text edits or overlays`,statusLabel:`Authentic`,tone:`verify`}],footerAuditTrail:`Executed 100% On-Device • SHA-256: 4a11e8...83b2 • Linked to RFR #2026-Q3-109`},{key:`lease_ledger`,label:`Sample C: Disputed Rent Ledger`,headerRef:`LOCAL PREVIEW • Residential_Lease_Unit4B_ArrearsPacket.pdf`,statusBadge:`Fee Inconsistency Flagged`,statusTone:`warn`,summaryBanner:`Base lease agreement verified authentic ($1,950/mo), but attached arrears ledger includes $1,420 in non-allowable late/legal fees barred under HUD ESG / HCD rules.`,metricsRow:[{label:`OCR Field Confidence`,value:`99.2%`,sub:`Lease + 6-month ledger parsed`},{label:`Eligible Base Rent Arrears`,value:`$5,850`,sub:`3 mos @ $1,950/mo verified`},{label:`Ineligible Fee Carve-Out`,value:`$1,420`,sub:`Auto-deducted per 24 CFR 576`}],rows:[{col1:`Executed Lease Term & Rent`,col2:`01/01/2026–12/31/2026 • $1,950/mo`,col3:`Passes HUD FMR & Rent Reasonableness`,statusLabel:`99.5% Verified`,tone:`verify`},{col1:`Landlord Ownership & W-9`,col2:`Oakridge Properties LP • EIN ••-7741`,col3:`Matches county assessor parcel owner record`,statusLabel:`99.4% Verified`,tone:`verify`},{col1:`Ledger Late & Legal Charges`,col2:`$1,420.00 Compounded Penalties`,col3:`Ineligible under 24 CFR § 576.106(d) arrears rules`,statusLabel:`Carved Out`,tone:`warn`},{col1:`Approved Net Disbursement`,col2:`$5,850.00 Eligible Principal Rent`,col3:`Ready for supervisor sign-off after carve-out`,statusLabel:`Adjusted Clean`,tone:`verify`}],footerAuditTrail:`Executed 100% On-Device • SHA-256: 7c30b4...19e6 • Zero Cloud Exposure`}]},{id:`drawdown_validator`,numberLabel:`MODULE 02`,shortName:`Finance Management`,name:`Finance & Grant Drawdown Management`,icon:`file-check-2`,tagline:`Reconciles reimbursement claims against budgets, cost rules, and cleared payments.`,purpose:`Replaces spreadsheet tie-outs with automated three-way verification across budgets, general ledgers, and bank proofs.`,targetUsers:[`City & county grant analysts`,`Controller & treasury reviewers`,`State pass-through monitors`,`Nonprofit CFOs & finance leads`],supportedInputs:[`Subrecipient reimbursement (RFR) schedules`,`Approved budgets & indirect rate letters`,`General ledger CSV/XLSX exports`,`Cleared checks & payroll registers`],automatedChecks:[`Line-item budget & variance locks`,`2 CFR 200 eligible cost screening`,`10% de minimis MTDC cap check`,`3-way claim, ledger & check tie-out`],previewColumnHeaders:[`Budget Category`,`RFR Claimed vs. Remaining`,`2 CFR 200 / 24 CFR 570 Check`,`Clearance`],previewVariants:[{key:`rfr_clean`,label:`RFR #2026-Q3-109 • Harborlight CHDO`,headerRef:`VALIDATOR WORKBENCH • Grant M-26-MC-06-0214 • Claim $142,800.00`,statusBadge:`Cleared for IDIS / Warrant Draw`,statusTone:`verify`,summaryBanner:`100% of claimed costs reconciled to HOME CHDO agreement line items, cleared wire confirmations, and MTDC indirect base rules. Remaining grant balance post-draw: $462,500.00.`,metricsRow:[{label:`Approved Award Budget`,value:`$1,850,000`,sub:`HOME CHDO Set-Aside`},{label:`Current RFR Verified`,value:`$142,800`,sub:`100% 3-way GL/ACH match`},{label:`Post-Draw Balance`,value:`$462,500`,sub:`75.0% cumulative burn`}],rows:[{col1:`01. Direct Rehab Construction`,col2:`$112,400 Claim • $318,000 Rem.`,col3:`24 CFR § 92.206 eligible hard cost + lien release`,statusLabel:`Cleared`,tone:`verify`},{col1:`02. Project Delivery Personnel`,col2:`$19,600 Claim • $84,200 Rem.`,col3:`2 CFR § 200.430 signed time-distribution matched`,statusLabel:`Cleared`,tone:`verify`},{col1:`03. Architectural & Permits`,col2:`$8,840 Claim • $41,100 Rem.`,col3:`3-quote procurement log + cleared check #10842`,statusLabel:`Cleared`,tone:`verify`},{col1:`04. Indirect (10% De Minimis)`,col2:`$1,960 Claim • $19,200 Rem.`,col3:`Applied strictly to MTDC personnel base (§ 200.414)`,statusLabel:`Cleared`,tone:`verify`}],footerAuditTrail:`Voucher Voucher-ID #IDIS-88419 Ready • Remaining Balance Locked at $462,500.00`},{key:`rfr_exception`,label:`RFR #2026-Q3-114 • Exception Caught`,headerRef:`VALIDATOR WORKBENCH • Grant B-26-MC-06-0521 • Claim $68,420.00`,statusBadge:`2 Cost Exceptions Held ($4,890)`,statusTone:`warn`,summaryBanner:`Approved $63,530.00 for immediate reimbursement; automatically carved out $4,890.00 due to excess indirect base calculation on subawards/rental assistance and 1 uncleared check.`,metricsRow:[{label:`Submitted RFR Total`,value:`$68,420`,sub:`CDBG Public Services`},{label:`Auto-Carved Exceptions`,value:`-$4,890`,sub:`2 CFR § 200.1 MTDC & § 200.305`},{label:`Net Approved Payout`,value:`$63,530`,sub:`Cleared for partial warrant`}],rows:[{col1:`01. Case Management Salaries`,col2:`$38,200 Claim • $92,400 Rem.`,col3:`Reconciled to ADP payroll & signed activity sheets`,statusLabel:`Cleared`,tone:`verify`},{col1:`02. Emergency Utility Payments`,col2:`$22,130 Claim • $44,800 Rem.`,col3:`24 CFR § 570.207(b)(4) direct utility arrears verified`,statusLabel:`Cleared`,tone:`verify`},{col1:`03. Indirect Charged on Assistance`,col2:`$2,213 Disallowed Overcharge`,col3:`Direct client assistance excluded from MTDC base (§ 200.1)`,statusLabel:`Held / Deducted`,tone:`burgundy`},{col1:`04. Vendor Check #4409 Uncleared`,col2:`$2,677 Pending Bank Settlement`,col3:`Missing ACH/bank clearing proof; eligible on next RFR`,statusLabel:`Deferred to Q4`,tone:`warn`}],footerAuditTrail:`Automated Exception Notice Generated • Prevents $4,890.00 Single Audit Finding`}]},{id:`pattern_scanner`,numberLabel:`MODULE 03`,shortName:`Duplicate Scanner`,name:`Cross-Grant Duplicate & Pattern Scanner`,icon:`radar`,tagline:`Blocks duplicate invoices, split purchases, and overlapping payroll across all funds.`,purpose:`Cross-checks vendor EINs, invoice hashes, staff FTE hours, and client addresses across every active grant ledger.`,targetUsers:[`Auditor-Controllers & OIG teams`,`Multi-fund housing fiscal directors`,`Disaster recovery DOB analysts`,`Program integrity & audit units`],supportedInputs:[`Multi-department invoice & voucher ledgers`,`Vendor master files (EIN, UEI, routing)`,`Cross-grant payroll & FTE schedules`,`Household benefit & address logs`],automatedChecks:[`Cross-fund duplicate invoice blocking`,`Split-purchase threshold bypass alerts`,`>1.00 FTE overlapping payroll detection`,`Duplicate household benefit prevention`],previewColumnHeaders:[`Detected Anomaly Pattern`,`Cross-Fund Match Scope`,`Financial & Statutory Impact`,`Disposition`],previewVariants:[{key:`cross_ledger_scan`,label:`Active Cross-Department Scan (Q3–Q4)`,headerRef:`CROSS-LEDGER SCANNER • 4 Funding Buckets • 1,420 Vouchers Analyzed`,statusBadge:`4 Pre-Payout Anomalies Intercepted`,statusTone:`burgundy`,summaryBanner:`Prevented $68,540.00 in duplicate, split-purchase, and over-allocated charges across City CDBG, State HHAP-5, County Measure H, and Municipal General Fund prior to disbursement.`,metricsRow:[{label:`Vouchers Cross-Matched`,value:`1,420`,sub:`Across 8 department ledgers`},{label:`Questioned Costs Blocked`,value:`$68,540`,sub:`100% caught pre-warrant`},{label:`False-Positive Noise`,value:`< 0.4%`,sub:`Deterministic hash + EIN tie`}],rows:[{col1:`Duplicate Vendor Invoice #INV-88412`,col2:`City CDBG-CV ↔ County Measure H`,col3:`$18,450 Crestview Motel bill submitted to both agencies`,statusLabel:`Blocked`,tone:`burgundy`},{col1:`Split-Purchase Threshold Bypass`,col2:`County Measure A • 3 Invoices / 36h`,col3:`3 × $9,850 ($29,550) bypasses $10k 2 CFR § 200.320 quote rule`,statusLabel:`3-Quote Hold`,tone:`warn`},{col1:`Overlapping Staff Timesheet Hours`,col2:`State HHAP-5 (0.75) + HUD ESG (0.60)`,col3:`$9,640 claimed at 1.35 combined FTE under 2 CFR § 200.430`,statusLabel:`Reallocated`,tone:`burgundy`},{col1:`Year-End Spend Spike & Duplicate Unit`,col2:`General Fund ↔ State PLHA Arrears`,col3:`$10,900 arrears claimed twice for Unit #204 within 45 days`,statusLabel:`DOB Blocked`,tone:`burgundy`}],footerAuditTrail:`Stafford Act § 312 & 2 CFR § 200.405 Compliance Log Saved Locally`},{key:`clean_vendor_run`,label:`Cleared Batch #2026-W45 Warrant Run`,headerRef:`PRE-WARRANT BATCH #2026-W45 • 86 Subrecipient & Vendor Claims`,statusBadge:`86/86 Claims Verified Unique`,statusTone:`verify`,summaryBanner:`Zero duplicate invoice hashes, zero SAM.gov exclusions, and zero >1.00 FTE payroll overlaps detected across $814,200.00 weekly disbursement batch.`,metricsRow:[{label:`Batch Disbursement Total`,value:`$814,200`,sub:`86 unique vouchers cleared`},{label:`Duplicate Hash Collisions`,value:`0`,sub:`Checked against 36-mo history`},{label:`SAM.gov / Debarment Hits`,value:`0`,sub:`All active UEIs verified`}],rows:[{col1:`Invoice Hash & Number Uniqueness`,col2:`86 Claims vs. 19,400 Historical`,col3:`0 exact or near-duplicate invoice numbers or amounts`,statusLabel:`100% Unique`,tone:`verify`},{col1:`Cumulative Vendor Procurement Caps`,col2:`41 Active Contractors & Vendors`,col3:`All contracts >$10k linked to valid competition files`,statusLabel:`200.320 Compliant`,tone:`verify`},{col1:`Multi-Grant Payroll FTE Ceiling`,col2:`128 Grant-Funded Staff IDs`,col3:`All employees ≤ 1.00 FTE across combined funding streams`,statusLabel:`200.430 Compliant`,tone:`verify`},{col1:`Household Duplication of Benefits`,col2:`114 Assisted Households`,col3:`Zero overlapping rental months across ESG, HHAP & GF`,statusLabel:`DOB Cleared`,tone:`verify`}],footerAuditTrail:`Controller Pre-Warrant Sign-Off Certificate #W45-9920 Generated Offline`}]},{id:`desk_audit_monitor`,numberLabel:`MODULE 04`,shortName:`Case & Audit Management`,name:`Case Management & Desk-Audit Monitor`,icon:`clipboard-check`,tagline:`Manages household cases, LMI eligibility, risk scores, and Corrective Action Plans.`,purpose:`Unifies day-to-day case intake, beneficiary qualification, and 2 CFR 200.332 subrecipient monitoring in one view.`,targetUsers:[`Casework & intake supervisors`,`Subrecipient compliance managers`,`HUD CDBG, HOME & CoC leads`,`Nonprofit program directors`],supportedInputs:[`Household intake & LMI income packets`,`2 CFR 200.332 risk questionnaires`,`Prior Single Audit & FAC findings`,`Corrective Action Plan (CAP) evidence`],automatedChecks:[`Live subrecipient compliance health scores`,`CDBG 70% LMI & 15% cap tracking`,`Automated desk-review checklists`,`30/60/90-day CAP cure countdowns`],previewColumnHeaders:[`Monitoring Domain`,`Measured Standing`,`Statutory / Contract Benchmark`,`Status`],previewVariants:[{key:`cap_active_agency`,label:`Agency View: CAP Active (Score 68/100)`,headerRef:`DESK-AUDIT MONITOR • Foothill Rapid Rehousing Coalition • FY26 Q3`,statusBadge:`Elevated Risk • CAP Cure Day 18 of 30`,statusTone:`warn`,summaryBanner:`Automated 30-day Corrective Action Plan #CAP-2026-04 active following duplicate motel invoice interception and 2 missing time-distribution signatures; 3 of 4 cure milestones already uploaded and verified.`,metricsRow:[{label:`Compliance Health Score`,value:`68 / 100`,sub:`Elevated — Biweekly Desk Review`},{label:`LMI Beneficiary Attainment`,value:`91.4%`,sub:`Exceeds 70.0% statutory floor`},{label:`CAP Cure Progress`,value:`75% Done`,sub:`12 days remaining to close CAP`}],rows:[{col1:`2 CFR § 200.332 Desk Checklist`,col2:`14 / 16 Core Controls Verified`,col3:`Policies, insurance, SAM.gov & board minutes current`,statusLabel:`2 Items in CAP`,tone:`warn`},{col1:`LMI National Objective Files`,col2:`138 / 151 Households ≤ 50% AMI`,col3:`91.4% LMI verified with complete local income packets`,statusLabel:`Compliant`,tone:`verify`},{col1:`CAP Milestone #1: Invoice Ledger Separation`,col2:`Separate Measure H & CDBG Class Codes`,col3:`QuickBooks class-tracking export verified 11/04/2026`,statusLabel:`Cured`,tone:`verify`},{col1:`CAP Milestone #2: Signed Time Logs`,col2:`Awaiting 2 Supervisor Countersignatures`,col3:`Due 11/23/2026 under 2 CFR § 200.332(d)(2) notice`,statusLabel:`Due in 12d`,tone:`warn`}],footerAuditTrail:`Pass-Through Management Decision Log Updated • Zero Disallowed Payouts Released`},{key:`exemplary_agency`,label:`Agency View: Exemplary (Score 98/100)`,headerRef:`DESK-AUDIT MONITOR • Harborlight Community Housing CHDO • FY26 Q3`,statusBadge:`Low Risk • Cleared Annual Desk Audit`,statusTone:`verify`,summaryBanner:`Unqualified prior Single Audit, 99% RFR documentation completeness, 100% LMI tenant qualification, and on-pace HOME CHDO construction drawdowns.`,metricsRow:[{label:`Compliance Health Score`,value:`98 / 100`,sub:`Tier 1 Low-Risk Subrecipient`},{label:`LMI Housing Units Verified`,value:`100.0%`,sub:`42/42 units ≤ 60% AMI`},{label:`Open Audit Findings / CAPs`,value:`0 Open`,sub:`3 consecutive clean years`}],rows:[{col1:`2 CFR § 200.332 Annual Desk Audit`,col2:`16 / 16 Core Controls Verified`,col3:`CHDO board composition, underwriting & procurement verified`,statusLabel:`Cleared`,tone:`verify`},{col1:`HOME Rent & Income Certifications`,col2:`42 / 42 Tenant Packets Sealed`,col3:`24 CFR § 92.252 rent & utility allowances verified locally`,statusLabel:`100% Verified`,tone:`verify`},{col1:`Expenditure & Drawdown Timeliness`,col2:`75.0% Drawn ($1.38M / $1.85M)`,col3:`10.0% ahead of 24-month CHDO benchmark schedule`,statusLabel:`Ahead of Pace`,tone:`verify`},{col1:`Single Audit (Subpart F) Standing`,col2:`Unmodified Opinion • 0 Findings`,col3:`FAC report verified; next annual review scheduled Q3 FY27`,statusLabel:`Exemplary`,tone:`verify`}],footerAuditTrail:`Annual Monitoring Closure Letter Ready for Director Signature`}]},{id:`closeout_builder`,numberLabel:`MODULE 05`,shortName:`Closeout Builder`,name:`Closeout & Audit Report Builder`,icon:`book-check`,tagline:`Compiles one-click audit binders for HUD IDIS, Single Audits, and City Councils.`,purpose:`Generates indexed, tamper-evident closeout binders linking every disbursed dollar to verified local source files.`,targetUsers:[`Housing & finance directors`,`City managers & board analysts`,`Single Audit & CPA liaisons`,`Oversight committee leads`],supportedInputs:[`Verified RFR & GL tie-out logs`,`HUD IDIS PR03, PR26 & CAPER tables`,`SEFA & federal award schedules`,`Forensic certificates & closed CAPs`],automatedChecks:[`Penny-exact SEFA & PR26 reconciliation`,`90/120-day closeout completeness check`,`One-click PII redaction for boards`,`SHA-256 linked evidentiary index`],previewColumnHeaders:[`Compiled Binder Section`,`Evidentiary Scope`,`Reconciliation & Privacy Status`,`Readiness`],previewVariants:[{key:`hud_idis_caper`,label:`Format A: HUD IDIS & CAPER Binder`,headerRef:`BINDER COMPILER • FY2025–26 CDBG/HOME CAPER & PR26 Substantiation`,statusBadge:`100% Reconciled • 0 Unlinked Dollars`,statusTone:`verify`,summaryBanner:`All $9,670,000.00 in CDBG and HOME drawdowns reconciled to the penny across IDIS PR03/PR26, municipal general ledger, LMI accomplishment logs, and 1,148 forensically verified source packets.`,metricsRow:[{label:`Total Substantiated Spend`,value:`$9.67M`,sub:`$0.00 variance vs. IDIS PR26`},{label:`Public Service / Admin Caps`,value:`14.2% / 18.6%`,sub:`Within 15% & 20% HUD limits`},{label:`Indexed Source Packets`,value:`1,148`,sub:`SHA-256 linked on local drive`}],rows:[{col1:`Tab 01 • PR26 Financial Summary Tie-Out`,col2:`$6,180,000 CDBG + $3,490,000 HOME`,col3:`Exact $0.00 variance against City Controller GL & IDIS`,statusLabel:`Sealed`,tone:`verify`},{col1:`Tab 02 • LMI National Objective Proofs`,col2:`84.6% Overall Low/Mod Benefit`,col3:`Exceeds 70.0% 24 CFR § 570.200(a)(3) primary objective`,statusLabel:`Sealed`,tone:`verify`},{col1:`Tab 03 • Davis-Bacon & Procurement Index`,col2:`19 Capital & Rehab Contracts`,col3:`100% WH-347 payrolls, SAM checks & 2 CFR 200.320 quotes`,statusLabel:`Sealed`,tone:`verify`},{col1:`Tab 04 • Forensic Fraud Prevention Log`,col2:`$68,540 Blocked Pre-Disbursement`,col3:`Documents proactive internal controls under 2 CFR § 200.303`,statusLabel:`Sealed`,tone:`verify`}],footerAuditTrail:`Compiled Locally in 4.2s • Export Formats: Indexed PDF Binder + Auditor CSV Manifest`},{key:`council_board_exec`,label:`Format B: Council & Single Audit Brief`,headerRef:`EXECUTIVE & SINGLE AUDIT PACKAGE • FY26 Multi-Fund Fiscal Stewardship`,statusBadge:`PII-Redacted & Board Ready`,statusTone:`verify`,summaryBanner:`Generates both the CPA Single Audit SEFA workpaper binder and a PII-redacted Executive Stewardship Report for City Council, County Supervisors, and Citizens’ Oversight Commissions.`,metricsRow:[{label:`SEFA & Local Funds Audited`,value:`$37.77M`,sub:`Across 8 department grants`},{label:`Questioned Costs at Audit`,value:`$0`,sub:`100% pre-payout verification`},{label:`Constituent PII Redaction`,value:`100% Masked`,sub:`Safe for public agenda packet`}],rows:[{col1:`Sec A • SEFA Federal Award Schedule`,col2:`Assistance Listings 14.218, 14.239, 14.231`,col3:`Reconciled to 2 CFR Part 200 Subpart F CPA test matrix`,statusLabel:`CPA Ready`,tone:`verify`},{col1:`Sec B • Subrecipient Monitoring Summary`,col2:`10 Active Agencies • 2 CAPs Tracked`,col3:`Full 2 CFR § 200.332 pass-through oversight documentation`,statusLabel:`CPA Ready`,tone:`verify`},{col1:`Sec C • Voter Measure & GF Impact Brief`,col2:`1,840 Households Assisted Locally`,col3:`SSNs, account numbers & VAWA addresses auto-redacted`,statusLabel:`Public Safe`,tone:`verify`},{col1:`Sec D • 5-Year Air-Gapped Archive Hash`,col2:`2 CFR § 200.334 Record Retention`,col3:`Tamper-evident local archive stored on agency storage`,statusLabel:`Archived`,tone:`verify`}],footerAuditTrail:`Zero Cloud Dependency • Ready for City Clerk Agenda & External CPA Walkthrough`}]}];function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function g(e,t,n,r){return`
    <div class="surface-alt border-b px-4 sm:px-6 lg:px-8 py-2.5" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        <div class="flex items-center gap-3 min-w-0">
          <button
            type="button"
            data-route-link="home"
            class="btn-outline-theme min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <i data-lucide="arrow-left" class="w-4 h-4 text-burgundy"></i>
            <span>Overview</span>
          </button>
          <nav aria-label="Breadcrumb" class="hidden sm:flex items-center gap-2 text-xs text-muted-ink truncate">
            <button type="button" data-route-link="home" class="min-h-[44px] px-1 hover:text-ink transition-colors whitespace-nowrap inline-flex items-center">Home</button>
            <span aria-hidden="true">/</span>
            <span class="font-mono-code text-gold whitespace-nowrap">${e}</span>
            <span aria-hidden="true">·</span>
            <span class="text-ink font-medium truncate">${h(t)}</span>
          </nav>
        </div>

        <div class="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            data-route-link="${n}"
            class="btn-outline-theme min-h-[44px] px-4 py-2 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Next: ${h(r)}</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-gold icon-glide-right"></i>
          </button>
        </div>
      </div>
    </div>
  `}function _(e,t,n,r,i,a){return`
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-alt border-t" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto">
        <div class="spotlight-card surface-card rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl space-y-2.5">
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">${h(e)}</div>
            <h2 class="font-display text-2xl sm:text-3xl text-ink leading-tight" style="text-wrap: balance;">${h(t)}</h2>
            <p class="text-sm sm:text-base text-secondary leading-relaxed">${h(n)}</p>
          </div>
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              data-open-demo-inquiry="${h(r)}"
              class="magnetic-btn btn-burgundy min-h-[44px] px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Request Demo &amp; Pricing</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4 icon-glide-diag"></i>
            </button>
            <button
              type="button"
              data-route-link="${i}"
              class="btn-outline-theme min-h-[44px] px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Explore ${h(a)}</span>
              <i data-lucide="arrow-right" class="w-4 h-4 text-gold icon-glide-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}function v(e){return`
    <div class="space-y-6">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b" style="border-color: var(--border-hairline);">
        <div class="space-y-2 max-w-3xl">
          <div class="text-xs font-mono-code text-gold uppercase tracking-wider">${h(e.eyebrow)} · ${h(e.statLabel)}</div>
          <h3 class="font-display text-2xl sm:text-3xl text-ink leading-tight" style="text-wrap: balance;">${h(e.headline)}</h3>
          <p class="text-sm sm:text-base text-secondary leading-relaxed">${h(e.summary)}</p>
        </div>
        <button
          type="button"
          data-open-demo-inquiry="Sector Demo — ${h(e.label)}"
          class="btn-burgundy px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 self-start lg:self-auto"
        >
          <span>Demo for ${h(e.shortLabel)}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 icon-glide-right"></i>
        </button>
      </div>

      <!-- Covered Departments & Entities -->
      <div>
        <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-3">Departments, Authorities &amp; Subrecipients Assisted</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          ${e.entities.map(e=>`
            <div class="surface-elevated hover-subcard rounded-2xl p-4 flex flex-col justify-between gap-2.5">
              <div>
                <div class="font-display text-base text-ink leading-snug">${h(e.name)}</div>
                <p class="text-xs text-secondary mt-1.5 leading-relaxed">${h(e.focus)}</p>
              </div>
              <div class="pt-2.5 border-t text-[11px] font-mono-code text-gold" style="border-color: var(--border-hairline);">
                ${h(e.grantsManaged)}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- 3-Pillar Operational & Regulatory Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        <div class="surface-elevated rounded-2xl p-5 space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-mono-code uppercase tracking-wider text-burgundy font-semibold">01 · Core Management Challenges</span>
            <i data-lucide="alert-triangle" class="w-4 h-4 text-burgundy shrink-0"></i>
          </div>
          <ul class="space-y-2.5 text-xs sm:text-sm text-secondary leading-relaxed">
            ${e.challenges.map(e=>`
              <li class="flex items-start gap-2">
                <span class="text-burgundy font-mono-code mt-0.5 shrink-0">•</span>
                <span>${h(e)}</span>
              </li>
            `).join(``)}
          </ul>
        </div>

        <div class="surface-elevated rounded-2xl p-5 space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold">02 · Applicable Regulatory &amp; Audit Rules</span>
            <i data-lucide="book-open-check" class="w-4 h-4 text-gold shrink-0"></i>
          </div>
          <ul class="space-y-2.5 text-xs sm:text-sm text-ink leading-relaxed">
            ${e.regulations.map(e=>`
              <li class="flex items-start gap-2">
                <span class="text-gold font-mono-code mt-0.5 shrink-0">§</span>
                <span>${h(e)}</span>
              </li>
            `).join(``)}
          </ul>
        </div>

        <div class="surface-elevated rounded-2xl p-5 space-y-3" style="border-color: rgba(45, 212, 191, 0.28);">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-mono-code uppercase tracking-wider text-[#2DD4BF] font-semibold">03 · Unified Platform Automation</span>
            <i data-lucide="shield-check" class="w-4 h-4 text-[#2DD4BF] shrink-0"></i>
          </div>
          <ul class="space-y-2.5 text-xs sm:text-sm text-ink leading-relaxed">
            ${e.automation.map(e=>`
              <li class="flex items-start gap-2">
                <span class="text-[#2DD4BF] font-mono-code mt-0.5 shrink-0">✓</span>
                <span>${h(e)}</span>
              </li>
            `).join(``)}
          </ul>
        </div>
      </div>
    </div>
  `}function y(e){return`
    <div class="space-y-6">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b" style="border-color: var(--border-hairline);">
        <div class="space-y-2 max-w-3xl">
          <div class="text-xs font-mono-code text-gold uppercase tracking-wider">${h(e.eyebrow)} · ${h(e.statBadge)}</div>
          <h3 class="font-display text-2xl sm:text-3xl text-ink leading-tight" style="text-wrap: balance;">${h(e.headline)}</h3>
          <p class="text-sm sm:text-base text-secondary leading-relaxed">${h(e.summary)}</p>
        </div>
      </div>

      <!-- Full Grant Lifecycle Strip -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${e.lifecycleCoverage.map(e=>`
          <div class="surface-elevated rounded-2xl p-4">
            <div class="text-xs font-mono-code text-gold font-semibold">${h(e.stage)}</div>
            <p class="text-xs text-secondary mt-1.5 leading-relaxed">${h(e.detail)}</p>
          </div>
        `).join(``)}
      </div>

      <!-- Covered Grant Programs -->
      <div>
        <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-3">Covered Grant &amp; Revenue Programs</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${e.programs.map(e=>`
            <div class="surface-elevated hover-subcard rounded-2xl p-4 flex flex-col justify-between gap-2">
              <div class="flex items-center justify-between gap-2">
                <span class="font-display text-base sm:text-lg text-ink">${h(e.name)}</span>
                <span class="text-[11px] font-mono-code text-gold whitespace-nowrap shrink-0">${h(e.code)}</span>
              </div>
              <p class="text-xs text-secondary leading-relaxed">${h(e.useCase)}</p>
              <div class="text-[11px] font-mono-code text-muted-ink pt-1.5 border-t" style="border-color: var(--border-hairline);">
                Statutory Authority: ${h(e.authority)}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- 3-Column Challenges / Rules / Automation -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        <div class="surface-elevated rounded-2xl p-5 space-y-2.5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-burgundy font-semibold">Core Management Challenges</div>
          <ul class="space-y-2 text-xs sm:text-sm text-secondary leading-relaxed">
            ${e.challenges.map(e=>`<li>• ${h(e)}</li>`).join(``)}
          </ul>
        </div>
        <div class="surface-elevated rounded-2xl p-5 space-y-2.5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold">Applicable Regulatory &amp; Audit Rules</div>
          <ul class="space-y-2 text-xs sm:text-sm text-ink leading-relaxed">
            ${e.regulations.map(e=>`<li>§ ${h(e)}</li>`).join(``)}
          </ul>
        </div>
        <div class="surface-elevated rounded-2xl p-5 space-y-2.5" style="border-color: rgba(45, 212, 191, 0.28);">
          <div class="text-xs font-mono-code uppercase tracking-wider text-[#2DD4BF] font-semibold">How DocuShield Automates Oversight</div>
          <ul class="space-y-2 text-xs sm:text-sm text-ink leading-relaxed">
            ${e.automation.map(e=>`<li>✓ ${h(e)}</li>`).join(``)}
          </ul>
        </div>
      </div>
    </div>
  `}function b(n){let r=e.find(e=>e.id===n.activeBranch)||e[0],i=t.find(e=>e.id===n.activeFundingCat)||t[0];return`
    ${g(`PAGE 02`,`Agencies & Funding Streams`,`research`,`Research & Audit Insights`)}

    <!-- Page Hero -->
    <section class="burgundy-aurora py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div class="lg:col-span-8 space-y-4">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">
            Ecosystem &amp; Lifecycle Grant Coverage
          </div>
          <h1 class="font-display text-3xl sm:text-5xl text-ink leading-[1.1]" style="text-wrap: balance;">
            Every agency and funding stream in one workspace.
          </h1>
          <p class="text-sm sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Standardize case intake, document reading, and grant finance verification across cities, counties, state agencies, and nonprofits on local workstations.
          </p>
        </div>
        <div class="lg:col-span-4 space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0" style="border-color: var(--border-hairline);">
          <div class="surface-card rounded-2xl border p-4 space-y-2.5" style="border-color: var(--border-hairline);">
            <div class="flex items-center justify-between text-[11px] font-mono-code">
              <span class="text-gold">AGENCY COMPLIANCE MATRIX</span>
              <span class="text-[#2DD4BF]">302 Mapped</span>
            </div>
            <div class="space-y-1.5 text-xs">
              <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
                <span class="text-ink">Municipalities &amp; PHAs</span>
                <span class="font-mono-code text-gold">24 CFR 570 / 982</span>
              </div>
              <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
                <span class="text-ink">County HHSA &amp; CoCs</span>
                <span class="font-mono-code text-gold">2 CFR 200.332</span>
              </div>
              <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
                <span class="text-ink">501(c)(3) Subrecipients</span>
                <span class="font-mono-code text-[#2DD4BF]">100% Local</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <div class="font-display text-2xl sm:text-3xl text-ink tabular-nums">4</div>
              <div class="text-xs text-muted-ink">Civic &amp; Nonprofit Tiers</div>
            </div>
            <div>
              <div class="font-display text-2xl sm:text-3xl text-gold tabular-nums">302</div>
              <div class="text-xs text-muted-ink">CA Agencies Mapped</div>
            </div>
            <div>
              <div class="font-display text-2xl sm:text-3xl text-[#2DD4BF] tabular-nums">100%</div>
              <div class="text-xs text-muted-ink">Local Execution</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: Interactive Organization Branch Explorer -->
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-page">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-1.5">01. Organization Branch Explorer</div>
            <h2 class="font-display text-2xl sm:text-4xl text-ink">Select a government branch or subrecipient tier</h2>
          </div>
          <p class="text-xs sm:text-sm text-secondary max-w-md">
            Inspect the departments we serve, statutory audit rules enforced, and how local automation removes administrative bottlenecks.
          </p>
        </div>

        <div class="fold-swipe-bar flex gap-2.5" role="tablist" aria-label="Organization Branches">
          ${e.map(e=>{let t=e.id===r.id;return`
              <button
                type="button"
                role="tab"
                aria-selected="${t}"
                data-branch-tab="${e.id}"
                class="branch-tab-btn fold-snap-pill min-h-[44px] ${t?`tab-pill-active`:``} btn-outline-theme px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <i data-lucide="${e.icon}" class="w-4 h-4"></i>
                <span>${h(e.label)}</span>
              </button>
            `}).join(``)}
        </div>

        <div id="agency-branch-stage" class="spotlight-card surface-card rounded-3xl p-6 sm:p-8">
          ${v(r)}
        </div>
      </div>
    </section>

    <!-- Section 2: Full Grant Lifecycle Funding Stream Coverage -->
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-alt border-t" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-1.5">02. Funding Stream Lifecycle Mapping</div>
            <h2 class="font-display text-2xl sm:text-4xl text-ink">Every federal, state, county, and municipal dollar covered</h2>
          </div>
          <p class="text-xs sm:text-sm text-secondary max-w-md">
            Switch between Federal Uniform Guidance awards, State categorical block grants, and dedicated County/Municipal funds.
          </p>
        </div>

        <div class="fold-swipe-bar flex gap-2.5" role="tablist" aria-label="Funding Stream Categories">
          ${t.map(e=>{let t=e.id===i.id;return`
              <button
                type="button"
                role="tab"
                aria-selected="${t}"
                data-funding-cat-tab="${e.id}"
                class="funding-cat-btn fold-snap-pill min-h-[44px] ${t?`tab-pill-active`:``} btn-outline-theme px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <i data-lucide="${e.icon}" class="w-4 h-4"></i>
                <span>${h(e.label)}</span>
              </button>
            `}).join(``)}
        </div>

        <div id="funding-stream-stage" class="spotlight-card surface-card rounded-3xl p-6 sm:p-8">
          ${y(i)}
        </div>
      </div>
    </section>

    ${_(`Ready to Protect Every Grant Stream?`,`Deploy standardized case intake and pre-payout fraud defense across your agencies.`,`Request a live walkthrough tailored to your CDBG, HOME, State housing, County measure, or General Fund portfolio.`,`Agencies & Funding Streams — Multi-Grant Suite Walkthrough`,`research`,`Research & Audit Insights`)}
  `}function x(e){let t=n[e]||n[0];return`
    <div class="space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b" style="border-color: var(--border-hairline);">
        <div>
          <div class="text-xs font-mono-code text-gold uppercase tracking-wider">${h(t.stageNumber)} · ${h(t.cfrCitation)}</div>
          <h3 class="font-display text-2xl sm:text-3xl text-ink mt-1">${h(t.title)}</h3>
        </div>
      </div>

      <p class="text-sm sm:text-base text-secondary leading-relaxed">${h(t.summary)}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="surface-elevated rounded-2xl p-5 space-y-2">
          <div class="text-xs font-mono-code uppercase tracking-wider text-burgundy font-semibold">Traditional Manual Bottleneck</div>
          <p class="text-xs sm:text-sm text-secondary leading-relaxed">${h(t.traditionalBottleneck)}</p>
        </div>
        <div class="surface-elevated rounded-2xl p-5 space-y-2" style="border-color: rgba(45, 212, 191, 0.3);">
          <div class="text-xs font-mono-code uppercase tracking-wider text-[#2DD4BF] font-semibold">DocuShield Automated Control</div>
          <p class="text-xs sm:text-sm text-ink leading-relaxed">${h(t.docuShieldControl)}</p>
        </div>
      </div>

      <div class="surface-elevated rounded-2xl p-4 sm:p-5">
        <div class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold mb-2.5">Audit-Ready Evidentiary Outputs Produced</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${t.keyDeliverables.map((e,t)=>`
            <div class="p-3 rounded-xl surface-card text-xs text-ink flex items-start gap-2">
              <span class="font-mono-code text-gold font-semibold shrink-0">0${t+1}.</span>
              <span>${h(e)}</span>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function S(e){let t=e.activeLifecycleIdx;return`
    ${g(`PAGE 03`,`Research & Audit Insights`,`analytics`,`Funding & Data Analytics`)}

    <!-- Page Hero -->
    <section class="burgundy-aurora py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div class="lg:col-span-8 space-y-4">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">
            Public-Sector Compliance &amp; Forensic Research
          </div>
          <h1 class="font-display text-3xl sm:text-5xl text-ink leading-[1.1]" style="text-wrap: balance;">
            Why traditional sample-based desk reviews miss disallowed costs—and how 100% pre-payout verification fixes it.
          </h1>
          <p class="text-sm sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Grounded in 2 CFR Part 200 Uniform Guidance, 24 CFR Part 570 HUD CDBG rules, and OIG Single Audit findings across municipal, county, and subrecipient portfolios.
          </p>
        </div>
        <div class="lg:col-span-4 grid grid-cols-3 gap-3 pt-4 lg:pt-0 border-t lg:border-t-0" style="border-color: var(--border-hairline);">
          <div>
            <div class="font-display text-2xl sm:text-3xl text-ink tabular-nums">5 Stages</div>
            <div class="text-xs text-muted-ink">Subrecipient Lifecycle</div>
          </div>
          <div>
            <div class="font-display text-2xl sm:text-3xl text-gold tabular-nums">-89%</div>
            <div class="text-xs text-muted-ink">Desk-Review Hours</div>
          </div>
          <div>
            <div class="font-display text-2xl sm:text-3xl text-[#2DD4BF] tabular-nums">100%</div>
            <div class="text-xs text-muted-ink">Pre-Payout Checked</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: 5-Stage Grant & Subrecipient Management Lifecycle -->
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-page">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="max-w-3xl">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-1.5">01. The 5-Stage Grant &amp; Subrecipient Lifecycle</div>
          <h2 class="font-display text-2xl sm:text-4xl text-ink">End-to-end statutory controls from pre-award risk to IDIS closeout</h2>
          <p class="mt-2 text-xs sm:text-sm text-secondary">
            Click any stage below to inspect the applicable CFR citations, where manual workflows break down, and what DocuShield automates locally.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" role="tablist" aria-label="5-Stage Grant Lifecycle">
          ${n.map((e,n)=>{let r=n===t;return`
              <button
                type="button"
                role="tab"
                aria-selected="${r}"
                data-lifecycle-step="${n}"
                class="lifecycle-step-btn ${r?`tab-pill-active`:``} btn-outline-theme p-4 rounded-2xl text-left flex flex-col justify-between gap-2"
              >
                <div class="text-[11px] font-mono-code opacity-85">${h(e.stageNumber)}</div>
                <div class="font-display text-base leading-snug">${h(e.shortTitle)}</div>
                <div class="text-[11px] font-mono-code opacity-75 truncate">${h(e.cfrCitation.split(`•`)[0].trim())}</div>
              </button>
            `}).join(``)}
        </div>

        <div id="lifecycle-detail-card" class="spotlight-card surface-card rounded-3xl p-6 sm:p-8">
          ${x(t)}
        </div>
      </div>
    </section>

    <!-- Section 2: Primary Causes of Disallowed Costs & Audit Findings -->
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-alt border-y" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto space-y-8">
        <div class="max-w-3xl">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-1.5">02. Root Causes of Questioned &amp; Disallowed Costs</div>
          <h2 class="font-display text-2xl sm:text-4xl text-ink">Top 5 Single Audit &amp; HUD OIG repayment findings (2 CFR 200 &amp; 24 CFR 570)</h2>
          <p class="mt-2 text-xs sm:text-sm text-secondary">
            Most audit clawbacks stem from five repeatable documentation and cross-ledger blind spots that post-payout sampling catches too late.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          ${r.map((e,t)=>`
            <article class="spotlight-card surface-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-4 ${t===r.length-1?`lg:col-span-2`:``}">
              <div class="space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code">
                  <span class="text-gold font-semibold">${h(e.rank)} · ${h(e.cfrReference)}</span>
                  <span class="text-burgundy">${h(e.exposureLevel)}</span>
                </div>
                <h3 class="font-display text-xl sm:text-2xl text-ink leading-snug">${h(e.title)}</h3>
                <p class="text-xs sm:text-sm text-secondary leading-relaxed">${h(e.mechanismOfFailure)}</p>

                <div class="grid grid-cols-1 ${t===r.length-1?`md:grid-cols-2`:``} gap-5 pt-3 border-t" style="border-color: var(--border-hairline);">
                  <div class="space-y-1">
                    <div class="text-[11px] font-mono-code text-muted-ink inline-flex items-center gap-1.5">
                      <span class="ai-glow-dot-yellow"></span>
                      <span>Where Manual Review Stalls</span>
                    </div>
                    <p class="text-xs text-secondary leading-relaxed">${h(e.realWorldScenario)}</p>
                  </div>
                  <div class="space-y-1">
                    <div class="text-[11px] font-mono-code text-[#2DD4BF] inline-flex items-center gap-1.5">
                      <span class="ai-glow-dot-green"></span>
                      <span>On-Device AI Prevention</span>
                    </div>
                    <p class="text-xs text-ink leading-relaxed">${h(e.automatedPrevention)}</p>
                  </div>
                </div>
              </div>
            </article>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- Section 3: Operational Impact Comparison -->
    <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 surface-page">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="max-w-3xl">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold mb-1.5">03. Operational Benchmark Comparison</div>
          <h2 class="font-display text-2xl sm:text-4xl text-ink">Manual 5%–10% post-payout sampling vs. DocuShield 100% pre-payout verification</h2>
        </div>

        <div class="spotlight-card surface-card rounded-3xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="surface-elevated border-b text-xs font-mono-code uppercase tracking-wider" style="border-color: var(--border-hairline);">
                  <th class="py-4 px-5 text-gold">Oversight Dimension</th>
                  <th class="py-4 px-5 text-muted-ink">Traditional Manual Spreadsheets &amp; Sampling</th>
                  <th class="py-4 px-5 text-[#2DD4BF]">DocuShield 100% Pre-Payout Local Suite</th>
                  <th class="py-4 px-5 text-right text-ink">Measured Impact</th>
                </tr>
              </thead>
              <tbody class="divide-y text-xs sm:text-sm" style="border-color: var(--border-hairline);">
                ${i.map(e=>`
                  <tr class="hover:bg-white/[0.02] transition-colors" style="border-color: var(--border-hairline);">
                    <td class="py-4 px-5 font-display text-base text-ink align-top">${h(e.metric)}</td>
                    <td class="py-4 px-5 text-secondary align-top leading-relaxed">${h(e.manualApproach)}</td>
                    <td class="py-4 px-5 text-ink align-top leading-relaxed">${h(e.docuShieldApproach)}</td>
                    <td class="py-4 px-5 text-right font-mono-code tabular-nums text-gold font-semibold align-top whitespace-nowrap">${h(e.impactDelta)}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    ${_(`Eliminate Single Audit Surprises`,`Move from 5% post-payout sampling to 100% effortless pre-payout verification.`,`See live grant ledger analytics, burn-rate timeliness alerts, and subrecipient risk matrices in action.`,`Research & Audit Insights — Pre-Payout Compliance Briefing`,`analytics`,`Funding & Data Analytics`)}
  `}function C(e){let t=d(e.analyticsFund),n=f(e.analyticsFund,e.subrecipientSearch,e.subrecipientRisk),r=p(e.analyticsFund,e.reconciliationOutcome);return`
    <div class="space-y-10">
      <!-- KPI Summary Strip -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="spotlight-card surface-card rounded-2xl p-5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-muted-ink">Total Awarded Portfolio</div>
          <div class="font-display text-2xl sm:text-3xl text-ink mt-1.5 tabular-nums">${l(t.totalAwarded)}</div>
          <div class="text-xs text-gold mt-1 font-mono-code tabular-nums">${t.streamCount} active department grant ledgers</div>
        </div>
        <div class="spotlight-card surface-card rounded-2xl p-5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-muted-ink">Contractually Encumbered</div>
          <div class="font-display text-2xl sm:text-3xl text-ink mt-1.5 tabular-nums">${l(t.totalEncumbered)}</div>
          <div class="text-xs text-secondary mt-1 font-mono-code tabular-nums">${t.encumberedPct}% of awarded authority obligated</div>
        </div>
        <div class="spotlight-card surface-card rounded-2xl p-5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-muted-ink">Verified &amp; Approved Drawdowns</div>
          <div class="font-display text-2xl sm:text-3xl text-[#2DD4BF] mt-1.5 tabular-nums">${l(t.approvedDrawdowns)}</div>
          <div class="text-xs text-secondary mt-1 font-mono-code tabular-nums">${t.utilizationPct}% disbursed after 100% forensic check</div>
        </div>
        <div class="spotlight-card surface-card rounded-2xl p-5">
          <div class="text-xs font-mono-code uppercase tracking-wider text-muted-ink">Remaining Available Balance</div>
          <div class="font-display text-2xl sm:text-3xl text-gold mt-1.5 tabular-nums">${l(t.remainingBalance)}</div>
          <div class="text-xs text-secondary mt-1 font-mono-code tabular-nums">${t.onTrackCount}/${t.streamCount} streams meeting timeliness gates</div>
        </div>
      </div>

      <!-- Panel 1: Departmental Burn-Rate & Timeliness Progress Bars -->
      <div class="spotlight-card surface-card rounded-3xl p-6 sm:p-8 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b" style="border-color: var(--border-hairline);">
          <div>
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">01. Multi-Source Grant Ledger &amp; Timeliness Burn Rates</div>
            <h2 class="font-display text-xl sm:text-2xl text-ink mt-1">Departmental expenditure velocity vs. statutory recapture targets</h2>
          </div>
          <div class="flex items-center gap-4 text-xs font-mono-code text-muted-ink">
            <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm inline-block" style="background: linear-gradient(90deg, var(--burgundy-bright), var(--accent-gold));"></span>Approved Drawdown</span>
            <span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm inline-block bg-white/20"></span>Encumbered</span>
          </div>
        </div>

        <div class="space-y-4">
          ${t.ledgers.map(e=>{let t=Math.round(e.approvedDrawdowns/e.awarded*1e3)/10,n=Math.round(e.encumbered/e.awarded*1e3)/10,r=e.awarded-e.approvedDrawdowns,i=e.timelinessStatus===`Watch — Accelerated Draw`?`text-[#F59E0B]`:`text-[#2DD4BF]`;return`
              <div class="surface-elevated rounded-2xl p-4 sm:p-5 space-y-3">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                  <div>
                    <div class="text-xs font-mono-code text-gold">${h(e.fundBadge)} · ${h(e.grantCode)} · ${h(e.department)}</div>
                    <div class="font-display text-base sm:text-lg text-ink mt-0.5">${h(e.grantName)}</div>
                  </div>
                  <div class="flex flex-wrap items-center gap-4 text-xs font-mono-code tabular-nums">
                    <span class="text-secondary">Awarded: <strong class="text-ink">${u(e.awarded)}</strong></span>
                    <span class="text-secondary">Encumbered: <strong class="text-ink">${u(e.encumbered)}</strong></span>
                    <span class="text-secondary">Drawn: <strong class="text-[#2DD4BF]">${u(e.approvedDrawdowns)} (${t}%)</strong></span>
                    <span class="text-secondary">Rem: <strong class="text-gold">${u(r)}</strong></span>
                  </div>
                </div>

                <!-- Layered Burn-Rate Progress Track -->
                <div class="relative h-3 w-full rounded-full overflow-hidden" style="background-color: var(--bg-page); border: 1px solid var(--border-hairline);">
                  <div class="absolute inset-y-0 left-0 bg-white/15 rounded-full" style="width: ${Math.min(100,n)}%;"></div>
                  <div class="absolute inset-y-0 left-0 rounded-full" style="width: ${Math.min(100,t)}%; background: linear-gradient(90deg, var(--burgundy-base), var(--burgundy-bright), var(--accent-gold));"></div>
                  <div
                    class="absolute inset-y-0 w-0.5 bg-white/80"
                    style="left: ${Math.min(99,e.timelinessTargetPct)}%;"
                    title="Statutory Target: ${e.timelinessTargetPct}%"
                  ></div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span class="text-muted-ink">${h(e.timelinessDeadline)} · Target Benchmark: <span class="font-mono-code tabular-nums text-ink">${e.timelinessTargetPct}%</span></span>
                  <span class="font-mono-code font-semibold ${i}">${h(e.timelinessStatus)}</span>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Panel 2: Subrecipient Portfolio & Compliance Matrix -->
      <div class="spotlight-card surface-card rounded-3xl p-6 sm:p-8 space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b" style="border-color: var(--border-hairline);">
          <div>
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">02. Subrecipient Portfolio &amp; Compliance Matrix</div>
            <h2 class="font-display text-xl sm:text-2xl text-ink mt-1">Agency drawdown utilization, documentation completeness &amp; 2 CFR 200.332 risk tiers</h2>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <div class="relative">
              <label for="subrecipient-search" class="sr-only">Search funded agencies or grants</label>
              <input
                id="subrecipient-search"
                type="search"
                value="${h(e.subrecipientSearch)}"
                placeholder="Filter agency or grant..."
                class="px-3.5 py-2 rounded-xl text-xs sm:text-sm surface-elevated text-ink placeholder:text-[#9E8A92] focus:outline-none focus:ring-2 focus:ring-[#C43E62] w-52 sm:w-60"
              />
            </div>
            <div class="flex flex-wrap gap-1.5" role="group" aria-label="Filter by Risk Tier">
              ${[`ALL`,`Low Risk`,`Moderate`,`Elevated — CAP Active`].map(t=>`
                  <button
                    type="button"
                    data-risk-filter="${t}"
                    class="risk-filter-btn ${e.subrecipientRisk===t?`tab-pill-active`:``} btn-outline-theme px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0"
                  >
                    ${h(t===`ALL`?`All Tiers`:t===`Elevated — CAP Active`?`CAP Active`:t)}
                  </button>
                `).join(``)}
            </div>
          </div>
        </div>

        ${n.length===0?`
          <div class="surface-elevated rounded-2xl p-8 text-center space-y-3">
            <div class="font-display text-lg text-ink">No subrecipients match the current search and risk filter.</div>
            <p class="text-xs sm:text-sm text-secondary">Clear your agency search query or reset the risk tier selector to inspect all funded subrecipients.</p>
            <button type="button" id="reset-subrecipient-filters-btn" class="btn-outline-theme px-4 py-2 rounded-xl text-xs font-semibold">
              Reset Portfolio Filters
            </button>
          </div>
        `:`
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="surface-elevated border-b text-[11px] font-mono-code uppercase tracking-wider" style="border-color: var(--border-hairline);">
                  <th class="py-3.5 px-4 text-gold">Subrecipient Agency</th>
                  <th class="py-3.5 px-4 text-muted-ink">Grant Source</th>
                  <th class="py-3.5 px-4 text-right text-muted-ink">Award / Utilization</th>
                  <th class="py-3.5 px-4 text-right text-muted-ink">Doc Score</th>
                  <th class="py-3.5 px-4 text-muted-ink">Desk-Audit Standing</th>
                  <th class="py-3.5 px-4 text-right text-muted-ink">Risk Tier</th>
                </tr>
              </thead>
              <tbody class="divide-y text-xs sm:text-sm" style="border-color: var(--border-hairline);">
                ${n.map(e=>{let t=e.riskTier===`Low Risk`?`text-[#2DD4BF]`:e.riskTier===`Moderate`?`text-[#F59E0B]`:`text-[#F3B3C3]`;return`
                    <tr class="hover:bg-white/[0.02] transition-colors" style="border-color: var(--border-hairline);">
                      <td class="py-3.5 px-4 align-top">
                        <div class="font-display text-sm sm:text-base text-ink">${h(e.agencyName)}</div>
                        <div class="text-[11px] text-muted-ink mt-0.5">${h(e.entityType)} · ${h(e.highlightNote)}</div>
                      </td>
                      <td class="py-3.5 px-4 text-secondary align-top text-xs">${h(e.grantSource)}</td>
                      <td class="py-3.5 px-4 text-right align-top font-mono-code tabular-nums whitespace-nowrap">
                        <div class="text-ink font-semibold">${u(e.awardAmount)}</div>
                        <div class="text-[11px] text-gold">${e.drawdownPct}% drawn</div>
                      </td>
                      <td class="py-3.5 px-4 text-right align-top font-mono-code tabular-nums whitespace-nowrap">
                        <span class="${e.docCompletenessScore>=95?`text-[#2DD4BF]`:e.docCompletenessScore>=88?`text-gold`:`text-[#F59E0B]`} font-semibold">${e.docCompletenessScore}%</span>
                      </td>
                      <td class="py-3.5 px-4 align-top text-xs text-ink whitespace-nowrap">${h(e.deskAuditStatus)}</td>
                      <td class="py-3.5 px-4 text-right align-top font-mono-code text-xs font-semibold whitespace-nowrap ${t}">
                        ${h(e.riskTier)}
                      </td>
                    </tr>
                  `}).join(``)}
              </tbody>
            </table>
          </div>
        `}
      </div>

      <!-- Panel 3: Cross-Grant Reconciliation Feed -->
      <div class="spotlight-card surface-card rounded-3xl p-6 sm:p-8 space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b" style="border-color: var(--border-hairline);">
          <div>
            <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">03. Cross-Grant Pre-Disbursement Reconciliation Feed</div>
            <h2 class="font-display text-xl sm:text-2xl text-ink mt-1">
              Verified RFR packets &amp; intercepted cost anomalies (${l(r.flaggedTotalUSD)} caught prior to payout)
            </h2>
          </div>

          <div class="flex flex-wrap gap-1.5" role="group" aria-label="Reconciliation Feed Filter">
            ${[[`ALL`,`All Packets (${r.flaggedCount+r.verifiedCount})`],[`FLAGGED_PRE_PAYOUT`,`Blocked Anomalies (${r.flaggedCount})`],[`VERIFIED`,`Cleared Draws (${r.verifiedCount})`]].map(([t,n])=>`
                <button
                  type="button"
                  data-recon-filter="${t}"
                  class="recon-filter-btn ${e.reconciliationOutcome===t?`tab-pill-active`:``} btn-outline-theme px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0"
                >
                  ${h(n)}
                </button>
              `).join(``)}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          ${r.items.map(e=>{let t=e.outcome===`FLAGGED_PRE_PAYOUT`;return`
              <div
                class="surface-elevated rounded-2xl p-5 flex flex-col justify-between gap-3"
                style="border-color: ${t?`var(--burgundy-border)`:`var(--border-hairline)`};"
              >
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code tabular-nums">
                    <span class="${t?`text-[#F3B3C3]`:`text-[#2DD4BF]`} font-semibold">
                      ${t?`▲ PRE-PAYOUT HOLD`:`✓ CLEARED FOR WARRANT`} · ${h(e.categoryTag)}
                    </span>
                    <span class="text-muted-ink">${h(e.packetRef)} · ${h(e.timestamp)}</span>
                  </div>
                  <div class="flex items-baseline justify-between gap-3">
                    <div class="font-display text-base sm:text-lg text-ink">${h(e.subrecipient)}</div>
                    <div class="font-mono-code tabular-nums text-sm sm:text-base font-semibold ${t?`text-gold`:`text-ink`} shrink-0">
                      ${l(e.amount)}
                    </div>
                  </div>
                  <p class="text-xs text-secondary leading-relaxed">${h(e.summary)}</p>
                </div>
                <div class="pt-2.5 border-t text-[11px] font-mono-code text-muted-ink" style="border-color: var(--border-hairline);">
                  ${h(e.ruleReference)}
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    </div>
  `}function w(e){return`
    ${g(`PAGE 04`,`Funding & Data Analytics`,`tools`,`Platform Tools & Capabilities`)}

    <!-- Page Hero -->
    <section class="burgundy-aurora py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto space-y-6">
        <div class="max-w-3xl space-y-3">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">
            Built-In Finance Management Module
          </div>
          <h1 class="font-display text-3xl sm:text-5xl text-ink leading-[1.1]" style="text-wrap: balance;">
            Live grant burn rates, risk scores, and pre-payout controls.
          </h1>
          <p class="text-sm sm:text-lg text-secondary leading-relaxed">
            Filter representative portfolios below to see how the built-in Finance Management module tracks every dollar from obligation to closeout.
          </p>
        </div>

        <!-- Fund Filter Segmented Bar -->
        <div class="fold-swipe-bar flex gap-2" role="tablist" aria-label="Funding Source Filter">
          ${a.map(t=>{let n=e.analyticsFund===t.key;return`
              <button
                type="button"
                role="tab"
                aria-selected="${n}"
                data-fund-filter="${t.key}"
                class="fund-filter-btn fold-snap-pill min-h-[44px] ${n?`tab-pill-active`:``} btn-outline-theme px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0"
              >
                ${h(t.label)}
              </button>
            `}).join(``)}
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 surface-page">
      <div id="analytics-dashboard-container" class="max-w-7xl mx-auto">
        ${C(e)}
      </div>
    </section>

    ${_(`See Your Grant Portfolio Modeled Live`,`Bring burn-rate clarity and duplicate blocking into one workspace.`,`Next, explore all 5 built-in modules included inside our unified program.`,`Funding & Data Analytics — Multi-Grant Dashboard Walkthrough`,`tools`,`Platform Tools & Capabilities`)}
  `}function T(e){let t=m.find(t=>t.id===e.activeToolId)||m[0],n=e.activeToolVariantIdx[t.id]||0,r=t.previewVariants[n]||t.previewVariants[0],i=e=>e===`verify`?`badge-verify`:e===`warn`?`badge-warn`:`badge-burgundy`,a=e=>e===`verify`?`text-[#2DD4BF]`:e===`warn`?`text-[#F59E0B]`:`text-[#F3B3C3]`;return`
    <div class="space-y-6">
      <!-- Tool Specification Card -->
      <div class="spotlight-card surface-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b" style="border-color: var(--border-hairline);">
          <div class="space-y-2 max-w-3xl">
            <div class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold">
              ${h(t.numberLabel)} · Included Built-In Module
            </div>
            <h2 class="font-display text-2xl sm:text-3xl text-ink leading-tight">${h(t.name)}</h2>
            <p class="text-sm sm:text-base text-secondary leading-relaxed">${h(t.tagline)}</p>
          </div>
          <button
            type="button"
            data-open-demo-inquiry="Built-In Module Demo — ${h(t.name)}"
            class="btn-burgundy px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 self-start"
          >
            <span>Demo This Module</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 icon-glide-right"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- 1. Purpose & Target Users -->
          <div class="surface-elevated rounded-2xl p-5 space-y-3">
            <div class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold">01 · Purpose &amp; Target Users</div>
            <p class="text-xs sm:text-sm text-secondary leading-relaxed">${h(t.purpose)}</p>
            <div class="pt-2 border-t space-y-1.5" style="border-color: var(--border-hairline);">
              <div class="text-[11px] font-mono-code text-muted-ink uppercase">Built For</div>
              <ul class="space-y-1 text-xs text-ink">
                ${t.targetUsers.map(e=>`<li>• ${h(e)}</li>`).join(``)}
              </ul>
            </div>
          </div>

          <!-- 2. Supported Inputs -->
          <div class="surface-elevated rounded-2xl p-5 space-y-3">
            <div class="text-xs font-mono-code uppercase tracking-wider text-gold font-semibold">02 · Supported Local Inputs</div>
            <ul class="space-y-2.5 text-xs sm:text-sm text-ink leading-relaxed">
              ${t.supportedInputs.map(e=>`
                <li class="flex items-start gap-2">
                  <span class="text-gold font-mono-code shrink-0">→</span>
                  <span>${h(e)}</span>
                </li>
              `).join(``)}
            </ul>
          </div>

          <!-- 3. Automated Checks Performed -->
          <div class="surface-elevated rounded-2xl p-5 space-y-3" style="border-color: rgba(45, 212, 191, 0.28);">
            <div class="text-xs font-mono-code uppercase tracking-wider text-[#2DD4BF] font-semibold">03 · Automated Checks Performed</div>
            <ul class="space-y-2.5 text-xs sm:text-sm text-ink leading-relaxed">
              ${t.automatedChecks.map(e=>`
                <li class="flex items-start gap-2">
                  <span class="text-[#2DD4BF] font-mono-code shrink-0">✓</span>
                  <span>${h(e)}</span>
                </li>
              `).join(``)}
            </ul>
          </div>
        </div>
      </div>

      <!-- 4. Realistic On-Screen AI-Assisted Output Panel -->
      <div class="spotlight-card surface-card rounded-3xl overflow-hidden">
        <div class="px-5 py-3.5 surface-elevated border-b flex flex-wrap items-center justify-between gap-3" style="border-color: var(--border-hairline);">
          <div class="flex items-center gap-2.5">
            <span class="ai-glow-dot-green"></span>
            <span class="text-xs font-mono-code text-ink font-semibold">
              04 · On-Device AI Output View — ${h(t.shortName)}
            </span>
          </div>

          <div class="flex flex-wrap gap-1.5" role="group" aria-label="Output View Selector">
            ${t.previewVariants.map((e,t)=>`
                <button
                  type="button"
                  data-tool-variant="${t}"
                  class="tool-variant-btn ${t===n?`tab-pill-active`:``} btn-outline-theme px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0"
                >
                  ${h(e.label)}
                </button>
              `).join(``)}
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-5 surface-card">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="text-xs font-mono-code text-muted-ink">${h(r.headerRef)}</div>
            <span class="px-3 py-1 rounded-full text-xs font-mono-code font-semibold ${i(r.statusTone)}">
              ${h(r.statusBadge)}
            </span>
          </div>

          <p class="text-xs sm:text-sm text-secondary leading-relaxed pb-3 border-b" style="border-color: var(--border-hairline);">
            ${h(r.summaryBanner)}
          </p>

          <!-- 3-Metric Readout Strip -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            ${r.metricsRow.map(e=>`
              <div class="surface-card rounded-2xl p-4">
                <div class="text-[11px] font-mono-code uppercase tracking-wider text-muted-ink">${h(e.label)}</div>
                <div class="font-display text-xl sm:text-2xl text-ink mt-1 tabular-nums">${h(e.value)}</div>
                <div class="text-xs text-secondary mt-0.5">${h(e.sub)}</div>
              </div>
            `).join(``)}
          </div>

          <!-- Structured Output Inspection Table -->
          <div class="overflow-x-auto rounded-2xl border" style="border-color: var(--border-hairline);">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="surface-elevated border-b text-[11px] font-mono-code uppercase tracking-wider" style="border-color: var(--border-hairline);">
                  <th class="py-3 px-4 text-gold">${h(t.previewColumnHeaders[0])}</th>
                  <th class="py-3 px-4 text-muted-ink">${h(t.previewColumnHeaders[1])}</th>
                  <th class="py-3 px-4 text-muted-ink">${h(t.previewColumnHeaders[2])}</th>
                  <th class="py-3 px-4 text-right text-muted-ink">${h(t.previewColumnHeaders[3])}</th>
                </tr>
              </thead>
              <tbody class="divide-y text-xs sm:text-sm surface-card" style="border-color: var(--border-hairline);">
                ${r.rows.map(e=>`
                  <tr class="hover:bg-white/[0.02]" style="border-color: var(--border-hairline);">
                    <td class="py-3 px-4 font-medium text-ink align-top">${h(e.col1)}</td>
                    <td class="py-3 px-4 font-mono-code tabular-nums text-xs text-secondary align-top">${h(e.col2)}</td>
                    <td class="py-3 px-4 text-xs text-secondary align-top">${h(e.col3)}</td>
                    <td class="py-3 px-4 text-right font-mono-code tabular-nums text-xs font-semibold align-top whitespace-nowrap ${a(e.tone)}">
                      ${h(e.statusLabel)}
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>

          <!-- Footer Local Custody Line -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono-code text-muted-ink">
            <span>${h(r.footerAuditTrail)}</span>
            <span class="text-gold">Read-Only Workstation Preview · Air-Gapped Execution</span>
          </div>
        </div>
      </div>
    </div>
  `}function E(e){return`
    ${g(`PAGE 05`,`Platform Tools & Capabilities`,`home`,`Home Overview`)}

    <!-- Page Hero -->
    <section class="burgundy-aurora py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b" style="border-color: var(--border-hairline);">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div class="lg:col-span-8 space-y-4">
          <div class="text-xs font-mono-code uppercase tracking-widest text-gold font-semibold">
            One Unified Program · 5 Built-In Modules
          </div>
          <h1 class="font-display text-3xl sm:text-5xl text-ink leading-[1.1]" style="text-wrap: balance;">
            Every module included inside one unified workspace.
          </h1>
          <p class="text-sm sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Document Reader, Case Management, Finance Management, Duplicate Scanner, and Closeout Builder—all built into a single local application.
          </p>
        </div>
        <div class="lg:col-span-4 grid grid-cols-3 gap-3 pt-4 lg:pt-0 border-t lg:border-t-0" style="border-color: var(--border-hairline);">
          <div>
            <div class="font-display text-2xl sm:text-3xl text-ink tabular-nums">1 App</div>
            <div class="text-xs text-muted-ink">5 Built-In Modules</div>
          </div>
          <div>
            <div class="font-display text-2xl sm:text-3xl text-gold tabular-nums">0 Bytes</div>
            <div class="text-xs text-muted-ink">Sent to Cloud</div>
          </div>
          <div>
            <div class="font-display text-2xl sm:text-3xl text-[#2DD4BF] tabular-nums">Win/Mac</div>
            <div class="text-xs text-muted-ink">Standard PCs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Master-Detail Tool Explorer -->
    <section class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 surface-page">
      <div class="max-w-7xl mx-auto fold-split-workspace grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <!-- Left Master Rail (5 Tools — Swipeable on Outer Cover, Split Rail on Inner Unfolded & Desktop) -->
        <div class="lg:col-span-4 fold-swipe-bar flex lg:flex-col gap-2.5 lg:sticky lg:top-24" role="tablist" aria-label="Platform Modules">
          ${m.map(t=>{let n=t.id===e.activeToolId;return`
              <button
                type="button"
                role="tab"
                aria-selected="${n}"
                data-tool-tab="${t.id}"
                class="tool-tab-btn fold-snap-pill min-h-[44px] w-auto lg:w-full text-left p-3.5 sm:p-4 rounded-2xl ${n?`tab-pill-active`:`btn-outline-theme`} transition-all flex items-start justify-between gap-3 shrink-0"
              >
                <div class="space-y-0.5 sm:space-y-1">
                  <div class="text-[11px] font-mono-code opacity-85">${h(t.numberLabel)}</div>
                  <div class="font-display text-sm sm:text-lg leading-snug whitespace-nowrap lg:whitespace-normal">${h(t.name)}</div>
                </div>
                <i data-lucide="${t.icon}" class="w-4 h-4 mt-1 shrink-0 opacity-90 hidden sm:block"></i>
              </button>
            `}).join(``)}
        </div>

        <!-- Right Detail & Interactive Preview Stage -->
        <div id="tool-explorer-detail" class="lg:col-span-8 min-w-0">
          ${T(e)}
        </div>
      </div>
    </section>

    ${_(`One Program. Every Module Included.`,`Equip your casework, finance, and document review teams in days.`,`Request all-in-one pricing and see a live workstation demo tailored to your workflows.`,`Unified All-in-One Platform — Licensing & Live Workstation Demo`,`home`,`Home Overview`)}
  `}var D={heroFamilyHome:new URL(`hero_family_home_1794621899614-m_Cqz4zr.jpg`,import.meta.url).href,welcomingFamilyLounge:new URL(`welcoming_family_lounge_1794621900939-GD4X_Uzc.jpg`,import.meta.url).href,happyFamilySofa:new URL(`happy_family_sofa_1794621901310-DbqRDhVX.jpg`,import.meta.url).href,warmCommunityFamily:new URL(`warm_community_family_1794621902816-DJSydTdU.jpg`,import.meta.url).href,sunlitFamilyKitchen:new URL(`sunlit_family_kitchen_1794621904095-By9scPzi.jpg`,import.meta.url).href},O=[{id:`family_intake`,tabLabel:`01. Case Management`,statusLabel:`Case Management · CASE-2026-0842 (Elena Rostova)`,activeMetric:`11m avg. case turnaround`,headline:`Track every household packet from upload to final sign-off.`,description:`Links 12-page financial packets, folio checks, and reviewer notes directly to CASE-2026-0842 in one queue.`,greenBadge:`6 / 6 Docs Verified`,yellowBadge:`Ready for Sign-Off`,calloutTitle:`CASE-2026-0842 · Elena Rostova (Housing & Income Review)`,calloutDetail:`12/12 folio pages verified and October bank ledger reconciled at $6,412.80.`,humanOutcome:`Reviewers move from packet upload to final sign-off in a single workspace.`},{id:`grant_match`,tabLabel:`02. Finance Management`,statusLabel:`Finance Management · Account #...4829 Reconciliation`,activeMetric:`99.6% ledger match rate`,headline:`Verify opening balances, deposits, and monthly cash flow to the penny.`,description:`Cross-checks $4,120.45 opening balance, +$5,691.00 payroll deposits, and -$3,398.65 withdrawals for a $0.00 discrepancy.`,greenBadge:`$0.00 Discrepancy`,yellowBadge:`100% Balanced`,calloutTitle:`Reconciled_Ledger_CASE-2026-0842.pdf / .csv`,calloutDetail:`Verified $5,691.00 payroll income, $1,650.00 lease payment, and +$2,292.35 net monthly surplus.`,humanOutcome:`Eliminates manual calculator tape checks across multi-page statements.`},{id:`integrity_assist`,tabLabel:`03. Document Reader`,statusLabel:`Document Reader · First_Republic_Statement_Oct2026.pdf`,activeMetric:`148 packets reviewed`,headline:`Inspect 12-page statement folios, search text, and pin case notes.`,description:`Verifies Adobe Scan Library metadata, 100% font matrix consistency, and 0 edit layers while linking wire #8841 ($1,650.00) to the lease.`,greenBadge:`12 / 12 Pages Authentic`,yellowBadge:`Note #04 Pinned`,calloutTitle:`First_Republic_Statement_Oct2026.pdf (12 Pages)`,calloutDetail:`Matched 10/14/2026 outgoing wire transfer #8841 ($1,650.00) directly to October lease receipt.`,humanOutcome:`Every figure in the PDF links directly to the case timeline and financial ledger.`}];function k(e){return O.find(t=>t.id===e)||O[0]}function A(e,t,n,r=18){if(n<=0||t<=0||r<=0)return 0;let i=e+t*.5,a=(n*.5-i)/(n*.75),o=Math.round(Math.max(-1,Math.min(1,a))*r*100)/100;return o===0?0:o}function j(e,t,n,r=6,i=4.5){if(n.width<=0||n.height<=0)return{tx:0,ty:0,rx:0,ry:0,spotX:50,spotY:50};let a=(e-n.left)/n.width,o=(t-n.top)/n.height,s=Math.max(0,Math.min(1,a)),c=Math.max(0,Math.min(1,o)),l=(s-.5)*2,u=(c-.5)*2,d=Math.round(l*r*100)/100,f=Math.round(u*r*100)/100,p=Math.round(-u*i*100)/100,m=Math.round(l*i*100)/100;return{tx:d===0?0:d,ty:f===0?0:f,rx:p===0?0:p,ry:m===0?0:m,spotX:Math.round(s*1e3)/10,spotY:Math.round(c*1e3)/10}}var M=null,N=0,P=!1,F=`family_intake`;function I(){return document.documentElement.getAttribute(`data-motion`)===`reduced`||typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function L(e=document){e.querySelectorAll(`img[data-lifestyle-asset]`).forEach(e=>{let t=e.getAttribute(`data-lifestyle-asset`);t&&D[t]&&e.getAttribute(`src`)!==D[t]&&(e.src=D[t]),e.dataset.fallbackBound!==`1`&&(e.dataset.fallbackBound=`1`,e.addEventListener(`error`,()=>{e.classList.add(`opacity-0`);let t=e.parentElement;t&&t.classList.add(`ai-image-fallback-surface`)}))})}function R(){if(N=0,I()){document.querySelectorAll(`.ai-parallax-img`).forEach(e=>{e.style.setProperty(`--parallax-y`,`0px`)});return}let e=window.innerHeight||900;document.querySelectorAll(`.ai-parallax-img`).forEach(t=>{if(t.offsetParent===null)return;let n=t.getBoundingClientRect();if(n.bottom<-120||n.top>e+120)return;let r=Number(t.getAttribute(`data-parallax-max`)||`16`),i=A(n.top,n.height,e,r);t.style.setProperty(`--parallax-y`,`${i}px`)})}function z(){N===0&&(N=window.requestAnimationFrame(R))}function B(){let e=Array.from(document.querySelectorAll(`.ai-scroll-reveal`));if(!e.length)return;if(I()||typeof IntersectionObserver>`u`){e.forEach(e=>{e.classList.add(`is-in-view`),e.setAttribute(`data-scroll-revealed`,`true`)});return}M&&M.disconnect(),M=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target;t.classList.add(`is-in-view`),t.setAttribute(`data-scroll-revealed`,`true`),M?.unobserve(t)}})},{threshold:.12,rootMargin:`0px 0px -4% 0px`});let t=window.innerHeight||900;e.forEach(e=>{if(e.offsetParent===null)return;let n=e.getBoundingClientRect();n.top<t*.92&&n.bottom>0?(e.classList.add(`is-in-view`),e.setAttribute(`data-scroll-revealed`,`true`)):e.classList.contains(`is-in-view`)||M?.observe(e)}),z()}function V(){document.querySelectorAll(`.ai-callout-card`).forEach(e=>{if(e.dataset.aiCalloutBound===`1`)return;e.dataset.aiCalloutBound=`1`;let t=0;e.addEventListener(`mousemove`,n=>{if(I()||window.innerWidth<768)return;let r=n.clientX,i=n.clientY;t||=window.requestAnimationFrame(()=>{t=0;let n=e.getBoundingClientRect(),a=j(r,i,n,5.5,4);e.style.transform=`perspective(900px) translate3d(${a.tx}px, ${a.ty}px, 0) rotateX(${a.rx}deg) rotateY(${a.ry}deg)`,e.style.setProperty(`--ai-spot-x`,`${a.spotX}%`),e.style.setProperty(`--ai-spot-y`,`${a.spotY}%`)})}),e.addEventListener(`mouseleave`,()=>{t&&=(window.cancelAnimationFrame(t),0),e.style.transform=``})})}function H(e){return e===`family_intake`?`
      <div class="surface-card rounded-2xl border p-4 sm:p-5 space-y-3.5" style="border-color: var(--border-hairline);">
        <div class="flex items-center justify-between gap-2 pb-2.5 border-b text-xs font-mono-code" style="border-color: var(--border-hairline);">
          <span class="text-gold">ACTIVE CASE QUEUE · 4 LINKED FILES</span>
          <span class="px-2 py-0.5 rounded badge-verify">148 Packets Reviewed</span>
        </div>
        <div class="space-y-1.5 text-xs">
          <div class="surface-elevated rounded-xl px-3 py-2 flex flex-wrap items-center justify-between gap-2">
            <span class="text-ink font-medium">CASE-2026-0842 · Elena Rostova</span>
            <span class="font-mono-code text-[#2DD4BF]">6/6 Docs · Ready for Sign-Off</span>
          </div>
          <div class="surface-elevated rounded-xl px-3 py-2 flex flex-wrap items-center justify-between gap-2">
            <span class="text-ink font-medium">CASE-2026-0839 · Marcus Vance</span>
            <span class="font-mono-code text-gold">4/5 Docs · Awaiting Oct Statement</span>
          </div>
          <div class="surface-elevated rounded-xl px-3 py-2 flex flex-wrap items-center justify-between gap-2">
            <span class="text-ink font-medium">CASE-2026-0835 · Nadia Koury</span>
            <span class="font-mono-code text-[#2DD4BF]">8/8 Docs · Approved</span>
          </div>
          <div class="surface-elevated rounded-xl px-3 py-2 flex flex-wrap items-center justify-between gap-2" style="border-color: var(--burgundy-border);">
            <span class="text-ink font-medium">CASE-2026-0819 · Devon Brooks</span>
            <span class="font-mono-code text-[#F3B3C3]">3/4 Docs · 1 Flagged Page</span>
          </div>
        </div>
      </div>
    `:e===`grant_match`?`
      <div class="surface-card rounded-2xl border p-4 sm:p-5 space-y-3.5" style="border-color: var(--border-hairline);">
        <div class="flex items-center justify-between gap-2 pb-2.5 border-b text-xs font-mono-code" style="border-color: var(--border-hairline);">
          <span class="text-gold">ACCOUNT #...4829 · OCT 1 – OCT 31, 2026</span>
          <span class="px-2 py-0.5 rounded badge-verify">$0.00 Discrepancy</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div class="surface-elevated rounded-xl p-2">
            <div class="text-[10px] font-mono-code text-muted-ink">Opening</div>
            <div class="font-display text-sm text-ink mt-0.5 tabular-nums">$4,120.45</div>
          </div>
          <div class="surface-elevated rounded-xl p-2">
            <div class="text-[10px] font-mono-code text-muted-ink">Deposits (3)</div>
            <div class="font-display text-sm text-[#2DD4BF] mt-0.5 tabular-nums">+$5,691.00</div>
          </div>
          <div class="surface-elevated rounded-xl p-2">
            <div class="text-[10px] font-mono-code text-muted-ink">Debits (14)</div>
            <div class="font-display text-sm text-gold mt-0.5 tabular-nums">-$3,398.65</div>
          </div>
          <div class="surface-elevated rounded-xl p-2">
            <div class="text-[10px] font-mono-code text-muted-ink">Ending Bal.</div>
            <div class="font-display text-sm text-[#2DD4BF] mt-0.5 tabular-nums">$6,412.80</div>
          </div>
        </div>
        <div class="space-y-1.5 text-xs">
          <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
            <span class="text-ink font-medium">Verified Payroll Income</span>
            <span class="font-mono-code text-[#2DD4BF]">$5,691.00 (100% Documented)</span>
          </div>
          <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
            <span class="text-ink font-medium">Housing &amp; Lease Payments</span>
            <span class="font-mono-code text-gold">$1,650.00 (29.0% of Income)</span>
          </div>
          <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
            <span class="text-ink font-medium">Net Verified Monthly Surplus</span>
            <span class="font-mono-code text-[#2DD4BF]">+$2,292.35</span>
          </div>
        </div>
      </div>
    `:`
    <div class="surface-card rounded-2xl border p-4 sm:p-5 space-y-3.5" style="border-color: var(--border-hairline);">
      <div class="flex items-center justify-between gap-2 pb-2.5 border-b text-xs font-mono-code" style="border-color: var(--border-hairline);">
        <span class="text-gold">Packet: First_Republic_Statement_Oct2026.pdf (12 Pages)</span>
        <span class="px-2 py-0.5 rounded badge-verify">0 Alterations</span>
      </div>
      <div class="grid grid-cols-3 gap-2 text-center text-[11px] font-mono-code">
        <div class="surface-elevated rounded-xl p-2">
          <div class="text-muted-ink">PDF Metadata</div>
          <div class="text-[#2DD4BF] mt-0.5">Adobe Scan Library</div>
        </div>
        <div class="surface-elevated rounded-xl p-2">
          <div class="text-muted-ink">Font Matrix</div>
          <div class="text-[#2DD4BF] mt-0.5">100% Consistent</div>
        </div>
        <div class="surface-elevated rounded-xl p-2">
          <div class="text-muted-ink">Edit Layers</div>
          <div class="text-[#2DD4BF] mt-0.5">0 Detected</div>
        </div>
      </div>
      <div class="space-y-1.5 text-xs">
        <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
          <span class="text-ink font-medium">Page 2, Line 14 · 10/01/2026 ACH Payroll</span>
          <span class="font-mono-code text-[#2DD4BF]">+$2,845.50</span>
        </div>
        <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between" style="border-color: rgba(245, 158, 11, 0.45);">
          <span class="text-ink font-medium">10/14/2026 · Outgoing Wire Transfer #8841</span>
          <span class="font-mono-code text-gold">$1,650.00 (Note #04)</span>
        </div>
        <div class="surface-elevated rounded-xl px-3 py-2 flex items-center justify-between">
          <span class="text-ink font-medium">Page 2, Line 28 · 10/15/2026 ACH Payroll</span>
          <span class="font-mono-code text-[#2DD4BF]">+$2,845.50</span>
        </div>
      </div>
    </div>
  `}function U(e,t){F=e;let n=k(e),r=document.getElementById(`live-ai-status-label`),i=document.getElementById(`live-ai-metric-readout`),a=document.getElementById(`live-ai-headline`),o=document.getElementById(`live-ai-description`),s=document.getElementById(`live-ai-green-badge-text`),c=document.getElementById(`live-ai-yellow-badge-text`),l=document.getElementById(`live-ai-callout-title`),u=document.getElementById(`live-ai-callout-detail`),d=document.getElementById(`live-ai-human-outcome`),f=document.getElementById(`live-ai-visual-stage`),p=document.getElementById(`live-ai-dynamic-body`),m=document.getElementById(`live-ai-hub-card`);r&&(r.textContent=n.statusLabel),i&&(i.textContent=n.activeMetric),a&&(a.textContent=n.headline),o&&(o.textContent=n.description),s&&(s.textContent=n.greenBadge),c&&(c.textContent=n.yellowBadge),l&&(l.textContent=n.calloutTitle),u&&(u.textContent=n.calloutDetail),d&&(d.textContent=n.humanOutcome),f&&(f.innerHTML=H(n.id)),document.querySelectorAll(`[data-ai-mode-btn]`).forEach(e=>{let t=e.getAttribute(`data-ai-mode-btn`)===n.id;e.classList.toggle(`tab-pill-active`,t),e.setAttribute(`aria-selected`,String(t))}),t&&!I()&&(window.__pcFlashCardBorder?.(m),p&&(p.classList.remove(`view-transition-enter`),p.offsetWidth,p.classList.add(`view-transition-enter`)))}function W(){L(document),B(),V()}function G(){if(window.__pcRefreshAiExperience=W,L(document),U(F,!1),B(),V(),P)return;P=!0,window.addEventListener(`scroll`,z,{passive:!0}),window.addEventListener(`resize`,z,{passive:!0}),document.addEventListener(`click`,e=>{let t=e.target;if(!t)return;let n=t.closest(`[data-ai-mode-btn]`);if(n){let t=n.getAttribute(`data-ai-mode-btn`);O.some(e=>e.id===t)&&(window.__pcSpawnClickBurst?.(e,n),U(t,!0));return}let r=t.closest(`[data-ai-callout-inquiry]`);if(r){window.__pcSpawnClickBurst?.(e,r);let t=r.getAttribute(`data-ai-callout-inquiry`)||`On-Device AI Workflow Demo`,n=document.getElementById(`input-message`);n&&(n.value=`Interested in seeing how local AI assists with: ${t}. `);let i=document.getElementById(`connect`);i&&!i.closest(`.hidden`)&&(i.scrollIntoView({behavior:I()?`auto`:`smooth`}),window.setTimeout(()=>{window.__pcFlashCardBorder?.(document.getElementById(`connect-form-card`)),document.getElementById(`input-name`)?.focus()},420),window.__pcShowToast?.(`Selected AI workflow: ${t}`))}});let e=document.getElementById(`top-motion-toggle`);e&&e.addEventListener(`click`,()=>{window.setTimeout(()=>{B(),z()},20)})}var K=[`home`,`agencies`,`research`,`analytics`,`tools`],q={home:`Project Casework — All-in-One Case Management, Finance & Document Reader`,agencies:`Agencies & Funding Streams — Project Casework Unified Platform`,research:`Research & Audit Insights — Project Casework Unified Platform`,analytics:`Finance & Grant Analytics — Project Casework Unified Platform`,tools:`Built-In Modules — Project Casework Unified Platform`};function J(e){if(!e||e===`#`||e===`#/`||e===`#/home`)return`home`;if(e.startsWith(`#/`)){let t=e.slice(2).split(`?`)[0].trim().toLowerCase();if(K.includes(t))return t}return null}function Y(){let n={activeBranch:`cities`,activeFundingCat:`federal`,activeLifecycleIdx:0,analyticsFund:`all`,subrecipientSearch:``,subrecipientRisk:`ALL`,reconciliationOutcome:`ALL`,activeToolId:`forensics_ocr`,activeToolVariantIdx:{forensics_ocr:0,drawdown_validator:0,pattern_scanner:0,desk_audit_monitor:0,closeout_builder:0}},r=J(window.location.hash)||`home`,i=!1,a=document.getElementById(`page-home`),o=document.getElementById(`subpage-outlet`),s=document.getElementById(`mobile-menu-btn`),c=document.getElementById(`nav-drawer-backdrop`),l=document.getElementById(`nav-drawer-panel`),u=document.getElementById(`close-drawer-btn`);if(!a||!o)return;function d(){return document.documentElement.getAttribute(`data-motion`)===`reduced`}function f(){window.lucide&&window.lucide.createIcons(),window.__pcBindInteractiveSurfaces&&window.__pcBindInteractiveSurfaces(),W()}function p(e){e&&!d()&&(e.classList.remove(`view-transition-enter`),e.offsetWidth,e.classList.add(`view-transition-enter`))}function m(){document.querySelectorAll(`[data-drawer-route]`).forEach(e=>{let t=e.getAttribute(`data-drawer-route`)===r;e.classList.toggle(`tab-pill-active`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`);let n=e.querySelector(`.drawer-active-indicator`);n&&(n.textContent=t?`Active`:``,n.classList.toggle(`hidden`,!t))}),r!==`home`&&document.querySelectorAll(`.nav-link-anim`).forEach(e=>e.classList.remove(`nav-active`))}function h(e){if(i=e,c&&l&&s){if(s.setAttribute(`aria-expanded`,String(e)),e)c.classList.remove(`hidden`),l.classList.remove(`hidden`),l.offsetWidth,c.classList.add(`drawer-backdrop-open`),l.classList.add(`drawer-panel-open`),document.body.classList.add(`drawer-is-open`),document.body.style.overflow=`hidden`;else{c.classList.remove(`drawer-backdrop-open`),l.classList.remove(`drawer-panel-open`),document.body.classList.remove(`drawer-is-open`),document.body.style.overflow=``;let e=d()?0:220;window.setTimeout(()=>{i||(c.classList.add(`hidden`),l.classList.add(`hidden`))},e)}}}function g(){window.scrollTo({top:0,left:0,behavior:`instant`}),document.documentElement.scrollTop=0,document.body.scrollTop=0}function _(e){let t=e?.skipScrollTop??!1,i=e?.pushHistory??!0;if(document.title=q[r]||q.home,document.body.setAttribute(`data-active-route`,r),i){let e=r===`home`?window.location.pathname+window.location.search:`#/`+r;if(window.location.hash!==(r===`home`?``:`#/`+r))try{window.history.pushState({route:r},``,e)}catch{r!==`home`&&(window.location.hash=`#/`+r)}}if(r===`home`)o.classList.add(`hidden`),o.innerHTML=``,a.classList.remove(`hidden`),p(a),t||g(),f(),window.ScrollTrigger&&window.setTimeout(()=>window.ScrollTrigger?.refresh(),60);else{a.classList.add(`hidden`),o.classList.remove(`hidden`),r===`agencies`?o.innerHTML=b(n):r===`research`?o.innerHTML=S(n):r===`analytics`?o.innerHTML=w(n):r===`tools`&&(o.innerHTML=E(n)),p(o),t||g();let e=document.getElementById(`scroll-progress-bar`);e&&!t&&(e.style.width=`0%`),f()}m()}function D(e,t){r=e,h(!1),_(t)}function O(e,t){if(h(!1),r!==`home`&&D(`home`,{skipScrollTop:!0,pushHistory:!0}),t){let e=document.getElementById(`input-message`);e&&(e.value=`Interested in exploring: `+t+`. `)}window.setTimeout(()=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:d()?`auto`:`smooth`}),e===`connect`&&window.setTimeout(()=>{let e=document.getElementById(`connect-form-card`);window.__pcFlashCardBorder?.(e),document.getElementById(`input-name`)?.focus()},420)},30)}s&&s.addEventListener(`click`,e=>{e.stopPropagation(),window.__pcSpawnClickBurst?.(e,s),h(!i)}),u&&u.addEventListener(`click`,e=>{window.__pcSpawnClickBurst?.(e,u),h(!1)}),c&&c.addEventListener(`click`,()=>{h(!1)}),document.querySelectorAll(`[data-drawer-route]`).forEach(e=>{e.addEventListener(`click`,t=>{window.__pcSpawnClickBurst?.(t,e);let n=e.getAttribute(`data-drawer-route`);K.includes(n)&&D(n)})});let k=document.getElementById(`drawer-demo-cta`);k&&k.addEventListener(`click`,e=>{window.__pcSpawnClickBurst?.(e,k),O(`connect`,`Full Suite Demo & Licensing Quote`)}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){i&&(h(!1),s?.focus());let e=document.getElementById(`briefing-modal`);e&&!e.classList.contains(`hidden`)&&e.classList.add(`hidden`)}}),document.addEventListener(`click`,e=>{let t=e.target;if(!t)return;let n=t.closest(`a[href^="#"]`);if(n){let t=n.getAttribute(`href`)||``;if(t.startsWith(`#/`)){e.preventDefault();let n=J(t);n&&D(n);return}if(t.length>1&&r!==`home`){e.preventDefault(),window.__pcSpawnClickBurst?.(e,n),O(t.slice(1));return}}let i=t.closest(`.modal-preset-btn`);i&&r!==`home`&&O(`connect`,i.getAttribute(`data-preset-focus`)||void 0)}),o.addEventListener(`click`,r=>{let i=r.target;if(!i)return;let a=i.closest(`[data-route-link]`);if(a){window.__pcSpawnClickBurst?.(r,a);let e=a.getAttribute(`data-route-link`);K.includes(e)&&D(e);return}let s=i.closest(`[data-open-demo-inquiry]`);if(s){window.__pcSpawnClickBurst?.(r,s);let e=s.getAttribute(`data-open-demo-inquiry`)||`Product Demo & Licensing`;O(`connect`,e),window.__pcShowToast?.(`Pre-filled inquiry form for `+e);return}let c=i.closest(`[data-branch-tab]`);if(c){window.__pcSpawnClickBurst?.(r,c);let t=c.getAttribute(`data-branch-tab`);n.activeBranch=t,o.querySelectorAll(`.branch-tab-btn`).forEach(e=>{let n=e.getAttribute(`data-branch-tab`)===t;e.classList.toggle(`tab-pill-active`,n),e.setAttribute(`aria-selected`,String(n))});let i=document.getElementById(`agency-branch-stage`),a=e.find(e=>e.id===t)||e[0];i&&(i.innerHTML=v(a),window.__pcFlashCardBorder?.(i),p(i),f());return}let l=i.closest(`[data-funding-cat-tab]`);if(l){window.__pcSpawnClickBurst?.(r,l);let e=l.getAttribute(`data-funding-cat-tab`);n.activeFundingCat=e,o.querySelectorAll(`.funding-cat-btn`).forEach(t=>{let n=t.getAttribute(`data-funding-cat-tab`)===e;t.classList.toggle(`tab-pill-active`,n),t.setAttribute(`aria-selected`,String(n))});let i=document.getElementById(`funding-stream-stage`),a=t.find(t=>t.id===e)||t[0];i&&(i.innerHTML=y(a),window.__pcFlashCardBorder?.(i),p(i),f());return}let u=i.closest(`[data-lifecycle-step]`);if(u){window.__pcSpawnClickBurst?.(r,u);let e=parseInt(u.getAttribute(`data-lifecycle-step`)||`0`,10);n.activeLifecycleIdx=e,o.querySelectorAll(`.lifecycle-step-btn`).forEach(t=>{let n=parseInt(t.getAttribute(`data-lifecycle-step`)||`0`,10)===e;t.classList.toggle(`tab-pill-active`,n),t.setAttribute(`aria-selected`,String(n))});let t=document.getElementById(`lifecycle-detail-card`);t&&(t.innerHTML=x(e),window.__pcFlashCardBorder?.(t),p(t),f());return}let d=i.closest(`[data-fund-filter]`);if(d){window.__pcSpawnClickBurst?.(r,d);let e=d.getAttribute(`data-fund-filter`);n.analyticsFund=e,o.querySelectorAll(`.fund-filter-btn`).forEach(t=>{let n=t.getAttribute(`data-fund-filter`)===e;t.classList.toggle(`tab-pill-active`,n),t.setAttribute(`aria-selected`,String(n))});let t=document.getElementById(`analytics-dashboard-container`);t&&(t.innerHTML=C(n),p(t),f());return}let m=i.closest(`[data-risk-filter]`);if(m){window.__pcSpawnClickBurst?.(r,m);let e=m.getAttribute(`data-risk-filter`);n.subrecipientRisk=e;let t=document.getElementById(`analytics-dashboard-container`);t&&(t.innerHTML=C(n),f());return}let h=i.closest(`#reset-subrecipient-filters-btn`);if(h){window.__pcSpawnClickBurst?.(r,h),n.subrecipientSearch=``,n.subrecipientRisk=`ALL`;let e=document.getElementById(`analytics-dashboard-container`);e&&(e.innerHTML=C(n),f());return}let g=i.closest(`[data-recon-filter]`);if(g){window.__pcSpawnClickBurst?.(r,g);let e=g.getAttribute(`data-recon-filter`);n.reconciliationOutcome=e;let t=document.getElementById(`analytics-dashboard-container`);t&&(t.innerHTML=C(n),f());return}let _=i.closest(`[data-tool-tab]`);if(_){window.__pcSpawnClickBurst?.(r,_);let e=_.getAttribute(`data-tool-tab`);n.activeToolId=e,o.querySelectorAll(`.tool-tab-btn`).forEach(t=>{let n=t.getAttribute(`data-tool-tab`)===e;t.classList.toggle(`tab-pill-active`,n),t.classList.toggle(`btn-outline-theme`,!n),t.setAttribute(`aria-selected`,String(n))});let t=document.getElementById(`tool-explorer-detail`);t&&(t.innerHTML=T(n),p(t),f());return}let b=i.closest(`[data-tool-variant]`);if(b){window.__pcSpawnClickBurst?.(r,b);let e=parseInt(b.getAttribute(`data-tool-variant`)||`0`,10);n.activeToolVariantIdx[n.activeToolId]=e;let t=document.getElementById(`tool-explorer-detail`);if(t){t.innerHTML=T(n);let e=t.querySelectorAll(`.spotlight-card`)[1]||t;window.__pcFlashCardBorder?.(e),f()}}}),o.addEventListener(`input`,e=>{let t=e.target;if(!t||t.id!==`subrecipient-search`)return;let r=t.selectionStart??t.value.length;n.subrecipientSearch=t.value;let i=document.getElementById(`analytics-dashboard-container`);if(i){i.innerHTML=C(n),f();let e=document.getElementById(`subrecipient-search`);if(e){e.focus();try{e.setSelectionRange(r,r)}catch{}}}}),window.addEventListener(`popstate`,()=>{let e=J(window.location.hash)||`home`;e!==r&&(r=e,h(!1),_({pushHistory:!1}))}),window.addEventListener(`hashchange`,()=>{let e=J(window.location.hash);e&&e!==r&&(r=e,h(!1),_({pushHistory:!1}))}),G(),r===`home`?m():_({pushHistory:!1})}Y();