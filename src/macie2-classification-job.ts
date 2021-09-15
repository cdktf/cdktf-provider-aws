// https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}
  */
  readonly customDataIdentifierIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#description Macie2ClassificationJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#initial_run Macie2ClassificationJob#initial_run}
  */
  readonly initialRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_status Macie2ClassificationJob#job_status}
  */
  readonly jobStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_type Macie2ClassificationJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name Macie2ClassificationJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name_prefix Macie2ClassificationJob#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#sampling_percentage Macie2ClassificationJob#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags Macie2ClassificationJob#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags_all Macie2ClassificationJob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * s3_job_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#s3_job_definition Macie2ClassificationJob#s3_job_definition}
  */
  readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition[];
  /**
  * schedule_frequency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#schedule_frequency Macie2ClassificationJob#schedule_frequency}
  */
  readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency[];
}
export class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {

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
export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#account_id Macie2ClassificationJob#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#buckets Macie2ClassificationJob#buckets}
  */
  readonly buckets: string[];
}

function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.buckets),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
}

function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm[];
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm[];
}

function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform)(struct!.simpleScopeTerm),
    tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform)(struct!.tagScopeTerm),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
}

function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct!.and),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
  */
  readonly values?: string[];
}

function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
  */
  readonly value?: string;
}

function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
  */
  readonly target?: string;
  /**
  * tag_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
  */
  readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
}

function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm[];
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm[];
}

function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform)(struct!.simpleScopeTerm),
    tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform)(struct!.tagScopeTerm),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
  */
  readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
}

function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct!.and),
  }
}

export interface Macie2ClassificationJobS3JobDefinitionScoping {
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#excludes Macie2ClassificationJob#excludes}
  */
  readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes[];
  /**
  * includes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#includes Macie2ClassificationJob#includes}
  */
  readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes[];
}

function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScoping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excludes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform)(struct!.excludes),
    includes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform)(struct!.includes),
  }
}

export interface Macie2ClassificationJobS3JobDefinition {
  /**
  * bucket_definitions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#bucket_definitions Macie2ClassificationJob#bucket_definitions}
  */
  readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
  /**
  * scoping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#scoping Macie2ClassificationJob#scoping}
  */
  readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping[];
}

function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct!.bucketDefinitions),
    scoping: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingToTerraform)(struct!.scoping),
  }
}

export interface Macie2ClassificationJobScheduleFrequency {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#daily_schedule Macie2ClassificationJob#daily_schedule}
  */
  readonly dailySchedule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#monthly_schedule Macie2ClassificationJob#monthly_schedule}
  */
  readonly monthlySchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#weekly_schedule Macie2ClassificationJob#weekly_schedule}
  */
  readonly weeklySchedule?: string;
}

function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    daily_schedule: cdktf.booleanToTerraform(struct!.dailySchedule),
    monthly_schedule: cdktf.numberToTerraform(struct!.monthlySchedule),
    weekly_schedule: cdktf.stringToTerraform(struct!.weeklySchedule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}
*/
export class Macie2ClassificationJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_classification_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2ClassificationJobConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_classification_job',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customDataIdentifierIds = config.customDataIdentifierIds;
    this._description = config.description;
    this._initialRun = config.initialRun;
    this._jobStatus = config.jobStatus;
    this._jobType = config.jobType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3JobDefinition = config.s3JobDefinition;
    this._scheduleFrequency = config.scheduleFrequency;
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
    return this._customDataIdentifierIds
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
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_run - computed: false, optional: true, required: false
  private _initialRun?: boolean | cdktf.IResolvable;
  public get initialRun() {
    return this.getBooleanAttribute('initial_run');
  }
  public set initialRun(value: boolean | cdktf.IResolvable ) {
    this._initialRun = value;
  }
  public resetInitialRun() {
    this._initialRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRunInput() {
    return this._initialRun
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
    return this._jobStatus
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType: string;
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType
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
    return this._name
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
    return this._namePrefix
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
    return this._samplingPercentage
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // user_paused_details - computed: true, optional: false, required: false
  public userPausedDetails(index: string) {
    return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
  }

  // s3_job_definition - computed: false, optional: false, required: true
  private _s3JobDefinition: Macie2ClassificationJobS3JobDefinition[];
  public get s3JobDefinition() {
    return this.interpolationForAttribute('s3_job_definition') as any;
  }
  public set s3JobDefinition(value: Macie2ClassificationJobS3JobDefinition[]) {
    this._s3JobDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3JobDefinitionInput() {
    return this._s3JobDefinition
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency?: Macie2ClassificationJobScheduleFrequency[];
  public get scheduleFrequency() {
    return this.interpolationForAttribute('schedule_frequency') as any;
  }
  public set scheduleFrequency(value: Macie2ClassificationJobScheduleFrequency[] ) {
    this._scheduleFrequency = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customDataIdentifierIds),
      description: cdktf.stringToTerraform(this._description),
      initial_run: cdktf.booleanToTerraform(this._initialRun),
      job_status: cdktf.stringToTerraform(this._jobStatus),
      job_type: cdktf.stringToTerraform(this._jobType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      s3_job_definition: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionToTerraform)(this._s3JobDefinition),
      schedule_frequency: cdktf.listMapper(macie2ClassificationJobScheduleFrequencyToTerraform)(this._scheduleFrequency),
    };
  }
}
