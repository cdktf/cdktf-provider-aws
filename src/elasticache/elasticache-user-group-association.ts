// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElastiCache
*/
export interface ElasticacheUserGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group_association#user_group_id ElasticacheUserGroupAssociation#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group_association#user_id ElasticacheUserGroupAssociation#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group_association aws_elasticache_user_group_association}
*/
export class ElasticacheUserGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_user_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group_association aws_elasticache_user_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheUserGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheUserGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_user_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.10.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._userGroupId = config.userGroupId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
