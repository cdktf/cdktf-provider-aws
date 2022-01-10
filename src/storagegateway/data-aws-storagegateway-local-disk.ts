// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Storage Gateway
*/
export interface DataAwsStoragegatewayLocalDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}
  */
  readonly diskNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}
  */
  readonly gatewayArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk aws_storagegateway_local_disk}
*/
export class DataAwsStoragegatewayLocalDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_storagegateway_local_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk aws_storagegateway_local_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsStoragegatewayLocalDiskConfig
  */
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

  // disk_node - computed: true, optional: true, required: false
  private _diskNode?: string; 
  public get diskNode() {
    return this.getStringAttribute('disk_node');
  }
  public set diskNode(value: string) {
    this._diskNode = value;
  }
  public resetDiskNode() {
    this._diskNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNodeInput() {
    return this._diskNode;
  }

  // disk_path - computed: true, optional: true, required: false
  private _diskPath?: string; 
  public get diskPath() {
    return this.getStringAttribute('disk_path');
  }
  public set diskPath(value: string) {
    this._diskPath = value;
  }
  public resetDiskPath() {
    this._diskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPathInput() {
    return this._diskPath;
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
      disk_node: cdktf.stringToTerraform(this._diskNode),
      disk_path: cdktf.stringToTerraform(this._diskPath),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
    };
  }
}
