// https://www.terraform.io/docs/providers/aws/r/backup_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** rule block */
  readonly rule: BackupPlanRule[];
}
export interface BackupPlanRuleCopyActionLifecycle {
  readonly coldStorageAfter?: number;
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
  readonly destinationVaultArn: string;
  /** lifecycle block */
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
  readonly coldStorageAfter?: number;
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
  readonly completionWindow?: number;
  readonly recoveryPointTags?: { [key: string]: string };
  readonly ruleName: string;
  readonly schedule?: string;
  readonly startWindow?: number;
  readonly targetVaultName: string;
  /** copy_action block */
  readonly copyAction?: BackupPlanRuleCopyAction[];
  /** lifecycle block */
  readonly lifecycle?: BackupPlanRuleLifecycle[];
}

function backupPlanRuleToTerraform(struct?: BackupPlanRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    completion_window: cdktf.numberToTerraform(struct!.completionWindow),
    recovery_point_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    start_window: cdktf.numberToTerraform(struct!.startWindow),
    target_vault_name: cdktf.stringToTerraform(struct!.targetVaultName),
    copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform)(struct!.copyAction),
    lifecycle: cdktf.listMapper(backupPlanRuleLifecycleToTerraform)(struct!.lifecycle),
  }
}


// Resource

export class BackupPlan extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
      rule: cdktf.listMapper(backupPlanRuleToTerraform)(this._rule),
    };
  }
}
