// https://www.terraform.io/docs/providers/aws/r/data_aws_cloudhsm_v2_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterId: string;
  readonly clusterState?: string;
}
export class DataAwsCloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {

  // aws_hardware_certificate - computed: true, optional: false, required: false
  public get awsHardwareCertificate() {
    return this.getStringAttribute('aws_hardware_certificate');
  }

  // cluster_certificate - computed: true, optional: false, required: false
  public get clusterCertificate() {
    return this.getStringAttribute('cluster_certificate');
  }

  // cluster_csr - computed: true, optional: false, required: false
  public get clusterCsr() {
    return this.getStringAttribute('cluster_csr');
  }

  // hsm_certificate - computed: true, optional: false, required: false
  public get hsmCertificate() {
    return this.getStringAttribute('hsm_certificate');
  }

  // manufacturer_hardware_certificate - computed: true, optional: false, required: false
  public get manufacturerHardwareCertificate() {
    return this.getStringAttribute('manufacturer_hardware_certificate');
  }
}

// Resource

export class DataAwsCloudhsmV2Cluster extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCloudhsmV2ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudhsm_v2_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._clusterState = config.clusterState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_certificates - computed: true, optional: false, required: false
  public clusterCertificates(index: string) {
    return new DataAwsCloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // cluster_state - computed: true, optional: true, required: false
  private _clusterState?: string;
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }
  public set clusterState(value: string) {
    this._clusterState = value;
  }
  public resetClusterState() {
    this._clusterState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStateInput() {
    return this._clusterState
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_state: cdktf.stringToTerraform(this._clusterState),
    };
  }
}
