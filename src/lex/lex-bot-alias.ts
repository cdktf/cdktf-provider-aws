// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_name LexBotAlias#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#bot_version LexBotAlias#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#description LexBotAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#name LexBotAlias#name}
  */
  readonly name: string;
  /**
  * conversation_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#conversation_logs LexBotAlias#conversation_logs}
  */
  readonly conversationLogs?: LexBotAliasConversationLogs;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#timeouts LexBotAlias#timeouts}
  */
  readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#destination LexBotAlias#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_type LexBotAlias#log_type}
  */
  readonly logType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#resource_arn LexBotAlias#resource_arn}
  */
  readonly resourceArn: string;
}

export function lexBotAliasConversationLogsLogSettingsToTerraform(struct?: LexBotAliasConversationLogsLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    log_type: cdktf.stringToTerraform(struct!.logType),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface LexBotAliasConversationLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#log_settings LexBotAlias#log_settings}
  */
  readonly logSettings?: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable;
}

export function lexBotAliasConversationLogsToTerraform(struct?: LexBotAliasConversationLogsOutputReference | LexBotAliasConversationLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
    log_settings: cdktf.listMapper(lexBotAliasConversationLogsLogSettingsToTerraform)(struct!.logSettings),
  }
}

export class LexBotAliasConversationLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LexBotAliasConversationLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._logSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSettings = this._logSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotAliasConversationLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamRoleArn = undefined;
      this._logSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamRoleArn = value.iamRoleArn;
      this._logSettings = value.logSettings;
    }
  }

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
    return this._iamRoleArn;
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings?: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable; 
  public get logSettings() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('log_settings')));
  }
  public set logSettings(value: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable) {
    this._logSettings = value;
  }
  public resetLogSettings() {
    this._logSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings;
  }
}
export interface LexBotAliasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#create LexBotAlias#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#delete LexBotAlias#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias#update LexBotAlias#update}
  */
  readonly update?: string;
}

export function lexBotAliasTimeoutsToTerraform(struct?: LexBotAliasTimeoutsOutputReference | LexBotAliasTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LexBotAliasTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LexBotAliasTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotAliasTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias aws_lex_bot_alias}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias aws_lex_bot_alias} Resource
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
    this._conversationLogs.internalValue = config.conversationLogs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion?: string; 
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // conversation_logs - computed: false, optional: true, required: false
  private _conversationLogs = new LexBotAliasConversationLogsOutputReference(this, "conversation_logs", true);
  public get conversationLogs() {
    return this._conversationLogs;
  }
  public putConversationLogs(value: LexBotAliasConversationLogs) {
    this._conversationLogs.internalValue = value;
  }
  public resetConversationLogs() {
    this._conversationLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationLogsInput() {
    return this._conversationLogs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LexBotAliasTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LexBotAliasTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      conversation_logs: lexBotAliasConversationLogsToTerraform(this._conversationLogs.internalValue),
      timeouts: lexBotAliasTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
