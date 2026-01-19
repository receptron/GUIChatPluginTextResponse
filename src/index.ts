/**
 * Text Response Plugin - Main Entry Point
 */

export type { TextResponseData, TextResponseArgs } from "./core/types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeTextResponse,
  pluginCore,
} from "./core/plugin";

export { samples } from "./core/samples";
