// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Backup
*/
export interface DataAwsBackupReportPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsBackupReportPlanReportDeliveryChannel extends cdktf.ComplexComputedList {

  // formats - computed: true, optional: false, required: false
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export class DataAwsBackupReportPlanReportSetting extends cdktf.ComplexComputedList {

  // framework_arns - computed: true, optional: false, required: false
  public get frameworkArns() {
    return cdktf.Fn.tolist(this.getListAttribute('framework_arns'));
  }

  // number_of_frameworks - computed: true, optional: false, required: false
  public get numberOfFrameworks() {
    return this.getNumberAttribute('number_of_frameworks');
  }

  // report_template - computed: true, optional: false, required: false
  public get reportTemplate() {
    return this.getStringAttribute('report_template');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan aws_backup_report_plan}
*/
export class DataAwsBackupReportPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_backup_report_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan aws_backup_report_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBackupReportPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBackupReportPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_report_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
    return this._name;
  }

  // report_delivery_channel - computed: true, optional: false, required: false
  public reportDeliveryChannel(index: string) {
    return new DataAwsBackupReportPlanReportDeliveryChannel(this, 'report_delivery_channel', index, false);
  }

  // report_setting - computed: true, optional: false, required: false
  public reportSetting(index: string) {
    return new DataAwsBackupReportPlanReportSetting(this, 'report_setting', index, false);
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
