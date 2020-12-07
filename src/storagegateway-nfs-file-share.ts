// https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayNfsFileShareConfig extends cdktf.TerraformMetaArguments {
  readonly clientList: string[];
  readonly defaultStorageClass?: string;
  readonly gatewayArn: string;
  readonly guessMimeTypeEnabled?: boolean;
  readonly kmsEncrypted?: boolean;
  readonly kmsKeyArn?: string;
  readonly locationArn: string;
  readonly objectAcl?: string;
  readonly readOnly?: boolean;
  readonly requesterPays?: boolean;
  readonly roleArn: string;
  readonly squash?: string;
  readonly tags?: { [key: string]: string };
  /** nfs_file_share_defaults block */
  readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults[];
  /** timeouts block */
  readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
  readonly directoryMode?: string;
  readonly fileMode?: string;
  readonly groupId?: number;
  readonly ownerId?: number;
}

function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_mode: cdktf.stringToTerraform(struct!.directoryMode),
    file_mode: cdktf.stringToTerraform(struct!.fileMode),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    owner_id: cdktf.numberToTerraform(struct!.ownerId),
  }
}

export interface StoragegatewayNfsFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function storagegatewayNfsFileShareTimeoutsToTerraform(struct?: StoragegatewayNfsFileShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StoragegatewayNfsFileShare extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_nfs_file_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientList = config.clientList;
    this._defaultStorageClass = config.defaultStorageClass;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKeyArn = config.kmsKeyArn;
    this._locationArn = config.locationArn;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._squash = config.squash;
    this._tags = config.tags;
    this._nfsFileShareDefaults = config.nfsFileShareDefaults;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_list - computed: false, optional: false, required: true
  private _clientList: string[];
  public get clientList() {
    return this.getListAttribute('client_list');
  }
  public set clientList(value: string[]) {
    this._clientList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListInput() {
    return this._clientList
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: string;
  public get defaultStorageClass() {
    return this.getStringAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: string ) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass
  }

  // fileshare_id - computed: true, optional: false, required: false
  public get fileshareId() {
    return this.getStringAttribute('fileshare_id');
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

  // guess_mime_type_enabled - computed: false, optional: true, required: false
  private _guessMimeTypeEnabled?: boolean;
  public get guessMimeTypeEnabled() {
    return this.getBooleanAttribute('guess_mime_type_enabled');
  }
  public set guessMimeTypeEnabled(value: boolean ) {
    this._guessMimeTypeEnabled = value;
  }
  public resetGuessMimeTypeEnabled() {
    this._guessMimeTypeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guessMimeTypeEnabledInput() {
    return this._guessMimeTypeEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_encrypted - computed: false, optional: true, required: false
  private _kmsEncrypted?: boolean;
  public get kmsEncrypted() {
    return this.getBooleanAttribute('kms_encrypted');
  }
  public set kmsEncrypted(value: boolean ) {
    this._kmsEncrypted = value;
  }
  public resetKmsEncrypted() {
    this._kmsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedInput() {
    return this._kmsEncrypted
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string ) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn: string;
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationArnInput() {
    return this._locationArn
  }

  // object_acl - computed: false, optional: true, required: false
  private _objectAcl?: string;
  public get objectAcl() {
    return this.getStringAttribute('object_acl');
  }
  public set objectAcl(value: string ) {
    this._objectAcl = value;
  }
  public resetObjectAcl() {
    this._objectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectAclInput() {
    return this._objectAcl
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean ) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean;
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays');
  }
  public set requesterPays(value: boolean ) {
    this._requesterPays = value;
  }
  public resetRequesterPays() {
    this._requesterPays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysInput() {
    return this._requesterPays
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // squash - computed: false, optional: true, required: false
  private _squash?: string;
  public get squash() {
    return this.getStringAttribute('squash');
  }
  public set squash(value: string ) {
    this._squash = value;
  }
  public resetSquash() {
    this._squash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashInput() {
    return this._squash
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

  // nfs_file_share_defaults - computed: false, optional: true, required: false
  private _nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults[];
  public get nfsFileShareDefaults() {
    return this.interpolationForAttribute('nfs_file_share_defaults') as any;
  }
  public set nfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults[] ) {
    this._nfsFileShareDefaults = value;
  }
  public resetNfsFileShareDefaults() {
    this._nfsFileShareDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsFileShareDefaultsInput() {
    return this._nfsFileShareDefaults
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewayNfsFileShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StoragegatewayNfsFileShareTimeouts ) {
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
      client_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientList),
      default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
      kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      location_arn: cdktf.stringToTerraform(this._locationArn),
      object_acl: cdktf.stringToTerraform(this._objectAcl),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      requester_pays: cdktf.booleanToTerraform(this._requesterPays),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      squash: cdktf.stringToTerraform(this._squash),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      nfs_file_share_defaults: cdktf.listMapper(storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform)(this._nfsFileShareDefaults),
      timeouts: storagegatewayNfsFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
