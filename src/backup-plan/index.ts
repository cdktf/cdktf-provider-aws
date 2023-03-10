// https://www.terraform.io/docs/providers/aws/r/backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class BackupPlanAdvancedBackupSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPlanAdvancedBackupSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOptions = this._backupOptions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanAdvancedBackupSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupOptions = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupOptions = value.backupOptions;
      this._resourceType = value.resourceType;
    }
  }

  // backup_options - computed: false, optional: false, required: true
  private _backupOptions?: { [key: string]: string }; 
  public get backupOptions() {
    return this.getStringMapAttribute('backup_options');
  }
  public set backupOptions(value: { [key: string]: string }) {
    this._backupOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOptionsInput() {
    return this._backupOptions;
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
    return this._resourceType;
  }
}

export class BackupPlanAdvancedBackupSettingList extends cdktf.ComplexList {
  public internalValue? : BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable

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
  public get(index: number): BackupPlanAdvancedBackupSettingOutputReference {
    return new BackupPlanAdvancedBackupSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

export class BackupPlanRuleCopyActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPlanRuleCopyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationVaultArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVaultArn = this._destinationVaultArn;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanRuleCopyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationVaultArn = undefined;
      this._lifecycle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationVaultArn = value.destinationVaultArn;
      this._lifecycle.internalValue = value.lifecycle;
    }
  }

  // destination_vault_arn - computed: false, optional: false, required: true
  private _destinationVaultArn?: string; 
  public get destinationVaultArn() {
    return this.getStringAttribute('destination_vault_arn');
  }
  public set destinationVaultArn(value: string) {
    this._destinationVaultArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVaultArnInput() {
    return this._destinationVaultArn;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new BackupPlanRuleCopyActionLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: BackupPlanRuleCopyActionLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }
}

export class BackupPlanRuleCopyActionList extends cdktf.ComplexList {
  public internalValue? : BackupPlanRuleCopyAction[] | cdktf.IResolvable

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
  public get(index: number): BackupPlanRuleCopyActionOutputReference {
    return new BackupPlanRuleCopyActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform, true)(struct!.copyAction),
    lifecycle: backupPlanRuleLifecycleToTerraform(struct!.lifecycle),
  }
}

export class BackupPlanRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupPlanRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionWindow = this._completionWindow;
    }
    if (this._enableContinuousBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableContinuousBackup = this._enableContinuousBackup;
    }
    if (this._recoveryPointTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointTags = this._recoveryPointTags;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._startWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWindow = this._startWindow;
    }
    if (this._targetVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVaultName = this._targetVaultName;
    }
    if (this._copyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyAction = this._copyAction?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionWindow = undefined;
      this._enableContinuousBackup = undefined;
      this._recoveryPointTags = undefined;
      this._ruleName = undefined;
      this._schedule = undefined;
      this._startWindow = undefined;
      this._targetVaultName = undefined;
      this._copyAction.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionWindow = value.completionWindow;
      this._enableContinuousBackup = value.enableContinuousBackup;
      this._recoveryPointTags = value.recoveryPointTags;
      this._ruleName = value.ruleName;
      this._schedule = value.schedule;
      this._startWindow = value.startWindow;
      this._targetVaultName = value.targetVaultName;
      this._copyAction.internalValue = value.copyAction;
      this._lifecycle.internalValue = value.lifecycle;
    }
  }

  // completion_window - computed: false, optional: true, required: false
  private _completionWindow?: number; 
  public get completionWindow() {
    return this.getNumberAttribute('completion_window');
  }
  public set completionWindow(value: number) {
    this._completionWindow = value;
  }
  public resetCompletionWindow() {
    this._completionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionWindowInput() {
    return this._completionWindow;
  }

  // enable_continuous_backup - computed: false, optional: true, required: false
  private _enableContinuousBackup?: boolean | cdktf.IResolvable; 
  public get enableContinuousBackup() {
    return this.getBooleanAttribute('enable_continuous_backup');
  }
  public set enableContinuousBackup(value: boolean | cdktf.IResolvable) {
    this._enableContinuousBackup = value;
  }
  public resetEnableContinuousBackup() {
    this._enableContinuousBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContinuousBackupInput() {
    return this._enableContinuousBackup;
  }

  // recovery_point_tags - computed: false, optional: true, required: false
  private _recoveryPointTags?: { [key: string]: string }; 
  public get recoveryPointTags() {
    return this.getStringMapAttribute('recovery_point_tags');
  }
  public set recoveryPointTags(value: { [key: string]: string }) {
    this._recoveryPointTags = value;
  }
  public resetRecoveryPointTags() {
    this._recoveryPointTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTagsInput() {
    return this._recoveryPointTags;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // start_window - computed: false, optional: true, required: false
  private _startWindow?: number; 
  public get startWindow() {
    return this.getNumberAttribute('start_window');
  }
  public set startWindow(value: number) {
    this._startWindow = value;
  }
  public resetStartWindow() {
    this._startWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWindowInput() {
    return this._startWindow;
  }

  // target_vault_name - computed: false, optional: false, required: true
  private _targetVaultName?: string; 
  public get targetVaultName() {
    return this.getStringAttribute('target_vault_name');
  }
  public set targetVaultName(value: string) {
    this._targetVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVaultNameInput() {
    return this._targetVaultName;
  }

  // copy_action - computed: false, optional: true, required: false
  private _copyAction = new BackupPlanRuleCopyActionList(this, "copy_action", true);
  public get copyAction() {
    return this._copyAction;
  }
  public putCopyAction(value: BackupPlanRuleCopyAction[] | cdktf.IResolvable) {
    this._copyAction.internalValue = value;
  }
  public resetCopyAction() {
    this._copyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyActionInput() {
    return this._copyAction.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new BackupPlanRuleLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: BackupPlanRuleLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }
}

export class BackupPlanRuleList extends cdktf.ComplexList {
  public internalValue? : BackupPlanRule[] | cdktf.IResolvable

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
  public get(index: number): BackupPlanRuleOutputReference {
    return new BackupPlanRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}
*/
export class BackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_plan";

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
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedBackupSetting.internalValue = config.advancedBackupSetting;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // advanced_backup_setting - computed: false, optional: true, required: false
  private _advancedBackupSetting = new BackupPlanAdvancedBackupSettingList(this, "advanced_backup_setting", true);
  public get advancedBackupSetting() {
    return this._advancedBackupSetting;
  }
  public putAdvancedBackupSetting(value: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable) {
    this._advancedBackupSetting.internalValue = value;
  }
  public resetAdvancedBackupSetting() {
    this._advancedBackupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBackupSettingInput() {
    return this._advancedBackupSetting.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new BackupPlanRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: BackupPlanRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      advanced_backup_setting: cdktf.listMapper(backupPlanAdvancedBackupSettingToTerraform, true)(this._advancedBackupSetting.internalValue),
      rule: cdktf.listMapper(backupPlanRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}
