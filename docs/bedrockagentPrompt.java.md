# `bedrockagentPrompt` Submodule <a name="`bedrockagentPrompt` Submodule" id="@cdktf/provider-aws.bedrockagentPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentPrompt <a name="BedrockagentPrompt" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt aws_bedrockagent_prompt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPrompt;

BedrockagentPrompt.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .defaultVariant(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .variant(IResolvable)
//  .variant(java.util.List<BedrockagentPromptVariant>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#customer_encryption_key_arn BedrockagentPrompt#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#default_variant BedrockagentPrompt#default_variant}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tags BedrockagentPrompt#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.variant">variant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>></code> | variant block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#customer_encryption_key_arn BedrockagentPrompt#customer_encryption_key_arn}.

---

##### `defaultVariant`<sup>Optional</sup> <a name="defaultVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.defaultVariant"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#default_variant BedrockagentPrompt#default_variant}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tags BedrockagentPrompt#tags}.

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.Initializer.parameter.variant"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>>

variant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#variant BedrockagentPrompt#variant}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.putVariant">putVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetDefaultVariant">resetDefaultVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetVariant">resetVariant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVariant` <a name="putVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.putVariant"></a>

```java
public void putVariant(IResolvable OR java.util.List<BedrockagentPromptVariant> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.putVariant.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>>

---

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetCustomerEncryptionKeyArn"></a>

```java
public void resetCustomerEncryptionKeyArn()
```

##### `resetDefaultVariant` <a name="resetDefaultVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetDefaultVariant"></a>

```java
public void resetDefaultVariant()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetTags"></a>

```java
public void resetTags()
```

##### `resetVariant` <a name="resetVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.resetVariant"></a>

```java
public void resetVariant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentPrompt resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPrompt;

BedrockagentPrompt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPrompt;

BedrockagentPrompt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPrompt;

BedrockagentPrompt.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPrompt;

BedrockagentPrompt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentPrompt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentPrompt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList">BedrockagentPromptVariantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.defaultVariantInput">defaultVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.variantInput">variantInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.variant"></a>

```java
public BedrockagentPromptVariantList getVariant();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList">BedrockagentPromptVariantList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.customerEncryptionKeyArnInput"></a>

```java
public java.lang.String getCustomerEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `defaultVariantInput`<sup>Optional</sup> <a name="defaultVariantInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.defaultVariantInput"></a>

```java
public java.lang.String getDefaultVariantInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variantInput`<sup>Optional</sup> <a name="variantInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.variantInput"></a>

```java
public java.lang.Object getVariantInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>>

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `defaultVariant`<sup>Required</sup> <a name="defaultVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.defaultVariant"></a>

```java
public java.lang.String getDefaultVariant();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPrompt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentPromptConfig <a name="BedrockagentPromptConfig" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptConfig;

BedrockagentPromptConfig.builder()
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
    .name(java.lang.String)
//  .customerEncryptionKeyArn(java.lang.String)
//  .defaultVariant(java.lang.String)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .variant(IResolvable)
//  .variant(java.util.List<BedrockagentPromptVariant>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#customer_encryption_key_arn BedrockagentPrompt#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.defaultVariant">defaultVariant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#default_variant BedrockagentPrompt#default_variant}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tags BedrockagentPrompt#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.variant">variant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>></code> | variant block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#customer_encryption_key_arn BedrockagentPrompt#customer_encryption_key_arn}.

---

##### `defaultVariant`<sup>Optional</sup> <a name="defaultVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.defaultVariant"></a>

```java
public java.lang.String getDefaultVariant();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#default_variant BedrockagentPrompt#default_variant}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tags BedrockagentPrompt#tags}.

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptConfig.property.variant"></a>

```java
public java.lang.Object getVariant();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>>

variant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#variant BedrockagentPrompt#variant}

---

### BedrockagentPromptVariant <a name="BedrockagentPromptVariant" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariant;

BedrockagentPromptVariant.builder()
    .name(java.lang.String)
    .templateType(java.lang.String)
//  .additionalModelRequestFields(java.lang.String)
//  .genAiResource(IResolvable)
//  .genAiResource(java.util.List<BedrockagentPromptVariantGenAiResource>)
//  .inferenceConfiguration(IResolvable)
//  .inferenceConfiguration(java.util.List<BedrockagentPromptVariantInferenceConfiguration>)
//  .metadata(IResolvable)
//  .metadata(java.util.List<BedrockagentPromptVariantMetadata>)
//  .modelId(java.lang.String)
//  .templateConfiguration(IResolvable)
//  .templateConfiguration(java.util.List<BedrockagentPromptVariantTemplateConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.templateType">templateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#template_type BedrockagentPrompt#template_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#additional_model_request_fields BedrockagentPrompt#additional_model_request_fields}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.genAiResource">genAiResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>></code> | gen_ai_resource block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>></code> | inference_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#model_id BedrockagentPrompt#model_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.templateConfiguration">templateConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>></code> | template_configuration block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#template_type BedrockagentPrompt#template_type}.

---

##### `additionalModelRequestFields`<sup>Optional</sup> <a name="additionalModelRequestFields" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#additional_model_request_fields BedrockagentPrompt#additional_model_request_fields}.

---

##### `genAiResource`<sup>Optional</sup> <a name="genAiResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.genAiResource"></a>

```java
public java.lang.Object getGenAiResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>>

gen_ai_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#gen_ai_resource BedrockagentPrompt#gen_ai_resource}

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.inferenceConfiguration"></a>

```java
public java.lang.Object getInferenceConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>>

inference_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#inference_configuration BedrockagentPrompt#inference_configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#metadata BedrockagentPrompt#metadata}

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#model_id BedrockagentPrompt#model_id}.

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant.property.templateConfiguration"></a>

```java
public java.lang.Object getTemplateConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>>

template_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#template_configuration BedrockagentPrompt#template_configuration}

---

### BedrockagentPromptVariantGenAiResource <a name="BedrockagentPromptVariantGenAiResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResource;

BedrockagentPromptVariantGenAiResource.builder()
//  .agent(IResolvable)
//  .agent(java.util.List<BedrockagentPromptVariantGenAiResourceAgent>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource.property.agent">agent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>></code> | agent block. |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource.property.agent"></a>

```java
public java.lang.Object getAgent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>>

agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#agent BedrockagentPrompt#agent}

---

### BedrockagentPromptVariantGenAiResourceAgent <a name="BedrockagentPromptVariantGenAiResourceAgent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResourceAgent;

BedrockagentPromptVariantGenAiResourceAgent.builder()
    .agentIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent.property.agentIdentifier">agentIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#agent_identifier BedrockagentPrompt#agent_identifier}. |

---

##### `agentIdentifier`<sup>Required</sup> <a name="agentIdentifier" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent.property.agentIdentifier"></a>

```java
public java.lang.String getAgentIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#agent_identifier BedrockagentPrompt#agent_identifier}.

---

### BedrockagentPromptVariantInferenceConfiguration <a name="BedrockagentPromptVariantInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfiguration;

BedrockagentPromptVariantInferenceConfiguration.builder()
//  .text(IResolvable)
//  .text(java.util.List<BedrockagentPromptVariantInferenceConfigurationText>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration.property.text">text</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration.property.text"></a>

```java
public java.lang.Object getText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}

---

### BedrockagentPromptVariantInferenceConfigurationText <a name="BedrockagentPromptVariantInferenceConfigurationText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfigurationText;

BedrockagentPromptVariantInferenceConfigurationText.builder()
//  .maxTokens(java.lang.Number)
//  .stopSequences(java.util.List<java.lang.String>)
//  .temperature(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#max_tokens BedrockagentPrompt#max_tokens}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#stop_sequences BedrockagentPrompt#stop_sequences}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#temperature BedrockagentPrompt#temperature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.topP">topP</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#top_p BedrockagentPrompt#top_p}. |

---

##### `maxTokens`<sup>Optional</sup> <a name="maxTokens" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#max_tokens BedrockagentPrompt#max_tokens}.

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#stop_sequences BedrockagentPrompt#stop_sequences}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#temperature BedrockagentPrompt#temperature}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#top_p BedrockagentPrompt#top_p}.

---

### BedrockagentPromptVariantMetadata <a name="BedrockagentPromptVariantMetadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantMetadata;

BedrockagentPromptVariantMetadata.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#key BedrockagentPrompt#key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#value BedrockagentPrompt#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#key BedrockagentPrompt#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#value BedrockagentPrompt#value}.

---

### BedrockagentPromptVariantTemplateConfiguration <a name="BedrockagentPromptVariantTemplateConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfiguration;

BedrockagentPromptVariantTemplateConfiguration.builder()
//  .chat(IResolvable)
//  .chat(java.util.List<BedrockagentPromptVariantTemplateConfigurationChat>)
//  .text(IResolvable)
//  .text(java.util.List<BedrockagentPromptVariantTemplateConfigurationText>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration.property.chat">chat</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>></code> | chat block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration.property.text">text</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>></code> | text block. |

---

##### `chat`<sup>Optional</sup> <a name="chat" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration.property.chat"></a>

```java
public java.lang.Object getChat();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>>

chat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#chat BedrockagentPrompt#chat}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration.property.text"></a>

```java
public java.lang.Object getText();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}

---

### BedrockagentPromptVariantTemplateConfigurationChat <a name="BedrockagentPromptVariantTemplateConfigurationChat" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChat;

BedrockagentPromptVariantTemplateConfigurationChat.builder()
//  .inputVariable(IResolvable)
//  .inputVariable(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatInputVariable>)
//  .message(IResolvable)
//  .message(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessage>)
//  .systemAttribute(IResolvable)
//  .systemAttribute(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatSystem>)
//  .toolConfiguration(IResolvable)
//  .toolConfiguration(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.inputVariable">inputVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>></code> | input_variable block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.message">message</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>></code> | message block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.systemAttribute">systemAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>></code> | system block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.toolConfiguration">toolConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>></code> | tool_configuration block. |

---

##### `inputVariable`<sup>Optional</sup> <a name="inputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.inputVariable"></a>

```java
public java.lang.Object getInputVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>>

input_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#input_variable BedrockagentPrompt#input_variable}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>>

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#message BedrockagentPrompt#message}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.systemAttribute"></a>

```java
public java.lang.Object getSystemAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>>

system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#system BedrockagentPrompt#system}

---

##### `toolConfiguration`<sup>Optional</sup> <a name="toolConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat.property.toolConfiguration"></a>

```java
public java.lang.Object getToolConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>>

tool_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tool_configuration BedrockagentPrompt#tool_configuration}

---

### BedrockagentPromptVariantTemplateConfigurationChatInputVariable <a name="BedrockagentPromptVariantTemplateConfigurationChatInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable;

BedrockagentPromptVariantTemplateConfigurationChatInputVariable.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

### BedrockagentPromptVariantTemplateConfigurationChatMessage <a name="BedrockagentPromptVariantTemplateConfigurationChatMessage" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessage;

BedrockagentPromptVariantTemplateConfigurationChatMessage.builder()
    .role(java.lang.String)
//  .content(IResolvable)
//  .content(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessageContent>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#role BedrockagentPrompt#role}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage.property.content">content</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>></code> | content block. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#role BedrockagentPrompt#role}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage.property.content"></a>

```java
public java.lang.Object getContent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#content BedrockagentPrompt#content}

---

### BedrockagentPromptVariantTemplateConfigurationChatMessageContent <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent;

BedrockagentPromptVariantTemplateConfigurationChatMessageContent.builder()
//  .cachePoint(IResolvable)
//  .cachePoint(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint>)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent.property.cachePoint">cachePoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>></code> | cache_point block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent.property.cachePoint"></a>

```java
public java.lang.Object getCachePoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>>

cache_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}.

---

### BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint;

BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}.

---

### BedrockagentPromptVariantTemplateConfigurationChatSystem <a name="BedrockagentPromptVariantTemplateConfigurationChatSystem" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystem;

BedrockagentPromptVariantTemplateConfigurationChatSystem.builder()
//  .cachePoint(IResolvable)
//  .cachePoint(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint>)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem.property.cachePoint">cachePoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>></code> | cache_point block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem.property.cachePoint"></a>

```java
public java.lang.Object getCachePoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>>

cache_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}.

---

### BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint <a name="BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint;

BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}.

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration;

BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.builder()
//  .tool(IResolvable)
//  .tool(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool>)
//  .toolChoice(IResolvable)
//  .toolChoice(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.property.tool">tool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>></code> | tool block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.property.toolChoice">toolChoice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>></code> | tool_choice block. |

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.property.tool"></a>

```java
public java.lang.Object getTool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tool BedrockagentPrompt#tool}

---

##### `toolChoice`<sup>Optional</sup> <a name="toolChoice" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration.property.toolChoice"></a>

```java
public java.lang.Object getToolChoice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>>

tool_choice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tool_choice BedrockagentPrompt#tool_choice}

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.builder()
//  .cachePoint(IResolvable)
//  .cachePoint(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint>)
//  .toolSpec(IResolvable)
//  .toolSpec(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.property.cachePoint">cachePoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>></code> | cache_point block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.property.toolSpec">toolSpec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>></code> | tool_spec block. |

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.property.cachePoint"></a>

```java
public java.lang.Object getCachePoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>>

cache_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}

---

##### `toolSpec`<sup>Optional</sup> <a name="toolSpec" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool.property.toolSpec"></a>

```java
public java.lang.Object getToolSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>>

tool_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tool_spec BedrockagentPrompt#tool_spec}

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}.

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.builder()
//  .any(IResolvable)
//  .any(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny>)
//  .auto(IResolvable)
//  .auto(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto>)
//  .tool(IResolvable)
//  .tool(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.any">any</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>></code> | any block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.auto">auto</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>></code> | auto block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.tool">tool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>></code> | tool block. |

---

##### `any`<sup>Optional</sup> <a name="any" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.any"></a>

```java
public java.lang.Object getAny();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>>

any block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#any BedrockagentPrompt#any}

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.auto"></a>

```java
public java.lang.Object getAuto();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#auto BedrockagentPrompt#auto}

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice.property.tool"></a>

```java
public java.lang.Object getTool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#tool BedrockagentPrompt#tool}

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny.builder()
    .build();
```


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto.builder()
    .build();
```


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .inputSchema(IResolvable)
//  .inputSchema(java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.inputSchema">inputSchema</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>></code> | input_schema block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}.

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec.property.inputSchema"></a>

```java
public java.lang.Object getInputSchema();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>>

input_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#input_schema BedrockagentPrompt#input_schema}

---

### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema;

BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema.builder()
//  .json(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema.property.json">json</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#json BedrockagentPrompt#json}. |

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#json BedrockagentPrompt#json}.

---

### BedrockagentPromptVariantTemplateConfigurationText <a name="BedrockagentPromptVariantTemplateConfigurationText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationText;

BedrockagentPromptVariantTemplateConfigurationText.builder()
    .text(java.lang.String)
//  .cachePoint(IResolvable)
//  .cachePoint(java.util.List<BedrockagentPromptVariantTemplateConfigurationTextCachePoint>)
//  .inputVariable(IResolvable)
//  .inputVariable(java.util.List<BedrockagentPromptVariantTemplateConfigurationTextInputVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.cachePoint">cachePoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>></code> | cache_point block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.inputVariable">inputVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>></code> | input_variable block. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}.

---

##### `cachePoint`<sup>Optional</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.cachePoint"></a>

```java
public java.lang.Object getCachePoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>>

cache_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}

---

##### `inputVariable`<sup>Optional</sup> <a name="inputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText.property.inputVariable"></a>

```java
public java.lang.Object getInputVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>>

input_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#input_variable BedrockagentPrompt#input_variable}

---

### BedrockagentPromptVariantTemplateConfigurationTextCachePoint <a name="BedrockagentPromptVariantTemplateConfigurationTextCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint;

BedrockagentPromptVariantTemplateConfigurationTextCachePoint.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}.

---

### BedrockagentPromptVariantTemplateConfigurationTextInputVariable <a name="BedrockagentPromptVariantTemplateConfigurationTextInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable;

BedrockagentPromptVariantTemplateConfigurationTextInputVariable.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentPromptVariantGenAiResourceAgentList <a name="BedrockagentPromptVariantGenAiResourceAgentList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResourceAgentList;

new BedrockagentPromptVariantGenAiResourceAgentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.get"></a>

```java
public BedrockagentPromptVariantGenAiResourceAgentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>>

---


### BedrockagentPromptVariantGenAiResourceAgentOutputReference <a name="BedrockagentPromptVariantGenAiResourceAgentOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference;

new BedrockagentPromptVariantGenAiResourceAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.agentIdentifierInput">agentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.agentIdentifier">agentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentIdentifierInput`<sup>Optional</sup> <a name="agentIdentifierInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.agentIdentifierInput"></a>

```java
public java.lang.String getAgentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `agentIdentifier`<sup>Required</sup> <a name="agentIdentifier" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```java
public java.lang.String getAgentIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>

---


### BedrockagentPromptVariantGenAiResourceList <a name="BedrockagentPromptVariantGenAiResourceList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResourceList;

new BedrockagentPromptVariantGenAiResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.get"></a>

```java
public BedrockagentPromptVariantGenAiResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>>

---


### BedrockagentPromptVariantGenAiResourceOutputReference <a name="BedrockagentPromptVariantGenAiResourceOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantGenAiResourceOutputReference;

new BedrockagentPromptVariantGenAiResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.putAgent">putAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.resetAgent">resetAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgent` <a name="putAgent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.putAgent"></a>

```java
public void putAgent(IResolvable OR java.util.List<BedrockagentPromptVariantGenAiResourceAgent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.putAgent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>>

---

##### `resetAgent` <a name="resetAgent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.resetAgent"></a>

```java
public void resetAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList">BedrockagentPromptVariantGenAiResourceAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.agentInput">agentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.agent"></a>

```java
public BedrockagentPromptVariantGenAiResourceAgentList getAgent();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgentList">BedrockagentPromptVariantGenAiResourceAgentList</a>

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.agentInput"></a>

```java
public java.lang.Object getAgentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceAgent">BedrockagentPromptVariantGenAiResourceAgent</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>

---


### BedrockagentPromptVariantInferenceConfigurationList <a name="BedrockagentPromptVariantInferenceConfigurationList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfigurationList;

new BedrockagentPromptVariantInferenceConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.get"></a>

```java
public BedrockagentPromptVariantInferenceConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>>

---


### BedrockagentPromptVariantInferenceConfigurationOutputReference <a name="BedrockagentPromptVariantInferenceConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfigurationOutputReference;

new BedrockagentPromptVariantInferenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.putText"></a>

```java
public void putText(IResolvable OR java.util.List<BedrockagentPromptVariantInferenceConfigurationText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList">BedrockagentPromptVariantInferenceConfigurationTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.textInput">textInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.text"></a>

```java
public BedrockagentPromptVariantInferenceConfigurationTextList getText();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList">BedrockagentPromptVariantInferenceConfigurationTextList</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.textInput"></a>

```java
public java.lang.Object getTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>

---


### BedrockagentPromptVariantInferenceConfigurationTextList <a name="BedrockagentPromptVariantInferenceConfigurationTextList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfigurationTextList;

new BedrockagentPromptVariantInferenceConfigurationTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.get"></a>

```java
public BedrockagentPromptVariantInferenceConfigurationTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>>

---


### BedrockagentPromptVariantInferenceConfigurationTextOutputReference <a name="BedrockagentPromptVariantInferenceConfigurationTextOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference;

new BedrockagentPromptVariantInferenceConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetMaxTokens">resetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTokens` <a name="resetMaxTokens" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetMaxTokens"></a>

```java
public void resetMaxTokens()
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetStopSequences"></a>

```java
public void resetStopSequences()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopP` <a name="resetTopP" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.maxTokensInput">maxTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokensInput`<sup>Optional</sup> <a name="maxTokensInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.maxTokensInput"></a>

```java
public java.lang.Number getMaxTokensInput();
```

- *Type:* java.lang.Number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.stopSequencesInput"></a>

```java
public java.util.List<java.lang.String> getStopSequencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationText">BedrockagentPromptVariantInferenceConfigurationText</a>

---


### BedrockagentPromptVariantList <a name="BedrockagentPromptVariantList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantList;

new BedrockagentPromptVariantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.get"></a>

```java
public BedrockagentPromptVariantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>>

---


### BedrockagentPromptVariantMetadataList <a name="BedrockagentPromptVariantMetadataList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantMetadataList;

new BedrockagentPromptVariantMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.get"></a>

```java
public BedrockagentPromptVariantMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>>

---


### BedrockagentPromptVariantMetadataOutputReference <a name="BedrockagentPromptVariantMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantMetadataOutputReference;

new BedrockagentPromptVariantMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>

---


### BedrockagentPromptVariantOutputReference <a name="BedrockagentPromptVariantOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantOutputReference;

new BedrockagentPromptVariantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putGenAiResource">putGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetAdditionalModelRequestFields">resetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetGenAiResource">resetGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenAiResource` <a name="putGenAiResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putGenAiResource"></a>

```java
public void putGenAiResource(IResolvable OR java.util.List<BedrockagentPromptVariantGenAiResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putGenAiResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>>

---

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putInferenceConfiguration"></a>

```java
public void putInferenceConfiguration(IResolvable OR java.util.List<BedrockagentPromptVariantInferenceConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putMetadata"></a>

```java
public void putMetadata(IResolvable OR java.util.List<BedrockagentPromptVariantMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putMetadata.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>>

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putTemplateConfiguration"></a>

```java
public void putTemplateConfiguration(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>>

---

##### `resetAdditionalModelRequestFields` <a name="resetAdditionalModelRequestFields" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetAdditionalModelRequestFields"></a>

```java
public void resetAdditionalModelRequestFields()
```

##### `resetGenAiResource` <a name="resetGenAiResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetGenAiResource"></a>

```java
public void resetGenAiResource()
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetInferenceConfiguration"></a>

```java
public void resetInferenceConfiguration()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetModelId` <a name="resetModelId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetModelId"></a>

```java
public void resetModelId()
```

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.resetTemplateConfiguration"></a>

```java
public void resetTemplateConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.genAiResource">genAiResource</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList">BedrockagentPromptVariantGenAiResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList">BedrockagentPromptVariantInferenceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList">BedrockagentPromptVariantMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList">BedrockagentPromptVariantTemplateConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.additionalModelRequestFieldsInput">additionalModelRequestFieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.genAiResourceInput">genAiResourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.metadataInput">metadataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateTypeInput">templateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.additionalModelRequestFields">additionalModelRequestFields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `genAiResource`<sup>Required</sup> <a name="genAiResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.genAiResource"></a>

```java
public BedrockagentPromptVariantGenAiResourceList getGenAiResource();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResourceList">BedrockagentPromptVariantGenAiResourceList</a>

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.inferenceConfiguration"></a>

```java
public BedrockagentPromptVariantInferenceConfigurationList getInferenceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfigurationList">BedrockagentPromptVariantInferenceConfigurationList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.metadata"></a>

```java
public BedrockagentPromptVariantMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadataList">BedrockagentPromptVariantMetadataList</a>

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateConfiguration"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationList getTemplateConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList">BedrockagentPromptVariantTemplateConfigurationList</a>

---

##### `additionalModelRequestFieldsInput`<sup>Optional</sup> <a name="additionalModelRequestFieldsInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.additionalModelRequestFieldsInput"></a>

```java
public java.lang.String getAdditionalModelRequestFieldsInput();
```

- *Type:* java.lang.String

---

##### `genAiResourceInput`<sup>Optional</sup> <a name="genAiResourceInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.genAiResourceInput"></a>

```java
public java.lang.Object getGenAiResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantGenAiResource">BedrockagentPromptVariantGenAiResource</a>>

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.inferenceConfigurationInput"></a>

```java
public java.lang.Object getInferenceConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantInferenceConfiguration">BedrockagentPromptVariantInferenceConfiguration</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantMetadata">BedrockagentPromptVariantMetadata</a>>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateConfigurationInput"></a>

```java
public java.lang.Object getTemplateConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>>

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateTypeInput"></a>

```java
public java.lang.String getTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `additionalModelRequestFields`<sup>Required</sup> <a name="additionalModelRequestFields" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.additionalModelRequestFields"></a>

```java
public java.lang.String getAdditionalModelRequestFields();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariant">BedrockagentPromptVariant</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatInputVariableList <a name="BedrockagentPromptVariantTemplateConfigurationChatInputVariableList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList;

new BedrockagentPromptVariantTemplateConfigurationChatInputVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatList <a name="BedrockagentPromptVariantTemplateConfigurationChatList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatList;

new BedrockagentPromptVariantTemplateConfigurationChatList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList;

new BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageContentList <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContentList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList;

new BedrockagentPromptVariantTemplateConfigurationChatMessageContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.putCachePoint"></a>

```java
public void putCachePoint(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.putCachePoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.cachePoint"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList getCachePoint();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.cachePointInput"></a>

```java
public java.lang.Object getCachePointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint">BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint</a>>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageList <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList;

new BedrockagentPromptVariantTemplateConfigurationChatMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.putContent"></a>

```java
public void putContent(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessageContent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.putContent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.content">content</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList">BedrockagentPromptVariantTemplateConfigurationChatMessageContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.contentInput">contentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.content"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageContentList getContent();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContentList">BedrockagentPromptVariantTemplateConfigurationChatMessageContentList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.contentInput"></a>

```java
public java.lang.Object getContentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageContent">BedrockagentPromptVariantTemplateConfigurationChatMessageContent</a>>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putInputVariable">putInputVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putSystemAttribute">putSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putToolConfiguration">putToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetInputVariable">resetInputVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetToolConfiguration">resetToolConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariable` <a name="putInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putInputVariable"></a>

```java
public void putInputVariable(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatInputVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putInputVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>>

---

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putMessage"></a>

```java
public void putMessage(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>>

---

##### `putSystemAttribute` <a name="putSystemAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putSystemAttribute"></a>

```java
public void putSystemAttribute(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatSystem> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putSystemAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>>

---

##### `putToolConfiguration` <a name="putToolConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putToolConfiguration"></a>

```java
public void putToolConfiguration(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>>

---

##### `resetInputVariable` <a name="resetInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetInputVariable"></a>

```java
public void resetInputVariable()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetSystemAttribute"></a>

```java
public void resetSystemAttribute()
```

##### `resetToolConfiguration` <a name="resetToolConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.resetToolConfiguration"></a>

```java
public void resetToolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.inputVariable">inputVariable</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList">BedrockagentPromptVariantTemplateConfigurationChatInputVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList">BedrockagentPromptVariantTemplateConfigurationChatMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.systemAttribute">systemAttribute</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList">BedrockagentPromptVariantTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.toolConfiguration">toolConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.messageInput">messageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.toolConfigurationInput">toolConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.inputVariable"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatInputVariableList getInputVariable();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariableList">BedrockagentPromptVariantTemplateConfigurationChatInputVariableList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.message"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatMessageList getMessage();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessageList">BedrockagentPromptVariantTemplateConfigurationChatMessageList</a>

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatSystemList getSystemAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList">BedrockagentPromptVariantTemplateConfigurationChatSystemList</a>

---

##### `toolConfiguration`<sup>Required</sup> <a name="toolConfiguration" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList getToolConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList</a>

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.inputVariableInput"></a>

```java
public java.lang.Object getInputVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatInputVariable">BedrockagentPromptVariantTemplateConfigurationChatInputVariable</a>>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatMessage">BedrockagentPromptVariantTemplateConfigurationChatMessage</a>>

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.systemAttributeInput"></a>

```java
public java.lang.Object getSystemAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>>

---

##### `toolConfigurationInput`<sup>Optional</sup> <a name="toolConfigurationInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.toolConfigurationInput"></a>

```java
public java.lang.Object getToolConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList <a name="BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList;

new BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatSystemList <a name="BedrockagentPromptVariantTemplateConfigurationChatSystemList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList;

new BedrockagentPromptVariantTemplateConfigurationChatSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.putCachePoint"></a>

```java
public void putCachePoint(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.putCachePoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList getCachePoint();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.cachePointInput"></a>

```java
public java.lang.Object getCachePointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint">BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint</a>>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatSystem">BedrockagentPromptVariantTemplateConfigurationChatSystem</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice">putToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice">resetToolChoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTool` <a name="putTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putTool"></a>

```java
public void putTool(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putTool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>>

---

##### `putToolChoice` <a name="putToolChoice" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice"></a>

```java
public void putToolChoice(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>>

---

##### `resetTool` <a name="resetTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resetTool"></a>

```java
public void resetTool()
```

##### `resetToolChoice` <a name="resetToolChoice" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice"></a>

```java
public void resetToolChoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">toolChoice</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput">toolChoiceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolInput">toolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.tool"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList getTool();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList</a>

---

##### `toolChoice`<sup>Required</sup> <a name="toolChoice" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList getToolChoice();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList</a>

---

##### `toolChoiceInput`<sup>Optional</sup> <a name="toolChoiceInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput"></a>

```java
public java.lang.Object getToolChoiceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>>

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.toolInput"></a>

```java
public java.lang.Object getToolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration">BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAny">putAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAuto">putAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny">resetAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto">resetAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool">resetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAny` <a name="putAny" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAny"></a>

```java
public void putAny(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAny.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>>

---

##### `putAuto` <a name="putAuto" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAuto"></a>

```java
public void putAuto(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putAuto.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>>

---

##### `putTool` <a name="putTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool"></a>

```java
public void putTool(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>>

---

##### `resetAny` <a name="resetAny" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny"></a>

```java
public void resetAny()
```

##### `resetAuto` <a name="resetAuto" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto"></a>

```java
public void resetAuto()
```

##### `resetTool` <a name="resetTool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool"></a>

```java
public void resetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput">anyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput">autoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput">toolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList getAny();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList</a>

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList getAuto();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList</a>

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList getTool();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList</a>

---

##### `anyInput`<sup>Optional</sup> <a name="anyInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput"></a>

```java
public java.lang.Object getAnyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny</a>>

---

##### `autoInput`<sup>Optional</sup> <a name="autoInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput"></a>

```java
public java.lang.Object getAutoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto</a>>

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput"></a>

```java
public java.lang.Object getToolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putToolSpec">putToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resetToolSpec">resetToolSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putCachePoint"></a>

```java
public void putCachePoint(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putCachePoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>>

---

##### `putToolSpec` <a name="putToolSpec" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putToolSpec"></a>

```java
public void putToolSpec(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.putToolSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetToolSpec` <a name="resetToolSpec" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.resetToolSpec"></a>

```java
public void resetToolSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.toolSpec">toolSpec</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.toolSpecInput">toolSpecInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.cachePoint"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList getCachePoint();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList</a>

---

##### `toolSpec`<sup>Required</sup> <a name="toolSpec" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.toolSpec"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList getToolSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.cachePointInput"></a>

```java
public java.lang.Object getCachePointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint</a>>

---

##### `toolSpecInput`<sup>Optional</sup> <a name="toolSpecInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.toolSpecInput"></a>

```java
public java.lang.Object getToolSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJson` <a name="resetJson" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.resetJson"></a>

```java
public void resetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.jsonInput">jsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.jsonInput"></a>

```java
public java.lang.String getJsonInput();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>>

---


### BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference;

new BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.putInputSchema">putInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputSchema` <a name="putInputSchema" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.putInputSchema"></a>

```java
public void putInputSchema(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.putInputSchema.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.resetInputSchema"></a>

```java
public void resetInputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.inputSchema"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList getInputSchema();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.inputSchemaInput"></a>

```java
public java.lang.Object getInputSchemaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec">BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec</a>

---


### BedrockagentPromptVariantTemplateConfigurationList <a name="BedrockagentPromptVariantTemplateConfigurationList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationList;

new BedrockagentPromptVariantTemplateConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>>

---


### BedrockagentPromptVariantTemplateConfigurationOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationOutputReference;

new BedrockagentPromptVariantTemplateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putChat">putChat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resetChat">resetChat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChat` <a name="putChat" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putChat"></a>

```java
public void putChat(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationChat> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putChat.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>>

---

##### `putText` <a name="putText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putText"></a>

```java
public void putText(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationText> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>>

---

##### `resetChat` <a name="resetChat" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resetChat"></a>

```java
public void resetChat()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList">BedrockagentPromptVariantTemplateConfigurationChatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList">BedrockagentPromptVariantTemplateConfigurationTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.chatInput">chatInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.textInput">textInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.chat"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationChatList getChat();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChatList">BedrockagentPromptVariantTemplateConfigurationChatList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.text"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextList getText();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList">BedrockagentPromptVariantTemplateConfigurationTextList</a>

---

##### `chatInput`<sup>Optional</sup> <a name="chatInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.chatInput"></a>

```java
public java.lang.Object getChatInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationChat">BedrockagentPromptVariantTemplateConfigurationChat</a>>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.textInput"></a>

```java
public java.lang.Object getTextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfiguration">BedrockagentPromptVariantTemplateConfiguration</a>

---


### BedrockagentPromptVariantTemplateConfigurationTextCachePointList <a name="BedrockagentPromptVariantTemplateConfigurationTextCachePointList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList;

new BedrockagentPromptVariantTemplateConfigurationTextCachePointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>>

---


### BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference;

new BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>

---


### BedrockagentPromptVariantTemplateConfigurationTextInputVariableList <a name="BedrockagentPromptVariantTemplateConfigurationTextInputVariableList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList;

new BedrockagentPromptVariantTemplateConfigurationTextInputVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>>

---


### BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference;

new BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>

---


### BedrockagentPromptVariantTemplateConfigurationTextList <a name="BedrockagentPromptVariantTemplateConfigurationTextList" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextList;

new BedrockagentPromptVariantTemplateConfigurationTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.get"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>>

---


### BedrockagentPromptVariantTemplateConfigurationTextOutputReference <a name="BedrockagentPromptVariantTemplateConfigurationTextOutputReference" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_prompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference;

new BedrockagentPromptVariantTemplateConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putCachePoint">putCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putInputVariable">putInputVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resetCachePoint">resetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resetInputVariable">resetInputVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCachePoint` <a name="putCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putCachePoint"></a>

```java
public void putCachePoint(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationTextCachePoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putCachePoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>>

---

##### `putInputVariable` <a name="putInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putInputVariable"></a>

```java
public void putInputVariable(IResolvable OR java.util.List<BedrockagentPromptVariantTemplateConfigurationTextInputVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.putInputVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>>

---

##### `resetCachePoint` <a name="resetCachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resetCachePoint"></a>

```java
public void resetCachePoint()
```

##### `resetInputVariable` <a name="resetInputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.resetInputVariable"></a>

```java
public void resetInputVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.cachePoint">cachePoint</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList">BedrockagentPromptVariantTemplateConfigurationTextCachePointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.inputVariable">inputVariable</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList">BedrockagentPromptVariantTemplateConfigurationTextInputVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.cachePointInput">cachePointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachePoint`<sup>Required</sup> <a name="cachePoint" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextCachePointList getCachePoint();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePointList">BedrockagentPromptVariantTemplateConfigurationTextCachePointList</a>

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.inputVariable"></a>

```java
public BedrockagentPromptVariantTemplateConfigurationTextInputVariableList getInputVariable();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariableList">BedrockagentPromptVariantTemplateConfigurationTextInputVariableList</a>

---

##### `cachePointInput`<sup>Optional</sup> <a name="cachePointInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.cachePointInput"></a>

```java
public java.lang.Object getCachePointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextCachePoint">BedrockagentPromptVariantTemplateConfigurationTextCachePoint</a>>

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.inputVariableInput"></a>

```java
public java.lang.Object getInputVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextInputVariable">BedrockagentPromptVariantTemplateConfigurationTextInputVariable</a>>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationTextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentPrompt.BedrockagentPromptVariantTemplateConfigurationText">BedrockagentPromptVariantTemplateConfigurationText</a>

---



