// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Redshift
*/
export interface DataAwsRedshiftOrderableClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#node_type DataAwsRedshiftOrderableCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}
  */
  readonly preferredNodeTypes?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}
*/
export class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_orderable_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRedshiftOrderableClusterConfig = {}
  */
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

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // preferred_node_types - computed: false, optional: true, required: false
  private _preferredNodeTypes?: string[]; 
  public get preferredNodeTypes() {
    return this.getListAttribute('preferred_node_types');
  }
  public set preferredNodeTypes(value: string[]) {
    this._preferredNodeTypes = value;
  }
  public resetPreferredNodeTypes() {
    this._preferredNodeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredNodeTypesInput() {
    return this._preferredNodeTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      node_type: cdktf.stringToTerraform(this._nodeType),
      preferred_node_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredNodeTypes),
    };
  }
}
