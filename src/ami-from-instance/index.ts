// https://www.terraform.io/docs/providers/aws/r/ami_from_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}
  */
  readonly deprecationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#description AmiFromInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#id AmiFromInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#name AmiFromInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}
  */
  readonly snapshotWithoutReboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}
  */
  readonly sourceInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags AmiFromInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags_all AmiFromInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ebs_block_device AmiFromInstance#ebs_block_device}
  */
  readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#timeouts AmiFromInstance#timeouts}
  */
  readonly timeouts?: AmiFromInstanceTimeouts;
}
export interface AmiFromInstanceEbsBlockDevice {
}

export function amiFromInstanceEbsBlockDeviceToTerraform(struct?: AmiFromInstanceEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AmiFromInstanceEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AmiFromInstanceEbsBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmiFromInstanceEbsBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

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

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
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

export class AmiFromInstanceEbsBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): AmiFromInstanceEbsBlockDeviceOutputReference {
    return new AmiFromInstanceEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmiFromInstanceEphemeralBlockDevice {
}

export function amiFromInstanceEphemeralBlockDeviceToTerraform(struct?: AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AmiFromInstanceEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export class AmiFromInstanceEphemeralBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): AmiFromInstanceEphemeralBlockDeviceOutputReference {
    return new AmiFromInstanceEphemeralBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmiFromInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#create AmiFromInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#delete AmiFromInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#update AmiFromInstance#update}
  */
  readonly update?: string;
}

export function amiFromInstanceTimeoutsToTerraform(struct?: AmiFromInstanceTimeoutsOutputReference | AmiFromInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AmiFromInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmiFromInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmiFromInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance aws_ami_from_instance}
*/
export class AmiFromInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ami_from_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance aws_ami_from_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmiFromInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AmiFromInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_from_instance',
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
    this._deprecationTime = config.deprecationTime;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._snapshotWithoutReboot = config.snapshotWithoutReboot;
    this._sourceInstanceId = config.sourceInstanceId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ebsBlockDevice.internalValue = config.ebsBlockDevice;
    this._ephemeralBlockDevice.internalValue = config.ephemeralBlockDevice;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // boot_mode - computed: true, optional: false, required: false
  public get bootMode() {
    return this.getStringAttribute('boot_mode');
  }

  // deprecation_time - computed: false, optional: true, required: false
  private _deprecationTime?: string; 
  public get deprecationTime() {
    return this.getStringAttribute('deprecation_time');
  }
  public set deprecationTime(value: string) {
    this._deprecationTime = value;
  }
  public resetDeprecationTime() {
    this._deprecationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecationTimeInput() {
    return this._deprecationTime;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
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

  // image_location - computed: true, optional: false, required: false
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // image_owner_alias - computed: true, optional: false, required: false
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // imds_support - computed: true, optional: false, required: false
  public get imdsSupport() {
    return this.getStringAttribute('imds_support');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // manage_ebs_snapshots - computed: true, optional: false, required: false
  public get manageEbsSnapshots() {
    return this.getBooleanAttribute('manage_ebs_snapshots');
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_details - computed: true, optional: false, required: false
  public get platformDetails() {
    return this.getStringAttribute('platform_details');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // root_device_name - computed: true, optional: false, required: false
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }

  // root_snapshot_id - computed: true, optional: false, required: false
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // snapshot_without_reboot - computed: false, optional: true, required: false
  private _snapshotWithoutReboot?: boolean | cdktf.IResolvable; 
  public get snapshotWithoutReboot() {
    return this.getBooleanAttribute('snapshot_without_reboot');
  }
  public set snapshotWithoutReboot(value: boolean | cdktf.IResolvable) {
    this._snapshotWithoutReboot = value;
  }
  public resetSnapshotWithoutReboot() {
    this._snapshotWithoutReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWithoutRebootInput() {
    return this._snapshotWithoutReboot;
  }

  // source_instance_id - computed: false, optional: false, required: true
  private _sourceInstanceId?: string; 
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }
  public set sourceInstanceId(value: string) {
    this._sourceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdInput() {
    return this._sourceInstanceId;
  }

  // sriov_net_support - computed: true, optional: false, required: false
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
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

  // tpm_support - computed: true, optional: false, required: false
  public get tpmSupport() {
    return this.getStringAttribute('tpm_support');
  }

  // usage_operation - computed: true, optional: false, required: false
  public get usageOperation() {
    return this.getStringAttribute('usage_operation');
  }

  // virtualization_type - computed: true, optional: false, required: false
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice = new AmiFromInstanceEbsBlockDeviceList(this, "ebs_block_device", true);
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public putEbsBlockDevice(value: AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable) {
    this._ebsBlockDevice.internalValue = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice.internalValue;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice = new AmiFromInstanceEphemeralBlockDeviceList(this, "ephemeral_block_device", true);
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public putEphemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable) {
    this._ephemeralBlockDevice.internalValue = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AmiFromInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AmiFromInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deprecation_time: cdktf.stringToTerraform(this._deprecationTime),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snapshot_without_reboot: cdktf.booleanToTerraform(this._snapshotWithoutReboot),
      source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      ebs_block_device: cdktf.listMapper(amiFromInstanceEbsBlockDeviceToTerraform, true)(this._ebsBlockDevice.internalValue),
      ephemeral_block_device: cdktf.listMapper(amiFromInstanceEphemeralBlockDeviceToTerraform, true)(this._ephemeralBlockDevice.internalValue),
      timeouts: amiFromInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
