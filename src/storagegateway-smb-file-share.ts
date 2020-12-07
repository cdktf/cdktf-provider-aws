// https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
  readonly authentication?: string;
  readonly defaultStorageClass?: string;
  readonly gatewayArn: string;
  readonly guessMimeTypeEnabled?: boolean;
  readonly invalidUserList?: string[];
  readonly kmsEncrypted?: boolean;
  readonly kmsKeyArn?: string;
  readonly locationArn: string;
  readonly objectAcl?: string;
  readonly readOnly?: boolean;
  readonly requesterPays?: boolean;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly validUserList?: string[];
  /** timeouts block */
  readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
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


// Resource

export class StoragegatewaySmbFileShare extends cdktf.TerraformResource {

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
    this._authentication = config.authentication;
    this._defaultStorageClass = config.defaultStorageClass;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._invalidUserList = config.invalidUserList;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKeyArn = config.kmsKeyArn;
    this._locationArn = config.locationArn;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._validUserList = config.validUserList;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
      authentication: cdktf.stringToTerraform(this._authentication),
      default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
      invalid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._invalidUserList),
      kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      location_arn: cdktf.stringToTerraform(this._locationArn),
      object_acl: cdktf.stringToTerraform(this._objectAcl),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      requester_pays: cdktf.booleanToTerraform(this._requesterPays),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      valid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._validUserList),
      timeouts: storagegatewaySmbFileShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
