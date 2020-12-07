// https://www.terraform.io/docs/providers/aws/r/data_aws_api_gateway_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
  readonly path: string;
  readonly restApiId: string;
}

// Resource

export class DataAwsApiGatewayResource extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayResourceConfig) {
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
    this._path = config.path;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // path_part - computed: true, optional: false, required: false
  public get pathPart() {
    return this.getStringAttribute('path_part');
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
      path: cdktf.stringToTerraform(this._path),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
