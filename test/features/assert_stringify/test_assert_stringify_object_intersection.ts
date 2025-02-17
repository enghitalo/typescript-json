import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_intersection = _test_assert_stringify(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.assertStringify(input),
    ObjectIntersection.SPOILERS,
);
