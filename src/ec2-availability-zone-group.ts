// https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2AvailabilityZoneGroupConfig extends cdktf.TerraformMetaArguments {
  readonly groupName: string;
  readonly optInStatus: string;
}

// Resource

export class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_availability_zone_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupName = config.groupName;
    this._optInStatus = config.optInStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // opt_in_status - computed: false, optional: false, required: true
  private _optInStatus: string;
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInStatusInput() {
    return this._optInStatus
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      opt_in_status: cdktf.stringToTerraform(this._optInStatus),
    };
  }
}
