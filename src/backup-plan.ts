// https://www.terraform.io/docs/providers/aws/r/backup_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#name BackupPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags BackupPlan#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags_all BackupPlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * advanced_backup_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#advanced_backup_setting BackupPlan#advanced_backup_setting}
  */
  readonly advancedBackupSetting?: BackupPlanAdvancedBackupSetting[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule BackupPlan#rule}
  */
  readonly rule: BackupPlanRule[];
}
export interface BackupPlanAdvancedBackupSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#backup_options BackupPlan#backup_options}
  */
  readonly backupOptions: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#resource_type BackupPlan#resource_type}
  */
  readonly resourceType: string;
}

function backupPlanAdvancedBackupSettingToTerraform(struct?: BackupPlanAdvancedBackupSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.backupOptions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface BackupPlanRuleCopyActionLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
}

function backupPlanRuleCopyActionLifecycleToTerraform(struct?: BackupPlanRuleCopyActionLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
  }
}

export interface BackupPlanRuleCopyAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#destination_vault_arn BackupPlan#destination_vault_arn}
  */
  readonly destinationVaultArn: string;
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupPlanRuleCopyActionLifecycle[];
}

function backupPlanRuleCopyActionToTerraform(struct?: BackupPlanRuleCopyAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_vault_arn: cdktf.stringToTerraform(struct!.destinationVaultArn),
    lifecycle: cdktf.listMapper(backupPlanRuleCopyActionLifecycleToTerraform)(struct!.lifecycle),
  }
}

export interface BackupPlanRuleLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
}

function backupPlanRuleLifecycleToTerraform(struct?: BackupPlanRuleLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
  }
}

export interface BackupPlanRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#completion_window BackupPlan#completion_window}
  */
  readonly completionWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#enable_continuous_backup BackupPlan#enable_continuous_backup}
  */
  readonly enableContinuousBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#recovery_point_tags BackupPlan#recovery_point_tags}
  */
  readonly recoveryPointTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule_name BackupPlan#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#schedule BackupPlan#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#start_window BackupPlan#start_window}
  */
  readonly startWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#target_vault_name BackupPlan#target_vault_name}
  */
  readonly targetVaultName: string;
  /**
  * copy_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#copy_action BackupPlan#copy_action}
  */
  readonly copyAction?: BackupPlanRuleCopyAction[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupPlanRuleLifecycle[];
}

function backupPlanRuleToTerraform(struct?: BackupPlanRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    completion_window: cdktf.numberToTerraform(struct!.completionWindow),
    enable_continuous_backup: cdktf.booleanToTerraform(struct!.enableContinuousBackup),
    recovery_point_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    start_window: cdktf.numberToTerraform(struct!.startWindow),
    target_vault_name: cdktf.stringToTerraform(struct!.targetVaultName),
    copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform)(struct!.copyAction),
    lifecycle: cdktf.listMapper(backupPlanRuleLifecycleToTerraform)(struct!.lifecycle),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan}
*/
export class BackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_backup_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_plan',
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
    this._tagsAll = config.tagsAll;
    this._advancedBackupSetting = config.advancedBackupSetting;
    this._rule = config.rule;
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
  private _name: string;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // advanced_backup_setting - computed: false, optional: true, required: false
  private _advancedBackupSetting?: BackupPlanAdvancedBackupSetting[];
  public get advancedBackupSetting() {
    return this.interpolationForAttribute('advanced_backup_setting') as any;
  }
  public set advancedBackupSetting(value: BackupPlanAdvancedBackupSetting[] ) {
    this._advancedBackupSetting = value;
  }
  public resetAdvancedBackupSetting() {
    this._advancedBackupSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBackupSettingInput() {
    return this._advancedBackupSetting
  }

  // rule - computed: false, optional: false, required: true
  private _rule: BackupPlanRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: BackupPlanRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      advanced_backup_setting: cdktf.listMapper(backupPlanAdvancedBackupSettingToTerraform)(this._advancedBackupSetting),
      rule: cdktf.listMapper(backupPlanRuleToTerraform)(this._rule),
    };
  }
}
