/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppstreamFleetStackAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association#fleet_name AppstreamFleetStackAssociation#fleet_name}
  */
  readonly fleetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association#id AppstreamFleetStackAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association#stack_name AppstreamFleetStackAssociation#stack_name}
  */
  readonly stackName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association aws_appstream_fleet_stack_association}
*/
export class AppstreamFleetStackAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appstream_fleet_stack_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppstreamFleetStackAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppstreamFleetStackAssociation to import
  * @param importFromId The id of the existing AppstreamFleetStackAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppstreamFleetStackAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appstream_fleet_stack_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/appstream_fleet_stack_association aws_appstream_fleet_stack_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamFleetStackAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamFleetStackAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_fleet_stack_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.96.0',
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
    this._fleetName = config.fleetName;
    this._id = config.id;
    this._stackName = config.stackName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fleet_name - computed: false, optional: false, required: true
  private _fleetName?: string; 
  public get fleetName() {
    return this.getStringAttribute('fleet_name');
  }
  public set fleetName(value: string) {
    this._fleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetNameInput() {
    return this._fleetName;
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

  // stack_name - computed: false, optional: false, required: true
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_name: cdktf.stringToTerraform(this._fleetName),
      id: cdktf.stringToTerraform(this._id),
      stack_name: cdktf.stringToTerraform(this._stackName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_name: {
        value: cdktf.stringToHclTerraform(this._fleetName),
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
      stack_name: {
        value: cdktf.stringToHclTerraform(this._stackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
