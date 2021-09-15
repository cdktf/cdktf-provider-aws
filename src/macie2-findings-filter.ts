// https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#action Macie2FindingsFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#description Macie2FindingsFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name Macie2FindingsFilter#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name_prefix Macie2FindingsFilter#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#position Macie2FindingsFilter#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags Macie2FindingsFilter#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags_all Macie2FindingsFilter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * finding_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#finding_criteria Macie2FindingsFilter#finding_criteria}
  */
  readonly findingCriteria: Macie2FindingsFilterFindingCriteria[];
}
export interface Macie2FindingsFilterFindingCriteriaCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq Macie2FindingsFilter#eq}
  */
  readonly eq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq_exact_match Macie2FindingsFilter#eq_exact_match}
  */
  readonly eqExactMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#field Macie2FindingsFilter#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gt Macie2FindingsFilter#gt}
  */
  readonly gt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gte Macie2FindingsFilter#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lt Macie2FindingsFilter#lt}
  */
  readonly lt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lte Macie2FindingsFilter#lte}
  */
  readonly lte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#neq Macie2FindingsFilter#neq}
  */
  readonly neq?: string[];
}

function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eq),
    eq_exact_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eqExactMatch),
    field: cdktf.stringToTerraform(struct!.field),
    gt: cdktf.stringToTerraform(struct!.gt),
    gte: cdktf.stringToTerraform(struct!.gte),
    lt: cdktf.stringToTerraform(struct!.lt),
    lte: cdktf.stringToTerraform(struct!.lte),
    neq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.neq),
  }
}

export interface Macie2FindingsFilterFindingCriteria {
  /**
  * criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#criterion Macie2FindingsFilter#criterion}
  */
  readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[];
}

function macie2FindingsFilterFindingCriteriaToTerraform(struct?: Macie2FindingsFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criterion: cdktf.listMapper(macie2FindingsFilterFindingCriteriaCriterionToTerraform)(struct!.criterion),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter}
*/
export class Macie2FindingsFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_findings_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2FindingsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_findings_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._position = config.position;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._findingCriteria = config.findingCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

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

  // position - computed: true, optional: true, required: false
  private _position?: number;
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position
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

  // finding_criteria - computed: false, optional: false, required: true
  private _findingCriteria: Macie2FindingsFilterFindingCriteria[];
  public get findingCriteria() {
    return this.interpolationForAttribute('finding_criteria') as any;
  }
  public set findingCriteria(value: Macie2FindingsFilterFindingCriteria[]) {
    this._findingCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCriteriaInput() {
    return this._findingCriteria
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      position: cdktf.numberToTerraform(this._position),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      finding_criteria: cdktf.listMapper(macie2FindingsFilterFindingCriteriaToTerraform)(this._findingCriteria),
    };
  }
}
