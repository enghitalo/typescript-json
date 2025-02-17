import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_intersection = _test_is_clone(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.isClone(input),
    ObjectIntersection.SPOILERS,
);
