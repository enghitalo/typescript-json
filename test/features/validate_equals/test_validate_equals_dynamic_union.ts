import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_dynamic_union = _test_validate_equals(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.validateEquals<DynamicUnion>(input),
);
