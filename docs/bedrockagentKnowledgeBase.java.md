# `bedrockagentKnowledgeBase` Submodule <a name="`bedrockagentKnowledgeBase` Submodule" id="@cdktf/provider-aws.bedrockagentKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentKnowledgeBase <a name="BedrockagentKnowledgeBase" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBase;

BedrockagentKnowledgeBase.Builder.create(Construct scope, java.lang.String id)
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
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .knowledgeBaseConfiguration(IResolvable)
//  .knowledgeBaseConfiguration(java.util.List<BedrockagentKnowledgeBaseKnowledgeBaseConfiguration>)
//  .storageConfiguration(IResolvable)
//  .storageConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentKnowledgeBaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>></code> | knowledge_base_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.storageConfiguration">storageConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>></code> | storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}.

---

##### `knowledgeBaseConfiguration`<sup>Optional</sup> <a name="knowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.knowledgeBaseConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>>

knowledge_base_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration BedrockagentKnowledgeBase#knowledge_base_configuration}

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.storageConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#timeouts BedrockagentKnowledgeBase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration">putKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration">putStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetKnowledgeBaseConfiguration">resetKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetStorageConfiguration">resetStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKnowledgeBaseConfiguration` <a name="putKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration"></a>

```java
public void putKnowledgeBaseConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseKnowledgeBaseConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>>

---

##### `putStorageConfiguration` <a name="putStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration"></a>

```java
public void putStorageConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentKnowledgeBaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKnowledgeBaseConfiguration` <a name="resetKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetKnowledgeBaseConfiguration"></a>

```java
public void resetKnowledgeBaseConfiguration()
```

##### `resetStorageConfiguration` <a name="resetStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetStorageConfiguration"></a>

```java
public void resetStorageConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBase;

BedrockagentKnowledgeBase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBase;

BedrockagentKnowledgeBase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBase;

BedrockagentKnowledgeBase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBase;

BedrockagentKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.failureReasons">failureReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference">BedrockagentKnowledgeBaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfigurationInput">knowledgeBaseConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfigurationInput">storageConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `failureReasons`<sup>Required</sup> <a name="failureReasons" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.failureReasons"></a>

```java
public java.util.List<java.lang.String> getFailureReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseConfiguration`<sup>Required</sup> <a name="knowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```java
public BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList getKnowledgeBaseConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList</a>

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfiguration"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationList getStorageConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeouts"></a>

```java
public BedrockagentKnowledgeBaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference">BedrockagentKnowledgeBaseTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="knowledgeBaseConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfigurationInput"></a>

```java
public java.lang.Object getKnowledgeBaseConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `storageConfigurationInput`<sup>Optional</sup> <a name="storageConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfigurationInput"></a>

```java
public java.lang.Object getStorageConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentKnowledgeBaseConfig <a name="BedrockagentKnowledgeBaseConfig" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseConfig;

BedrockagentKnowledgeBaseConfig.builder()
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
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .knowledgeBaseConfiguration(IResolvable)
//  .knowledgeBaseConfiguration(java.util.List<BedrockagentKnowledgeBaseKnowledgeBaseConfiguration>)
//  .storageConfiguration(IResolvable)
//  .storageConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentKnowledgeBaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>></code> | knowledge_base_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.storageConfiguration">storageConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>></code> | storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}.

---

##### `knowledgeBaseConfiguration`<sup>Optional</sup> <a name="knowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.knowledgeBaseConfiguration"></a>

```java
public java.lang.Object getKnowledgeBaseConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>>

knowledge_base_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration BedrockagentKnowledgeBase#knowledge_base_configuration}

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.storageConfiguration"></a>

```java
public java.lang.Object getStorageConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.timeouts"></a>

```java
public BedrockagentKnowledgeBaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#timeouts BedrockagentKnowledgeBase#timeouts}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration;

BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.builder()
    .type(java.lang.String)
//  .vectorKnowledgeBaseConfiguration(IResolvable)
//  .vectorKnowledgeBaseConfiguration(java.util.List<BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.vectorKnowledgeBaseConfiguration">vectorKnowledgeBaseConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>></code> | vector_knowledge_base_configuration block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}.

---

##### `vectorKnowledgeBaseConfiguration`<sup>Optional</sup> <a name="vectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.vectorKnowledgeBaseConfiguration"></a>

```java
public java.lang.Object getVectorKnowledgeBaseConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>>

vector_knowledge_base_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_knowledge_base_configuration BedrockagentKnowledgeBase#vector_knowledge_base_configuration}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration;

BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.builder()
    .embeddingModelArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelArn">embeddingModelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}. |

---

##### `embeddingModelArn`<sup>Required</sup> <a name="embeddingModelArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelArn"></a>

```java
public java.lang.String getEmbeddingModelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}.

---

### BedrockagentKnowledgeBaseStorageConfiguration <a name="BedrockagentKnowledgeBaseStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfiguration;

BedrockagentKnowledgeBaseStorageConfiguration.builder()
    .type(java.lang.String)
//  .opensearchServerlessConfiguration(IResolvable)
//  .opensearchServerlessConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration>)
//  .pineconeConfiguration(IResolvable)
//  .pineconeConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration>)
//  .rdsConfiguration(IResolvable)
//  .rdsConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration>)
//  .redisEnterpriseCloudConfiguration(IResolvable)
//  .redisEnterpriseCloudConfiguration(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.opensearchServerlessConfiguration">opensearchServerlessConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>></code> | opensearch_serverless_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.pineconeConfiguration">pineconeConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>></code> | pinecone_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.rdsConfiguration">rdsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>></code> | rds_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.redisEnterpriseCloudConfiguration">redisEnterpriseCloudConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>></code> | redis_enterprise_cloud_configuration block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}.

---

##### `opensearchServerlessConfiguration`<sup>Optional</sup> <a name="opensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.opensearchServerlessConfiguration"></a>

```java
public java.lang.Object getOpensearchServerlessConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>>

opensearch_serverless_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#opensearch_serverless_configuration BedrockagentKnowledgeBase#opensearch_serverless_configuration}

---

##### `pineconeConfiguration`<sup>Optional</sup> <a name="pineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.pineconeConfiguration"></a>

```java
public java.lang.Object getPineconeConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>>

pinecone_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#pinecone_configuration BedrockagentKnowledgeBase#pinecone_configuration}

---

##### `rdsConfiguration`<sup>Optional</sup> <a name="rdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.rdsConfiguration"></a>

```java
public java.lang.Object getRdsConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>>

rds_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#rds_configuration BedrockagentKnowledgeBase#rds_configuration}

---

##### `redisEnterpriseCloudConfiguration`<sup>Optional</sup> <a name="redisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.redisEnterpriseCloudConfiguration"></a>

```java
public java.lang.Object getRedisEnterpriseCloudConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>>

redis_enterprise_cloud_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#redis_enterprise_cloud_configuration BedrockagentKnowledgeBase#redis_enterprise_cloud_configuration}

---

### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration;

BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.builder()
    .collectionArn(java.lang.String)
    .vectorIndexName(java.lang.String)
//  .fieldMapping(IResolvable)
//  .fieldMapping(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.collectionArn">collectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.vectorIndexName">vectorIndexName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.fieldMapping">fieldMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>></code> | field_mapping block. |

---

##### `collectionArn`<sup>Required</sup> <a name="collectionArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.collectionArn"></a>

```java
public java.lang.String getCollectionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}.

---

##### `vectorIndexName`<sup>Required</sup> <a name="vectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.vectorIndexName"></a>

```java
public java.lang.String getVectorIndexName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}.

---

##### `fieldMapping`<sup>Optional</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.fieldMapping"></a>

```java
public java.lang.Object getFieldMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping;

BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.builder()
//  .metadataField(java.lang.String)
//  .textField(java.lang.String)
//  .vectorField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.textField">textField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `metadataField`<sup>Optional</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `textField`<sup>Optional</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `vectorField`<sup>Optional</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration;

BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.builder()
    .connectionString(java.lang.String)
    .credentialsSecretArn(java.lang.String)
//  .fieldMapping(IResolvable)
//  .fieldMapping(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.fieldMapping">fieldMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>></code> | field_mapping block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}. |

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}.

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `fieldMapping`<sup>Optional</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.fieldMapping"></a>

```java
public java.lang.Object getFieldMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}.

---

### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping;

BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.builder()
//  .metadataField(java.lang.String)
//  .textField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.textField">textField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |

---

##### `metadataField`<sup>Optional</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `textField`<sup>Optional</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration;

BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.builder()
    .credentialsSecretArn(java.lang.String)
    .databaseName(java.lang.String)
    .resourceArn(java.lang.String)
    .tableName(java.lang.String)
//  .fieldMapping(IResolvable)
//  .fieldMapping(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.fieldMapping">fieldMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>></code> | field_mapping block. |

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}.

---

##### `fieldMapping`<sup>Optional</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.fieldMapping"></a>

```java
public java.lang.Object getFieldMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping;

BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.builder()
    .metadataField(java.lang.String)
    .primaryKeyField(java.lang.String)
    .textField(java.lang.String)
    .vectorField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.primaryKeyField">primaryKeyField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.textField">textField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `metadataField`<sup>Required</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `primaryKeyField`<sup>Required</sup> <a name="primaryKeyField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.primaryKeyField"></a>

```java
public java.lang.String getPrimaryKeyField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}.

---

##### `textField`<sup>Required</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `vectorField`<sup>Required</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration;

BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.builder()
    .credentialsSecretArn(java.lang.String)
    .endpoint(java.lang.String)
    .vectorIndexName(java.lang.String)
//  .fieldMapping(IResolvable)
//  .fieldMapping(java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.vectorIndexName">vectorIndexName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.fieldMapping">fieldMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>></code> | field_mapping block. |

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}.

---

##### `vectorIndexName`<sup>Required</sup> <a name="vectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.vectorIndexName"></a>

```java
public java.lang.String getVectorIndexName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}.

---

##### `fieldMapping`<sup>Optional</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.fieldMapping"></a>

```java
public java.lang.Object getFieldMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping;

BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.builder()
//  .metadataField(java.lang.String)
//  .textField(java.lang.String)
//  .vectorField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.textField">textField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `metadataField`<sup>Optional</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `textField`<sup>Optional</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `vectorField`<sup>Optional</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseTimeouts <a name="BedrockagentKnowledgeBaseTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseTimeouts;

BedrockagentKnowledgeBaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#create BedrockagentKnowledgeBase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#delete BedrockagentKnowledgeBase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/bedrockagent_knowledge_base#update BedrockagentKnowledgeBase#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList;

new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>>

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference;

new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration">putVectorKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetVectorKnowledgeBaseConfiguration">resetVectorKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVectorKnowledgeBaseConfiguration` <a name="putVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration"></a>

```java
public void putVectorKnowledgeBaseConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>>

---

##### `resetVectorKnowledgeBaseConfiguration` <a name="resetVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetVectorKnowledgeBaseConfiguration"></a>

```java
public void resetVectorKnowledgeBaseConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfiguration">vectorKnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfigurationInput">vectorKnowledgeBaseConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vectorKnowledgeBaseConfiguration`<sup>Required</sup> <a name="vectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfiguration"></a>

```java
public BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList getVectorKnowledgeBaseConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vectorKnowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="vectorKnowledgeBaseConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfigurationInput"></a>

```java
public java.lang.Object getVectorKnowledgeBaseConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList;

new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>>

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference;

new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArnInput">embeddingModelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArn">embeddingModelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingModelArnInput`<sup>Optional</sup> <a name="embeddingModelArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArnInput"></a>

```java
public java.lang.String getEmbeddingModelArnInput();
```

- *Type:* java.lang.String

---

##### `embeddingModelArn`<sup>Required</sup> <a name="embeddingModelArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArn"></a>

```java
public java.lang.String getEmbeddingModelArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationList;

new BedrockagentKnowledgeBaseStorageConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList;

new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetMetadataField">resetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetTextField">resetTextField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetVectorField">resetVectorField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataField` <a name="resetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```java
public void resetMetadataField()
```

##### `resetTextField` <a name="resetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetTextField"></a>

```java
public void resetTextField()
```

##### `resetVectorField` <a name="resetVectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetVectorField"></a>

```java
public void resetVectorField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataFieldInput">metadataFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textFieldInput">textFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorFieldInput">vectorFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textField">textField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataFieldInput`<sup>Optional</sup> <a name="metadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```java
public java.lang.String getMetadataFieldInput();
```

- *Type:* java.lang.String

---

##### `textFieldInput`<sup>Optional</sup> <a name="textFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```java
public java.lang.String getTextFieldInput();
```

- *Type:* java.lang.String

---

##### `vectorFieldInput`<sup>Optional</sup> <a name="vectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```java
public java.lang.String getVectorFieldInput();
```

- *Type:* java.lang.String

---

##### `metadataField`<sup>Required</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

---

##### `textField`<sup>Required</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

---

##### `vectorField`<sup>Required</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList;

new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resetFieldMapping">resetFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>>

---

##### `resetFieldMapping` <a name="resetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resetFieldMapping"></a>

```java
public void resetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArnInput">collectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexNameInput">vectorIndexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArn">collectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexName">vectorIndexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMapping"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList</a>

---

##### `collectionArnInput`<sup>Optional</sup> <a name="collectionArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArnInput"></a>

```java
public java.lang.String getCollectionArnInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMappingInput"></a>

```java
public java.lang.Object getFieldMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping</a>>

---

##### `vectorIndexNameInput`<sup>Optional</sup> <a name="vectorIndexNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexNameInput"></a>

```java
public java.lang.String getVectorIndexNameInput();
```

- *Type:* java.lang.String

---

##### `collectionArn`<sup>Required</sup> <a name="collectionArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArn"></a>

```java
public java.lang.String getCollectionArn();
```

- *Type:* java.lang.String

---

##### `vectorIndexName`<sup>Required</sup> <a name="vectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexName"></a>

```java
public java.lang.String getVectorIndexName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration">putOpensearchServerlessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration">putPineconeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration">putRdsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration">putRedisEnterpriseCloudConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetOpensearchServerlessConfiguration">resetOpensearchServerlessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetPineconeConfiguration">resetPineconeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRdsConfiguration">resetRdsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRedisEnterpriseCloudConfiguration">resetRedisEnterpriseCloudConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpensearchServerlessConfiguration` <a name="putOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration"></a>

```java
public void putOpensearchServerlessConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>>

---

##### `putPineconeConfiguration` <a name="putPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration"></a>

```java
public void putPineconeConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>>

---

##### `putRdsConfiguration` <a name="putRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration"></a>

```java
public void putRdsConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>>

---

##### `putRedisEnterpriseCloudConfiguration` <a name="putRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration"></a>

```java
public void putRedisEnterpriseCloudConfiguration(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>>

---

##### `resetOpensearchServerlessConfiguration` <a name="resetOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetOpensearchServerlessConfiguration"></a>

```java
public void resetOpensearchServerlessConfiguration()
```

##### `resetPineconeConfiguration` <a name="resetPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetPineconeConfiguration"></a>

```java
public void resetPineconeConfiguration()
```

##### `resetRdsConfiguration` <a name="resetRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRdsConfiguration"></a>

```java
public void resetRdsConfiguration()
```

##### `resetRedisEnterpriseCloudConfiguration` <a name="resetRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRedisEnterpriseCloudConfiguration"></a>

```java
public void resetRedisEnterpriseCloudConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfiguration">opensearchServerlessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfiguration">pineconeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfiguration">rdsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfiguration">redisEnterpriseCloudConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfigurationInput">opensearchServerlessConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfigurationInput">pineconeConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfigurationInput">rdsConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfigurationInput">redisEnterpriseCloudConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `opensearchServerlessConfiguration`<sup>Required</sup> <a name="opensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfiguration"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList getOpensearchServerlessConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList</a>

---

##### `pineconeConfiguration`<sup>Required</sup> <a name="pineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfiguration"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList getPineconeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList</a>

---

##### `rdsConfiguration`<sup>Required</sup> <a name="rdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfiguration"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList getRdsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList</a>

---

##### `redisEnterpriseCloudConfiguration`<sup>Required</sup> <a name="redisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfiguration"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList getRedisEnterpriseCloudConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList</a>

---

##### `opensearchServerlessConfigurationInput`<sup>Optional</sup> <a name="opensearchServerlessConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfigurationInput"></a>

```java
public java.lang.Object getOpensearchServerlessConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration</a>>

---

##### `pineconeConfigurationInput`<sup>Optional</sup> <a name="pineconeConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfigurationInput"></a>

```java
public java.lang.Object getPineconeConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>>

---

##### `rdsConfigurationInput`<sup>Optional</sup> <a name="rdsConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfigurationInput"></a>

```java
public java.lang.Object getRdsConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>>

---

##### `redisEnterpriseCloudConfigurationInput`<sup>Optional</sup> <a name="redisEnterpriseCloudConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfigurationInput"></a>

```java
public java.lang.Object getRedisEnterpriseCloudConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration">BedrockagentKnowledgeBaseStorageConfiguration</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList;

new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetMetadataField">resetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetTextField">resetTextField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataField` <a name="resetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```java
public void resetMetadataField()
```

##### `resetTextField` <a name="resetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetTextField"></a>

```java
public void resetTextField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataFieldInput">metadataFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textFieldInput">textFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textField">textField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataFieldInput`<sup>Optional</sup> <a name="metadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```java
public java.lang.String getMetadataFieldInput();
```

- *Type:* java.lang.String

---

##### `textFieldInput`<sup>Optional</sup> <a name="textFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```java
public java.lang.String getTextFieldInput();
```

- *Type:* java.lang.String

---

##### `metadataField`<sup>Required</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

---

##### `textField`<sup>Required</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList;

new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetFieldMapping">resetFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>>

---

##### `resetFieldMapping` <a name="resetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetFieldMapping"></a>

```java
public void resetFieldMapping()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArnInput">credentialsSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMapping"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `credentialsSecretArnInput`<sup>Optional</sup> <a name="credentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```java
public java.lang.String getCredentialsSecretArnInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMappingInput"></a>

```java
public java.lang.Object getFieldMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList;

new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataFieldInput">metadataFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyFieldInput">primaryKeyFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textFieldInput">textFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorFieldInput">vectorFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyField">primaryKeyField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textField">textField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataFieldInput`<sup>Optional</sup> <a name="metadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```java
public java.lang.String getMetadataFieldInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyFieldInput`<sup>Optional</sup> <a name="primaryKeyFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyFieldInput"></a>

```java
public java.lang.String getPrimaryKeyFieldInput();
```

- *Type:* java.lang.String

---

##### `textFieldInput`<sup>Optional</sup> <a name="textFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```java
public java.lang.String getTextFieldInput();
```

- *Type:* java.lang.String

---

##### `vectorFieldInput`<sup>Optional</sup> <a name="vectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```java
public java.lang.String getVectorFieldInput();
```

- *Type:* java.lang.String

---

##### `metadataField`<sup>Required</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

---

##### `primaryKeyField`<sup>Required</sup> <a name="primaryKeyField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyField"></a>

```java
public java.lang.String getPrimaryKeyField();
```

- *Type:* java.lang.String

---

##### `textField`<sup>Required</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

---

##### `vectorField`<sup>Required</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList;

new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resetFieldMapping">resetFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>>

---

##### `resetFieldMapping` <a name="resetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resetFieldMapping"></a>

```java
public void resetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArnInput">credentialsSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMapping"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList</a>

---

##### `credentialsSecretArnInput`<sup>Optional</sup> <a name="credentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```java
public java.lang.String getCredentialsSecretArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMappingInput"></a>

```java
public java.lang.Object getFieldMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping</a>>

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList;

new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetMetadataField">resetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetTextField">resetTextField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetVectorField">resetVectorField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataField` <a name="resetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```java
public void resetMetadataField()
```

##### `resetTextField` <a name="resetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetTextField"></a>

```java
public void resetTextField()
```

##### `resetVectorField` <a name="resetVectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetVectorField"></a>

```java
public void resetVectorField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataFieldInput">metadataFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textFieldInput">textFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorFieldInput">vectorFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataField">metadataField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textField">textField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorField">vectorField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataFieldInput`<sup>Optional</sup> <a name="metadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```java
public java.lang.String getMetadataFieldInput();
```

- *Type:* java.lang.String

---

##### `textFieldInput`<sup>Optional</sup> <a name="textFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```java
public java.lang.String getTextFieldInput();
```

- *Type:* java.lang.String

---

##### `vectorFieldInput`<sup>Optional</sup> <a name="vectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```java
public java.lang.String getVectorFieldInput();
```

- *Type:* java.lang.String

---

##### `metadataField`<sup>Required</sup> <a name="metadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataField"></a>

```java
public java.lang.String getMetadataField();
```

- *Type:* java.lang.String

---

##### `textField`<sup>Required</sup> <a name="textField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textField"></a>

```java
public java.lang.String getTextField();
```

- *Type:* java.lang.String

---

##### `vectorField`<sup>Required</sup> <a name="vectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorField"></a>

```java
public java.lang.String getVectorField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList;

new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>>

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference;

new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resetFieldMapping">resetFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable OR java.util.List<BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>>

---

##### `resetFieldMapping` <a name="resetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resetFieldMapping"></a>

```java
public void resetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArnInput">credentialsSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexNameInput">vectorIndexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArn">credentialsSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexName">vectorIndexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMapping"></a>

```java
public BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList</a>

---

##### `credentialsSecretArnInput`<sup>Optional</sup> <a name="credentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```java
public java.lang.String getCredentialsSecretArnInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMappingInput"></a>

```java
public java.lang.Object getFieldMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping</a>>

---

##### `vectorIndexNameInput`<sup>Optional</sup> <a name="vectorIndexNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexNameInput"></a>

```java
public java.lang.String getVectorIndexNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsSecretArn`<sup>Required</sup> <a name="credentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArn"></a>

```java
public java.lang.String getCredentialsSecretArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `vectorIndexName`<sup>Required</sup> <a name="vectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexName"></a>

```java
public java.lang.String getVectorIndexName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration</a>

---


### BedrockagentKnowledgeBaseTimeoutsOutputReference <a name="BedrockagentKnowledgeBaseTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_knowledge_base.BedrockagentKnowledgeBaseTimeoutsOutputReference;

new BedrockagentKnowledgeBaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

---



