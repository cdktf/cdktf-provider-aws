/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}
  */
  readonly accessRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#id TransferConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}
  */
  readonly loggingRole?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#region TransferConnector#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}
  */
  readonly securityPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#tags TransferConnector#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#url TransferConnector#url}
  */
  readonly url: string;
  /**
  * as2_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}
  */
  readonly as2Config?: TransferConnectorAs2Config;
  /**
  * sftp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}
  */
  readonly sftpConfig?: TransferConnectorSftpConfig;
}
export interface TransferConnectorAs2Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#compression TransferConnector#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}
  */
  readonly encryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}
  */
  readonly localProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}
  */
  readonly mdnResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}
  */
  readonly mdnSigningAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}
  */
  readonly messageSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}
  */
  readonly partnerProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}
  */
  readonly signingAlgorithm: string;
}

export function transferConnectorAs2ConfigToTerraform(struct?: TransferConnectorAs2ConfigOutputReference | TransferConnectorAs2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    local_profile_id: cdktf.stringToTerraform(struct!.localProfileId),
    mdn_response: cdktf.stringToTerraform(struct!.mdnResponse),
    mdn_signing_algorithm: cdktf.stringToTerraform(struct!.mdnSigningAlgorithm),
    message_subject: cdktf.stringToTerraform(struct!.messageSubject),
    partner_profile_id: cdktf.stringToTerraform(struct!.partnerProfileId),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
  }
}


export function transferConnectorAs2ConfigToHclTerraform(struct?: TransferConnectorAs2ConfigOutputReference | TransferConnectorAs2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.localProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdn_response: {
      value: cdktf.stringToHclTerraform(struct!.mdnResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdn_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.mdnSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_subject: {
      value: cdktf.stringToHclTerraform(struct!.messageSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.partnerProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferConnectorAs2ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferConnectorAs2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._localProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProfileId = this._localProfileId;
    }
    if (this._mdnResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdnResponse = this._mdnResponse;
    }
    if (this._mdnSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdnSigningAlgorithm = this._mdnSigningAlgorithm;
    }
    if (this._messageSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageSubject = this._messageSubject;
    }
    if (this._partnerProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerProfileId = this._partnerProfileId;
    }
    if (this._signingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgorithm = this._signingAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferConnectorAs2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._encryptionAlgorithm = undefined;
      this._localProfileId = undefined;
      this._mdnResponse = undefined;
      this._mdnSigningAlgorithm = undefined;
      this._messageSubject = undefined;
      this._partnerProfileId = undefined;
      this._signingAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._localProfileId = value.localProfileId;
      this._mdnResponse = value.mdnResponse;
      this._mdnSigningAlgorithm = value.mdnSigningAlgorithm;
      this._messageSubject = value.messageSubject;
      this._partnerProfileId = value.partnerProfileId;
      this._signingAlgorithm = value.signingAlgorithm;
    }
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // encryption_algorithm - computed: false, optional: false, required: true
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // local_profile_id - computed: false, optional: false, required: true
  private _localProfileId?: string; 
  public get localProfileId() {
    return this.getStringAttribute('local_profile_id');
  }
  public set localProfileId(value: string) {
    this._localProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localProfileIdInput() {
    return this._localProfileId;
  }

  // mdn_response - computed: false, optional: false, required: true
  private _mdnResponse?: string; 
  public get mdnResponse() {
    return this.getStringAttribute('mdn_response');
  }
  public set mdnResponse(value: string) {
    this._mdnResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mdnResponseInput() {
    return this._mdnResponse;
  }

  // mdn_signing_algorithm - computed: false, optional: true, required: false
  private _mdnSigningAlgorithm?: string; 
  public get mdnSigningAlgorithm() {
    return this.getStringAttribute('mdn_signing_algorithm');
  }
  public set mdnSigningAlgorithm(value: string) {
    this._mdnSigningAlgorithm = value;
  }
  public resetMdnSigningAlgorithm() {
    this._mdnSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdnSigningAlgorithmInput() {
    return this._mdnSigningAlgorithm;
  }

  // message_subject - computed: false, optional: true, required: false
  private _messageSubject?: string; 
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
  }
  public set messageSubject(value: string) {
    this._messageSubject = value;
  }
  public resetMessageSubject() {
    this._messageSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSubjectInput() {
    return this._messageSubject;
  }

  // partner_profile_id - computed: false, optional: false, required: true
  private _partnerProfileId?: string; 
  public get partnerProfileId() {
    return this.getStringAttribute('partner_profile_id');
  }
  public set partnerProfileId(value: string) {
    this._partnerProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerProfileIdInput() {
    return this._partnerProfileId;
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
  }
}
export interface TransferConnectorSftpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}
  */
  readonly trustedHostKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}
  */
  readonly userSecretId?: string;
}

export function transferConnectorSftpConfigToTerraform(struct?: TransferConnectorSftpConfigOutputReference | TransferConnectorSftpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_host_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedHostKeys),
    user_secret_id: cdktf.stringToTerraform(struct!.userSecretId),
  }
}


export function transferConnectorSftpConfigToHclTerraform(struct?: TransferConnectorSftpConfigOutputReference | TransferConnectorSftpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_host_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedHostKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.userSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferConnectorSftpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferConnectorSftpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedHostKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHostKeys = this._trustedHostKeys;
    }
    if (this._userSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSecretId = this._userSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferConnectorSftpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedHostKeys = undefined;
      this._userSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedHostKeys = value.trustedHostKeys;
      this._userSecretId = value.userSecretId;
    }
  }

  // trusted_host_keys - computed: false, optional: true, required: false
  private _trustedHostKeys?: string[]; 
  public get trustedHostKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_host_keys'));
  }
  public set trustedHostKeys(value: string[]) {
    this._trustedHostKeys = value;
  }
  public resetTrustedHostKeys() {
    this._trustedHostKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostKeysInput() {
    return this._trustedHostKeys;
  }

  // user_secret_id - computed: false, optional: true, required: false
  private _userSecretId?: string; 
  public get userSecretId() {
    return this.getStringAttribute('user_secret_id');
  }
  public set userSecretId(value: string) {
    this._userSecretId = value;
  }
  public resetUserSecretId() {
    this._userSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSecretIdInput() {
    return this._userSecretId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector aws_transfer_connector}
*/
export class TransferConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferConnector to import
  * @param importFromId The id of the existing TransferConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/transfer_connector aws_transfer_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: TransferConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_connector',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRole = config.accessRole;
    this._id = config.id;
    this._loggingRole = config.loggingRole;
    this._region = config.region;
    this._securityPolicyName = config.securityPolicyName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._url = config.url;
    this._as2Config.internalValue = config.as2Config;
    this._sftpConfig.internalValue = config.sftpConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_role - computed: false, optional: false, required: true
  private _accessRole?: string; 
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }
  public set accessRole(value: string) {
    this._accessRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleInput() {
    return this._accessRole;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
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

  // logging_role - computed: false, optional: true, required: false
  private _loggingRole?: string; 
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }
  public set loggingRole(value: string) {
    this._loggingRole = value;
  }
  public resetLoggingRole() {
    this._loggingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRoleInput() {
    return this._loggingRole;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_policy_name - computed: true, optional: true, required: false
  private _securityPolicyName?: string; 
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }
  public set securityPolicyName(value: string) {
    this._securityPolicyName = value;
  }
  public resetSecurityPolicyName() {
    this._securityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyNameInput() {
    return this._securityPolicyName;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // as2_config - computed: false, optional: true, required: false
  private _as2Config = new TransferConnectorAs2ConfigOutputReference(this, "as2_config");
  public get as2Config() {
    return this._as2Config;
  }
  public putAs2Config(value: TransferConnectorAs2Config) {
    this._as2Config.internalValue = value;
  }
  public resetAs2Config() {
    this._as2Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get as2ConfigInput() {
    return this._as2Config.internalValue;
  }

  // sftp_config - computed: false, optional: true, required: false
  private _sftpConfig = new TransferConnectorSftpConfigOutputReference(this, "sftp_config");
  public get sftpConfig() {
    return this._sftpConfig;
  }
  public putSftpConfig(value: TransferConnectorSftpConfig) {
    this._sftpConfig.internalValue = value;
  }
  public resetSftpConfig() {
    this._sftpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpConfigInput() {
    return this._sftpConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_role: cdktf.stringToTerraform(this._accessRole),
      id: cdktf.stringToTerraform(this._id),
      logging_role: cdktf.stringToTerraform(this._loggingRole),
      region: cdktf.stringToTerraform(this._region),
      security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      url: cdktf.stringToTerraform(this._url),
      as2_config: transferConnectorAs2ConfigToTerraform(this._as2Config.internalValue),
      sftp_config: transferConnectorSftpConfigToTerraform(this._sftpConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_role: {
        value: cdktf.stringToHclTerraform(this._accessRole),
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
      logging_role: {
        value: cdktf.stringToHclTerraform(this._loggingRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_name: {
        value: cdktf.stringToHclTerraform(this._securityPolicyName),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as2_config: {
        value: transferConnectorAs2ConfigToHclTerraform(this._as2Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferConnectorAs2ConfigList",
      },
      sftp_config: {
        value: transferConnectorSftpConfigToHclTerraform(this._sftpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferConnectorSftpConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
