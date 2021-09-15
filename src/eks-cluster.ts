// https://www.terraform.io/docs/providers/aws/r/eks_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
  */
  readonly enabledClusterLogTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#name EksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#role_arn EksCluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags_all EksCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#encryption_config EksCluster#encryption_config}
  */
  readonly encryptionConfig?: EksClusterEncryptionConfig[];
  /**
  * kubernetes_network_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#timeouts EksCluster#timeouts}
  */
  readonly timeouts?: EksClusterTimeouts;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#vpc_config EksCluster#vpc_config}
  */
  readonly vpcConfig: EksClusterVpcConfig[];
}
export class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class EksClusterIdentityOidc extends cdktf.ComplexComputedList {

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class EksClusterIdentity extends cdktf.ComplexComputedList {

  // oidc - computed: true, optional: false, required: false
  public get oidc() {
    return this.interpolationForAttribute('oidc') as any;
  }
}
export interface EksClusterEncryptionConfigProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}
  */
  readonly keyArn: string;
}

function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
  }
}

export interface EksClusterEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#resources EksCluster#resources}
  */
  readonly resources: string[];
  /**
  * provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#provider EksCluster#provider}
  */
  readonly provider: EksClusterEncryptionConfigProvider[];
}

function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    provider: cdktf.listMapper(eksClusterEncryptionConfigProviderToTerraform)(struct!.provider),
  }
}

export interface EksClusterKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
}

function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
  }
}

export interface EksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#create EksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#delete EksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#update EksCluster#update}
  */
  readonly update?: string;
}

function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface EksClusterVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_private_access EksCluster#endpoint_private_access}
  */
  readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_public_access EksCluster#endpoint_public_access}
  */
  readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#public_access_cidrs EksCluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#security_group_ids EksCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#subnet_ids EksCluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
    endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicAccessCidrs),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabledClusterLogTypes = config.enabledClusterLogTypes;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._encryptionConfig = config.encryptionConfig;
    this._kubernetesNetworkConfig = config.kubernetesNetworkConfig;
    this._timeouts = config.timeouts;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: false
  public certificateAuthority(index: string) {
    return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[];
  public get enabledClusterLogTypes() {
    return this.getListAttribute('enabled_cluster_log_types');
  }
  public set enabledClusterLogTypes(value: string[] ) {
    this._enabledClusterLogTypes = value;
  }
  public resetEnabledClusterLogTypes() {
    this._enabledClusterLogTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledClusterLogTypesInput() {
    return this._enabledClusterLogTypes
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new EksClusterIdentity(this, 'identity', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: EksClusterEncryptionConfig[];
  public get encryptionConfig() {
    return this.interpolationForAttribute('encryption_config') as any;
  }
  public set encryptionConfig(value: EksClusterEncryptionConfig[] ) {
    this._encryptionConfig = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
  public get kubernetesNetworkConfig() {
    return this.interpolationForAttribute('kubernetes_network_config') as any;
  }
  public set kubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig[] ) {
    this._kubernetesNetworkConfig = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EksClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig: EksClusterVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: EksClusterVpcConfig[]) {
    this._vpcConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledClusterLogTypes),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      encryption_config: cdktf.listMapper(eksClusterEncryptionConfigToTerraform)(this._encryptionConfig),
      kubernetes_network_config: cdktf.listMapper(eksClusterKubernetesNetworkConfigToTerraform)(this._kubernetesNetworkConfig),
      timeouts: eksClusterTimeoutsToTerraform(this._timeouts),
      vpc_config: cdktf.listMapper(eksClusterVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
