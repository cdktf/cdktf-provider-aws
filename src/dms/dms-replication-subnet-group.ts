// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Database Migration Service
*/
export interface DmsReplicationSubnetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}
  */
  readonly replicationSubnetGroupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}
  */
  readonly replicationSubnetGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#subnet_ids DmsReplicationSubnetGroup#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags DmsReplicationSubnetGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags_all DmsReplicationSubnetGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group}
*/
export class DmsReplicationSubnetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dms_replication_subnet_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsReplicationSubnetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DmsReplicationSubnetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_subnet_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._replicationSubnetGroupDescription = config.replicationSubnetGroupDescription;
    this._replicationSubnetGroupId = config.replicationSubnetGroupId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // replication_subnet_group_arn - computed: true, optional: false, required: false
  public get replicationSubnetGroupArn() {
    return this.getStringAttribute('replication_subnet_group_arn');
  }

  // replication_subnet_group_description - computed: false, optional: false, required: true
  private _replicationSubnetGroupDescription?: string; 
  public get replicationSubnetGroupDescription() {
    return this.getStringAttribute('replication_subnet_group_description');
  }
  public set replicationSubnetGroupDescription(value: string) {
    this._replicationSubnetGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupDescriptionInput() {
    return this._replicationSubnetGroupDescription;
  }

  // replication_subnet_group_id - computed: false, optional: false, required: true
  private _replicationSubnetGroupId?: string; 
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }
  public set replicationSubnetGroupId(value: string) {
    this._replicationSubnetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupIdInput() {
    return this._replicationSubnetGroupId;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_subnet_group_description: cdktf.stringToTerraform(this._replicationSubnetGroupDescription),
      replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
