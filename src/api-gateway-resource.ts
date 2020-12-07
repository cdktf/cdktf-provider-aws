// https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
  readonly parentId: string;
  readonly pathPart: string;
  readonly restApiId: string;
}

// Resource

export class ApiGatewayResource extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_resource',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parentId = config.parentId;
    this._pathPart = config.pathPart;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId: string;
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_part - computed: false, optional: false, required: true
  private _pathPart: string;
  public get pathPart() {
    return this.getStringAttribute('path_part');
  }
  public set pathPart(value: string) {
    this._pathPart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPartInput() {
    return this._pathPart
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_id: cdktf.stringToTerraform(this._parentId),
      path_part: cdktf.stringToTerraform(this._pathPart),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
