/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayIntegrationResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}
  */
  readonly contentHandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#region ApiGatewayIntegrationResponse#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}
  */
  readonly responseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}
  */
  readonly responseTemplates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}
  */
  readonly selectionPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}
  */
  readonly statusCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response aws_api_gateway_integration_response}
*/
export class ApiGatewayIntegrationResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_integration_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayIntegrationResponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayIntegrationResponse to import
  * @param importFromId The id of the existing ApiGatewayIntegrationResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayIntegrationResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_integration_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/api_gateway_integration_response aws_api_gateway_integration_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayIntegrationResponseConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_integration_response',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._contentHandling = config.contentHandling;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._region = config.region;
    this._resourceId = config.resourceId;
    this._responseParameters = config.responseParameters;
    this._responseTemplates = config.responseTemplates;
    this._restApiId = config.restApiId;
    this._selectionPattern = config.selectionPattern;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_handling - computed: false, optional: true, required: false
  private _contentHandling?: string; 
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }
  public set contentHandling(value: string) {
    this._contentHandling = value;
  }
  public resetContentHandling() {
    this._contentHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingInput() {
    return this._contentHandling;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: string }; 
  public get responseParameters() {
    return this.getStringMapAttribute('response_parameters');
  }
  public set responseParameters(value: { [key: string]: string }) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters;
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string }; 
  public get responseTemplates() {
    return this.getStringMapAttribute('response_templates');
  }
  public set responseTemplates(value: { [key: string]: string }) {
    this._responseTemplates = value;
  }
  public resetResponseTemplates() {
    this._responseTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplatesInput() {
    return this._responseTemplates;
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

  // selection_pattern - computed: false, optional: true, required: false
  private _selectionPattern?: string; 
  public get selectionPattern() {
    return this.getStringAttribute('selection_pattern');
  }
  public set selectionPattern(value: string) {
    this._selectionPattern = value;
  }
  public resetSelectionPattern() {
    this._selectionPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionPatternInput() {
    return this._selectionPattern;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_handling: cdktf.stringToTerraform(this._contentHandling),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      response_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseParameters),
      response_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseTemplates),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      selection_pattern: cdktf.stringToTerraform(this._selectionPattern),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_handling: {
        value: cdktf.stringToHclTerraform(this._contentHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      response_templates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseTemplates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_pattern: {
        value: cdktf.stringToHclTerraform(this._selectionPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
