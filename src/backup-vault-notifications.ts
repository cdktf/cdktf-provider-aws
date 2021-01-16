// https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupVaultNotificationsConfig extends TerraformMetaArguments {
  readonly backupVaultEvents: string[];
  readonly backupVaultName: string;
  readonly snsTopicArn: string;
}

// Resource

export class BackupVaultNotifications extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // backup_vault_arn - computed: true, optional: false, required: true
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_events - computed: false, optional: false, required: true
  private _backupVaultEvents: string[];
  public get backupVaultEvents() {
    return this._backupVaultEvents;
  }
  public set backupVaultEvents(value: string[]) {
    this._backupVaultEvents = value;
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName: string;
  public get backupVaultName() {
    return this._backupVaultName;
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn: string;
  public get snsTopicArn() {
    return this._snsTopicArn;
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_events: this._backupVaultEvents,
      backup_vault_name: this._backupVaultName,
      sns_topic_arn: this._snsTopicArn,
    };
  }
}
