/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2RouteResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}
  */
  readonly modelSelectionExpression?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#region Apigatewayv2RouteResponse#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}
  */
  readonly responseModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}
  */
  readonly routeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}
  */
  readonly routeResponseKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response aws_apigatewayv2_route_response}
*/
export class Apigatewayv2RouteResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_route_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apigatewayv2RouteResponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2RouteResponse to import
  * @param importFromId The id of the existing Apigatewayv2RouteResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2RouteResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_route_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/apigatewayv2_route_response aws_apigatewayv2_route_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2RouteResponseConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_route_response',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
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
    this._apiId = config.apiId;
    this._id = config.id;
    this._modelSelectionExpression = config.modelSelectionExpression;
    this._region = config.region;
    this._responseModels = config.responseModels;
    this._routeId = config.routeId;
    this._routeResponseKey = config.routeResponseKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
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

  // model_selection_expression - computed: false, optional: true, required: false
  private _modelSelectionExpression?: string; 
  public get modelSelectionExpression() {
    return this.getStringAttribute('model_selection_expression');
  }
  public set modelSelectionExpression(value: string) {
    this._modelSelectionExpression = value;
  }
  public resetModelSelectionExpression() {
    this._modelSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSelectionExpressionInput() {
    return this._modelSelectionExpression;
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

  // response_models - computed: false, optional: true, required: false
  private _responseModels?: { [key: string]: string }; 
  public get responseModels() {
    return this.getStringMapAttribute('response_models');
  }
  public set responseModels(value: { [key: string]: string }) {
    this._responseModels = value;
  }
  public resetResponseModels() {
    this._responseModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseModelsInput() {
    return this._responseModels;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // route_response_key - computed: false, optional: false, required: true
  private _routeResponseKey?: string; 
  public get routeResponseKey() {
    return this.getStringAttribute('route_response_key');
  }
  public set routeResponseKey(value: string) {
    this._routeResponseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseKeyInput() {
    return this._routeResponseKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      id: cdktf.stringToTerraform(this._id),
      model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
      region: cdktf.stringToTerraform(this._region),
      response_models: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseModels),
      route_id: cdktf.stringToTerraform(this._routeId),
      route_response_key: cdktf.stringToTerraform(this._routeResponseKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
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
      model_selection_expression: {
        value: cdktf.stringToHclTerraform(this._modelSelectionExpression),
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
      response_models: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseModels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_response_key: {
        value: cdktf.stringToHclTerraform(this._routeResponseKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
