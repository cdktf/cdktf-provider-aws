// https://www.terraform.io/docs/providers/aws/r/macie2_classification_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}
  */
  readonly customDataIdentifierIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#description Macie2ClassificationJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#id Macie2ClassificationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}
  */
  readonly initialRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_status Macie2ClassificationJob#job_status}
  */
  readonly jobStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_type Macie2ClassificationJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name Macie2ClassificationJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags Macie2ClassificationJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3_job_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#s3_job_definition Macie2ClassificationJob#s3_job_definition}
  */
  readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
  /**
  * schedule_frequency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#schedule_frequency Macie2ClassificationJob#schedule_frequency}
  */
  readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency;
}
export interface Macie2ClassificationJobUserPausedDetails {
}

export function macie2ClassificationJobUserPausedDetailsToTerraform(struct?: Macie2ClassificationJobUserPausedDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Macie2ClassificationJobUserPausedDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobUserPausedDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobUserPausedDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_expires_at - computed: true, optional: false, required: false
  public get jobExpiresAt() {
    return this.getStringAttribute('job_expires_at');
  }

  // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
  public get jobImminentExpirationHealthEventArn() {
    return this.getStringAttribute('job_imminent_expiration_health_event_arn');
  }

  // job_paused_at - computed: true, optional: false, required: false
  public get jobPausedAt() {
    return this.getStringAttribute('job_paused_at');
  }
}

export class Macie2ClassificationJobUserPausedDetailsList extends cdktf.ComplexList {

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
  public get(index: number): Macie2ClassificationJobUserPausedDetailsOutputReference {
    return new Macie2ClassificationJobUserPausedDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesToTerraform, true)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd {
  /**
  * simple_criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}
  */
  readonly simpleCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
  /**
  * tag_criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}
  */
  readonly tagCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_criterion: macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionToTerraform(struct!.simpleCriterion),
    tag_criterion: macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionToTerraform(struct!.tagCriterion),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleCriterion = this._simpleCriterion?.internalValue;
    }
    if (this._tagCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCriterion = this._tagCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = undefined;
      this._tagCriterion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = value.simpleCriterion;
      this._tagCriterion.internalValue = value.tagCriterion;
    }
  }

  // simple_criterion - computed: false, optional: true, required: false
  private _simpleCriterion = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference(this, "simple_criterion");
  public get simpleCriterion() {
    return this._simpleCriterion;
  }
  public putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion) {
    this._simpleCriterion.internalValue = value;
  }
  public resetSimpleCriterion() {
    this._simpleCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleCriterionInput() {
    return this._simpleCriterion.internalValue;
  }

  // tag_criterion - computed: false, optional: true, required: false
  private _tagCriterion = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference(this, "tag_criterion");
  public get tagCriterion() {
    return this._tagCriterion;
  }
  public putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion) {
    this._tagCriterion.internalValue = value;
  }
  public resetTagCriterion() {
    this._tagCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCriterionInput() {
    return this._tagCriterion.internalValue;
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndToTerraform, true)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesToTerraform, true)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd {
  /**
  * simple_criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}
  */
  readonly simpleCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
  /**
  * tag_criterion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}
  */
  readonly tagCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_criterion: macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionToTerraform(struct!.simpleCriterion),
    tag_criterion: macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionToTerraform(struct!.tagCriterion),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleCriterion = this._simpleCriterion?.internalValue;
    }
    if (this._tagCriterion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCriterion = this._tagCriterion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = undefined;
      this._tagCriterion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleCriterion.internalValue = value.simpleCriterion;
      this._tagCriterion.internalValue = value.tagCriterion;
    }
  }

  // simple_criterion - computed: false, optional: true, required: false
  private _simpleCriterion = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference(this, "simple_criterion");
  public get simpleCriterion() {
    return this._simpleCriterion;
  }
  public putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion) {
    this._simpleCriterion.internalValue = value;
  }
  public resetSimpleCriterion() {
    this._simpleCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleCriterionInput() {
    return this._simpleCriterion.internalValue;
  }

  // tag_criterion - computed: false, optional: true, required: false
  private _tagCriterion = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference(this, "tag_criterion");
  public get tagCriterion() {
    return this._tagCriterion;
  }
  public putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion) {
    this._tagCriterion.internalValue = value;
  }
  public resetTagCriterion() {
    this._tagCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCriterionInput() {
    return this._tagCriterion.internalValue;
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndToTerraform, true)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteria {
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}
  */
  readonly excludes?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
  /**
  * includes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}
  */
  readonly includes?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes;
}

export function macie2ClassificationJobS3JobDefinitionBucketCriteriaToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesToTerraform(struct!.excludes),
    includes: macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesToTerraform(struct!.includes),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes?.internalValue;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes.internalValue = undefined;
      this._includes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes.internalValue = value.excludes;
      this._includes.internalValue = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#account_id Macie2ClassificationJob#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#buckets Macie2ClassificationJob#buckets}
  */
  readonly buckets: string[];
}

export function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buckets),
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._buckets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._buckets = value.buckets;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // buckets - computed: false, optional: false, required: true
  private _buckets?: string[]; 
  public get buckets() {
    return this.getListAttribute('buckets');
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }
}

export class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform, true)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._target = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._target = value.target;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct!.tagScopeTerm),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
    }
    if (this._tagScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = undefined;
      this._tagScopeTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
      this._tagScopeTerm.internalValue = value.tagScopeTerm;
    }
  }

  // simple_scope_term - computed: false, optional: true, required: false
  private _simpleScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference(this, "simple_scope_term");
  public get simpleScopeTerm() {
    return this._simpleScopeTerm;
  }
  public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm) {
    this._simpleScopeTerm.internalValue = value;
  }
  public resetSimpleScopeTerm() {
    this._simpleScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleScopeTermInput() {
    return this._simpleScopeTerm.internalValue;
  }

  // tag_scope_term - computed: false, optional: true, required: false
  private _tagScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference(this, "tag_scope_term");
  public get tagScopeTerm() {
    return this._tagScopeTerm;
  }
  public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm) {
    this._tagScopeTerm.internalValue = value;
  }
  public resetTagScopeTerm() {
    this._tagScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagScopeTermInput() {
    return this._tagScopeTerm.internalValue;
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform, true)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform, true)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._tagValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._key = undefined;
      this._target = undefined;
      this._tagValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._key = value.key;
      this._target = value.target;
      this._tagValues.internalValue = value.tagValues;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList(this, "tag_values", false);
  public get tagValues() {
    return this._tagValues;
  }
  public putTagValues(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable) {
    this._tagValues.internalValue = value;
  }
  public resetTagValues() {
    this._tagValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct!.tagScopeTerm),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
    }
    if (this._tagScopeTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = undefined;
      this._tagScopeTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
      this._tagScopeTerm.internalValue = value.tagScopeTerm;
    }
  }

  // simple_scope_term - computed: false, optional: true, required: false
  private _simpleScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference(this, "simple_scope_term");
  public get simpleScopeTerm() {
    return this._simpleScopeTerm;
  }
  public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm) {
    this._simpleScopeTerm.internalValue = value;
  }
  public resetSimpleScopeTerm() {
    this._simpleScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleScopeTermInput() {
    return this._simpleScopeTerm.internalValue;
  }

  // tag_scope_term - computed: false, optional: true, required: false
  private _tagScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference(this, "tag_scope_term");
  public get tagScopeTerm() {
    return this._tagScopeTerm;
  }
  public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm) {
    this._tagScopeTerm.internalValue = value;
  }
  public resetTagScopeTerm() {
    this._tagScopeTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagScopeTermInput() {
    return this._tagScopeTerm.internalValue;
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList extends cdktf.ComplexList {
  public internalValue? : Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable

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
  public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference {
    return new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable;
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform, true)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScoping {
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}
  */
  readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
  /**
  * includes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}
  */
  readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
}

export function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingOutputReference | Macie2ClassificationJobS3JobDefinitionScoping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct!.excludes),
    includes: macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct!.includes),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinitionScoping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes?.internalValue;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinitionScoping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes.internalValue = undefined;
      this._includes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes.internalValue = value.excludes;
      this._includes.internalValue = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes = new Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(this, "excludes");
  public get excludes() {
    return this._excludes;
  }
  public putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes) {
    this._excludes.internalValue = value;
  }
  public resetExcludes() {
    this._excludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }
}
export interface Macie2ClassificationJobS3JobDefinition {
  /**
  * bucket_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_criteria Macie2ClassificationJob#bucket_criteria}
  */
  readonly bucketCriteria?: Macie2ClassificationJobS3JobDefinitionBucketCriteria;
  /**
  * bucket_definitions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_definitions Macie2ClassificationJob#bucket_definitions}
  */
  readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable;
  /**
  * scoping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#scoping Macie2ClassificationJob#scoping}
  */
  readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping;
}

export function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionOutputReference | Macie2ClassificationJobS3JobDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_criteria: macie2ClassificationJobS3JobDefinitionBucketCriteriaToTerraform(struct!.bucketCriteria),
    bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform, true)(struct!.bucketDefinitions),
    scoping: macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct!.scoping),
  }
}

export class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobS3JobDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketCriteria = this._bucketCriteria?.internalValue;
    }
    if (this._bucketDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketDefinitions = this._bucketDefinitions?.internalValue;
    }
    if (this._scoping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoping = this._scoping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobS3JobDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketCriteria.internalValue = undefined;
      this._bucketDefinitions.internalValue = undefined;
      this._scoping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketCriteria.internalValue = value.bucketCriteria;
      this._bucketDefinitions.internalValue = value.bucketDefinitions;
      this._scoping.internalValue = value.scoping;
    }
  }

  // bucket_criteria - computed: false, optional: true, required: false
  private _bucketCriteria = new Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference(this, "bucket_criteria");
  public get bucketCriteria() {
    return this._bucketCriteria;
  }
  public putBucketCriteria(value: Macie2ClassificationJobS3JobDefinitionBucketCriteria) {
    this._bucketCriteria.internalValue = value;
  }
  public resetBucketCriteria() {
    this._bucketCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketCriteriaInput() {
    return this._bucketCriteria.internalValue;
  }

  // bucket_definitions - computed: false, optional: true, required: false
  private _bucketDefinitions = new Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList(this, "bucket_definitions", false);
  public get bucketDefinitions() {
    return this._bucketDefinitions;
  }
  public putBucketDefinitions(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable) {
    this._bucketDefinitions.internalValue = value;
  }
  public resetBucketDefinitions() {
    this._bucketDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketDefinitionsInput() {
    return this._bucketDefinitions.internalValue;
  }

  // scoping - computed: false, optional: true, required: false
  private _scoping = new Macie2ClassificationJobS3JobDefinitionScopingOutputReference(this, "scoping");
  public get scoping() {
    return this._scoping;
  }
  public putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping) {
    this._scoping.internalValue = value;
  }
  public resetScoping() {
    this._scoping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopingInput() {
    return this._scoping.internalValue;
  }
}
export interface Macie2ClassificationJobScheduleFrequency {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}
  */
  readonly dailySchedule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}
  */
  readonly monthlySchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}
  */
  readonly weeklySchedule?: string;
}

export function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequencyOutputReference | Macie2ClassificationJobScheduleFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_schedule: cdktf.booleanToTerraform(struct!.dailySchedule),
    monthly_schedule: cdktf.numberToTerraform(struct!.monthlySchedule),
    weekly_schedule: cdktf.stringToTerraform(struct!.weeklySchedule),
  }
}

export class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Macie2ClassificationJobScheduleFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule;
    }
    if (this._monthlySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule;
    }
    if (this._weeklySchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Macie2ClassificationJobScheduleFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailySchedule = undefined;
      this._monthlySchedule = undefined;
      this._weeklySchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailySchedule = value.dailySchedule;
      this._monthlySchedule = value.monthlySchedule;
      this._weeklySchedule = value.weeklySchedule;
    }
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule?: boolean | cdktf.IResolvable; 
  public get dailySchedule() {
    return this.getBooleanAttribute('daily_schedule');
  }
  public set dailySchedule(value: boolean | cdktf.IResolvable) {
    this._dailySchedule = value;
  }
  public resetDailySchedule() {
    this._dailySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: true, required: false
  private _monthlySchedule?: number; 
  public get monthlySchedule() {
    return this.getNumberAttribute('monthly_schedule');
  }
  public set monthlySchedule(value: number) {
    this._monthlySchedule = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: true, required: false
  private _weeklySchedule?: string; 
  public get weeklySchedule() {
    return this.getStringAttribute('weekly_schedule');
  }
  public set weeklySchedule(value: string) {
    this._weeklySchedule = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job aws_macie2_classification_job}
*/
export class Macie2ClassificationJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie2_classification_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job aws_macie2_classification_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2ClassificationJobConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_classification_job',
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
    this._customDataIdentifierIds = config.customDataIdentifierIds;
    this._description = config.description;
    this._id = config.id;
    this._initialRun = config.initialRun;
    this._jobStatus = config.jobStatus;
    this._jobType = config.jobType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3JobDefinition.internalValue = config.s3JobDefinition;
    this._scheduleFrequency.internalValue = config.scheduleFrequency;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_data_identifier_ids - computed: true, optional: true, required: false
  private _customDataIdentifierIds?: string[]; 
  public get customDataIdentifierIds() {
    return this.getListAttribute('custom_data_identifier_ids');
  }
  public set customDataIdentifierIds(value: string[]) {
    this._customDataIdentifierIds = value;
  }
  public resetCustomDataIdentifierIds() {
    this._customDataIdentifierIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataIdentifierIdsInput() {
    return this._customDataIdentifierIds;
  }

  // description - computed: true, optional: true, required: false
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

  // initial_run - computed: false, optional: true, required: false
  private _initialRun?: boolean | cdktf.IResolvable; 
  public get initialRun() {
    return this.getBooleanAttribute('initial_run');
  }
  public set initialRun(value: boolean | cdktf.IResolvable) {
    this._initialRun = value;
  }
  public resetInitialRun() {
    this._initialRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRunInput() {
    return this._initialRun;
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_status - computed: true, optional: true, required: false
  private _jobStatus?: string; 
  public get jobStatus() {
    return this.getStringAttribute('job_status');
  }
  public set jobStatus(value: string) {
    this._jobStatus = value;
  }
  public resetJobStatus() {
    this._jobStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStatusInput() {
    return this._jobStatus;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
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

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
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

  // user_paused_details - computed: true, optional: false, required: false
  private _userPausedDetails = new Macie2ClassificationJobUserPausedDetailsList(this, "user_paused_details", false);
  public get userPausedDetails() {
    return this._userPausedDetails;
  }

  // s3_job_definition - computed: false, optional: false, required: true
  private _s3JobDefinition = new Macie2ClassificationJobS3JobDefinitionOutputReference(this, "s3_job_definition");
  public get s3JobDefinition() {
    return this._s3JobDefinition;
  }
  public putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition) {
    this._s3JobDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3JobDefinitionInput() {
    return this._s3JobDefinition.internalValue;
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency = new Macie2ClassificationJobScheduleFrequencyOutputReference(this, "schedule_frequency");
  public get scheduleFrequency() {
    return this._scheduleFrequency;
  }
  public putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency) {
    this._scheduleFrequency.internalValue = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDataIdentifierIds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      initial_run: cdktf.booleanToTerraform(this._initialRun),
      job_status: cdktf.stringToTerraform(this._jobStatus),
      job_type: cdktf.stringToTerraform(this._jobType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      s3_job_definition: macie2ClassificationJobS3JobDefinitionToTerraform(this._s3JobDefinition.internalValue),
      schedule_frequency: macie2ClassificationJobScheduleFrequencyToTerraform(this._scheduleFrequency.internalValue),
    };
  }
}
