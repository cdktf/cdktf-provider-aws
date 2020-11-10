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
  /** timeouts block */
  readonly timeouts?: EksClusterTimeouts;
  /** vpc_config block */
  readonly vpcConfig: EksClusterVpcConfig[];
}
export class EksClusterCertificateAuthority extends ComplexComputedList {

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class EksClusterIdentityOidc extends ComplexComputedList {

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class EksClusterIdentity extends ComplexComputedList {

  // oidc - computed: true, optional: false, required: false
  public get oidc() {
    return this.interpolationForAttribute('oidc') as any;
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
      enabled_cluster_log_types: this._enabledClusterLogTypes,
      name: this._name,
      role_arn: this._roleArn,
      tags: this._tags,
      version: this._version,
      encryption_config: this._encryptionConfig,
      timeouts: this._timeouts,
      vpc_config: this._vpcConfig,
    };
  }
}
