import { ForwardedRef, useImperativeHandle } from "react";
import { UsePlasmaReturn } from "../types";

export const useConfigExpose = (
  exposeRef: ForwardedRef<UsePlasmaReturn>,
  config: UsePlasmaReturn,
) => {
  useImperativeHandle(exposeRef, () => config, [config]);
};
