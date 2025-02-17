import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_functional_object_union = _test_assert_type(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.assertType(input),
    FunctionalObjectUnion.SPOILERS,
);
