// https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewayStoredIscsiVolumeConfig extends TerraformMetaArguments {
  readonly diskId: string;
  readonly gatewayArn: string;
  readonly kmsEncrypted?: boolean;
  readonly kmsKey?: string;
  readonly networkInterfaceId: string;
  readonly preserveExistingData: boolean;
  readonly snapshotId?: string;
  readonly tags?: { [key: string]: string };
  readonly targetName: string;
}

// Resource

export class StoragegatewayStoredIscsiVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_stored_iscsi_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskId = config.diskId;
    this._gatewayArn = config.gatewayArn;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKey = config.kmsKey;
    this._networkInterfaceId = config.networkInterfaceId;
    this._preserveExistingData = config.preserveExistingData;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._targetName = config.targetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chap_enabled - computed: true, optional: false, required: true
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId: string;
  public get diskId() {
    return this._diskId;
  }
  public set diskId(value: string) {
    this._diskId = value;
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this._gatewayArn;
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_encrypted - computed: false, optional: true, required: false
  private _kmsEncrypted?: boolean;
  public get kmsEncrypted() {
    return this._kmsEncrypted;
  }
  public set kmsEncrypted(value: boolean | undefined) {
    this._kmsEncrypted = value;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this._kmsKey;
  }
  public set kmsKey(value: string | undefined) {
    this._kmsKey = value;
  }

  // lun_number - computed: true, optional: false, required: true
  public get lunNumber() {
    return this.getNumberAttribute('lun_number');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // network_interface_port - computed: true, optional: false, required: true
  public get networkInterfacePort() {
    return this.getNumberAttribute('network_interface_port');
  }

  // preserve_existing_data - computed: false, optional: false, required: true
  private _preserveExistingData: boolean;
  public get preserveExistingData() {
    return this._preserveExistingData;
  }
  public set preserveExistingData(value: boolean) {
    this._preserveExistingData = value;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this._snapshotId;
  }
  public set snapshotId(value: string | undefined) {
    this._snapshotId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_arn - computed: true, optional: false, required: true
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName: string;
  public get targetName() {
    return this._targetName;
  }
  public set targetName(value: string) {
    this._targetName = value;
  }

  // volume_attachment_status - computed: true, optional: false, required: true
  public get volumeAttachmentStatus() {
    return this.getStringAttribute('volume_attachment_status');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size_in_bytes - computed: true, optional: false, required: true
  public get volumeSizeInBytes() {
    return this.getNumberAttribute('volume_size_in_bytes');
  }

  // volume_status - computed: true, optional: false, required: true
  public get volumeStatus() {
    return this.getStringAttribute('volume_status');
  }

  // volume_type - computed: true, optional: false, required: true
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: this._diskId,
      gateway_arn: this._gatewayArn,
      kms_encrypted: this._kmsEncrypted,
      kms_key: this._kmsKey,
      network_interface_id: this._networkInterfaceId,
      preserve_existing_data: this._preserveExistingData,
      snapshot_id: this._snapshotId,
      tags: this._tags,
      target_name: this._targetName,
    };
  }
}
