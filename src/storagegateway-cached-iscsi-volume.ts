// https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayCachedIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
  readonly gatewayArn: string;
  readonly networkInterfaceId: string;
  readonly snapshotId?: string;
  readonly sourceVolumeArn?: string;
  readonly tags?: { [key: string]: string };
  readonly targetName: string;
  readonly volumeSizeInBytes: number;
}

// Resource

export class StoragegatewayCachedIscsiVolume extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayCachedIscsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_cached_iscsi_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayArn = config.gatewayArn;
    this._networkInterfaceId = config.networkInterfaceId;
    this._snapshotId = config.snapshotId;
    this._sourceVolumeArn = config.sourceVolumeArn;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._volumeSizeInBytes = config.volumeSizeInBytes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chap_enabled - computed: true, optional: false, required: false
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lun_number - computed: true, optional: false, required: false
  public get lunNumber() {
    return this.getNumberAttribute('lun_number');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // network_interface_port - computed: true, optional: false, required: false
  public get networkInterfacePort() {
    return this.getNumberAttribute('network_interface_port');
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string ) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId
  }

  // source_volume_arn - computed: false, optional: true, required: false
  private _sourceVolumeArn?: string;
  public get sourceVolumeArn() {
    return this.getStringAttribute('source_volume_arn');
  }
  public set sourceVolumeArn(value: string ) {
    this._sourceVolumeArn = value;
  }
  public resetSourceVolumeArn() {
    this._sourceVolumeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeArnInput() {
    return this._sourceVolumeArn
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

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName: string;
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName
  }

  // volume_arn - computed: true, optional: false, required: false
  public get volumeArn() {
    return this.getStringAttribute('volume_arn');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size_in_bytes - computed: false, optional: false, required: true
  private _volumeSizeInBytes: number;
  public get volumeSizeInBytes() {
    return this.getNumberAttribute('volume_size_in_bytes');
  }
  public set volumeSizeInBytes(value: number) {
    this._volumeSizeInBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInBytesInput() {
    return this._volumeSizeInBytes
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      source_volume_arn: cdktf.stringToTerraform(this._sourceVolumeArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      volume_size_in_bytes: cdktf.numberToTerraform(this._volumeSizeInBytes),
    };
  }
}
