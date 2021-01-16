// https://www.terraform.io/docs/providers/aws/r/lambda_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
  readonly action: string;
  readonly eventSourceToken?: string;
  readonly functionName: string;
  readonly principal: string;
  readonly qualifier?: string;
  readonly sourceAccount?: string;
  readonly sourceArn?: string;
  readonly statementId?: string;
  readonly statementIdPrefix?: string;
}

// Resource

export class LambdaPermission extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._eventSourceToken = config.eventSourceToken;
    this._functionName = config.functionName;
    this._principal = config.principal;
    this._qualifier = config.qualifier;
    this._sourceAccount = config.sourceAccount;
    this._sourceArn = config.sourceArn;
    this._statementId = config.statementId;
    this._statementIdPrefix = config.statementIdPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // event_source_token - computed: false, optional: true, required: false
  private _eventSourceToken?: string;
  public get eventSourceToken() {
    return this.getStringAttribute('event_source_token');
  }
  public set eventSourceToken(value: string ) {
    this._eventSourceToken = value;
  }
  public resetEventSourceToken() {
    this._eventSourceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceTokenInput() {
    return this._eventSourceToken
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string ) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // source_account - computed: false, optional: true, required: false
  private _sourceAccount?: string;
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }
  public set sourceAccount(value: string ) {
    this._sourceAccount = value;
  }
  public resetSourceAccount() {
    this._sourceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountInput() {
    return this._sourceAccount
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string;
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string ) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn
  }

  // statement_id - computed: true, optional: true, required: false
  private _statementId?: string;
  public get statementId() {
    return this.getStringAttribute('statement_id');
  }
  public set statementId(value: string) {
    this._statementId = value;
  }
  public resetStatementId() {
    this._statementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdInput() {
    return this._statementId
  }

  // statement_id_prefix - computed: false, optional: true, required: false
  private _statementIdPrefix?: string;
  public get statementIdPrefix() {
    return this.getStringAttribute('statement_id_prefix');
  }
  public set statementIdPrefix(value: string ) {
    this._statementIdPrefix = value;
  }
  public resetStatementIdPrefix() {
    this._statementIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdPrefixInput() {
    return this._statementIdPrefix
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      event_source_token: cdktf.stringToTerraform(this._eventSourceToken),
      function_name: cdktf.stringToTerraform(this._functionName),
      principal: cdktf.stringToTerraform(this._principal),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      source_account: cdktf.stringToTerraform(this._sourceAccount),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      statement_id: cdktf.stringToTerraform(this._statementId),
      statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
    };
  }
}
