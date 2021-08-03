// https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}
  */
  readonly accessBasedEnumeration?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#admin_user_list StoragegatewaySmbFileShare#admin_user_list}
  */
  readonly adminUserList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}
  */
  readonly auditDestinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#authentication StoragegatewaySmbFileShare#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#bucket_region StoragegatewaySmbFileShare#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}
  */
  readonly caseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#default_storage_class StoragegatewaySmbFileShare#default_storage_class}
  */
  readonly defaultStorageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#file_share_name StoragegatewaySmbFileShare#file_share_name}
  */
  readonly fileShareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#gateway_arn StoragegatewaySmbFileShare#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}
  */
  readonly guessMimeTypeEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}
  */
  readonly invalidUserList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}
  */
  readonly kmsEncrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#location_arn StoragegatewaySmbFileShare#location_arn}
  */
  readonly locationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#notification_policy StoragegatewaySmbFileShare#notification_policy}
  */
  readonly notificationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#object_acl StoragegatewaySmbFileShare#object_acl}
  */
  readonly objectAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}
  */
  readonly oplocksEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#read_only StoragegatewaySmbFileShare#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#requester_pays StoragegatewaySmbFileShare#requester_pays}
  */
  readonly requesterPays?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#role_arn StoragegatewaySmbFileShare#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}
  */
  readonly smbAclEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags StoragegatewaySmbFileShare#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags_all StoragegatewaySmbFileShare#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#valid_user_list StoragegatewaySmbFileShare#valid_user_list}
  */
  readonly validUserList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}
  */
  readonly vpcEndpointDnsName?: string;
  /**
  * cache_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_attributes StoragegatewaySmbFileShare#cache_attributes}
  */
  readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#timeouts StoragegatewaySmbFileShare#timeouts}
  */
  readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareCacheAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}
  */
  readonly cacheStaleTimeoutInSeconds?: number;
}

function storagegatewaySmbFileShareCacheAttributesToTerraform(struct?: StoragegatewaySmbFileShareCacheAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
  }
}

export interface StoragegatewaySmbFileShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#create StoragegatewaySmbFileShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#delete StoragegatewaySmbFileShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#update StoragegatewaySmbFileShare#update}
  */
  readonly update?: string;
}

function storagegatewaySmbFileShareTimeoutsToTerraform(struct?: StoragegatewaySmbFileShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share}
*/
export class StoragegatewaySmbFileShare extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewaySmbFileShareConfig
  */
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
    this._bucketRegion = config.bucketRegion;
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
    this._oplocksEnabled = config.oplocksEnabled;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._smbAclEnabled = config.smbAclEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validUserList = config.validUserList;
    this._vpcEndpointDnsName = config.vpcEndpointDnsName;
    this._cacheAttributes = config.cacheAttributes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_based_enumeration - computed: false, optional: true, required: false
  private _accessBasedEnumeration?: boolean;
  public get accessBasedEnumeration() {
    return this.getBooleanAttribute('access_based_enumeration');
  }
  public set accessBasedEnumeration(value: boolean ) {
    this._accessBasedEnumeration = value;
  }
  public resetAccessBasedEnumeration() {
    this._accessBasedEnumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBasedEnumerationInput() {
    return this._accessBasedEnumeration
  }

  // admin_user_list - computed: false, optional: true, required: false
  private _adminUserList?: string[];
  public get adminUserList() {
    return this.getListAttribute('admin_user_list');
  }
  public set adminUserList(value: string[] ) {
    this._adminUserList = value;
  }
  public resetAdminUserList() {
    this._adminUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserListInput() {
    return this._adminUserList
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audit_destination_arn - computed: false, optional: true, required: false
  private _auditDestinationArn?: string;
  public get auditDestinationArn() {
    return this.getStringAttribute('audit_destination_arn');
  }
  public set auditDestinationArn(value: string ) {
    this._auditDestinationArn = value;
  }
  public resetAuditDestinationArn() {
    this._auditDestinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDestinationArnInput() {
    return this._auditDestinationArn
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string;
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string ) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string;
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string ) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion
  }

  // case_sensitivity - computed: false, optional: true, required: false
  private _caseSensitivity?: string;
  public get caseSensitivity() {
    return this.getStringAttribute('case_sensitivity');
  }
  public set caseSensitivity(value: string ) {
    this._caseSensitivity = value;
  }
  public resetCaseSensitivity() {
    this._caseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitivityInput() {
    return this._caseSensitivity
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

  // file_share_name - computed: true, optional: true, required: false
  private _fileShareName?: string;
  public get fileShareName() {
    return this.getStringAttribute('file_share_name');
  }
  public set fileShareName(value: string) {
    this._fileShareName = value;
  }
  public resetFileShareName() {
    this._fileShareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareNameInput() {
    return this._fileShareName
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

  // invalid_user_list - computed: false, optional: true, required: false
  private _invalidUserList?: string[];
  public get invalidUserList() {
    return this.getListAttribute('invalid_user_list');
  }
  public set invalidUserList(value: string[] ) {
    this._invalidUserList = value;
  }
  public resetInvalidUserList() {
    this._invalidUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidUserListInput() {
    return this._invalidUserList
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

  // notification_policy - computed: false, optional: true, required: false
  private _notificationPolicy?: string;
  public get notificationPolicy() {
    return this.getStringAttribute('notification_policy');
  }
  public set notificationPolicy(value: string ) {
    this._notificationPolicy = value;
  }
  public resetNotificationPolicy() {
    this._notificationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyInput() {
    return this._notificationPolicy
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

  // oplocks_enabled - computed: false, optional: true, required: false
  private _oplocksEnabled?: boolean;
  public get oplocksEnabled() {
    return this.getBooleanAttribute('oplocks_enabled');
  }
  public set oplocksEnabled(value: boolean ) {
    this._oplocksEnabled = value;
  }
  public resetOplocksEnabled() {
    this._oplocksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplocksEnabledInput() {
    return this._oplocksEnabled
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

  // smb_acl_enabled - computed: false, optional: true, required: false
  private _smbAclEnabled?: boolean;
  public get smbAclEnabled() {
    return this.getBooleanAttribute('smb_acl_enabled');
  }
  public set smbAclEnabled(value: boolean ) {
    this._smbAclEnabled = value;
  }
  public resetSmbAclEnabled() {
    this._smbAclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbAclEnabledInput() {
    return this._smbAclEnabled
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // valid_user_list - computed: false, optional: true, required: false
  private _validUserList?: string[];
  public get validUserList() {
    return this.getListAttribute('valid_user_list');
  }
  public set validUserList(value: string[] ) {
    this._validUserList = value;
  }
  public resetValidUserList() {
    this._validUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUserListInput() {
    return this._validUserList
  }

  // vpc_endpoint_dns_name - computed: false, optional: true, required: false
  private _vpcEndpointDnsName?: string;
  public get vpcEndpointDnsName() {
    return this.getStringAttribute('vpc_endpoint_dns_name');
  }
  public set vpcEndpointDnsName(value: string ) {
    this._vpcEndpointDnsName = value;
  }
  public resetVpcEndpointDnsName() {
    this._vpcEndpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointDnsNameInput() {
    return this._vpcEndpointDnsName
  }

  // cache_attributes - computed: false, optional: true, required: false
  private _cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes[];
  public get cacheAttributes() {
    return this.interpolationForAttribute('cache_attributes') as any;
  }
  public set cacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes[] ) {
    this._cacheAttributes = value;
  }
  public resetCacheAttributes() {
    this._cacheAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAttributesInput() {
    return this._cacheAttributes
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewaySmbFileShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StoragegatewaySmbFileShareTimeouts ) {
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
      access_based_enumeration: cdktf.booleanToTerraform(this._accessBasedEnumeration),
      admin_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._adminUserList),
      audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
      authentication: cdktf.stringToTerraform(this._authentication),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      case_sensitivity: cdktf.stringToTerraform(this._caseSensitivity),
      default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
      file_share_name: cdktf.stringToTerraform(this._fileShareName),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
      invalid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._invalidUserList),
      kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      location_arn: cdktf.stringToTerraform(this._locationArn),
      notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
      object_acl: cdktf.stringToTerraform(this._objectAcl),
      oplocks_enabled: cdktf.booleanToTerraform(this._oplocksEnabled),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      requester_pays: cdktf.booleanToTerraform(this._requesterPays),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      smb_acl_enabled: cdktf.booleanToTerraform(this._smbAclEnabled),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      valid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._validUserList),
      vpc_endpoint_dns_name: cdktf.stringToTerraform(this._vpcEndpointDnsName),
      cache_attributes: cdktf.listMapper(storagegatewaySmbFileShareCacheAttributesToTerraform)(this._cacheAttributes),
      timeouts: storagegatewaySmbFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
