// https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GuarddutyFilterConfig extends TerraformMetaArguments {
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
  readonly equals?: string[];
  readonly field: string;
  readonly greaterThan?: string;
  readonly greaterThanOrEqual?: string;
  readonly lessThan?: string;
  readonly lessThanOrEqual?: string;
  readonly notEquals?: string[];
}
export interface GuarddutyFilterFindingCriteria {
  /** criterion block */
  readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
}

// Resource

export class GuarddutyFilter extends TerraformResource {

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
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // rank - computed: false, optional: false, required: true
  private _rank: number;
  public get rank() {
    return this._rank;
  }
  public set rank(value: number) {
    this._rank = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // finding_criteria - computed: false, optional: false, required: true
  private _findingCriteria: GuarddutyFilterFindingCriteria[];
  public get findingCriteria() {
    return this._findingCriteria;
  }
  public set findingCriteria(value: GuarddutyFilterFindingCriteria[]) {
    this._findingCriteria = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      description: this._description,
      detector_id: this._detectorId,
      name: this._name,
      rank: this._rank,
      tags: this._tags,
      finding_criteria: this._findingCriteria,
    };
  }
}
