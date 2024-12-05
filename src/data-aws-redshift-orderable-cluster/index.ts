// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRedshiftOrderableClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}
  */
  readonly preferredNodeTypes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster aws_redshift_orderable_cluster}
*/
export class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_orderable_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRedshiftOrderableCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRedshiftOrderableCluster to import
  * @param importFromId The id of the existing DataAwsRedshiftOrderableCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRedshiftOrderableCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_orderable_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/redshift_orderable_cluster aws_redshift_orderable_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRedshiftOrderableClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRedshiftOrderableClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_orderable_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.80.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
      node_type: cdktf.stringToTerraform(this._nodeType),
      preferred_node_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredNodeTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_node_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredNodeTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
