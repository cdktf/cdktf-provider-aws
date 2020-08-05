// https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "disk_id": {
        "type": "string",
        "required": true
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewayWorkingStorageConfig extends TerraformMetaArguments {
  readonly diskId: string;
  readonly gatewayArn: string;
}

// Resource

export class StoragegatewayWorkingStorage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayWorkingStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_working_storage',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskId = config.diskId;
    this._gatewayArn = config.gatewayArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_id - computed: false, optional: false, required: true
  private _diskId: string;
  public get diskId() {
    return this._diskId;
  }
  public set diskId(value: string) {
    this._diskId = value;
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
      disk_id: this._diskId,
      gateway_arn: this._gatewayArn,
    };
  }
}
