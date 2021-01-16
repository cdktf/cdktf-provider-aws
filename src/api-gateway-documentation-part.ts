// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
  readonly properties: string;
  readonly restApiId: string;
  /** location block */
  readonly location: ApiGatewayDocumentationPartLocation[];
}
export interface ApiGatewayDocumentationPartLocation {
  readonly method?: string;
  readonly name?: string;
  readonly path?: string;
  readonly statusCode?: string;
  readonly type: string;
}

function apiGatewayDocumentationPartLocationToTerraform(struct?: ApiGatewayDocumentationPartLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class ApiGatewayDocumentationPart extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_documentation_part',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._properties = config.properties;
    this._restApiId = config.restApiId;
    this._location = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // properties - computed: false, optional: false, required: true
  private _properties: string;
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // location - computed: false, optional: false, required: true
  private _location: ApiGatewayDocumentationPartLocation[];
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }
  public set location(value: ApiGatewayDocumentationPartLocation[]) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      properties: cdktf.stringToTerraform(this._properties),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      location: cdktf.listMapper(apiGatewayDocumentationPartLocationToTerraform)(this._location),
    };
  }
}
