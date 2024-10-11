# `bedrockGuardrail` Submodule <a name="`bedrockGuardrail` Submodule" id="@cdktf/provider-aws.bedrockGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockGuardrail <a name="BedrockGuardrail" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrail;

BedrockGuardrail.Builder.create(Construct scope, java.lang.String id)
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
    .blockedInputMessaging(java.lang.String)
    .blockedOutputsMessaging(java.lang.String)
    .name(java.lang.String)
//  .contentPolicyConfig(IResolvable)
//  .contentPolicyConfig(java.util.List<BedrockGuardrailContentPolicyConfig>)
//  .contextualGroundingPolicyConfig(IResolvable)
//  .contextualGroundingPolicyConfig(java.util.List<BedrockGuardrailContextualGroundingPolicyConfig>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .sensitiveInformationPolicyConfig(IResolvable)
//  .sensitiveInformationPolicyConfig(java.util.List<BedrockGuardrailSensitiveInformationPolicyConfig>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockGuardrailTimeouts)
//  .topicPolicyConfig(IResolvable)
//  .topicPolicyConfig(java.util.List<BedrockGuardrailTopicPolicyConfig>)
//  .wordPolicyConfig(IResolvable)
//  .wordPolicyConfig(java.util.List<BedrockGuardrailWordPolicyConfig>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.contentPolicyConfig">contentPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>></code> | content_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>></code> | contextual_grounding_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>></code> | sensitive_information_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.topicPolicyConfig">topicPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>></code> | topic_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.wordPolicyConfig">wordPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>></code> | word_policy_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.blockedInputMessaging"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}.

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.blockedOutputsMessaging"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `contentPolicyConfig`<sup>Optional</sup> <a name="contentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.contentPolicyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>>

content_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}

---

##### `contextualGroundingPolicyConfig`<sup>Optional</sup> <a name="contextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.contextualGroundingPolicyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>>

contextual_grounding_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}.

---

##### `sensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.sensitiveInformationPolicyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>>

sensitive_information_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}

---

##### `topicPolicyConfig`<sup>Optional</sup> <a name="topicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.topicPolicyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>>

topic_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}

---

##### `wordPolicyConfig`<sup>Optional</sup> <a name="wordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.wordPolicyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>>

word_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig">putContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig">putContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig">putSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig">putTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig">putWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig">resetContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig">resetContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig">resetSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig">resetTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig">resetWordPolicyConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentPolicyConfig` <a name="putContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig"></a>

```java
public void putContentPolicyConfig(IResolvable OR java.util.List<BedrockGuardrailContentPolicyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>>

---

##### `putContextualGroundingPolicyConfig` <a name="putContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig"></a>

```java
public void putContextualGroundingPolicyConfig(IResolvable OR java.util.List<BedrockGuardrailContextualGroundingPolicyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>>

---

##### `putSensitiveInformationPolicyConfig` <a name="putSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig"></a>

```java
public void putSensitiveInformationPolicyConfig(IResolvable OR java.util.List<BedrockGuardrailSensitiveInformationPolicyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts"></a>

```java
public void putTimeouts(BedrockGuardrailTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

---

##### `putTopicPolicyConfig` <a name="putTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig"></a>

```java
public void putTopicPolicyConfig(IResolvable OR java.util.List<BedrockGuardrailTopicPolicyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>>

---

##### `putWordPolicyConfig` <a name="putWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig"></a>

```java
public void putWordPolicyConfig(IResolvable OR java.util.List<BedrockGuardrailWordPolicyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>>

---

##### `resetContentPolicyConfig` <a name="resetContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig"></a>

```java
public void resetContentPolicyConfig()
```

##### `resetContextualGroundingPolicyConfig` <a name="resetContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig"></a>

```java
public void resetContextualGroundingPolicyConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetSensitiveInformationPolicyConfig` <a name="resetSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig"></a>

```java
public void resetSensitiveInformationPolicyConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopicPolicyConfig` <a name="resetTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig"></a>

```java
public void resetTopicPolicyConfig()
```

##### `resetWordPolicyConfig` <a name="resetWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig"></a>

```java
public void resetWordPolicyConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrail;

BedrockGuardrail.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrail;

BedrockGuardrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrail;

BedrockGuardrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrail;

BedrockGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList">BedrockGuardrailContentPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList">BedrockGuardrailContextualGroundingPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailArn">guardrailArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList">BedrockGuardrailSensitiveInformationPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference">BedrockGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList">BedrockGuardrailTopicPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList">BedrockGuardrailWordPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput">blockedInputMessagingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput">blockedOutputsMessagingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput">contentPolicyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput">contextualGroundingPolicyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput">sensitiveInformationPolicyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput">topicPolicyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput">wordPolicyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentPolicyConfig`<sup>Required</sup> <a name="contentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig"></a>

```java
public BedrockGuardrailContentPolicyConfigList getContentPolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList">BedrockGuardrailContentPolicyConfigList</a>

---

##### `contextualGroundingPolicyConfig`<sup>Required</sup> <a name="contextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig"></a>

```java
public BedrockGuardrailContextualGroundingPolicyConfigList getContextualGroundingPolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList">BedrockGuardrailContextualGroundingPolicyConfigList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailArn"></a>

```java
public java.lang.String getGuardrailArn();
```

- *Type:* java.lang.String

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

---

##### `sensitiveInformationPolicyConfig`<sup>Required</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigList getSensitiveInformationPolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList">BedrockGuardrailSensitiveInformationPolicyConfigList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeouts"></a>

```java
public BedrockGuardrailTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference">BedrockGuardrailTimeoutsOutputReference</a>

---

##### `topicPolicyConfig`<sup>Required</sup> <a name="topicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig"></a>

```java
public BedrockGuardrailTopicPolicyConfigList getTopicPolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList">BedrockGuardrailTopicPolicyConfigList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `wordPolicyConfig`<sup>Required</sup> <a name="wordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig"></a>

```java
public BedrockGuardrailWordPolicyConfigList getWordPolicyConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList">BedrockGuardrailWordPolicyConfigList</a>

---

##### `blockedInputMessagingInput`<sup>Optional</sup> <a name="blockedInputMessagingInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput"></a>

```java
public java.lang.String getBlockedInputMessagingInput();
```

- *Type:* java.lang.String

---

##### `blockedOutputsMessagingInput`<sup>Optional</sup> <a name="blockedOutputsMessagingInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput"></a>

```java
public java.lang.String getBlockedOutputsMessagingInput();
```

- *Type:* java.lang.String

---

##### `contentPolicyConfigInput`<sup>Optional</sup> <a name="contentPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput"></a>

```java
public java.lang.Object getContentPolicyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>>

---

##### `contextualGroundingPolicyConfigInput`<sup>Optional</sup> <a name="contextualGroundingPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```java
public java.lang.Object getContextualGroundingPolicyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sensitiveInformationPolicyConfigInput`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```java
public java.lang.Object getSensitiveInformationPolicyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

---

##### `topicPolicyConfigInput`<sup>Optional</sup> <a name="topicPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput"></a>

```java
public java.lang.Object getTopicPolicyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>>

---

##### `wordPolicyConfigInput`<sup>Optional</sup> <a name="wordPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput"></a>

```java
public java.lang.Object getWordPolicyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>>

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging"></a>

```java
public java.lang.String getBlockedInputMessaging();
```

- *Type:* java.lang.String

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging"></a>

```java
public java.lang.String getBlockedOutputsMessaging();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockGuardrailConfig <a name="BedrockGuardrailConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailConfig;

BedrockGuardrailConfig.builder()
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
    .blockedInputMessaging(java.lang.String)
    .blockedOutputsMessaging(java.lang.String)
    .name(java.lang.String)
//  .contentPolicyConfig(IResolvable)
//  .contentPolicyConfig(java.util.List<BedrockGuardrailContentPolicyConfig>)
//  .contextualGroundingPolicyConfig(IResolvable)
//  .contextualGroundingPolicyConfig(java.util.List<BedrockGuardrailContextualGroundingPolicyConfig>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .sensitiveInformationPolicyConfig(IResolvable)
//  .sensitiveInformationPolicyConfig(java.util.List<BedrockGuardrailSensitiveInformationPolicyConfig>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockGuardrailTimeouts)
//  .topicPolicyConfig(IResolvable)
//  .topicPolicyConfig(java.util.List<BedrockGuardrailTopicPolicyConfig>)
//  .wordPolicyConfig(IResolvable)
//  .wordPolicyConfig(java.util.List<BedrockGuardrailWordPolicyConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging">blockedInputMessaging</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging">blockedOutputsMessaging</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig">contentPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>></code> | content_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig">contextualGroundingPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>></code> | contextual_grounding_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig">sensitiveInformationPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>></code> | sensitive_information_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig">topicPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>></code> | topic_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig">wordPolicyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>></code> | word_policy_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockedInputMessaging`<sup>Required</sup> <a name="blockedInputMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging"></a>

```java
public java.lang.String getBlockedInputMessaging();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}.

---

##### `blockedOutputsMessaging`<sup>Required</sup> <a name="blockedOutputsMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging"></a>

```java
public java.lang.String getBlockedOutputsMessaging();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `contentPolicyConfig`<sup>Optional</sup> <a name="contentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig"></a>

```java
public java.lang.Object getContentPolicyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>>

content_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}

---

##### `contextualGroundingPolicyConfig`<sup>Optional</sup> <a name="contextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```java
public java.lang.Object getContextualGroundingPolicyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>>

contextual_grounding_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}.

---

##### `sensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="sensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```java
public java.lang.Object getSensitiveInformationPolicyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>>

sensitive_information_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.timeouts"></a>

```java
public BedrockGuardrailTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}

---

##### `topicPolicyConfig`<sup>Optional</sup> <a name="topicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig"></a>

```java
public java.lang.Object getTopicPolicyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>>

topic_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}

---

##### `wordPolicyConfig`<sup>Optional</sup> <a name="wordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig"></a>

```java
public java.lang.Object getWordPolicyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>>

word_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}

---

### BedrockGuardrailContentPolicyConfig <a name="BedrockGuardrailContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfig;

BedrockGuardrailContentPolicyConfig.builder()
//  .filtersConfig(IResolvable)
//  .filtersConfig(java.util.List<BedrockGuardrailContentPolicyConfigFiltersConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig">filtersConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>></code> | filters_config block. |

---

##### `filtersConfig`<sup>Optional</sup> <a name="filtersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig"></a>

```java
public java.lang.Object getFiltersConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>>

filters_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

### BedrockGuardrailContentPolicyConfigFiltersConfig <a name="BedrockGuardrailContentPolicyConfigFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfigFiltersConfig;

BedrockGuardrailContentPolicyConfigFiltersConfig.builder()
    .inputStrength(java.lang.String)
    .outputStrength(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">inputStrength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">outputStrength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `inputStrength`<sup>Required</sup> <a name="inputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```java
public java.lang.String getInputStrength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}.

---

##### `outputStrength`<sup>Required</sup> <a name="outputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```java
public java.lang.String getOutputStrength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailContextualGroundingPolicyConfig <a name="BedrockGuardrailContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfig;

BedrockGuardrailContextualGroundingPolicyConfig.builder()
//  .filtersConfig(IResolvable)
//  .filtersConfig(java.util.List<BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig">filtersConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | filters_config block. |

---

##### `filtersConfig`<sup>Optional</sup> <a name="filtersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```java
public java.lang.Object getFiltersConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

filters_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig;

BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.builder()
    .threshold(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailSensitiveInformationPolicyConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfig;

BedrockGuardrailSensitiveInformationPolicyConfig.builder()
//  .piiEntitiesConfig(IResolvable)
//  .piiEntitiesConfig(java.util.List<BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig>)
//  .regexesConfig(IResolvable)
//  .regexesConfig(java.util.List<BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | pii_entities_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">regexesConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | regexes_config block. |

---

##### `piiEntitiesConfig`<sup>Optional</sup> <a name="piiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```java
public java.lang.Object getPiiEntitiesConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

pii_entities_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}

---

##### `regexesConfig`<sup>Optional</sup> <a name="regexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```java
public java.lang.Object getRegexesConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

regexes_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}

---

### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig;

BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.builder()
    .action(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig;

BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .pattern(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}.

---

### BedrockGuardrailTimeouts <a name="BedrockGuardrailTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTimeouts;

BedrockGuardrailTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#create BedrockGuardrail#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#delete BedrockGuardrail#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#update BedrockGuardrail#update}

---

### BedrockGuardrailTopicPolicyConfig <a name="BedrockGuardrailTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfig;

BedrockGuardrailTopicPolicyConfig.builder()
//  .topicsConfig(IResolvable)
//  .topicsConfig(java.util.List<BedrockGuardrailTopicPolicyConfigTopicsConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig">topicsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>></code> | topics_config block. |

---

##### `topicsConfig`<sup>Optional</sup> <a name="topicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```java
public java.lang.Object getTopicsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>>

topics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}

---

### BedrockGuardrailTopicPolicyConfigTopicsConfig <a name="BedrockGuardrailTopicPolicyConfigTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig;

BedrockGuardrailTopicPolicyConfigTopicsConfig.builder()
    .definition(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .examples(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}.

---

### BedrockGuardrailWordPolicyConfig <a name="BedrockGuardrailWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfig;

BedrockGuardrailWordPolicyConfig.builder()
//  .managedWordListsConfig(IResolvable)
//  .managedWordListsConfig(java.util.List<BedrockGuardrailWordPolicyConfigManagedWordListsConfig>)
//  .wordsConfig(IResolvable)
//  .wordsConfig(java.util.List<BedrockGuardrailWordPolicyConfigWordsConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | managed_word_lists_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig">wordsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>></code> | words_config block. |

---

##### `managedWordListsConfig`<sup>Optional</sup> <a name="managedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```java
public java.lang.Object getManagedWordListsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>>

managed_word_lists_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}

---

##### `wordsConfig`<sup>Optional</sup> <a name="wordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig"></a>

```java
public java.lang.Object getWordsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>>

words_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}

---

### BedrockGuardrailWordPolicyConfigManagedWordListsConfig <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig;

BedrockGuardrailWordPolicyConfigManagedWordListsConfig.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailWordPolicyConfigWordsConfig <a name="BedrockGuardrailWordPolicyConfigWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigWordsConfig;

BedrockGuardrailWordPolicyConfigWordsConfig.builder()
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockGuardrailContentPolicyConfigFiltersConfigList <a name="BedrockGuardrailContentPolicyConfigFiltersConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList;

new BedrockGuardrailContentPolicyConfigFiltersConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```java
public BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>>

---


### BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference;

new BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">inputStrengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">outputStrengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">inputStrength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">outputStrength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputStrengthInput`<sup>Optional</sup> <a name="inputStrengthInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```java
public java.lang.String getInputStrengthInput();
```

- *Type:* java.lang.String

---

##### `outputStrengthInput`<sup>Optional</sup> <a name="outputStrengthInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```java
public java.lang.String getOutputStrengthInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `inputStrength`<sup>Required</sup> <a name="inputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```java
public java.lang.String getInputStrength();
```

- *Type:* java.lang.String

---

##### `outputStrength`<sup>Required</sup> <a name="outputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```java
public java.lang.String getOutputStrength();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>

---


### BedrockGuardrailContentPolicyConfigList <a name="BedrockGuardrailContentPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfigList;

new BedrockGuardrailContentPolicyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get"></a>

```java
public BedrockGuardrailContentPolicyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>>

---


### BedrockGuardrailContentPolicyConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContentPolicyConfigOutputReference;

new BedrockGuardrailContentPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig">putFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">resetFiltersConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiltersConfig` <a name="putFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```java
public void putFiltersConfig(IResolvable OR java.util.List<BedrockGuardrailContentPolicyConfigFiltersConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>>

---

##### `resetFiltersConfig` <a name="resetFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```java
public void resetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">filtersConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```java
public BedrockGuardrailContentPolicyConfigFiltersConfigList getFiltersConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `filtersConfigInput`<sup>Optional</sup> <a name="filtersConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```java
public java.lang.Object getFiltersConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig">BedrockGuardrailContentPolicyConfigFiltersConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList;

new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```java
public BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference;

new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### BedrockGuardrailContextualGroundingPolicyConfigList <a name="BedrockGuardrailContextualGroundingPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfigList;

new BedrockGuardrailContextualGroundingPolicyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get"></a>

```java
public BedrockGuardrailContextualGroundingPolicyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>>

---


### BedrockGuardrailContextualGroundingPolicyConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference;

new BedrockGuardrailContextualGroundingPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">putFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">resetFiltersConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiltersConfig` <a name="putFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```java
public void putFiltersConfig(IResolvable OR java.util.List<BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---

##### `resetFiltersConfig` <a name="resetFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```java
public void resetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filtersConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">filtersConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filtersConfig`<sup>Required</sup> <a name="filtersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```java
public BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList getFiltersConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `filtersConfigInput`<sup>Optional</sup> <a name="filtersConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```java
public java.lang.Object getFiltersConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>

---


### BedrockGuardrailSensitiveInformationPolicyConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigList;

new BedrockGuardrailSensitiveInformationPolicyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>>

---


### BedrockGuardrailSensitiveInformationPolicyConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference;

new BedrockGuardrailSensitiveInformationPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">putPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">putRegexesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">resetPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">resetRegexesConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPiiEntitiesConfig` <a name="putPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```java
public void putPiiEntitiesConfig(IResolvable OR java.util.List<BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---

##### `putRegexesConfig` <a name="putRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```java
public void putRegexesConfig(IResolvable OR java.util.List<BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---

##### `resetPiiEntitiesConfig` <a name="resetPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```java
public void resetPiiEntitiesConfig()
```

##### `resetRegexesConfig` <a name="resetRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```java
public void resetRegexesConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">piiEntitiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexesConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">piiEntitiesConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">regexesConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `piiEntitiesConfig`<sup>Required</sup> <a name="piiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList getPiiEntitiesConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexesConfig`<sup>Required</sup> <a name="regexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList getRegexesConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `piiEntitiesConfigInput`<sup>Optional</sup> <a name="piiEntitiesConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```java
public java.lang.Object getPiiEntitiesConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---

##### `regexesConfigInput`<sup>Optional</sup> <a name="regexesConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```java
public java.lang.Object getRegexesConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList;

new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>>

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference;

new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList;

new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```java
public BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>>

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference;

new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### BedrockGuardrailTimeoutsOutputReference <a name="BedrockGuardrailTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTimeoutsOutputReference;

new BedrockGuardrailTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

---


### BedrockGuardrailTopicPolicyConfigList <a name="BedrockGuardrailTopicPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfigList;

new BedrockGuardrailTopicPolicyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get"></a>

```java
public BedrockGuardrailTopicPolicyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>>

---


### BedrockGuardrailTopicPolicyConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfigOutputReference;

new BedrockGuardrailTopicPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">putTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">resetTopicsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopicsConfig` <a name="putTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```java
public void putTopicsConfig(IResolvable OR java.util.List<BedrockGuardrailTopicPolicyConfigTopicsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>>

---

##### `resetTopicsConfig` <a name="resetTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```java
public void resetTopicsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topicsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">topicsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicsConfig`<sup>Required</sup> <a name="topicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```java
public BedrockGuardrailTopicPolicyConfigTopicsConfigList getTopicsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `topicsConfigInput`<sup>Optional</sup> <a name="topicsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```java
public java.lang.Object getTopicsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigList <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList;

new BedrockGuardrailTopicPolicyConfigTopicsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```java
public BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>>

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference;

new BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">resetExamples</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExamples` <a name="resetExamples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```java
public void resetExamples()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">examplesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```java
public java.util.List<java.lang.String> getExamplesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig">BedrockGuardrailTopicPolicyConfigTopicsConfig</a>

---


### BedrockGuardrailWordPolicyConfigList <a name="BedrockGuardrailWordPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigList;

new BedrockGuardrailWordPolicyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get"></a>

```java
public BedrockGuardrailWordPolicyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>>

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigList <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList;

new BedrockGuardrailWordPolicyConfigManagedWordListsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```java
public BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference;

new BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### BedrockGuardrailWordPolicyConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigOutputReference;

new BedrockGuardrailWordPolicyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">putManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig">putWordsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">resetManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig">resetWordsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedWordListsConfig` <a name="putManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```java
public void putManagedWordListsConfig(IResolvable OR java.util.List<BedrockGuardrailWordPolicyConfigManagedWordListsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---

##### `putWordsConfig` <a name="putWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```java
public void putWordsConfig(IResolvable OR java.util.List<BedrockGuardrailWordPolicyConfigWordsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>>

---

##### `resetManagedWordListsConfig` <a name="resetManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```java
public void resetManagedWordListsConfig()
```

##### `resetWordsConfig` <a name="resetWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```java
public void resetWordsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managedWordListsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig">wordsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">managedWordListsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">wordsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedWordListsConfig`<sup>Required</sup> <a name="managedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```java
public BedrockGuardrailWordPolicyConfigManagedWordListsConfigList getManagedWordListsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `wordsConfig`<sup>Required</sup> <a name="wordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```java
public BedrockGuardrailWordPolicyConfigWordsConfigList getWordsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `managedWordListsConfigInput`<sup>Optional</sup> <a name="managedWordListsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```java
public java.lang.Object getManagedWordListsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig">BedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>>

---

##### `wordsConfigInput`<sup>Optional</sup> <a name="wordsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```java
public java.lang.Object getWordsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>

---


### BedrockGuardrailWordPolicyConfigWordsConfigList <a name="BedrockGuardrailWordPolicyConfigWordsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigWordsConfigList;

new BedrockGuardrailWordPolicyConfigWordsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get"></a>

```java
public BedrockGuardrailWordPolicyConfigWordsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>>

---


### BedrockGuardrailWordPolicyConfigWordsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_guardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference;

new BedrockGuardrailWordPolicyConfigWordsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig">BedrockGuardrailWordPolicyConfigWordsConfig</a>

---



