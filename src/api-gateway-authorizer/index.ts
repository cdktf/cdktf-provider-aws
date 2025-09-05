/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}
  */
  readonly authorizerCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#id ApiGatewayAuthorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}
  */
  readonly identitySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#name ApiGatewayAuthorizer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}
  */
  readonly providerArns?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#region ApiGatewayAuthorizer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#type ApiGatewayAuthorizer#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer aws_api_gateway_authorizer}
*/
export class ApiGatewayAuthorizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayAuthorizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayAuthorizer to import
  * @param importFromId The id of the existing ApiGatewayAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayAuthorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/api_gateway_authorizer aws_api_gateway_authorizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._authorizerCredentials = config.authorizerCredentials;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerUri = config.authorizerUri;
    this._id = config.id;
    this._identitySource = config.identitySource;
    this._identityValidationExpression = config.identityValidationExpression;
    this._name = config.name;
    this._providerArns = config.providerArns;
    this._region = config.region;
    this._restApiId = config.restApiId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_credentials - computed: false, optional: true, required: false
  private _authorizerCredentials?: string; 
  public get authorizerCredentials() {
    return this.getStringAttribute('authorizer_credentials');
  }
  public set authorizerCredentials(value: string) {
    this._authorizerCredentials = value;
  }
  public resetAuthorizerCredentials() {
    this._authorizerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsInput() {
    return this._authorizerCredentials;
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
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

  // identity_source - computed: false, optional: true, required: false
  private _identitySource?: string; 
  public get identitySource() {
    return this.getStringAttribute('identity_source');
  }
  public set identitySource(value: string) {
    this._identitySource = value;
  }
  public resetIdentitySource() {
    this._identitySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceInput() {
    return this._identitySource;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_arns - computed: false, optional: true, required: false
  private _providerArns?: string[]; 
  public get providerArns() {
    return cdktf.Fn.tolist(this.getListAttribute('provider_arns'));
  }
  public set providerArns(value: string[]) {
    this._providerArns = value;
  }
  public resetProviderArns() {
    this._providerArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnsInput() {
    return this._providerArns;
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

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_credentials: cdktf.stringToTerraform(this._authorizerCredentials),
      authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
      authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
      id: cdktf.stringToTerraform(this._id),
      identity_source: cdktf.stringToTerraform(this._identitySource),
      identity_validation_expression: cdktf.stringToTerraform(this._identityValidationExpression),
      name: cdktf.stringToTerraform(this._name),
      provider_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._providerArns),
      region: cdktf.stringToTerraform(this._region),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_credentials: {
        value: cdktf.stringToHclTerraform(this._authorizerCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_result_ttl_in_seconds: {
        value: cdktf.numberToHclTerraform(this._authorizerResultTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorizer_uri: {
        value: cdktf.stringToHclTerraform(this._authorizerUri),
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
      identity_source: {
        value: cdktf.stringToHclTerraform(this._identitySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_validation_expression: {
        value: cdktf.stringToHclTerraform(this._identityValidationExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._providerArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
