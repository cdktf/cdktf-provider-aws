// https://www.terraform.io/docs/providers/aws/r/api_gateway_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource#id ApiGatewayResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource#parent_id ApiGatewayResource#parent_id}
  */
  readonly parentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource#path_part ApiGatewayResource#path_part}
  */
  readonly pathPart: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource#rest_api_id ApiGatewayResource#rest_api_id}
  */
  readonly restApiId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource aws_api_gateway_resource}
*/
export class ApiGatewayResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource aws_api_gateway_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_resource',
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
    this._id = config.id;
    this._parentId = config.parentId;
    this._pathPart = config.pathPart;
    this._restApiId = config.restApiId;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_part - computed: false, optional: false, required: true
  private _pathPart?: string; 
  public get pathPart() {
    return this.getStringAttribute('path_part');
  }
  public set pathPart(value: string) {
    this._pathPart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPartInput() {
    return this._pathPart;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.stringToTerraform(this._parentId),
      path_part: cdktf.stringToTerraform(this._pathPart),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
