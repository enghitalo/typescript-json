import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_generic_array = _test_assert_type(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.assertType(input),
    ObjectGenericArray.SPOILERS,
);
