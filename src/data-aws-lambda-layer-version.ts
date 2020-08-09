// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_layer_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "compatible_runtime": {
        "type": "string",
        "optional": true
      },
      "compatible_runtimes": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "created_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "layer_arn": {
        "type": "string",
        "computed": true
      },
      "layer_name": {
        "type": "string",
        "required": true
      },
      "license_info": {
        "type": "string",
        "computed": true
      },
      "source_code_hash": {
        "type": "string",
        "computed": true
      },
      "source_code_size": {
        "type": "number",
        "computed": true
      },
      "version": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsLambdaLayerVersionConfig extends TerraformMetaArguments {
  readonly compatibleRuntime?: string;
  readonly layerName: string;
  readonly version?: number;
}

// Resource

export class DataAwsLambdaLayerVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_layer_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compatibleRuntime = config.compatibleRuntime;
    this._layerName = config.layerName;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatible_runtime - computed: false, optional: true, required: false
  private _compatibleRuntime?: string;
  public get compatibleRuntime() {
    return this._compatibleRuntime;
  }
  public set compatibleRuntime(value: string | undefined) {
    this._compatibleRuntime = value;
  }

  // compatible_runtimes - computed: true, optional: false, required: true
  public get compatibleRuntimes() {
    return this.getListAttribute('compatible_runtimes');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // layer_arn - computed: true, optional: false, required: true
  public get layerArn() {
    return this.getStringAttribute('layer_arn');
  }

  // layer_name - computed: false, optional: false, required: true
  private _layerName: string;
  public get layerName() {
    return this._layerName;
  }
  public set layerName(value: string) {
    this._layerName = value;
  }

  // license_info - computed: true, optional: false, required: true
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }

  // source_code_hash - computed: true, optional: false, required: true
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }

  // source_code_size - computed: true, optional: false, required: true
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this._version ?? this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compatible_runtime: this._compatibleRuntime,
      layer_name: this._layerName,
      version: this._version,
    };
  }
}
