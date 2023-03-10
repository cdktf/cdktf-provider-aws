// https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlStorageLensConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#account_id S3ControlStorageLensConfiguration#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#config_id S3ControlStorageLensConfiguration#config_id}
  */
  readonly configId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#id S3ControlStorageLensConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#tags S3ControlStorageLensConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#tags_all S3ControlStorageLensConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * storage_lens_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#storage_lens_configuration S3ControlStorageLensConfiguration#storage_lens_configuration}
  */
  readonly storageLensConfiguration: S3ControlStorageLensConfigurationStorageLensConfiguration;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#delimiter S3ControlStorageLensConfiguration#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#max_depth S3ControlStorageLensConfiguration#max_depth}
  */
  readonly maxDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#min_storage_bytes_percentage S3ControlStorageLensConfiguration#min_storage_bytes_percentage}
  */
  readonly minStorageBytesPercentage?: number;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
    min_storage_bytes_percentage: cdktf.numberToTerraform(struct!.minStorageBytesPercentage),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._minStorageBytesPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorageBytesPercentage = this._minStorageBytesPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._maxDepth = undefined;
      this._minStorageBytesPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._maxDepth = value.maxDepth;
      this._minStorageBytesPercentage = value.minStorageBytesPercentage;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // max_depth - computed: false, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // min_storage_bytes_percentage - computed: false, optional: true, required: false
  private _minStorageBytesPercentage?: number; 
  public get minStorageBytesPercentage() {
    return this.getNumberAttribute('min_storage_bytes_percentage');
  }
  public set minStorageBytesPercentage(value: number) {
    this._minStorageBytesPercentage = value;
  }
  public resetMinStorageBytesPercentage() {
    this._minStorageBytesPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageBytesPercentageInput() {
    return this._minStorageBytesPercentage;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * selection_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#selection_criteria S3ControlStorageLensConfiguration#selection_criteria}
  */
  readonly selectionCriteria?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    selection_criteria: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct!.selectionCriteria),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._selectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionCriteria = this._selectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._selectionCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._selectionCriteria.internalValue = value.selectionCriteria;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // selection_criteria - computed: false, optional: true, required: false
  private _selectionCriteria = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(this, "selection_criteria");
  public get selectionCriteria() {
    return this._selectionCriteria;
  }
  public putSelectionCriteria(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria) {
    this._selectionCriteria.internalValue = value;
  }
  public resetSelectionCriteria() {
    this._selectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionCriteriaInput() {
    return this._selectionCriteria.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
  /**
  * storage_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#storage_metrics S3ControlStorageLensConfiguration#storage_metrics}
  */
  readonly storageMetrics: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct!.storageMetrics),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMetrics = this._storageMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageMetrics.internalValue = value.storageMetrics;
    }
  }

  // storage_metrics - computed: false, optional: false, required: true
  private _storageMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(this, "storage_metrics");
  public get storageMetrics() {
    return this._storageMetrics;
  }
  public putStorageMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics) {
    this._storageMetrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMetricsInput() {
    return this._storageMetrics.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {
  /**
  * activity_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#activity_metrics S3ControlStorageLensConfiguration#activity_metrics}
  */
  readonly activityMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
  /**
  * advanced_cost_optimization_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#advanced_cost_optimization_metrics S3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;
  /**
  * advanced_data_protection_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#advanced_data_protection_metrics S3ControlStorageLensConfiguration#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;
  /**
  * detailed_status_code_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#detailed_status_code_metrics S3ControlStorageLensConfiguration#detailed_status_code_metrics}
  */
  readonly detailedStatusCodeMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics;
  /**
  * prefix_level block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#prefix_level S3ControlStorageLensConfiguration#prefix_level}
  */
  readonly prefixLevel?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct!.advancedDataProtectionMetrics),
    detailed_status_code_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsToTerraform(struct!.detailedStatusCodeMetrics),
    prefix_level: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct!.prefixLevel),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._detailedStatusCodeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodeMetrics = this._detailedStatusCodeMetrics?.internalValue;
    }
    if (this._prefixLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLevel = this._prefixLevel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._detailedStatusCodeMetrics.internalValue = undefined;
      this._prefixLevel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._detailedStatusCodeMetrics.internalValue = value.detailedStatusCodeMetrics;
      this._prefixLevel.internalValue = value.prefixLevel;
    }
  }

  // activity_metrics - computed: false, optional: true, required: false
  private _activityMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: false, optional: true, required: false
  private _advancedCostOptimizationMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: false, optional: true, required: false
  private _advancedDataProtectionMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // detailed_status_code_metrics - computed: false, optional: true, required: false
  private _detailedStatusCodeMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference(this, "detailed_status_code_metrics");
  public get detailedStatusCodeMetrics() {
    return this._detailedStatusCodeMetrics;
  }
  public putDetailedStatusCodeMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics) {
    this._detailedStatusCodeMetrics.internalValue = value;
  }
  public resetDetailedStatusCodeMetrics() {
    this._detailedStatusCodeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodeMetricsInput() {
    return this._detailedStatusCodeMetrics.internalValue;
  }

  // prefix_level - computed: false, optional: true, required: false
  private _prefixLevel = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(this, "prefix_level");
  public get prefixLevel() {
    return this._prefixLevel;
  }
  public putPrefixLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel) {
    this._prefixLevel.internalValue = value;
  }
  public resetPrefixLevel() {
    this._prefixLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLevelInput() {
    return this._prefixLevel.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel {
  /**
  * activity_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#activity_metrics S3ControlStorageLensConfiguration#activity_metrics}
  */
  readonly activityMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics;
  /**
  * advanced_cost_optimization_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#advanced_cost_optimization_metrics S3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;
  /**
  * advanced_data_protection_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#advanced_data_protection_metrics S3ControlStorageLensConfiguration#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;
  /**
  * bucket_level block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#bucket_level S3ControlStorageLensConfiguration#bucket_level}
  */
  readonly bucketLevel: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel;
  /**
  * detailed_status_code_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#detailed_status_code_metrics S3ControlStorageLensConfiguration#detailed_status_code_metrics}
  */
  readonly detailedStatusCodeMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct!.advancedDataProtectionMetrics),
    bucket_level: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct!.bucketLevel),
    detailed_status_code_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsToTerraform(struct!.detailedStatusCodeMetrics),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._bucketLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketLevel = this._bucketLevel?.internalValue;
    }
    if (this._detailedStatusCodeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodeMetrics = this._detailedStatusCodeMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._bucketLevel.internalValue = undefined;
      this._detailedStatusCodeMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._bucketLevel.internalValue = value.bucketLevel;
      this._detailedStatusCodeMetrics.internalValue = value.detailedStatusCodeMetrics;
    }
  }

  // activity_metrics - computed: false, optional: true, required: false
  private _activityMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: false, optional: true, required: false
  private _advancedCostOptimizationMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: false, optional: true, required: false
  private _advancedDataProtectionMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // bucket_level - computed: false, optional: false, required: true
  private _bucketLevel = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference(this, "bucket_level");
  public get bucketLevel() {
    return this._bucketLevel;
  }
  public putBucketLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel) {
    this._bucketLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketLevelInput() {
    return this._bucketLevel.internalValue;
  }

  // detailed_status_code_metrics - computed: false, optional: true, required: false
  private _detailedStatusCodeMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference(this, "detailed_status_code_metrics");
  public get detailedStatusCodeMetrics() {
    return this._detailedStatusCodeMetrics;
  }
  public putDetailedStatusCodeMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics) {
    this._detailedStatusCodeMetrics.internalValue = value;
  }
  public resetDetailedStatusCodeMetrics() {
    this._detailedStatusCodeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodeMetricsInput() {
    return this._detailedStatusCodeMetrics.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#arn S3ControlStorageLensConfiguration#arn}
  */
  readonly arn: string;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#key_id S3ControlStorageLensConfiguration#key_id}
  */
  readonly keyId: string;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 {
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3ToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3List extends cdktf.ComplexList {
  public internalValue? : S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable

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
  public get(index: number): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3OutputReference {
    return new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {
  /**
  * sse_kms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#sse_kms S3ControlStorageLensConfiguration#sse_kms}
  */
  readonly sseKms?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms;
  /**
  * sse_s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#sse_s3 S3ControlStorageLensConfiguration#sse_s3}
  */
  readonly sseS3?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_kms: s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsToTerraform(struct!.sseKms),
    sse_s3: cdktf.listMapper(s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3ToTerraform, true)(struct!.sseS3),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    if (this._sseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseS3 = this._sseS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKms.internalValue = undefined;
      this._sseS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKms.internalValue = value.sseKms;
      this._sseS3.internalValue = value.sseS3;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3 = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3List(this, "sse_s3", false);
  public get sseS3() {
    return this._sseS3;
  }
  public putSseS3(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable) {
    this._sseS3.internalValue = value;
  }
  public resetSseS3() {
    this._sseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#account_id S3ControlStorageLensConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#arn S3ControlStorageLensConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#format S3ControlStorageLensConfiguration#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#output_schema_version S3ControlStorageLensConfiguration#output_schema_version}
  */
  readonly outputSchemaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#prefix S3ControlStorageLensConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#encryption S3ControlStorageLensConfiguration#encryption}
  */
  readonly encryption?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    arn: cdktf.stringToTerraform(struct!.arn),
    format: cdktf.stringToTerraform(struct!.format),
    output_schema_version: cdktf.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    encryption: s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct!.encryption),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._arn = undefined;
      this._format = undefined;
      this._outputSchemaVersion = undefined;
      this._prefix = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._arn = value.arn;
      this._format = value.format;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._prefix = value.prefix;
      this._encryption.internalValue = value.encryption;
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

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_schema_version - computed: false, optional: false, required: true
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExport {
  /**
  * cloud_watch_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#cloud_watch_metrics S3ControlStorageLensConfiguration#cloud_watch_metrics}
  */
  readonly cloudWatchMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics;
  /**
  * s3_bucket_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#s3_bucket_destination S3ControlStorageLensConfiguration#s3_bucket_destination}
  */
  readonly s3BucketDestination?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_metrics: s3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsToTerraform(struct!.cloudWatchMetrics),
    s3_bucket_destination: s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct!.s3BucketDestination),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchMetrics = this._cloudWatchMetrics?.internalValue;
    }
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudWatchMetrics.internalValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudWatchMetrics.internalValue = value.cloudWatchMetrics;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
    }
  }

  // cloud_watch_metrics - computed: false, optional: true, required: false
  private _cloudWatchMetrics = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference(this, "cloud_watch_metrics");
  public get cloudWatchMetrics() {
    return this._cloudWatchMetrics;
  }
  public putCloudWatchMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics) {
    this._cloudWatchMetrics.internalValue = value;
  }
  public resetCloudWatchMetrics() {
    this._cloudWatchMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchMetricsInput() {
    return this._cloudWatchMetrics.internalValue;
  }

  // s3_bucket_destination - computed: false, optional: true, required: false
  private _s3BucketDestination = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationExclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#buckets S3ControlStorageLensConfiguration#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#regions S3ControlStorageLensConfiguration#regions}
  */
  readonly regions?: string[];
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationExcludeToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buckets),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktf.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationInclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#buckets S3ControlStorageLensConfiguration#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#regions S3ControlStorageLensConfiguration#regions}
  */
  readonly regions?: string[];
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationIncludeToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buckets),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktf.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface S3ControlStorageLensConfigurationStorageLensConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * account_level block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#account_level S3ControlStorageLensConfiguration#account_level}
  */
  readonly accountLevel: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel;
  /**
  * aws_org block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#aws_org S3ControlStorageLensConfiguration#aws_org}
  */
  readonly awsOrg?: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg;
  /**
  * data_export block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#data_export S3ControlStorageLensConfiguration#data_export}
  */
  readonly dataExport?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport;
  /**
  * exclude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#exclude S3ControlStorageLensConfiguration#exclude}
  */
  readonly exclude?: S3ControlStorageLensConfigurationStorageLensConfigurationExclude;
  /**
  * include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration#include S3ControlStorageLensConfiguration#include}
  */
  readonly include?: S3ControlStorageLensConfigurationStorageLensConfigurationInclude;
}

export function s3ControlStorageLensConfigurationStorageLensConfigurationToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference | S3ControlStorageLensConfigurationStorageLensConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    account_level: s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelToTerraform(struct!.accountLevel),
    aws_org: s3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgToTerraform(struct!.awsOrg),
    data_export: s3ControlStorageLensConfigurationStorageLensConfigurationDataExportToTerraform(struct!.dataExport),
    exclude: s3ControlStorageLensConfigurationStorageLensConfigurationExcludeToTerraform(struct!.exclude),
    include: s3ControlStorageLensConfigurationStorageLensConfigurationIncludeToTerraform(struct!.include),
  }
}

export class S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlStorageLensConfigurationStorageLensConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._accountLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountLevel = this._accountLevel?.internalValue;
    }
    if (this._awsOrg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOrg = this._awsOrg?.internalValue;
    }
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._accountLevel.internalValue = undefined;
      this._awsOrg.internalValue = undefined;
      this._dataExport.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._accountLevel.internalValue = value.accountLevel;
      this._awsOrg.internalValue = value.awsOrg;
      this._dataExport.internalValue = value.dataExport;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // account_level - computed: false, optional: false, required: true
  private _accountLevel = new S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference(this, "account_level");
  public get accountLevel() {
    return this._accountLevel;
  }
  public putAccountLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel) {
    this._accountLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLevelInput() {
    return this._accountLevel.internalValue;
  }

  // aws_org - computed: false, optional: true, required: false
  private _awsOrg = new S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference(this, "aws_org");
  public get awsOrg() {
    return this._awsOrg;
  }
  public putAwsOrg(value: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg) {
    this._awsOrg.internalValue = value;
  }
  public resetAwsOrg() {
    this._awsOrg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrgInput() {
    return this._awsOrg.internalValue;
  }

  // data_export - computed: false, optional: true, required: false
  private _dataExport = new S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport) {
    this._dataExport.internalValue = value;
  }
  public resetDataExport() {
    this._dataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: S3ControlStorageLensConfigurationStorageLensConfigurationExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: S3ControlStorageLensConfigurationStorageLensConfigurationInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration}
*/
export class S3ControlStorageLensConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_storage_lens_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlStorageLensConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlStorageLensConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_storage_lens_configuration',
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
    this._accountId = config.accountId;
    this._configId = config.configId;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._storageLensConfiguration.internalValue = config.storageLensConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // storage_lens_configuration - computed: false, optional: false, required: true
  private _storageLensConfiguration = new S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference(this, "storage_lens_configuration");
  public get storageLensConfiguration() {
    return this._storageLensConfiguration;
  }
  public putStorageLensConfiguration(value: S3ControlStorageLensConfigurationStorageLensConfiguration) {
    this._storageLensConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensConfigurationInput() {
    return this._storageLensConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config_id: cdktf.stringToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      storage_lens_configuration: s3ControlStorageLensConfigurationStorageLensConfigurationToTerraform(this._storageLensConfiguration.internalValue),
    };
  }
}
