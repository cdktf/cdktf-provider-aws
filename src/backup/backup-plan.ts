// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Backup
*/
export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * advanced_backup_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}
  */
  readonly advancedBackupSetting?: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}
  */
  readonly rule: BackupPlanRule[] | cdktf.IResolvable;
}
export interface BackupPlanAdvancedBackupSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}
  */
  readonly backupOptions: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}
  */
  readonly resourceType: string;
}

export function backupPlanAdvancedBackupSettingToTerraform(struct?: BackupPlanAdvancedBackupSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.backupOptions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface BackupPlanRuleCopyActionLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
}

export function backupPlanRuleCopyActionLifecycleToTerraform(struct?: BackupPlanRuleCopyActionLifecycleOutputReference | BackupPlanRuleCopyActionLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
  }
}

export class BackupPlanRuleCopyActionLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BackupPlanRuleCopyActionLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageAfter = this._coldStorageAfter;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanRuleCopyActionLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coldStorageAfter = undefined;
      this._deleteAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coldStorageAfter = value.coldStorageAfter;
      this._deleteAfter = value.deleteAfter;
    }
  }

  // cold_storage_after - computed: false, optional: true, required: false
  private _coldStorageAfter?: number; 
  public get coldStorageAfter() {
    return this.getNumberAttribute('cold_storage_after');
  }
  public set coldStorageAfter(value: number) {
    this._coldStorageAfter = value;
  }
  public resetColdStorageAfter() {
    this._coldStorageAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageAfterInput() {
    return this._coldStorageAfter;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: number; 
  public get deleteAfter() {
    return this.getNumberAttribute('delete_after');
  }
  public set deleteAfter(value: number) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }
}
export interface BackupPlanRuleCopyAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}
  */
  readonly destinationVaultArn: string;
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupPlanRuleCopyActionLifecycle;
}

export function backupPlanRuleCopyActionToTerraform(struct?: BackupPlanRuleCopyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_vault_arn: cdktf.stringToTerraform(struct!.destinationVaultArn),
    lifecycle: backupPlanRuleCopyActionLifecycleToTerraform(struct!.lifecycle),
  }
}

export interface BackupPlanRuleLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}
  */
  readonly coldStorageAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}
  */
  readonly deleteAfter?: number;
}

export function backupPlanRuleLifecycleToTerraform(struct?: BackupPlanRuleLifecycleOutputReference | BackupPlanRuleLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
    delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
  }
}

export class BackupPlanRuleLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BackupPlanRuleLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageAfter = this._coldStorageAfter;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanRuleLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coldStorageAfter = undefined;
      this._deleteAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coldStorageAfter = value.coldStorageAfter;
      this._deleteAfter = value.deleteAfter;
    }
  }

  // cold_storage_after - computed: false, optional: true, required: false
  private _coldStorageAfter?: number; 
  public get coldStorageAfter() {
    return this.getNumberAttribute('cold_storage_after');
  }
  public set coldStorageAfter(value: number) {
    this._coldStorageAfter = value;
  }
  public resetColdStorageAfter() {
    this._coldStorageAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageAfterInput() {
    return this._coldStorageAfter;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: number; 
  public get deleteAfter() {
    return this.getNumberAttribute('delete_after');
  }
  public set deleteAfter(value: number) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }
}
export interface BackupPlanRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}
  */
  readonly completionWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}
  */
  readonly enableContinuousBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}
  */
  readonly recoveryPointTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}
  */
  readonly startWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}
  */
  readonly targetVaultName: string;
  /**
  * copy_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#copy_action BackupPlan#copy_action}
  */
  readonly copyAction?: BackupPlanRuleCopyAction[] | cdktf.IResolvable;
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupPlanRuleLifecycle;
}

export function backupPlanRuleToTerraform(struct?: BackupPlanRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completion_window: cdktf.numberToTerraform(struct!.completionWindow),
    enable_continuous_backup: cdktf.booleanToTerraform(struct!.enableContinuousBackup),
    recovery_point_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    start_window: cdktf.numberToTerraform(struct!.startWindow),
    target_vault_name: cdktf.stringToTerraform(struct!.targetVaultName),
    copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform)(struct!.copyAction),
    lifecycle: backupPlanRuleLifecycleToTerraform(struct!.lifecycle),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan} Resource
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // advanced_backup_setting - computed: false, optional: true, required: false
  private _advancedBackupSetting?: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable; 
  public get advancedBackupSetting() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('advanced_backup_setting')));
  }
  public set advancedBackupSetting(value: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable) {
    this._advancedBackupSetting = value;
  }
  public resetAdvancedBackupSetting() {
    this._advancedBackupSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBackupSettingInput() {
    return this._advancedBackupSetting;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: BackupPlanRule[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('rule')));
  }
  public set rule(value: BackupPlanRule[] | cdktf.IResolvable) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      advanced_backup_setting: cdktf.listMapper(backupPlanAdvancedBackupSettingToTerraform)(this._advancedBackupSetting),
      rule: cdktf.listMapper(backupPlanRuleToTerraform)(this._rule),
    };
  }
}
