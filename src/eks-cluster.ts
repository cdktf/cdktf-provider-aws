// https://www.terraform.io/docs/providers/aws/r/eks_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface EksClusterConfig extends TerraformMetaArguments {
  readonly enabledClusterLogTypes?: string[];
  readonly name: string;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** encryption_config block */
  readonly encryptionConfig?: EksClusterEncryptionConfig[];
  /** kubernetes_network_config block */
  readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
  /** timeouts block */
  readonly timeouts?: EksClusterTimeouts;
  /** vpc_config block */
  readonly vpcConfig: EksClusterVpcConfig[];
}
export class EksClusterCertificateAuthority extends ComplexComputedList {

  // data - computed: true, optional: false, required: true
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class EksClusterIdentityOidc extends ComplexComputedList {

  // issuer - computed: true, optional: false, required: true
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class EksClusterIdentity extends ComplexComputedList {

  // oidc - computed: true, optional: false, required: true
  public get oidc() {
    return 'not implemented' as any;
  }
}
export interface EksClusterEncryptionConfigProvider {
  readonly keyArn: string;
}
export interface EksClusterEncryptionConfig {
  readonly resources: string[];
  /** provider block */
  readonly provider: EksClusterEncryptionConfigProvider[];
}
export interface EksClusterKubernetesNetworkConfig {
  readonly serviceIpv4Cidr?: string;
}
export interface EksClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface EksClusterVpcConfig {
  readonly endpointPrivateAccess?: boolean;
  readonly endpointPublicAccess?: boolean;
  readonly publicAccessCidrs?: string[];
  readonly securityGroupIds?: string[];
  readonly subnetIds: string[];
}

// Resource

export class EksCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._version = config.version;
    this._encryptionConfig = config.encryptionConfig;
    this._kubernetesNetworkConfig = config.kubernetesNetworkConfig;
    this._timeouts = config.timeouts;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: true
  public certificateAuthority(index: string) {
    return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[];
  public get enabledClusterLogTypes() {
    return this._enabledClusterLogTypes;
  }
  public set enabledClusterLogTypes(value: string[] | undefined) {
    this._enabledClusterLogTypes = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: true, optional: false, required: true
  public identity(index: string) {
    return new EksClusterIdentity(this, 'identity', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_version - computed: true, optional: false, required: true
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: EksClusterEncryptionConfig[];
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public set encryptionConfig(value: EksClusterEncryptionConfig[] | undefined) {
    this._encryptionConfig = value;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public set kubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig[] | undefined) {
    this._kubernetesNetworkConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EksClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig: EksClusterVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: EksClusterVpcConfig[]) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_cluster_log_types: this._enabledClusterLogTypes,
      name: this._name,
      role_arn: this._roleArn,
      tags: this._tags,
      version: this._version,
      encryption_config: this._encryptionConfig,
      kubernetes_network_config: this._kubernetesNetworkConfig,
      timeouts: this._timeouts,
      vpc_config: this._vpcConfig,
    };
  }
}
