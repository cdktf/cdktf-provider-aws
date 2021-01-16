// https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
  readonly botName: string;
  readonly botVersion: string;
  readonly description?: string;
  readonly name: string;
  /** conversation_logs block */
  readonly conversationLogs?: LexBotAliasConversationLogs[];
  /** timeouts block */
  readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
  readonly destination: string;
  readonly kmsKeyArn?: string;
  readonly logType: string;
  readonly resourceArn: string;
}

function lexBotAliasConversationLogsLogSettingsToTerraform(struct?: LexBotAliasConversationLogsLogSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    log_type: cdktf.stringToTerraform(struct!.logType),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface LexBotAliasConversationLogs {
  readonly iamRoleArn: string;
  /** log_settings block */
  readonly logSettings?: LexBotAliasConversationLogsLogSettings[];
}

function lexBotAliasConversationLogsToTerraform(struct?: LexBotAliasConversationLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
    log_settings: cdktf.listMapper(lexBotAliasConversationLogsLogSettingsToTerraform)(struct!.logSettings),
  }
}

export interface LexBotAliasTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function lexBotAliasTimeoutsToTerraform(struct?: LexBotAliasTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LexBotAlias extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LexBotAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_bot_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._botVersion = config.botVersion;
    this._description = config.description;
    this._name = config.name;
    this._conversationLogs = config.conversationLogs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion: string;
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // conversation_logs - computed: false, optional: true, required: false
  private _conversationLogs?: LexBotAliasConversationLogs[];
  public get conversationLogs() {
    return this.interpolationForAttribute('conversation_logs') as any;
  }
  public set conversationLogs(value: LexBotAliasConversationLogs[] ) {
    this._conversationLogs = value;
  }
  public resetConversationLogs() {
    this._conversationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationLogsInput() {
    return this._conversationLogs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexBotAliasTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LexBotAliasTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: cdktf.stringToTerraform(this._botName),
      bot_version: cdktf.stringToTerraform(this._botVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      conversation_logs: cdktf.listMapper(lexBotAliasConversationLogsToTerraform)(this._conversationLogs),
      timeouts: lexBotAliasTimeoutsToTerraform(this._timeouts),
    };
  }
}
