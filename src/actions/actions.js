export const BUY_FEATURE = "BUY_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function buyFeature() {
  return {
    type: BUY_FEATURE
  };
}

export function removeFeature() {
  return {
    type: REMOVE_FEATURE
  };
}
