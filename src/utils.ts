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
    (baseCost +
      (fixedDeductible - 1500) * -0.05 +
      (variableDeductible - 25) * -7) /
    4
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
