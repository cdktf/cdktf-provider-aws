/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#action LambdaPermission#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}
  */
  readonly eventSourceToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}
  */
  readonly functionUrlAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#id LambdaPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#principal LambdaPermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}
  */
  readonly principalOrgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#region LambdaPermission#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}
  */
  readonly sourceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}
  */
  readonly sourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}
  */
  readonly statementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}
  */
  readonly statementIdPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission aws_lambda_permission}
*/
export class LambdaPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaPermission to import
  * @param importFromId The id of the existing LambdaPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/lambda_permission aws_lambda_permission} Resource
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
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      region: cdktf.stringToTerraform(this._region),
      source_account: cdktf.stringToTerraform(this._sourceAccount),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      statement_id: cdktf.stringToTerraform(this._statementId),
      statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_source_token: {
        value: cdktf.stringToHclTerraform(this._eventSourceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_url_auth_type: {
        value: cdktf.stringToHclTerraform(this._functionUrlAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_org_id: {
        value: cdktf.stringToHclTerraform(this._principalOrgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_account: {
        value: cdktf.stringToHclTerraform(this._sourceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_arn: {
        value: cdktf.stringToHclTerraform(this._sourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_id: {
        value: cdktf.stringToHclTerraform(this._statementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_id_prefix: {
        value: cdktf.stringToHclTerraform(this._statementIdPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
