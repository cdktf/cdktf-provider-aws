/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChatbotSlackChannelConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}
  */
  readonly configurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}
  */
  readonly guardrailPolicyArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}
  */
  readonly slackChannelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}
  */
  readonly slackTeamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}
  */
  readonly snsTopicArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}
  */
  readonly userAuthorizationRequired?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#timeouts ChatbotSlackChannelConfiguration#timeouts}
  */
  readonly timeouts?: ChatbotSlackChannelConfigurationTimeouts;
}
export interface ChatbotSlackChannelConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#create ChatbotSlackChannelConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#delete ChatbotSlackChannelConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#update ChatbotSlackChannelConfiguration#update}
  */
  readonly update?: string;
}

export function chatbotSlackChannelConfigurationTimeoutsToTerraform(struct?: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable): any {
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


export function chatbotSlackChannelConfigurationTimeoutsToHclTerraform(struct?: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChatbotSlackChannelConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration}
*/
export class ChatbotSlackChannelConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chatbot_slack_channel_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import
  * @param importFromId The id of the existing ChatbotSlackChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chatbot_slack_channel_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChatbotSlackChannelConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ChatbotSlackChannelConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chatbot_slack_channel_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.1',
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
    this._configurationName = config.configurationName;
    this._guardrailPolicyArns = config.guardrailPolicyArns;
    this._iamRoleArn = config.iamRoleArn;
    this._loggingLevel = config.loggingLevel;
    this._slackChannelId = config.slackChannelId;
    this._slackTeamId = config.slackTeamId;
    this._snsTopicArns = config.snsTopicArns;
    this._tags = config.tags;
    this._userAuthorizationRequired = config.userAuthorizationRequired;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chat_configuration_arn - computed: true, optional: false, required: false
  public get chatConfigurationArn() {
    return this.getStringAttribute('chat_configuration_arn');
  }

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // guardrail_policy_arns - computed: true, optional: true, required: false
  private _guardrailPolicyArns?: string[]; 
  public get guardrailPolicyArns() {
    return this.getListAttribute('guardrail_policy_arns');
  }
  public set guardrailPolicyArns(value: string[]) {
    this._guardrailPolicyArns = value;
  }
  public resetGuardrailPolicyArns() {
    this._guardrailPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailPolicyArnsInput() {
    return this._guardrailPolicyArns;
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

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // slack_channel_id - computed: false, optional: false, required: true
  private _slackChannelId?: string; 
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }
  public set slackChannelId(value: string) {
    this._slackChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelIdInput() {
    return this._slackChannelId;
  }

  // slack_channel_name - computed: true, optional: false, required: false
  public get slackChannelName() {
    return this.getStringAttribute('slack_channel_name');
  }

  // slack_team_id - computed: false, optional: false, required: true
  private _slackTeamId?: string; 
  public get slackTeamId() {
    return this.getStringAttribute('slack_team_id');
  }
  public set slackTeamId(value: string) {
    this._slackTeamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTeamIdInput() {
    return this._slackTeamId;
  }

  // slack_team_name - computed: true, optional: false, required: false
  public get slackTeamName() {
    return this.getStringAttribute('slack_team_name');
  }

  // sns_topic_arns - computed: true, optional: true, required: false
  private _snsTopicArns?: string[]; 
  public get snsTopicArns() {
    return this.getListAttribute('sns_topic_arns');
  }
  public set snsTopicArns(value: string[]) {
    this._snsTopicArns = value;
  }
  public resetSnsTopicArns() {
    this._snsTopicArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnsInput() {
    return this._snsTopicArns;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // user_authorization_required - computed: true, optional: true, required: false
  private _userAuthorizationRequired?: boolean | cdktf.IResolvable; 
  public get userAuthorizationRequired() {
    return this.getBooleanAttribute('user_authorization_required');
  }
  public set userAuthorizationRequired(value: boolean | cdktf.IResolvable) {
    this._userAuthorizationRequired = value;
  }
  public resetUserAuthorizationRequired() {
    this._userAuthorizationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationRequiredInput() {
    return this._userAuthorizationRequired;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChatbotSlackChannelConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChatbotSlackChannelConfigurationTimeouts) {
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
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      guardrail_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guardrailPolicyArns),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      logging_level: cdktf.stringToTerraform(this._loggingLevel),
      slack_channel_id: cdktf.stringToTerraform(this._slackChannelId),
      slack_team_id: cdktf.stringToTerraform(this._slackTeamId),
      sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snsTopicArns),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_authorization_required: cdktf.booleanToTerraform(this._userAuthorizationRequired),
      timeouts: chatbotSlackChannelConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrail_policy_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guardrailPolicyArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_level: {
        value: cdktf.stringToHclTerraform(this._loggingLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_channel_id: {
        value: cdktf.stringToHclTerraform(this._slackChannelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_team_id: {
        value: cdktf.stringToHclTerraform(this._slackTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snsTopicArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_authorization_required: {
        value: cdktf.booleanToHclTerraform(this._userAuthorizationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: chatbotSlackChannelConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChatbotSlackChannelConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
