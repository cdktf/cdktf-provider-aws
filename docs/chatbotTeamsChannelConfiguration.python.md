# `chatbotTeamsChannelConfiguration` Submodule <a name="`chatbotTeamsChannelConfiguration` Submodule" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotTeamsChannelConfiguration <a name="ChatbotTeamsChannelConfiguration" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel_id: str,
  configuration_name: str,
  iam_role_arn: str,
  team_id: str,
  tenant_id: str,
  channel_name: str = None,
  guardrail_policy_arns: typing.List[str] = None,
  logging_level: str = None,
  sns_topic_arns: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  team_name: str = None,
  timeouts: ChatbotTeamsChannelConfigurationTimeouts = None,
  user_authorization_required: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelId">channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.configurationName">configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.guardrailPolicyArns">guardrail_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamName">team_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.userAuthorizationRequired">user_authorization_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.configurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `guardrail_policy_arns`<sup>Optional</sup> <a name="guardrail_policy_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.guardrailPolicyArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.loggingLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `sns_topic_arns`<sup>Optional</sup> <a name="sns_topic_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.snsTopicArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `user_authorization_required`<sup>Optional</sup> <a name="user_authorization_required" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.userAuthorizationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns">reset_guardrail_policy_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns">reset_sns_topic_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName">reset_team_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired">reset_user_authorization_required</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_guardrail_policy_arns` <a name="reset_guardrail_policy_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns"></a>

```python
def reset_guardrail_policy_arns() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_sns_topic_arns` <a name="reset_sns_topic_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns"></a>

```python
def reset_sns_topic_arns() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_team_name` <a name="reset_team_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName"></a>

```python
def reset_team_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_authorization_required` <a name="reset_user_authorization_required" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired"></a>

```python
def reset_user_authorization_required() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChatbotTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn">chat_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput">configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput">guardrail_policy_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput">sns_topic_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput">team_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput">user_authorization_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName">configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns">guardrail_policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired">user_authorization_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_configuration_arn`<sup>Required</sup> <a name="chat_configuration_arn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn"></a>

```python
chat_configuration_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts"></a>

```python
timeouts: ChatbotTeamsChannelConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a>

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `configuration_name_input`<sup>Optional</sup> <a name="configuration_name_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput"></a>

```python
configuration_name_input: str
```

- *Type:* str

---

##### `guardrail_policy_arns_input`<sup>Optional</sup> <a name="guardrail_policy_arns_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```python
guardrail_policy_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `sns_topic_arns_input`<sup>Optional</sup> <a name="sns_topic_arns_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```python
sns_topic_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `team_name_input`<sup>Optional</sup> <a name="team_name_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput"></a>

```python
team_name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChatbotTeamsChannelConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>]

---

##### `user_authorization_required_input`<sup>Optional</sup> <a name="user_authorization_required_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```python
user_authorization_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName"></a>

```python
configuration_name: str
```

- *Type:* str

---

##### `guardrail_policy_arns`<sup>Required</sup> <a name="guardrail_policy_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns"></a>

```python
guardrail_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `sns_topic_arns`<sup>Required</sup> <a name="sns_topic_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns"></a>

```python
sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `user_authorization_required`<sup>Required</sup> <a name="user_authorization_required" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired"></a>

```python
user_authorization_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotTeamsChannelConfigurationConfig <a name="ChatbotTeamsChannelConfigurationConfig" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel_id: str,
  configuration_name: str,
  iam_role_arn: str,
  team_id: str,
  tenant_id: str,
  channel_name: str = None,
  guardrail_policy_arns: typing.List[str] = None,
  logging_level: str = None,
  sns_topic_arns: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  team_name: str = None,
  timeouts: ChatbotTeamsChannelConfigurationTimeouts = None,
  user_authorization_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId">channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName">configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns">guardrail_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns">sns_topic_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName">team_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired">user_authorization_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `configuration_name`<sup>Required</sup> <a name="configuration_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName"></a>

```python
configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `guardrail_policy_arns`<sup>Optional</sup> <a name="guardrail_policy_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```python
guardrail_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `sns_topic_arns`<sup>Optional</sup> <a name="sns_topic_arns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```python
sns_topic_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts"></a>

```python
timeouts: ChatbotTeamsChannelConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `user_authorization_required`<sup>Optional</sup> <a name="user_authorization_required" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```python
user_authorization_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

### ChatbotTeamsChannelConfigurationTimeouts <a name="ChatbotTeamsChannelConfigurationTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotTeamsChannelConfigurationTimeoutsOutputReference <a name="ChatbotTeamsChannelConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chatbot_teams_channel_configuration

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChatbotTeamsChannelConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>]

---



