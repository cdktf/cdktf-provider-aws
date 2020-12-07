// https://www.terraform.io/docs/providers/aws/r/data_aws_storagegateway_local_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsStoragegatewayLocalDiskConfig extends cdktf.TerraformMetaArguments {
  readonly diskNode?: string;
  readonly diskPath?: string;
  readonly gatewayArn: string;
}

// Resource

export class DataAwsStoragegatewayLocalDisk extends cdktf.TerraformDataSource {

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

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_node - computed: false, optional: true, required: false
  private _diskNode?: string;
  public get diskNode() {
    return this.getStringAttribute('disk_node');
  }
  public set diskNode(value: string ) {
    this._diskNode = value;
  }
  public resetDiskNode() {
    this._diskNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNodeInput() {
    return this._diskNode
  }

  // disk_path - computed: false, optional: true, required: false
  private _diskPath?: string;
  public get diskPath() {
    return this.getStringAttribute('disk_path');
  }
  public set diskPath(value: string ) {
    this._diskPath = value;
  }
  public resetDiskPath() {
    this._diskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPathInput() {
    return this._diskPath
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn
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
      disk_node: cdktf.stringToTerraform(this._diskNode),
      disk_path: cdktf.stringToTerraform(this._diskPath),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
    };
  }
}
