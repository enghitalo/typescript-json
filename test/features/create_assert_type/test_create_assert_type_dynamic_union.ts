import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_union = _test_assert_type(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assert<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
