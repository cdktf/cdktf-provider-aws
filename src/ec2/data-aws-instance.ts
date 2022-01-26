// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#get_password_data DataAwsInstance#get_password_data}
  */
  readonly fetchPasswordData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#get_user_data DataAwsInstance#get_user_data}
  */
  readonly fetchUserData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#instance_id DataAwsInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#instance_tags DataAwsInstance#instance_tags}
  */
  readonly instanceTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#tags DataAwsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#filter DataAwsInstance#filter}
  */
  readonly filter?: DataAwsInstanceFilter[] | cdktf.IResolvable;
}
export class DataAwsInstanceCreditSpecification extends cdktf.ComplexComputedList {

  // cpu_credits - computed: true, optional: false, required: false
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
}
export class DataAwsInstanceEbsBlockDevice extends cdktf.ComplexComputedList {

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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
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
export class DataAwsInstanceEnclaveOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAwsInstanceEphemeralBlockDevice extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getBooleanAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}
export class DataAwsInstanceMetadataOptions extends cdktf.ComplexComputedList {

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

  // instance_metadata_tags - computed: true, optional: false, required: false
  public get instanceMetadataTags() {
    return this.getStringAttribute('instance_metadata_tags');
  }
}
export class DataAwsInstanceRootBlockDevice extends cdktf.ComplexComputedList {

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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
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
export interface DataAwsInstanceFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#name DataAwsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance#values DataAwsInstance#values}
  */
  readonly values: string[];
}

export function dataAwsInstanceFilterToTerraform(struct?: DataAwsInstanceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instance aws_instance}
*/
export class DataAwsInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instance aws_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsInstanceConfig = {}
  */
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

  // ami - computed: true, optional: false, required: false
  public get ami() {
    return this.getStringAttribute('ami');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: true, optional: false, required: false
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // credit_specification - computed: true, optional: false, required: false
  public creditSpecification(index: string) {
    return new DataAwsInstanceCreditSpecification(this, 'credit_specification', index, false);
  }

  // disable_api_termination - computed: true, optional: false, required: false
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }

  // ebs_block_device - computed: true, optional: false, required: false
  public ebsBlockDevice(index: string) {
    return new DataAwsInstanceEbsBlockDevice(this, 'ebs_block_device', index, true);
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // enclave_options - computed: true, optional: false, required: false
  public enclaveOptions(index: string) {
    return new DataAwsInstanceEnclaveOptions(this, 'enclave_options', index, false);
  }

  // ephemeral_block_device - computed: true, optional: false, required: false
  public ephemeralBlockDevice(index: string) {
    return new DataAwsInstanceEphemeralBlockDevice(this, 'ephemeral_block_device', index, false);
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean | cdktf.IResolvable; 
  public get fetchPasswordData() {
    return this.getBooleanAttribute('get_password_data');
  }
  public set fetchPasswordData(value: boolean | cdktf.IResolvable) {
    this._getPasswordData = value;
  }
  public resetFetchPasswordData() {
    this._getPasswordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchPasswordDataInput() {
    return this._getPasswordData;
  }

  // get_user_data - computed: false, optional: true, required: false
  private _getUserData?: boolean | cdktf.IResolvable; 
  public get fetchUserData() {
    return this.getBooleanAttribute('get_user_data');
  }
  public set fetchUserData(value: boolean | cdktf.IResolvable) {
    this._getUserData = value;
  }
  public resetFetchUserData() {
    this._getUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchUserDataInput() {
    return this._getUserData;
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_tags - computed: true, optional: true, required: false
  private _instanceTags?: { [key: string]: string }; 
  public get instanceTags() {
    return this.getStringMapAttribute('instance_tags');
  }
  public set instanceTags(value: { [key: string]: string }) {
    this._instanceTags = value;
  }
  public resetInstanceTags() {
    this._instanceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTagsInput() {
    return this._instanceTags;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // metadata_options - computed: true, optional: false, required: false
  public metadataOptions(index: string) {
    return new DataAwsInstanceMetadataOptions(this, 'metadata_options', index, false);
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // password_data - computed: true, optional: false, required: false
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // placement_group - computed: true, optional: false, required: false
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // placement_partition_number - computed: true, optional: false, required: false
  public get placementPartitionNumber() {
    return this.getNumberAttribute('placement_partition_number');
  }

  // private_dns - computed: true, optional: false, required: false
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns - computed: true, optional: false, required: false
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // root_block_device - computed: true, optional: false, required: false
  public rootBlockDevice(index: string) {
    return new DataAwsInstanceRootBlockDevice(this, 'root_block_device', index, true);
  }

  // secondary_private_ips - computed: true, optional: false, required: false
  public get secondaryPrivateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_private_ips'));
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // source_dest_check - computed: true, optional: false, required: false
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // user_data_base64 - computed: true, optional: false, required: false
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInstanceFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsInstanceFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
      get_user_data: cdktf.booleanToTerraform(this._getUserData),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._instanceTags),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsInstanceFilterToTerraform)(this._filter),
    };
  }
}
