// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS GuardDuty
*/
export namespace GuardDuty {
  export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags GuarddutyDetector#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags_all GuarddutyDetector#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * datasources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#datasources GuarddutyDetector#datasources}
    */
    readonly datasources?: GuarddutyDetectorDatasources;
  }
  export interface GuarddutyDetectorDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
  }

  function guarddutyDetectorDatasourcesS3LogsToTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enable: cdktf.booleanToTerraform(struct!.enable),
    }
  }

  export class GuarddutyDetectorDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enable - computed: false, optional: false, required: true
    private _enable?: boolean | cdktf.IResolvable; 
    public get enable() {
      return this.getBooleanAttribute('enable') as any;
    }
    public set enable(value: boolean | cdktf.IResolvable) {
      this._enable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
      return this._enable
    }
  }
  export interface GuarddutyDetectorDatasources {
    /**
    * s3_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#s3_logs GuarddutyDetector#s3_logs}
    */
    readonly s3Logs?: GuarddutyDetectorDatasourcesS3Logs;
  }

  function guarddutyDetectorDatasourcesToTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_logs: guarddutyDetectorDatasourcesS3LogsToTerraform(struct!.s3Logs),
    }
  }

  export class GuarddutyDetectorDatasourcesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_logs - computed: false, optional: true, required: false
    private _s3Logs?: GuarddutyDetectorDatasourcesS3Logs | undefined; 
    private __s3LogsOutput = new GuarddutyDetectorDatasourcesS3LogsOutputReference(this as any, "s3_logs", true);
    public get s3Logs() {
      return this.__s3LogsOutput;
    }
    public putS3Logs(value: GuarddutyDetectorDatasourcesS3Logs | undefined) {
      this._s3Logs = value;
    }
    public resetS3Logs() {
      this._s3Logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
      return this._s3Logs
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector}
  */
  export class GuarddutyDetector extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_detector";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorConfig = {}
    */
    public constructor(scope: Construct, id: string, config: GuarddutyDetectorConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_detector',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enable = config.enable;
      this._findingPublishingFrequency = config.findingPublishingFrequency;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._datasources = config.datasources;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
      return this.getStringAttribute('account_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // enable - computed: false, optional: true, required: false
    private _enable?: boolean | cdktf.IResolvable | undefined; 
    public get enable() {
      return this.getBooleanAttribute('enable') as any;
    }
    public set enable(value: boolean | cdktf.IResolvable | undefined) {
      this._enable = value;
    }
    public resetEnable() {
      this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
      return this._enable
    }

    // finding_publishing_frequency - computed: true, optional: true, required: false
    private _findingPublishingFrequency?: string | undefined; 
    public get findingPublishingFrequency() {
      return this.getStringAttribute('finding_publishing_frequency');
    }
    public set findingPublishingFrequency(value: string | undefined) {
      this._findingPublishingFrequency = value;
    }
    public resetFindingPublishingFrequency() {
      this._findingPublishingFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingPublishingFrequencyInput() {
      return this._findingPublishingFrequency
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // datasources - computed: false, optional: true, required: false
    private _datasources?: GuarddutyDetectorDatasources | undefined; 
    private __datasourcesOutput = new GuarddutyDetectorDatasourcesOutputReference(this as any, "datasources", true);
    public get datasources() {
      return this.__datasourcesOutput;
    }
    public putDatasources(value: GuarddutyDetectorDatasources | undefined) {
      this._datasources = value;
    }
    public resetDatasources() {
      this._datasources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasourcesInput() {
      return this._datasources
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enable: cdktf.booleanToTerraform(this._enable),
        finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        datasources: guarddutyDetectorDatasourcesToTerraform(this._datasources),
      };
    }
  }
  export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#action GuarddutyFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#description GuarddutyFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#detector_id GuarddutyFilter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#name GuarddutyFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#rank GuarddutyFilter#rank}
    */
    readonly rank: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags GuarddutyFilter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags_all GuarddutyFilter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * finding_criteria block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#finding_criteria GuarddutyFilter#finding_criteria}
    */
    readonly findingCriteria: GuarddutyFilterFindingCriteria;
  }
  export interface GuarddutyFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#equals GuarddutyFilter#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#field GuarddutyFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than GuarddutyFilter#greater_than}
    */
    readonly greaterThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}
    */
    readonly greaterThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than GuarddutyFilter#less_than}
    */
    readonly lessThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than_or_equal GuarddutyFilter#less_than_or_equal}
    */
    readonly lessThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#not_equals GuarddutyFilter#not_equals}
    */
    readonly notEquals?: string[];
  }

  function guarddutyFilterFindingCriteriaCriterionToTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.equalTo),
      field: cdktf.stringToTerraform(struct!.field),
      greater_than: cdktf.stringToTerraform(struct!.greaterThan),
      greater_than_or_equal: cdktf.stringToTerraform(struct!.greaterThanOrEqual),
      less_than: cdktf.stringToTerraform(struct!.lessThan),
      less_than_or_equal: cdktf.stringToTerraform(struct!.lessThanOrEqual),
      not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notEquals),
    }
  }

  export interface GuarddutyFilterFindingCriteria {
    /**
    * criterion block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#criterion GuarddutyFilter#criterion}
    */
    readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
  }

  function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteriaOutputReference | GuarddutyFilterFindingCriteria): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      criterion: cdktf.listMapper(guarddutyFilterFindingCriteriaCriterionToTerraform)(struct!.criterion),
    }
  }

  export class GuarddutyFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // criterion - computed: false, optional: false, required: true
    private _criterion?: GuarddutyFilterFindingCriteriaCriterion[]; 
    public get criterion() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('criterion') as any;
    }
    public set criterion(value: GuarddutyFilterFindingCriteriaCriterion[]) {
      this._criterion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get criterionInput() {
      return this._criterion
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter}
  */
  export class GuarddutyFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyFilterConfig
    */
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
      this._tagsAll = config.tagsAll;
      this._findingCriteria = config.findingCriteria;
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
      return this._action
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
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
      return this._detectorId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
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
      return this._rank
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // finding_criteria - computed: false, optional: false, required: true
    private _findingCriteria?: GuarddutyFilterFindingCriteria; 
    private __findingCriteriaOutput = new GuarddutyFilterFindingCriteriaOutputReference(this as any, "finding_criteria", true);
    public get findingCriteria() {
      return this.__findingCriteriaOutput;
    }
    public putFindingCriteria(value: GuarddutyFilterFindingCriteria) {
      this._findingCriteria = value;
    }
    // Temporarily expose input value. Use with caution.
    public get findingCriteriaInput() {
      return this._findingCriteria
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        description: cdktf.stringToTerraform(this._description),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        name: cdktf.stringToTerraform(this._name),
        rank: cdktf.numberToTerraform(this._rank),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        finding_criteria: guarddutyFilterFindingCriteriaToTerraform(this._findingCriteria),
      };
    }
  }
  export interface GuarddutyInviteAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#detector_id GuarddutyInviteAccepter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#master_account_id GuarddutyInviteAccepter#master_account_id}
    */
    readonly masterAccountId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#timeouts GuarddutyInviteAccepter#timeouts}
    */
    readonly timeouts?: GuarddutyInviteAccepterTimeouts;
  }
  export interface GuarddutyInviteAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#create GuarddutyInviteAccepter#create}
    */
    readonly create?: string;
  }

  function guarddutyInviteAccepterTimeoutsToTerraform(struct?: GuarddutyInviteAccepterTimeoutsOutputReference | GuarddutyInviteAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class GuarddutyInviteAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter}
  */
  export class GuarddutyInviteAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_invite_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyInviteAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_invite_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._detectorId = config.detectorId;
      this._masterAccountId = config.masterAccountId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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
      return this._detectorId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // master_account_id - computed: false, optional: false, required: true
    private _masterAccountId?: string; 
    public get masterAccountId() {
      return this.getStringAttribute('master_account_id');
    }
    public set masterAccountId(value: string) {
      this._masterAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get masterAccountIdInput() {
      return this._masterAccountId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GuarddutyInviteAccepterTimeouts | undefined; 
    private __timeoutsOutput = new GuarddutyInviteAccepterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GuarddutyInviteAccepterTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        detector_id: cdktf.stringToTerraform(this._detectorId),
        master_account_id: cdktf.stringToTerraform(this._masterAccountId),
        timeouts: guarddutyInviteAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GuarddutyIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#activate GuarddutyIpset#activate}
    */
    readonly activate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#detector_id GuarddutyIpset#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#format GuarddutyIpset#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#location GuarddutyIpset#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#name GuarddutyIpset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#tags GuarddutyIpset#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#tags_all GuarddutyIpset#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset}
  */
  export class GuarddutyIpset extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_ipset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyIpsetConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyIpsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_ipset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._activate = config.activate;
      this._detectorId = config.detectorId;
      this._format = config.format;
      this._location = config.location;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activate - computed: false, optional: false, required: true
    private _activate?: boolean | cdktf.IResolvable; 
    public get activate() {
      return this.getBooleanAttribute('activate') as any;
    }
    public set activate(value: boolean | cdktf.IResolvable) {
      this._activate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get activateInput() {
      return this._activate
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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
      return this._detectorId
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
      return this._format
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string) {
      this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        activate: cdktf.booleanToTerraform(this._activate),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        format: cdktf.stringToTerraform(this._format),
        location: cdktf.stringToTerraform(this._location),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#account_id GuarddutyMember#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#detector_id GuarddutyMember#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#disable_email_notification GuarddutyMember#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#email GuarddutyMember#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invitation_message GuarddutyMember#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invite GuarddutyMember#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#timeouts GuarddutyMember#timeouts}
    */
    readonly timeouts?: GuarddutyMemberTimeouts;
  }
  export interface GuarddutyMemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#create GuarddutyMember#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#update GuarddutyMember#update}
    */
    readonly update?: string;
  }

  function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeoutsOutputReference | GuarddutyMemberTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class GuarddutyMemberTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member}
  */
  export class GuarddutyMember extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_member";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyMemberConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyMemberConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_member',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._detectorId = config.detectorId;
      this._disableEmailNotification = config.disableEmailNotification;
      this._email = config.email;
      this._invitationMessage = config.invitationMessage;
      this._invite = config.invite;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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
      return this._accountId
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
      return this._detectorId
    }

    // disable_email_notification - computed: false, optional: true, required: false
    private _disableEmailNotification?: boolean | cdktf.IResolvable | undefined; 
    public get disableEmailNotification() {
      return this.getBooleanAttribute('disable_email_notification') as any;
    }
    public set disableEmailNotification(value: boolean | cdktf.IResolvable | undefined) {
      this._disableEmailNotification = value;
    }
    public resetDisableEmailNotification() {
      this._disableEmailNotification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableEmailNotificationInput() {
      return this._disableEmailNotification
    }

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
      return this.getStringAttribute('email');
    }
    public set email(value: string) {
      this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
      return this._email
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invitation_message - computed: false, optional: true, required: false
    private _invitationMessage?: string | undefined; 
    public get invitationMessage() {
      return this.getStringAttribute('invitation_message');
    }
    public set invitationMessage(value: string | undefined) {
      this._invitationMessage = value;
    }
    public resetInvitationMessage() {
      this._invitationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invitationMessageInput() {
      return this._invitationMessage
    }

    // invite - computed: false, optional: true, required: false
    private _invite?: boolean | cdktf.IResolvable | undefined; 
    public get invite() {
      return this.getBooleanAttribute('invite') as any;
    }
    public set invite(value: boolean | cdktf.IResolvable | undefined) {
      this._invite = value;
    }
    public resetInvite() {
      this._invite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inviteInput() {
      return this._invite
    }

    // relationship_status - computed: true, optional: false, required: false
    public get relationshipStatus() {
      return this.getStringAttribute('relationship_status');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GuarddutyMemberTimeouts | undefined; 
    private __timeoutsOutput = new GuarddutyMemberTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GuarddutyMemberTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        disable_email_notification: cdktf.booleanToTerraform(this._disableEmailNotification),
        email: cdktf.stringToTerraform(this._email),
        invitation_message: cdktf.stringToTerraform(this._invitationMessage),
        invite: cdktf.booleanToTerraform(this._invite),
        timeouts: guarddutyMemberTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GuarddutyOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html#admin_account_id GuarddutyOrganizationAdminAccount#admin_account_id}
    */
    readonly adminAccountId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html aws_guardduty_organization_admin_account}
  */
  export class GuarddutyOrganizationAdminAccount extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_organization_admin_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html aws_guardduty_organization_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationAdminAccountConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyOrganizationAdminAccountConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_organization_admin_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._adminAccountId = config.adminAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_account_id - computed: false, optional: false, required: true
    private _adminAccountId?: string; 
    public get adminAccountId() {
      return this.getStringAttribute('admin_account_id');
    }
    public set adminAccountId(value: string) {
      this._adminAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminAccountIdInput() {
      return this._adminAccountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
      };
    }
  }
  export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#detector_id GuarddutyOrganizationConfiguration#detector_id}
    */
    readonly detectorId: string;
    /**
    * datasources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#datasources GuarddutyOrganizationConfiguration#datasources}
    */
    readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
  }
  export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
  }

  function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auto_enable: cdktf.booleanToTerraform(struct!.autoEnable),
    }
  }

  export class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auto_enable - computed: false, optional: false, required: true
    private _autoEnable?: boolean | cdktf.IResolvable; 
    public get autoEnable() {
      return this.getBooleanAttribute('auto_enable') as any;
    }
    public set autoEnable(value: boolean | cdktf.IResolvable) {
      this._autoEnable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnableInput() {
      return this._autoEnable
    }
  }
  export interface GuarddutyOrganizationConfigurationDatasources {
    /**
    * s3_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
    */
    readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
  }

  function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_logs: guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct!.s3Logs),
    }
  }

  export class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_logs - computed: false, optional: true, required: false
    private _s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined; 
    private __s3LogsOutput = new GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(this as any, "s3_logs", true);
    public get s3Logs() {
      return this.__s3LogsOutput;
    }
    public putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined) {
      this._s3Logs = value;
    }
    public resetS3Logs() {
      this._s3Logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
      return this._s3Logs
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}
  */
  export class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_organization_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_organization_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoEnable = config.autoEnable;
      this._detectorId = config.detectorId;
      this._datasources = config.datasources;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_enable - computed: false, optional: false, required: true
    private _autoEnable?: boolean | cdktf.IResolvable; 
    public get autoEnable() {
      return this.getBooleanAttribute('auto_enable') as any;
    }
    public set autoEnable(value: boolean | cdktf.IResolvable) {
      this._autoEnable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnableInput() {
      return this._autoEnable
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
      return this._detectorId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // datasources - computed: false, optional: true, required: false
    private _datasources?: GuarddutyOrganizationConfigurationDatasources | undefined; 
    private __datasourcesOutput = new GuarddutyOrganizationConfigurationDatasourcesOutputReference(this as any, "datasources", true);
    public get datasources() {
      return this.__datasourcesOutput;
    }
    public putDatasources(value: GuarddutyOrganizationConfigurationDatasources | undefined) {
      this._datasources = value;
    }
    public resetDatasources() {
      this._datasources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasourcesInput() {
      return this._datasources
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_enable: cdktf.booleanToTerraform(this._autoEnable),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        datasources: guarddutyOrganizationConfigurationDatasourcesToTerraform(this._datasources),
      };
    }
  }
  export interface GuarddutyPublishingDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#destination_arn GuarddutyPublishingDestination#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#destination_type GuarddutyPublishingDestination#destination_type}
    */
    readonly destinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#detector_id GuarddutyPublishingDestination#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}
    */
    readonly kmsKeyArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination}
  */
  export class GuarddutyPublishingDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_publishing_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyPublishingDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyPublishingDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_publishing_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinationArn = config.destinationArn;
      this._destinationType = config.destinationType;
      this._detectorId = config.detectorId;
      this._kmsKeyArn = config.kmsKeyArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
      return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
      this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
      return this._destinationArn
    }

    // destination_type - computed: false, optional: true, required: false
    private _destinationType?: string | undefined; 
    public get destinationType() {
      return this.getStringAttribute('destination_type');
    }
    public set destinationType(value: string | undefined) {
      this._destinationType = value;
    }
    public resetDestinationType() {
      this._destinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTypeInput() {
      return this._destinationType
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
      return this._detectorId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: false, optional: false, required: true
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
      this._kmsKeyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        destination_arn: cdktf.stringToTerraform(this._destinationArn),
        destination_type: cdktf.stringToTerraform(this._destinationType),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      };
    }
  }
  export interface GuarddutyThreatintelsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#activate GuarddutyThreatintelset#activate}
    */
    readonly activate: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#detector_id GuarddutyThreatintelset#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#format GuarddutyThreatintelset#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#location GuarddutyThreatintelset#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#name GuarddutyThreatintelset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags GuarddutyThreatintelset#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags_all GuarddutyThreatintelset#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset}
  */
  export class GuarddutyThreatintelset extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_threatintelset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyThreatintelsetConfig
    */
    public constructor(scope: Construct, id: string, config: GuarddutyThreatintelsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_threatintelset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._activate = config.activate;
      this._detectorId = config.detectorId;
      this._format = config.format;
      this._location = config.location;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activate - computed: false, optional: false, required: true
    private _activate?: boolean | cdktf.IResolvable; 
    public get activate() {
      return this.getBooleanAttribute('activate') as any;
    }
    public set activate(value: boolean | cdktf.IResolvable) {
      this._activate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get activateInput() {
      return this._activate
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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
      return this._detectorId
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
      return this._format
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string) {
      this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        activate: cdktf.booleanToTerraform(this._activate),
        detector_id: cdktf.stringToTerraform(this._detectorId),
        format: cdktf.stringToTerraform(this._format),
        location: cdktf.stringToTerraform(this._location),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector}
  */
  export class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_guardduty_detector";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGuarddutyDetectorConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsGuarddutyDetectorConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_guardduty_detector',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // finding_publishing_frequency - computed: true, optional: false, required: false
    public get findingPublishingFrequency() {
      return this.getStringAttribute('finding_publishing_frequency');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_role_arn - computed: true, optional: false, required: false
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
}
