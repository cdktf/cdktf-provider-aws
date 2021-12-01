// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Storage Gateway
*/
export interface StoragegatewayWorkingStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#disk_id StoragegatewayWorkingStorage#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#gateway_arn StoragegatewayWorkingStorage#gateway_arn}
  */
  readonly gatewayArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage}
*/
export class StoragegatewayWorkingStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_storagegateway_working_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayWorkingStorageConfig
  */
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
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
    };
  }
}
