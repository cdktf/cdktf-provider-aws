/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkmanagerDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices#global_network_id DataAwsNetworkmanagerDevices#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices#id DataAwsNetworkmanagerDevices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices#site_id DataAwsNetworkmanagerDevices#site_id}
  */
  readonly siteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices#tags DataAwsNetworkmanagerDevices#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices aws_networkmanager_devices}
*/
export class DataAwsNetworkmanagerDevices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsNetworkmanagerDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerDevices to import
  * @param importFromId The id of the existing DataAwsNetworkmanagerDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/networkmanager_devices aws_networkmanager_devices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkmanagerDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_devices',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalNetworkId = config.globalNetworkId;
    this._id = config.id;
    this._siteId = config.siteId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_network_id - computed: false, optional: false, required: true
  private _globalNetworkId?: string; 
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
  }
  public set globalNetworkId(value: string) {
    this._globalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkIdInput() {
    return this._globalNetworkId;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_network_id: {
        value: cdktf.stringToHclTerraform(this._globalNetworkId),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
