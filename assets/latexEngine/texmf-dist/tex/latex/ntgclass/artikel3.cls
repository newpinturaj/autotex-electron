%%
%% This is file `artikel3.cls',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% ntgclass.dtx  (with options: `artikel,type3')
%% This is a generated file.
%% 
%% The source is maintained by Johannes Braams and bug
%% reports for it can be sent to texniek at braams.xs4all.nl
%% 
%% Copyright (C) 1990-2023 Nederlandstalige TeX Gebruikersgroep.
%% All rights reserved.
%% 
%% This file was generated from file(s) of the NTG document classes distribution.
%% ------------------------------------------------------------------------------
%% 
%% It may be distributed and/or modified under the
%% conditions of the LaTeX Project Public License, either version 1.3c
%% of this license or (at your option) any later version.
%% The latest version of this license is in
%%   http://www.latex-project.org/lppl.txt
%% and version 1.3c or later is part of all distributions of LaTeX
%% version 2008 or later.
%% 
%% This work has the LPPL maintenance status "maintained".
%% 
%% The Current Maintainer of this work is Johannes Braams.
%% 
%% This file may only be distributed together with a copy of the NTG
%% document classes distribution. You may however distribute the NTG
%% document classes distribution without such generated files.
%% 
%% The list of all files belonging to the NTG document classes
%% distribution is given in the file `manifest.txt'.
%% 
%% The list of derived (unpacked) files belonging to the distribution
%% and covered by LPPL is defined by the unpacking scripts (with
%% extension .ins) which are part of the distribution.
\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{artikel3}%
              [2023-01-10 v2.1f
       NTG LaTeX document class]
\newcommand*\@ptsize{}

\newif\if@restonecol
\newif\if@titlepage
\@titlepagefalse
\newif\if@oldtoc
\@oldtocfalse
\newif\if@allcaps
\newif\if@titlecentered
\@titlecenteredfalse
\newif\if@revlabel
\DeclareOption{a4paper}
   {\setlength\paperheight {297mm}%
    \setlength\paperwidth  {210mm}}
\DeclareOption{a5paper}
   {\setlength\paperheight {210mm}%
    \setlength\paperwidth  {148mm}}
\DeclareOption{b5paper}
   {\setlength\paperheight {250mm}%
    \setlength\paperwidth  {176mm}}
\DeclareOption{letterpaper}
   {\setlength\paperheight {11in}%
    \setlength\paperwidth  {8.5in}}
\DeclareOption{legalpaper}
   {\setlength\paperheight {14in}%
    \setlength\paperwidth  {8.5in}}
\DeclareOption{executivepaper}
   {\setlength\paperheight {10.5in}%
    \setlength\paperwidth  {7.25in}}
\DeclareOption{landscape}
   {\setlength\@tempdima   {\paperheight}%
    \setlength\paperheight {\paperwidth}%
    \setlength\paperwidth  {\@tempdima}}
\DeclareOption{10pt}{\renewcommand\@ptsize{0}}
\DeclareOption{11pt}{\renewcommand\@ptsize{1}}
\DeclareOption{12pt}{\renewcommand\@ptsize{2}}
\DeclareOption{oneside}{\@twosidefalse \@mparswitchfalse}
\DeclareOption{twoside}{\@twosidetrue  \@mparswitchtrue}
\DeclareOption{draft}{\setlength\overfullrule{5pt}}
\DeclareOption{final}{\setlength\overfullrule{0pt}}
\DeclareOption{titlepage}{\@titlepagetrue}
\DeclareOption{notitlepage}{\@titlepagefalse}
\DeclareOption{voorwerk}{\@titlepagetrue}
\DeclareOption{geenvoorwerk}{\@titlepagefalse}
\DeclareOption{oldtoc}{\@oldtoctrue}
\DeclareOption{titlecentered}{\@titlecenteredtrue}
\DeclareOption{onecolumn}{\@twocolumnfalse}
\DeclareOption{twocolumn}{\@twocolumntrue}
\DeclareOption{leqno}{\input{leqno.clo}}
\DeclareOption{fleqn}{\input{fleqn.clo}}
\DeclareOption{openbib}{%
 \AtEndOfPackage{%
   \renewcommand\@openbib@code{%
     \advance\leftmargin\bibindent
     \itemindent -\bibindent
     \listparindent \itemindent
     \parsep \z@
     }%
   \renewcommand\newblock{\par}}%
}
\ExecuteOptions{a4paper,10pt,oneside,onecolumn,final,uctitle}
\ProcessOptions
\input{ntg1\@ptsize.clo}
\setlength\lineskip{1\p@}
\setlength\normallineskip{1\p@}
\renewcommand\baselinestretch{}
\newdimen\unitindent
{\setbox0\hbox{\normalsize\rmfamily 2.2.2\hskip.5em}
 \global\unitindent=\wd0}
\newdimen\othermargin
{\setbox0\hbox{\normalsize (m)\hskip.6em}\global\othermargin=\wd0}
\newif\if@needwriteindent
\newcommand*\@indentset{%
                \global\leftmargini=\unitindent
                \global\@needwriteindenttrue}
\newcommand*\@writeindent[1]{\immediate\write\@mainaux
   {\string\@ifundefined{unitindent}{\string\newdimen\string\unitindent
                                     \let\string\@indentset\relax}{}}
    \immediate\write\@mainaux{\global\string\unitindent=#1\string\relax
                              \string\@indentset \string\relax}}
\AtEndDocument{%
    \if@filesw
      \if@needwriteindent
        \@writeindent{\the\unitindent}
      \fi
    \fi}
\setlength\parskip{.5\baselineskip \@plus .1\baselineskip
                                   \@minus .1\baselineskip}
\setlength\parindent{\z@}
\@lowpenalty   51
\@medpenalty  151
\@highpenalty 301
\setcounter{topnumber}{2}
\renewcommand\topfraction{.7}
\setcounter{bottomnumber}{1}
\renewcommand\bottomfraction{.3}
\setcounter{totalnumber}{3}
\renewcommand\textfraction{.2}
\renewcommand\floatpagefraction{.5}
\setcounter{dbltopnumber}{2}
\renewcommand\dbltopfraction{.7}
\renewcommand\dblfloatpagefraction{.5}
\let\Thispagestyle\thispagestyle
\newcommand*\@emptypagestyle{empty}
\renewcommand*\pagestyle[1]{\@nameuse{ps@#1}\def\@currentpagestyle{#1}}
\renewcommand*\thispagestyle[1]{%
  \ifx\@currentpagestyle\@emptypagestyle
  \else
    \global\@specialpagetrue
    \gdef\@specialstyle{#1}%
  \fi}
\renewcommand*\ps@plain{%
    \let\@oddhead\@empty\let\@evenhead\@empty
    \def\@oddfoot{\hfil\PageFont\thepage}%
    \if@twoside
      \def\@evenfoot{\PageFont\thepage\hfil}%
    \else
      \let\@evenfoot\@oddfoot
    \fi
    \let\@mkboth\@gobbletwo}
\if@twoside
    \def\ps@headings{%
      \let\@oddfoot\@empty\let\@evenfoot\@empty
      \def\@evenhead{{\PageFont\thepage}\hfil\MarkFont\leftmark}%
      \def\@oddhead{{\MarkFont\rightmark}\hfil\PageFont\thepage}%
      \let\@mkboth\markboth
      \def\sectionmark##1{%
        \markboth {\MakeUppercase{%
            \ifnum \c@secnumdepth >\z@
              \thesection\quad
            \fi
            ##1}}{}}%
      \def\subsectionmark##1{%
        \markright {%
          \ifnum \c@secnumdepth >\@ne
            \thesubsection\quad
          \fi
          ##1}}}
\else
  \def\ps@headings{%
    \let\@oddfoot\@empty
    \def\@oddhead{{\MarkFont\rightmark}\hfil\PageFont\thepage}%
    \let\@mkboth\markboth
    \def\sectionmark##1{%
      \markright {\MakeUppercase{%
          \ifnum \c@secnumdepth >\m@ne
            \thesection\quad
          \fi
          ##1}}}}
\fi
\def\ps@myheadings{%
    \let\@oddfoot\@empty\let\@evenfoot\@empty
    \def\@evenhead{{\PageFont\thepage}\hfil\MarkFont\leftmark}%
    \def\@oddhead{{\MarkFont\rightmark}\hfil\PageFont\thepage}%
    \let\@mkboth\@gobbletwo
    \let\sectionmark\@gobble
    \let\subsectionmark\@gobble
    }
\newcommand*\PageFont{\rmfamily}
\newcommand*\MarkFont{\slshape}
\newcommand*\RunningFonts[2]{%
  \renewcommand*\PageFont{#1}\renewcommand*\MarkFont{#2}}
\newcommand*\TitleFont{\bfseries}
\if@titlepage
\renewcommand*\TitleFont{\rmfamily}
\newcommand*\maketitle{%
  \begin{titlepage}%
    \let\footnotesize\small
    \let\footnoterule\relax
    \let \footnote \thanks
    \long\def\@makefntext##1{\parindent\z@
         \def\labelitemi{\textendash}\@revlabeltrue
         \leavevmode\@textsuperscript{\@thefnmark}\kern1em\relax ##1}
    \renewcommand*\thefootnote{\@fnsymbol\c@footnote}%
    \if@compatibility\setcounter{page}{0}\fi
    \null\vfil
    \vskip 60\p@
    \begin{center}%
      \TitleFont
      {\LARGE \def\\{\penalty -\@M}
        \if@allcaps
          \expandafter\uc@nothanks\@title\thanks\relax
        \else
          \@title
        \fi\par}%
      \vskip 3em%
      {\large
        \lineskip .75em \parindent\z@
        \begin{tabular}[t]{c}%
          \if@allcaps
            \expandafter\uc@authornothanks\@author\and\relax
          \else
            \@author
          \fi
        \end{tabular}\par}%
      \vskip 1.5em%
      {\large
        \if@allcaps
          \uppercase\expandafter{\@date}%
        \else
          \@date
        \fi\par}%
      \end{center}\par
    \@thanks
    \vfil\null
  \end{titlepage}%
  \setcounter{footnote}{0}%
  \global\let\thanks\relax
  \global\let\maketitle\relax
  \global\let\@thanks\@empty
  \global\let\@author\@empty
  \global\let\@title\@empty
  \global\let\@date\@empty
  \global\let\title\relax
  \global\let\author\relax
  \global\let\date\relax
  \global\let\and\relax
}
\def\uc@nothanks#1\thanks{\uppercase{#1}\futurelet\@tempa\uc@tx}
\def\uc@authornothanks#1\and{\uc@nothanks#1\thanks\relax
    \futurelet\@tempa\uc@ax}
\def\uc@ax{%
  \ifx\@tempa\relax
  \else
    \\ \andname \\ \expandafter\uc@authornothanks
  \fi}
\def\uc@tx{\ifx\@tempa\relax
    \else \expandafter\uc@ty \fi}
\def\uc@ty#1{\thanks{#1}\uc@nothanks}
\else
\newcommand*\maketitle{\par
  \begingroup
    \renewcommand*\thefootnote{\@fnsymbol\c@footnote}%
    \def\@makefnmark{\rlap{%
      \@textsuperscript{\normalfont\@thefnmark}}}%
    \long\def\@makefntext{\@xmakefntext{%
      \@textsuperscript{\normalfont\@thefnmark}}}%
    \if@twocolumn
      \ifnum \col@number=\@ne
        \@maketitle
      \else
        \twocolumn[\@maketitle]%
      \fi
    \else
      \newpage
      \global\@topnum\z@
      \@maketitle
    \fi
    \thispagestyle{plain}\@thanks
  \endgroup
  \setcounter{footnote}{0}%
  \global\let\thanks\relax
  \global\let\maketitle\relax
  \global\let\@maketitle\relax
  \global\let\@thanks\@empty
  \global\let\@author\@empty
  \global\let\@title\@empty
  \global\let\@date\@empty
  \global\let\title\relax
  \global\let\author\relax
  \global\let\date\relax
  \global\let\and\relax
  }
\def\@maketitle{%
  \newpage
  \null
  \vskip 2em%
\if@titlecentered
  \begin{center}%
    \let \footnote \thanks
    {\LARGE \TitleFont \@title \par}%
    \vskip 1.5em%
    {\large \TitleFont
      \lineskip .5em%
      \begin{tabular}[t]{c}%
        \@author
      \end{tabular}\par}%
    \vskip 1em%
    {\large \TitleFont \@date}%
  \end{center}%
 \else
     {\LARGE \TitleFont \head@style \@title \par} \vskip 1.5em
     {\large \TitleFont \lineskip .5em \tabcolsep\z@
             \def\and{%%% \begin{tabular} has already started
                      \end{tabular}\hskip 1em plus .17fil
                      \begin{tabular}[t]{l}}%% \end{tabular} will come
             \begin{tabular}[t]{l}\@author\end{tabular}\par}
     \vskip 1em {\large \TitleFont \@date}
 \fi
  \par
  \vskip 1.5em}
\fi
\newcommand*\head@style{%
    \interlinepenalty \@M
    \hyphenpenalty=\@M \exhyphenpenalty=\@M
    \rightskip=0cm plus .7\hsize\relax}
\def\@sect#1#2#3#4#5#6[#7]#8{%
  \ifnum #2>\c@secnumdepth
    \let\@svsec\@empty
  \else
    \refstepcounter{#1}%
    \begingroup
      \setbox\@tempboxa=\hbox{#6\relax
                              \csname the#1\endcsname
                              \hskip.5em}
      \ifdim\wd\@tempboxa>\unitindent
        \global\unitindent=\wd\@tempboxa
        \@indentset
      \fi
    \endgroup
    \protected@edef\@svsec{\@seccntformat{#1}\relax}%
  \fi
  \@tempskipa #5\relax
  \ifdim \@tempskipa>\z@
    \begingroup
    #6{%
      \@hangfrom{\hskip #3\relax\@svsec}\head@style #8\endgraf}%
     \endgroup
     \csname #1mark\endcsname{#7}%
     \addcontentsline{toc}{#1}{%
       \ifnum #2>\c@secnumdepth
       \else
         \protect\numberline{\csname the#1\endcsname}%
       \fi
       #7}%
     \else
       \def\@svsechd{#6\hskip #3\relax
         \@svsec #8\csname #1mark\endcsname{#7}%
         \addcontentsline{toc}{#1}{%
           \ifnum #2>\c@secnumdepth
           \else
             \protect\numberline{\csname the#1\endcsname}%
           \fi
           #7}}%
     \fi
     \@xsect{#5}}
\def\@seccntformat#1{%
  \hb@xt@\unitindent{\csname the#1\endcsname \hfil}%
  }
\def\@ssect#1#2#3#4#5{\@tempskipa #3\relax
  \ifdim \@tempskipa>\z@
    \begingroup
      #4{%
        \@hangfrom{\hskip #1}\head@style #5\endgraf}%
    \endgroup
  \else
    \def\@svsechd{#4\hskip #1\relax #5}%
  \fi
  \@xsect{#3}}
\setcounter{secnumdepth}{3}
\newcounter {part}
\newcounter {section}
\newcounter {subsection}[section]
\newcounter {subsubsection}[subsection]
\newcounter {paragraph}[subsubsection]
\newcounter {subparagraph}[paragraph]
\renewcommand*\thepart{\@Roman\c@part}
\renewcommand\thesection{\@arabic\c@section}
\renewcommand*\thesubsection{\thesection.\@arabic\c@subsection}
\renewcommand*\thesubsubsection{\thesubsection.\@arabic\c@subsubsection}
\renewcommand*\theparagraph{\thesubsubsection.\@arabic\c@paragraph}
\renewcommand*\thesubparagraph{\theparagraph.\@arabic\c@subparagraph}
\newcommand*\part{%
  \if@noskipsec \leavevmode \fi
  \par
  \addvspace{4ex}%
   \@afterindentfalse
  \secdef\@part\@spart}
\newcommand*\PartFont{\bfseries}
\def\@part[#1]#2{%
    \ifnum \c@secnumdepth >\m@ne
      \refstepcounter{part}%
      \addcontentsline{toc}{part}{\protect\numberline{\thepart}#1}%
    \else
      \addcontentsline{toc}{part}{#1}%
    \fi
    {\head@style
     \parindent\unitindent
     \normalfont
     \ifnum \c@secnumdepth >\m@ne
       \Large\PartFont\noindent \partname\nobreakspace\thepart
       \par\nobreak
     \fi
     \Large \PartFont \noindent #2%
     \markboth{}{}\par}%
    \nobreak
    \vskip 3ex
    \@afterheading}
\def\@spart#1{%
    {\parindent \z@
     \head@style
     \normalfont
     \Large \PartFont \noindent #1\par}%
     \nobreak
     \vskip 3ex
     \@afterheading}
\newcommand*\section{%
  \@startsection {section}{1}{\z@}%
    {-2\baselineskip\@plus -1\baselineskip \@minus -.5\baselineskip}%
    {.01\baselineskip}%
    {\normalfont\large\SectFont}}
\newcommand*\SectFont{\bfseries}
\newcommand*\subsection{%
  \@startsection{subsection}{2}{\z@}%
    {-1\baselineskip\@plus -.5\baselineskip \@minus -.25\baselineskip}%
    {.01\baselineskip}%
    {\normalfont\normalsize\SSectFont}}
\newcommand*\SSectFont{\bfseries}
\newcommand*\subsubsection{%
  \@startsection{subsubsection}{3}{\z@}%
    {-1\baselineskip plus -.5\baselineskip minus -.25\baselineskip}%
    {.01\baselineskip}%
    {\normalfont\normalsize\SSSectFont}}
\newcommand*\SSSectFont{\rmfamily}
\newcommand*\paragraph{%
  \@startsection{paragraph}{4}{\z@}%
    {3.25ex \@plus1ex \@minus.2ex}%
    {-1em}%
    {\normalfont\normalsize\ParaFont}}
\newcommand*\ParaFont{\slshape}
\newcommand*\subparagraph{%
  \@startsection{subparagraph}{5}{\parindent}%
    {3.25ex \@plus1ex \@minus .2ex}%
    {-1em}%
    {\normalfont\normalsize\SParaFont}}
\newcommand*\SParaFont{\slshape}
\newcommand*\HeadingFonts[7]{%
  \renewcommand*\TitleFont{#1}%
  \renewcommand*\PartFont{#2}%
  \renewcommand*\SectFont{#3}%
  \renewcommand*\SSectFont{#4}%
  \renewcommand*\SSSectFont{#5}%
  \renewcommand*\ParaFont{#6}%
  \renewcommand*\SParaFont{#7}}
\setlength\leftmargini  {\unitindent}
\setlength\leftmarginii {\othermargin}
\setlength\leftmarginiii{\othermargin}
\setlength\leftmarginiv {\othermargin}
\setlength\leftmarginv  {\othermargin}
\setlength\leftmarginvi {1em}
\setlength\leftmargin    {\leftmargini}
\setlength  \labelsep  {5\p@}
\setlength  \labelwidth{\leftmargini}
\addtolength\labelwidth{-\labelsep}
\setlength\partopsep{\z@}
\setlength\topsep{\z@}
\@beginparpenalty -\@lowpenalty
\@endparpenalty   -\@lowpenalty
\@itempenalty     -\@lowpenalty
\def\@listi{%
            \leftmargin\unitindent
            \labelsep.5em%
            \labelwidth\leftmargin
            \advance\labelwidth-\labelsep
            \parsep \z@
            \topsep -.5\parskip \@plus\p@
            \itemsep 0\p@ \@plus1\p@}
\let\@listI\@listi
\@listi
\def\@listii {\leftmargin\leftmarginii
              \labelsep  .5em%
              \labelwidth\leftmarginii
              \advance\labelwidth-\labelsep
              \topsep    -.5\parskip\@plus\p@
              \parsep    \z@
              \itemsep   \z@ \@plus\p@}
\def\@listiii{\leftmargin\leftmarginiii
              \labelsep  .5em%
              \labelwidth\leftmarginiii
              \advance\labelwidth-\labelsep
              \topsep    -.5\parskip\@plus\p@
              \parsep    \z@
              \partopsep \z@ \@plus\p@
              \itemsep   \z@ \@plus\p@}
\def\@listiv {\leftmargin\leftmarginiv
              \labelsep  .5em%
              \labelwidth\leftmarginiv%
              \advance\labelwidth-\labelsep
              \topsep    -.5\parskip\@plus\p@
              \parsep    \z@
              \itemsep   \z@ \@plus\p@}
\def\@listv  {\leftmargin\leftmarginv
              \labelsep  .5em%
              \labelwidth\leftmarginv
              \advance\labelwidth-\labelsep%
              \topsep    -.5\parskip\@plus\p@
              \parsep    \z@
              \itemsep   \z@ \@plus\p@}
\def\@listvi {\leftmargin\leftmarginvi
              \labelsep  .5em
              \labelwidth\leftmarginvi
              \advance\labelwidth{-\labelsep}%
              \topsep    -.5\parskip\@plus\p@
              \parsep    \z@
              \itemsep   \z@ \@plus\p@}
\renewcommand*\theenumi{\@arabic\c@enumi}
\renewcommand*\theenumii{\@alph\c@enumii}
\renewcommand*\theenumiii{\@roman\c@enumiii}
\renewcommand*\theenumiv{\@Alph\c@enumiv}
\newcommand*\labelenumi{\theenumi.}
\newcommand*\labelenumii{(\theenumii)}
\newcommand*\labelenumiii{\theenumiii.}
\newcommand*\labelenumiv{\theenumiv.}
\renewcommand*\p@enumii{\theenumi}
\renewcommand*\p@enumiii{\theenumi(\theenumii)}
\renewcommand*\p@enumiv{\p@enumiii\theenumiii}
\renewenvironment{enumerate}{%
  \ifnum \@enumdepth >\thr@@
    \@toodeep
  \else
    \advance\@enumdepth \@ne
    \edef\@enumctr{enum\romannumeral\the\@enumdepth}%
    \expandafter
    \list
      \csname label\@enumctr\endcsname
         {\usecounter{\@enumctr}%
             \if@revlabel
               \def\makelabel##1{\hskip .5\unitindent{##1\hfil}}%
             \else
               \def\makelabel##1{##1\hfil}
             \fi
         }%
  \fi}
 {\global\@ignoretrue \endlist}
\newcommand\labelitemi  {\labelitemfont \textbullet}
\newcommand\labelitemii {\labelitemfont \bfseries \textendash}
\newcommand\labelitemiii{\labelitemfont \textasteriskcentered}
\newcommand\labelitemiv {\labelitemfont \textperiodcentered}
\newcommand\labelitemfont{\normalfont}
\renewenvironment{itemize}{%
  \ifnum \@itemdepth >\thr@@
    \@toodeep
  \else
    \advance\@itemdepth \@ne
    \edef\@itemitem{labelitem\romannumeral\the\@itemdepth}%
    \expandafter
    \list
      \csname\@itemitem\endcsname
         {%
            \if@revlabel
              \def\makelabel##1{\hskip .5\unitindent{##1\hfil}}\else
              \def\makelabel##1{##1\hfil}
            \fi
          }%
  \fi}
 {\global\@ignoretrue \endlist}
\newenvironment{description}
               {\list{}{\labelwidth\z@ \itemindent-\leftmargin
                        \let\makelabel\descriptionlabel}}
               {\endlist}
\newcommand*\descriptionlabel[1]{\hspace\labelsep
                                 \normalfont\bfseries #1}
\def\verbatim{%
  \topsep=-.5\parskip
  \@verbatim
  \frenchspacing\@vobeyspaces \@xverbatim}
\if@titlepage
  \newenvironment{abstract}{%
      \titlepage
      \null\vfil
      \@beginparpenalty\@lowpenalty
      \hbox{\SectFont \abstractname}%
      \@endparpenalty\@M
      \noindent\ignorespaces}
     {\par\vfil\null\endtitlepage}
\else
  \newenvironment{abstract}{%
      \if@twocolumn
        \section*{\abstractname}%
      \else
        \small
        \bgroup\rightskip=\unitindent
        \hbox{\SectFont \abstractname}%
        \noindent\ignorespaces
      \fi}
      {\if@twocolumn\else\par\egroup\fi}
\fi
\newenvironment{verse}
               {\let\\\@centercr
                \list{}{\itemsep\z@
                        \itemindent-1.5em%
                        \listparindent\itemindent
                        \rightmargin\leftmargin
                        \advance\leftmargin1.5em}%
                \item\relax}
               {\endlist}
\newenvironment{quotation}
               {\list{}{%
                        \listparindent\z@
                        \itemindent\listparindent
                        \rightmargin\leftmargin
                        \parsep\z@ \@plus\p@}%
                \item\relax}
               {\endlist}
\newenvironment{quote}
               {\list{}{\rightmargin\leftmargin}%
                \item\relax}
               {\endlist}
\def\@begintheorem#1#2{%
    \vskip\baselineskip \labelsep=.5em%
    \trivlist
    \item[\hskip \labelsep{\bfseries #1\ #2}]\slshape}
\def\@opargbegintheorem#1#2#3{%
    \vskip\baselineskip \labelsep=.5em%
    \trivlist
    \item[\hskip \labelsep{\bfseries #1\ #2\ (#3)}]\slshape}
\def\@endtheorem{\endtrivlist \vskip\baselineskip}
\newenvironment{titlepage}
    {
      \if@twocolumn
        \@restonecoltrue\onecolumn
      \else
        \@restonecolfalse\newpage
      \fi
      \thispagestyle{empty}%
      \if@compatibility
        \setcounter{page}\z@
      \else
        \setcounter{page}\@ne
      \fi}
     {\if@restonecol\twocolumn \else \newpage \fi
       \setcounter{page}\@ne
       }
\newcommand*\appendix{\par
  \setcounter{section}{0}%
  \setcounter{subsection}{0}%
  \gdef\thesection{\@Alph\c@section}}
\setlength\arraycolsep{5\p@}
\setlength\tabcolsep{6\p@}
\setlength\arrayrulewidth{.4\p@}
\setlength\doublerulesep{2\p@}
\setlength\tabbingsep{\labelsep}
\def\@minipagerestore{%
             \parskip=.5\baselineskip \@plus .1\baselineskip
                                      \@minus .1\baselineskip}
\skip\@mpfootins = \skip\footins
\setlength\fboxsep{3\p@}
\setlength\fboxrule{.4\p@}
\renewcommand*\theequation{\@arabic\c@equation}
\newcounter{figure}
\renewcommand*\thefigure{\@arabic\c@figure}
\def\fps@figure{tbp}
\def\ftype@figure{1}
\def\ext@figure{lof}
\def\fnum@figure{\figurename\nobreakspace\thefigure}
\newenvironment{figure}
               {\@float{figure}}
               {\end@float}
\newenvironment{figure*}
               {\@dblfloat{figure}}
               {\end@dblfloat}
\newcounter{table}
\renewcommand*\thetable{\@arabic\c@table}
\def\fps@table{tbp}
\def\ftype@table{2}
\def\ext@table{lot}
\def\fnum@table{\tablename\nobreakspace\thetable}
\newenvironment{table}
               {\@float{table}}
               {\end@float}
\newenvironment{table*}
               {\@dblfloat{table}}
               {\end@dblfloat}
\newlength\abovecaptionskip
\newlength\belowcaptionskip
\setlength\abovecaptionskip{10\p@}
\setlength\belowcaptionskip{0\p@}
\long\def\@makecaption#1#2{%
  \vskip\abovecaptionskip
  \sbox\@tempboxa{{\CaptionLabelFont#1:} \CaptionTextFont#2}%
  \ifdim \wd\@tempboxa >\hsize
    {\CaptionLabelFont#1:} \CaptionTextFont#2\par
  \else
    \global \@minipagefalse
    \hb@xt@\hsize{\hfil\box\@tempboxa\hfil}%
  \fi
  \vskip\belowcaptionskip}
\newcommand*\CaptionLabelFont{\relax}
\newcommand*\CaptionTextFont{\relax}
\newcommand*\CaptionFonts[2]{%
  \renewcommand*\CaptionLabelFont{#1}%
  \renewcommand*\CaptionTextFont{#2}%
  }
\DeclareOldFontCommand{\rm}{\normalfont\rmfamily}{\mathrm}
\DeclareOldFontCommand{\sf}{\normalfont\sffamily}{\mathsf}
\DeclareOldFontCommand{\tt}{\normalfont\ttfamily}{\mathtt}
\DeclareOldFontCommand{\bf}{\normalfont\bfseries}{\mathbf}
\DeclareOldFontCommand{\it}{\normalfont\itshape}{\mathit}
\DeclareOldFontCommand{\sl}{\normalfont\slshape}{\relax}
\DeclareOldFontCommand{\sc}{\normalfont\scshape}{\relax}
\DeclareRobustCommand*\cal{\@fontswitch\relax\mathcal}
\DeclareRobustCommand*\mit{\@fontswitch\relax\mathnormal}
\DeclareRobustCommand*\em{%
  \@nomath\em
  \ifdim\fontdimen\@ne\font>\z@
    \upshape
  \else
    \slshape
  \fi}
\newcommand*\@pnumwidth{1.55em}
\newcommand*\@tocrmarg {2.55em}
\newcommand*\@dotsep{4.5}
\setcounter{tocdepth}{3}
\newcommand*\tableofcontents{%
    \section*{\contentsname}%
    \@mkboth{\MakeUppercase{\contentsname}}%
            {\MakeUppercase{\contentsname}}%
    \@starttoc{toc}%
    }
\def\@starttoc#1{\begingroup
  \makeatletter
  \parskip\z@
  \@input{\jobname.#1}%
  \if@filesw
    \expandafter\newwrite\csname tf@#1\endcsname
    \immediate\openout \csname tf@#1\endcsname \jobname.#1\relax
  \fi \@nobreakfalse \endgroup}
\newcommand*\@regtocline[3]{%
  \ifnum #1>\c@tocdepth
  \else
    \vskip\z@\@plus.2\p@
    {\hangindent\z@ \@afterindenttrue \interlinepenalty\@M
     \leftskip\unitindent
     \rightskip\unitindent\@plus 1fil
     \parfillskip\z@
     \@tempdima\unitindent
     \parindent\z@
     \leavevmode
     \hbox{}\hskip -\leftskip\relax
     \ifnum#1<0\toc@case{#2}\else
     \toc@font#1 #2\fi\nobreak
     \hskip 1em \nobreak{\slshape #3}\par
     }%
  \fi}
\if@oldtoc
  \newcommand*\toc@font[1]{\relax}
\else
  \newcommand*\toc@font[4]{%
    \ifx\Hy@toclinkstart#2%
      \def\@next{#2\toc@font#1#3#4}%
    \else
      \def\@next{#2{#3}\toc@fontsel#1#4}%
    \expandafter\fi\@next}
  \newcommand*\toc@fontsel[1]{%
    \ifcase#1\relax
    \or\bfseries
    \or\slshape
    \or\rmfamily
    \fi}
\AtBeginDocument{%
  \ifx\hyper@linkstart\undefined
  \else
    \let\ORG@hyper@linkstart\hyper@linkstart
    \protected\def\hyper@linkstart#1#2{%
      \lowercase{\ORG@hyper@linkstart{#1}{#2}}}
  \fi}
\fi
\if@oldtoc
  \newcommand*\toc@case{\relax}
\else
  \newcommand*\toc@case{\MakeUppercase}
\fi
\if@oldtoc
\newcommand*\l@part[2]{%
  \ifnum \c@tocdepth >-2\relax
    \addpenalty\@secpenalty
    \addvspace{2.25em \@plus\p@}%
    \begingroup
      \setlength\@tempdima{3em}%
      \parindent \z@ \rightskip \@pnumwidth
      \parfillskip -\@pnumwidth
      {\leavevmode
        \large \bfseries #1\hfil \hb@xt@\@pnumwidth{\hss #2%
                          \kern-\p@\kern\p@}}\par
        \nobreak
       \if@compatibility
        \global\@nobreaktrue
        \everypar{\global\@nobreakfalse\everypar{}}%
      \fi
    \endgroup
  \fi}
\else
   \newcommand*\l@part{%
     \ifnum \c@tocdepth >-2\let\l@@part\relax
     \addpenalty\@secpenalty
     \addvspace{2.25em \@plus \p@}%
     \def\l@@part{\@regtocline{-1}}%
   \fi\l@@part}
\fi
\if@oldtoc
\newcommand*\l@section[2]{%
    \addpenalty\@secpenalty
    \addvspace{1.0em \@plus\p@}%
    \setlength\@tempdima{1.5em}%
    \begingroup
    \parindent \z@ \rightskip \@pnumwidth
    \parfillskip -\@pnumwidth
    \leavevmode \bfseries
    \advance\leftskip\@tempdima
    \hskip -\leftskip
    #1\nobreak\hfil \nobreak\hb@xt@\@pnumwidth{\hss #2%
                                 \kern-\p@\kern\p@}\par
   \endgroup}
\else
   \newcommand*\l@section{\@regtocline{1}}
\fi
\if@oldtoc
  \newcommand*\l@subsection   {\@dottedtocline{2}{1.5em}{2.3em}}
  \newcommand*\l@subsubsection{\@dottedtocline{3}{3.8em}{3.2em}}
  \newcommand*\l@paragraph    {\@dottedtocline{4}{7.0em}{4.1em}}
  \newcommand*\l@subparagraph {\@dottedtocline{5}{10em}{5em}}
\else
  \newcommand*\l@subsection   {\@regtocline{2}}
  \newcommand*\l@subsubsection{\@regtocline{3}}
  \newcommand*\l@paragraph    {\@regtocline{4}}
  \newcommand*\l@subparagraph {\@regtocline{5}}
\fi
\newcommand*\listoffigures{%
    \section*{\listfigurename}%
    \@mkboth{\MakeUppercase{\listfigurename}}%
            {\MakeUppercase{\listfigurename}}%
    \@starttoc{lof}%
    }
\if@oldtoc
  \newcommand*\l@figure{\@dottedtocline{1}{1.5em}{2.3em}}
\else
  \newcommand*\l@figure{\@regtocline{1}}
\fi
\newcommand*\listoftables{%
    \section*{\listtablename}%
    \@mkboth{\MakeUppercase{\listtablename}}%
            {\MakeUppercase{\listtablename}}%
    \@starttoc{lot}%
    }
\let\l@table\l@figure
\newdimen\bibindent
\setlength\bibindent{1.5em}
\newcommand*\newblock{}
\newenvironment{thebibliography}[1]
     {\section*{\refname}%
       \@mkboth{\MakeUppercase\refname}{\MakeUppercase\refname}%
      \list{\@biblabel{\@arabic\c@enumiv}}%
           {\settowidth\labelwidth{\@biblabel{#1}}%
            \leftmargin\labelwidth
            \advance\leftmargin\labelsep
            \@openbib@code
            \usecounter{enumiv}%
            \let\p@enumiv\@empty
            \renewcommand*\theenumiv{\@arabic\c@enumiv}}%
      \sloppy\clubpenalty4000\widowpenalty4000%
      \sfcode`\.\@m}
     {\def\@noitemerr
       {\@latex@warning{Empty `thebibliography' environment}}%
      \endlist}
\renewcommand\newblock{\hskip.11em\@plus.33em\@minus.07em}
\let\@openbib@code\@empty
\newenvironment{theindex}{%
  \if@twocolumn
    \@restonecolfalse
  \else
    \@restonecoltrue
  \fi
  \twocolumn[\section*{\indexname}]%
  \@mkboth{\MakeUppercase{\indexname}}{\MakeUppercase{\indexname}}%
  \thispagestyle{plain}\parindent\z@
  \columnseprule \z@
  \columnsep 35\p@
  \parskip\z@ \@plus .3\p@\relax
  \let\item\@idxitem
  }{%
  \if@restonecol\onecolumn\else\clearpage\fi}
\newcommand*\@idxitem  {\par\hangindent 40\p@}
\newcommand*\subitem   {\@idxitem\hspace*{20\p@}}
\newcommand*\subsubitem{\@idxitem\hspace*{30\p@}}
\newcommand*\indexspace{\par\vskip10\p@\@plus5\p@\@minus3\p@\relax}
\renewcommand*\footnoterule{%
  \kern-3\p@
  \kern.5\baselineskip
  \hrule\@width\unitindent
  \kern.4\baselineskip
}
\newcommand*\@makefntext{\@xmakefntext{\normalfont\@thefnmark.}}
\newcommand*\@xmakefntext[1]{%
    \parindent\z@
    \def\labelitemi{\textendash}\@revlabeltrue
    {\setbox0\hbox {#1\hskip.5em plus 1fil}
      \dimen0=2\wd0\relax
      \ifdim\dimen0>\unitindent
        \global\unitindent\dimen0\relax
        \@indentset
      \fi}
    \leavevmode\hb@xt@.5\unitindent{#1\hfil}}
\newcommand*\contentsname{Contents}
\newcommand*\listfigurename{List of Figures}
\newcommand*\listtablename{List of Tables}
\newcommand*\refname{References}
\newcommand*\indexname{Index}
\newcommand*\figurename{Figure}
\newcommand*\tablename{Table}
\newcommand*\partname{Part}
\newcommand*\appendixname{Appendix}
\newcommand*\abstractname{Abstract}
\newcommand*\seename{see}
\newcommand*\andname{and}
\newcommand*\today{}
\def\today{\ifcase\month\or
  January\or February\or March\or April\or May\or June\or
  July\or August\or September\or October\or November\or December\fi
  \space\number\day, \number\year}
\setlength\columnsep{10\p@}
\setlength\columnseprule{0\p@}
\pagestyle{plain}
\pagenumbering{arabic}      % Arabic page numbers
\if@twoside
\else
  \raggedbottom
\fi
\if@twocolumn
  \twocolumn
  \sloppy
  \flushbottom
\else
  \onecolumn
\fi
\frenchspacing
\endinput
%%
%% End of file `artikel3.cls'.