// https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRedshiftClusterCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}
  */
  readonly dbGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}
  */
  readonly dbUser: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials}
*/
export class DataAwsRedshiftClusterCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_cluster_credentials";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRedshiftClusterCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_cluster_credentials',
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
    this._autoCreate = config.autoCreate;
    this._clusterIdentifier = config.clusterIdentifier;
    this._dbGroups = config.dbGroups;
    this._dbName = config.dbName;
    this._dbUser = config.dbUser;
    this._durationSeconds = config.durationSeconds;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create - computed: false, optional: true, required: false
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
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

  // db_groups - computed: false, optional: true, required: false
  private _dbGroups?: string[]; 
  public get dbGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('db_groups'));
  }
  public set dbGroups(value: string[]) {
    this._dbGroups = value;
  }
  public resetDbGroups() {
    this._dbGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbGroupsInput() {
    return this._dbGroups;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_password - computed: true, optional: false, required: false
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }

  // db_user - computed: false, optional: false, required: true
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      db_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbGroups),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_user: cdktf.stringToTerraform(this._dbUser),
      duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
