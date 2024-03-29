import Highlighter from "react-highlight-words";

const Accordian = ({ snippet, index, q }) => {
  return (
    <div className="py-5" key={"accordian" + "-" + index}>
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="text-uppercase">
            <Highlighter searchWords={[q]} textToHighlight={snippet.title} />
          </span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          {snippet.component}
        </div>
      </details>
    </div>
  );
};

export default Accordian;
