// https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "group_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "opt_in_status": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2AvailabilityZoneGroupConfig extends TerraformMetaArguments {
  readonly groupName: string;
  readonly optInStatus: string;
}

// Resource

export class Ec2AvailabilityZoneGroup extends TerraformResource {

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
    return this._groupName;
  }
  public set groupName(value: string) {
    this._groupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // opt_in_status - computed: false, optional: false, required: true
  private _optInStatus: string;
  public get optInStatus() {
    return this._optInStatus;
  }
  public set optInStatus(value: string) {
    this._optInStatus = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: this._groupName,
      opt_in_status: this._optInStatus,
    };
  }
}
