// https://www.terraform.io/docs/providers/aws/r/evidently_launch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvidentlyLaunchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}
  */
  readonly randomizationSalt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}
  */
  readonly groups: EvidentlyLaunchGroups[] | cdktf.IResolvable;
  /**
  * metric_monitors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}
  */
  readonly metricMonitors?: EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable;
  /**
  * scheduled_splits_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}
  */
  readonly scheduledSplitsConfig?: EvidentlyLaunchScheduledSplitsConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}
  */
  readonly timeouts?: EvidentlyLaunchTimeouts;
}
export interface EvidentlyLaunchExecution {
}

export function evidentlyLaunchExecutionToTerraform(struct?: EvidentlyLaunchExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class EvidentlyLaunchExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EvidentlyLaunchExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_time - computed: true, optional: false, required: false
  public get endedTime() {
    return this.getStringAttribute('ended_time');
  }

  // started_time - computed: true, optional: false, required: false
  public get startedTime() {
    return this.getStringAttribute('started_time');
  }
}

export class EvidentlyLaunchExecutionList extends cdktf.ComplexList {

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
  public get(index: number): EvidentlyLaunchExecutionOutputReference {
    return new EvidentlyLaunchExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}
  */
  readonly variation: string;
}

export function evidentlyLaunchGroupsToTerraform(struct?: EvidentlyLaunchGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    feature: cdktf.stringToTerraform(struct!.feature),
    name: cdktf.stringToTerraform(struct!.name),
    variation: cdktf.stringToTerraform(struct!.variation),
  }
}

export class EvidentlyLaunchGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._feature = undefined;
      this._name = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._feature = value.feature;
      this._name = value.name;
      this._variation = value.variation;
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

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // variation - computed: false, optional: false, required: true
  private _variation?: string; 
  public get variation() {
    return this.getStringAttribute('variation');
  }
  public set variation(value: string) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class EvidentlyLaunchGroupsList extends cdktf.ComplexList {
  public internalValue? : EvidentlyLaunchGroups[] | cdktf.IResolvable

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
  public get(index: number): EvidentlyLaunchGroupsOutputReference {
    return new EvidentlyLaunchGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchMetricMonitorsMetricDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}
  */
  readonly entityIdKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}
  */
  readonly eventPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}
  */
  readonly unitLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}
  */
  readonly valueKey: string;
}

export function evidentlyLaunchMetricMonitorsMetricDefinitionToTerraform(struct?: EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference | EvidentlyLaunchMetricMonitorsMetricDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id_key: cdktf.stringToTerraform(struct!.entityIdKey),
    event_pattern: cdktf.stringToTerraform(struct!.eventPattern),
    name: cdktf.stringToTerraform(struct!.name),
    unit_label: cdktf.stringToTerraform(struct!.unitLabel),
    value_key: cdktf.stringToTerraform(struct!.valueKey),
  }
}

export class EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EvidentlyLaunchMetricMonitorsMetricDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdKey = this._entityIdKey;
    }
    if (this._eventPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitLabel = this._unitLabel;
    }
    if (this._valueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueKey = this._valueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchMetricMonitorsMetricDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityIdKey = undefined;
      this._eventPattern = undefined;
      this._name = undefined;
      this._unitLabel = undefined;
      this._valueKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityIdKey = value.entityIdKey;
      this._eventPattern = value.eventPattern;
      this._name = value.name;
      this._unitLabel = value.unitLabel;
      this._valueKey = value.valueKey;
    }
  }

  // entity_id_key - computed: false, optional: false, required: true
  private _entityIdKey?: string; 
  public get entityIdKey() {
    return this.getStringAttribute('entity_id_key');
  }
  public set entityIdKey(value: string) {
    this._entityIdKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdKeyInput() {
    return this._entityIdKey;
  }

  // event_pattern - computed: false, optional: true, required: false
  private _eventPattern?: string; 
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }
  public set eventPattern(value: string) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern;
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

  // unit_label - computed: false, optional: true, required: false
  private _unitLabel?: string; 
  public get unitLabel() {
    return this.getStringAttribute('unit_label');
  }
  public set unitLabel(value: string) {
    this._unitLabel = value;
  }
  public resetUnitLabel() {
    this._unitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitLabelInput() {
    return this._unitLabel;
  }

  // value_key - computed: false, optional: false, required: true
  private _valueKey?: string; 
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
  public set valueKey(value: string) {
    this._valueKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyInput() {
    return this._valueKey;
  }
}
export interface EvidentlyLaunchMetricMonitors {
  /**
  * metric_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}
  */
  readonly metricDefinition: EvidentlyLaunchMetricMonitorsMetricDefinition;
}

export function evidentlyLaunchMetricMonitorsToTerraform(struct?: EvidentlyLaunchMetricMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_definition: evidentlyLaunchMetricMonitorsMetricDefinitionToTerraform(struct!.metricDefinition),
  }
}

export class EvidentlyLaunchMetricMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchMetricMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinition = this._metricDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchMetricMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDefinition.internalValue = value.metricDefinition;
    }
  }

  // metric_definition - computed: false, optional: false, required: true
  private _metricDefinition = new EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(this, "metric_definition");
  public get metricDefinition() {
    return this._metricDefinition;
  }
  public putMetricDefinition(value: EvidentlyLaunchMetricMonitorsMetricDefinition) {
    this._metricDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionInput() {
    return this._metricDefinition.internalValue;
  }
}

export class EvidentlyLaunchMetricMonitorsList extends cdktf.ComplexList {
  public internalValue? : EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable

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
  public get(index: number): EvidentlyLaunchMetricMonitorsOutputReference {
    return new EvidentlyLaunchMetricMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}
  */
  readonly evaluationOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}
  */
  readonly weights: { [key: string]: number };
}

export function evidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_order: cdktf.numberToTerraform(struct!.evaluationOrder),
    segment: cdktf.stringToTerraform(struct!.segment),
    weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.weights),
  }
}

export class EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationOrder = this._evaluationOrder;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._weights !== undefined) {
      hasAnyValues = true;
      internalValueResult.weights = this._weights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationOrder = undefined;
      this._segment = undefined;
      this._weights = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationOrder = value.evaluationOrder;
      this._segment = value.segment;
      this._weights = value.weights;
    }
  }

  // evaluation_order - computed: false, optional: false, required: true
  private _evaluationOrder?: number; 
  public get evaluationOrder() {
    return this.getNumberAttribute('evaluation_order');
  }
  public set evaluationOrder(value: number) {
    this._evaluationOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderInput() {
    return this._evaluationOrder;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // weights - computed: false, optional: false, required: true
  private _weights?: { [key: string]: number }; 
  public get weights() {
    return this.getNumberMapAttribute('weights');
  }
  public set weights(value: { [key: string]: number }) {
    this._weights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList extends cdktf.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfigSteps {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}
  */
  readonly groupWeights: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}
  */
  readonly startTime: string;
  /**
  * segment_overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}
  */
  readonly segmentOverrides?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable;
}

export function evidentlyLaunchScheduledSplitsConfigStepsToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.groupWeights),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    segment_overrides: cdktf.listMapper(evidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesToTerraform, true)(struct!.segmentOverrides),
  }
}

export class EvidentlyLaunchScheduledSplitsConfigStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWeights = this._groupWeights;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._segmentOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentOverrides = this._segmentOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupWeights = undefined;
      this._startTime = undefined;
      this._segmentOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupWeights = value.groupWeights;
      this._startTime = value.startTime;
      this._segmentOverrides.internalValue = value.segmentOverrides;
    }
  }

  // group_weights - computed: false, optional: false, required: true
  private _groupWeights?: { [key: string]: number }; 
  public get groupWeights() {
    return this.getNumberMapAttribute('group_weights');
  }
  public set groupWeights(value: { [key: string]: number }) {
    this._groupWeights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWeightsInput() {
    return this._groupWeights;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // segment_overrides - computed: false, optional: true, required: false
  private _segmentOverrides = new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(this, "segment_overrides", false);
  public get segmentOverrides() {
    return this._segmentOverrides;
  }
  public putSegmentOverrides(value: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable) {
    this._segmentOverrides.internalValue = value;
  }
  public resetSegmentOverrides() {
    this._segmentOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOverridesInput() {
    return this._segmentOverrides.internalValue;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigStepsList extends cdktf.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfig {
  /**
  * steps block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}
  */
  readonly steps: EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable;
}

export function evidentlyLaunchScheduledSplitsConfigToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigOutputReference | EvidentlyLaunchScheduledSplitsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps: cdktf.listMapper(evidentlyLaunchScheduledSplitsConfigStepsToTerraform, true)(struct!.steps),
  }
}

export class EvidentlyLaunchScheduledSplitsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._steps.internalValue = value.steps;
    }
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new EvidentlyLaunchScheduledSplitsConfigStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface EvidentlyLaunchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}
  */
  readonly update?: string;
}

export function evidentlyLaunchTimeoutsToTerraform(struct?: EvidentlyLaunchTimeoutsOutputReference | EvidentlyLaunchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EvidentlyLaunchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EvidentlyLaunchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}
*/
export class EvidentlyLaunch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_evidently_launch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvidentlyLaunchConfig
  */
  public constructor(scope: Construct, id: string, config: EvidentlyLaunchConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_evidently_launch',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._randomizationSalt = config.randomizationSalt;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._groups.internalValue = config.groups;
    this._metricMonitors.internalValue = config.metricMonitors;
    this._scheduledSplitsConfig.internalValue = config.scheduledSplitsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // execution - computed: true, optional: false, required: false
  private _execution = new EvidentlyLaunchExecutionList(this, "execution", false);
  public get execution() {
    return this._execution;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // randomization_salt - computed: false, optional: true, required: false
  private _randomizationSalt?: string; 
  public get randomizationSalt() {
    return this.getStringAttribute('randomization_salt');
  }
  public set randomizationSalt(value: string) {
    this._randomizationSalt = value;
  }
  public resetRandomizationSalt() {
    this._randomizationSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizationSaltInput() {
    return this._randomizationSalt;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new EvidentlyLaunchGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: EvidentlyLaunchGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // metric_monitors - computed: false, optional: true, required: false
  private _metricMonitors = new EvidentlyLaunchMetricMonitorsList(this, "metric_monitors", false);
  public get metricMonitors() {
    return this._metricMonitors;
  }
  public putMetricMonitors(value: EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable) {
    this._metricMonitors.internalValue = value;
  }
  public resetMetricMonitors() {
    this._metricMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMonitorsInput() {
    return this._metricMonitors.internalValue;
  }

  // scheduled_splits_config - computed: false, optional: true, required: false
  private _scheduledSplitsConfig = new EvidentlyLaunchScheduledSplitsConfigOutputReference(this, "scheduled_splits_config");
  public get scheduledSplitsConfig() {
    return this._scheduledSplitsConfig;
  }
  public putScheduledSplitsConfig(value: EvidentlyLaunchScheduledSplitsConfig) {
    this._scheduledSplitsConfig.internalValue = value;
  }
  public resetScheduledSplitsConfig() {
    this._scheduledSplitsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSplitsConfigInput() {
    return this._scheduledSplitsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EvidentlyLaunchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EvidentlyLaunchTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      randomization_salt: cdktf.stringToTerraform(this._randomizationSalt),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      groups: cdktf.listMapper(evidentlyLaunchGroupsToTerraform, true)(this._groups.internalValue),
      metric_monitors: cdktf.listMapper(evidentlyLaunchMetricMonitorsToTerraform, true)(this._metricMonitors.internalValue),
      scheduled_splits_config: evidentlyLaunchScheduledSplitsConfigToTerraform(this._scheduledSplitsConfig.internalValue),
      timeouts: evidentlyLaunchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
