// https://www.terraform.io/docs/providers/aws/r/data_aws_storagegateway_local_disk.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "disk_id": {
        "type": "string",
        "computed": true
      },
      "disk_node": {
        "type": "string",
        "optional": true
      },
      "disk_path": {
        "type": "string",
        "optional": true
      },
      "gateway_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
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

export interface DataAwsStoragegatewayLocalDiskConfig extends TerraformMetaArguments {
  readonly diskNode?: string;
  readonly diskPath?: string;
  readonly gatewayArn: string;
}

// Resource

export class DataAwsStoragegatewayLocalDisk extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsStoragegatewayLocalDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_local_disk',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskNode = config.diskNode;
    this._diskPath = config.diskPath;
    this._gatewayArn = config.gatewayArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_id - computed: true, optional: false, required: true
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_node - computed: false, optional: true, required: false
  private _diskNode?: string;
  public get diskNode() {
    return this._diskNode;
  }
  public set diskNode(value: string | undefined) {
    this._diskNode = value;
  }

  // disk_path - computed: false, optional: true, required: false
  private _diskPath?: string;
  public get diskPath() {
    return this._diskPath;
  }
  public set diskPath(value: string | undefined) {
    this._diskPath = value;
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this._gatewayArn;
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_node: this._diskNode,
      disk_path: this._diskPath,
      gateway_arn: this._gatewayArn,
    };
  }
}
