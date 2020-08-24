// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface CloudhsmV2ClusterConfig extends TerraformMetaArguments {
  readonly hsmType: string;
  readonly sourceBackupIdentifier?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: CloudhsmV2ClusterTimeouts;
}
export class CloudhsmV2ClusterClusterCertificates extends ComplexComputedList {

  // aws_hardware_certificate - computed: true, optional: false, required: true
  public get awsHardwareCertificate() {
    return this.getStringAttribute('aws_hardware_certificate');
  }

  // cluster_certificate - computed: true, optional: false, required: true
  public get clusterCertificate() {
    return this.getStringAttribute('cluster_certificate');
  }

  // cluster_csr - computed: true, optional: false, required: true
  public get clusterCsr() {
    return this.getStringAttribute('cluster_csr');
  }

  // hsm_certificate - computed: true, optional: false, required: true
  public get hsmCertificate() {
    return this.getStringAttribute('hsm_certificate');
  }

  // manufacturer_hardware_certificate - computed: true, optional: false, required: true
  public get manufacturerHardwareCertificate() {
    return this.getStringAttribute('manufacturer_hardware_certificate');
  }
}
export interface CloudhsmV2ClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CloudhsmV2Cluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudhsmV2ClusterConfig) {
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
    this._hsmType = config.hsmType;
    this._sourceBackupIdentifier = config.sourceBackupIdentifier;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_certificates - computed: true, optional: false, required: true
  public clusterCertificates(index: string) {
    return new CloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
  }

  // cluster_id - computed: true, optional: false, required: true
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_state - computed: true, optional: false, required: true
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // hsm_type - computed: false, optional: false, required: true
  private _hsmType: string;
  public get hsmType() {
    return this._hsmType;
  }
  public set hsmType(value: string) {
    this._hsmType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // security_group_id - computed: true, optional: false, required: true
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // source_backup_identifier - computed: false, optional: true, required: false
  private _sourceBackupIdentifier?: string;
  public get sourceBackupIdentifier() {
    return this._sourceBackupIdentifier;
  }
  public set sourceBackupIdentifier(value: string | undefined) {
    this._sourceBackupIdentifier = value;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudhsmV2ClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudhsmV2ClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hsm_type: this._hsmType,
      source_backup_identifier: this._sourceBackupIdentifier,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
