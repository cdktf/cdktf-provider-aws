// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#properties ApiGatewayDocumentationPart#properties}
  */
  readonly properties: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#rest_api_id ApiGatewayDocumentationPart#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#location ApiGatewayDocumentationPart#location}
  */
  readonly location: ApiGatewayDocumentationPartLocation[];
}
export interface ApiGatewayDocumentationPartLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#method ApiGatewayDocumentationPart#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#name ApiGatewayDocumentationPart#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#path ApiGatewayDocumentationPart#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#status_code ApiGatewayDocumentationPart#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#type ApiGatewayDocumentationPart#type}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part}
*/
export class ApiGatewayDocumentationPart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_documentation_part";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDocumentationPartConfig
  */
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
