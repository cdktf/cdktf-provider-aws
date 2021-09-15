// https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#action GuarddutyFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#description GuarddutyFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#detector_id GuarddutyFilter#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#name GuarddutyFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#rank GuarddutyFilter#rank}
  */
  readonly rank: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags GuarddutyFilter#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags_all GuarddutyFilter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * finding_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#finding_criteria GuarddutyFilter#finding_criteria}
  */
  readonly findingCriteria: GuarddutyFilterFindingCriteria[];
}
export interface GuarddutyFilterFindingCriteriaCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#equals GuarddutyFilter#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#field GuarddutyFilter#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than GuarddutyFilter#greater_than}
  */
  readonly greaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than GuarddutyFilter#less_than}
  */
  readonly lessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than_or_equal GuarddutyFilter#less_than_or_equal}
  */
  readonly lessThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#not_equals GuarddutyFilter#not_equals}
  */
  readonly notEquals?: string[];
}

function guarddutyFilterFindingCriteriaCriterionToTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.equalTo),
    field: cdktf.stringToTerraform(struct!.field),
    greater_than: cdktf.stringToTerraform(struct!.greaterThan),
    greater_than_or_equal: cdktf.stringToTerraform(struct!.greaterThanOrEqual),
    less_than: cdktf.stringToTerraform(struct!.lessThan),
    less_than_or_equal: cdktf.stringToTerraform(struct!.lessThanOrEqual),
    not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notEquals),
  }
}

export interface GuarddutyFilterFindingCriteria {
  /**
  * criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#criterion GuarddutyFilter#criterion}
  */
  readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
}

function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criterion: cdktf.listMapper(guarddutyFilterFindingCriteriaCriterionToTerraform)(struct!.criterion),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter}
*/
export class GuarddutyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_guardduty_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_filter',
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
    this._detectorId = config.detectorId;
    this._name = config.name;
    this._rank = config.rank;
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
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

  // rank - computed: false, optional: false, required: true
  private _rank: number;
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank
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
  private _findingCriteria: GuarddutyFilterFindingCriteria[];
  public get findingCriteria() {
    return this.interpolationForAttribute('finding_criteria') as any;
  }
  public set findingCriteria(value: GuarddutyFilterFindingCriteria[]) {
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
      detector_id: cdktf.stringToTerraform(this._detectorId),
      name: cdktf.stringToTerraform(this._name),
      rank: cdktf.numberToTerraform(this._rank),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      finding_criteria: cdktf.listMapper(guarddutyFilterFindingCriteriaToTerraform)(this._findingCriteria),
    };
  }
}
