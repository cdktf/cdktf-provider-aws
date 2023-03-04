// https://www.terraform.io/docs/providers/aws/r/lambda_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#action LambdaPermission#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#event_source_token LambdaPermission#event_source_token}
  */
  readonly eventSourceToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_name LambdaPermission#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}
  */
  readonly functionUrlAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#id LambdaPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal LambdaPermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#principal_org_id LambdaPermission#principal_org_id}
  */
  readonly principalOrgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#qualifier LambdaPermission#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_account LambdaPermission#source_account}
  */
  readonly sourceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#source_arn LambdaPermission#source_arn}
  */
  readonly sourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id LambdaPermission#statement_id}
  */
  readonly statementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}
  */
  readonly statementIdPrefix?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission aws_lambda_permission}
*/
export class LambdaPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_permission";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission aws_lambda_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._eventSourceToken = config.eventSourceToken;
    this._functionName = config.functionName;
    this._functionUrlAuthType = config.functionUrlAuthType;
    this._id = config.id;
    this._principal = config.principal;
    this._principalOrgId = config.principalOrgId;
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
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // event_source_token - computed: false, optional: true, required: false
  private _eventSourceToken?: string; 
  public get eventSourceToken() {
    return this.getStringAttribute('event_source_token');
  }
  public set eventSourceToken(value: string) {
    this._eventSourceToken = value;
  }
  public resetEventSourceToken() {
    this._eventSourceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceTokenInput() {
    return this._eventSourceToken;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_url_auth_type - computed: false, optional: true, required: false
  private _functionUrlAuthType?: string; 
  public get functionUrlAuthType() {
    return this.getStringAttribute('function_url_auth_type');
  }
  public set functionUrlAuthType(value: string) {
    this._functionUrlAuthType = value;
  }
  public resetFunctionUrlAuthType() {
    this._functionUrlAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrlAuthTypeInput() {
    return this._functionUrlAuthType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // principal_org_id - computed: false, optional: true, required: false
  private _principalOrgId?: string; 
  public get principalOrgId() {
    return this.getStringAttribute('principal_org_id');
  }
  public set principalOrgId(value: string) {
    this._principalOrgId = value;
  }
  public resetPrincipalOrgId() {
    this._principalOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalOrgIdInput() {
    return this._principalOrgId;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // source_account - computed: false, optional: true, required: false
  private _sourceAccount?: string; 
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }
  public set sourceAccount(value: string) {
    this._sourceAccount = value;
  }
  public resetSourceAccount() {
    this._sourceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountInput() {
    return this._sourceAccount;
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
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
    return this._statementId;
  }

  // statement_id_prefix - computed: true, optional: true, required: false
  private _statementIdPrefix?: string; 
  public get statementIdPrefix() {
    return this.getStringAttribute('statement_id_prefix');
  }
  public set statementIdPrefix(value: string) {
    this._statementIdPrefix = value;
  }
  public resetStatementIdPrefix() {
    this._statementIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdPrefixInput() {
    return this._statementIdPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      event_source_token: cdktf.stringToTerraform(this._eventSourceToken),
      function_name: cdktf.stringToTerraform(this._functionName),
      function_url_auth_type: cdktf.stringToTerraform(this._functionUrlAuthType),
      id: cdktf.stringToTerraform(this._id),
      principal: cdktf.stringToTerraform(this._principal),
      principal_org_id: cdktf.stringToTerraform(this._principalOrgId),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      source_account: cdktf.stringToTerraform(this._sourceAccount),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      statement_id: cdktf.stringToTerraform(this._statementId),
      statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
    };
  }
}
