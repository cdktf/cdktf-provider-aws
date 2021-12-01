// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface RdsClusterEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}
  */
  readonly clusterEndpointIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_identifier RdsClusterEndpoint#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}
  */
  readonly customEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#excluded_members RdsClusterEndpoint#excluded_members}
  */
  readonly excludedMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#static_members RdsClusterEndpoint#static_members}
  */
  readonly staticMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags RdsClusterEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags_all RdsClusterEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint}
*/
export class RdsClusterEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_rds_cluster_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._customEndpointType = config.customEndpointType;
    this._excludedMembers = config.excludedMembers;
    this._staticMembers = config.staticMembers;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_endpoint_identifier - computed: false, optional: false, required: true
  private _clusterEndpointIdentifier?: string; 
  public get clusterEndpointIdentifier() {
    return this.getStringAttribute('cluster_endpoint_identifier');
  }
  public set clusterEndpointIdentifier(value: string) {
    this._clusterEndpointIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointIdentifierInput() {
    return this._clusterEndpointIdentifier;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // custom_endpoint_type - computed: false, optional: false, required: true
  private _customEndpointType?: string; 
  public get customEndpointType() {
    return this.getStringAttribute('custom_endpoint_type');
  }
  public set customEndpointType(value: string) {
    this._customEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointTypeInput() {
    return this._customEndpointType;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // excluded_members - computed: false, optional: true, required: false
  private _excludedMembers?: string[]; 
  public get excludedMembers() {
    return this.getListAttribute('excluded_members');
  }
  public set excludedMembers(value: string[]) {
    this._excludedMembers = value;
  }
  public resetExcludedMembers() {
    this._excludedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedMembersInput() {
    return this._excludedMembers;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // static_members - computed: false, optional: true, required: false
  private _staticMembers?: string[]; 
  public get staticMembers() {
    return this.getListAttribute('static_members');
  }
  public set staticMembers(value: string[]) {
    this._staticMembers = value;
  }
  public resetStaticMembers() {
    this._staticMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMembersInput() {
    return this._staticMembers;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      custom_endpoint_type: cdktf.stringToTerraform(this._customEndpointType),
      excluded_members: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedMembers),
      static_members: cdktf.listMapper(cdktf.stringToTerraform)(this._staticMembers),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
