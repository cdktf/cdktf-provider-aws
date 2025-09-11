/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
  */
  readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}
  */
  readonly associationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
  */
  readonly automationTargetParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}
  */
  readonly complianceSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#id SsmAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#name SsmAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#region SsmAssociation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}
  */
  readonly syncCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#tags SsmAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#tags_all SsmAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}
  */
  readonly waitForSuccessTimeoutSeconds?: number;
  /**
  * output_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}
  */
  readonly outputLocation?: SsmAssociationOutputLocation;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#targets SsmAssociation#targets}
  */
  readonly targets?: SsmAssociationTargets[] | cdktf.IResolvable;
}
export interface SsmAssociationOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#s3_region SsmAssociation#s3_region}
  */
  readonly s3Region?: string;
}

export function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
  }
}


export function ssmAssociationOutputLocationToHclTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any {
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
    s3_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3KeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmAssociationOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmAssociationOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmAssociationOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3KeyPrefix = undefined;
      this._s3Region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyPrefix = value.s3KeyPrefix;
      this._s3Region = value.s3Region;
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

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // s3_region - computed: false, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }
}
export interface SsmAssociationTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#key SsmAssociation#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#values SsmAssociation#values}
  */
  readonly values: string[];
}

export function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ssmAssociationTargetsToHclTerraform(struct?: SsmAssociationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmAssociationTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmAssociationTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SsmAssociationTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmAssociationTargetsList extends cdktf.ComplexList {
  public internalValue? : SsmAssociationTargets[] | cdktf.IResolvable

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
  public get(index: number): SsmAssociationTargetsOutputReference {
    return new SsmAssociationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association aws_ssm_association}
*/
export class SsmAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmAssociation to import
  * @param importFromId The id of the existing SsmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ssm_association aws_ssm_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
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
    this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
    this._associationName = config.associationName;
    this._automationTargetParameterName = config.automationTargetParameterName;
    this._complianceSeverity = config.complianceSeverity;
    this._documentVersion = config.documentVersion;
    this._id = config.id;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._parameters = config.parameters;
    this._region = config.region;
    this._scheduleExpression = config.scheduleExpression;
    this._syncCompliance = config.syncCompliance;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._waitForSuccessTimeoutSeconds = config.waitForSuccessTimeoutSeconds;
    this._outputLocation.internalValue = config.outputLocation;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_only_at_cron_interval - computed: false, optional: true, required: false
  private _applyOnlyAtCronInterval?: boolean | cdktf.IResolvable; 
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval');
  }
  public set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable) {
    this._applyOnlyAtCronInterval = value;
  }
  public resetApplyOnlyAtCronInterval() {
    this._applyOnlyAtCronInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyAtCronIntervalInput() {
    return this._applyOnlyAtCronInterval;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: false, optional: true, required: false
  private _associationName?: string; 
  public get associationName() {
    return this.getStringAttribute('association_name');
  }
  public set associationName(value: string) {
    this._associationName = value;
  }
  public resetAssociationName() {
    this._associationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationNameInput() {
    return this._associationName;
  }

  // automation_target_parameter_name - computed: false, optional: true, required: false
  private _automationTargetParameterName?: string; 
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }
  public set automationTargetParameterName(value: string) {
    this._automationTargetParameterName = value;
  }
  public resetAutomationTargetParameterName() {
    this._automationTargetParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTargetParameterNameInput() {
    return this._automationTargetParameterName;
  }

  // compliance_severity - computed: false, optional: true, required: false
  private _complianceSeverity?: string; 
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }
  public set complianceSeverity(value: string) {
    this._complianceSeverity = value;
  }
  public resetComplianceSeverity() {
    this._complianceSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSeverityInput() {
    return this._complianceSeverity;
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
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

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_errors - computed: false, optional: true, required: false
  private _maxErrors?: string; 
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // sync_compliance - computed: false, optional: true, required: false
  private _syncCompliance?: string; 
  public get syncCompliance() {
    return this.getStringAttribute('sync_compliance');
  }
  public set syncCompliance(value: string) {
    this._syncCompliance = value;
  }
  public resetSyncCompliance() {
    this._syncCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncComplianceInput() {
    return this._syncCompliance;
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

  // wait_for_success_timeout_seconds - computed: false, optional: true, required: false
  private _waitForSuccessTimeoutSeconds?: number; 
  public get waitForSuccessTimeoutSeconds() {
    return this.getNumberAttribute('wait_for_success_timeout_seconds');
  }
  public set waitForSuccessTimeoutSeconds(value: number) {
    this._waitForSuccessTimeoutSeconds = value;
  }
  public resetWaitForSuccessTimeoutSeconds() {
    this._waitForSuccessTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSuccessTimeoutSecondsInput() {
    return this._waitForSuccessTimeoutSeconds;
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation = new SsmAssociationOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: SsmAssociationOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  public resetOutputLocation() {
    this._outputLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new SsmAssociationTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmAssociationTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_only_at_cron_interval: cdktf.booleanToTerraform(this._applyOnlyAtCronInterval),
      association_name: cdktf.stringToTerraform(this._associationName),
      automation_target_parameter_name: cdktf.stringToTerraform(this._automationTargetParameterName),
      compliance_severity: cdktf.stringToTerraform(this._complianceSeverity),
      document_version: cdktf.stringToTerraform(this._documentVersion),
      id: cdktf.stringToTerraform(this._id),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      region: cdktf.stringToTerraform(this._region),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      sync_compliance: cdktf.stringToTerraform(this._syncCompliance),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      wait_for_success_timeout_seconds: cdktf.numberToTerraform(this._waitForSuccessTimeoutSeconds),
      output_location: ssmAssociationOutputLocationToTerraform(this._outputLocation.internalValue),
      targets: cdktf.listMapper(ssmAssociationTargetsToTerraform, true)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_only_at_cron_interval: {
        value: cdktf.booleanToHclTerraform(this._applyOnlyAtCronInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      association_name: {
        value: cdktf.stringToHclTerraform(this._associationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation_target_parameter_name: {
        value: cdktf.stringToHclTerraform(this._automationTargetParameterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_severity: {
        value: cdktf.stringToHclTerraform(this._complianceSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_version: {
        value: cdktf.stringToHclTerraform(this._documentVersion),
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
      max_concurrency: {
        value: cdktf.stringToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_errors: {
        value: cdktf.stringToHclTerraform(this._maxErrors),
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
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_expression: {
        value: cdktf.stringToHclTerraform(this._scheduleExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_compliance: {
        value: cdktf.stringToHclTerraform(this._syncCompliance),
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
      wait_for_success_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._waitForSuccessTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      output_location: {
        value: ssmAssociationOutputLocationToHclTerraform(this._outputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmAssociationOutputLocationList",
      },
      targets: {
        value: cdktf.listMapperHcl(ssmAssociationTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmAssociationTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
