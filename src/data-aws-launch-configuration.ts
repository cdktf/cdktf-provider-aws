// https://www.terraform.io/docs/providers/aws/r/data_aws_launch_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

// Resource

export class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: false, required: false
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // ebs_block_device - computed: true, optional: false, required: false
  public ebsBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // enable_monitoring - computed: true, optional: false, required: false
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }

  // ephemeral_block_device - computed: true, optional: false, required: false
  public ephemeralBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // placement_tenancy - computed: true, optional: false, required: false
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }

  // root_block_device - computed: true, optional: false, required: false
  public rootBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // vpc_classic_link_id - computed: true, optional: false, required: false
  public get vpcClassicLinkId() {
    return this.getStringAttribute('vpc_classic_link_id');
  }

  // vpc_classic_link_security_groups - computed: true, optional: false, required: false
  public get vpcClassicLinkSecurityGroups() {
    return this.getListAttribute('vpc_classic_link_security_groups');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
