import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_generic_alias = _test_assert_equals(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.assertEquals(input),
);
