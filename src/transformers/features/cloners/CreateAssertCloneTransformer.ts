import ts from "typescript";

import { AssertCloneProgrammer } from "../../../programmers/AssertCloneProgrammer";

import { IProject } from "../../IProject";

export namespace CreateAssertCloneTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXASSERTTENCE
        if (!expression.typeArguments || !expression.typeArguments[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        // GET TYPE INFO
        const type: ts.Type = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return AssertCloneProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.assertClone(): generic argument assert not specified.",
    GENERIC_ARGUMENT = "Error on TSON.assertClone(): non-specified generic argument.",
}
