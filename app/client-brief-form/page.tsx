"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Target,
  Settings,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Send,
  BarChart3,
  Clock,
  ChevronDown,
  Calendar,
  X,
} from "lucide-react";

export default function ProfessionalBriefForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    currentWebsite: "",
    companyName: "",
    companyOverview: "",
    websiteType: "Company Profile",
    projectDescription: "",
    businessDescription: "",
    primaryGoals: "",
    customerProfile: "",
    languages: "",
    pageCount: "1-5",
    mandatoryPages: [] as string[],
    specialFeatures: [] as string[],
    targetKeywords: "",
    priorityChannels: [] as string[],
    marketingTarget: "",
    brandingStatus: "Have Branding (Logo/Assets)",
    designReferences: "",
    budgetRange: "$500-$1500",
    startDate: "",
    launchDate: "",
    additionalNotes: "",
  });

  const steps = [
    {
      id: 1,
      title: "Basics Information",
      icon: <User size={18} />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Strategy",
      icon: <Target size={18} />,
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Technical",
      icon: <Settings size={18} />,
      color: "from-indigo-500 to-blue-400",
    },
    {
      id: 4,
      title: "Marketing",
      icon: <BarChart3 size={18} />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      id: 5,
      title: "Timeline",
      icon: <Clock size={18} />,
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 6,
      title: "Confirm",
      icon: <CheckCircle size={18} />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string,
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const list = prev[category as keyof typeof prev] as string[];
      return checked
        ? { ...prev, [category]: [...list, value] }
        : { ...prev, [category]: list.filter((i: string) => i !== value) };
    });
  };

  const handleSubmitClick = () => {
    setStatus("submitting");
    setTimeout(() => {
      console.log("Final Form Data Submitted:", formData);
      setStatus("success");
    }, 2000);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-100 transition-all animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Success!</h2>
          <p className="text-slate-500 mb-8">
            Brief has been sent. Our team will review it shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10 text-slate-900 leading-relaxed">
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white">
        {/* SIDEBAR */}
        <aside className="hidden md:block md:w-72 lg:w-80 bg-slate-50/50 p-8 border-r border-slate-100 shrink-0">
          <nav className="space-y-1 relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200" />
            {steps.map((s) => (
              <div key={s.id} className="relative flex items-center gap-4 py-3">
                <div
                  className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${step === s.id ? `bg-gradient-to-br ${s.color} text-white shadow-xl scale-110` : step > s.id ? "bg-green-500 text-white" : "bg-white border border-slate-200 text-slate-400"}`}
                >
                  {step > s.id ? <CheckCircle size={18} /> : s.icon}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${step === s.id ? "text-blue-600" : "text-slate-400"}`}
                  >
                    Step 0{s.id}
                  </span>
                  <span
                    className={`font-bold text-sm ${step === s.id ? "text-slate-900" : "text-slate-400"}`}
                  >
                    {s.title}
                  </span>
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* FORM CONTENT */}
        <main className="flex-1 p-8 md:p-16 overflow-y-auto max-h-[90vh]">
          <form className="max-w-2xl mx-auto space-y-8">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Basic Info"
                  subtitle="Your identity and business credentials."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <FloatingInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <FloatingInput
                    label="WhatsApp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                  <FloatingInput
                    label="Current Website"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleInputChange}
                  />
                </div>
                <FloatingInput
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Company Overview"
                  name="companyOverview"
                  value={formData.companyOverview}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Strategy"
                  subtitle="Defining project scope and goals."
                />
                <CustomSelect
                  label="Website Type"
                  name="websiteType"
                  value={formData.websiteType}
                  options={[
                    "Company Profile",
                    "E-Commerce",
                    "Landing Page",
                    "News Portal",
                    "Custom App",
                  ]}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Project Description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Primary Goals"
                  name="primaryGoals"
                  value={formData.primaryGoals}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 3: TECHNICAL */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Technical Details"
                  subtitle="Define the scope and specific technical requirements."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Languages"
                    name="languages"
                    value={formData.languages}
                    placeholder="e.g. English & Indonesian"
                    onChange={handleInputChange}
                  />
                  <CustomSelect
                    label="Est. Pages"
                    name="pageCount"
                    value={formData.pageCount}
                    options={["1-5", "6-10", "11-20", "> 20"]}
                    onChange={handleInputChange}
                  />
                </div>

                <CheckboxGroup
                  label="Mandatory Pages"
                  category="mandatoryPages"
                  selected={formData.mandatoryPages}
                  options={[
                    "Home",
                    "About Us",
                    "Products/Services",
                    "Contact",
                    "Blog/News",
                    "Portfolio",
                    "FAQ",
                  ]}
                  onChange={handleCheckboxChange}
                />

                <CheckboxGroup
                  label="Special Features"
                  category="specialFeatures"
                  selected={formData.specialFeatures}
                  options={[
                    "Booking/Reservation",
                    "Live Chat Integration",
                    "E-Commerce/Payment",
                    "SEO Optimization",
                    "Multi-Language",
                    "CMS (Admin Panel)",
                    "Member Area",
                  ]}
                  onChange={handleCheckboxChange}
                />
              </div>
            )}

            {/* STEP 4: MARKETING */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Marketing & Branding"
                  subtitle="Tell us how you want to be seen and found."
                />
                <FloatingTextArea
                  label="Target Keywords"
                  name="targetKeywords"
                  value={formData.targetKeywords}
                  placeholder="Keywords you want to rank for (e.g. Best IT Consultant, School System...)"
                  onChange={handleInputChange}
                />

                <CheckboxGroup
                  label="Priority Marketing Channels"
                  category="priorityChannels"
                  selected={formData.priorityChannels}
                  options={[
                    "Instagram",
                    "Facebook",
                    "TikTok",
                    "Google Ads (SEM)",
                    "LinkedIn",
                    "Email Marketing",
                  ]}
                  onChange={handleCheckboxChange}
                />

                <FloatingTextArea
                  label="3-6 Month KPI Target"
                  name="marketingTarget"
                  value={formData.marketingTarget}
                  placeholder="What success looks like (e.g. 100 leads/month, 5k visitors...)"
                  onChange={handleInputChange}
                />

                <CustomSelect
                  label="Branding Status"
                  name="brandingStatus"
                  value={formData.brandingStatus}
                  options={[
                    "Have Branding (Logo/Assets)",
                    "Need Branding Services",
                    "Rebranding/Update Existing",
                  ]}
                  onChange={handleInputChange}
                />

                <FloatingTextArea
                  label="Competitor References"
                  name="designReferences"
                  value={formData.designReferences}
                  placeholder="List 2-3 website URLs that you like or your competitors' URLs..."
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 5: TIMELINE & BUDGET */}
            {step === 5 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Finalize Timeline"
                  subtitle="Set your budget and expected delivery dates."
                />

                <CustomSelect
                  label="Budget Range"
                  name="budgetRange"
                  value={formData.budgetRange}
                  options={[
                    "< $500",
                    "$500 - $1,500",
                    "$1,500 - $3,000",
                    "$3,000 - $10,000",
                    "Custom/Enterprise",
                  ]}
                  onChange={handleInputChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomDateInput
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                  <CustomDateInput
                    label="Target Launch Date"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={handleInputChange}
                  />
                </div>

                <FloatingTextArea
                  label="Additional Notes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  placeholder="Any specific technical constraints, integrations, or legal needs?"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {step === 6 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Review & Confirm"
                  subtitle="Please verify your information before submitting."
                />

                <div className="grid grid-cols-1 gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <ReviewCard title="Basic Information" icon={<User size={16} />}>
                    <ReviewItem label="Full Name" value={formData.fullName} />
                    <ReviewItem label="Email" value={formData.email} />
                    <ReviewItem label="WhatsApp" value={formData.whatsapp} />
                    <ReviewItem label="Company" value={formData.companyName} />
                    <ReviewItem
                      label="Current Web"
                      value={formData.currentWebsite}
                    />
                    <ReviewItem
                      label="Overview"
                      value={formData.companyOverview}
                      fullWidth
                    />
                  </ReviewCard>

                  <ReviewCard title="Project Strategy" icon={<Target size={16} />}>
                    <ReviewItem label="Type" value={formData.websiteType} />
                    <ReviewItem
                      label="Description"
                      value={formData.projectDescription}
                      fullWidth
                    />
                    <ReviewItem
                      label="Primary Goals"
                      value={formData.primaryGoals}
                      fullWidth
                    />
                    <ReviewItem
                      label="Target Audience"
                      value={formData.customerProfile}
                      fullWidth
                    />
                  </ReviewCard>

                  <ReviewCard
                    title="Technical Specifications"
                    icon={<Settings size={16} />}
                  >
                    <ReviewItem label="Languages" value={formData.languages} />
                    <ReviewItem label="Est. Pages" value={formData.pageCount} />
                    <ReviewItem
                      label="Mandatory Pages"
                      value={formData.mandatoryPages.join(", ")}
                      fullWidth
                    />
                    <ReviewItem
                      label="Features"
                      value={formData.specialFeatures.join(", ")}
                      fullWidth
                    />
                  </ReviewCard>

                  <ReviewCard
                    title="Marketing & Branding"
                    icon={<BarChart3 size={16} />}
                  >
                    <ReviewItem
                      label="Keywords"
                      value={formData.targetKeywords}
                      fullWidth
                    />
                    <ReviewItem
                      label="Channels"
                      value={formData.priorityChannels.join(", ")}
                      fullWidth
                    />
                    <ReviewItem
                      label="3-6 Months KPI"
                      value={formData.marketingTarget}
                      fullWidth
                    />
                    <ReviewItem
                      label="Branding"
                      value={formData.brandingStatus}
                    />
                    <ReviewItem
                      label="References"
                      value={formData.designReferences}
                      fullWidth
                    />
                  </ReviewCard>

                  <ReviewCard title="Timeline & Budget" icon={<Clock size={16} />}>
                    <ReviewItem
                      label="Budget Range"
                      value={formData.budgetRange}
                    />
                    <ReviewItem label="Start Date" value={formData.startDate} />
                    <ReviewItem
                      label="Launch Date"
                      value={formData.launchDate}
                    />
                    <ReviewItem
                      label="Add. Notes"
                      value={formData.additionalNotes}
                      fullWidth
                    />
                  </ReviewCard>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Sparkles size={20} />
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <span className="font-black italic uppercase block mb-1">
                      Final Check
                    </span>
                    All set? If everything looks good, click the{" "}
                    <span className="font-bold">Complete Brief</span> button to
                    send your project details to our team.
                  </p>
                </div>
              </div>
            )}

            {/* NAVIGATION */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${step === 1 ? "opacity-0 invisible" : "text-slate-500 hover:bg-slate-100"}`}
              >
                <ChevronLeft size={20} /> Back
              </button>

              {step < 6 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-blue-100"
                >
                  Continue <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitClick}
                  disabled={status === "submitting"}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl"
                >
                  {status === "submitting" ? "Sending..." : "Complete Brief"}{" "}
                  <Send size={18} />
                </button>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE SUB-COMPONENTS --- */

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div>
    <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
      {title}
    </h2>
    <p className="text-slate-500 font-medium">{subtitle}</p>
  </div>
);

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = ({ label, ...props }: FloatingInputProps) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <input
      className="px-0 py-2 bg-transparent border-b-[2.5px] border-slate-100 focus:border-blue-500 outline-none transition-all font-medium"
      {...props}
    />
  </div>
);

interface FloatingTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FloatingTextArea = ({ label, ...props }: FloatingTextAreaProps) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <textarea
      className="px-0 py-2 bg-transparent border-b-[2.5px] border-slate-100 focus:border-blue-500 outline-none transition-all font-medium resize-none"
      rows={2}
      {...props}
    />
  </div>
);

interface CustomSelectProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = ({ label, options, name, value, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    const event = {
      target: { name, value: selectedValue },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[11px] font-black uppercase tracking-wider text-blue-600">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-b-[2.5px] border-slate-100 py-2 flex justify-between items-center font-bold text-slate-700"
      >
        {value} <ChevronDown size={16} className={isOpen ? "rotate-180" : ""} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-xl shadow-xl z-50 mt-2">
          {options.map((opt: string) => (
            <button
              key={opt}
              type="button"
              className="w-full p-4 text-left hover:bg-blue-50 font-bold"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface ReviewCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ReviewCard = ({ title, icon, children }: ReviewCardProps) => (
  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
    <div className="flex items-center gap-2 mb-4">
      <div className="text-blue-600 bg-white p-2 rounded-xl shadow-sm">
        {icon}
      </div>
      <h4 className="font-black text-slate-800 text-sm uppercase">{title}</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

interface ReviewItemProps {
  label: string;
  value?: string | number;
  fullWidth?: boolean;
}

const ReviewItem = ({ label, value, fullWidth = false }: ReviewItemProps) => (
  <div className={fullWidth ? "md:col-span-2" : ""}>
    <p className="text-[10px] font-black uppercase text-slate-400">{label}</p>
    <p className="text-sm font-bold text-slate-700">{value || "-"}</p>
  </div>
);

interface CheckboxGroupProps {
  label: string;
  category: string;
  selected: string[];
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, category: string) => void;
}

const CheckboxGroup = ({ label, category, selected, options, onChange }: CheckboxGroupProps) => (
  <div className="flex flex-col gap-4">
    <label className="text-[11px] font-black uppercase tracking-wider text-blue-600">
      {label}
    </label>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((opt) => (
        <div key={opt} className="flex items-center gap-3">
          <input
            type="checkbox"
            id={`${category}-${opt}`}
            name={category}
            value={opt}
            checked={selected.includes(opt)}
            onChange={(e) => onChange(e, category)}
            className="w-4 h-4 text-blue-600 rounded cursor-pointer"
          />
          <label htmlFor={`${category}-${opt}`} className="font-medium text-slate-700 cursor-pointer">
            {opt}
          </label>
        </div>
      ))}
    </div>
  </div>
);

interface CustomDateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomDateInput = ({ label, ...props }: CustomDateInputProps) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <input
      type="date"
      className="px-0 py-2 bg-transparent border-b-[2.5px] border-slate-100 focus:border-blue-500 outline-none transition-all font-medium"
      {...props}
    />
  </div>
);
