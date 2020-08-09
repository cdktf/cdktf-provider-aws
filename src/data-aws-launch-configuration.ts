// https://www.terraform.io/docs/providers/aws/r/data_aws_launch_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "associate_public_ip_address": {
        "type": "bool",
        "computed": true
      },
      "ebs_block_device": {
        "type": [
          "set",
          [
            "object",
            {
              "delete_on_termination": "bool",
              "device_name": "string",
              "encrypted": "bool",
              "iops": "number",
              "snapshot_id": "string",
              "volume_size": "number",
              "volume_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "ebs_optimized": {
        "type": "bool",
        "computed": true
      },
      "enable_monitoring": {
        "type": "bool",
        "computed": true
      },
      "ephemeral_block_device": {
        "type": [
          "set",
          [
            "object",
            {
              "device_name": "string",
              "virtual_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "iam_instance_profile": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_id": {
        "type": "string",
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "computed": true
      },
      "key_name": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "placement_tenancy": {
        "type": "string",
        "computed": true
      },
      "root_block_device": {
        "type": [
          "list",
          [
            "object",
            {
              "delete_on_termination": "bool",
              "encrypted": "bool",
              "iops": "number",
              "volume_size": "number",
              "volume_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "spot_price": {
        "type": "string",
        "computed": true
      },
      "user_data": {
        "type": "string",
        "computed": true
      },
      "vpc_classic_link_id": {
        "type": "string",
        "computed": true
      },
      "vpc_classic_link_security_groups": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsLaunchConfigurationConfig extends TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsLaunchConfigurationEbsBlockDevice extends ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: true
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsLaunchConfigurationEphemeralBlockDevice extends ComplexComputedList {

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // virtual_name - computed: true, optional: false, required: true
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsLaunchConfigurationRootBlockDevice extends ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: true
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // volume_size - computed: true, optional: false, required: true
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

// Resource

export class DataAwsLaunchConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLaunchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: false, required: true
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // ebs_block_device - computed: true, optional: false, required: true
  public ebsBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
  }

  // ebs_optimized - computed: true, optional: false, required: true
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // enable_monitoring - computed: true, optional: false, required: true
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }

  // ephemeral_block_device - computed: true, optional: false, required: true
  public ephemeralBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
  }

  // iam_instance_profile - computed: true, optional: false, required: true
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_name - computed: true, optional: false, required: true
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // placement_tenancy - computed: true, optional: false, required: true
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }

  // root_block_device - computed: true, optional: false, required: true
  public rootBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // spot_price - computed: true, optional: false, required: true
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // user_data - computed: true, optional: false, required: true
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vpc_classic_link_id - computed: true, optional: false, required: true
  public get vpcClassicLinkId() {
    return this.getStringAttribute('vpc_classic_link_id');
  }

  // vpc_classic_link_security_groups - computed: true, optional: false, required: true
  public get vpcClassicLinkSecurityGroups() {
    return this.getListAttribute('vpc_classic_link_security_groups');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
