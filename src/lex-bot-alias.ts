// https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_name LexBotAlias#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_version LexBotAlias#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#description LexBotAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#name LexBotAlias#name}
  */
  readonly name: string;
  /**
  * conversation_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#conversation_logs LexBotAlias#conversation_logs}
  */
  readonly conversationLogs?: LexBotAliasConversationLogs[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#timeouts LexBotAlias#timeouts}
  */
  readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#destination LexBotAlias#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#kms_key_arn LexBotAlias#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_type LexBotAlias#log_type}
  */
  readonly logType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#resource_arn LexBotAlias#resource_arn}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#iam_role_arn LexBotAlias#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_settings LexBotAlias#log_settings}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#create LexBotAlias#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#delete LexBotAlias#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#update LexBotAlias#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}
*/
export class LexBotAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lex_bot_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexBotAliasConfig
  */
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
