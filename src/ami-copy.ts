// https://www.terraform.io/docs/providers/aws/r/ami_copy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly encrypted?: boolean;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly sourceAmiId: string;
  readonly sourceAmiRegion: string;
  readonly tags?: { [key: string]: string };
  /** ebs_block_device block */
  readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
  /** timeouts block */
  readonly timeouts?: AmiCopyTimeouts;
}
export interface AmiCopyEbsBlockDevice {
}

function amiCopyEbsBlockDeviceToTerraform(struct?: AmiCopyEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiCopyEphemeralBlockDevice {
}

function amiCopyEphemeralBlockDeviceToTerraform(struct?: AmiCopyEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiCopyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function amiCopyTimeoutsToTerraform(struct?: AmiCopyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AmiCopy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AmiCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_copy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._sourceAmiId = config.sourceAmiId;
    this._sourceAmiRegion = config.sourceAmiRegion;
    this._tags = config.tags;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._timeouts = config.timeouts;
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

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean ) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_location - computed: true, optional: false, required: false
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
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
    return this._kmsKeyId
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

  // source_ami_id - computed: false, optional: false, required: true
  private _sourceAmiId: string;
  public get sourceAmiId() {
    return this.getStringAttribute('source_ami_id');
  }
  public set sourceAmiId(value: string) {
    this._sourceAmiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAmiIdInput() {
    return this._sourceAmiId
  }

  // source_ami_region - computed: false, optional: false, required: true
  private _sourceAmiRegion: string;
  public get sourceAmiRegion() {
    return this.getStringAttribute('source_ami_region');
  }
  public set sourceAmiRegion(value: string) {
    this._sourceAmiRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAmiRegionInput() {
    return this._sourceAmiRegion
  }

  // sriov_net_support - computed: true, optional: false, required: false
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
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

  // virtualization_type - computed: true, optional: false, required: false
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiCopyEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: AmiCopyEbsBlockDevice[] ) {
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
  private _ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[] ) {
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
  private _timeouts?: AmiCopyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AmiCopyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      source_ami_id: cdktf.stringToTerraform(this._sourceAmiId),
      source_ami_region: cdktf.stringToTerraform(this._sourceAmiRegion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ebs_block_device: cdktf.listMapper(amiCopyEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(amiCopyEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      timeouts: amiCopyTimeoutsToTerraform(this._timeouts),
    };
  }
}
