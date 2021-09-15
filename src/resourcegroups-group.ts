// https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#description ResourcegroupsGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#name ResourcegroupsGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags ResourcegroupsGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags_all ResourcegroupsGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * resource_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#resource_query ResourcegroupsGroup#resource_query}
  */
  readonly resourceQuery: ResourcegroupsGroupResourceQuery[];
}
export interface ResourcegroupsGroupResourceQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#query ResourcegroupsGroup#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#type ResourcegroupsGroup#type}
  */
  readonly type?: string;
}

function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group}
*/
export class ResourcegroupsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_resourcegroups_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcegroupsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resourcegroups_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._resourceQuery = config.resourceQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // resource_query - computed: false, optional: false, required: true
  private _resourceQuery: ResourcegroupsGroupResourceQuery[];
  public get resourceQuery() {
    return this.interpolationForAttribute('resource_query') as any;
  }
  public set resourceQuery(value: ResourcegroupsGroupResourceQuery[]) {
    this._resourceQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      resource_query: cdktf.listMapper(resourcegroupsGroupResourceQueryToTerraform)(this._resourceQuery),
    };
  }
}
