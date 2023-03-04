// https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterRoleAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association#db_cluster_identifier RdsClusterRoleAssociation#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association#feature_name RdsClusterRoleAssociation#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association#id RdsClusterRoleAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association#role_arn RdsClusterRoleAssociation#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association aws_rds_cluster_role_association}
*/
export class RdsClusterRoleAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster_role_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association aws_rds_cluster_role_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterRoleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RdsClusterRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_role_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._featureName = config.featureName;
    this._id = config.id;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
      feature_name: cdktf.stringToTerraform(this._featureName),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
