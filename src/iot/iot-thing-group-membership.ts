// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export interface IotThingGroupMembershipConfig extends cdktf.TerraformMetaArguments {
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
  public static readonly tfResourceType: string = "aws_iot_thing_group_membership";

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
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._overrideDynamicGroup = config.overrideDynamicGroup;
    this._thingGroupName = config.thingGroupName;
    this._thingName = config.thingName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      override_dynamic_group: cdktf.booleanToTerraform(this._overrideDynamicGroup),
      thing_group_name: cdktf.stringToTerraform(this._thingGroupName),
      thing_name: cdktf.stringToTerraform(this._thingName),
    };
  }
}
