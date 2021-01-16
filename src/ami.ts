// https://www.terraform.io/docs/providers/aws/r/ami.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmiConfig extends cdktf.TerraformMetaArguments {
  readonly architecture?: string;
  readonly description?: string;
  readonly enaSupport?: boolean;
  readonly imageLocation?: string;
  readonly kernelId?: string;
  readonly name: string;
  readonly ramdiskId?: string;
  readonly rootDeviceName?: string;
  readonly sriovNetSupport?: string;
  readonly tags?: { [key: string]: string };
  readonly virtualizationType?: string;
  /** ebs_block_device block */
  readonly ebsBlockDevice?: AmiEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
  /** timeouts block */
  readonly timeouts?: AmiTimeouts;
}
export interface AmiEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

function amiEbsBlockDeviceToTerraform(struct?: AmiEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface AmiEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}

function amiEphemeralBlockDeviceToTerraform(struct?: AmiEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface AmiTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function amiTimeoutsToTerraform(struct?: AmiTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Ami extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._enaSupport = config.enaSupport;
    this._imageLocation = config.imageLocation;
    this._kernelId = config.kernelId;
    this._name = config.name;
    this._ramdiskId = config.ramdiskId;
    this._rootDeviceName = config.rootDeviceName;
    this._sriovNetSupport = config.sriovNetSupport;
    this._tags = config.tags;
    this._virtualizationType = config.virtualizationType;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string;
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string ) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // ena_support - computed: false, optional: true, required: false
  private _enaSupport?: boolean;
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }
  public set enaSupport(value: boolean ) {
    this._enaSupport = value;
  }
  public resetEnaSupport() {
    this._enaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSupportInput() {
    return this._enaSupport
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
    return this._imageLocation
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string;
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string ) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId
  }

  // manage_ebs_snapshots - computed: true, optional: false, required: false
  public get manageEbsSnapshots() {
    return this.getBooleanAttribute('manage_ebs_snapshots');
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

  // ramdisk_id - computed: false, optional: true, required: false
  private _ramdiskId?: string;
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }
  public set ramdiskId(value: string ) {
    this._ramdiskId = value;
  }
  public resetRamdiskId() {
    this._ramdiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramdiskIdInput() {
    return this._ramdiskId
  }

  // root_device_name - computed: false, optional: true, required: false
  private _rootDeviceName?: string;
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }
  public set rootDeviceName(value: string ) {
    this._rootDeviceName = value;
  }
  public resetRootDeviceName() {
    this._rootDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceNameInput() {
    return this._rootDeviceName
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
  public set sriovNetSupport(value: string ) {
    this._sriovNetSupport = value;
  }
  public resetSriovNetSupport() {
    this._sriovNetSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovNetSupportInput() {
    return this._sriovNetSupport
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtualization_type - computed: false, optional: true, required: false
  private _virtualizationType?: string;
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string ) {
    this._virtualizationType = value;
  }
  public resetVirtualizationType() {
    this._virtualizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypeInput() {
    return this._virtualizationType
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: AmiEbsBlockDevice[] ) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: AmiEphemeralBlockDevice[] ) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AmiTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AmiTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      description: cdktf.stringToTerraform(this._description),
      ena_support: cdktf.booleanToTerraform(this._enaSupport),
      image_location: cdktf.stringToTerraform(this._imageLocation),
      kernel_id: cdktf.stringToTerraform(this._kernelId),
      name: cdktf.stringToTerraform(this._name),
      ramdisk_id: cdktf.stringToTerraform(this._ramdiskId),
      root_device_name: cdktf.stringToTerraform(this._rootDeviceName),
      sriov_net_support: cdktf.stringToTerraform(this._sriovNetSupport),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
      ebs_block_device: cdktf.listMapper(amiEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(amiEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      timeouts: amiTimeoutsToTerraform(this._timeouts),
    };
  }
}
