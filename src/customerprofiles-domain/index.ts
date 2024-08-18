// https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}
  */
  readonly deadLetterQueueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}
  */
  readonly defaultEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}
  */
  readonly defaultExpirationDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * matching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}
  */
  readonly matching?: CustomerprofilesDomainMatching;
  /**
  * rule_based_matching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}
  */
  readonly ruleBasedMatching?: CustomerprofilesDomainRuleBasedMatching;
}
export interface CustomerprofilesDomainMatchingAutoMergingConflictResolution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}
  */
  readonly conflictResolvingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}
  */
  readonly sourceName?: string;
}

export function customerprofilesDomainMatchingAutoMergingConflictResolutionToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference | CustomerprofilesDomainMatchingAutoMergingConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_resolving_model: cdktf.stringToTerraform(struct!.conflictResolvingModel),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
  }
}


export function customerprofilesDomainMatchingAutoMergingConflictResolutionToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference | CustomerprofilesDomainMatchingAutoMergingConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_resolving_model: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolvingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingAutoMergingConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolvingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolvingModel = this._conflictResolvingModel;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingAutoMergingConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolvingModel = undefined;
      this._sourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolvingModel = value.conflictResolvingModel;
      this._sourceName = value.sourceName;
    }
  }

  // conflict_resolving_model - computed: false, optional: false, required: true
  private _conflictResolvingModel?: string; 
  public get conflictResolvingModel() {
    return this.getStringAttribute('conflict_resolving_model');
  }
  public set conflictResolvingModel(value: string) {
    this._conflictResolvingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolvingModelInput() {
    return this._conflictResolvingModel;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface CustomerprofilesDomainMatchingAutoMergingConsolidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}
  */
  readonly matchingAttributesList: string[][] | cdktf.IResolvable;
}

export function customerprofilesDomainMatchingAutoMergingConsolidationToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference | CustomerprofilesDomainMatchingAutoMergingConsolidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_attributes_list: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.matchingAttributesList),
  }
}


export function customerprofilesDomainMatchingAutoMergingConsolidationToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference | CustomerprofilesDomainMatchingAutoMergingConsolidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_attributes_list: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.matchingAttributesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingAutoMergingConsolidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingAttributesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingAttributesList = this._matchingAttributesList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingAutoMergingConsolidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingAttributesList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingAttributesList = value.matchingAttributesList;
    }
  }

  // matching_attributes_list - computed: false, optional: false, required: true
  private _matchingAttributesList?: string[][] | cdktf.IResolvable; 
  public get matchingAttributesList() {
    return this.interpolationForAttribute('matching_attributes_list');
  }
  public set matchingAttributesList(value: string[][] | cdktf.IResolvable) {
    this._matchingAttributesList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingAttributesListInput() {
    return this._matchingAttributesList;
  }
}
export interface CustomerprofilesDomainMatchingAutoMerging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}
  */
  readonly minAllowedConfidenceScoreForMerging?: number;
  /**
  * conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}
  */
  readonly conflictResolution?: CustomerprofilesDomainMatchingAutoMergingConflictResolution;
  /**
  * consolidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}
  */
  readonly consolidation?: CustomerprofilesDomainMatchingAutoMergingConsolidation;
}

export function customerprofilesDomainMatchingAutoMergingToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingOutputReference | CustomerprofilesDomainMatchingAutoMerging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    min_allowed_confidence_score_for_merging: cdktf.numberToTerraform(struct!.minAllowedConfidenceScoreForMerging),
    conflict_resolution: customerprofilesDomainMatchingAutoMergingConflictResolutionToTerraform(struct!.conflictResolution),
    consolidation: customerprofilesDomainMatchingAutoMergingConsolidationToTerraform(struct!.consolidation),
  }
}


export function customerprofilesDomainMatchingAutoMergingToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingOutputReference | CustomerprofilesDomainMatchingAutoMerging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_allowed_confidence_score_for_merging: {
      value: cdktf.numberToHclTerraform(struct!.minAllowedConfidenceScoreForMerging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conflict_resolution: {
      value: customerprofilesDomainMatchingAutoMergingConflictResolutionToHclTerraform(struct!.conflictResolution),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingAutoMergingConflictResolutionList",
    },
    consolidation: {
      value: customerprofilesDomainMatchingAutoMergingConsolidationToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingAutoMergingConsolidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingAutoMergingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingAutoMerging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minAllowedConfidenceScoreForMerging !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllowedConfidenceScoreForMerging = this._minAllowedConfidenceScoreForMerging;
    }
    if (this._conflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution?.internalValue;
    }
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingAutoMerging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._minAllowedConfidenceScoreForMerging = undefined;
      this._conflictResolution.internalValue = undefined;
      this._consolidation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._minAllowedConfidenceScoreForMerging = value.minAllowedConfidenceScoreForMerging;
      this._conflictResolution.internalValue = value.conflictResolution;
      this._consolidation.internalValue = value.consolidation;
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

  // min_allowed_confidence_score_for_merging - computed: false, optional: true, required: false
  private _minAllowedConfidenceScoreForMerging?: number; 
  public get minAllowedConfidenceScoreForMerging() {
    return this.getNumberAttribute('min_allowed_confidence_score_for_merging');
  }
  public set minAllowedConfidenceScoreForMerging(value: number) {
    this._minAllowedConfidenceScoreForMerging = value;
  }
  public resetMinAllowedConfidenceScoreForMerging() {
    this._minAllowedConfidenceScoreForMerging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedConfidenceScoreForMergingInput() {
    return this._minAllowedConfidenceScoreForMerging;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution = new CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference(this, "conflict_resolution");
  public get conflictResolution() {
    return this._conflictResolution;
  }
  public putConflictResolution(value: CustomerprofilesDomainMatchingAutoMergingConflictResolution) {
    this._conflictResolution.internalValue = value;
  }
  public resetConflictResolution() {
    this._conflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution.internalValue;
  }

  // consolidation - computed: false, optional: true, required: false
  private _consolidation = new CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: CustomerprofilesDomainMatchingAutoMergingConsolidation) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }
}
export interface CustomerprofilesDomainMatchingExportingConfigS3Exporting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}
  */
  readonly s3KeyName?: string;
}

export function customerprofilesDomainMatchingExportingConfigS3ExportingToTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainMatchingExportingConfigS3Exporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_name: cdktf.stringToTerraform(struct!.s3KeyName),
  }
}


export function customerprofilesDomainMatchingExportingConfigS3ExportingToHclTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainMatchingExportingConfigS3Exporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_name: {
      value: cdktf.stringToHclTerraform(struct!.s3KeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingExportingConfigS3Exporting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyName = this._s3KeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingExportingConfigS3Exporting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3KeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyName = value.s3KeyName;
    }
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_name - computed: false, optional: true, required: false
  private _s3KeyName?: string; 
  public get s3KeyName() {
    return this.getStringAttribute('s3_key_name');
  }
  public set s3KeyName(value: string) {
    this._s3KeyName = value;
  }
  public resetS3KeyName() {
    this._s3KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyNameInput() {
    return this._s3KeyName;
  }
}
export interface CustomerprofilesDomainMatchingExportingConfig {
  /**
  * s3_exporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}
  */
  readonly s3Exporting?: CustomerprofilesDomainMatchingExportingConfigS3Exporting;
}

export function customerprofilesDomainMatchingExportingConfigToTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigOutputReference | CustomerprofilesDomainMatchingExportingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_exporting: customerprofilesDomainMatchingExportingConfigS3ExportingToTerraform(struct!.s3Exporting),
  }
}


export function customerprofilesDomainMatchingExportingConfigToHclTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigOutputReference | CustomerprofilesDomainMatchingExportingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_exporting: {
      value: customerprofilesDomainMatchingExportingConfigS3ExportingToHclTerraform(struct!.s3Exporting),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingExportingConfigS3ExportingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingExportingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingExportingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Exporting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Exporting = this._s3Exporting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingExportingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Exporting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Exporting.internalValue = value.s3Exporting;
    }
  }

  // s3_exporting - computed: false, optional: true, required: false
  private _s3Exporting = new CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference(this, "s3_exporting");
  public get s3Exporting() {
    return this._s3Exporting;
  }
  public putS3Exporting(value: CustomerprofilesDomainMatchingExportingConfigS3Exporting) {
    this._s3Exporting.internalValue = value;
  }
  public resetS3Exporting() {
    this._s3Exporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportingInput() {
    return this._s3Exporting.internalValue;
  }
}
export interface CustomerprofilesDomainMatchingJobSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}
  */
  readonly time: string;
}

export function customerprofilesDomainMatchingJobScheduleToTerraform(struct?: CustomerprofilesDomainMatchingJobScheduleOutputReference | CustomerprofilesDomainMatchingJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function customerprofilesDomainMatchingJobScheduleToHclTerraform(struct?: CustomerprofilesDomainMatchingJobScheduleOutputReference | CustomerprofilesDomainMatchingJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_the_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfTheWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingJobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatchingJobSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatchingJobSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface CustomerprofilesDomainMatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_merging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}
  */
  readonly autoMerging?: CustomerprofilesDomainMatchingAutoMerging;
  /**
  * exporting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}
  */
  readonly exportingConfig?: CustomerprofilesDomainMatchingExportingConfig;
  /**
  * job_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}
  */
  readonly jobSchedule?: CustomerprofilesDomainMatchingJobSchedule;
}

export function customerprofilesDomainMatchingToTerraform(struct?: CustomerprofilesDomainMatchingOutputReference | CustomerprofilesDomainMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_merging: customerprofilesDomainMatchingAutoMergingToTerraform(struct!.autoMerging),
    exporting_config: customerprofilesDomainMatchingExportingConfigToTerraform(struct!.exportingConfig),
    job_schedule: customerprofilesDomainMatchingJobScheduleToTerraform(struct!.jobSchedule),
  }
}


export function customerprofilesDomainMatchingToHclTerraform(struct?: CustomerprofilesDomainMatchingOutputReference | CustomerprofilesDomainMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_merging: {
      value: customerprofilesDomainMatchingAutoMergingToHclTerraform(struct!.autoMerging),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingAutoMergingList",
    },
    exporting_config: {
      value: customerprofilesDomainMatchingExportingConfigToHclTerraform(struct!.exportingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingExportingConfigList",
    },
    job_schedule: {
      value: customerprofilesDomainMatchingJobScheduleToHclTerraform(struct!.jobSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainMatchingJobScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainMatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoMerging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMerging = this._autoMerging?.internalValue;
    }
    if (this._exportingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportingConfig = this._exportingConfig?.internalValue;
    }
    if (this._jobSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSchedule = this._jobSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainMatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._autoMerging.internalValue = undefined;
      this._exportingConfig.internalValue = undefined;
      this._jobSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._autoMerging.internalValue = value.autoMerging;
      this._exportingConfig.internalValue = value.exportingConfig;
      this._jobSchedule.internalValue = value.jobSchedule;
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

  // auto_merging - computed: false, optional: true, required: false
  private _autoMerging = new CustomerprofilesDomainMatchingAutoMergingOutputReference(this, "auto_merging");
  public get autoMerging() {
    return this._autoMerging;
  }
  public putAutoMerging(value: CustomerprofilesDomainMatchingAutoMerging) {
    this._autoMerging.internalValue = value;
  }
  public resetAutoMerging() {
    this._autoMerging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMergingInput() {
    return this._autoMerging.internalValue;
  }

  // exporting_config - computed: false, optional: true, required: false
  private _exportingConfig = new CustomerprofilesDomainMatchingExportingConfigOutputReference(this, "exporting_config");
  public get exportingConfig() {
    return this._exportingConfig;
  }
  public putExportingConfig(value: CustomerprofilesDomainMatchingExportingConfig) {
    this._exportingConfig.internalValue = value;
  }
  public resetExportingConfig() {
    this._exportingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportingConfigInput() {
    return this._exportingConfig.internalValue;
  }

  // job_schedule - computed: false, optional: true, required: false
  private _jobSchedule = new CustomerprofilesDomainMatchingJobScheduleOutputReference(this, "job_schedule");
  public get jobSchedule() {
    return this._jobSchedule;
  }
  public putJobSchedule(value: CustomerprofilesDomainMatchingJobSchedule) {
    this._jobSchedule.internalValue = value;
  }
  public resetJobSchedule() {
    this._jobSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleInput() {
    return this._jobSchedule.internalValue;
  }
}
export interface CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}
  */
  readonly attributeMatchingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}
  */
  readonly emailAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}
  */
  readonly phoneNumber?: string[];
}

export function customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference | CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    attribute_matching_model: cdktf.stringToTerraform(struct!.attributeMatchingModel),
    email_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddress),
    phone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phoneNumber),
  }
}


export function customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference | CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute_matching_model: {
      value: cdktf.stringToHclTerraform(struct!.attributeMatchingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phone_number: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phoneNumber),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._attributeMatchingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._attributeMatchingModel = undefined;
      this._emailAddress = undefined;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._attributeMatchingModel = value.attributeMatchingModel;
      this._emailAddress = value.emailAddress;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // attribute_matching_model - computed: false, optional: false, required: true
  private _attributeMatchingModel?: string; 
  public get attributeMatchingModel() {
    return this.getStringAttribute('attribute_matching_model');
  }
  public set attributeMatchingModel(value: string) {
    this._attributeMatchingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchingModelInput() {
    return this._attributeMatchingModel;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string[]; 
  public get emailAddress() {
    return this.getListAttribute('email_address');
  }
  public set emailAddress(value: string[]) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string[]; 
  public get phoneNumber() {
    return this.getListAttribute('phone_number');
  }
  public set phoneNumber(value: string[]) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface CustomerprofilesDomainRuleBasedMatchingConflictResolution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}
  */
  readonly conflictResolvingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}
  */
  readonly sourceName?: string;
}

export function customerprofilesDomainRuleBasedMatchingConflictResolutionToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference | CustomerprofilesDomainRuleBasedMatchingConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_resolving_model: cdktf.stringToTerraform(struct!.conflictResolvingModel),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
  }
}


export function customerprofilesDomainRuleBasedMatchingConflictResolutionToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference | CustomerprofilesDomainRuleBasedMatchingConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_resolving_model: {
      value: cdktf.stringToHclTerraform(struct!.conflictResolvingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainRuleBasedMatchingConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolvingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolvingModel = this._conflictResolvingModel;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatchingConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolvingModel = undefined;
      this._sourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolvingModel = value.conflictResolvingModel;
      this._sourceName = value.sourceName;
    }
  }

  // conflict_resolving_model - computed: false, optional: false, required: true
  private _conflictResolvingModel?: string; 
  public get conflictResolvingModel() {
    return this.getStringAttribute('conflict_resolving_model');
  }
  public set conflictResolvingModel(value: string) {
    this._conflictResolvingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolvingModelInput() {
    return this._conflictResolvingModel;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}
  */
  readonly s3KeyName?: string;
}

export function customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_name: cdktf.stringToTerraform(struct!.s3KeyName),
  }
}


export function customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_name: {
      value: cdktf.stringToHclTerraform(struct!.s3KeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyName = this._s3KeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3KeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyName = value.s3KeyName;
    }
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_name - computed: false, optional: true, required: false
  private _s3KeyName?: string; 
  public get s3KeyName() {
    return this.getStringAttribute('s3_key_name');
  }
  public set s3KeyName(value: string) {
    this._s3KeyName = value;
  }
  public resetS3KeyName() {
    this._s3KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyNameInput() {
    return this._s3KeyName;
  }
}
export interface CustomerprofilesDomainRuleBasedMatchingExportingConfig {
  /**
  * s3_exporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}
  */
  readonly s3Exporting?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;
}

export function customerprofilesDomainRuleBasedMatchingExportingConfigToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_exporting: customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToTerraform(struct!.s3Exporting),
  }
}


export function customerprofilesDomainRuleBasedMatchingExportingConfigToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_exporting: {
      value: customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToHclTerraform(struct!.s3Exporting),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainRuleBasedMatchingExportingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Exporting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Exporting = this._s3Exporting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatchingExportingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Exporting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Exporting.internalValue = value.s3Exporting;
    }
  }

  // s3_exporting - computed: false, optional: true, required: false
  private _s3Exporting = new CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference(this, "s3_exporting");
  public get s3Exporting() {
    return this._s3Exporting;
  }
  public putS3Exporting(value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting) {
    this._s3Exporting.internalValue = value;
  }
  public resetS3Exporting() {
    this._s3Exporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportingInput() {
    return this._s3Exporting.internalValue;
  }
}
export interface CustomerprofilesDomainRuleBasedMatchingMatchingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}
  */
  readonly rule: string[];
}

export function customerprofilesDomainRuleBasedMatchingMatchingRulesToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rule),
  }
}


export function customerprofilesDomainRuleBasedMatchingMatchingRulesToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string[]; 
  public get rule() {
    return this.getListAttribute('rule');
  }
  public set rule(value: string[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class CustomerprofilesDomainRuleBasedMatchingMatchingRulesList extends cdktf.ComplexList {
  public internalValue? : CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable

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
  public get(index: number): CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference {
    return new CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesDomainRuleBasedMatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}
  */
  readonly maxAllowedRuleLevelForMatching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}
  */
  readonly maxAllowedRuleLevelForMerging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}
  */
  readonly status?: string;
  /**
  * attribute_types_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}
  */
  readonly attributeTypesSelector?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;
  /**
  * conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}
  */
  readonly conflictResolution?: CustomerprofilesDomainRuleBasedMatchingConflictResolution;
  /**
  * exporting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}
  */
  readonly exportingConfig?: CustomerprofilesDomainRuleBasedMatchingExportingConfig;
  /**
  * matching_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}
  */
  readonly matchingRules?: CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable;
}

export function customerprofilesDomainRuleBasedMatchingToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingOutputReference | CustomerprofilesDomainRuleBasedMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_allowed_rule_level_for_matching: cdktf.numberToTerraform(struct!.maxAllowedRuleLevelForMatching),
    max_allowed_rule_level_for_merging: cdktf.numberToTerraform(struct!.maxAllowedRuleLevelForMerging),
    status: cdktf.stringToTerraform(struct!.status),
    attribute_types_selector: customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToTerraform(struct!.attributeTypesSelector),
    conflict_resolution: customerprofilesDomainRuleBasedMatchingConflictResolutionToTerraform(struct!.conflictResolution),
    exporting_config: customerprofilesDomainRuleBasedMatchingExportingConfigToTerraform(struct!.exportingConfig),
    matching_rules: cdktf.listMapper(customerprofilesDomainRuleBasedMatchingMatchingRulesToTerraform, true)(struct!.matchingRules),
  }
}


export function customerprofilesDomainRuleBasedMatchingToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingOutputReference | CustomerprofilesDomainRuleBasedMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_allowed_rule_level_for_matching: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedRuleLevelForMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_allowed_rule_level_for_merging: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedRuleLevelForMerging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_types_selector: {
      value: customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToHclTerraform(struct!.attributeTypesSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorList",
    },
    conflict_resolution: {
      value: customerprofilesDomainRuleBasedMatchingConflictResolutionToHclTerraform(struct!.conflictResolution),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainRuleBasedMatchingConflictResolutionList",
    },
    exporting_config: {
      value: customerprofilesDomainRuleBasedMatchingExportingConfigToHclTerraform(struct!.exportingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesDomainRuleBasedMatchingExportingConfigList",
    },
    matching_rules: {
      value: cdktf.listMapperHcl(customerprofilesDomainRuleBasedMatchingMatchingRulesToHclTerraform, true)(struct!.matchingRules),
      isBlock: true,
      type: "set",
      storageClassType: "CustomerprofilesDomainRuleBasedMatchingMatchingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesDomainRuleBasedMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerprofilesDomainRuleBasedMatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxAllowedRuleLevelForMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedRuleLevelForMatching = this._maxAllowedRuleLevelForMatching;
    }
    if (this._maxAllowedRuleLevelForMerging !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedRuleLevelForMerging = this._maxAllowedRuleLevelForMerging;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._attributeTypesSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeTypesSelector = this._attributeTypesSelector?.internalValue;
    }
    if (this._conflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution?.internalValue;
    }
    if (this._exportingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportingConfig = this._exportingConfig?.internalValue;
    }
    if (this._matchingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRules = this._matchingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesDomainRuleBasedMatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxAllowedRuleLevelForMatching = undefined;
      this._maxAllowedRuleLevelForMerging = undefined;
      this._status = undefined;
      this._attributeTypesSelector.internalValue = undefined;
      this._conflictResolution.internalValue = undefined;
      this._exportingConfig.internalValue = undefined;
      this._matchingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxAllowedRuleLevelForMatching = value.maxAllowedRuleLevelForMatching;
      this._maxAllowedRuleLevelForMerging = value.maxAllowedRuleLevelForMerging;
      this._status = value.status;
      this._attributeTypesSelector.internalValue = value.attributeTypesSelector;
      this._conflictResolution.internalValue = value.conflictResolution;
      this._exportingConfig.internalValue = value.exportingConfig;
      this._matchingRules.internalValue = value.matchingRules;
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

  // max_allowed_rule_level_for_matching - computed: false, optional: true, required: false
  private _maxAllowedRuleLevelForMatching?: number; 
  public get maxAllowedRuleLevelForMatching() {
    return this.getNumberAttribute('max_allowed_rule_level_for_matching');
  }
  public set maxAllowedRuleLevelForMatching(value: number) {
    this._maxAllowedRuleLevelForMatching = value;
  }
  public resetMaxAllowedRuleLevelForMatching() {
    this._maxAllowedRuleLevelForMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedRuleLevelForMatchingInput() {
    return this._maxAllowedRuleLevelForMatching;
  }

  // max_allowed_rule_level_for_merging - computed: false, optional: true, required: false
  private _maxAllowedRuleLevelForMerging?: number; 
  public get maxAllowedRuleLevelForMerging() {
    return this.getNumberAttribute('max_allowed_rule_level_for_merging');
  }
  public set maxAllowedRuleLevelForMerging(value: number) {
    this._maxAllowedRuleLevelForMerging = value;
  }
  public resetMaxAllowedRuleLevelForMerging() {
    this._maxAllowedRuleLevelForMerging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedRuleLevelForMergingInput() {
    return this._maxAllowedRuleLevelForMerging;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // attribute_types_selector - computed: false, optional: true, required: false
  private _attributeTypesSelector = new CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference(this, "attribute_types_selector");
  public get attributeTypesSelector() {
    return this._attributeTypesSelector;
  }
  public putAttributeTypesSelector(value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector) {
    this._attributeTypesSelector.internalValue = value;
  }
  public resetAttributeTypesSelector() {
    this._attributeTypesSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypesSelectorInput() {
    return this._attributeTypesSelector.internalValue;
  }

  // conflict_resolution - computed: false, optional: true, required: false
  private _conflictResolution = new CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference(this, "conflict_resolution");
  public get conflictResolution() {
    return this._conflictResolution;
  }
  public putConflictResolution(value: CustomerprofilesDomainRuleBasedMatchingConflictResolution) {
    this._conflictResolution.internalValue = value;
  }
  public resetConflictResolution() {
    this._conflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution.internalValue;
  }

  // exporting_config - computed: false, optional: true, required: false
  private _exportingConfig = new CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference(this, "exporting_config");
  public get exportingConfig() {
    return this._exportingConfig;
  }
  public putExportingConfig(value: CustomerprofilesDomainRuleBasedMatchingExportingConfig) {
    this._exportingConfig.internalValue = value;
  }
  public resetExportingConfig() {
    this._exportingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportingConfigInput() {
    return this._exportingConfig.internalValue;
  }

  // matching_rules - computed: false, optional: true, required: false
  private _matchingRules = new CustomerprofilesDomainRuleBasedMatchingMatchingRulesList(this, "matching_rules", true);
  public get matchingRules() {
    return this._matchingRules;
  }
  public putMatchingRules(value: CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable) {
    this._matchingRules.internalValue = value;
  }
  public resetMatchingRules() {
    this._matchingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRulesInput() {
    return this._matchingRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}
*/
export class CustomerprofilesDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_customerprofiles_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesDomain to import
  * @param importFromId The id of the existing CustomerprofilesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_customerprofiles_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_customerprofiles_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.0',
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
    this._deadLetterQueueUrl = config.deadLetterQueueUrl;
    this._defaultEncryptionKey = config.defaultEncryptionKey;
    this._defaultExpirationDays = config.defaultExpirationDays;
    this._domainName = config.domainName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._matching.internalValue = config.matching;
    this._ruleBasedMatching.internalValue = config.ruleBasedMatching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dead_letter_queue_url - computed: false, optional: true, required: false
  private _deadLetterQueueUrl?: string; 
  public get deadLetterQueueUrl() {
    return this.getStringAttribute('dead_letter_queue_url');
  }
  public set deadLetterQueueUrl(value: string) {
    this._deadLetterQueueUrl = value;
  }
  public resetDeadLetterQueueUrl() {
    this._deadLetterQueueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueUrlInput() {
    return this._deadLetterQueueUrl;
  }

  // default_encryption_key - computed: false, optional: true, required: false
  private _defaultEncryptionKey?: string; 
  public get defaultEncryptionKey() {
    return this.getStringAttribute('default_encryption_key');
  }
  public set defaultEncryptionKey(value: string) {
    this._defaultEncryptionKey = value;
  }
  public resetDefaultEncryptionKey() {
    this._defaultEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionKeyInput() {
    return this._defaultEncryptionKey;
  }

  // default_expiration_days - computed: false, optional: false, required: true
  private _defaultExpirationDays?: number; 
  public get defaultExpirationDays() {
    return this.getNumberAttribute('default_expiration_days');
  }
  public set defaultExpirationDays(value: number) {
    this._defaultExpirationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationDaysInput() {
    return this._defaultExpirationDays;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // matching - computed: false, optional: true, required: false
  private _matching = new CustomerprofilesDomainMatchingOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: CustomerprofilesDomainMatching) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
  }

  // rule_based_matching - computed: false, optional: true, required: false
  private _ruleBasedMatching = new CustomerprofilesDomainRuleBasedMatchingOutputReference(this, "rule_based_matching");
  public get ruleBasedMatching() {
    return this._ruleBasedMatching;
  }
  public putRuleBasedMatching(value: CustomerprofilesDomainRuleBasedMatching) {
    this._ruleBasedMatching.internalValue = value;
  }
  public resetRuleBasedMatching() {
    this._ruleBasedMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleBasedMatchingInput() {
    return this._ruleBasedMatching.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dead_letter_queue_url: cdktf.stringToTerraform(this._deadLetterQueueUrl),
      default_encryption_key: cdktf.stringToTerraform(this._defaultEncryptionKey),
      default_expiration_days: cdktf.numberToTerraform(this._defaultExpirationDays),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      matching: customerprofilesDomainMatchingToTerraform(this._matching.internalValue),
      rule_based_matching: customerprofilesDomainRuleBasedMatchingToTerraform(this._ruleBasedMatching.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dead_letter_queue_url: {
        value: cdktf.stringToHclTerraform(this._deadLetterQueueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_encryption_key: {
        value: cdktf.stringToHclTerraform(this._defaultEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_expiration_days: {
        value: cdktf.numberToHclTerraform(this._defaultExpirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      matching: {
        value: customerprofilesDomainMatchingToHclTerraform(this._matching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesDomainMatchingList",
      },
      rule_based_matching: {
        value: customerprofilesDomainRuleBasedMatchingToHclTerraform(this._ruleBasedMatching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesDomainRuleBasedMatchingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
