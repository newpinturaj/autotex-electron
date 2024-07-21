
export function genPreamble(data) {
  const sup = ['st', 'nd', 'rd', 'th'] // number superscript eg: 1st, 2nd

  const str = `
\\documentclass[12pt, a4paper]{article}
\\usepackage[margin=2.54cm, left=2.54cm, right=1.25cm]{geometry}
\\usepackage{fancyhdr}
\\usepackage{blindtext}
\\usepackage{parskip}
\\usepackage{setspace}
\\usepackage{float}
\\usepackage{graphicx}
\\usepackage{ragged2e}
\\usepackage{hyperref}

% --------- HEADER & FOOTER SETTING ---------
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\vspace{0.5em}\\fontsize{10}{12}\\selectfont Project Report - ${data.sem}${data.sem < 4 ? sup[data.sem - 1] : sup [3]} Semester}
\\fancyhead[R]{\\vspace{0.5em}\\fontsize{10}{12}\\selectfont [${data.stu_reg1}${data.stu_reg2 && `, ${data.stu_reg2.slice(-3)}`}${data.stu_reg3 && `, ${data.stu_reg3.slice(-3)}`}${data.stu_reg4 && `, ${data.stu_reg4.slice(-3)}`}]}

\\fancyfoot[L]{\\vspace{0.5em}\\fontsize{10}{12}\\selectfont Dept. of ${data.stu_dept}, MIT Muzaffarpur}
\\fancyfoot[R]{\\vspace{0.5em}\\fontsize{10}{12}\\selectfont \\thepage}

\\renewcommand{\\headrulewidth}{0.4pt}
\\renewcommand{\\footrulewidth}{0.4pt}
\\setlength{\\headheight}{18pt}

% --------- PARAGRAPH SETTING ---------
\\SetSinglespace{1.1}
\\singlespacing

% --------- META DATA ---------
% \\title{AutoTeX}
% \\author{PINTU RAJ}


\\begin{document}

%--------- CUSTOM ENVIRONMENT ---------
\\newenvironment{groupcenter}
{
    \\begin{center}
    \\setstretch{1.1}
}
{
    \\end{center}
}

  `;

  return str;
}

export function genCover(data) {
  // const dept = ['IT', 'CSE', 'ECE', 'ME', 'EE', 'LT'];

  const deptMap = {
    IT: 'Information Technology',
    CSE: 'Computer Science Engineering',
    ME: 'Mechanical Engineering',
    EE: 'Electrical Engineering',
    LT: 'Leather Technology',
    ECE: 'Electronics \\& Communication Engineering',
  };

  const str = `
% --------- DOCUMENT START ---------

% --------- COVER PAGE ---------
\\begin{titlepage}
    \\onehalfspacing
    \\setlength{\\parskip}{1.7em plus .5em minus .5em}
    \\centering
    \\textbf{\\huge ${data.title}}\\par
    \\textbf{A Project Report}\\par
    \\textit{submitted in partial fulfilment for the award of the degree of}\\par
    \\textbf{Batchelor of Technology}\\par
    \\textbf{in}\\par
    \\textbf{${deptMap[data.stu_dept]}}\\par
    SUBMITTED BY\\par

    \\begin{table}[H]
        \\centering
        \\doublespacing
        \\setlength{\\tabcolsep}{12pt}
        \\renewcommand{\\arraystretch}{0.75}
        \\begin{tabular}{cccc}
          \\textbf{${data.stu_name1}} ${data.stu_name2 &&  `& \\textbf{${data.stu_name2}}`} ${data.stu_name3 &&  `& \\textbf{${data.stu_name3}}`} ${data.stu_name4 &&  `& \\textbf{${data.stu_name4}}`} \\\\
          (${data.stu_reg1}) ${data.stu_reg2 && `& (${data.stu_reg2})`} ${data.stu_reg3 && `& (${data.stu_reg3})`} ${data.stu_reg4 && `& (${data.stu_reg4})`}
        \\end{tabular}
    \\end{table}

    SUBMITTED TO\\par
    \\begin{groupcenter}
    \\textbf{${data.guide_name}}\\\\
    \\textit{${data.guide_degn}}\\\\
    \\textit{Dept. of ${data.guide_dept}}\\\\
    \\end{groupcenter}

    \\vspace{1cm plus 0.5cm}
    \\begin{figure}[H]
        \\centering
        \\includegraphics[width=0.2\\textwidth]{logo.png}
    \\end{figure}
    \\vspace{1cm plus 0.5cm}

    \\begin{groupcenter}
    \\bfseries
    Department of ${deptMap[data.stu_dept]}\\\\
    Muzaffarpur Intitute of Technology, Muzaffarpur\\\\
    ${Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date())}
    \\end{groupcenter}

\\end{titlepage}
  `;

  return str;
}

export function genCandidateDecl(data) {
  const deptMap = {
    IT: 'Information Technology',
    CSE: 'Computer Science Engineering',
    ME: 'Mechanical Engineering',
    EE: 'Electrical Engineering',
    LT: 'Leather Technology',
    ECE: 'Electronics \\& Communication Engineering',
  };

  const str = `
% --------- CANDIDATE's DECLARATION PAGE ---------
\\begin{center}
    % \\vspace*{0.05cm}
    \\textbf{\\Large Candidate's Declaration}
\\end{center}

We hereby certify that work presented in this report entitled \\textbf{${data.title}} in fulfilment of the requirements for the award of Bachelor of Technology with specialization in ${deptMap[data.stu_dept]}, submitted to \\textbf{Muzaffarpur Intitute of Technology, Muzaffarpur} is authentic record of our own work carried out during the period of ${Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(data.work_duration.from)} to ${Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(data.work_duration.to)} under the supervision of \\textbf{${data.guide_name}}, ${data.guide_degn}, Department of ${deptMap[data.guide_dept]}, Muzaffarpur Intitute of Technology, Muzaffarpur.\\par

We have not submittted the matter presented in this report to any other university or institute for the award of any degree or for any other purpose.\\par

\\vspace{1cm}
Date: ${Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(data.submission_date)}

\\vspace{1.5cm}
\\begin{table}[H]
    \\centering
    \\setlength{\\tabcolsep}{18pt}
    \\renewcommand{\\arraystretch}{1.2}
    \\begin{tabular}{cccc}
        \\textbf{${data.stu_name1}} ${data.stu_name2 &&  `& \\textbf{${data.stu_name2}}`} ${data.stu_name3 &&  `& \\textbf{${data.stu_name3}}`} ${data.stu_name4 &&  `& \\textbf{${data.stu_name4}}`} \\\\
        (${data.stu_reg1}) ${data.stu_reg2 && `& (${data.stu_reg2})`} ${data.stu_reg3 && `& (${data.stu_reg3})`} ${data.stu_reg4 && `& (${data.stu_reg4})`}
    \\end{tabular}
\\end{table}

\\vspace{0.5cm}

This is to certify the statement submitted by the above candidates are correct and true to the best of our knowledge, further it is recommended for external evaluation.

\\begin{space}
\\vspace{2cm}
\\textbf{${data.guide_name}}\\\\
\\textit{${data.guide_degn}, ${data.guide_dept}}
\\end{space}

  `;

  return str;
}

export function genCertificate(data) {
  const deptMap = {
    IT: 'Information Technology',
    CSE: 'Computer Science Engineering',
    ME: 'Mechanical Engineering',
    EE: 'Electrical Engineering',
    LT: 'Leather Technology',
    ECE: 'Electronics \\& Communication Engineering',
  };

  const str = `
% --------- CERTIFICATE PAGE ---------
\\newpage
\\begin{center}
    % \\vspace*{0.05cm}
    \\textbf{\\Large Certificate}
\\end{center}

This is to certify that the project \\textbf{${data.title}} is a record of the authentic \\& bonafide work done of the following students, for fulfilment of the requirement for the award of Bachelor of Technology in ${deptMap[data.stu_dept]}, submitted to \\textbf{Muzaffarpur Intitute of Technology, Muzaffarpur}, has been carried out during the period, ${Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(data.work_duration.from)} to ${Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(data.work_duration.from)} under the supervision of \\textbf{${data.guide_name}}, ${data.guide_degn}, Department of ${deptMap[data.guide_dept]}, Muzaffarpur Institute of Technology, Muzaffarpur.

\\vspace{1.5cm}
\\begin{table}[H]
    \\centering
    \\setlength{\\tabcolsep}{18pt}
    \\renewcommand{\\arraystretch}{1.2}
    \\begin{tabular}{cccc}
        \\textbf{${data.stu_name1}} ${data.stu_name2 &&  `& \\textbf{${data.stu_name2}}`} ${data.stu_name3 &&  `& \\textbf{${data.stu_name3}}`} ${data.stu_name4 &&  `& \\textbf{${data.stu_name4}}`} \\\\
        (${data.stu_reg1}) ${data.stu_reg2 && `& (${data.stu_reg2})`} ${data.stu_reg3 && `& (${data.stu_reg3})`} ${data.stu_reg4 && `& (${data.stu_reg4})`}
    \\end{tabular}
\\end{table}

\\begin{space}
\\vspace{3cm}
\\textbf{${data.guide_name}}\\\\
\\textit{${data.guide_degn}, ${data.guide_dept}}
\\end{space}

\\begin{space}
\\vspace{3cm}
\\textbf{${data.hod_name}}\\\\
\\textit{Head of Department, ${data.hod_dept}}
\\end{space}

\\begin{space}
\\vspace{3cm}
\\textbf{External Examiner}\\par
\\end{space}

  `;

  return str;
}

export function genAck(data) {
  const deptMap = {
    IT: 'Information Technology',
    CSE: 'Computer Science Engineering',
    ME: 'Mechanical Engineering',
    EE: 'Electrical Engineering',
    LT: 'Leather Technology',
    ECE: 'Electronics \\& Communication Engineering',
  };

  const str = `
% --------- ACKNOWLEDGEMENT PAGE ---------
\\newpage

\\newpage
\\begin{center}
    % \\vspace*{0.05cm}
    \\textbf{\\Large Acknowledgement}
\\end{center}

It gives us immense pleasure to express our heartfelt gratitude and indebtedness to our project guide \\textbf{${data.guide_name}}, ${data.guide_degn}, Department of ${deptMap[data.guide_dept]}, for his valuable support and encouragement throughout the project. We are highly obliged to him for providing us this opportunity to carry out our ideas and work throughout the project duration and helping us to attain the successful completion of this Project.\\par
We are highly grateful to \\textbf{${data.hod_name}}, HoD, ${deptMap[data.hod_dept]}, for permitting us to utilize all the necessary facilities of the department.\\par
We extend our sincere gratitude to the faculties and staff of the department for their support and help throughout our project. We would like to express our deep appreciation toward our classmate for providing us the necessary suggestions in our project and a cordial environment.
  `;

  return str;
}

export function genTableOfContent() {
  const str = `
% --------- TABLE OF CONTENT ---------
\\newpage
% \\vspace*{0.05cm}
\\tableofcontents
  `;

  return str;
}

export function genMainContent(data) {
//   const str = `
// % --------- MAIN CONTENT ---------
// \\newpage
// \\section{Introduction}
// \\subsection{History}
// \\subsubsection{Before 1876 A.D.}
// \\blindtext
// \\subsubsection{After 1876 A.D.}
// \\blindtext

// \\section{Planning of Work}
// \\subsection{Feasibility Study}
// \\blindtext
// \\subsection{Requirement Analysis}
// \\blindtext
//   `;
  let str = `
% --------- MAIN CONTENT ---------
\\newpage
`;

  str = str.concat(data.map(obj => {
    let tempStr = ""
    if(obj.head) {
      tempStr = tempStr.concat(`\\section{${obj.head}}
`)
    }
    if(obj.sHead) {
      tempStr = tempStr.concat(`\\subsection{${obj.sHead}}
`)
    }
    if(obj.ssHead) {
      tempStr = tempStr.concat(`\\subsubsection{${obj.ssHead}}
`)
    }
    if(obj.imgPath){
      console.log(obj.imgPath)
      tempStr = tempStr.concat(`\\vspace{1cm plus 0.5cm}
  \\begin{figure}[H]
      \\centering
      \\includegraphics[width=0.2\\textwidth]{"${obj.imgPath}"}
  \\end{figure}
  \\vspace{1cm plus 0.5cm}
`)
    }


    if(obj.para) {
      tempStr = tempStr.concat(`${obj.para} \\par
`)
    }

    return tempStr;
  }).join(''))

  return str;
}

export function genRef(data) {
//   let str = `
// % --------- REFERENCES ---------
// \\newpage
// \\section{References}

// \\begin{itemize}
//     \\item React Docs. \\url{https://react.dev}
//     \\item React Router Docs. \\url{https://reactrouter.com/en/main/start/tutorial}
//     \\item Vite Docs. \\url{https://vitejs.dev/guide/}
// \\end{itemize}
//   `;
  let str = `
% --------- REFERENCES ---------
\\newpage
\\section{References}

  \\begin{itemize}
  `;

  if(data){
    str = str.concat(data.map(item => {
      let tempStr = "\\item ";
      if(item?.refText){
        tempStr = `  \\item ${item.refText} - `;
      }
      if(item?.refUrl){
        tempStr = tempStr.concat(`\\url{${item.refUrl}}
  `)
      }

      return tempStr;
    }).join(""))

    str = str.concat(`\\end{itemize}
      `)
    return str;
  }

  return "";
}

export function genCloser() {
  const str = `
\\end{document}
  `;

  return str;
}
