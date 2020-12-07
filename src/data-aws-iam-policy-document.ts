// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_policy_document.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  readonly overrideJson?: string;
  readonly policyId?: string;
  readonly sourceJson?: string;
  readonly version?: string;
  /** statement block */
  readonly statement?: DataAwsIamPolicyDocumentStatement[];
}
export interface DataAwsIamPolicyDocumentStatementCondition {
  readonly test: string;
  readonly values: string[];
  readonly variable: string;
}

function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    test: cdktf.stringToTerraform(struct!.test),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}

export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
  readonly identifiers: string[];
  readonly type: string;
}

function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataAwsIamPolicyDocumentStatementPrincipals {
  readonly identifiers: string[];
  readonly type: string;
}

function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identifiers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataAwsIamPolicyDocumentStatement {
  readonly actions?: string[];
  readonly effect?: string;
  readonly notActions?: string[];
  readonly notResources?: string[];
  readonly resources?: string[];
  readonly sid?: string;
  /** condition block */
  readonly condition?: DataAwsIamPolicyDocumentStatementCondition[];
  /** not_principals block */
  readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[];
  /** principals block */
  readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[];
}

function dataAwsIamPolicyDocumentStatementToTerraform(struct?: DataAwsIamPolicyDocumentStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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


// Resource

export class DataAwsIamPolicyDocument extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._policyId = config.policyId;
    this._sourceJson = config.sourceJson;
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
  public set overrideJson(value: string ) {
    this._overrideJson = value;
  }
  public resetOverrideJson() {
    this._overrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideJsonInput() {
    return this._overrideJson
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string;
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string ) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // source_json - computed: false, optional: true, required: false
  private _sourceJson?: string;
  public get sourceJson() {
    return this.getStringAttribute('source_json');
  }
  public set sourceJson(value: string ) {
    this._sourceJson = value;
  }
  public resetSourceJson() {
    this._sourceJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceJsonInput() {
    return this._sourceJson
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string ) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: DataAwsIamPolicyDocumentStatement[];
  public get statement() {
    return this.interpolationForAttribute('statement') as any;
  }
  public set statement(value: DataAwsIamPolicyDocumentStatement[] ) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      override_json: cdktf.stringToTerraform(this._overrideJson),
      policy_id: cdktf.stringToTerraform(this._policyId),
      source_json: cdktf.stringToTerraform(this._sourceJson),
      version: cdktf.stringToTerraform(this._version),
      statement: cdktf.listMapper(dataAwsIamPolicyDocumentStatementToTerraform)(this._statement),
    };
  }
}
