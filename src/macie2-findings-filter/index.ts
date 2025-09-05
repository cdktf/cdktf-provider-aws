/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}
  */
  readonly position?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#region Macie2FindingsFilter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * finding_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}
  */
  readonly findingCriteria: Macie2FindingsFilterFindingCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#timeouts Macie2FindingsFilter#timeouts}
  */
  readonly timeouts?: Macie2FindingsFilterTimeouts;
}
export interface Macie2FindingsFilterFindingCriteriaCriterion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#eq Macie2FindingsFilter#eq}
  */
  readonly eq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}
  */
  readonly eqExactMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#field Macie2FindingsFilter#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#gt Macie2FindingsFilter#gt}
  */
  readonly gt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#gte Macie2FindingsFilter#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#lt Macie2FindingsFilter#lt}
  */
  readonly lt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#lte Macie2FindingsFilter#lte}
  */
  readonly lte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#neq Macie2FindingsFilter#neq}
  */
  readonly neq?: string[];
}

export function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eq),
    eq_exact_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eqExactMatch),
    field: cdktf.stringToTerraform(struct!.field),
    gt: cdktf.stringToTerraform(struct!.gt),
    gte: cdktf.stringToTerraform(struct!.gte),
    lt: cdktf.stringToTerraform(struct!.lt),
    lte: cdktf.stringToTerraform(struct!.lte),
    neq: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neq),
  }
}


export function macie2FindingsFilterFindingCriteriaCriterionToHclTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eq),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    eq_exact_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eqExactMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gt: {
      value: cdktf.stringToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktf.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lt: {
      value: cdktf.stringToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktf.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neq),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Macie2FindingsFilterFindingCriteriaCriterionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._eqExactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqExactMatch = this._eqExactMatch;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._eqExactMatch = undefined;
      this._field = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
      this._neq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._eqExactMatch = value.eqExactMatch;
      this._field = value.field;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
      this._neq = value.neq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string[]; 
  public get eq() {
    return cdktf.Fn.tolist(this.getListAttribute('eq'));
  }
  public set eq(value: string[]) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // eq_exact_match - computed: false, optional: true, required: false
  private _eqExactMatch?: string[]; 
  public get eqExactMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('eq_exact_match'));
  }
  public set eqExactMatch(value: string[]) {
    this._eqExactMatch = value;
  }
  public resetEqExactMatch() {
    this._eqExactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqExactMatchInput() {
    return this._eqExactMatch;
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

  // gt - computed: false, optional: true, required: false
  private _gt?: string; 
  public get gt() {
    return this.getStringAttribute('gt');
  }
  public set gt(value: string) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: string; 
  public get lt() {
    return this.getStringAttribute('lt');
  }
  public set lt(value: string) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string[]; 
  public get neq() {
    return cdktf.Fn.tolist(this.getListAttribute('neq'));
  }
  public set neq(value: string[]) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }
}

export class Macie2FindingsFilterFindingCriteriaCriterionList extends cdktf.ComplexList {
  public internalValue? : Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable

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
  public get(index: number): Macie2FindingsFilterFindingCriteriaCriterionOutputReference {
    return new Macie2FindingsFilterFindingCriteriaCriterionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2FindingsFilterFindingCriteria {
  /**
  * criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}
  */
  readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
}

export function macie2FindingsFilterFindingCriteriaToTerraform(struct?: Macie2FindingsFilterFindingCriteriaOutputReference | Macie2FindingsFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criterion: cdktf.listMapper(macie2FindingsFilterFindingCriteriaCriterionToTerraform, true)(struct!.criterion),
  }
}


export function macie2FindingsFilterFindingCriteriaToHclTerraform(struct?: Macie2FindingsFilterFindingCriteriaOutputReference | Macie2FindingsFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criterion: {
      value: cdktf.listMapperHcl(macie2FindingsFilterFindingCriteriaCriterionToHclTerraform, true)(struct!.criterion),
      isBlock: true,
      type: "set",
      storageClassType: "Macie2FindingsFilterFindingCriteriaCriterionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Macie2FindingsFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2FindingsFilterFindingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criterion = this._criterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2FindingsFilterFindingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criterion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criterion.internalValue = value.criterion;
    }
  }

  // criterion - computed: false, optional: true, required: false
  private _criterion = new Macie2FindingsFilterFindingCriteriaCriterionList(this, "criterion", true);
  public get criterion() {
    return this._criterion;
  }
  public putCriterion(value: Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable) {
    this._criterion.internalValue = value;
  }
  public resetCriterion() {
    this._criterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criterionInput() {
    return this._criterion.internalValue;
  }
}
export interface Macie2FindingsFilterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#create Macie2FindingsFilter#create}
  */
  readonly create?: string;
}

export function macie2FindingsFilterTimeoutsToTerraform(struct?: Macie2FindingsFilterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function macie2FindingsFilterTimeoutsToHclTerraform(struct?: Macie2FindingsFilterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Macie2FindingsFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Macie2FindingsFilterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2FindingsFilterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter aws_macie2_findings_filter}
*/
export class Macie2FindingsFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie2_findings_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Macie2FindingsFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Macie2FindingsFilter to import
  * @param importFromId The id of the existing Macie2FindingsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Macie2FindingsFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie2_findings_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/macie2_findings_filter aws_macie2_findings_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2FindingsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_findings_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
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
    this._id = config.id;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._position = config.position;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._findingCriteria.internalValue = config.findingCriteria;
    this._timeouts.internalValue = config.timeouts;
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
    return this._name;
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
    return this._namePrefix;
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
    return this._position;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _findingCriteria = new Macie2FindingsFilterFindingCriteriaOutputReference(this, "finding_criteria");
  public get findingCriteria() {
    return this._findingCriteria;
  }
  public putFindingCriteria(value: Macie2FindingsFilterFindingCriteria) {
    this._findingCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCriteriaInput() {
    return this._findingCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Macie2FindingsFilterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Macie2FindingsFilterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      position: cdktf.numberToTerraform(this._position),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      finding_criteria: macie2FindingsFilterFindingCriteriaToTerraform(this._findingCriteria.internalValue),
      timeouts: macie2FindingsFilterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      finding_criteria: {
        value: macie2FindingsFilterFindingCriteriaToHclTerraform(this._findingCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Macie2FindingsFilterFindingCriteriaList",
      },
      timeouts: {
        value: macie2FindingsFilterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Macie2FindingsFilterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
