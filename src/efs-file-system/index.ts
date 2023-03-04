// https://www.terraform.io/docs/providers/aws/r/efs_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}
  */
  readonly creationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}
  */
  readonly performanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
  */
  readonly provisionedThroughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}
  */
  readonly throughputMode?: string;
  /**
  * lifecycle_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}
  */
  readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable;
}
export interface EfsFileSystemSizeInBytes {
}

export function efsFileSystemSizeInBytesToTerraform(struct?: EfsFileSystemSizeInBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class EfsFileSystemSizeInBytesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EfsFileSystemSizeInBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfsFileSystemSizeInBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class EfsFileSystemSizeInBytesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EfsFileSystemSizeInBytesOutputReference {
    return new EfsFileSystemSizeInBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfsFileSystemLifecyclePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}
  */
  readonly transitionToIa?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}
  */
  readonly transitionToPrimaryStorageClass?: string;
}

export function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
    transition_to_primary_storage_class: cdktf.stringToTerraform(struct!.transitionToPrimaryStorageClass),
  }
}

export class EfsFileSystemLifecyclePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EfsFileSystemLifecyclePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitionToIa !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToIa = this._transitionToIa;
    }
    if (this._transitionToPrimaryStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToPrimaryStorageClass = this._transitionToPrimaryStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfsFileSystemLifecyclePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transitionToIa = undefined;
      this._transitionToPrimaryStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transitionToIa = value.transitionToIa;
      this._transitionToPrimaryStorageClass = value.transitionToPrimaryStorageClass;
    }
  }

  // transition_to_ia - computed: false, optional: true, required: false
  private _transitionToIa?: string; 
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }
  public set transitionToIa(value: string) {
    this._transitionToIa = value;
  }
  public resetTransitionToIa() {
    this._transitionToIa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToIaInput() {
    return this._transitionToIa;
  }

  // transition_to_primary_storage_class - computed: false, optional: true, required: false
  private _transitionToPrimaryStorageClass?: string; 
  public get transitionToPrimaryStorageClass() {
    return this.getStringAttribute('transition_to_primary_storage_class');
  }
  public set transitionToPrimaryStorageClass(value: string) {
    this._transitionToPrimaryStorageClass = value;
  }
  public resetTransitionToPrimaryStorageClass() {
    this._transitionToPrimaryStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToPrimaryStorageClassInput() {
    return this._transitionToPrimaryStorageClass;
  }
}

export class EfsFileSystemLifecyclePolicyList extends cdktf.ComplexList {
  public internalValue? : EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EfsFileSystemLifecyclePolicyOutputReference {
    return new EfsFileSystemLifecyclePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system aws_efs_file_system}
*/
export class EfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_efs_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system aws_efs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsFileSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._availabilityZoneName = config.availabilityZoneName;
    this._creationToken = config.creationToken;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputMode = config.throughputMode;
    this._lifecyclePolicy.internalValue = config.lifecyclePolicy;
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
    return this.getBooleanAttribute('encrypted');
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
  private _sizeInBytes = new EfsFileSystemSizeInBytesList(this, "size_in_bytes", false);
  public get sizeInBytes() {
    return this._sizeInBytes;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
  private _lifecyclePolicy = new EfsFileSystemLifecyclePolicyList(this, "lifecycle_policy", false);
  public get lifecyclePolicy() {
    return this._lifecyclePolicy;
  }
  public putLifecyclePolicy(value: EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable) {
    this._lifecyclePolicy.internalValue = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      creation_token: cdktf.stringToTerraform(this._creationToken),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      performance_mode: cdktf.stringToTerraform(this._performanceMode),
      provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      throughput_mode: cdktf.stringToTerraform(this._throughputMode),
      lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform, true)(this._lifecyclePolicy.internalValue),
    };
  }
}
