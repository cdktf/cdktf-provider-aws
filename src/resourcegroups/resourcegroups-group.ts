// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Resource Groups
*/
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
  readonly resourceQuery: ResourcegroupsGroupResourceQuery;
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

export function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryOutputReference | ResourcegroupsGroupResourceQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ResourcegroupsGroupResourceQueryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ResourcegroupsGroupResourceQuery | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._query) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcegroupsGroupResourceQuery | undefined) {
    if (value === undefined) {
      this._query = undefined;
      this._type = undefined;
    }
    else {
      this._query = value.query;
      this._type = value.type;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
    this._resourceQuery.internalValue = config.resourceQuery;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // resource_query - computed: false, optional: false, required: true
  private _resourceQuery = new ResourcegroupsGroupResourceQueryOutputReference(this as any, "resource_query", true);
  public get resourceQuery() {
    return this._resourceQuery;
  }
  public putResourceQuery(value: ResourcegroupsGroupResourceQuery) {
    this._resourceQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery.internalValue;
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
      resource_query: resourcegroupsGroupResourceQueryToTerraform(this._resourceQuery.internalValue),
    };
  }
}
