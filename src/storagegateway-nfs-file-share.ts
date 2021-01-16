// https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewayNfsFileShareConfig extends TerraformMetaArguments {
  readonly clientList: string[];
  readonly defaultStorageClass?: string;
  readonly fileShareName?: string;
  readonly gatewayArn: string;
  readonly guessMimeTypeEnabled?: boolean;
  readonly kmsEncrypted?: boolean;
  readonly kmsKeyArn?: string;
  readonly locationArn: string;
  readonly notificationPolicy?: string;
  readonly objectAcl?: string;
  readonly readOnly?: boolean;
  readonly requesterPays?: boolean;
  readonly roleArn: string;
  readonly squash?: string;
  readonly tags?: { [key: string]: string };
  /** cache_attributes block */
  readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes[];
  /** nfs_file_share_defaults block */
  readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults[];
  /** timeouts block */
  readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
}
export interface StoragegatewayNfsFileShareCacheAttributes {
  readonly cacheStaleTimeoutInSeconds?: number;
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
  readonly directoryMode?: string;
  readonly fileMode?: string;
  readonly groupId?: string;
  readonly ownerId?: string;
}
export interface StoragegatewayNfsFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StoragegatewayNfsFileShare extends TerraformResource {

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
    this._fileShareName = config.fileShareName;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKeyArn = config.kmsKeyArn;
    this._locationArn = config.locationArn;
    this._notificationPolicy = config.notificationPolicy;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._squash = config.squash;
    this._tags = config.tags;
    this._cacheAttributes = config.cacheAttributes;
    this._nfsFileShareDefaults = config.nfsFileShareDefaults;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_list - computed: false, optional: false, required: true
  private _clientList: string[];
  public get clientList() {
    return this._clientList;
  }
  public set clientList(value: string[]) {
    this._clientList = value;
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: string;
  public get defaultStorageClass() {
    return this._defaultStorageClass;
  }
  public set defaultStorageClass(value: string | undefined) {
    this._defaultStorageClass = value;
  }

  // file_share_name - computed: true, optional: true, required: false
  private _fileShareName?: string;
  public get fileShareName() {
    return this._fileShareName ?? this.getStringAttribute('file_share_name');
  }
  public set fileShareName(value: string | undefined) {
    this._fileShareName = value;
  }

  // fileshare_id - computed: true, optional: false, required: true
  public get fileshareId() {
    return this.getStringAttribute('fileshare_id');
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this._gatewayArn;
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }

  // guess_mime_type_enabled - computed: false, optional: true, required: false
  private _guessMimeTypeEnabled?: boolean;
  public get guessMimeTypeEnabled() {
    return this._guessMimeTypeEnabled;
  }
  public set guessMimeTypeEnabled(value: boolean | undefined) {
    this._guessMimeTypeEnabled = value;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn;
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn: string;
  public get locationArn() {
    return this._locationArn;
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }

  // notification_policy - computed: false, optional: true, required: false
  private _notificationPolicy?: string;
  public get notificationPolicy() {
    return this._notificationPolicy;
  }
  public set notificationPolicy(value: string | undefined) {
    this._notificationPolicy = value;
  }

  // object_acl - computed: false, optional: true, required: false
  private _objectAcl?: string;
  public get objectAcl() {
    return this._objectAcl;
  }
  public set objectAcl(value: string | undefined) {
    this._objectAcl = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this._readOnly;
  }
  public set readOnly(value: boolean | undefined) {
    this._readOnly = value;
  }

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean;
  public get requesterPays() {
    return this._requesterPays;
  }
  public set requesterPays(value: boolean | undefined) {
    this._requesterPays = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // squash - computed: false, optional: true, required: false
  private _squash?: string;
  public get squash() {
    return this._squash;
  }
  public set squash(value: string | undefined) {
    this._squash = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // cache_attributes - computed: false, optional: true, required: false
  private _cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes[];
  public get cacheAttributes() {
    return this._cacheAttributes;
  }
  public set cacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes[] | undefined) {
    this._cacheAttributes = value;
  }

  // nfs_file_share_defaults - computed: false, optional: true, required: false
  private _nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults[];
  public get nfsFileShareDefaults() {
    return this._nfsFileShareDefaults;
  }
  public set nfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults[] | undefined) {
    this._nfsFileShareDefaults = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewayNfsFileShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StoragegatewayNfsFileShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_list: this._clientList,
      default_storage_class: this._defaultStorageClass,
      file_share_name: this._fileShareName,
      gateway_arn: this._gatewayArn,
      guess_mime_type_enabled: this._guessMimeTypeEnabled,
      kms_encrypted: this._kmsEncrypted,
      kms_key_arn: this._kmsKeyArn,
      location_arn: this._locationArn,
      notification_policy: this._notificationPolicy,
      object_acl: this._objectAcl,
      read_only: this._readOnly,
      requester_pays: this._requesterPays,
      role_arn: this._roleArn,
      squash: this._squash,
      tags: this._tags,
      cache_attributes: this._cacheAttributes,
      nfs_file_share_defaults: this._nfsFileShareDefaults,
      timeouts: this._timeouts,
    };
  }
}
