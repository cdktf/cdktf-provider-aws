// https://www.terraform.io/docs/providers/aws/r/data_aws_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsInstanceConfig extends TerraformMetaArguments {
  readonly fetchPasswordData?: boolean;
  readonly fetchUserData?: boolean;
  readonly instanceId?: string;
  readonly instanceTags?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsInstanceFilter[];
}
export class DataAwsInstanceCreditSpecification extends ComplexComputedList {

  // cpu_credits - computed: true, optional: false, required: true
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
}
export class DataAwsInstanceEbsBlockDevice extends ComplexComputedList {

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

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: true
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
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
export class DataAwsInstanceEphemeralBlockDevice extends ComplexComputedList {

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // no_device - computed: true, optional: false, required: true
  public get noDevice() {
    return this.getBooleanAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: true
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsInstanceMetadataOptions extends ComplexComputedList {

  // http_endpoint - computed: true, optional: false, required: true
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: true
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: true
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
}
export class DataAwsInstanceRootBlockDevice extends ComplexComputedList {

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

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
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
export interface DataAwsInstanceFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._getPasswordData = config.fetchPasswordData;
    this._getUserData = config.fetchUserData;
    this._instanceId = config.instanceId;
    this._instanceTags = config.instanceTags;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami - computed: true, optional: false, required: true
  public get ami() {
    return this.getStringAttribute('ami');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: false, required: true
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // credit_specification - computed: true, optional: false, required: true
  public creditSpecification(index: string) {
    return new DataAwsInstanceCreditSpecification(this, 'credit_specification', index);
  }

  // disable_api_termination - computed: true, optional: false, required: true
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }

  // ebs_block_device - computed: true, optional: false, required: true
  public ebsBlockDevice(index: string) {
    return new DataAwsInstanceEbsBlockDevice(this, 'ebs_block_device', index);
  }

  // ebs_optimized - computed: true, optional: false, required: true
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // ephemeral_block_device - computed: true, optional: false, required: true
  public ephemeralBlockDevice(index: string) {
    return new DataAwsInstanceEphemeralBlockDevice(this, 'ephemeral_block_device', index);
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean;
  public get fetchPasswordData() {
    return this._getPasswordData;
  }
  public set fetchPasswordData(value: boolean | undefined) {
    this._getPasswordData = value;
  }

  // get_user_data - computed: false, optional: true, required: false
  private _getUserData?: boolean;
  public get fetchUserData() {
    return this._getUserData;
  }
  public set fetchUserData(value: boolean | undefined) {
    this._getUserData = value;
  }

  // host_id - computed: true, optional: false, required: true
  public get hostId() {
    return this.getStringAttribute('host_id');
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // instance_state - computed: true, optional: false, required: true
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_tags - computed: true, optional: true, required: false
  private _instanceTags?: { [key: string]: string }
  public get instanceTags(): { [key: string]: string } | undefined {
    return this._instanceTags; // Getting the computed value is not yet implemented
  }
  public set instanceTags(value: { [key: string]: string } | undefined) {
    this._instanceTags = value;
  }

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_name - computed: true, optional: false, required: true
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // metadata_options - computed: true, optional: false, required: true
  public metadataOptions(index: string) {
    return new DataAwsInstanceMetadataOptions(this, 'metadata_options', index);
  }

  // monitoring - computed: true, optional: false, required: true
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // outpost_arn - computed: true, optional: false, required: true
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // password_data - computed: true, optional: false, required: true
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // placement_group - computed: true, optional: false, required: true
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // private_dns - computed: true, optional: false, required: true
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns - computed: true, optional: false, required: true
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // root_block_device - computed: true, optional: false, required: true
  public rootBlockDevice(index: string) {
    return new DataAwsInstanceRootBlockDevice(this, 'root_block_device', index);
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // source_dest_check - computed: true, optional: false, required: true
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tenancy - computed: true, optional: false, required: true
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // user_data - computed: true, optional: false, required: true
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // user_data_base64 - computed: true, optional: false, required: true
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: true
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInstanceFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsInstanceFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      get_password_data: this._getPasswordData,
      get_user_data: this._getUserData,
      instance_id: this._instanceId,
      instance_tags: this._instanceTags,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
