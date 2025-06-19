/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#id ApiGatewayRequestValidator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#name ApiGatewayRequestValidator#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#region ApiGatewayRequestValidator#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}
  */
  readonly validateRequestBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}
  */
  readonly validateRequestParameters?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator aws_api_gateway_request_validator}
*/
export class ApiGatewayRequestValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_request_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayRequestValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayRequestValidator to import
  * @param importFromId The id of the existing ApiGatewayRequestValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayRequestValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_request_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_request_validator aws_api_gateway_request_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRequestValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_request_validator',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._restApiId = config.restApiId;
    this._validateRequestBody = config.validateRequestBody;
    this._validateRequestParameters = config.validateRequestParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean | cdktf.IResolvable; 
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }
  public set validateRequestBody(value: boolean | cdktf.IResolvable) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody;
  }

  // validate_request_parameters - computed: false, optional: true, required: false
  private _validateRequestParameters?: boolean | cdktf.IResolvable; 
  public get validateRequestParameters() {
    return this.getBooleanAttribute('validate_request_parameters');
  }
  public set validateRequestParameters(value: boolean | cdktf.IResolvable) {
    this._validateRequestParameters = value;
  }
  public resetValidateRequestParameters() {
    this._validateRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestParametersInput() {
    return this._validateRequestParameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
      validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      validate_request_body: {
        value: cdktf.booleanToHclTerraform(this._validateRequestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_request_parameters: {
        value: cdktf.booleanToHclTerraform(this._validateRequestParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
