// https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LexBotAliasConfig extends TerraformMetaArguments {
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
export interface LexBotAliasConversationLogs {
  readonly iamRoleArn: string;
  /** log_settings block */
  readonly logSettings?: LexBotAliasConversationLogsLogSettings[];
}
export interface LexBotAliasTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LexBotAlias extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this._botName;
  }
  public set botName(value: string) {
    this._botName = value;
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion: string;
  public get botVersion() {
    return this._botVersion;
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }

  // checksum - computed: true, optional: false, required: true
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // conversation_logs - computed: false, optional: true, required: false
  private _conversationLogs?: LexBotAliasConversationLogs[];
  public get conversationLogs() {
    return this._conversationLogs;
  }
  public set conversationLogs(value: LexBotAliasConversationLogs[] | undefined) {
    this._conversationLogs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexBotAliasTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LexBotAliasTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: this._botName,
      bot_version: this._botVersion,
      description: this._description,
      name: this._name,
      conversation_logs: this._conversationLogs,
      timeouts: this._timeouts,
    };
  }
}
