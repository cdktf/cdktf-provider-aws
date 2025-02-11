// https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDmsReplicationSubnetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group#id DataAwsDmsReplicationSubnetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group#replication_subnet_group_id DataAwsDmsReplicationSubnetGroup#replication_subnet_group_id}
  */
  readonly replicationSubnetGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group#tags DataAwsDmsReplicationSubnetGroup#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group aws_dms_replication_subnet_group}
*/
export class DataAwsDmsReplicationSubnetGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_replication_subnet_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDmsReplicationSubnetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDmsReplicationSubnetGroup to import
  * @param importFromId The id of the existing DataAwsDmsReplicationSubnetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDmsReplicationSubnetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_replication_subnet_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/dms_replication_subnet_group aws_dms_replication_subnet_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDmsReplicationSubnetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDmsReplicationSubnetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_subnet_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.1',
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
    this._id = config.id;
    this._replicationSubnetGroupId = config.replicationSubnetGroupId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // replication_subnet_group_arn - computed: true, optional: false, required: false
  public get replicationSubnetGroupArn() {
    return this.getStringAttribute('replication_subnet_group_arn');
  }

  // replication_subnet_group_description - computed: true, optional: false, required: false
  public get replicationSubnetGroupDescription() {
    return this.getStringAttribute('replication_subnet_group_description');
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

  // subnet_group_status - computed: true, optional: false, required: false
  public get subnetGroupStatus() {
    return this.getStringAttribute('subnet_group_status');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
      id: cdktf.stringToTerraform(this._id),
      replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_subnet_group_id: {
        value: cdktf.stringToHclTerraform(this._replicationSubnetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
