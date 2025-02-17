import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_class_getter = _test_assert_type(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.assertType(input),
    ClassGetter.SPOILERS,
);
