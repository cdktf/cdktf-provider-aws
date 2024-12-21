// https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupVaultNotificationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications#backup_vault_events BackupVaultNotifications#backup_vault_events}
  */
  readonly backupVaultEvents: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications#backup_vault_name BackupVaultNotifications#backup_vault_name}
  */
  readonly backupVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications#id BackupVaultNotifications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications#sns_topic_arn BackupVaultNotifications#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications aws_backup_vault_notifications}
*/
export class BackupVaultNotifications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_vault_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupVaultNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupVaultNotifications to import
  * @param importFromId The id of the existing BackupVaultNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupVaultNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_vault_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/backup_vault_notifications aws_backup_vault_notifications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupVaultNotificationsConfig
  */
  public constructor(scope: Construct, id: string, config: BackupVaultNotificationsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_vault_notifications',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.2',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupVaultEvents = config.backupVaultEvents;
    this._backupVaultName = config.backupVaultName;
    this._id = config.id;
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
    return cdktf.Fn.tolist(this.getListAttribute('backup_vault_events'));
  }
  public set backupVaultEvents(value: string[]) {
    this._backupVaultEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultEventsInput() {
    return this._backupVaultEvents;
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
    return this._backupVaultName;
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
    return this._snsTopicArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupVaultEvents),
      backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
      id: cdktf.stringToTerraform(this._id),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_vault_events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupVaultEvents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_vault_name: {
        value: cdktf.stringToHclTerraform(this._backupVaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
