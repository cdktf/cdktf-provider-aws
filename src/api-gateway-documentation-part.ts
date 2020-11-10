// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayDocumentationPartConfig extends TerraformMetaArguments {
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

// Resource

export class ApiGatewayDocumentationPart extends TerraformResource {

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
      properties: this._properties,
      rest_api_id: this._restApiId,
      location: this._location,
    };
  }
}
