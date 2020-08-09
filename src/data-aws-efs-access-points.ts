// https://www.terraform.io/docs/providers/aws/r/data_aws_efs_access_points.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arns": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "file_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "set",
          "string"
        ],
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

export interface DataAwsEfsAccessPointsConfig extends TerraformMetaArguments {
  readonly fileSystemId: string;
}

// Resource

export class DataAwsEfsAccessPoints extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_access_points',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: true
  public get arns() {
    return this.getListAttribute('arns');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: this._fileSystemId,
    };
  }
}
