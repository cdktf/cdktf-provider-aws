// https://www.terraform.io/docs/providers/aws/r/guardduty_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}
  */
  readonly rank: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * finding_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}
  */
  readonly findingCriteria: GuarddutyFilterFindingCriteria;
}
export interface GuarddutyFilterFindingCriteriaCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#equals GuarddutyFilter#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#field GuarddutyFilter#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than GuarddutyFilter#greater_than}
  */
  readonly greaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}
  */
  readonly greaterThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than GuarddutyFilter#less_than}
  */
  readonly lessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}
  */
  readonly lessThanOrEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#not_equals GuarddutyFilter#not_equals}
  */
  readonly notEquals?: string[];
}

export function guarddutyFilterFindingCriteriaCriterionToTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.equalTo),
    field: cdktf.stringToTerraform(struct!.field),
    greater_than: cdktf.stringToTerraform(struct!.greaterThan),
    greater_than_or_equal: cdktf.stringToTerraform(struct!.greaterThanOrEqual),
    less_than: cdktf.stringToTerraform(struct!.lessThan),
    less_than_or_equal: cdktf.stringToTerraform(struct!.lessThanOrEqual),
    not_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEquals),
  }
}

export class GuarddutyFilterFindingCriteriaCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._greaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan;
    }
    if (this._greaterThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThanOrEqual = this._greaterThanOrEqual;
    }
    if (this._lessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan;
    }
    if (this._lessThanOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThanOrEqual = this._lessThanOrEqual;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._greaterThan = undefined;
      this._greaterThanOrEqual = undefined;
      this._lessThan = undefined;
      this._lessThanOrEqual = undefined;
      this._notEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equals = value.equalTo;
      this._field = value.field;
      this._greaterThan = value.greaterThan;
      this._greaterThanOrEqual = value.greaterThanOrEqual;
      this._lessThan = value.lessThan;
      this._lessThanOrEqual = value.lessThanOrEqual;
      this._notEquals = value.notEquals;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return this.getListAttribute('equals');
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // greater_than - computed: false, optional: true, required: false
  private _greaterThan?: string; 
  public get greaterThan() {
    return this.getStringAttribute('greater_than');
  }
  public set greaterThan(value: string) {
    this._greaterThan = value;
  }
  public resetGreaterThan() {
    this._greaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan;
  }

  // greater_than_or_equal - computed: false, optional: true, required: false
  private _greaterThanOrEqual?: string; 
  public get greaterThanOrEqual() {
    return this.getStringAttribute('greater_than_or_equal');
  }
  public set greaterThanOrEqual(value: string) {
    this._greaterThanOrEqual = value;
  }
  public resetGreaterThanOrEqual() {
    this._greaterThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanOrEqualInput() {
    return this._greaterThanOrEqual;
  }

  // less_than - computed: false, optional: true, required: false
  private _lessThan?: string; 
  public get lessThan() {
    return this.getStringAttribute('less_than');
  }
  public set lessThan(value: string) {
    this._lessThan = value;
  }
  public resetLessThan() {
    this._lessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan;
  }

  // less_than_or_equal - computed: false, optional: true, required: false
  private _lessThanOrEqual?: string; 
  public get lessThanOrEqual() {
    return this.getStringAttribute('less_than_or_equal');
  }
  public set lessThanOrEqual(value: string) {
    this._lessThanOrEqual = value;
  }
  public resetLessThanOrEqual() {
    this._lessThanOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanOrEqualInput() {
    return this._lessThanOrEqual;
  }

  // not_equals - computed: false, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return this.getListAttribute('not_equals');
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }
}

export class GuarddutyFilterFindingCriteriaCriterionList extends cdktf.ComplexList {
  public internalValue? : GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GuarddutyFilterFindingCriteriaCriterionOutputReference {
    return new GuarddutyFilterFindingCriteriaCriterionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuarddutyFilterFindingCriteria {
  /**
  * criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#criterion GuarddutyFilter#criterion}
  */
  readonly criterion: GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
}

export function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteriaOutputReference | GuarddutyFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criterion: cdktf.listMapper(guarddutyFilterFindingCriteriaCriterionToTerraform, true)(struct!.criterion),
  }
}

export class GuarddutyFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyFilterFindingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criterion = this._criterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyFilterFindingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criterion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criterion.internalValue = value.criterion;
    }
  }

  // criterion - computed: false, optional: false, required: true
  private _criterion = new GuarddutyFilterFindingCriteriaCriterionList(this, "criterion", true);
  public get criterion() {
    return this._criterion;
  }
  public putCriterion(value: GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable) {
    this._criterion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criterionInput() {
    return this._criterion.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter aws_guardduty_filter}
*/
export class GuarddutyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter aws_guardduty_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._name = config.name;
    this._rank = config.rank;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._findingCriteria.internalValue = config.findingCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

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

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // finding_criteria - computed: false, optional: false, required: true
  private _findingCriteria = new GuarddutyFilterFindingCriteriaOutputReference(this, "finding_criteria");
  public get findingCriteria() {
    return this._findingCriteria;
  }
  public putFindingCriteria(value: GuarddutyFilterFindingCriteria) {
    this._findingCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCriteriaInput() {
    return this._findingCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rank: cdktf.numberToTerraform(this._rank),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      finding_criteria: guarddutyFilterFindingCriteriaToTerraform(this._findingCriteria.internalValue),
    };
  }
}
