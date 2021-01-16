// https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewaySmbFileShareConfig extends TerraformMetaArguments {
  readonly accessBasedEnumeration?: boolean;
  readonly adminUserList?: string[];
  readonly auditDestinationArn?: string;
  readonly authentication?: string;
  readonly caseSensitivity?: string;
  readonly defaultStorageClass?: string;
  readonly fileShareName?: string;
  readonly gatewayArn: string;
  readonly guessMimeTypeEnabled?: boolean;
  readonly invalidUserList?: string[];
  readonly kmsEncrypted?: boolean;
  readonly kmsKeyArn?: string;
  readonly locationArn: string;
  readonly notificationPolicy?: string;
  readonly objectAcl?: string;
  readonly readOnly?: boolean;
  readonly requesterPays?: boolean;
  readonly roleArn: string;
  readonly smbAclEnabled?: boolean;
  readonly tags?: { [key: string]: string };
  readonly validUserList?: string[];
  /** cache_attributes block */
  readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes[];
  /** timeouts block */
  readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareCacheAttributes {
  readonly cacheStaleTimeoutInSeconds?: number;
}
export interface StoragegatewaySmbFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StoragegatewaySmbFileShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_smb_file_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessBasedEnumeration = config.accessBasedEnumeration;
    this._adminUserList = config.adminUserList;
    this._auditDestinationArn = config.auditDestinationArn;
    this._authentication = config.authentication;
    this._caseSensitivity = config.caseSensitivity;
    this._defaultStorageClass = config.defaultStorageClass;
    this._fileShareName = config.fileShareName;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._invalidUserList = config.invalidUserList;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKeyArn = config.kmsKeyArn;
    this._locationArn = config.locationArn;
    this._notificationPolicy = config.notificationPolicy;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._smbAclEnabled = config.smbAclEnabled;
    this._tags = config.tags;
    this._validUserList = config.validUserList;
    this._cacheAttributes = config.cacheAttributes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_based_enumeration - computed: false, optional: true, required: false
  private _accessBasedEnumeration?: boolean;
  public get accessBasedEnumeration() {
    return this._accessBasedEnumeration;
  }
  public set accessBasedEnumeration(value: boolean | undefined) {
    this._accessBasedEnumeration = value;
  }

  // admin_user_list - computed: false, optional: true, required: false
  private _adminUserList?: string[];
  public get adminUserList() {
    return this._adminUserList;
  }
  public set adminUserList(value: string[] | undefined) {
    this._adminUserList = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audit_destination_arn - computed: false, optional: true, required: false
  private _auditDestinationArn?: string;
  public get auditDestinationArn() {
    return this._auditDestinationArn;
  }
  public set auditDestinationArn(value: string | undefined) {
    this._auditDestinationArn = value;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string;
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: string | undefined) {
    this._authentication = value;
  }

  // case_sensitivity - computed: false, optional: true, required: false
  private _caseSensitivity?: string;
  public get caseSensitivity() {
    return this._caseSensitivity;
  }
  public set caseSensitivity(value: string | undefined) {
    this._caseSensitivity = value;
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

  // invalid_user_list - computed: false, optional: true, required: false
  private _invalidUserList?: string[];
  public get invalidUserList() {
    return this._invalidUserList;
  }
  public set invalidUserList(value: string[] | undefined) {
    this._invalidUserList = value;
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

  // smb_acl_enabled - computed: false, optional: true, required: false
  private _smbAclEnabled?: boolean;
  public get smbAclEnabled() {
    return this._smbAclEnabled;
  }
  public set smbAclEnabled(value: boolean | undefined) {
    this._smbAclEnabled = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // valid_user_list - computed: false, optional: true, required: false
  private _validUserList?: string[];
  public get validUserList() {
    return this._validUserList;
  }
  public set validUserList(value: string[] | undefined) {
    this._validUserList = value;
  }

  // cache_attributes - computed: false, optional: true, required: false
  private _cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes[];
  public get cacheAttributes() {
    return this._cacheAttributes;
  }
  public set cacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes[] | undefined) {
    this._cacheAttributes = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewaySmbFileShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StoragegatewaySmbFileShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_based_enumeration: this._accessBasedEnumeration,
      admin_user_list: this._adminUserList,
      audit_destination_arn: this._auditDestinationArn,
      authentication: this._authentication,
      case_sensitivity: this._caseSensitivity,
      default_storage_class: this._defaultStorageClass,
      file_share_name: this._fileShareName,
      gateway_arn: this._gatewayArn,
      guess_mime_type_enabled: this._guessMimeTypeEnabled,
      invalid_user_list: this._invalidUserList,
      kms_encrypted: this._kmsEncrypted,
      kms_key_arn: this._kmsKeyArn,
      location_arn: this._locationArn,
      notification_policy: this._notificationPolicy,
      object_acl: this._objectAcl,
      read_only: this._readOnly,
      requester_pays: this._requesterPays,
      role_arn: this._roleArn,
      smb_acl_enabled: this._smbAclEnabled,
      tags: this._tags,
      valid_user_list: this._validUserList,
      cache_attributes: this._cacheAttributes,
      timeouts: this._timeouts,
    };
  }
}
