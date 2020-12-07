// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocdbClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly family: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly tags?: { [key: string]: string };
  /** parameter block */
  readonly parameter?: DocdbClusterParameterGroupParameter[];
}
export interface DocdbClusterParameterGroupParameter {
  readonly applyMethod?: string;
  readonly name: string;
  readonly value: string;
}

function docdbClusterParameterGroupParameterToTerraform(struct?: DocdbClusterParameterGroupParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    apply_method: cdktf.stringToTerraform(struct!.applyMethod),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class DocdbClusterParameterGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DocdbClusterParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._family = config.family;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._parameter = config.parameter;
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

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
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

  // parameter - computed: false, optional: true, required: false
  private _parameter?: DocdbClusterParameterGroupParameter[];
  public get parameter() {
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: DocdbClusterParameterGroupParameter[] ) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      family: cdktf.stringToTerraform(this._family),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      parameter: cdktf.listMapper(docdbClusterParameterGroupParameterToTerraform)(this._parameter),
    };
  }
}
