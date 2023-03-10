// https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#id IotThingGroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#override_dynamic_group IotThingGroupMembership#override_dynamic_group}
  */
  readonly overrideDynamicGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_group_name IotThingGroupMembership#thing_group_name}
  */
  readonly thingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_name IotThingGroupMembership#thing_name}
  */
  readonly thingName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership aws_iot_thing_group_membership}
*/
export class IotThingGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_thing_group_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership aws_iot_thing_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotThingGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: IotThingGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._overrideDynamicGroup = config.overrideDynamicGroup;
    this._thingGroupName = config.thingGroupName;
    this._thingName = config.thingName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // override_dynamic_group - computed: false, optional: true, required: false
  private _overrideDynamicGroup?: boolean | cdktf.IResolvable; 
  public get overrideDynamicGroup() {
    return this.getBooleanAttribute('override_dynamic_group');
  }
  public set overrideDynamicGroup(value: boolean | cdktf.IResolvable) {
    this._overrideDynamicGroup = value;
  }
  public resetOverrideDynamicGroup() {
    this._overrideDynamicGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDynamicGroupInput() {
    return this._overrideDynamicGroup;
  }

  // thing_group_name - computed: false, optional: false, required: true
  private _thingGroupName?: string; 
  public get thingGroupName() {
    return this.getStringAttribute('thing_group_name');
  }
  public set thingGroupName(value: string) {
    this._thingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupNameInput() {
    return this._thingGroupName;
  }

  // thing_name - computed: false, optional: false, required: true
  private _thingName?: string; 
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }
  public set thingName(value: string) {
    this._thingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingNameInput() {
    return this._thingName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      override_dynamic_group: cdktf.booleanToTerraform(this._overrideDynamicGroup),
      thing_group_name: cdktf.stringToTerraform(this._thingGroupName),
      thing_name: cdktf.stringToTerraform(this._thingName),
    };
  }
}
