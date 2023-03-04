// https://www.terraform.io/docs/providers/aws/r/backup_report_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupReportPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * report_delivery_channel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}
  */
  readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
  /**
  * report_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_setting BackupReportPlan#report_setting}
  */
  readonly reportSetting: BackupReportPlanReportSetting;
}
export interface BackupReportPlanReportDeliveryChannel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}
  */
  readonly formats?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

export function backupReportPlanReportDeliveryChannelToTerraform(struct?: BackupReportPlanReportDeliveryChannelOutputReference | BackupReportPlanReportDeliveryChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.formats),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export class BackupReportPlanReportDeliveryChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupReportPlanReportDeliveryChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formats !== undefined) {
      hasAnyValues = true;
      internalValueResult.formats = this._formats;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupReportPlanReportDeliveryChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formats = undefined;
      this._s3BucketName = undefined;
      this._s3KeyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formats = value.formats;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyPrefix = value.s3KeyPrefix;
    }
  }

  // formats - computed: false, optional: true, required: false
  private _formats?: string[]; 
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  public resetFormats() {
    this._formats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
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
}
export interface BackupReportPlanReportSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}
  */
  readonly frameworkArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}
  */
  readonly numberOfFrameworks?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}
  */
  readonly reportTemplate: string;
}

export function backupReportPlanReportSettingToTerraform(struct?: BackupReportPlanReportSettingOutputReference | BackupReportPlanReportSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    framework_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.frameworkArns),
    number_of_frameworks: cdktf.numberToTerraform(struct!.numberOfFrameworks),
    report_template: cdktf.stringToTerraform(struct!.reportTemplate),
  }
}

export class BackupReportPlanReportSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupReportPlanReportSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameworkArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameworkArns = this._frameworkArns;
    }
    if (this._numberOfFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFrameworks = this._numberOfFrameworks;
    }
    if (this._reportTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportTemplate = this._reportTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupReportPlanReportSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frameworkArns = undefined;
      this._numberOfFrameworks = undefined;
      this._reportTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frameworkArns = value.frameworkArns;
      this._numberOfFrameworks = value.numberOfFrameworks;
      this._reportTemplate = value.reportTemplate;
    }
  }

  // framework_arns - computed: false, optional: true, required: false
  private _frameworkArns?: string[]; 
  public get frameworkArns() {
    return cdktf.Fn.tolist(this.getListAttribute('framework_arns'));
  }
  public set frameworkArns(value: string[]) {
    this._frameworkArns = value;
  }
  public resetFrameworkArns() {
    this._frameworkArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkArnsInput() {
    return this._frameworkArns;
  }

  // number_of_frameworks - computed: false, optional: true, required: false
  private _numberOfFrameworks?: number; 
  public get numberOfFrameworks() {
    return this.getNumberAttribute('number_of_frameworks');
  }
  public set numberOfFrameworks(value: number) {
    this._numberOfFrameworks = value;
  }
  public resetNumberOfFrameworks() {
    this._numberOfFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFrameworksInput() {
    return this._numberOfFrameworks;
  }

  // report_template - computed: false, optional: false, required: true
  private _reportTemplate?: string; 
  public get reportTemplate() {
    return this.getStringAttribute('report_template');
  }
  public set reportTemplate(value: string) {
    this._reportTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTemplateInput() {
    return this._reportTemplate;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan aws_backup_report_plan}
*/
export class BackupReportPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_report_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan aws_backup_report_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupReportPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupReportPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_report_plan',
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
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._reportDeliveryChannel.internalValue = config.reportDeliveryChannel;
    this._reportSetting.internalValue = config.reportSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
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

  // report_delivery_channel - computed: false, optional: false, required: true
  private _reportDeliveryChannel = new BackupReportPlanReportDeliveryChannelOutputReference(this, "report_delivery_channel");
  public get reportDeliveryChannel() {
    return this._reportDeliveryChannel;
  }
  public putReportDeliveryChannel(value: BackupReportPlanReportDeliveryChannel) {
    this._reportDeliveryChannel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportDeliveryChannelInput() {
    return this._reportDeliveryChannel.internalValue;
  }

  // report_setting - computed: false, optional: false, required: true
  private _reportSetting = new BackupReportPlanReportSettingOutputReference(this, "report_setting");
  public get reportSetting() {
    return this._reportSetting;
  }
  public putReportSetting(value: BackupReportPlanReportSetting) {
    this._reportSetting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportSettingInput() {
    return this._reportSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      report_delivery_channel: backupReportPlanReportDeliveryChannelToTerraform(this._reportDeliveryChannel.internalValue),
      report_setting: backupReportPlanReportSettingToTerraform(this._reportSetting.internalValue),
    };
  }
}
