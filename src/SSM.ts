// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export namespace SSM {
  export interface SsmActivationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#description SsmActivation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#expiration_date SsmActivation#expiration_date}
    */
    readonly expirationDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#iam_role SsmActivation#iam_role}
    */
    readonly iamRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#name SsmActivation#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#registration_limit SsmActivation#registration_limit}
    */
    readonly registrationLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#tags SsmActivation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html#tags_all SsmActivation#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation}
  */
  export class SsmActivation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_activation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmActivationConfig
    */
    public constructor(scope: Construct, id: string, config: SsmActivationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_activation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._expirationDate = config.expirationDate;
      this._iamRole = config.iamRole;
      this._name = config.name;
      this._registrationLimit = config.registrationLimit;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_code - computed: true, optional: false, required: false
    public get activationCode() {
      return this.getStringAttribute('activation_code');
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

    // expiration_date - computed: true, optional: true, required: false
    private _expirationDate?: string | undefined; 
    public get expirationDate() {
      return this.getStringAttribute('expiration_date');
    }
    public set expirationDate(value: string | undefined) {
      this._expirationDate = value;
    }
    public resetExpirationDate() {
      this._expirationDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationDateInput() {
      return this._expirationDate
    }

    // expired - computed: true, optional: false, required: false
    public get expired() {
      return this.getBooleanAttribute('expired') as any;
    }

    // iam_role - computed: false, optional: false, required: true
    private _iamRole?: string; 
    public get iamRole() {
      return this.getStringAttribute('iam_role');
    }
    public set iamRole(value: string) {
      this._iamRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleInput() {
      return this._iamRole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // registration_count - computed: true, optional: false, required: false
    public get registrationCount() {
      return this.getNumberAttribute('registration_count');
    }

    // registration_limit - computed: false, optional: true, required: false
    private _registrationLimit?: number | undefined; 
    public get registrationLimit() {
      return this.getNumberAttribute('registration_limit');
    }
    public set registrationLimit(value: number | undefined) {
      this._registrationLimit = value;
    }
    public resetRegistrationLimit() {
      this._registrationLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registrationLimitInput() {
      return this._registrationLimit
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
        description: cdktf.stringToTerraform(this._description),
        expiration_date: cdktf.stringToTerraform(this._expirationDate),
        iam_role: cdktf.stringToTerraform(this._iamRole),
        name: cdktf.stringToTerraform(this._name),
        registration_limit: cdktf.numberToTerraform(this._registrationLimit),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
    */
    readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#association_name SsmAssociation#association_name}
    */
    readonly associationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
    */
    readonly automationTargetParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}
    */
    readonly complianceSeverity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#document_version SsmAssociation#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#instance_id SsmAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}
    */
    readonly maxConcurrency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_errors SsmAssociation#max_errors}
    */
    readonly maxErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#name SsmAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#parameters SsmAssociation#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * output_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#output_location SsmAssociation#output_location}
    */
    readonly outputLocation?: SsmAssociationOutputLocation;
    /**
    * targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#targets SsmAssociation#targets}
    */
    readonly targets?: SsmAssociationTargets[];
  }
  export interface SsmAssociationOutputLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_bucket_name SsmAssociation#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_key_prefix SsmAssociation#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
  }

  function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    }
  }

  export class SsmAssociationOutputLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._s3BucketName
    }

    // s3_key_prefix - computed: false, optional: true, required: false
    private _s3KeyPrefix?: string | undefined; 
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string | undefined) {
      this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
      this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
      return this._s3KeyPrefix
    }
  }
  export interface SsmAssociationTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#key SsmAssociation#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#values SsmAssociation#values}
    */
    readonly values: string[];
  }

  function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association}
  */
  export class SsmAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
      this._associationName = config.associationName;
      this._automationTargetParameterName = config.automationTargetParameterName;
      this._complianceSeverity = config.complianceSeverity;
      this._documentVersion = config.documentVersion;
      this._instanceId = config.instanceId;
      this._maxConcurrency = config.maxConcurrency;
      this._maxErrors = config.maxErrors;
      this._name = config.name;
      this._parameters = config.parameters;
      this._scheduleExpression = config.scheduleExpression;
      this._outputLocation = config.outputLocation;
      this._targets = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // apply_only_at_cron_interval - computed: false, optional: true, required: false
    private _applyOnlyAtCronInterval?: boolean | cdktf.IResolvable | undefined; 
    public get applyOnlyAtCronInterval() {
      return this.getBooleanAttribute('apply_only_at_cron_interval') as any;
    }
    public set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable | undefined) {
      this._applyOnlyAtCronInterval = value;
    }
    public resetApplyOnlyAtCronInterval() {
      this._applyOnlyAtCronInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyOnlyAtCronIntervalInput() {
      return this._applyOnlyAtCronInterval
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // association_name - computed: false, optional: true, required: false
    private _associationName?: string | undefined; 
    public get associationName() {
      return this.getStringAttribute('association_name');
    }
    public set associationName(value: string | undefined) {
      this._associationName = value;
    }
    public resetAssociationName() {
      this._associationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationNameInput() {
      return this._associationName
    }

    // automation_target_parameter_name - computed: false, optional: true, required: false
    private _automationTargetParameterName?: string | undefined; 
    public get automationTargetParameterName() {
      return this.getStringAttribute('automation_target_parameter_name');
    }
    public set automationTargetParameterName(value: string | undefined) {
      this._automationTargetParameterName = value;
    }
    public resetAutomationTargetParameterName() {
      this._automationTargetParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automationTargetParameterNameInput() {
      return this._automationTargetParameterName
    }

    // compliance_severity - computed: false, optional: true, required: false
    private _complianceSeverity?: string | undefined; 
    public get complianceSeverity() {
      return this.getStringAttribute('compliance_severity');
    }
    public set complianceSeverity(value: string | undefined) {
      this._complianceSeverity = value;
    }
    public resetComplianceSeverity() {
      this._complianceSeverity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceSeverityInput() {
      return this._complianceSeverity
    }

    // document_version - computed: true, optional: true, required: false
    private _documentVersion?: string | undefined; 
    public get documentVersion() {
      return this.getStringAttribute('document_version');
    }
    public set documentVersion(value: string | undefined) {
      this._documentVersion = value;
    }
    public resetDocumentVersion() {
      this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentVersionInput() {
      return this._documentVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // max_concurrency - computed: false, optional: true, required: false
    private _maxConcurrency?: string | undefined; 
    public get maxConcurrency() {
      return this.getStringAttribute('max_concurrency');
    }
    public set maxConcurrency(value: string | undefined) {
      this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
      this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
      return this._maxConcurrency
    }

    // max_errors - computed: false, optional: true, required: false
    private _maxErrors?: string | undefined; 
    public get maxErrors() {
      return this.getStringAttribute('max_errors');
    }
    public set maxErrors(value: string | undefined) {
      this._maxErrors = value;
    }
    public resetMaxErrors() {
      this._maxErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxErrorsInput() {
      return this._maxErrors
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

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // schedule_expression - computed: false, optional: true, required: false
    private _scheduleExpression?: string | undefined; 
    public get scheduleExpression() {
      return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string | undefined) {
      this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
      this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
      return this._scheduleExpression
    }

    // output_location - computed: false, optional: true, required: false
    private _outputLocation?: SsmAssociationOutputLocation | undefined; 
    private __outputLocationOutput = new SsmAssociationOutputLocationOutputReference(this as any, "output_location", true);
    public get outputLocation() {
      return this.__outputLocationOutput;
    }
    public putOutputLocation(value: SsmAssociationOutputLocation | undefined) {
      this._outputLocation = value;
    }
    public resetOutputLocation() {
      this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
      return this._outputLocation
    }

    // targets - computed: false, optional: true, required: false
    private _targets?: SsmAssociationTargets[] | undefined; 
    public get targets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('targets') as any;
    }
    public set targets(value: SsmAssociationTargets[] | undefined) {
      this._targets = value;
    }
    public resetTargets() {
      this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
      return this._targets
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
        instance_id: cdktf.stringToTerraform(this._instanceId),
        max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
        max_errors: cdktf.stringToTerraform(this._maxErrors),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
        output_location: ssmAssociationOutputLocationToTerraform(this._outputLocation),
        targets: cdktf.listMapper(ssmAssociationTargetsToTerraform)(this._targets),
      };
    }
  }
  export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#content SsmDocument#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_format SsmDocument#document_format}
    */
    readonly documentFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_type SsmDocument#document_type}
    */
    readonly documentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#permissions SsmDocument#permissions}
    */
    readonly permissions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags SsmDocument#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags_all SsmDocument#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#target_type SsmDocument#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#version_name SsmDocument#version_name}
    */
    readonly versionName?: string;
    /**
    * attachments_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#attachments_source SsmDocument#attachments_source}
    */
    readonly attachmentsSource?: SsmDocumentAttachmentsSource[];
  }
  export class SsmDocumentParameter extends cdktf.ComplexComputedList {

    // default_value - computed: true, optional: false, required: false
    public get defaultValue() {
      return this.getStringAttribute('default_value');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export interface SsmDocumentAttachmentsSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#key SsmDocument#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#values SsmDocument#values}
    */
    readonly values: string[];
  }

  function ssmDocumentAttachmentsSourceToTerraform(struct?: SsmDocumentAttachmentsSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document}
  */
  export class SsmDocument extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_document";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmDocumentConfig
    */
    public constructor(scope: Construct, id: string, config: SsmDocumentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_document',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._content = config.content;
      this._documentFormat = config.documentFormat;
      this._documentType = config.documentType;
      this._name = config.name;
      this._permissions = config.permissions;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetType = config.targetType;
      this._versionName = config.versionName;
      this._attachmentsSource = config.attachmentsSource;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string) {
      this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // default_version - computed: true, optional: false, required: false
    public get defaultVersion() {
      return this.getStringAttribute('default_version');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // document_format - computed: false, optional: true, required: false
    private _documentFormat?: string | undefined; 
    public get documentFormat() {
      return this.getStringAttribute('document_format');
    }
    public set documentFormat(value: string | undefined) {
      this._documentFormat = value;
    }
    public resetDocumentFormat() {
      this._documentFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentFormatInput() {
      return this._documentFormat
    }

    // document_type - computed: false, optional: false, required: true
    private _documentType?: string; 
    public get documentType() {
      return this.getStringAttribute('document_type');
    }
    public set documentType(value: string) {
      this._documentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get documentTypeInput() {
      return this._documentType
    }

    // document_version - computed: true, optional: false, required: false
    public get documentVersion() {
      return this.getStringAttribute('document_version');
    }

    // hash - computed: true, optional: false, required: false
    public get hash() {
      return this.getStringAttribute('hash');
    }

    // hash_type - computed: true, optional: false, required: false
    public get hashType() {
      return this.getStringAttribute('hash_type');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // latest_version - computed: true, optional: false, required: false
    public get latestVersion() {
      return this.getStringAttribute('latest_version');
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

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // parameter - computed: true, optional: false, required: false
    public parameter(index: string) {
      return new SsmDocumentParameter(this, 'parameter', index);
    }

    // permissions - computed: false, optional: true, required: false
    private _permissions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get permissions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('permissions') as any;
    }
    public set permissions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._permissions = value;
    }
    public resetPermissions() {
      this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
      return this._permissions
    }

    // platform_types - computed: true, optional: false, required: false
    public get platformTypes() {
      return this.getListAttribute('platform_types');
    }

    // schema_version - computed: true, optional: false, required: false
    public get schemaVersion() {
      return this.getStringAttribute('schema_version');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // target_type - computed: false, optional: true, required: false
    private _targetType?: string | undefined; 
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string | undefined) {
      this._targetType = value;
    }
    public resetTargetType() {
      this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // version_name - computed: false, optional: true, required: false
    private _versionName?: string | undefined; 
    public get versionName() {
      return this.getStringAttribute('version_name');
    }
    public set versionName(value: string | undefined) {
      this._versionName = value;
    }
    public resetVersionName() {
      this._versionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionNameInput() {
      return this._versionName
    }

    // attachments_source - computed: false, optional: true, required: false
    private _attachmentsSource?: SsmDocumentAttachmentsSource[] | undefined; 
    public get attachmentsSource() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attachments_source') as any;
    }
    public set attachmentsSource(value: SsmDocumentAttachmentsSource[] | undefined) {
      this._attachmentsSource = value;
    }
    public resetAttachmentsSource() {
      this._attachmentsSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentsSourceInput() {
      return this._attachmentsSource
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content: cdktf.stringToTerraform(this._content),
        document_format: cdktf.stringToTerraform(this._documentFormat),
        document_type: cdktf.stringToTerraform(this._documentType),
        name: cdktf.stringToTerraform(this._name),
        permissions: cdktf.hashMapper(cdktf.anyToTerraform)(this._permissions),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_type: cdktf.stringToTerraform(this._targetType),
        version_name: cdktf.stringToTerraform(this._versionName),
        attachments_source: cdktf.listMapper(ssmDocumentAttachmentsSourceToTerraform)(this._attachmentsSource),
      };
    }
  }
  export interface SsmMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}
    */
    readonly allowUnassociatedTargets?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#cutoff SsmMaintenanceWindow#cutoff}
    */
    readonly cutoff: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#description SsmMaintenanceWindow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#duration SsmMaintenanceWindow#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#enabled SsmMaintenanceWindow#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#end_date SsmMaintenanceWindow#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#name SsmMaintenanceWindow#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule SsmMaintenanceWindow#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule_offset SsmMaintenanceWindow#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule_timezone SsmMaintenanceWindow#schedule_timezone}
    */
    readonly scheduleTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#start_date SsmMaintenanceWindow#start_date}
    */
    readonly startDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#tags SsmMaintenanceWindow#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#tags_all SsmMaintenanceWindow#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window}
  */
  export class SsmMaintenanceWindow extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_maintenance_window";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowConfig
    */
    public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_maintenance_window',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowUnassociatedTargets = config.allowUnassociatedTargets;
      this._cutoff = config.cutoff;
      this._description = config.description;
      this._duration = config.duration;
      this._enabled = config.enabled;
      this._endDate = config.endDate;
      this._name = config.name;
      this._schedule = config.schedule;
      this._scheduleOffset = config.scheduleOffset;
      this._scheduleTimezone = config.scheduleTimezone;
      this._startDate = config.startDate;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_unassociated_targets - computed: false, optional: true, required: false
    private _allowUnassociatedTargets?: boolean | cdktf.IResolvable | undefined; 
    public get allowUnassociatedTargets() {
      return this.getBooleanAttribute('allow_unassociated_targets') as any;
    }
    public set allowUnassociatedTargets(value: boolean | cdktf.IResolvable | undefined) {
      this._allowUnassociatedTargets = value;
    }
    public resetAllowUnassociatedTargets() {
      this._allowUnassociatedTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowUnassociatedTargetsInput() {
      return this._allowUnassociatedTargets
    }

    // cutoff - computed: false, optional: false, required: true
    private _cutoff?: number; 
    public get cutoff() {
      return this.getNumberAttribute('cutoff');
    }
    public set cutoff(value: number) {
      this._cutoff = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cutoffInput() {
      return this._cutoff
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

    // duration - computed: false, optional: false, required: true
    private _duration?: number; 
    public get duration() {
      return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
      this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
      return this._duration
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // end_date - computed: false, optional: true, required: false
    private _endDate?: string | undefined; 
    public get endDate() {
      return this.getStringAttribute('end_date');
    }
    public set endDate(value: string | undefined) {
      this._endDate = value;
    }
    public resetEndDate() {
      this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
      return this._endDate
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

    // schedule - computed: false, optional: false, required: true
    private _schedule?: string; 
    public get schedule() {
      return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // schedule_offset - computed: false, optional: true, required: false
    private _scheduleOffset?: number | undefined; 
    public get scheduleOffset() {
      return this.getNumberAttribute('schedule_offset');
    }
    public set scheduleOffset(value: number | undefined) {
      this._scheduleOffset = value;
    }
    public resetScheduleOffset() {
      this._scheduleOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleOffsetInput() {
      return this._scheduleOffset
    }

    // schedule_timezone - computed: false, optional: true, required: false
    private _scheduleTimezone?: string | undefined; 
    public get scheduleTimezone() {
      return this.getStringAttribute('schedule_timezone');
    }
    public set scheduleTimezone(value: string | undefined) {
      this._scheduleTimezone = value;
    }
    public resetScheduleTimezone() {
      this._scheduleTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleTimezoneInput() {
      return this._scheduleTimezone
    }

    // start_date - computed: false, optional: true, required: false
    private _startDate?: string | undefined; 
    public get startDate() {
      return this.getStringAttribute('start_date');
    }
    public set startDate(value: string | undefined) {
      this._startDate = value;
    }
    public resetStartDate() {
      this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
      return this._startDate
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
        allow_unassociated_targets: cdktf.booleanToTerraform(this._allowUnassociatedTargets),
        cutoff: cdktf.numberToTerraform(this._cutoff),
        description: cdktf.stringToTerraform(this._description),
        duration: cdktf.numberToTerraform(this._duration),
        enabled: cdktf.booleanToTerraform(this._enabled),
        end_date: cdktf.stringToTerraform(this._endDate),
        name: cdktf.stringToTerraform(this._name),
        schedule: cdktf.stringToTerraform(this._schedule),
        schedule_offset: cdktf.numberToTerraform(this._scheduleOffset),
        schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
        start_date: cdktf.stringToTerraform(this._startDate),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SsmMaintenanceWindowTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#description SsmMaintenanceWindowTarget#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#name SsmMaintenanceWindowTarget#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#owner_information SsmMaintenanceWindowTarget#owner_information}
    */
    readonly ownerInformation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#resource_type SsmMaintenanceWindowTarget#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#window_id SsmMaintenanceWindowTarget#window_id}
    */
    readonly windowId: string;
    /**
    * targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#targets SsmMaintenanceWindowTarget#targets}
    */
    readonly targets: SsmMaintenanceWindowTargetTargets[];
  }
  export interface SsmMaintenanceWindowTargetTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#key SsmMaintenanceWindowTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#values SsmMaintenanceWindowTarget#values}
    */
    readonly values: string[];
  }

  function ssmMaintenanceWindowTargetTargetsToTerraform(struct?: SsmMaintenanceWindowTargetTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target}
  */
  export class SsmMaintenanceWindowTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_maintenance_window_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTargetConfig
    */
    public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_maintenance_window_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._ownerInformation = config.ownerInformation;
      this._resourceType = config.resourceType;
      this._windowId = config.windowId;
      this._targets = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_information - computed: false, optional: true, required: false
    private _ownerInformation?: string | undefined; 
    public get ownerInformation() {
      return this.getStringAttribute('owner_information');
    }
    public set ownerInformation(value: string | undefined) {
      this._ownerInformation = value;
    }
    public resetOwnerInformation() {
      this._ownerInformation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInformationInput() {
      return this._ownerInformation
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
      this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
      return this._resourceType
    }

    // window_id - computed: false, optional: false, required: true
    private _windowId?: string; 
    public get windowId() {
      return this.getStringAttribute('window_id');
    }
    public set windowId(value: string) {
      this._windowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get windowIdInput() {
      return this._windowId
    }

    // targets - computed: false, optional: false, required: true
    private _targets?: SsmMaintenanceWindowTargetTargets[]; 
    public get targets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('targets') as any;
    }
    public set targets(value: SsmMaintenanceWindowTargetTargets[]) {
      this._targets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
      return this._targets
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        owner_information: cdktf.stringToTerraform(this._ownerInformation),
        resource_type: cdktf.stringToTerraform(this._resourceType),
        window_id: cdktf.stringToTerraform(this._windowId),
        targets: cdktf.listMapper(ssmMaintenanceWindowTargetTargetsToTerraform)(this._targets),
      };
    }
  }
  export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#description SsmMaintenanceWindowTask#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
    */
    readonly maxConcurrency: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_errors SsmMaintenanceWindowTask#max_errors}
    */
    readonly maxErrors: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#priority SsmMaintenanceWindowTask#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_arn SsmMaintenanceWindowTask#task_arn}
    */
    readonly taskArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_type SsmMaintenanceWindowTask#task_type}
    */
    readonly taskType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#window_id SsmMaintenanceWindowTask#window_id}
    */
    readonly windowId: string;
    /**
    * targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#targets SsmMaintenanceWindowTask#targets}
    */
    readonly targets?: SsmMaintenanceWindowTaskTargets[];
    /**
    * task_invocation_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
    */
    readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
  }
  export interface SsmMaintenanceWindowTaskTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#key SsmMaintenanceWindowTask#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
  }

  function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      document_version: cdktf.stringToTerraform(struct!.documentVersion),
      parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform)(struct!.parameter),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // document_version - computed: false, optional: true, required: false
    private _documentVersion?: string | undefined; 
    public get documentVersion() {
      return this.getStringAttribute('document_version');
    }
    public set documentVersion(value: string | undefined) {
      this._documentVersion = value;
    }
    public resetDocumentVersion() {
      this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentVersionInput() {
      return this._documentVersion
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#client_context SsmMaintenanceWindowTask#client_context}
    */
    readonly clientContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#payload SsmMaintenanceWindowTask#payload}
    */
    readonly payload?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#qualifier SsmMaintenanceWindowTask#qualifier}
    */
    readonly qualifier?: string;
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_context: cdktf.stringToTerraform(struct!.clientContext),
      payload: cdktf.stringToTerraform(struct!.payload),
      qualifier: cdktf.stringToTerraform(struct!.qualifier),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_context - computed: false, optional: true, required: false
    private _clientContext?: string | undefined; 
    public get clientContext() {
      return this.getStringAttribute('client_context');
    }
    public set clientContext(value: string | undefined) {
      this._clientContext = value;
    }
    public resetClientContext() {
      this._clientContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientContextInput() {
      return this._clientContext
    }

    // payload - computed: false, optional: true, required: false
    private _payload?: string | undefined; 
    public get payload() {
      return this.getStringAttribute('payload');
    }
    public set payload(value: string | undefined) {
      this._payload = value;
    }
    public resetPayload() {
      this._payload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
      return this._payload
    }

    // qualifier - computed: false, optional: true, required: false
    private _qualifier?: string | undefined; 
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string | undefined) {
      this._qualifier = value;
    }
    public resetQualifier() {
      this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
      return this._qualifier
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
    */
    readonly cloudwatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
    */
    readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
      cloudwatch_output_enabled: cdktf.booleanToTerraform(struct!.cloudwatchOutputEnabled),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_log_group_name - computed: true, optional: true, required: false
    private _cloudwatchLogGroupName?: string | undefined; 
    public get cloudwatchLogGroupName() {
      return this.getStringAttribute('cloudwatch_log_group_name');
    }
    public set cloudwatchLogGroupName(value: string | undefined) {
      this._cloudwatchLogGroupName = value;
    }
    public resetCloudwatchLogGroupName() {
      this._cloudwatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupNameInput() {
      return this._cloudwatchLogGroupName
    }

    // cloudwatch_output_enabled - computed: false, optional: true, required: false
    private _cloudwatchOutputEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get cloudwatchOutputEnabled() {
      return this.getBooleanAttribute('cloudwatch_output_enabled') as any;
    }
    public set cloudwatchOutputEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._cloudwatchOutputEnabled = value;
    }
    public resetCloudwatchOutputEnabled() {
      this._cloudwatchOutputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchOutputEnabledInput() {
      return this._cloudwatchOutputEnabled
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_arn SsmMaintenanceWindowTask#notification_arn}
    */
    readonly notificationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_events SsmMaintenanceWindowTask#notification_events}
    */
    readonly notificationEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_type SsmMaintenanceWindowTask#notification_type}
    */
    readonly notificationType?: string;
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notification_arn: cdktf.stringToTerraform(struct!.notificationArn),
      notification_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationEvents),
      notification_type: cdktf.stringToTerraform(struct!.notificationType),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notification_arn - computed: false, optional: true, required: false
    private _notificationArn?: string | undefined; 
    public get notificationArn() {
      return this.getStringAttribute('notification_arn');
    }
    public set notificationArn(value: string | undefined) {
      this._notificationArn = value;
    }
    public resetNotificationArn() {
      this._notificationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnInput() {
      return this._notificationArn
    }

    // notification_events - computed: false, optional: true, required: false
    private _notificationEvents?: string[] | undefined; 
    public get notificationEvents() {
      return this.getListAttribute('notification_events');
    }
    public set notificationEvents(value: string[] | undefined) {
      this._notificationEvents = value;
    }
    public resetNotificationEvents() {
      this._notificationEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationEventsInput() {
      return this._notificationEvents
    }

    // notification_type - computed: false, optional: true, required: false
    private _notificationType?: string | undefined; 
    public get notificationType() {
      return this.getStringAttribute('notification_type');
    }
    public set notificationType(value: string | undefined) {
      this._notificationType = value;
    }
    public resetNotificationType() {
      this._notificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypeInput() {
      return this._notificationType
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#comment SsmMaintenanceWindowTask#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash SsmMaintenanceWindowTask#document_hash}
    */
    readonly documentHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
    */
    readonly documentHashType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
    */
    readonly outputS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
    */
    readonly outputS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * cloudwatch_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
    */
    readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
    /**
    * notification_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_config SsmMaintenanceWindowTask#notification_config}
    */
    readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comment: cdktf.stringToTerraform(struct!.comment),
      document_hash: cdktf.stringToTerraform(struct!.documentHash),
      document_hash_type: cdktf.stringToTerraform(struct!.documentHashType),
      document_version: cdktf.stringToTerraform(struct!.documentVersion),
      output_s3_bucket: cdktf.stringToTerraform(struct!.outputS3Bucket),
      output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
      service_role_arn: cdktf.stringToTerraform(struct!.serviceRoleArn),
      timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
      cloudwatch_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
      notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct!.notificationConfig),
      parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform)(struct!.parameter),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // document_hash - computed: false, optional: true, required: false
    private _documentHash?: string | undefined; 
    public get documentHash() {
      return this.getStringAttribute('document_hash');
    }
    public set documentHash(value: string | undefined) {
      this._documentHash = value;
    }
    public resetDocumentHash() {
      this._documentHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentHashInput() {
      return this._documentHash
    }

    // document_hash_type - computed: false, optional: true, required: false
    private _documentHashType?: string | undefined; 
    public get documentHashType() {
      return this.getStringAttribute('document_hash_type');
    }
    public set documentHashType(value: string | undefined) {
      this._documentHashType = value;
    }
    public resetDocumentHashType() {
      this._documentHashType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentHashTypeInput() {
      return this._documentHashType
    }

    // document_version - computed: false, optional: true, required: false
    private _documentVersion?: string | undefined; 
    public get documentVersion() {
      return this.getStringAttribute('document_version');
    }
    public set documentVersion(value: string | undefined) {
      this._documentVersion = value;
    }
    public resetDocumentVersion() {
      this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentVersionInput() {
      return this._documentVersion
    }

    // output_s3_bucket - computed: false, optional: true, required: false
    private _outputS3Bucket?: string | undefined; 
    public get outputS3Bucket() {
      return this.getStringAttribute('output_s3_bucket');
    }
    public set outputS3Bucket(value: string | undefined) {
      this._outputS3Bucket = value;
    }
    public resetOutputS3Bucket() {
      this._outputS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputS3BucketInput() {
      return this._outputS3Bucket
    }

    // output_s3_key_prefix - computed: false, optional: true, required: false
    private _outputS3KeyPrefix?: string | undefined; 
    public get outputS3KeyPrefix() {
      return this.getStringAttribute('output_s3_key_prefix');
    }
    public set outputS3KeyPrefix(value: string | undefined) {
      this._outputS3KeyPrefix = value;
    }
    public resetOutputS3KeyPrefix() {
      this._outputS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputS3KeyPrefixInput() {
      return this._outputS3KeyPrefix
    }

    // service_role_arn - computed: false, optional: true, required: false
    private _serviceRoleArn?: string | undefined; 
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string | undefined) {
      this._serviceRoleArn = value;
    }
    public resetServiceRoleArn() {
      this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
      return this._serviceRoleArn
    }

    // timeout_seconds - computed: false, optional: true, required: false
    private _timeoutSeconds?: number | undefined; 
    public get timeoutSeconds() {
      return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number | undefined) {
      this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
      this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
      return this._timeoutSeconds
    }

    // cloudwatch_config - computed: false, optional: true, required: false
    private _cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined; 
    private __cloudwatchConfigOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(this as any, "cloudwatch_config", true);
    public get cloudwatchConfig() {
      return this.__cloudwatchConfigOutput;
    }
    public putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined) {
      this._cloudwatchConfig = value;
    }
    public resetCloudwatchConfig() {
      this._cloudwatchConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchConfigInput() {
      return this._cloudwatchConfig
    }

    // notification_config - computed: false, optional: true, required: false
    private _notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined; 
    private __notificationConfigOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(this as any, "notification_config", true);
    public get notificationConfig() {
      return this.__notificationConfigOutput;
    }
    public putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined) {
      this._notificationConfig = value;
    }
    public resetNotificationConfig() {
      this._notificationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigInput() {
      return this._notificationConfig
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#input SsmMaintenanceWindowTask#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      input: cdktf.stringToTerraform(struct!.input),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // input - computed: false, optional: true, required: false
    private _input?: string | undefined; 
    public get input() {
      return this.getStringAttribute('input');
    }
    public set input(value: string | undefined) {
      this._input = value;
    }
    public resetInput() {
      this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
      return this._input
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }
  }
  export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
    /**
    * automation_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
    */
    readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
    /**
    * lambda_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
    */
    readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
    /**
    * run_command_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
    */
    readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
    /**
    * step_functions_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
    */
    readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
  }

  function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct!.automationParameters),
      lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct!.lambdaParameters),
      run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct!.runCommandParameters),
      step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct!.stepFunctionsParameters),
    }
  }

  export class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // automation_parameters - computed: false, optional: true, required: false
    private _automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined; 
    private __automationParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(this as any, "automation_parameters", true);
    public get automationParameters() {
      return this.__automationParametersOutput;
    }
    public putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined) {
      this._automationParameters = value;
    }
    public resetAutomationParameters() {
      this._automationParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automationParametersInput() {
      return this._automationParameters
    }

    // lambda_parameters - computed: false, optional: true, required: false
    private _lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined; 
    private __lambdaParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(this as any, "lambda_parameters", true);
    public get lambdaParameters() {
      return this.__lambdaParametersOutput;
    }
    public putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined) {
      this._lambdaParameters = value;
    }
    public resetLambdaParameters() {
      this._lambdaParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaParametersInput() {
      return this._lambdaParameters
    }

    // run_command_parameters - computed: false, optional: true, required: false
    private _runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined; 
    private __runCommandParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(this as any, "run_command_parameters", true);
    public get runCommandParameters() {
      return this.__runCommandParametersOutput;
    }
    public putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined) {
      this._runCommandParameters = value;
    }
    public resetRunCommandParameters() {
      this._runCommandParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runCommandParametersInput() {
      return this._runCommandParameters
    }

    // step_functions_parameters - computed: false, optional: true, required: false
    private _stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined; 
    private __stepFunctionsParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(this as any, "step_functions_parameters", true);
    public get stepFunctionsParameters() {
      return this.__stepFunctionsParametersOutput;
    }
    public putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined) {
      this._stepFunctionsParameters = value;
    }
    public resetStepFunctionsParameters() {
      this._stepFunctionsParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionsParametersInput() {
      return this._stepFunctionsParameters
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}
  */
  export class SsmMaintenanceWindowTask extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_maintenance_window_task";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTaskConfig
    */
    public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_maintenance_window_task',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._maxConcurrency = config.maxConcurrency;
      this._maxErrors = config.maxErrors;
      this._name = config.name;
      this._priority = config.priority;
      this._serviceRoleArn = config.serviceRoleArn;
      this._taskArn = config.taskArn;
      this._taskType = config.taskType;
      this._windowId = config.windowId;
      this._targets = config.targets;
      this._taskInvocationParameters = config.taskInvocationParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_concurrency - computed: false, optional: false, required: true
    private _maxConcurrency?: string; 
    public get maxConcurrency() {
      return this.getStringAttribute('max_concurrency');
    }
    public set maxConcurrency(value: string) {
      this._maxConcurrency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
      return this._maxConcurrency
    }

    // max_errors - computed: false, optional: false, required: true
    private _maxErrors?: string; 
    public get maxErrors() {
      return this.getStringAttribute('max_errors');
    }
    public set maxErrors(value: string) {
      this._maxErrors = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxErrorsInput() {
      return this._maxErrors
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // priority - computed: false, optional: true, required: false
    private _priority?: number | undefined; 
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number | undefined) {
      this._priority = value;
    }
    public resetPriority() {
      this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
    }

    // service_role_arn - computed: true, optional: true, required: false
    private _serviceRoleArn?: string | undefined; 
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string | undefined) {
      this._serviceRoleArn = value;
    }
    public resetServiceRoleArn() {
      this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
      return this._serviceRoleArn
    }

    // task_arn - computed: false, optional: false, required: true
    private _taskArn?: string; 
    public get taskArn() {
      return this.getStringAttribute('task_arn');
    }
    public set taskArn(value: string) {
      this._taskArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskArnInput() {
      return this._taskArn
    }

    // task_type - computed: false, optional: false, required: true
    private _taskType?: string; 
    public get taskType() {
      return this.getStringAttribute('task_type');
    }
    public set taskType(value: string) {
      this._taskType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskTypeInput() {
      return this._taskType
    }

    // window_id - computed: false, optional: false, required: true
    private _windowId?: string; 
    public get windowId() {
      return this.getStringAttribute('window_id');
    }
    public set windowId(value: string) {
      this._windowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get windowIdInput() {
      return this._windowId
    }

    // targets - computed: false, optional: true, required: false
    private _targets?: SsmMaintenanceWindowTaskTargets[] | undefined; 
    public get targets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('targets') as any;
    }
    public set targets(value: SsmMaintenanceWindowTaskTargets[] | undefined) {
      this._targets = value;
    }
    public resetTargets() {
      this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
      return this._targets
    }

    // task_invocation_parameters - computed: false, optional: true, required: false
    private _taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined; 
    private __taskInvocationParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this as any, "task_invocation_parameters", true);
    public get taskInvocationParameters() {
      return this.__taskInvocationParametersOutput;
    }
    public putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined) {
      this._taskInvocationParameters = value;
    }
    public resetTaskInvocationParameters() {
      this._taskInvocationParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskInvocationParametersInput() {
      return this._taskInvocationParameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
        max_errors: cdktf.stringToTerraform(this._maxErrors),
        name: cdktf.stringToTerraform(this._name),
        priority: cdktf.numberToTerraform(this._priority),
        service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
        task_arn: cdktf.stringToTerraform(this._taskArn),
        task_type: cdktf.stringToTerraform(this._taskType),
        window_id: cdktf.stringToTerraform(this._windowId),
        targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform)(this._targets),
        task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters),
      };
    }
  }
  export interface SsmParameterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#allowed_pattern SsmParameter#allowed_pattern}
    */
    readonly allowedPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#data_type SsmParameter#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#description SsmParameter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#key_id SsmParameter#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#name SsmParameter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#overwrite SsmParameter#overwrite}
    */
    readonly overwrite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tags SsmParameter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tags_all SsmParameter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tier SsmParameter#tier}
    */
    readonly tier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#type SsmParameter#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#value SsmParameter#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter}
  */
  export class SsmParameter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_parameter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmParameterConfig
    */
    public constructor(scope: Construct, id: string, config: SsmParameterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_parameter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowedPattern = config.allowedPattern;
      this._dataType = config.dataType;
      this._description = config.description;
      this._keyId = config.keyId;
      this._name = config.name;
      this._overwrite = config.overwrite;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._tier = config.tier;
      this._type = config.type;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_pattern - computed: false, optional: true, required: false
    private _allowedPattern?: string | undefined; 
    public get allowedPattern() {
      return this.getStringAttribute('allowed_pattern');
    }
    public set allowedPattern(value: string | undefined) {
      this._allowedPattern = value;
    }
    public resetAllowedPattern() {
      this._allowedPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPatternInput() {
      return this._allowedPattern
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string | undefined; 
    public get dataType() {
      return this.getStringAttribute('data_type');
    }
    public set dataType(value: string | undefined) {
      this._dataType = value;
    }
    public resetDataType() {
      this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
      return this._dataType
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string | undefined; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string | undefined) {
      this._keyId = value;
    }
    public resetKeyId() {
      this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
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

    // overwrite - computed: false, optional: true, required: false
    private _overwrite?: boolean | cdktf.IResolvable | undefined; 
    public get overwrite() {
      return this.getBooleanAttribute('overwrite') as any;
    }
    public set overwrite(value: boolean | cdktf.IResolvable | undefined) {
      this._overwrite = value;
    }
    public resetOverwrite() {
      this._overwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteInput() {
      return this._overwrite
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

    // tier - computed: false, optional: true, required: false
    private _tier?: string | undefined; 
    public get tier() {
      return this.getStringAttribute('tier');
    }
    public set tier(value: string | undefined) {
      this._tier = value;
    }
    public resetTier() {
      this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
      return this._tier
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
      return this._type
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allowed_pattern: cdktf.stringToTerraform(this._allowedPattern),
        data_type: cdktf.stringToTerraform(this._dataType),
        description: cdktf.stringToTerraform(this._description),
        key_id: cdktf.stringToTerraform(this._keyId),
        name: cdktf.stringToTerraform(this._name),
        overwrite: cdktf.booleanToTerraform(this._overwrite),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        tier: cdktf.stringToTerraform(this._tier),
        type: cdktf.stringToTerraform(this._type),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches SsmPatchBaseline#approved_patches}
    */
    readonly approvedPatches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}
    */
    readonly approvedPatchesComplianceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}
    */
    readonly approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#description SsmPatchBaseline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#operating_system SsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches SsmPatchBaseline#rejected_patches}
    */
    readonly rejectedPatches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches_action SsmPatchBaseline#rejected_patches_action}
    */
    readonly rejectedPatchesAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags SsmPatchBaseline#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags_all SsmPatchBaseline#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * approval_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approval_rule SsmPatchBaseline#approval_rule}
    */
    readonly approvalRule?: SsmPatchBaselineApprovalRule[];
    /**
    * global_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#global_filter SsmPatchBaseline#global_filter}
    */
    readonly globalFilter?: SsmPatchBaselineGlobalFilter[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#source SsmPatchBaseline#source}
    */
    readonly source?: SsmPatchBaselineSource[];
  }
  export interface SsmPatchBaselineApprovalRulePatchFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}
    */
    readonly values: string[];
  }

  function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface SsmPatchBaselineApprovalRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_after_days SsmPatchBaseline#approve_after_days}
    */
    readonly approveAfterDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_until_date SsmPatchBaseline#approve_until_date}
    */
    readonly approveUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#compliance_level SsmPatchBaseline#compliance_level}
    */
    readonly complianceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#enable_non_security SsmPatchBaseline#enable_non_security}
    */
    readonly enableNonSecurity?: boolean | cdktf.IResolvable;
    /**
    * patch_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#patch_filter SsmPatchBaseline#patch_filter}
    */
    readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[];
  }

  function ssmPatchBaselineApprovalRuleToTerraform(struct?: SsmPatchBaselineApprovalRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      approve_after_days: cdktf.numberToTerraform(struct!.approveAfterDays),
      approve_until_date: cdktf.stringToTerraform(struct!.approveUntilDate),
      compliance_level: cdktf.stringToTerraform(struct!.complianceLevel),
      enable_non_security: cdktf.booleanToTerraform(struct!.enableNonSecurity),
      patch_filter: cdktf.listMapper(ssmPatchBaselineApprovalRulePatchFilterToTerraform)(struct!.patchFilter),
    }
  }

  export interface SsmPatchBaselineGlobalFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}
    */
    readonly values: string[];
  }

  function ssmPatchBaselineGlobalFilterToTerraform(struct?: SsmPatchBaselineGlobalFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface SsmPatchBaselineSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#configuration SsmPatchBaseline#configuration}
    */
    readonly configuration: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#products SsmPatchBaseline#products}
    */
    readonly products: string[];
  }

  function ssmPatchBaselineSourceToTerraform(struct?: SsmPatchBaselineSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      configuration: cdktf.stringToTerraform(struct!.configuration),
      name: cdktf.stringToTerraform(struct!.name),
      products: cdktf.listMapper(cdktf.stringToTerraform)(struct!.products),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline}
  */
  export class SsmPatchBaseline extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_patch_baseline";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchBaselineConfig
    */
    public constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_patch_baseline',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._approvedPatches = config.approvedPatches;
      this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
      this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
      this._description = config.description;
      this._name = config.name;
      this._operatingSystem = config.operatingSystem;
      this._rejectedPatches = config.rejectedPatches;
      this._rejectedPatchesAction = config.rejectedPatchesAction;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._approvalRule = config.approvalRule;
      this._globalFilter = config.globalFilter;
      this._source = config.source;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // approved_patches - computed: false, optional: true, required: false
    private _approvedPatches?: string[] | undefined; 
    public get approvedPatches() {
      return this.getListAttribute('approved_patches');
    }
    public set approvedPatches(value: string[] | undefined) {
      this._approvedPatches = value;
    }
    public resetApprovedPatches() {
      this._approvedPatches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesInput() {
      return this._approvedPatches
    }

    // approved_patches_compliance_level - computed: false, optional: true, required: false
    private _approvedPatchesComplianceLevel?: string | undefined; 
    public get approvedPatchesComplianceLevel() {
      return this.getStringAttribute('approved_patches_compliance_level');
    }
    public set approvedPatchesComplianceLevel(value: string | undefined) {
      this._approvedPatchesComplianceLevel = value;
    }
    public resetApprovedPatchesComplianceLevel() {
      this._approvedPatchesComplianceLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesComplianceLevelInput() {
      return this._approvedPatchesComplianceLevel
    }

    // approved_patches_enable_non_security - computed: false, optional: true, required: false
    private _approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable | undefined; 
    public get approvedPatchesEnableNonSecurity() {
      return this.getBooleanAttribute('approved_patches_enable_non_security') as any;
    }
    public set approvedPatchesEnableNonSecurity(value: boolean | cdktf.IResolvable | undefined) {
      this._approvedPatchesEnableNonSecurity = value;
    }
    public resetApprovedPatchesEnableNonSecurity() {
      this._approvedPatchesEnableNonSecurity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesEnableNonSecurityInput() {
      return this._approvedPatchesEnableNonSecurity
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

    // operating_system - computed: false, optional: true, required: false
    private _operatingSystem?: string | undefined; 
    public get operatingSystem() {
      return this.getStringAttribute('operating_system');
    }
    public set operatingSystem(value: string | undefined) {
      this._operatingSystem = value;
    }
    public resetOperatingSystem() {
      this._operatingSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemInput() {
      return this._operatingSystem
    }

    // rejected_patches - computed: false, optional: true, required: false
    private _rejectedPatches?: string[] | undefined; 
    public get rejectedPatches() {
      return this.getListAttribute('rejected_patches');
    }
    public set rejectedPatches(value: string[] | undefined) {
      this._rejectedPatches = value;
    }
    public resetRejectedPatches() {
      this._rejectedPatches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rejectedPatchesInput() {
      return this._rejectedPatches
    }

    // rejected_patches_action - computed: true, optional: true, required: false
    private _rejectedPatchesAction?: string | undefined; 
    public get rejectedPatchesAction() {
      return this.getStringAttribute('rejected_patches_action');
    }
    public set rejectedPatchesAction(value: string | undefined) {
      this._rejectedPatchesAction = value;
    }
    public resetRejectedPatchesAction() {
      this._rejectedPatchesAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rejectedPatchesActionInput() {
      return this._rejectedPatchesAction
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

    // approval_rule - computed: false, optional: true, required: false
    private _approvalRule?: SsmPatchBaselineApprovalRule[] | undefined; 
    public get approvalRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('approval_rule') as any;
    }
    public set approvalRule(value: SsmPatchBaselineApprovalRule[] | undefined) {
      this._approvalRule = value;
    }
    public resetApprovalRule() {
      this._approvalRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvalRuleInput() {
      return this._approvalRule
    }

    // global_filter - computed: false, optional: true, required: false
    private _globalFilter?: SsmPatchBaselineGlobalFilter[] | undefined; 
    public get globalFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('global_filter') as any;
    }
    public set globalFilter(value: SsmPatchBaselineGlobalFilter[] | undefined) {
      this._globalFilter = value;
    }
    public resetGlobalFilter() {
      this._globalFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalFilterInput() {
      return this._globalFilter
    }

    // source - computed: false, optional: true, required: false
    private _source?: SsmPatchBaselineSource[] | undefined; 
    public get source() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('source') as any;
    }
    public set source(value: SsmPatchBaselineSource[] | undefined) {
      this._source = value;
    }
    public resetSource() {
      this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        approved_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._approvedPatches),
        approved_patches_compliance_level: cdktf.stringToTerraform(this._approvedPatchesComplianceLevel),
        approved_patches_enable_non_security: cdktf.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        operating_system: cdktf.stringToTerraform(this._operatingSystem),
        rejected_patches: cdktf.listMapper(cdktf.stringToTerraform)(this._rejectedPatches),
        rejected_patches_action: cdktf.stringToTerraform(this._rejectedPatchesAction),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        approval_rule: cdktf.listMapper(ssmPatchBaselineApprovalRuleToTerraform)(this._approvalRule),
        global_filter: cdktf.listMapper(ssmPatchBaselineGlobalFilterToTerraform)(this._globalFilter),
        source: cdktf.listMapper(ssmPatchBaselineSourceToTerraform)(this._source),
      };
    }
  }
  export interface SsmPatchGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html#baseline_id SsmPatchGroup#baseline_id}
    */
    readonly baselineId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html#patch_group SsmPatchGroup#patch_group}
    */
    readonly patchGroup: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group}
  */
  export class SsmPatchGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_patch_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchGroupConfig
    */
    public constructor(scope: Construct, id: string, config: SsmPatchGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_patch_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._baselineId = config.baselineId;
      this._patchGroup = config.patchGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // baseline_id - computed: false, optional: false, required: true
    private _baselineId?: string; 
    public get baselineId() {
      return this.getStringAttribute('baseline_id');
    }
    public set baselineId(value: string) {
      this._baselineId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baselineIdInput() {
      return this._baselineId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // patch_group - computed: false, optional: false, required: true
    private _patchGroup?: string; 
    public get patchGroup() {
      return this.getStringAttribute('patch_group');
    }
    public set patchGroup(value: string) {
      this._patchGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patchGroupInput() {
      return this._patchGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        baseline_id: cdktf.stringToTerraform(this._baselineId),
        patch_group: cdktf.stringToTerraform(this._patchGroup),
      };
    }
  }
  export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#name SsmResourceDataSync#name}
    */
    readonly name: string;
    /**
    * s3_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#s3_destination SsmResourceDataSync#s3_destination}
    */
    readonly s3Destination: SsmResourceDataSyncS3Destination;
  }
  export interface SsmResourceDataSyncS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#prefix SsmResourceDataSync#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#region SsmResourceDataSync#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
  }

  function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3DestinationOutputReference | SsmResourceDataSyncS3Destination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      region: cdktf.stringToTerraform(struct!.region),
      sync_format: cdktf.stringToTerraform(struct!.syncFormat),
    }
  }

  export class SsmResourceDataSyncS3DestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_name - computed: false, optional: false, required: true
    private _bucketName?: string; 
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
      this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
      return this._bucketName
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string) {
      this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // sync_format - computed: false, optional: true, required: false
    private _syncFormat?: string | undefined; 
    public get syncFormat() {
      return this.getStringAttribute('sync_format');
    }
    public set syncFormat(value: string | undefined) {
      this._syncFormat = value;
    }
    public resetSyncFormat() {
      this._syncFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncFormatInput() {
      return this._syncFormat
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync}
  */
  export class SsmResourceDataSync extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_resource_data_sync";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    public constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_resource_data_sync',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._s3Destination = config.s3Destination;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // s3_destination - computed: false, optional: false, required: true
    private _s3Destination?: SsmResourceDataSyncS3Destination; 
    private __s3DestinationOutput = new SsmResourceDataSyncS3DestinationOutputReference(this as any, "s3_destination", true);
    public get s3Destination() {
      return this.__s3DestinationOutput;
    }
    public putS3Destination(value: SsmResourceDataSyncS3Destination) {
      this._s3Destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationInput() {
      return this._s3Destination
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        s3_destination: ssmResourceDataSyncS3DestinationToTerraform(this._s3Destination),
      };
    }
  }
  export interface DataAwsSsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_format DataAwsSsmDocument#document_format}
    */
    readonly documentFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_version DataAwsSsmDocument#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#name DataAwsSsmDocument#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document}
  */
  export class DataAwsSsmDocument extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_document";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmDocumentConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsmDocumentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_document',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._documentFormat = config.documentFormat;
      this._documentVersion = config.documentVersion;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // content - computed: true, optional: false, required: false
    public get content() {
      return this.getStringAttribute('content');
    }

    // document_format - computed: false, optional: true, required: false
    private _documentFormat?: string | undefined; 
    public get documentFormat() {
      return this.getStringAttribute('document_format');
    }
    public set documentFormat(value: string | undefined) {
      this._documentFormat = value;
    }
    public resetDocumentFormat() {
      this._documentFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentFormatInput() {
      return this._documentFormat
    }

    // document_type - computed: true, optional: false, required: false
    public get documentType() {
      return this.getStringAttribute('document_type');
    }

    // document_version - computed: false, optional: true, required: false
    private _documentVersion?: string | undefined; 
    public get documentVersion() {
      return this.getStringAttribute('document_version');
    }
    public set documentVersion(value: string | undefined) {
      this._documentVersion = value;
    }
    public resetDocumentVersion() {
      this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentVersionInput() {
      return this._documentVersion
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        document_format: cdktf.stringToTerraform(this._documentFormat),
        document_version: cdktf.stringToTerraform(this._documentVersion),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsSsmParameterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#name DataAwsSsmParameter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#with_decryption DataAwsSsmParameter#with_decryption}
    */
    readonly withDecryption?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter}
  */
  export class DataAwsSsmParameter extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_parameter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParameterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsmParameterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_parameter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._withDecryption = config.withDecryption;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // with_decryption - computed: false, optional: true, required: false
    private _withDecryption?: boolean | cdktf.IResolvable | undefined; 
    public get withDecryption() {
      return this.getBooleanAttribute('with_decryption') as any;
    }
    public set withDecryption(value: boolean | cdktf.IResolvable | undefined) {
      this._withDecryption = value;
    }
    public resetWithDecryption() {
      this._withDecryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get withDecryptionInput() {
      return this._withDecryption
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        with_decryption: cdktf.booleanToTerraform(this._withDecryption),
      };
    }
  }
  export interface DataAwsSsmParametersByPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html#path DataAwsSsmParametersByPath#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html#with_decryption DataAwsSsmParametersByPath#with_decryption}
    */
    readonly withDecryption?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path}
  */
  export class DataAwsSsmParametersByPath extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_parameters_by_path";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParametersByPathConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsmParametersByPathConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_parameters_by_path',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._path = config.path;
      this._withDecryption = config.withDecryption;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // path - computed: false, optional: false, required: true
    private _path?: string; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string) {
      this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // types - computed: true, optional: false, required: false
    public get types() {
      return this.getListAttribute('types');
    }

    // values - computed: true, optional: false, required: false
    public get values() {
      return this.getListAttribute('values');
    }

    // with_decryption - computed: false, optional: true, required: false
    private _withDecryption?: boolean | cdktf.IResolvable | undefined; 
    public get withDecryption() {
      return this.getBooleanAttribute('with_decryption') as any;
    }
    public set withDecryption(value: boolean | cdktf.IResolvable | undefined) {
      this._withDecryption = value;
    }
    public resetWithDecryption() {
      this._withDecryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get withDecryptionInput() {
      return this._withDecryption
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        path: cdktf.stringToTerraform(this._path),
        with_decryption: cdktf.booleanToTerraform(this._withDecryption),
      };
    }
  }
  export interface DataAwsSsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#default_baseline DataAwsSsmPatchBaseline#default_baseline}
    */
    readonly defaultBaseline?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#name_prefix DataAwsSsmPatchBaseline#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#operating_system DataAwsSsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#owner DataAwsSsmPatchBaseline#owner}
    */
    readonly owner: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline}
  */
  export class DataAwsSsmPatchBaseline extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssm_patch_baseline";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselineConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssm_patch_baseline',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultBaseline = config.defaultBaseline;
      this._namePrefix = config.namePrefix;
      this._operatingSystem = config.operatingSystem;
      this._owner = config.owner;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_baseline - computed: false, optional: true, required: false
    private _defaultBaseline?: boolean | cdktf.IResolvable | undefined; 
    public get defaultBaseline() {
      return this.getBooleanAttribute('default_baseline') as any;
    }
    public set defaultBaseline(value: boolean | cdktf.IResolvable | undefined) {
      this._defaultBaseline = value;
    }
    public resetDefaultBaseline() {
      this._defaultBaseline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBaselineInput() {
      return this._defaultBaseline
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // operating_system - computed: false, optional: true, required: false
    private _operatingSystem?: string | undefined; 
    public get operatingSystem() {
      return this.getStringAttribute('operating_system');
    }
    public set operatingSystem(value: string | undefined) {
      this._operatingSystem = value;
    }
    public resetOperatingSystem() {
      this._operatingSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemInput() {
      return this._operatingSystem
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
      this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
      return this._owner
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_baseline: cdktf.booleanToTerraform(this._defaultBaseline),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        operating_system: cdktf.stringToTerraform(this._operatingSystem),
        owner: cdktf.stringToTerraform(this._owner),
      };
    }
  }
}
