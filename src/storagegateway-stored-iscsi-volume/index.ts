// https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayStoredIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}
  */
  readonly kmsEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}
  */
  readonly preserveExistingData: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}
  */
  readonly targetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume}
*/
export class StoragegatewayStoredIscsiVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_storagegateway_stored_iscsi_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StoragegatewayStoredIscsiVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StoragegatewayStoredIscsiVolume to import
  * @param importFromId The id of the existing StoragegatewayStoredIscsiVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StoragegatewayStoredIscsiVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_storagegateway_stored_iscsi_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayStoredIscsiVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_stored_iscsi_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.41.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskId = config.diskId;
    this._gatewayArn = config.gatewayArn;
    this._id = config.id;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKey = config.kmsKey;
    this._networkInterfaceId = config.networkInterfaceId;
    this._preserveExistingData = config.preserveExistingData;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetName = config.targetName;
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

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
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

  // kms_encrypted - computed: false, optional: true, required: false
  private _kmsEncrypted?: boolean | cdktf.IResolvable; 
  public get kmsEncrypted() {
    return this.getBooleanAttribute('kms_encrypted');
  }
  public set kmsEncrypted(value: boolean | cdktf.IResolvable) {
    this._kmsEncrypted = value;
  }
  public resetKmsEncrypted() {
    this._kmsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedInput() {
    return this._kmsEncrypted;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // lun_number - computed: true, optional: false, required: false
  public get lunNumber() {
    return this.getNumberAttribute('lun_number');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // network_interface_port - computed: true, optional: false, required: false
  public get networkInterfacePort() {
    return this.getNumberAttribute('network_interface_port');
  }

  // preserve_existing_data - computed: false, optional: false, required: true
  private _preserveExistingData?: boolean | cdktf.IResolvable; 
  public get preserveExistingData() {
    return this.getBooleanAttribute('preserve_existing_data');
  }
  public set preserveExistingData(value: boolean | cdktf.IResolvable) {
    this._preserveExistingData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveExistingDataInput() {
    return this._preserveExistingData;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // volume_attachment_status - computed: true, optional: false, required: false
  public get volumeAttachmentStatus() {
    return this.getStringAttribute('volume_attachment_status');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size_in_bytes - computed: true, optional: false, required: false
  public get volumeSizeInBytes() {
    return this.getNumberAttribute('volume_size_in_bytes');
  }

  // volume_status - computed: true, optional: false, required: false
  public get volumeStatus() {
    return this.getStringAttribute('volume_status');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      id: cdktf.stringToTerraform(this._id),
      kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      preserve_existing_data: cdktf.booleanToTerraform(this._preserveExistingData),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      target_name: cdktf.stringToTerraform(this._targetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_arn: {
        value: cdktf.stringToHclTerraform(this._gatewayArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted: {
        value: cdktf.booleanToHclTerraform(this._kmsEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_existing_data: {
        value: cdktf.booleanToHclTerraform(this._preserveExistingData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
