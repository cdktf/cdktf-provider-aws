# `lexBot` Submodule <a name="`lexBot` Submodule" id="@cdktf/provider-aws.lexBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBot <a name="LexBot" id="@cdktf/provider-aws.lexBot.LexBot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot aws_lex_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBot;

LexBot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .abortStatement(LexBotAbortStatement)
    .childDirected(java.lang.Boolean)
    .childDirected(IResolvable)
    .intent(IResolvable)
    .intent(java.util.List<LexBotIntent>)
    .name(java.lang.String)
//  .clarificationPrompt(LexBotClarificationPrompt)
//  .createVersion(java.lang.Boolean)
//  .createVersion(IResolvable)
//  .description(java.lang.String)
//  .detectSentiment(java.lang.Boolean)
//  .detectSentiment(IResolvable)
//  .enableModelImprovements(java.lang.Boolean)
//  .enableModelImprovements(IResolvable)
//  .id(java.lang.String)
//  .idleSessionTtlInSeconds(java.lang.Number)
//  .locale(java.lang.String)
//  .nluIntentConfidenceThreshold(java.lang.Number)
//  .processBehavior(java.lang.String)
//  .timeouts(LexBotTimeouts)
//  .voiceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.abortStatement">abortStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.childDirected">childDirected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.intent">intent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>></code> | intent block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.clarificationPrompt">clarificationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.detectSentiment">detectSentiment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.enableModelImprovements">enableModelImprovements</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.nluIntentConfidenceThreshold">nluIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.processBehavior">processBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.voiceId">voiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abortStatement`<sup>Required</sup> <a name="abortStatement" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.abortStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.childDirected"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}.

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.intent"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>>

intent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}.

---

##### `clarificationPrompt`<sup>Optional</sup> <a name="clarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.clarificationPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.createVersion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}.

---

##### `detectSentiment`<sup>Optional</sup> <a name="detectSentiment" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.detectSentiment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `enableModelImprovements`<sup>Optional</sup> <a name="enableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.enableModelImprovements"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}.

---

##### `nluIntentConfidenceThreshold`<sup>Optional</sup> <a name="nluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.nluIntentConfidenceThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `processBehavior`<sup>Optional</sup> <a name="processBehavior" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.processBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}

---

##### `voiceId`<sup>Optional</sup> <a name="voiceId" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.voiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putAbortStatement">putAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt">putClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt">resetClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment">resetDetectSentiment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements">resetEnableModelImprovements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds">resetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold">resetNluIntentConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior">resetProcessBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetVoiceId">resetVoiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexBot.LexBot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexBot.LexBot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexBot.LexBot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAbortStatement` <a name="putAbortStatement" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement"></a>

```java
public void putAbortStatement(LexBotAbortStatement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `putClarificationPrompt` <a name="putClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt"></a>

```java
public void putClarificationPrompt(LexBotClarificationPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `putIntent` <a name="putIntent" id="@cdktf/provider-aws.lexBot.LexBot.putIntent"></a>

```java
public void putIntent(IResolvable OR java.util.List<LexBotIntent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.putIntent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts"></a>

```java
public void putTimeouts(LexBotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

---

##### `resetClarificationPrompt` <a name="resetClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt"></a>

```java
public void resetClarificationPrompt()
```

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion"></a>

```java
public void resetCreateVersion()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexBot.LexBot.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDetectSentiment` <a name="resetDetectSentiment" id="@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment"></a>

```java
public void resetDetectSentiment()
```

##### `resetEnableModelImprovements` <a name="resetEnableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements"></a>

```java
public void resetEnableModelImprovements()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lexBot.LexBot.resetId"></a>

```java
public void resetId()
```

##### `resetIdleSessionTtlInSeconds` <a name="resetIdleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds"></a>

```java
public void resetIdleSessionTtlInSeconds()
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-aws.lexBot.LexBot.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetNluIntentConfidenceThreshold` <a name="resetNluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold"></a>

```java
public void resetNluIntentConfidenceThreshold()
```

##### `resetProcessBehavior` <a name="resetProcessBehavior" id="@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior"></a>

```java
public void resetProcessBehavior()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexBot.LexBot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVoiceId` <a name="resetVoiceId" id="@cdktf/provider-aws.lexBot.LexBot.resetVoiceId"></a>

```java
public void resetVoiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBot;

LexBot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBot;

LexBot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBot;

LexBot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatement">abortStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.checksum">checksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt">clarificationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput">abortStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput">childDirectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput">clarificationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput">createVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput">detectSentimentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput">enableModelImprovementsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intentInput">intentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput">nluIntentConfidenceThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput">processBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput">voiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirected">childDirected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment">detectSentiment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements">enableModelImprovements</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold">nluIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehavior">processBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceId">voiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexBot.LexBot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBot.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexBot.LexBot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexBot.LexBot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abortStatement`<sup>Required</sup> <a name="abortStatement" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatement"></a>

```java
public LexBotAbortStatementOutputReference getAbortStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexBot.LexBot.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexBot.LexBot.property.checksum"></a>

```java
public java.lang.String getChecksum();
```

- *Type:* java.lang.String

---

##### `clarificationPrompt`<sup>Required</sup> <a name="clarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt"></a>

```java
public LexBotClarificationPromptOutputReference getClarificationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.lexBot.LexBot.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-aws.lexBot.LexBot.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBot.property.intent"></a>

```java
public LexBotIntentList getIntent();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.lexBot.LexBot.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBot.property.timeouts"></a>

```java
public LexBotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexBot.LexBot.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `abortStatementInput`<sup>Optional</sup> <a name="abortStatementInput" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput"></a>

```java
public LexBotAbortStatement getAbortStatementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `childDirectedInput`<sup>Optional</sup> <a name="childDirectedInput" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput"></a>

```java
public java.lang.Object getChildDirectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clarificationPromptInput`<sup>Optional</sup> <a name="clarificationPromptInput" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput"></a>

```java
public LexBotClarificationPrompt getClarificationPromptInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput"></a>

```java
public java.lang.Object getCreateVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectSentimentInput`<sup>Optional</sup> <a name="detectSentimentInput" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput"></a>

```java
public java.lang.Object getDetectSentimentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableModelImprovementsInput`<sup>Optional</sup> <a name="enableModelImprovementsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput"></a>

```java
public java.lang.Object getEnableModelImprovementsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lexBot.LexBot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput"></a>

```java
public java.lang.Number getIdleSessionTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-aws.lexBot.LexBot.property.intentInput"></a>

```java
public java.lang.Object getIntentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>>

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-aws.lexBot.LexBot.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexBot.LexBot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nluIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="nluIntentConfidenceThresholdInput" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput"></a>

```java
public java.lang.Number getNluIntentConfidenceThresholdInput();
```

- *Type:* java.lang.Number

---

##### `processBehaviorInput`<sup>Optional</sup> <a name="processBehaviorInput" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput"></a>

```java
public java.lang.String getProcessBehaviorInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `voiceIdInput`<sup>Optional</sup> <a name="voiceIdInput" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput"></a>

```java
public java.lang.String getVoiceIdInput();
```

- *Type:* java.lang.String

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirected"></a>

```java
public java.lang.Object getChildDirected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersion"></a>

```java
public java.lang.Object getCreateVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectSentiment`<sup>Required</sup> <a name="detectSentiment" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment"></a>

```java
public java.lang.Object getDetectSentiment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableModelImprovements`<sup>Required</sup> <a name="enableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements"></a>

```java
public java.lang.Object getEnableModelImprovements();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBot.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nluIntentConfidenceThreshold`<sup>Required</sup> <a name="nluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold"></a>

```java
public java.lang.Number getNluIntentConfidenceThreshold();
```

- *Type:* java.lang.Number

---

##### `processBehavior`<sup>Required</sup> <a name="processBehavior" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehavior"></a>

```java
public java.lang.String getProcessBehavior();
```

- *Type:* java.lang.String

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceId"></a>

```java
public java.lang.String getVoiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAbortStatement <a name="LexBotAbortStatement" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotAbortStatement;

LexBotAbortStatement.builder()
    .message(IResolvable)
    .message(java.util.List<LexBotAbortStatementMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotAbortStatementMessage <a name="LexBotAbortStatementMessage" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotAbortStatementMessage;

LexBotAbortStatementMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotClarificationPrompt <a name="LexBotClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotClarificationPrompt;

LexBotClarificationPrompt.builder()
    .maxAttempts(java.lang.Number)
    .message(IResolvable)
    .message(java.util.List<LexBotClarificationPromptMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotClarificationPromptMessage <a name="LexBotClarificationPromptMessage" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotClarificationPromptMessage;

LexBotClarificationPromptMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotConfig <a name="LexBotConfig" id="@cdktf/provider-aws.lexBot.LexBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotConfig;

LexBotConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .abortStatement(LexBotAbortStatement)
    .childDirected(java.lang.Boolean)
    .childDirected(IResolvable)
    .intent(IResolvable)
    .intent(java.util.List<LexBotIntent>)
    .name(java.lang.String)
//  .clarificationPrompt(LexBotClarificationPrompt)
//  .createVersion(java.lang.Boolean)
//  .createVersion(IResolvable)
//  .description(java.lang.String)
//  .detectSentiment(java.lang.Boolean)
//  .detectSentiment(IResolvable)
//  .enableModelImprovements(java.lang.Boolean)
//  .enableModelImprovements(IResolvable)
//  .id(java.lang.String)
//  .idleSessionTtlInSeconds(java.lang.Number)
//  .locale(java.lang.String)
//  .nluIntentConfidenceThreshold(java.lang.Number)
//  .processBehavior(java.lang.String)
//  .timeouts(LexBotTimeouts)
//  .voiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement">abortStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected">childDirected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.intent">intent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>></code> | intent block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt">clarificationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment">detectSentiment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements">enableModelImprovements</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold">nluIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior">processBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId">voiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abortStatement`<sup>Required</sup> <a name="abortStatement" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement"></a>

```java
public LexBotAbortStatement getAbortStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected"></a>

```java
public java.lang.Object getChildDirected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}.

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.intent"></a>

```java
public java.lang.Object getIntent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>>

intent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}.

---

##### `clarificationPrompt`<sup>Optional</sup> <a name="clarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt"></a>

```java
public LexBotClarificationPrompt getClarificationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion"></a>

```java
public java.lang.Object getCreateVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}.

---

##### `detectSentiment`<sup>Optional</sup> <a name="detectSentiment" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment"></a>

```java
public java.lang.Object getDetectSentiment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `enableModelImprovements`<sup>Optional</sup> <a name="enableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements"></a>

```java
public java.lang.Object getEnableModelImprovements();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds"></a>

```java
public java.lang.Number getIdleSessionTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}.

---

##### `nluIntentConfidenceThreshold`<sup>Optional</sup> <a name="nluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold"></a>

```java
public java.lang.Number getNluIntentConfidenceThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `processBehavior`<sup>Optional</sup> <a name="processBehavior" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior"></a>

```java
public java.lang.String getProcessBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts"></a>

```java
public LexBotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}

---

##### `voiceId`<sup>Optional</sup> <a name="voiceId" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId"></a>

```java
public java.lang.String getVoiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}.

---

### LexBotIntent <a name="LexBotIntent" id="@cdktf/provider-aws.lexBot.LexBotIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotIntent;

LexBotIntent.builder()
    .intentName(java.lang.String)
    .intentVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName">intentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion">intentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}. |

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName"></a>

```java
public java.lang.String getIntentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}.

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion"></a>

```java
public java.lang.String getIntentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}.

---

### LexBotTimeouts <a name="LexBotTimeouts" id="@cdktf/provider-aws.lexBot.LexBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotTimeouts;

LexBotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAbortStatementMessageList <a name="LexBotAbortStatementMessageList" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotAbortStatementMessageList;

new LexBotAbortStatementMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get"></a>

```java
public LexBotAbortStatementMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>>

---


### LexBotAbortStatementMessageOutputReference <a name="LexBotAbortStatementMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotAbortStatementMessageOutputReference;

new LexBotAbortStatementMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexBotAbortStatementOutputReference <a name="LexBotAbortStatementOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotAbortStatementOutputReference;

new LexBotAbortStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexBotAbortStatementMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message"></a>

```java
public LexBotAbortStatementMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue"></a>

```java
public LexBotAbortStatement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---


### LexBotClarificationPromptMessageList <a name="LexBotClarificationPromptMessageList" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotClarificationPromptMessageList;

new LexBotClarificationPromptMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get"></a>

```java
public LexBotClarificationPromptMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>>

---


### LexBotClarificationPromptMessageOutputReference <a name="LexBotClarificationPromptMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotClarificationPromptMessageOutputReference;

new LexBotClarificationPromptMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexBotClarificationPromptOutputReference <a name="LexBotClarificationPromptOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotClarificationPromptOutputReference;

new LexBotClarificationPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexBotClarificationPromptMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message"></a>

```java
public LexBotClarificationPromptMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue"></a>

```java
public LexBotClarificationPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---


### LexBotIntentList <a name="LexBotIntentList" id="@cdktf/provider-aws.lexBot.LexBotIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotIntentList;

new LexBotIntentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotIntentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get"></a>

```java
public LexBotIntentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a>>

---


### LexBotIntentOutputReference <a name="LexBotIntentOutputReference" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotIntentOutputReference;

new LexBotIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput">intentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput">intentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName">intentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion">intentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intentNameInput`<sup>Optional</sup> <a name="intentNameInput" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput"></a>

```java
public java.lang.String getIntentNameInput();
```

- *Type:* java.lang.String

---

##### `intentVersionInput`<sup>Optional</sup> <a name="intentVersionInput" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput"></a>

```java
public java.lang.String getIntentVersionInput();
```

- *Type:* java.lang.String

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName"></a>

```java
public java.lang.String getIntentName();
```

- *Type:* java.lang.String

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion"></a>

```java
public java.lang.String getIntentVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotIntent">LexBotIntent</a> OR com.hashicorp.cdktf.IResolvable

---


### LexBotTimeoutsOutputReference <a name="LexBotTimeoutsOutputReference" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_bot.LexBotTimeoutsOutputReference;

new LexBotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



