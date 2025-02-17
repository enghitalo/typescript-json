import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_never = _test_assert_type(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createAssertType<DynamicNever>(),
    DynamicNever.SPOILERS,
);
