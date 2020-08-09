// https://www.terraform.io/docs/providers/aws/r/data_aws_api_gateway_resource.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parent_id": {
        "type": "string",
        "computed": true
      },
      "path": {
        "type": "string",
        "required": true
      },
      "path_part": {
        "type": "string",
        "computed": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsApiGatewayResourceConfig extends TerraformMetaArguments {
  readonly path: string;
  readonly restApiId: string;
}

// Resource

export class DataAwsApiGatewayResource extends TerraformDataSource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parent_id - computed: true, optional: false, required: true
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }

  // path_part - computed: true, optional: false, required: true
  public get pathPart() {
    return this.getStringAttribute('path_part');
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      path: this._path,
      rest_api_id: this._restApiId,
    };
  }
}
