// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrLifecyclePolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#rule DataAwsEcrLifecyclePolicyDocument#rule}
  */
  readonly rule?: DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable;
}
export interface DataAwsEcrLifecyclePolicyDocumentRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#type DataAwsEcrLifecyclePolicyDocument#type}
  */
  readonly type: string;
}

export function dataAwsEcrLifecyclePolicyDocumentRuleActionToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataAwsEcrLifecyclePolicyDocumentRuleActionToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataAwsEcrLifecyclePolicyDocumentRuleActionList extends cdktf.ComplexList {
  public internalValue? : DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference {
    return new DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEcrLifecyclePolicyDocumentRuleSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#count_number DataAwsEcrLifecyclePolicyDocument#count_number}
  */
  readonly countNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#count_type DataAwsEcrLifecyclePolicyDocument#count_type}
  */
  readonly countType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#count_unit DataAwsEcrLifecyclePolicyDocument#count_unit}
  */
  readonly countUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#tag_pattern_list DataAwsEcrLifecyclePolicyDocument#tag_pattern_list}
  */
  readonly tagPatternList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#tag_prefix_list DataAwsEcrLifecyclePolicyDocument#tag_prefix_list}
  */
  readonly tagPrefixList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#tag_status DataAwsEcrLifecyclePolicyDocument#tag_status}
  */
  readonly tagStatus: string;
}

export function dataAwsEcrLifecyclePolicyDocumentRuleSelectionToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count_number: cdktf.numberToTerraform(struct!.countNumber),
    count_type: cdktf.stringToTerraform(struct!.countType),
    count_unit: cdktf.stringToTerraform(struct!.countUnit),
    tag_pattern_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagPatternList),
    tag_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagPrefixList),
    tag_status: cdktf.stringToTerraform(struct!.tagStatus),
  }
}


export function dataAwsEcrLifecyclePolicyDocumentRuleSelectionToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count_number: {
      value: cdktf.numberToHclTerraform(struct!.countNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count_type: {
      value: cdktf.stringToHclTerraform(struct!.countType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count_unit: {
      value: cdktf.stringToHclTerraform(struct!.countUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_pattern_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagPatternList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagPrefixList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_status: {
      value: cdktf.stringToHclTerraform(struct!.tagStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.countNumber = this._countNumber;
    }
    if (this._countType !== undefined) {
      hasAnyValues = true;
      internalValueResult.countType = this._countType;
    }
    if (this._countUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.countUnit = this._countUnit;
    }
    if (this._tagPatternList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPatternList = this._tagPatternList;
    }
    if (this._tagPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPrefixList = this._tagPrefixList;
    }
    if (this._tagStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStatus = this._tagStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countNumber = undefined;
      this._countType = undefined;
      this._countUnit = undefined;
      this._tagPatternList = undefined;
      this._tagPrefixList = undefined;
      this._tagStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countNumber = value.countNumber;
      this._countType = value.countType;
      this._countUnit = value.countUnit;
      this._tagPatternList = value.tagPatternList;
      this._tagPrefixList = value.tagPrefixList;
      this._tagStatus = value.tagStatus;
    }
  }

  // count_number - computed: false, optional: false, required: true
  private _countNumber?: number; 
  public get countNumber() {
    return this.getNumberAttribute('count_number');
  }
  public set countNumber(value: number) {
    this._countNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countNumberInput() {
    return this._countNumber;
  }

  // count_type - computed: false, optional: false, required: true
  private _countType?: string; 
  public get countType() {
    return this.getStringAttribute('count_type');
  }
  public set countType(value: string) {
    this._countType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countTypeInput() {
    return this._countType;
  }

  // count_unit - computed: false, optional: true, required: false
  private _countUnit?: string; 
  public get countUnit() {
    return this.getStringAttribute('count_unit');
  }
  public set countUnit(value: string) {
    this._countUnit = value;
  }
  public resetCountUnit() {
    this._countUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countUnitInput() {
    return this._countUnit;
  }

  // tag_pattern_list - computed: false, optional: true, required: false
  private _tagPatternList?: string[]; 
  public get tagPatternList() {
    return this.getListAttribute('tag_pattern_list');
  }
  public set tagPatternList(value: string[]) {
    this._tagPatternList = value;
  }
  public resetTagPatternList() {
    this._tagPatternList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPatternListInput() {
    return this._tagPatternList;
  }

  // tag_prefix_list - computed: false, optional: true, required: false
  private _tagPrefixList?: string[]; 
  public get tagPrefixList() {
    return this.getListAttribute('tag_prefix_list');
  }
  public set tagPrefixList(value: string[]) {
    this._tagPrefixList = value;
  }
  public resetTagPrefixList() {
    this._tagPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPrefixListInput() {
    return this._tagPrefixList;
  }

  // tag_status - computed: false, optional: false, required: true
  private _tagStatus?: string; 
  public get tagStatus() {
    return this.getStringAttribute('tag_status');
  }
  public set tagStatus(value: string) {
    this._tagStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStatusInput() {
    return this._tagStatus;
  }
}

export class DataAwsEcrLifecyclePolicyDocumentRuleSelectionList extends cdktf.ComplexList {
  public internalValue? : DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference {
    return new DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEcrLifecyclePolicyDocumentRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#description DataAwsEcrLifecyclePolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#priority DataAwsEcrLifecyclePolicyDocument#priority}
  */
  readonly priority: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#action DataAwsEcrLifecyclePolicyDocument#action}
  */
  readonly action?: DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#selection DataAwsEcrLifecyclePolicyDocument#selection}
  */
  readonly selection?: DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable;
}

export function dataAwsEcrLifecyclePolicyDocumentRuleToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: cdktf.listMapper(dataAwsEcrLifecyclePolicyDocumentRuleActionToTerraform, true)(struct!.action),
    selection: cdktf.listMapper(dataAwsEcrLifecyclePolicyDocumentRuleSelectionToTerraform, true)(struct!.selection),
  }
}


export function dataAwsEcrLifecyclePolicyDocumentRuleToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: cdktf.listMapperHcl(dataAwsEcrLifecyclePolicyDocumentRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsEcrLifecyclePolicyDocumentRuleActionList",
    },
    selection: {
      value: cdktf.listMapperHcl(dataAwsEcrLifecyclePolicyDocumentRuleSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsEcrLifecyclePolicyDocumentRuleSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEcrLifecyclePolicyDocumentRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._selection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
      this._selection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._priority = value.priority;
      this._action.internalValue = value.action;
      this._selection.internalValue = value.selection;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataAwsEcrLifecyclePolicyDocumentRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // selection - computed: false, optional: true, required: false
  private _selection = new DataAwsEcrLifecyclePolicyDocumentRuleSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable) {
    this._selection.internalValue = value;
  }
  public resetSelection() {
    this._selection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection.internalValue;
  }
}

export class DataAwsEcrLifecyclePolicyDocumentRuleList extends cdktf.ComplexList {
  public internalValue? : DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleOutputReference {
    return new DataAwsEcrLifecyclePolicyDocumentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document aws_ecr_lifecycle_policy_document}
*/
export class DataAwsEcrLifecyclePolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_lifecycle_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEcrLifecyclePolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEcrLifecyclePolicyDocument to import
  * @param importFromId The id of the existing DataAwsEcrLifecyclePolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEcrLifecyclePolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_lifecycle_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/ecr_lifecycle_policy_document aws_ecr_lifecycle_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrLifecyclePolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrLifecyclePolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_lifecycle_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new DataAwsEcrLifecyclePolicyDocumentRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule: cdktf.listMapper(dataAwsEcrLifecyclePolicyDocumentRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: cdktf.listMapperHcl(dataAwsEcrLifecyclePolicyDocumentRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsEcrLifecyclePolicyDocumentRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
