/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsStoragegatewayLocalDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}
  */
  readonly diskNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk aws_storagegateway_local_disk}
*/
export class DataAwsStoragegatewayLocalDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_storagegateway_local_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsStoragegatewayLocalDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsStoragegatewayLocalDisk to import
  * @param importFromId The id of the existing DataAwsStoragegatewayLocalDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsStoragegatewayLocalDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_storagegateway_local_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/storagegateway_local_disk aws_storagegateway_local_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsStoragegatewayLocalDiskConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsStoragegatewayLocalDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_local_disk',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.59.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskNode = config.diskNode;
    this._diskPath = config.diskPath;
    this._gatewayArn = config.gatewayArn;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_node: cdktf.stringToTerraform(this._diskNode),
      disk_path: cdktf.stringToTerraform(this._diskPath),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_node: {
        value: cdktf.stringToHclTerraform(this._diskNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_path: {
        value: cdktf.stringToHclTerraform(this._diskPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_arn: {
        value: cdktf.stringToHclTerraform(this._gatewayArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
