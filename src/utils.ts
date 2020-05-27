export const calculateMonthlyCost = (
  baseCost: number,
  fixedDeductible: number,
  variableDeductible,
) => {
  return (
    baseCost + (fixedDeductible - 1500) * -0.05 + (variableDeductible - 25) * -7
  );
};

export const calculateWeeklyCost = (
  baseCost: number,
  fixedDeductible: number,
  variableDeductible,
) => {
  return (
    calculateMonthlyCost(baseCost, fixedDeductible, variableDeductible) / 4
  );
};

export const calculateYearlyCost = (
  baseCost: number,
  fixedDeductible: number,
  variableDeductible,
) => {
  return (
    (baseCost +
      (fixedDeductible - 1500) * -0.05 +
      (variableDeductible - 25) * -7) *
    12
  );
};
export const calculatedCost = (
  baseCost: number,
  fixedDeductible: number,
  variableDeductible: number,
  interval: string,
) => {
  switch (interval) {
    case 'vecka': {
      return calculateWeeklyCost(baseCost, fixedDeductible, variableDeductible);
    }
    case 'månad': {
      return calculateMonthlyCost(
        baseCost,
        fixedDeductible,
        variableDeductible,
      );
    }
    case 'år': {
      return calculateYearlyCost(baseCost, fixedDeductible, variableDeductible);
    }
    default:
      return 0;
  }
};
