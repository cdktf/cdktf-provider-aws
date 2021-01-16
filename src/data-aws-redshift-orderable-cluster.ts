// https://www.terraform.io/docs/providers/aws/r/data_aws_redshift_orderable_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRedshiftOrderableClusterConfig extends TerraformMetaArguments {
  readonly clusterType?: string;
  readonly clusterVersion?: string;
  readonly nodeType?: string;
  readonly preferredNodeTypes?: string[];
}

// Resource

export class DataAwsRedshiftOrderableCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRedshiftOrderableClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_orderable_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._nodeType = config.nodeType;
    this._preferredNodeTypes = config.preferredNodeTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string;
  public get clusterType() {
    return this._clusterType ?? this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string | undefined) {
    this._clusterType = value;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string;
  public get clusterVersion() {
    return this._clusterVersion ?? this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string | undefined) {
    this._clusterVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string;
  public get nodeType() {
    return this._nodeType ?? this.getStringAttribute('node_type');
  }
  public set nodeType(value: string | undefined) {
    this._nodeType = value;
  }

  // preferred_node_types - computed: false, optional: true, required: false
  private _preferredNodeTypes?: string[];
  public get preferredNodeTypes() {
    return this._preferredNodeTypes;
  }
  public set preferredNodeTypes(value: string[] | undefined) {
    this._preferredNodeTypes = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: this._clusterType,
      cluster_version: this._clusterVersion,
      node_type: this._nodeType,
      preferred_node_types: this._preferredNodeTypes,
    };
  }
}
