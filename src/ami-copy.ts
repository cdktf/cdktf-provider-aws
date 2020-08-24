// https://www.terraform.io/docs/providers/aws/r/ami_copy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AmiCopyConfig extends TerraformMetaArguments {
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
export interface AmiCopyEphemeralBlockDevice {
}
export interface AmiCopyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AmiCopy extends TerraformResource {

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

  // architecture - computed: true, optional: false, required: true
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // ena_support - computed: true, optional: false, required: true
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted;
  }
  public set encrypted(value: boolean | undefined) {
    this._encrypted = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_location - computed: true, optional: false, required: true
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // kernel_id - computed: true, optional: false, required: true
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // manage_ebs_snapshots - computed: true, optional: false, required: true
  public get manageEbsSnapshots() {
    return this.getBooleanAttribute('manage_ebs_snapshots');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // ramdisk_id - computed: true, optional: false, required: true
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // root_device_name - computed: true, optional: false, required: true
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }

  // root_snapshot_id - computed: true, optional: false, required: true
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // source_ami_id - computed: false, optional: false, required: true
  private _sourceAmiId: string;
  public get sourceAmiId() {
    return this._sourceAmiId;
  }
  public set sourceAmiId(value: string) {
    this._sourceAmiId = value;
  }

  // source_ami_region - computed: false, optional: false, required: true
  private _sourceAmiRegion: string;
  public get sourceAmiRegion() {
    return this._sourceAmiRegion;
  }
  public set sourceAmiRegion(value: string) {
    this._sourceAmiRegion = value;
  }

  // sriov_net_support - computed: true, optional: false, required: true
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtualization_type - computed: true, optional: false, required: true
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiCopyEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: AmiCopyEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AmiCopyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AmiCopyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      encrypted: this._encrypted,
      kms_key_id: this._kmsKeyId,
      name: this._name,
      source_ami_id: this._sourceAmiId,
      source_ami_region: this._sourceAmiRegion,
      tags: this._tags,
      ebs_block_device: this._ebsBlockDevice,
      ephemeral_block_device: this._ephemeralBlockDevice,
      timeouts: this._timeouts,
    };
  }
}
