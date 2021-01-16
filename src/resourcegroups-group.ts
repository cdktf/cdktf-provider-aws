// https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** resource_query block */
  readonly resourceQuery: ResourcegroupsGroupResourceQuery[];
}
export interface ResourcegroupsGroupResourceQuery {
  readonly query: string;
  readonly type?: string;
}

function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class ResourcegroupsGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      resource_query: cdktf.listMapper(resourcegroupsGroupResourceQueryToTerraform)(this._resourceQuery),
    };
  }
}
