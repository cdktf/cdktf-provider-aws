// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EFS
*/
export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#creation_token EfsFileSystem#creation_token}
  */
  readonly creationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}
  */
  readonly performanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
  */
  readonly provisionedThroughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags EfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags_all EfsFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}
  */
  readonly throughputMode?: string;
  /**
  * lifecycle_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#lifecycle_policy EfsFileSystem#lifecycle_policy}
  */
  readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
}
export class EfsFileSystemSizeInBytes extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // value_in_ia - computed: true, optional: false, required: false
  public get valueInIa() {
    return this.getNumberAttribute('value_in_ia');
  }

  // value_in_standard - computed: true, optional: false, required: false
  public get valueInStandard() {
    return this.getNumberAttribute('value_in_standard');
  }
}
export interface EfsFileSystemLifecyclePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}
  */
  readonly transitionToIa?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}
  */
  readonly transitionToPrimaryStorageClass?: string;
}

export function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
    transition_to_primary_storage_class: cdktf.stringToTerraform(struct!.transitionToPrimaryStorageClass),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}
*/
export class EfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_efs_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsFileSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZoneName = config.availabilityZoneName;
    this._creationToken = config.creationToken;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputMode = config.throughputMode;
    this._lifecyclePolicy = config.lifecyclePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // availability_zone_name - computed: true, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // creation_token - computed: true, optional: true, required: false
  private _creationToken?: string; 
  public get creationToken() {
    return this.getStringAttribute('creation_token');
  }
  public set creationToken(value: string) {
    this._creationToken = value;
  }
  public resetCreationToken() {
    this._creationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTokenInput() {
    return this._creationToken;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // number_of_mount_targets - computed: true, optional: false, required: false
  public get numberOfMountTargets() {
    return this.getNumberAttribute('number_of_mount_targets');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // performance_mode - computed: true, optional: true, required: false
  private _performanceMode?: string; 
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string) {
    this._performanceMode = value;
  }
  public resetPerformanceMode() {
    this._performanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceModeInput() {
    return this._performanceMode;
  }

  // provisioned_throughput_in_mibps - computed: false, optional: true, required: false
  private _provisionedThroughputInMibps?: number; 
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }
  public set provisionedThroughputInMibps(value: number) {
    this._provisionedThroughputInMibps = value;
  }
  public resetProvisionedThroughputInMibps() {
    this._provisionedThroughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInMibpsInput() {
    return this._provisionedThroughputInMibps;
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public sizeInBytes(index: string) {
    return new EfsFileSystemSizeInBytes(this, 'size_in_bytes', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy?: EfsFileSystemLifecyclePolicy[]; 
  public get lifecyclePolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle_policy') as any;
  }
  public set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[]) {
    this._lifecyclePolicy = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      creation_token: cdktf.stringToTerraform(this._creationToken),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      performance_mode: cdktf.stringToTerraform(this._performanceMode),
      provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      throughput_mode: cdktf.stringToTerraform(this._throughputMode),
      lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform)(this._lifecyclePolicy),
    };
  }
}
