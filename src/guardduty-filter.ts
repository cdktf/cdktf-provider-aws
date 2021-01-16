// https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
  readonly action: string;
  readonly description?: string;
  readonly detectorId: string;
  readonly name: string;
  readonly rank: number;
  readonly tags?: { [key: string]: string };
  /** finding_criteria block */
  readonly findingCriteria: GuarddutyFilterFindingCriteria[];
}
export interface GuarddutyFilterFindingCriteriaCriterion {
  readonly equalTo?: string[];
  readonly field: string;
  readonly greaterThan?: string;
  readonly greaterThanOrEqual?: string;
  readonly lessThan?: string;
  readonly lessThanOrEqual?: string;
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
  /** criterion block */
  readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
}

function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criterion: cdktf.listMapper(guarddutyFilterFindingCriteriaCriterionToTerraform)(struct!.criterion),
  }
}


// Resource

export class GuarddutyFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      finding_criteria: cdktf.listMapper(guarddutyFilterFindingCriteriaToTerraform)(this._findingCriteria),
    };
  }
}
