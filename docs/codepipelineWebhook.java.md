# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktf/provider-aws.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook aws_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhook;

CodepipelineWebhook.Builder.create(Construct scope, java.lang.String id)
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
    .authentication(java.lang.String)
    .filter(IResolvable)
    .filter(java.util.List<CodepipelineWebhookFilter>)
    .name(java.lang.String)
    .targetAction(java.lang.String)
    .targetPipeline(java.lang.String)
//  .authenticationConfiguration(CodepipelineWebhookAuthenticationConfiguration)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication">authentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction">targetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline">targetPipeline</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#filter CodepipelineWebhook#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}.

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(CodepipelineWebhookAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<CodepipelineWebhookFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>>

---

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhook;

CodepipelineWebhook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhook;

CodepipelineWebhook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhook;

CodepipelineWebhook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">authenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">targetActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">targetPipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authentication">authentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetAction">targetAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">targetPipeline</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```java
public CodepipelineWebhookAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filter"></a>

```java
public CodepipelineWebhookFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```java
public CodepipelineWebhookAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```java
public java.lang.String getAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```java
public java.lang.String getTargetActionInput();
```

- *Type:* java.lang.String

---

##### `targetPipelineInput`<sup>Optional</sup> <a name="targetPipelineInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```java
public java.lang.String getTargetPipelineInput();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```java
public java.lang.String getTargetAction();
```

- *Type:* java.lang.String

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```java
public java.lang.String getTargetPipeline();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookAuthenticationConfiguration;

CodepipelineWebhookAuthenticationConfiguration.builder()
//  .allowedIpRange(java.lang.String)
//  .secretToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">allowedIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">secretToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```java
public java.lang.String getAllowedIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}.

---

##### `secretToken`<sup>Optional</sup> <a name="secretToken" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```java
public java.lang.String getSecretToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}.

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookConfig;

CodepipelineWebhookConfig.builder()
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
    .authentication(java.lang.String)
    .filter(IResolvable)
    .filter(java.util.List<CodepipelineWebhookFilter>)
    .name(java.lang.String)
    .targetAction(java.lang.String)
    .targetPipeline(java.lang.String)
//  .authenticationConfiguration(CodepipelineWebhookAuthenticationConfiguration)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">authentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">targetAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">targetPipeline</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#filter CodepipelineWebhook#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```java
public java.lang.String getTargetAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}.

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```java
public java.lang.String getTargetPipeline();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```java
public CodepipelineWebhookAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}.

---

### CodepipelineWebhookFilter <a name="CodepipelineWebhookFilter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookFilter;

CodepipelineWebhookFilter.builder()
    .jsonPath(java.lang.String)
    .matchEquals(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#json_path CodepipelineWebhook#json_path}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals">matchEquals</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#json_path CodepipelineWebhook#json_path}.

---

##### `matchEquals`<sup>Required</sup> <a name="matchEquals" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals"></a>

```java
public java.lang.String getMatchEquals();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookAuthenticationConfigurationOutputReference;

new CodepipelineWebhookAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">resetSecretToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```java
public void resetAllowedIpRange()
```

##### `resetSecretToken` <a name="resetSecretToken" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```java
public void resetSecretToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">secretTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">secretToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```java
public java.lang.String getAllowedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `secretTokenInput`<sup>Optional</sup> <a name="secretTokenInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```java
public java.lang.String getSecretTokenInput();
```

- *Type:* java.lang.String

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```java
public java.lang.String getAllowedIpRange();
```

- *Type:* java.lang.String

---

##### `secretToken`<sup>Required</sup> <a name="secretToken" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```java
public java.lang.String getSecretToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public CodepipelineWebhookAuthenticationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFilterList <a name="CodepipelineWebhookFilterList" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookFilterList;

new CodepipelineWebhookFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get"></a>

```java
public CodepipelineWebhookFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>>

---


### CodepipelineWebhookFilterOutputReference <a name="CodepipelineWebhookFilterOutputReference" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline_webhook.CodepipelineWebhookFilterOutputReference;

new CodepipelineWebhookFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput">matchEqualsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals">matchEquals</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput"></a>

```java
public java.lang.String getJsonPathInput();
```

- *Type:* java.lang.String

---

##### `matchEqualsInput`<sup>Optional</sup> <a name="matchEqualsInput" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput"></a>

```java
public java.lang.String getMatchEqualsInput();
```

- *Type:* java.lang.String

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

---

##### `matchEquals`<sup>Required</sup> <a name="matchEquals" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals"></a>

```java
public java.lang.String getMatchEquals();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a> OR com.hashicorp.cdktf.IResolvable

---



