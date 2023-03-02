# `lexIntent` Submodule <a name="`lexIntent` Submodule" id="@cdktf/provider-aws.lexIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexIntent <a name="LexIntent" id="@cdktf/provider-aws.lexIntent.LexIntent"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntent;

LexIntent.Builder.create(Construct scope, java.lang.String id)
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
    .fulfillmentActivity(LexIntentFulfillmentActivity)
    .name(java.lang.String)
//  .conclusionStatement(LexIntentConclusionStatement)
//  .confirmationPrompt(LexIntentConfirmationPrompt)
//  .createVersion(java.lang.Boolean)
//  .createVersion(IResolvable)
//  .description(java.lang.String)
//  .dialogCodeHook(LexIntentDialogCodeHook)
//  .followUpPrompt(LexIntentFollowUpPrompt)
//  .id(java.lang.String)
//  .parentIntentSignature(java.lang.String)
//  .rejectionStatement(LexIntentRejectionStatement)
//  .sampleUtterances(java.util.List<java.lang.String>)
//  .slot(IResolvable)
//  .slot(java.util.List<LexIntentSlot>)
//  .timeouts(LexIntentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.parentIntentSignature">parentIntentSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.sampleUtterances">sampleUtterances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.slot">slot</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>></code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.fulfillmentActivity"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `conclusionStatement`<sup>Optional</sup> <a name="conclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.conclusionStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmationPrompt`<sup>Optional</sup> <a name="confirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.confirmationPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.createVersion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `dialogCodeHook`<sup>Optional</sup> <a name="dialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.dialogCodeHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `followUpPrompt`<sup>Optional</sup> <a name="followUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.followUpPrompt"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentIntentSignature`<sup>Optional</sup> <a name="parentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.parentIntentSignature"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejectionStatement`<sup>Optional</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.rejectionStatement"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.sampleUtterances"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.slot"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>>

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement">putConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt">putConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook">putDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt">putFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity">putFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putSlot">putSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement">resetConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt">resetConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook">resetDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt">resetFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature">resetParentIntentSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement">resetRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSlot">resetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexIntent.LexIntent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConclusionStatement` <a name="putConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement"></a>

```java
public void putConclusionStatement(LexIntentConclusionStatement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `putConfirmationPrompt` <a name="putConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt"></a>

```java
public void putConfirmationPrompt(LexIntentConfirmationPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `putDialogCodeHook` <a name="putDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook"></a>

```java
public void putDialogCodeHook(LexIntentDialogCodeHook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `putFollowUpPrompt` <a name="putFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt"></a>

```java
public void putFollowUpPrompt(LexIntentFollowUpPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `putFulfillmentActivity` <a name="putFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity"></a>

```java
public void putFulfillmentActivity(LexIntentFulfillmentActivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement"></a>

```java
public void putRejectionStatement(LexIntentRejectionStatement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `putSlot` <a name="putSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot"></a>

```java
public void putSlot(IResolvable OR java.util.List<LexIntentSlot> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts"></a>

```java
public void putTimeouts(LexIntentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

---

##### `resetConclusionStatement` <a name="resetConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement"></a>

```java
public void resetConclusionStatement()
```

##### `resetConfirmationPrompt` <a name="resetConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt"></a>

```java
public void resetConfirmationPrompt()
```

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion"></a>

```java
public void resetCreateVersion()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDialogCodeHook` <a name="resetDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook"></a>

```java
public void resetDialogCodeHook()
```

##### `resetFollowUpPrompt` <a name="resetFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt"></a>

```java
public void resetFollowUpPrompt()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetId"></a>

```java
public void resetId()
```

##### `resetParentIntentSignature` <a name="resetParentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature"></a>

```java
public void resetParentIntentSignature()
```

##### `resetRejectionStatement` <a name="resetRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement"></a>

```java
public void resetRejectionStatement()
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances"></a>

```java
public void resetSampleUtterances()
```

##### `resetSlot` <a name="resetSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSlot"></a>

```java
public void resetSlot()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntent;

LexIntent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntent;

LexIntent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntent;

LexIntent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.checksum">checksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slot">slot</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput">conclusionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput">confirmationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput">createVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput">dialogCodeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput">followUpPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput">fulfillmentActivityInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput">parentIntentSignatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput">slotInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature">parentIntentSignature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances">sampleUtterances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexIntent.LexIntent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntent.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexIntent.LexIntent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexIntent.LexIntent.property.checksum"></a>

```java
public java.lang.String getChecksum();
```

- *Type:* java.lang.String

---

##### `conclusionStatement`<sup>Required</sup> <a name="conclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement"></a>

```java
public LexIntentConclusionStatementOutputReference getConclusionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a>

---

##### `confirmationPrompt`<sup>Required</sup> <a name="confirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt"></a>

```java
public LexIntentConfirmationPromptOutputReference getConfirmationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `dialogCodeHook`<sup>Required</sup> <a name="dialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook"></a>

```java
public LexIntentDialogCodeHookOutputReference getDialogCodeHook();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a>

---

##### `followUpPrompt`<sup>Required</sup> <a name="followUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt"></a>

```java
public LexIntentFollowUpPromptOutputReference getFollowUpPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a>

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity"></a>

```java
public LexIntentFulfillmentActivityOutputReference getFulfillmentActivity();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement"></a>

```java
public LexIntentRejectionStatementOutputReference getRejectionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a>

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slot"></a>

```java
public LexIntentSlotList getSlot();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts"></a>

```java
public LexIntentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexIntent.LexIntent.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `conclusionStatementInput`<sup>Optional</sup> <a name="conclusionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput"></a>

```java
public LexIntentConclusionStatement getConclusionStatementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `confirmationPromptInput`<sup>Optional</sup> <a name="confirmationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput"></a>

```java
public LexIntentConfirmationPrompt getConfirmationPromptInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput"></a>

```java
public java.lang.Object getCreateVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dialogCodeHookInput`<sup>Optional</sup> <a name="dialogCodeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput"></a>

```java
public LexIntentDialogCodeHook getDialogCodeHookInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `followUpPromptInput`<sup>Optional</sup> <a name="followUpPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput"></a>

```java
public LexIntentFollowUpPrompt getFollowUpPromptInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `fulfillmentActivityInput`<sup>Optional</sup> <a name="fulfillmentActivityInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput"></a>

```java
public LexIntentFulfillmentActivity getFulfillmentActivityInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentIntentSignatureInput`<sup>Optional</sup> <a name="parentIntentSignatureInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput"></a>

```java
public java.lang.String getParentIntentSignatureInput();
```

- *Type:* java.lang.String

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput"></a>

```java
public LexIntentRejectionStatement getRejectionStatementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput"></a>

```java
public java.util.List<java.lang.String> getSampleUtterancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slotInput`<sup>Optional</sup> <a name="slotInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput"></a>

```java
public java.lang.Object getSlotInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion"></a>

```java
public java.lang.Object getCreateVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentIntentSignature`<sup>Required</sup> <a name="parentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature"></a>

```java
public java.lang.String getParentIntentSignature();
```

- *Type:* java.lang.String

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances"></a>

```java
public java.util.List<java.lang.String> getSampleUtterances();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LexIntentConclusionStatement <a name="LexIntentConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConclusionStatement;

LexIntentConclusionStatement.builder()
    .message(IResolvable)
    .message(java.util.List<LexIntentConclusionStatementMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConclusionStatementMessage <a name="LexIntentConclusionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConclusionStatementMessage;

LexIntentConclusionStatementMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentConfig <a name="LexIntentConfig" id="@cdktf/provider-aws.lexIntent.LexIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfig;

LexIntentConfig.builder()
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
    .fulfillmentActivity(LexIntentFulfillmentActivity)
    .name(java.lang.String)
//  .conclusionStatement(LexIntentConclusionStatement)
//  .confirmationPrompt(LexIntentConfirmationPrompt)
//  .createVersion(java.lang.Boolean)
//  .createVersion(IResolvable)
//  .description(java.lang.String)
//  .dialogCodeHook(LexIntentDialogCodeHook)
//  .followUpPrompt(LexIntentFollowUpPrompt)
//  .id(java.lang.String)
//  .parentIntentSignature(java.lang.String)
//  .rejectionStatement(LexIntentRejectionStatement)
//  .sampleUtterances(java.util.List<java.lang.String>)
//  .slot(IResolvable)
//  .slot(java.util.List<LexIntentSlot>)
//  .timeouts(LexIntentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion">createVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature">parentIntentSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances">sampleUtterances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot">slot</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>></code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity"></a>

```java
public LexIntentFulfillmentActivity getFulfillmentActivity();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `conclusionStatement`<sup>Optional</sup> <a name="conclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement"></a>

```java
public LexIntentConclusionStatement getConclusionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmationPrompt`<sup>Optional</sup> <a name="confirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt"></a>

```java
public LexIntentConfirmationPrompt getConfirmationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion"></a>

```java
public java.lang.Object getCreateVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `dialogCodeHook`<sup>Optional</sup> <a name="dialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook"></a>

```java
public LexIntentDialogCodeHook getDialogCodeHook();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `followUpPrompt`<sup>Optional</sup> <a name="followUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt"></a>

```java
public LexIntentFollowUpPrompt getFollowUpPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentIntentSignature`<sup>Optional</sup> <a name="parentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature"></a>

```java
public java.lang.String getParentIntentSignature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejectionStatement`<sup>Optional</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement"></a>

```java
public LexIntentRejectionStatement getRejectionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances"></a>

```java
public java.util.List<java.lang.String> getSampleUtterances();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot"></a>

```java
public java.lang.Object getSlot();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>>

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts"></a>

```java
public LexIntentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

### LexIntentConfirmationPrompt <a name="LexIntentConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfirmationPrompt;

LexIntentConfirmationPrompt.builder()
    .maxAttempts(java.lang.Number)
    .message(IResolvable)
    .message(java.util.List<LexIntentConfirmationPromptMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConfirmationPromptMessage <a name="LexIntentConfirmationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfirmationPromptMessage;

LexIntentConfirmationPromptMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentDialogCodeHook <a name="LexIntentDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentDialogCodeHook;

LexIntentDialogCodeHook.builder()
    .messageVersion(java.lang.String)
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion">messageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion"></a>

```java
public java.lang.String getMessageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentFollowUpPrompt <a name="LexIntentFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPrompt;

LexIntentFollowUpPrompt.builder()
    .prompt(LexIntentFollowUpPromptPrompt)
    .rejectionStatement(LexIntentFollowUpPromptRejectionStatement)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | rejection_statement block. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt"></a>

```java
public LexIntentFollowUpPromptPrompt getPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement"></a>

```java
public LexIntentFollowUpPromptRejectionStatement getRejectionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

### LexIntentFollowUpPromptPrompt <a name="LexIntentFollowUpPromptPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptPrompt;

LexIntentFollowUpPromptPrompt.builder()
    .maxAttempts(java.lang.Number)
    .message(IResolvable)
    .message(java.util.List<LexIntentFollowUpPromptPromptMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptPromptMessage <a name="LexIntentFollowUpPromptPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptPromptMessage;

LexIntentFollowUpPromptPromptMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFollowUpPromptRejectionStatement <a name="LexIntentFollowUpPromptRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptRejectionStatement;

LexIntentFollowUpPromptRejectionStatement.builder()
    .message(IResolvable)
    .message(java.util.List<LexIntentFollowUpPromptRejectionStatementMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptRejectionStatementMessage <a name="LexIntentFollowUpPromptRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptRejectionStatementMessage;

LexIntentFollowUpPromptRejectionStatementMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFulfillmentActivity <a name="LexIntentFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFulfillmentActivity;

LexIntentFulfillmentActivity.builder()
    .type(java.lang.String)
//  .codeHook(LexIntentFulfillmentActivityCodeHook)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | code_hook block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}.

---

##### `codeHook`<sup>Optional</sup> <a name="codeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook"></a>

```java
public LexIntentFulfillmentActivityCodeHook getCodeHook();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}

---

### LexIntentFulfillmentActivityCodeHook <a name="LexIntentFulfillmentActivityCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFulfillmentActivityCodeHook;

LexIntentFulfillmentActivityCodeHook.builder()
    .messageVersion(java.lang.String)
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion">messageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion"></a>

```java
public java.lang.String getMessageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentRejectionStatement <a name="LexIntentRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentRejectionStatement;

LexIntentRejectionStatement.builder()
    .message(IResolvable)
    .message(java.util.List<LexIntentRejectionStatementMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentRejectionStatementMessage <a name="LexIntentRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentRejectionStatementMessage;

LexIntentRejectionStatementMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentSlot <a name="LexIntentSlot" id="@cdktf/provider-aws.lexIntent.LexIntentSlot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlot;

LexIntentSlot.builder()
    .name(java.lang.String)
    .slotConstraint(java.lang.String)
    .slotType(java.lang.String)
//  .description(java.lang.String)
//  .priority(java.lang.Number)
//  .responseCard(java.lang.String)
//  .sampleUtterances(java.util.List<java.lang.String>)
//  .slotTypeVersion(java.lang.String)
//  .valueElicitationPrompt(LexIntentSlotValueElicitationPrompt)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint">slotConstraint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType">slotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances">sampleUtterances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion">slotTypeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | value_elicitation_prompt block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint"></a>

```java
public java.lang.String getSlotConstraint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}.

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType"></a>

```java
public java.lang.String getSlotType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}.

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances"></a>

```java
public java.util.List<java.lang.String> getSampleUtterances();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slotTypeVersion`<sup>Optional</sup> <a name="slotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion"></a>

```java
public java.lang.String getSlotTypeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}.

---

##### `valueElicitationPrompt`<sup>Optional</sup> <a name="valueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt"></a>

```java
public LexIntentSlotValueElicitationPrompt getValueElicitationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

value_elicitation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}

---

### LexIntentSlotValueElicitationPrompt <a name="LexIntentSlotValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotValueElicitationPrompt;

LexIntentSlotValueElicitationPrompt.builder()
    .maxAttempts(java.lang.Number)
    .message(IResolvable)
    .message(java.util.List<LexIntentSlotValueElicitationPromptMessage>)
//  .responseCard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>>

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentSlotValueElicitationPromptMessage <a name="LexIntentSlotValueElicitationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotValueElicitationPromptMessage;

LexIntentSlotValueElicitationPromptMessage.builder()
    .content(java.lang.String)
    .contentType(java.lang.String)
//  .groupNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentTimeouts <a name="LexIntentTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentTimeouts;

LexIntentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexIntentConclusionStatementMessageList <a name="LexIntentConclusionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConclusionStatementMessageList;

new LexIntentConclusionStatementMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get"></a>

```java
public LexIntentConclusionStatementMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>>

---


### LexIntentConclusionStatementMessageOutputReference <a name="LexIntentConclusionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConclusionStatementMessageOutputReference;

new LexIntentConclusionStatementMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentConclusionStatementOutputReference <a name="LexIntentConclusionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConclusionStatementOutputReference;

new LexIntentConclusionStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentConclusionStatementMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message"></a>

```java
public LexIntentConclusionStatementMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue"></a>

```java
public LexIntentConclusionStatement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---


### LexIntentConfirmationPromptMessageList <a name="LexIntentConfirmationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfirmationPromptMessageList;

new LexIntentConfirmationPromptMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get"></a>

```java
public LexIntentConfirmationPromptMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>>

---


### LexIntentConfirmationPromptMessageOutputReference <a name="LexIntentConfirmationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfirmationPromptMessageOutputReference;

new LexIntentConfirmationPromptMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentConfirmationPromptOutputReference <a name="LexIntentConfirmationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentConfirmationPromptOutputReference;

new LexIntentConfirmationPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentConfirmationPromptMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message"></a>

```java
public LexIntentConfirmationPromptMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue"></a>

```java
public LexIntentConfirmationPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---


### LexIntentDialogCodeHookOutputReference <a name="LexIntentDialogCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentDialogCodeHookOutputReference;

new LexIntentDialogCodeHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput"></a>

```java
public java.lang.String getMessageVersionInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion"></a>

```java
public java.lang.String getMessageVersion();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue"></a>

```java
public LexIntentDialogCodeHook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---


### LexIntentFollowUpPromptOutputReference <a name="LexIntentFollowUpPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptOutputReference;

new LexIntentFollowUpPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrompt` <a name="putPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt"></a>

```java
public void putPrompt(LexIntentFollowUpPromptPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement"></a>

```java
public void putRejectionStatement(LexIntentFollowUpPromptRejectionStatement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt"></a>

```java
public LexIntentFollowUpPromptPromptOutputReference getPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a>

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement"></a>

```java
public LexIntentFollowUpPromptRejectionStatementOutputReference getRejectionStatement();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput"></a>

```java
public LexIntentFollowUpPromptPrompt getPromptInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput"></a>

```java
public LexIntentFollowUpPromptRejectionStatement getRejectionStatementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue"></a>

```java
public LexIntentFollowUpPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---


### LexIntentFollowUpPromptPromptMessageList <a name="LexIntentFollowUpPromptPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptPromptMessageList;

new LexIntentFollowUpPromptPromptMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get"></a>

```java
public LexIntentFollowUpPromptPromptMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>>

---


### LexIntentFollowUpPromptPromptMessageOutputReference <a name="LexIntentFollowUpPromptPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptPromptMessageOutputReference;

new LexIntentFollowUpPromptPromptMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentFollowUpPromptPromptOutputReference <a name="LexIntentFollowUpPromptPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptPromptOutputReference;

new LexIntentFollowUpPromptPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentFollowUpPromptPromptMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message"></a>

```java
public LexIntentFollowUpPromptPromptMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue"></a>

```java
public LexIntentFollowUpPromptPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---


### LexIntentFollowUpPromptRejectionStatementMessageList <a name="LexIntentFollowUpPromptRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptRejectionStatementMessageList;

new LexIntentFollowUpPromptRejectionStatementMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get"></a>

```java
public LexIntentFollowUpPromptRejectionStatementMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>>

---


### LexIntentFollowUpPromptRejectionStatementMessageOutputReference <a name="LexIntentFollowUpPromptRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference;

new LexIntentFollowUpPromptRejectionStatementMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentFollowUpPromptRejectionStatementOutputReference <a name="LexIntentFollowUpPromptRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFollowUpPromptRejectionStatementOutputReference;

new LexIntentFollowUpPromptRejectionStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentFollowUpPromptRejectionStatementMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message"></a>

```java
public LexIntentFollowUpPromptRejectionStatementMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue"></a>

```java
public LexIntentFollowUpPromptRejectionStatement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


### LexIntentFulfillmentActivityCodeHookOutputReference <a name="LexIntentFulfillmentActivityCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFulfillmentActivityCodeHookOutputReference;

new LexIntentFulfillmentActivityCodeHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput"></a>

```java
public java.lang.String getMessageVersionInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion"></a>

```java
public java.lang.String getMessageVersion();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue"></a>

```java
public LexIntentFulfillmentActivityCodeHook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---


### LexIntentFulfillmentActivityOutputReference <a name="LexIntentFulfillmentActivityOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentFulfillmentActivityOutputReference;

new LexIntentFulfillmentActivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook">putCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook">resetCodeHook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeHook` <a name="putCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook"></a>

```java
public void putCodeHook(LexIntentFulfillmentActivityCodeHook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `resetCodeHook` <a name="resetCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook"></a>

```java
public void resetCodeHook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput">codeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeHook`<sup>Required</sup> <a name="codeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook"></a>

```java
public LexIntentFulfillmentActivityCodeHookOutputReference getCodeHook();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a>

---

##### `codeHookInput`<sup>Optional</sup> <a name="codeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput"></a>

```java
public LexIntentFulfillmentActivityCodeHook getCodeHookInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue"></a>

```java
public LexIntentFulfillmentActivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---


### LexIntentRejectionStatementMessageList <a name="LexIntentRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentRejectionStatementMessageList;

new LexIntentRejectionStatementMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get"></a>

```java
public LexIntentRejectionStatementMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>>

---


### LexIntentRejectionStatementMessageOutputReference <a name="LexIntentRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentRejectionStatementMessageOutputReference;

new LexIntentRejectionStatementMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentRejectionStatementOutputReference <a name="LexIntentRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentRejectionStatementOutputReference;

new LexIntentRejectionStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentRejectionStatementMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message"></a>

```java
public LexIntentRejectionStatementMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue"></a>

```java
public LexIntentRejectionStatement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---


### LexIntentSlotList <a name="LexIntentSlotList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotList;

new LexIntentSlotList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get"></a>

```java
public LexIntentSlotOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>>

---


### LexIntentSlotOutputReference <a name="LexIntentSlotOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotOutputReference;

new LexIntentSlotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt">putValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion">resetSlotTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt">resetValueElicitationPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueElicitationPrompt` <a name="putValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt"></a>

```java
public void putValueElicitationPrompt(LexIntentSlotValueElicitationPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances"></a>

```java
public void resetSampleUtterances()
```

##### `resetSlotTypeVersion` <a name="resetSlotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion"></a>

```java
public void resetSlotTypeVersion()
```

##### `resetValueElicitationPrompt` <a name="resetValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt"></a>

```java
public void resetValueElicitationPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput">slotConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput">slotTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput">slotTypeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput">valueElicitationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances">sampleUtterances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint">slotConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType">slotType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion">slotTypeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueElicitationPrompt`<sup>Required</sup> <a name="valueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt"></a>

```java
public LexIntentSlotValueElicitationPromptOutputReference getValueElicitationPrompt();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput"></a>

```java
public java.util.List<java.lang.String> getSampleUtterancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slotConstraintInput`<sup>Optional</sup> <a name="slotConstraintInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput"></a>

```java
public java.lang.String getSlotConstraintInput();
```

- *Type:* java.lang.String

---

##### `slotTypeInput`<sup>Optional</sup> <a name="slotTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput"></a>

```java
public java.lang.String getSlotTypeInput();
```

- *Type:* java.lang.String

---

##### `slotTypeVersionInput`<sup>Optional</sup> <a name="slotTypeVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput"></a>

```java
public java.lang.String getSlotTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `valueElicitationPromptInput`<sup>Optional</sup> <a name="valueElicitationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput"></a>

```java
public LexIntentSlotValueElicitationPrompt getValueElicitationPromptInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances"></a>

```java
public java.util.List<java.lang.String> getSampleUtterances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint"></a>

```java
public java.lang.String getSlotConstraint();
```

- *Type:* java.lang.String

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType"></a>

```java
public java.lang.String getSlotType();
```

- *Type:* java.lang.String

---

##### `slotTypeVersion`<sup>Required</sup> <a name="slotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion"></a>

```java
public java.lang.String getSlotTypeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptMessageList <a name="LexIntentSlotValueElicitationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotValueElicitationPromptMessageList;

new LexIntentSlotValueElicitationPromptMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get"></a>

```java
public LexIntentSlotValueElicitationPromptMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>>

---


### LexIntentSlotValueElicitationPromptMessageOutputReference <a name="LexIntentSlotValueElicitationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotValueElicitationPromptMessageOutputReference;

new LexIntentSlotValueElicitationPromptMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber"></a>

```java
public void resetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput"></a>

```java
public java.lang.Number getGroupNumberInput();
```

- *Type:* java.lang.Number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber"></a>

```java
public java.lang.Number getGroupNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptOutputReference <a name="LexIntentSlotValueElicitationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentSlotValueElicitationPromptOutputReference;

new LexIntentSlotValueElicitationPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<LexIntentSlotValueElicitationPromptMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>>

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard"></a>

```java
public void resetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message"></a>

```java
public LexIntentSlotValueElicitationPromptMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>>

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput"></a>

```java
public java.lang.String getResponseCardInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard"></a>

```java
public java.lang.String getResponseCard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue"></a>

```java
public LexIntentSlotValueElicitationPrompt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---


### LexIntentTimeoutsOutputReference <a name="LexIntentTimeoutsOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lex_intent.LexIntentTimeoutsOutputReference;

new LexIntentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



