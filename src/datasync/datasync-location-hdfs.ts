// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DataSync
*/
export interface DatasyncLocationHdfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}
  */
  readonly agentArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}
  */
  readonly kerberosKrb5Conf?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}
  */
  readonly kerberosPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}
  */
  readonly kmsKeyProviderUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}
  */
  readonly simpleUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * name_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}
  */
  readonly nameNode: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable;
  /**
  * qop_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}
  */
  readonly qopConfiguration?: DatasyncLocationHdfsQopConfiguration;
}
export interface DatasyncLocationHdfsNameNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#port DatasyncLocationHdfs#port}
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

export interface DatasyncLocationHdfsQopConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}
  */
  readonly dataTransferProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}
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

export class DatasyncLocationHdfsQopConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // data_transfer_protection - computed: false, optional: true, required: false
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

  // rpc_protection - computed: false, optional: true, required: false
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs aws_datasync_location_hdfs}
*/
export class DatasyncLocationHdfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_location_hdfs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs aws_datasync_location_hdfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationHdfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationHdfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_hdfs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentArns = config.agentArns;
    this._authenticationType = config.authenticationType;
    this._blockSize = config.blockSize;
    this._kerberosKeytab = config.kerberosKeytab;
    this._kerberosKrb5Conf = config.kerberosKrb5Conf;
    this._kerberosPrincipal = config.kerberosPrincipal;
    this._kmsKeyProviderUri = config.kmsKeyProviderUri;
    this._replicationFactor = config.replicationFactor;
    this._simpleUser = config.simpleUser;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._nameNode = config.nameNode;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _nameNode?: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable; 
  public get nameNode() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('name_node')));
  }
  public set nameNode(value: DatasyncLocationHdfsNameNode[] | cdktf.IResolvable) {
    this._nameNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameNodeInput() {
    return this._nameNode;
  }

  // qop_configuration - computed: false, optional: true, required: false
  private _qopConfiguration = new DatasyncLocationHdfsQopConfigurationOutputReference(this, "qop_configuration", true);
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
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      block_size: cdktf.numberToTerraform(this._blockSize),
      kerberos_keytab: cdktf.stringToTerraform(this._kerberosKeytab),
      kerberos_krb5_conf: cdktf.stringToTerraform(this._kerberosKrb5Conf),
      kerberos_principal: cdktf.stringToTerraform(this._kerberosPrincipal),
      kms_key_provider_uri: cdktf.stringToTerraform(this._kmsKeyProviderUri),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      simple_user: cdktf.stringToTerraform(this._simpleUser),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      name_node: cdktf.listMapper(datasyncLocationHdfsNameNodeToTerraform)(this._nameNode),
      qop_configuration: datasyncLocationHdfsQopConfigurationToTerraform(this._qopConfiguration.internalValue),
    };
  }
}
