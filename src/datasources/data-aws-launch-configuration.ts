// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Sources
*/
export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html#name DataAwsLaunchConfiguration#name}
  */
  readonly name: string;
}
export class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination') as any;
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getBooleanAttribute('no_device') as any;
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getBooleanAttribute('throughput') as any;
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
export class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: false
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: false
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
}
export class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination') as any;
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getBooleanAttribute('throughput') as any;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}
*/
export class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_launch_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLaunchConfigurationConfig
  */
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
    return this.getBooleanAttribute('associate_public_ip_address') as any;
  }

  // ebs_block_device - computed: true, optional: false, required: false
  public ebsBlockDevice(index: string) {
    return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized') as any;
  }

  // enable_monitoring - computed: true, optional: false, required: false
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring') as any;
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

  // metadata_options - computed: true, optional: false, required: false
  public metadataOptions(index: string) {
    return new DataAwsLaunchConfigurationMetadataOptions(this, 'metadata_options', index);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
