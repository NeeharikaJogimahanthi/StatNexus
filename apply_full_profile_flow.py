import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. In handleLogin: set activeStep to 0 (Profile Hub)
text = text.replace('setActiveStep(1);', 'setActiveStep(0);', 1)

# 2. Add id="official-email-input" to the email input on the signin card
text = text.replace(
    'type: "email",\n    value: inputEmail,',
    'type: "email",\n    id: "official-email-input",\n    value: inputEmail,'
)

# 3. Update the header right side buttons
old_header_right = """    className: "flex items-center gap-3"
  }, isLoggedIn ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowProfileModal(true),
    className: "flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer text-left group",
    title: "Click to view full officer profile, quiz analysis & performance report"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "xs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate max-w-[140px] block"
  }, activeOfficer?.name?.split(",")[0] || "Dr. Rajesh Verma"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-blue-600 font-mono font-semibold"
  }, activeOfficer?.cadre || "ISS")), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-xs group-hover:text-blue-600 ml-0.5"
  }, "▾")) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveStep(1),
    className: "px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all flex items-center gap-1 shrink-0"
  }, /*#__PURE__*/React.createElement("span", null, "🔐"), /*#__PURE__*/React.createElement("span", null, "Official Sign In")))))"""

new_header_right = """    className: "flex items-center gap-3"
  }, isLoggedIn ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowProfileModal(true),
    id: "header-profile-btn",
    className: "flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-200 bg-white hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer text-left group",
    title: "Click to view full officer profile, quiz analysis & performance report"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "xs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate max-w-[130px] block font-display"
  }, activeOfficer?.name?.split(",")[0] || "Dr. Rajesh Verma"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-blue-600 font-mono font-bold"
  }, activeOfficer?.cadre || "ISS")), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-xs group-hover:text-blue-600 ml-0.5"
  }, "▾")), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    id: "header-signout-btn",
    className: "px-3.5 py-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer",
    title: "Sign Out of session"
  }, /*#__PURE__*/React.createElement("span", null, "🚪"), /*#__PURE__*/React.createElement("span", null, "Sign Out"))) : /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const inp = document.getElementById("official-email-input");
      if (inp) {
        inp.focus();
        inp.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        handleLogin(OFFICIAL_EXAMPLES[0]);
      }
    },
    id: "header-signin-btn",
    className: "px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "🔐"), /*#__PURE__*/React.createElement("span", null, "Official Sign In")))))"""

if old_header_right in text:
    text = text.replace(old_header_right, new_header_right)
    print("Header right side buttons updated successfully!")
else:
    print("Warning: old_header_right not found exactly")

# 4. Insert activeStep === 0 (Profile & Assessment Hub) between !isLoggedIn and isLoggedIn && activeStep === 1
profile_hub_code = """isLoggedIn && activeStep === 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-3xl p-6 sm:p-8 border-l-4 border-l-blue-600 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold"
  }, activeOfficer?.cadre || "ISS"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-700 font-semibold flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "Active Civil Service Session")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display font-bold text-2xl text-slate-900 mt-1"
  }, activeOfficer?.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 font-medium"
  }, activeOfficer?.designation, " • ", activeOfficer?.organization, " (", activeOfficer?.division, ")"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono text-blue-700 block"
  }, activeOfficer?.email))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowProfileModal(true),
    className: "px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "📊"), /*#__PURE__*/React.createElement("span", null, "View Quiz & Performance Analysis")), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    className: "px-3.5 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "🚪"), /*#__PURE__*/React.createElement("span", null, "Sign Out")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-purple-50/70 border border-purple-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-purple-700 font-semibold block"
  }, "Qualifying Exam Tier"), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-display font-bold text-purple-900 block mt-1"
  }, difficultyLevel + " Exam"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-purple-600 block mt-0.5"
  }, examSubmitted ? `Score: ${examScore}%` : "Ready to Qualify")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-amber-50/70 border border-amber-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-amber-700 font-semibold block"
  }, "Document AI Quiz"), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-display font-bold text-amber-900 block mt-1"
  }, quizScore !== null ? `${quizScore}% Mastery` : "10 Bloom's MCQs"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-amber-600 block mt-0.5"
  }, quizSubmitted ? "Certified" : "PDF/PPT Ingestion")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-emerald-700 font-semibold block"
  }, "Competency Status"), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-display font-bold text-emerald-900 block mt-1"
  }, "Audit Ready"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-600 block mt-0.5"
  }, "MoSPI DIID Benchmark")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-blue-50/70 border border-blue-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-blue-700 font-semibold block"
  }, "Pratibha Darpan"), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-display font-bold text-blue-900 block mt-1"
  }, "Official Passport"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-blue-600 block mt-0.5"
  }, "Civil Service Records")))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveStep(1),
    className: "glass-card rounded-2xl p-5 border-l-4 border-l-purple-600 hover:shadow-md hover:border-purple-500 cursor-pointer transition-all space-y-3 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
  }, "📝"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900 group-hover:text-purple-700 transition-colors"
  }, "1. Qualifying Diagnostic Exam"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 leading-relaxed"
  }, "Take calibrated exams across Easy, Medium, or Difficult tiers to assess official statistical competencies."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center gap-1.5 text-xs font-bold text-purple-700"
  }, /*#__PURE__*/React.createElement("span", null, "Start Qualifying Exam"), /*#__PURE__*/React.createElement("span", null, "→"))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveStep(2),
    className: "glass-card rounded-2xl p-5 border-l-4 border-l-emerald-600 hover:shadow-md hover:border-emerald-500 cursor-pointer transition-all space-y-3 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
  }, "🎓"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors"
  }, "2. Recommended Courses"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 leading-relaxed"
  }, "Discover targeted iGOT & TPAC courses mapped to Technical & Behavioural competencies based on exam score."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-700"
  }, /*#__PURE__*/React.createElement("span", null, "Explore Courses"), /*#__PURE__*/React.createElement("span", null, "→"))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveStep(3),
    className: "glass-card rounded-2xl p-5 border-l-4 border-l-amber-600 hover:shadow-md hover:border-amber-500 cursor-pointer transition-all space-y-3 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
  }, "⚡"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors"
  }, "3. Upload & AI Quizzes"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 leading-relaxed"
  }, "Upload official PDF/PPT presentations to generate and take 10 calibrated Bloom's Taxonomy MCQs."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-700"
  }, /*#__PURE__*/React.createElement("span", null, "Upload & Generate Quiz"), /*#__PURE__*/React.createElement("span", null, "→"))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setActiveStep(4),
    className: "glass-card rounded-2xl p-5 border-l-4 border-l-blue-600 hover:shadow-md hover:border-blue-500 cursor-pointer transition-all space-y-3 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
  }, "📊"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors"
  }, "4. Pratibha Darpan Report"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 leading-relaxed"
  }, "Review comprehensive civil service evaluation audit, competency gap matrix, and printable passport."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center gap-1.5 text-xs font-bold text-blue-700"
  }, /*#__PURE__*/React.createElement("span", null, "View Analysis Report"), /*#__PURE__*/React.createElement("span", null, "→"))))), """

# Insert profile_hub_code before isLoggedIn && activeStep === 1
needle = 'isLoggedIn && activeStep === 1 &&'
idx = text.find(needle)
if idx != -1:
    text = text[:idx] + profile_hub_code + text[idx:]
    print("Profile & Assessment Hub inserted successfully!")
else:
    print("Warning: needle not found")

# Also in step 1, 2, 3, 4: add "← Profile Dashboard" button
# Step 1 back button: currently "🚪 Sign Out" -> change to "← Profile Dashboard"
text = text.replace(
    'onClick: handleLogout,\n    className: "px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-100 transition-all flex items-center gap-1.5"\n  }, "🚪 Sign Out"',
    'onClick: () => setActiveStep(0),\n    className: "px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all flex items-center gap-1.5"\n  }, "← Profile Dashboard"'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Saved index.html successfully!")
