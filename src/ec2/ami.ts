// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface AmiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}
  */
  readonly bootMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}
  */
  readonly enaSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}
  */
  readonly imageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}
  */
  readonly ramdiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}
  */
  readonly rootDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}
  */
  readonly sriovNetSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}
  */
  readonly virtualizationType?: string;
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ebs_block_device Ami#ebs_block_device}
  */
  readonly ebsBlockDevice?: AmiEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ephemeral_block_device Ami#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#timeouts Ami#timeouts}
  */
  readonly timeouts?: AmiTimeouts;
}
export interface AmiEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete_on_termination Ami#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#encrypted Ami#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#iops Ami#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#outpost_arn Ami#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#snapshot_id Ami#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#throughput Ami#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_size Ami#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_type Ami#volume_type}
  */
  readonly volumeType?: string;
}

export function amiEbsBlockDeviceToTerraform(struct?: AmiEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    outpost_arn: cdktf.stringToTerraform(struct!.outpostArn),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface AmiEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtual_name Ami#virtual_name}
  */
  readonly virtualName: string;
}

export function amiEphemeralBlockDeviceToTerraform(struct?: AmiEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface AmiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}
  */
  readonly update?: string;
}

export function amiTimeoutsToTerraform(struct?: AmiTimeoutsOutputReference | AmiTimeouts | cdktf.IResolvable): any {
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

export class AmiTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AmiTimeouts | undefined {
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

  public set internalValue(value: AmiTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami aws_ami}
*/
export class Ami extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ami";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami aws_ami} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmiConfig
  */
  public constructor(scope: Construct, id: string, config: AmiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._architecture = config.architecture;
    this._bootMode = config.bootMode;
    this._description = config.description;
    this._enaSupport = config.enaSupport;
    this._imageLocation = config.imageLocation;
    this._kernelId = config.kernelId;
    this._name = config.name;
    this._ramdiskId = config.ramdiskId;
    this._rootDeviceName = config.rootDeviceName;
    this._sriovNetSupport = config.sriovNetSupport;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualizationType = config.virtualizationType;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // boot_mode - computed: false, optional: true, required: false
  private _bootMode?: string; 
  public get bootMode() {
    return this.getStringAttribute('boot_mode');
  }
  public set bootMode(value: string) {
    this._bootMode = value;
  }
  public resetBootMode() {
    this._bootMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootModeInput() {
    return this._bootMode;
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

  // ena_support - computed: false, optional: true, required: false
  private _enaSupport?: boolean | cdktf.IResolvable; 
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }
  public set enaSupport(value: boolean | cdktf.IResolvable) {
    this._enaSupport = value;
  }
  public resetEnaSupport() {
    this._enaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSupportInput() {
    return this._enaSupport;
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_location - computed: true, optional: true, required: false
  private _imageLocation?: string; 
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }
  public set imageLocation(value: string) {
    this._imageLocation = value;
  }
  public resetImageLocation() {
    this._imageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLocationInput() {
    return this._imageLocation;
  }

  // image_owner_alias - computed: true, optional: false, required: false
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string; 
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId;
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

  // ramdisk_id - computed: false, optional: true, required: false
  private _ramdiskId?: string; 
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }
  public set ramdiskId(value: string) {
    this._ramdiskId = value;
  }
  public resetRamdiskId() {
    this._ramdiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramdiskIdInput() {
    return this._ramdiskId;
  }

  // root_device_name - computed: false, optional: true, required: false
  private _rootDeviceName?: string; 
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }
  public set rootDeviceName(value: string) {
    this._rootDeviceName = value;
  }
  public resetRootDeviceName() {
    this._rootDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceNameInput() {
    return this._rootDeviceName;
  }

  // root_snapshot_id - computed: true, optional: false, required: false
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // sriov_net_support - computed: false, optional: true, required: false
  private _sriovNetSupport?: string; 
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
  }
  public set sriovNetSupport(value: string) {
    this._sriovNetSupport = value;
  }
  public resetSriovNetSupport() {
    this._sriovNetSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovNetSupportInput() {
    return this._sriovNetSupport;
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

  // usage_operation - computed: true, optional: false, required: false
  public get usageOperation() {
    return this.getStringAttribute('usage_operation');
  }

  // virtualization_type - computed: false, optional: true, required: false
  private _virtualizationType?: string; 
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string) {
    this._virtualizationType = value;
  }
  public resetVirtualizationType() {
    this._virtualizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypeInput() {
    return this._virtualizationType;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiEbsBlockDevice[] | cdktf.IResolvable; 
  public get ebsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ebs_block_device')));
  }
  public set ebsBlockDevice(value: AmiEbsBlockDevice[] | cdktf.IResolvable) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: AmiEphemeralBlockDevice[] | cdktf.IResolvable; 
  public get ephemeralBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ephemeral_block_device')));
  }
  public set ephemeralBlockDevice(value: AmiEphemeralBlockDevice[] | cdktf.IResolvable) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AmiTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AmiTimeouts) {
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
      architecture: cdktf.stringToTerraform(this._architecture),
      boot_mode: cdktf.stringToTerraform(this._bootMode),
      description: cdktf.stringToTerraform(this._description),
      ena_support: cdktf.booleanToTerraform(this._enaSupport),
      image_location: cdktf.stringToTerraform(this._imageLocation),
      kernel_id: cdktf.stringToTerraform(this._kernelId),
      name: cdktf.stringToTerraform(this._name),
      ramdisk_id: cdktf.stringToTerraform(this._ramdiskId),
      root_device_name: cdktf.stringToTerraform(this._rootDeviceName),
      sriov_net_support: cdktf.stringToTerraform(this._sriovNetSupport),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
      ebs_block_device: cdktf.listMapper(amiEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(amiEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      timeouts: amiTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
