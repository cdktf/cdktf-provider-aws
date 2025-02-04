/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2AvailabilityZoneGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group#group_name Ec2AvailabilityZoneGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group#id Ec2AvailabilityZoneGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}
  */
  readonly optInStatus: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group aws_ec2_availability_zone_group}
*/
export class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_availability_zone_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2AvailabilityZoneGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2AvailabilityZoneGroup to import
  * @param importFromId The id of the existing Ec2AvailabilityZoneGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2AvailabilityZoneGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_availability_zone_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/ec2_availability_zone_group aws_ec2_availability_zone_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2AvailabilityZoneGroupConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_availability_zone_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._optInStatus = config.optInStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // opt_in_status - computed: false, optional: false, required: true
  private _optInStatus?: string; 
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      opt_in_status: cdktf.stringToTerraform(this._optInStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      opt_in_status: {
        value: cdktf.stringToHclTerraform(this._optInStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
