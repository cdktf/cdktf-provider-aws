// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface DataAwsIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}
  */
  readonly overrideJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}
  */
  readonly overridePolicyDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}
  */
  readonly sourceJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}
  */
  readonly sourcePolicyDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}
  */
  readonly statement?: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataAwsIamPolicyDocumentStatementCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}
  */
  readonly test: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}
  */
  readonly values: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}
  */
  readonly variable: string;
}

export function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test: cdktf.stringToTerraform(struct!.test),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}

export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}
  */
  readonly identifiers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}
  */
  readonly type: string;
}

export function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataAwsIamPolicyDocumentStatementPrincipals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}
  */
  readonly identifiers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}
  */
  readonly type: string;
}

export function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataAwsIamPolicyDocumentStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}
  */
  readonly notActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}
  */
  readonly notResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}
  */
  readonly sid?: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#condition DataAwsIamPolicyDocument#condition}
  */
  readonly condition?: DataAwsIamPolicyDocumentStatementCondition[] | cdktf.IResolvable;
  /**
  * not_principals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_principals DataAwsIamPolicyDocument#not_principals}
  */
  readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[] | cdktf.IResolvable;
  /**
  * principals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#principals DataAwsIamPolicyDocument#principals}
  */
  readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[] | cdktf.IResolvable;
}

export function dataAwsIamPolicyDocumentStatementToTerraform(struct?: DataAwsIamPolicyDocumentStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notActions),
    not_resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    sid: cdktf.stringToTerraform(struct!.sid),
    condition: cdktf.listMapper(dataAwsIamPolicyDocumentStatementConditionToTerraform)(struct!.condition),
    not_principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform)(struct!.notPrincipals),
    principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementPrincipalsToTerraform)(struct!.principals),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document aws_iam_policy_document}
*/
export class DataAwsIamPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_policy_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document aws_iam_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._overrideJson = config.overrideJson;
    this._overridePolicyDocuments = config.overridePolicyDocuments;
    this._policyId = config.policyId;
    this._sourceJson = config.sourceJson;
    this._sourcePolicyDocuments = config.sourcePolicyDocuments;
    this._version = config.version;
    this._statement = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // override_json - computed: false, optional: true, required: false
  private _overrideJson?: string; 
  public get overrideJson() {
    return this.getStringAttribute('override_json');
  }
  public set overrideJson(value: string) {
    this._overrideJson = value;
  }
  public resetOverrideJson() {
    this._overrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideJsonInput() {
    return this._overrideJson;
  }

  // override_policy_documents - computed: false, optional: true, required: false
  private _overridePolicyDocuments?: string[]; 
  public get overridePolicyDocuments() {
    return this.getListAttribute('override_policy_documents');
  }
  public set overridePolicyDocuments(value: string[]) {
    this._overridePolicyDocuments = value;
  }
  public resetOverridePolicyDocuments() {
    this._overridePolicyDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePolicyDocumentsInput() {
    return this._overridePolicyDocuments;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // source_json - computed: false, optional: true, required: false
  private _sourceJson?: string; 
  public get sourceJson() {
    return this.getStringAttribute('source_json');
  }
  public set sourceJson(value: string) {
    this._sourceJson = value;
  }
  public resetSourceJson() {
    this._sourceJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceJsonInput() {
    return this._sourceJson;
  }

  // source_policy_documents - computed: false, optional: true, required: false
  private _sourcePolicyDocuments?: string[]; 
  public get sourcePolicyDocuments() {
    return this.getListAttribute('source_policy_documents');
  }
  public set sourcePolicyDocuments(value: string[]) {
    this._sourcePolicyDocuments = value;
  }
  public resetSourcePolicyDocuments() {
    this._sourcePolicyDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePolicyDocumentsInput() {
    return this._sourcePolicyDocuments;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable; 
  public get statement() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('statement');
  }
  public set statement(value: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      override_json: cdktf.stringToTerraform(this._overrideJson),
      override_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._overridePolicyDocuments),
      policy_id: cdktf.stringToTerraform(this._policyId),
      source_json: cdktf.stringToTerraform(this._sourceJson),
      source_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._sourcePolicyDocuments),
      version: cdktf.stringToTerraform(this._version),
      statement: cdktf.listMapper(dataAwsIamPolicyDocumentStatementToTerraform)(this._statement),
    };
  }
}
