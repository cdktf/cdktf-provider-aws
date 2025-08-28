/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer#authorizer_id DataAwsApiGatewayAuthorizer#authorizer_id}
  */
  readonly authorizerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer#id DataAwsApiGatewayAuthorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer#region DataAwsApiGatewayAuthorizer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer#rest_api_id DataAwsApiGatewayAuthorizer#rest_api_id}
  */
  readonly restApiId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer aws_api_gateway_authorizer}
*/
export class DataAwsApiGatewayAuthorizer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsApiGatewayAuthorizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsApiGatewayAuthorizer to import
  * @param importFromId The id of the existing DataAwsApiGatewayAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsApiGatewayAuthorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/api_gateway_authorizer aws_api_gateway_authorizer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApiGatewayAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
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
    this._authorizerId = config.authorizerId;
    this._id = config.id;
    this._region = config.region;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_credentials - computed: true, optional: false, required: false
  public get authorizerCredentials() {
    return this.getStringAttribute('authorizer_credentials');
  }

  // authorizer_id - computed: false, optional: false, required: true
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: false, required: false
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }

  // authorizer_uri - computed: true, optional: false, required: false
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
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

  // identity_source - computed: true, optional: false, required: false
  public get identitySource() {
    return this.getStringAttribute('identity_source');
  }

  // identity_validation_expression - computed: true, optional: false, required: false
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_arns - computed: true, optional: false, required: false
  public get providerArns() {
    return this.getListAttribute('provider_arns');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_id: {
        value: cdktf.stringToHclTerraform(this._authorizerId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
