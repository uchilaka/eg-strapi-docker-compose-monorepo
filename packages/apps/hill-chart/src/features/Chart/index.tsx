import React, { MutableRefObject } from 'react';
import useChart from '@lib/useChart';
import { Runtime, Inspector } from '@observablehq/runtime';

export default function Chart() {
  const chartRef = React.useRef<HTMLDivElement>(null);

  const sampleData = [
    {
      color: 'gray',
      description: 'Validation: Salesforce Integration',
      x: 100,
      size: 15,
    },
    {
      color: 'maroon',
      description: 'Refactor: Renewals',
      x: 100,
      size: 10,
    },
    {
      color: 'maroon',
      description: 'Refactor: QuoteImporterService',
      x: 100,
      size: 10,
    },
    {
      color: 'cyan',
      description: 'Refactor: Lighthouse Proposals',
      x: 100,
      size: 10,
    },
    {
      color: 'yellow',
      description: 'Migration & Legacy Data Updates',
      x: 80,
      size: 20,
    },
    // Everything above this line is actually at "0"
    {
      color: 'maroon',
      description: 'Refactor: TranslateQuoteService',
      x: 100,
      size: 15,
    },
    {
      color: 'maroon',
      description: 'Refactor: Complete Service',
      x: 100,
      size: 30,
    },
    {
      color: 'maroon',
      description: 'Refactor: Quote PDF',
      x: 100,
      size: 5,
    },
    {
      color: 'maroon',
      description: 'Proposal Save & Validations',
      x: 100,
      size: 20,
    },
    {
      color: 'cyan',
      description: 'Customizable Plan: Ancillary',
      x: 100,
      size: 20,
    },
    {
      color: 'cyan',
      description: 'Customizable Plan: Dental',
      x: 100,
      size: 20,
    },
    {
      color: 'cyan',
      description: 'InsurancePolicyInfo.jsx',
      x: 100,
      size: 20,
    },
    {
      color: 'cyan',
      description: 'InsuranceCoverageDates.jsx',
      x: 100,
      size: 30,
    },
  ];

  const [runtime] = React.useState(() => new Runtime());

  const chartDataCallback = React.useCallback(() => sampleData, [sampleData]);
  // function chartDataCallback() {
  //   return sampleData;
  // }

  const define = useChart(chartDataCallback);

  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.innerHTML = '';
      runtime.module(define, Inspector.into(chartRef.current));
    }
  }, [chartRef, sampleData]);

  if (!chartRef) return null;

  return (
    <>
      <h2>Start a new Hill Chart</h2>
      <div ref={chartRef}></div>
    </>
  );
}
