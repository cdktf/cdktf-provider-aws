# `chatbotTeamsChannelConfiguration` Submodule <a name="`chatbotTeamsChannelConfiguration` Submodule" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotTeamsChannelConfiguration <a name="ChatbotTeamsChannelConfiguration" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfiguration;

ChatbotTeamsChannelConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .channelId(java.lang.String)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .teamId(java.lang.String)
    .tenantId(java.lang.String)
//  .channelName(java.lang.String)
//  .guardrailPolicyArns(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .teamName(java.lang.String)
//  .timeouts(ChatbotTeamsChannelConfigurationTimeouts)
//  .userAuthorizationRequired(java.lang.Boolean)
//  .userAuthorizationRequired(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.configurationName">configurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamName">teamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.configurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `guardrailPolicyArns`<sup>Optional</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.guardrailPolicyArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.loggingLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.snsTopicArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.teamName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `userAuthorizationRequired`<sup>Optional</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.userAuthorizationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns">resetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName">resetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired">resetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts"></a>

```java
public void putTimeouts(ChatbotTeamsChannelConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetGuardrailPolicyArns` <a name="resetGuardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns"></a>

```java
public void resetGuardrailPolicyArns()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns"></a>

```java
public void resetSnsTopicArns()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTeamName` <a name="resetTeamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName"></a>

```java
public void resetTeamName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserAuthorizationRequired` <a name="resetUserAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired"></a>

```java
public void resetUserAuthorizationRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfiguration;

ChatbotTeamsChannelConfiguration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfiguration;

ChatbotTeamsChannelConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfiguration;

ChatbotTeamsChannelConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfiguration;

ChatbotTeamsChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChatbotTeamsChannelConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChatbotTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn">chatConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput">guardrailPolicyArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput">teamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput">userAuthorizationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName">teamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chatConfigurationArn`<sup>Required</sup> <a name="chatConfigurationArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn"></a>

```java
public java.lang.String getChatConfigurationArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts"></a>

```java
public ChatbotTeamsChannelConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a>

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput"></a>

```java
public java.lang.String getConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `guardrailPolicyArnsInput`<sup>Optional</sup> <a name="guardrailPolicyArnsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicyArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput"></a>

```java
public java.lang.String getTeamNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `userAuthorizationRequiredInput`<sup>Optional</sup> <a name="userAuthorizationRequiredInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```java
public java.lang.Object getUserAuthorizationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

---

##### `guardrailPolicyArns`<sup>Required</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `userAuthorizationRequired`<sup>Required</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired"></a>

```java
public java.lang.Object getUserAuthorizationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotTeamsChannelConfigurationConfig <a name="ChatbotTeamsChannelConfigurationConfig" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfigurationConfig;

ChatbotTeamsChannelConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .channelId(java.lang.String)
    .configurationName(java.lang.String)
    .iamRoleArn(java.lang.String)
    .teamId(java.lang.String)
    .tenantId(java.lang.String)
//  .channelName(java.lang.String)
//  .guardrailPolicyArns(java.util.List<java.lang.String>)
//  .loggingLevel(java.lang.String)
//  .snsTopicArns(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .teamName(java.lang.String)
//  .timeouts(ChatbotTeamsChannelConfigurationTimeouts)
//  .userAuthorizationRequired(java.lang.Boolean)
//  .userAuthorizationRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName">teamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName"></a>

```java
public java.lang.String getConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `guardrailPolicyArns`<sup>Optional</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```java
public java.util.List<java.lang.String> getGuardrailPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts"></a>

```java
public ChatbotTeamsChannelConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `userAuthorizationRequired`<sup>Optional</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```java
public java.lang.Object getUserAuthorizationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

### ChatbotTeamsChannelConfigurationTimeouts <a name="ChatbotTeamsChannelConfigurationTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfigurationTimeouts;

ChatbotTeamsChannelConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotTeamsChannelConfigurationTimeoutsOutputReference <a name="ChatbotTeamsChannelConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chatbot_teams_channel_configuration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference;

new ChatbotTeamsChannelConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---



