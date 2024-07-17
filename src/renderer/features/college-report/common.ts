import {
  genAck,
  genCandidateDecl,
  genCertificate,
  genCloser,
  genCover,
  genMainContent,
  genPreamble,
  genRef,
  genTableOfContent,
} from '../../template/latexGeneration';

const genLatex = (): string | undefined => {
  let latex: string | undefined;
  const basicInfo = JSON.parse(
    window.localStorage.getItem('basicInfo') as string,
  );

  if (basicInfo) {
    basicInfo.submission_date = new Date(basicInfo.submission_date);
    basicInfo.work_duration.from = new Date(basicInfo.work_duration.from);
    basicInfo.work_duration.to = new Date(basicInfo.work_duration.to);

    latex =
      genPreamble(basicInfo) +
      genCover(basicInfo) +
      genCandidateDecl(basicInfo) +
      genCertificate(basicInfo) +
      genAck(basicInfo) +
      genTableOfContent();
  }

  const mainContent = JSON.parse(
    window.localStorage.getItem('mainContent') as string,
  );
  if (mainContent) {
    latex = latex?.concat(genMainContent(mainContent));
  }

  const ref = JSON.parse(window.localStorage.getItem('references') as string);
  if (ref) {
    latex = latex?.concat(genRef(ref) as string);
  }

  latex = latex?.concat(genCloser());

  // console.log(latex);

  return latex;
};

export default genLatex;
