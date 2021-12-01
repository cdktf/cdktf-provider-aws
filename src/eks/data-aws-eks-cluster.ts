// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#name DataAwsEksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#tags DataAwsEksCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {

  // oidc - computed: true, optional: false, required: false
  public get oidc() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oidc') as any;
  }
}
export class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {

  // service_ipv4_cidr - computed: true, optional: false, required: false
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
}
export class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {

  // cluster_security_group_id - computed: true, optional: false, required: false
  public get clusterSecurityGroupId() {
    return this.getStringAttribute('cluster_security_group_id');
  }

  // endpoint_private_access - computed: true, optional: false, required: false
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access') as any;
  }

  // endpoint_public_access - computed: true, optional: false, required: false
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access') as any;
  }

  // public_access_cidrs - computed: true, optional: false, required: false
  public get publicAccessCidrs() {
    return this.getListAttribute('public_access_cidrs');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
*/
export class DataAwsEksCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig) {
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
    this._name = config.name;
    this._tags = config.tags;
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
    return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: true, optional: false, required: false
  public get enabledClusterLogTypes() {
    return this.getListAttribute('enabled_cluster_log_types');
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
    return new DataAwsEksClusterIdentity(this, 'identity', index);
  }

  // kubernetes_network_config - computed: true, optional: false, required: false
  public kubernetesNetworkConfig(index: string) {
    return new DataAwsEksClusterKubernetesNetworkConfig(this, 'kubernetes_network_config', index);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_config - computed: true, optional: false, required: false
  public vpcConfig(index: string) {
    return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
