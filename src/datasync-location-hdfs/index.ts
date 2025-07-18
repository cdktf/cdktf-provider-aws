/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationHdfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}
  */
  readonly agentArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#id DatasyncLocationHdfs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kerberos_keytab_base64 DatasyncLocationHdfs#kerberos_keytab_base64}
  */
  readonly kerberosKeytabBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}
  */
  readonly kerberosKrb5Conf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kerberos_krb5_conf_base64 DatasyncLocationHdfs#kerberos_krb5_conf_base64}
  */
  readonly kerberosKrb5ConfBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}
  */
  readonly kerberosPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}
  */
  readonly kmsKeyProviderUri?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#region DatasyncLocationHdfs#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}
  */
  readonly simpleUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * name_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}
  */
  readonly nameNode: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable;
  /**
  * qop_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}
  */
  readonly qopConfiguration?: DatasyncLocationHdfsQopConfiguration;
}
export interface DatasyncLocationHdfsNameNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}
  */
  readonly port: number;
}

export function datasyncLocationHdfsNameNodeToTerraform(struct?: DatasyncLocationHdfsNameNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function datasyncLocationHdfsNameNodeToHclTerraform(struct?: DatasyncLocationHdfsNameNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationHdfsNameNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatasyncLocationHdfsNameNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationHdfsNameNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DatasyncLocationHdfsNameNodeList extends cdktf.ComplexList {
  public internalValue? : DatasyncLocationHdfsNameNode[] | cdktf.IResolvable

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
  public get(index: number): DatasyncLocationHdfsNameNodeOutputReference {
    return new DatasyncLocationHdfsNameNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasyncLocationHdfsQopConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}
  */
  readonly dataTransferProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}
  */
  readonly rpcProtection?: string;
}

export function datasyncLocationHdfsQopConfigurationToTerraform(struct?: DatasyncLocationHdfsQopConfigurationOutputReference | DatasyncLocationHdfsQopConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_transfer_protection: cdktf.stringToTerraform(struct!.dataTransferProtection),
    rpc_protection: cdktf.stringToTerraform(struct!.rpcProtection),
  }
}


export function datasyncLocationHdfsQopConfigurationToHclTerraform(struct?: DatasyncLocationHdfsQopConfigurationOutputReference | DatasyncLocationHdfsQopConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_transfer_protection: {
      value: cdktf.stringToHclTerraform(struct!.dataTransferProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpc_protection: {
      value: cdktf.stringToHclTerraform(struct!.rpcProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationHdfsQopConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationHdfsQopConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransferProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferProtection = this._dataTransferProtection;
    }
    if (this._rpcProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcProtection = this._rpcProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationHdfsQopConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransferProtection = undefined;
      this._rpcProtection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransferProtection = value.dataTransferProtection;
      this._rpcProtection = value.rpcProtection;
    }
  }

  // data_transfer_protection - computed: true, optional: true, required: false
  private _dataTransferProtection?: string; 
  public get dataTransferProtection() {
    return this.getStringAttribute('data_transfer_protection');
  }
  public set dataTransferProtection(value: string) {
    this._dataTransferProtection = value;
  }
  public resetDataTransferProtection() {
    this._dataTransferProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferProtectionInput() {
    return this._dataTransferProtection;
  }

  // rpc_protection - computed: true, optional: true, required: false
  private _rpcProtection?: string; 
  public get rpcProtection() {
    return this.getStringAttribute('rpc_protection');
  }
  public set rpcProtection(value: string) {
    this._rpcProtection = value;
  }
  public resetRpcProtection() {
    this._rpcProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcProtectionInput() {
    return this._rpcProtection;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs aws_datasync_location_hdfs}
*/
export class DatasyncLocationHdfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_hdfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationHdfs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationHdfs to import
  * @param importFromId The id of the existing DatasyncLocationHdfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationHdfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_hdfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_hdfs aws_datasync_location_hdfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationHdfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationHdfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_hdfs',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._agentArns = config.agentArns;
    this._authenticationType = config.authenticationType;
    this._blockSize = config.blockSize;
    this._id = config.id;
    this._kerberosKeytab = config.kerberosKeytab;
    this._kerberosKeytabBase64 = config.kerberosKeytabBase64;
    this._kerberosKrb5Conf = config.kerberosKrb5Conf;
    this._kerberosKrb5ConfBase64 = config.kerberosKrb5ConfBase64;
    this._kerberosPrincipal = config.kerberosPrincipal;
    this._kmsKeyProviderUri = config.kmsKeyProviderUri;
    this._region = config.region;
    this._replicationFactor = config.replicationFactor;
    this._simpleUser = config.simpleUser;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._nameNode.internalValue = config.nameNode;
    this._qopConfiguration.internalValue = config.qopConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns?: string[]; 
  public get agentArns() {
    return cdktf.Fn.tolist(this.getListAttribute('agent_arns'));
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // block_size - computed: false, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
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

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // kerberos_keytab_base64 - computed: false, optional: true, required: false
  private _kerberosKeytabBase64?: string; 
  public get kerberosKeytabBase64() {
    return this.getStringAttribute('kerberos_keytab_base64');
  }
  public set kerberosKeytabBase64(value: string) {
    this._kerberosKeytabBase64 = value;
  }
  public resetKerberosKeytabBase64() {
    this._kerberosKeytabBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabBase64Input() {
    return this._kerberosKeytabBase64;
  }

  // kerberos_krb5_conf - computed: false, optional: true, required: false
  private _kerberosKrb5Conf?: string; 
  public get kerberosKrb5Conf() {
    return this.getStringAttribute('kerberos_krb5_conf');
  }
  public set kerberosKrb5Conf(value: string) {
    this._kerberosKrb5Conf = value;
  }
  public resetKerberosKrb5Conf() {
    this._kerberosKrb5Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKrb5ConfInput() {
    return this._kerberosKrb5Conf;
  }

  // kerberos_krb5_conf_base64 - computed: false, optional: true, required: false
  private _kerberosKrb5ConfBase64?: string; 
  public get kerberosKrb5ConfBase64() {
    return this.getStringAttribute('kerberos_krb5_conf_base64');
  }
  public set kerberosKrb5ConfBase64(value: string) {
    this._kerberosKrb5ConfBase64 = value;
  }
  public resetKerberosKrb5ConfBase64() {
    this._kerberosKrb5ConfBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKrb5ConfBase64Input() {
    return this._kerberosKrb5ConfBase64;
  }

  // kerberos_principal - computed: false, optional: true, required: false
  private _kerberosPrincipal?: string; 
  public get kerberosPrincipal() {
    return this.getStringAttribute('kerberos_principal');
  }
  public set kerberosPrincipal(value: string) {
    this._kerberosPrincipal = value;
  }
  public resetKerberosPrincipal() {
    this._kerberosPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPrincipalInput() {
    return this._kerberosPrincipal;
  }

  // kms_key_provider_uri - computed: false, optional: true, required: false
  private _kmsKeyProviderUri?: string; 
  public get kmsKeyProviderUri() {
    return this.getStringAttribute('kms_key_provider_uri');
  }
  public set kmsKeyProviderUri(value: string) {
    this._kmsKeyProviderUri = value;
  }
  public resetKmsKeyProviderUri() {
    this._kmsKeyProviderUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyProviderUriInput() {
    return this._kmsKeyProviderUri;
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

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // simple_user - computed: false, optional: true, required: false
  private _simpleUser?: string; 
  public get simpleUser() {
    return this.getStringAttribute('simple_user');
  }
  public set simpleUser(value: string) {
    this._simpleUser = value;
  }
  public resetSimpleUser() {
    this._simpleUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleUserInput() {
    return this._simpleUser;
  }

  // subdirectory - computed: false, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // name_node - computed: false, optional: false, required: true
  private _nameNode = new DatasyncLocationHdfsNameNodeList(this, "name_node", true);
  public get nameNode() {
    return this._nameNode;
  }
  public putNameNode(value: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable) {
    this._nameNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameNodeInput() {
    return this._nameNode.internalValue;
  }

  // qop_configuration - computed: false, optional: true, required: false
  private _qopConfiguration = new DatasyncLocationHdfsQopConfigurationOutputReference(this, "qop_configuration");
  public get qopConfiguration() {
    return this._qopConfiguration;
  }
  public putQopConfiguration(value: DatasyncLocationHdfsQopConfiguration) {
    this._qopConfiguration.internalValue = value;
  }
  public resetQopConfiguration() {
    this._qopConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qopConfigurationInput() {
    return this._qopConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agentArns),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      block_size: cdktf.numberToTerraform(this._blockSize),
      id: cdktf.stringToTerraform(this._id),
      kerberos_keytab: cdktf.stringToTerraform(this._kerberosKeytab),
      kerberos_keytab_base64: cdktf.stringToTerraform(this._kerberosKeytabBase64),
      kerberos_krb5_conf: cdktf.stringToTerraform(this._kerberosKrb5Conf),
      kerberos_krb5_conf_base64: cdktf.stringToTerraform(this._kerberosKrb5ConfBase64),
      kerberos_principal: cdktf.stringToTerraform(this._kerberosPrincipal),
      kms_key_provider_uri: cdktf.stringToTerraform(this._kmsKeyProviderUri),
      region: cdktf.stringToTerraform(this._region),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      simple_user: cdktf.stringToTerraform(this._simpleUser),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      name_node: cdktf.listMapper(datasyncLocationHdfsNameNodeToTerraform, true)(this._nameNode.internalValue),
      qop_configuration: datasyncLocationHdfsQopConfigurationToTerraform(this._qopConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agentArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_keytab: {
        value: cdktf.stringToHclTerraform(this._kerberosKeytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_keytab_base64: {
        value: cdktf.stringToHclTerraform(this._kerberosKeytabBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_krb5_conf: {
        value: cdktf.stringToHclTerraform(this._kerberosKrb5Conf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_krb5_conf_base64: {
        value: cdktf.stringToHclTerraform(this._kerberosKrb5ConfBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_principal: {
        value: cdktf.stringToHclTerraform(this._kerberosPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_provider_uri: {
        value: cdktf.stringToHclTerraform(this._kmsKeyProviderUri),
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
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      simple_user: {
        value: cdktf.stringToHclTerraform(this._simpleUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktf.stringToHclTerraform(this._subdirectory),
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
      name_node: {
        value: cdktf.listMapperHcl(datasyncLocationHdfsNameNodeToHclTerraform, true)(this._nameNode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasyncLocationHdfsNameNodeList",
      },
      qop_configuration: {
        value: datasyncLocationHdfsQopConfigurationToHclTerraform(this._qopConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationHdfsQopConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
