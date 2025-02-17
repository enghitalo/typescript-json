import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_ultimate_union = _test_assert_type(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createAssertType<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
