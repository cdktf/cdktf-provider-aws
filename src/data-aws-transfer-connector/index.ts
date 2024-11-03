/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/data-sources/transfer_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsTransferConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/data-sources/transfer_connector#id DataAwsTransferConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsTransferConnectorAs2Config {
}

export function dataAwsTransferConnectorAs2ConfigToTerraform(struct?: DataAwsTransferConnectorAs2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsTransferConnectorAs2ConfigToHclTerraform(struct?: DataAwsTransferConnectorAs2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsTransferConnectorAs2ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsTransferConnectorAs2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsTransferConnectorAs2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_secret_id - computed: true, optional: false, required: false
  public get basicAuthSecretId() {
    return this.getStringAttribute('basic_auth_secret_id');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // local_profile_id - computed: true, optional: false, required: false
  public get localProfileId() {
    return this.getStringAttribute('local_profile_id');
  }

  // mdn_response - computed: true, optional: false, required: false
  public get mdnResponse() {
    return this.getStringAttribute('mdn_response');
  }

  // mdn_signing_algorithm - computed: true, optional: false, required: false
  public get mdnSigningAlgorithm() {
    return this.getStringAttribute('mdn_signing_algorithm');
  }

  // message_subject - computed: true, optional: false, required: false
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
  }

  // partner_profile_id - computed: true, optional: false, required: false
  public get partnerProfileId() {
    return this.getStringAttribute('partner_profile_id');
  }

  // singing_algorithm - computed: true, optional: false, required: false
  public get singingAlgorithm() {
    return this.getStringAttribute('singing_algorithm');
  }
}

export class DataAwsTransferConnectorAs2ConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsTransferConnectorAs2ConfigOutputReference {
    return new DataAwsTransferConnectorAs2ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsTransferConnectorSftpConfig {
}

export function dataAwsTransferConnectorSftpConfigToTerraform(struct?: DataAwsTransferConnectorSftpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsTransferConnectorSftpConfigToHclTerraform(struct?: DataAwsTransferConnectorSftpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsTransferConnectorSftpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsTransferConnectorSftpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsTransferConnectorSftpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trusted_host_keys - computed: true, optional: false, required: false
  public get trustedHostKeys() {
    return this.getListAttribute('trusted_host_keys');
  }

  // user_secret_id - computed: true, optional: false, required: false
  public get userSecretId() {
    return this.getStringAttribute('user_secret_id');
  }
}

export class DataAwsTransferConnectorSftpConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsTransferConnectorSftpConfigOutputReference {
    return new DataAwsTransferConnectorSftpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/data-sources/transfer_connector aws_transfer_connector}
*/
export class DataAwsTransferConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsTransferConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsTransferConnector to import
  * @param importFromId The id of the existing DataAwsTransferConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/data-sources/transfer_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsTransferConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/data-sources/transfer_connector aws_transfer_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsTransferConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsTransferConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_connector',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.74.0',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_role - computed: true, optional: false, required: false
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // as2_config - computed: true, optional: false, required: false
  private _as2Config = new DataAwsTransferConnectorAs2ConfigList(this, "as2_config", false);
  public get as2Config() {
    return this._as2Config;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logging_role - computed: true, optional: false, required: false
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }

  // security_policy_name - computed: true, optional: false, required: false
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }

  // service_managed_egress_ip_addresses - computed: true, optional: false, required: false
  public get serviceManagedEgressIpAddresses() {
    return this.getListAttribute('service_managed_egress_ip_addresses');
  }

  // sftp_config - computed: true, optional: false, required: false
  private _sftpConfig = new DataAwsTransferConnectorSftpConfigList(this, "sftp_config", false);
  public get sftpConfig() {
    return this._sftpConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
