// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
  readonly hsmType: string;
  readonly sourceBackupIdentifier?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: CloudhsmV2ClusterTimeouts;
}
export class CloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {

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
export interface CloudhsmV2ClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudhsmV2ClusterTimeoutsToTerraform(struct?: CloudhsmV2ClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudhsmV2Cluster extends cdktf.TerraformResource {

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

  // cluster_certificates - computed: true, optional: false, required: false
  public clusterCertificates(index: string) {
    return new CloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // hsm_type - computed: false, optional: false, required: true
  private _hsmType: string;
  public get hsmType() {
    return this.getStringAttribute('hsm_type');
  }
  public set hsmType(value: string) {
    this._hsmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmTypeInput() {
    return this._hsmType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // source_backup_identifier - computed: false, optional: true, required: false
  private _sourceBackupIdentifier?: string;
  public get sourceBackupIdentifier() {
    return this.getStringAttribute('source_backup_identifier');
  }
  public set sourceBackupIdentifier(value: string ) {
    this._sourceBackupIdentifier = value;
  }
  public resetSourceBackupIdentifier() {
    this._sourceBackupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBackupIdentifierInput() {
    return this._sourceBackupIdentifier
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudhsmV2ClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudhsmV2ClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hsm_type: cdktf.stringToTerraform(this._hsmType),
      source_backup_identifier: cdktf.stringToTerraform(this._sourceBackupIdentifier),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: cloudhsmV2ClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
