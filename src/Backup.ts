// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Backup
*/
export namespace Backup {
  export interface BackupGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html#global_settings BackupGlobalSettings#global_settings}
    */
    readonly globalSettings: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings}
  */
  export class BackupGlobalSettings extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_global_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupGlobalSettingsConfig
    */
    public constructor(scope: Construct, id: string, config: BackupGlobalSettingsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_global_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._globalSettings = config.globalSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // global_settings - computed: false, optional: false, required: true
    private _globalSettings?: { [key: string]: string } | cdktf.IResolvable; 
    public get globalSettings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('global_settings') as any;
    }
    public set globalSettings(value: { [key: string]: string } | cdktf.IResolvable) {
      this._globalSettings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSettingsInput() {
      return this._globalSettings
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
        global_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._globalSettings),
      };
    }
  }
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function backupPlanRuleCopyActionLifecycleToTerraform(struct?: BackupPlanRuleCopyActionLifecycleOutputReference | BackupPlanRuleCopyActionLifecycle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
      delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
    }
  }

  export class BackupPlanRuleCopyActionLifecycleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cold_storage_after - computed: false, optional: true, required: false
    private _coldStorageAfter?: number | undefined; 
    public get coldStorageAfter() {
      return this.getNumberAttribute('cold_storage_after');
    }
    public set coldStorageAfter(value: number | undefined) {
      this._coldStorageAfter = value;
    }
    public resetColdStorageAfter() {
      this._coldStorageAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coldStorageAfterInput() {
      return this._coldStorageAfter
    }

    // delete_after - computed: false, optional: true, required: false
    private _deleteAfter?: number | undefined; 
    public get deleteAfter() {
      return this.getNumberAttribute('delete_after');
    }
    public set deleteAfter(value: number | undefined) {
      this._deleteAfter = value;
    }
    public resetDeleteAfter() {
      this._deleteAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteAfterInput() {
      return this._deleteAfter
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
    readonly lifecycle?: BackupPlanRuleCopyActionLifecycle;
  }

  function backupPlanRuleCopyActionToTerraform(struct?: BackupPlanRuleCopyAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}
    */
    readonly coldStorageAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}
    */
    readonly deleteAfter?: number;
  }

  function backupPlanRuleLifecycleToTerraform(struct?: BackupPlanRuleLifecycleOutputReference | BackupPlanRuleLifecycle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cold_storage_after: cdktf.numberToTerraform(struct!.coldStorageAfter),
      delete_after: cdktf.numberToTerraform(struct!.deleteAfter),
    }
  }

  export class BackupPlanRuleLifecycleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cold_storage_after - computed: false, optional: true, required: false
    private _coldStorageAfter?: number | undefined; 
    public get coldStorageAfter() {
      return this.getNumberAttribute('cold_storage_after');
    }
    public set coldStorageAfter(value: number | undefined) {
      this._coldStorageAfter = value;
    }
    public resetColdStorageAfter() {
      this._coldStorageAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coldStorageAfterInput() {
      return this._coldStorageAfter
    }

    // delete_after - computed: false, optional: true, required: false
    private _deleteAfter?: number | undefined; 
    public get deleteAfter() {
      return this.getNumberAttribute('delete_after');
    }
    public set deleteAfter(value: number | undefined) {
      this._deleteAfter = value;
    }
    public resetDeleteAfter() {
      this._deleteAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteAfterInput() {
      return this._deleteAfter
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
    readonly lifecycle?: BackupPlanRuleLifecycle;
  }

  function backupPlanRuleToTerraform(struct?: BackupPlanRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      completion_window: cdktf.numberToTerraform(struct!.completionWindow),
      enable_continuous_backup: cdktf.booleanToTerraform(struct!.enableContinuousBackup),
      recovery_point_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.recoveryPointTags),
      rule_name: cdktf.stringToTerraform(struct!.ruleName),
      schedule: cdktf.stringToTerraform(struct!.schedule),
      start_window: cdktf.numberToTerraform(struct!.startWindow),
      target_vault_name: cdktf.stringToTerraform(struct!.targetVaultName),
      copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform)(struct!.copyAction),
      lifecycle: backupPlanRuleLifecycleToTerraform(struct!.lifecycle),
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // advanced_backup_setting - computed: false, optional: true, required: false
    private _advancedBackupSetting?: BackupPlanAdvancedBackupSetting[] | undefined; 
    public get advancedBackupSetting() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('advanced_backup_setting') as any;
    }
    public set advancedBackupSetting(value: BackupPlanAdvancedBackupSetting[] | undefined) {
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
    private _rule?: BackupPlanRule[]; 
    public get rule() {
      // Getting the computed value is not yet implemented
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
  export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}
    */
    readonly resourceTypeOptInPreference: { [key: string]: boolean } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings}
  */
  export class BackupRegionSettings extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_region_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRegionSettingsConfig
    */
    public constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_region_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceTypeOptInPreference = config.resourceTypeOptInPreference;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_type_opt_in_preference - computed: false, optional: false, required: true
    private _resourceTypeOptInPreference?: { [key: string]: boolean } | cdktf.IResolvable; 
    public get resourceTypeOptInPreference() {
      return this.getBooleanAttribute('resource_type_opt_in_preference') as any;
    }
    public set resourceTypeOptInPreference(value: { [key: string]: boolean } | cdktf.IResolvable) {
      this._resourceTypeOptInPreference = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeOptInPreferenceInput() {
      return this._resourceTypeOptInPreference
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resource_type_opt_in_preference: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTypeOptInPreference),
      };
    }
  }
  export interface BackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#iam_role_arn BackupSelection#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#name BackupSelection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#plan_id BackupSelection#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#resources BackupSelection#resources}
    */
    readonly resources?: string[];
    /**
    * selection_tag block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#selection_tag BackupSelection#selection_tag}
    */
    readonly selectionTag?: BackupSelectionSelectionTag[];
  }
  export interface BackupSelectionSelectionTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#type BackupSelection#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#value BackupSelection#value}
    */
    readonly value: string;
  }

  function backupSelectionSelectionTagToTerraform(struct?: BackupSelectionSelectionTag): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection}
  */
  export class BackupSelection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_selection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupSelectionConfig
    */
    public constructor(scope: Construct, id: string, config: BackupSelectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_selection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._iamRoleArn = config.iamRoleArn;
      this._name = config.name;
      this._planId = config.planId;
      this._resources = config.resources;
      this._selectionTag = config.selectionTag;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
      this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
      return this._iamRoleArn
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

    // plan_id - computed: false, optional: false, required: true
    private _planId?: string; 
    public get planId() {
      return this.getStringAttribute('plan_id');
    }
    public set planId(value: string) {
      this._planId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get planIdInput() {
      return this._planId
    }

    // resources - computed: false, optional: true, required: false
    private _resources?: string[] | undefined; 
    public get resources() {
      return this.getListAttribute('resources');
    }
    public set resources(value: string[] | undefined) {
      this._resources = value;
    }
    public resetResources() {
      this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
      return this._resources
    }

    // selection_tag - computed: false, optional: true, required: false
    private _selectionTag?: BackupSelectionSelectionTag[] | undefined; 
    public get selectionTag() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('selection_tag') as any;
    }
    public set selectionTag(value: BackupSelectionSelectionTag[] | undefined) {
      this._selectionTag = value;
    }
    public resetSelectionTag() {
      this._selectionTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionTagInput() {
      return this._selectionTag
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
        name: cdktf.stringToTerraform(this._name),
        plan_id: cdktf.stringToTerraform(this._planId),
        resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
        selection_tag: cdktf.listMapper(backupSelectionSelectionTagToTerraform)(this._selectionTag),
      };
    }
  }
  export interface BackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html#kms_key_arn BackupVault#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html#name BackupVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html#tags BackupVault#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html#tags_all BackupVault#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html aws_backup_vault}
  */
  export class BackupVault extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_vault";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault.html aws_backup_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultConfig
    */
    public constructor(scope: Construct, id: string, config: BackupVaultConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_vault',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._kmsKeyArn = config.kmsKeyArn;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // kms_key_arn - computed: true, optional: true, required: false
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

    // recovery_points - computed: true, optional: false, required: false
    public get recoveryPoints() {
      return this.getNumberAttribute('recovery_points');
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
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface BackupVaultNotificationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#backup_vault_events BackupVaultNotifications#backup_vault_events}
    */
    readonly backupVaultEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#backup_vault_name BackupVaultNotifications#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html#sns_topic_arn BackupVaultNotifications#sns_topic_arn}
    */
    readonly snsTopicArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications}
  */
  export class BackupVaultNotifications extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_vault_notifications";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultNotificationsConfig
    */
    public constructor(scope: Construct, id: string, config: BackupVaultNotificationsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_vault_notifications',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._backupVaultEvents = config.backupVaultEvents;
      this._backupVaultName = config.backupVaultName;
      this._snsTopicArn = config.snsTopicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // backup_vault_arn - computed: true, optional: false, required: false
    public get backupVaultArn() {
      return this.getStringAttribute('backup_vault_arn');
    }

    // backup_vault_events - computed: false, optional: false, required: true
    private _backupVaultEvents?: string[]; 
    public get backupVaultEvents() {
      return this.getListAttribute('backup_vault_events');
    }
    public set backupVaultEvents(value: string[]) {
      this._backupVaultEvents = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultEventsInput() {
      return this._backupVaultEvents
    }

    // backup_vault_name - computed: false, optional: false, required: true
    private _backupVaultName?: string; 
    public get backupVaultName() {
      return this.getStringAttribute('backup_vault_name');
    }
    public set backupVaultName(value: string) {
      this._backupVaultName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultNameInput() {
      return this._backupVaultName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
      this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform)(this._backupVaultEvents),
        backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      };
    }
  }
  export interface BackupVaultPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#backup_vault_name BackupVaultPolicy#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#policy BackupVaultPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy}
  */
  export class BackupVaultPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_vault_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: BackupVaultPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_vault_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._backupVaultName = config.backupVaultName;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // backup_vault_arn - computed: true, optional: false, required: false
    public get backupVaultArn() {
      return this.getStringAttribute('backup_vault_arn');
    }

    // backup_vault_name - computed: false, optional: false, required: true
    private _backupVaultName?: string; 
    public get backupVaultName() {
      return this.getStringAttribute('backup_vault_name');
    }
    public set backupVaultName(value: string) {
      this._backupVaultName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultNameInput() {
      return this._backupVaultName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface DataAwsBackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html#plan_id DataAwsBackupPlan#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html#tags DataAwsBackupPlan#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan}
  */
  export class DataAwsBackupPlan extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_plan";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupPlanConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsBackupPlanConfig) {
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
      this._planId = config.planId;
      this._tags = config.tags;
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

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // plan_id - computed: false, optional: false, required: true
    private _planId?: string; 
    public get planId() {
      return this.getStringAttribute('plan_id');
    }
    public set planId(value: string) {
      this._planId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get planIdInput() {
      return this._planId
    }

    // tags - computed: true, optional: true, required: false
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        plan_id: cdktf.stringToTerraform(this._planId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsBackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html#plan_id DataAwsBackupSelection#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html#selection_id DataAwsBackupSelection#selection_id}
    */
    readonly selectionId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection}
  */
  export class DataAwsBackupSelection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_selection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_selection.html aws_backup_selection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupSelectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_selection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._planId = config.planId;
      this._selectionId = config.selectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // iam_role_arn - computed: true, optional: false, required: false
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // plan_id - computed: false, optional: false, required: true
    private _planId?: string; 
    public get planId() {
      return this.getStringAttribute('plan_id');
    }
    public set planId(value: string) {
      this._planId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get planIdInput() {
      return this._planId
    }

    // resources - computed: true, optional: false, required: false
    public get resources() {
      return this.getListAttribute('resources');
    }

    // selection_id - computed: false, optional: false, required: true
    private _selectionId?: string; 
    public get selectionId() {
      return this.getStringAttribute('selection_id');
    }
    public set selectionId(value: string) {
      this._selectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionIdInput() {
      return this._selectionId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        plan_id: cdktf.stringToTerraform(this._planId),
        selection_id: cdktf.stringToTerraform(this._selectionId),
      };
    }
  }
  export interface DataAwsBackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#name DataAwsBackupVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#tags DataAwsBackupVault#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault}
  */
  export class DataAwsBackupVault extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_backup_vault";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupVaultConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsBackupVaultConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_backup_vault',
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
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

    // recovery_points - computed: true, optional: false, required: false
    public get recoveryPoints() {
      return this.getNumberAttribute('recovery_points');
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
