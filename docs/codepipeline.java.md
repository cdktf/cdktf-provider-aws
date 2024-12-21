# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdktf/provider-aws.codepipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Codepipeline <a name="Codepipeline" id="@cdktf/provider-aws.codepipeline.Codepipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline aws_codepipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.Codepipeline;

Codepipeline.Builder.create(Construct scope, java.lang.String id)
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
    .artifactStore(IResolvable)
    .artifactStore(java.util.List<CodepipelineArtifactStore>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .stage(IResolvable)
    .stage(java.util.List<CodepipelineStage>)
//  .executionMode(java.lang.String)
//  .id(java.lang.String)
//  .pipelineType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .trigger(IResolvable)
//  .trigger(java.util.List<CodepipelineTrigger>)
//  .variable(IResolvable)
//  .variable(java.util.List<CodepipelineVariable>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.artifactStore">artifactStore</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>></code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage">stage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>></code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.executionMode">executionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.trigger">trigger</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>></code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>></code> | variable block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.artifactStore"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>>

artifact_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>>

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.executionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.trigger"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#trigger Codepipeline#trigger}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.variable"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#variable Codepipeline#variable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore">putArtifactStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode">resetExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType">resetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger">resetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.Codepipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactStore` <a name="putArtifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore"></a>

```java
public void putArtifactStore(IResolvable OR java.util.List<CodepipelineArtifactStore> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>>

---

##### `putStage` <a name="putStage" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage"></a>

```java
public void putStage(IResolvable OR java.util.List<CodepipelineStage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger"></a>

```java
public void putTrigger(IResolvable OR java.util.List<CodepipelineTrigger> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable"></a>

```java
public void putVariable(IResolvable OR java.util.List<CodepipelineVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>>

---

##### `resetExecutionMode` <a name="resetExecutionMode" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode"></a>

```java
public void resetExecutionMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetId"></a>

```java
public void resetId()
```

##### `resetPipelineType` <a name="resetPipelineType" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType"></a>

```java
public void resetPipelineType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger"></a>

```java
public void resetTrigger()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable"></a>

```java
public void resetVariable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.Codepipeline;

Codepipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.Codepipeline;

Codepipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.Codepipeline;

Codepipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.Codepipeline;

Codepipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Codepipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Codepipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Codepipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Codepipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput">artifactStoreInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput">executionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput">stageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput">triggerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode">executionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore"></a>

```java
public CodepipelineArtifactStoreList getArtifactStore();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stage"></a>

```java
public CodepipelineStageList getStage();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger"></a>

```java
public CodepipelineTriggerList getTrigger();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variable"></a>

```java
public CodepipelineVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a>

---

##### `artifactStoreInput`<sup>Optional</sup> <a name="artifactStoreInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput"></a>

```java
public java.lang.Object getArtifactStoreInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>>

---

##### `executionModeInput`<sup>Optional</sup> <a name="executionModeInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput"></a>

```java
public java.lang.String getExecutionModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput"></a>

```java
public java.lang.String getPipelineTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput"></a>

```java
public java.lang.Object getStageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput"></a>

```java
public java.lang.Object getTriggerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput"></a>

```java
public java.lang.Object getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>>

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode"></a>

```java
public java.lang.String getExecutionMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType"></a>

```java
public java.lang.String getPipelineType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineArtifactStore <a name="CodepipelineArtifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineArtifactStore;

CodepipelineArtifactStore.builder()
    .location(java.lang.String)
    .type(java.lang.String)
//  .encryptionKey(CodepipelineArtifactStoreEncryptionKey)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#location Codepipeline#location}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#location Codepipeline#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey"></a>

```java
public CodepipelineArtifactStoreEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}.

---

### CodepipelineArtifactStoreEncryptionKey <a name="CodepipelineArtifactStoreEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineArtifactStoreEncryptionKey;

CodepipelineArtifactStoreEncryptionKey.builder()
    .id(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#type Codepipeline#type}.

---

### CodepipelineConfig <a name="CodepipelineConfig" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineConfig;

CodepipelineConfig.builder()
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
    .artifactStore(IResolvable)
    .artifactStore(java.util.List<CodepipelineArtifactStore>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .stage(IResolvable)
    .stage(java.util.List<CodepipelineStage>)
//  .executionMode(java.lang.String)
//  .id(java.lang.String)
//  .pipelineType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .trigger(IResolvable)
//  .trigger(java.util.List<CodepipelineTrigger>)
//  .variable(IResolvable)
//  .variable(java.util.List<CodepipelineVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore">artifactStore</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>></code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage">stage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>></code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode">executionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType">pipelineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger">trigger</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>></code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>></code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore"></a>

```java
public java.lang.Object getArtifactStore();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>>

artifact_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage"></a>

```java
public java.lang.Object getStage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>>

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode"></a>

```java
public java.lang.String getExecutionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType"></a>

```java
public java.lang.String getPipelineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger"></a>

```java
public java.lang.Object getTrigger();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#trigger Codepipeline#trigger}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable"></a>

```java
public java.lang.Object getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#variable Codepipeline#variable}

---

### CodepipelineStage <a name="CodepipelineStage" id="@cdktf/provider-aws.codepipeline.CodepipelineStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStage;

CodepipelineStage.builder()
    .action(IResolvable)
    .action(java.util.List<CodepipelineStageAction>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#action Codepipeline#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}.

---

### CodepipelineStageAction <a name="CodepipelineStageAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStageAction;

CodepipelineStageAction.builder()
    .category(java.lang.String)
    .name(java.lang.String)
    .owner(java.lang.String)
    .provider(java.lang.String)
    .version(java.lang.String)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .inputArtifacts(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .outputArtifacts(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .runOrder(java.lang.Number)
//  .timeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#version Codepipeline#version}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts">inputArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#namespace Codepipeline#namespace}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts">outputArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder">runOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#run_order Codepipeline#run_order}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `inputArtifacts`<sup>Optional</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts"></a>

```java
public java.util.List<java.lang.String> getInputArtifacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#namespace Codepipeline#namespace}.

---

##### `outputArtifacts`<sup>Optional</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts"></a>

```java
public java.util.List<java.lang.String> getOutputArtifacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `runOrder`<sup>Optional</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder"></a>

```java
public java.lang.Number getRunOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#run_order Codepipeline#run_order}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineTrigger <a name="CodepipelineTrigger" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTrigger;

CodepipelineTrigger.builder()
    .gitConfiguration(CodepipelineTriggerGitConfiguration)
    .providerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | git_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType">providerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider_type Codepipeline#provider_type}. |

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration"></a>

```java
public CodepipelineTriggerGitConfiguration getGitConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

git_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#provider_type Codepipeline#provider_type}.

---

### CodepipelineTriggerGitConfiguration <a name="CodepipelineTriggerGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfiguration;

CodepipelineTriggerGitConfiguration.builder()
    .sourceActionName(java.lang.String)
//  .pullRequest(IResolvable)
//  .pullRequest(java.util.List<CodepipelineTriggerGitConfigurationPullRequest>)
//  .push(IResolvable)
//  .push(java.util.List<CodepipelineTriggerGitConfigurationPush>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName">sourceActionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest">pullRequest</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>></code> | pull_request block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push">push</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>></code> | push block. |

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName"></a>

```java
public java.lang.String getSourceActionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}.

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest"></a>

```java
public java.lang.Object getPullRequest();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#pull_request Codepipeline#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push"></a>

```java
public java.lang.Object getPush();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#push Codepipeline#push}

---

### CodepipelineTriggerGitConfigurationPullRequest <a name="CodepipelineTriggerGitConfigurationPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest;

CodepipelineTriggerGitConfigurationPullRequest.builder()
//  .branches(CodepipelineTriggerGitConfigurationPullRequestBranches)
//  .events(java.util.List<java.lang.String>)
//  .filePaths(CodepipelineTriggerGitConfigurationPullRequestFilePaths)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#events Codepipeline#events}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | file_paths block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestBranches getBranches();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#events Codepipeline#events}.

---

##### `filePaths`<sup>Optional</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestFilePaths getFilePaths();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

### CodepipelineTriggerGitConfigurationPullRequestBranches <a name="CodepipelineTriggerGitConfigurationPullRequestBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches;

CodepipelineTriggerGitConfigurationPullRequestBranches.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .includes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPullRequestFilePaths <a name="CodepipelineTriggerGitConfigurationPullRequestFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths;

CodepipelineTriggerGitConfigurationPullRequestFilePaths.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .includes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPush <a name="CodepipelineTriggerGitConfigurationPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPush;

CodepipelineTriggerGitConfigurationPush.builder()
//  .branches(CodepipelineTriggerGitConfigurationPushBranches)
//  .filePaths(CodepipelineTriggerGitConfigurationPushFilePaths)
//  .tags(CodepipelineTriggerGitConfigurationPushTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | file_paths block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | tags block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches"></a>

```java
public CodepipelineTriggerGitConfigurationPushBranches getBranches();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `filePaths`<sup>Optional</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths"></a>

```java
public CodepipelineTriggerGitConfigurationPushFilePaths getFilePaths();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags"></a>

```java
public CodepipelineTriggerGitConfigurationPushTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#tags Codepipeline#tags}

---

### CodepipelineTriggerGitConfigurationPushBranches <a name="CodepipelineTriggerGitConfigurationPushBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches;

CodepipelineTriggerGitConfigurationPushBranches.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .includes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushFilePaths <a name="CodepipelineTriggerGitConfigurationPushFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths;

CodepipelineTriggerGitConfigurationPushFilePaths.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .includes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushTags <a name="CodepipelineTriggerGitConfigurationPushTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags;

CodepipelineTriggerGitConfigurationPushTags.builder()
//  .excludes(java.util.List<java.lang.String>)
//  .includes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineVariable <a name="CodepipelineVariable" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineVariable;

CodepipelineVariable.builder()
    .name(java.lang.String)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#default_value Codepipeline#default_value}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#description Codepipeline#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#default_value Codepipeline#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codepipeline#description Codepipeline#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineArtifactStoreEncryptionKeyOutputReference <a name="CodepipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference;

new CodepipelineArtifactStoreEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```java
public CodepipelineArtifactStoreEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---


### CodepipelineArtifactStoreList <a name="CodepipelineArtifactStoreList" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineArtifactStoreList;

new CodepipelineArtifactStoreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get"></a>

```java
public CodepipelineArtifactStoreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>>

---


### CodepipelineArtifactStoreOutputReference <a name="CodepipelineArtifactStoreOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineArtifactStoreOutputReference;

new CodepipelineArtifactStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey"></a>

```java
public void putEncryptionKey(CodepipelineArtifactStoreEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```java
public CodepipelineArtifactStoreEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput"></a>

```java
public CodepipelineArtifactStoreEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>

---


### CodepipelineStageActionList <a name="CodepipelineStageActionList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStageActionList;

new CodepipelineStageActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get"></a>

```java
public CodepipelineStageActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>>

---


### CodepipelineStageActionOutputReference <a name="CodepipelineStageActionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStageActionOutputReference;

new CodepipelineStageActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts">resetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts">resetOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder">resetRunOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetInputArtifacts` <a name="resetInputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts"></a>

```java
public void resetInputArtifacts()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOutputArtifacts` <a name="resetOutputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts"></a>

```java
public void resetOutputArtifacts()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetRunOrder` <a name="resetRunOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder"></a>

```java
public void resetRunOrder()
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes"></a>

```java
public void resetTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput">inputArtifactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput">outputArtifactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput">runOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts">outputArtifacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder">runOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inputArtifactsInput`<sup>Optional</sup> <a name="inputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput"></a>

```java
public java.util.List<java.lang.String> getInputArtifactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `outputArtifactsInput`<sup>Optional</sup> <a name="outputArtifactsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput"></a>

```java
public java.util.List<java.lang.String> getOutputArtifactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `runOrderInput`<sup>Optional</sup> <a name="runOrderInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput"></a>

```java
public java.lang.Number getRunOrderInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput"></a>

```java
public java.lang.Number getTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts"></a>

```java
public java.util.List<java.lang.String> getInputArtifacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts"></a>

```java
public java.util.List<java.lang.String> getOutputArtifacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `runOrder`<sup>Required</sup> <a name="runOrder" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder"></a>

```java
public java.lang.Number getRunOrder();
```

- *Type:* java.lang.Number

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>

---


### CodepipelineStageList <a name="CodepipelineStageList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStageList;

new CodepipelineStageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get"></a>

```java
public CodepipelineStageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>>

---


### CodepipelineStageOutputReference <a name="CodepipelineStageOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineStageOutputReference;

new CodepipelineStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction">putAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<CodepipelineStageAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action"></a>

```java
public CodepipelineStageActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>

---


### CodepipelineTriggerGitConfigurationOutputReference <a name="CodepipelineTriggerGitConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference;

new CodepipelineTriggerGitConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush">putPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush">resetPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest"></a>

```java
public void putPullRequest(IResolvable OR java.util.List<CodepipelineTriggerGitConfigurationPullRequest> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>>

---

##### `putPush` <a name="putPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush"></a>

```java
public void putPush(IResolvable OR java.util.List<CodepipelineTriggerGitConfigurationPush> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>>

---

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest"></a>

```java
public void resetPullRequest()
```

##### `resetPush` <a name="resetPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush"></a>

```java
public void resetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput">pushInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput">sourceActionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName">sourceActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestList getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push"></a>

```java
public CodepipelineTriggerGitConfigurationPushList getPush();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a>

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput"></a>

```java
public java.lang.Object getPullRequestInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>>

---

##### `pushInput`<sup>Optional</sup> <a name="pushInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput"></a>

```java
public java.lang.Object getPushInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>>

---

##### `sourceActionNameInput`<sup>Optional</sup> <a name="sourceActionNameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput"></a>

```java
public java.lang.String getSourceActionNameInput();
```

- *Type:* java.lang.String

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName"></a>

```java
public java.lang.String getSourceActionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---


### CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference;

new CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes"></a>

```java
public void resetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput">includesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput"></a>

```java
public java.util.List<java.lang.String> getIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestBranches getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---


### CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference;

new CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes"></a>

```java
public void resetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput">includesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput"></a>

```java
public java.util.List<java.lang.String> getIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestFilePaths getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPullRequestList <a name="CodepipelineTriggerGitConfigurationPullRequestList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList;

new CodepipelineTriggerGitConfigurationPullRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>>

---


### CodepipelineTriggerGitConfigurationPullRequestOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference;

new CodepipelineTriggerGitConfigurationPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches">putBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths">putFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths">resetFilePaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranches` <a name="putBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches"></a>

```java
public void putBranches(CodepipelineTriggerGitConfigurationPullRequestBranches value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---

##### `putFilePaths` <a name="putFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths"></a>

```java
public void putFilePaths(CodepipelineTriggerGitConfigurationPullRequestFilePaths value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches"></a>

```java
public void resetBranches()
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetFilePaths` <a name="resetFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths"></a>

```java
public void resetFilePaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput">branchesInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput">filePathsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference getBranches();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference getFilePaths();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestBranches getBranchesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filePathsInput`<sup>Optional</sup> <a name="filePathsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput"></a>

```java
public CodepipelineTriggerGitConfigurationPullRequestFilePaths getFilePathsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>

---


### CodepipelineTriggerGitConfigurationPushBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPushBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference;

new CodepipelineTriggerGitConfigurationPushBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes"></a>

```java
public void resetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput">includesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput"></a>

```java
public java.util.List<java.lang.String> getIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfigurationPushBranches getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---


### CodepipelineTriggerGitConfigurationPushFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPushFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference;

new CodepipelineTriggerGitConfigurationPushFilePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes"></a>

```java
public void resetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput">includesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput"></a>

```java
public java.util.List<java.lang.String> getIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfigurationPushFilePaths getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPushList <a name="CodepipelineTriggerGitConfigurationPushList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushList;

new CodepipelineTriggerGitConfigurationPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get"></a>

```java
public CodepipelineTriggerGitConfigurationPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>>

---


### CodepipelineTriggerGitConfigurationPushOutputReference <a name="CodepipelineTriggerGitConfigurationPushOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference;

new CodepipelineTriggerGitConfigurationPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches">putBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths">putFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths">resetFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranches` <a name="putBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches"></a>

```java
public void putBranches(CodepipelineTriggerGitConfigurationPushBranches value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---

##### `putFilePaths` <a name="putFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths"></a>

```java
public void putFilePaths(CodepipelineTriggerGitConfigurationPushFilePaths value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags"></a>

```java
public void putTags(CodepipelineTriggerGitConfigurationPushTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches"></a>

```java
public void resetBranches()
```

##### `resetFilePaths` <a name="resetFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths"></a>

```java
public void resetFilePaths()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput">branchesInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput">filePathsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches"></a>

```java
public CodepipelineTriggerGitConfigurationPushBranchesOutputReference getBranches();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths"></a>

```java
public CodepipelineTriggerGitConfigurationPushFilePathsOutputReference getFilePaths();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags"></a>

```java
public CodepipelineTriggerGitConfigurationPushTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a>

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput"></a>

```java
public CodepipelineTriggerGitConfigurationPushBranches getBranchesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---

##### `filePathsInput`<sup>Optional</sup> <a name="filePathsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput"></a>

```java
public CodepipelineTriggerGitConfigurationPushFilePaths getFilePathsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput"></a>

```java
public CodepipelineTriggerGitConfigurationPushTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>

---


### CodepipelineTriggerGitConfigurationPushTagsOutputReference <a name="CodepipelineTriggerGitConfigurationPushTagsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference;

new CodepipelineTriggerGitConfigurationPushTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes"></a>

```java
public void resetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput">includesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput"></a>

```java
public java.util.List<java.lang.String> getIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes"></a>

```java
public java.util.List<java.lang.String> getIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```java
public CodepipelineTriggerGitConfigurationPushTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---


### CodepipelineTriggerList <a name="CodepipelineTriggerList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerList;

new CodepipelineTriggerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get"></a>

```java
public CodepipelineTriggerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>>

---


### CodepipelineTriggerOutputReference <a name="CodepipelineTriggerOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineTriggerOutputReference;

new CodepipelineTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration">putGitConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitConfiguration` <a name="putGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration"></a>

```java
public void putGitConfiguration(CodepipelineTriggerGitConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput">gitConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput">providerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration"></a>

```java
public CodepipelineTriggerGitConfigurationOutputReference getGitConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a>

---

##### `gitConfigurationInput`<sup>Optional</sup> <a name="gitConfigurationInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput"></a>

```java
public CodepipelineTriggerGitConfiguration getGitConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput"></a>

```java
public java.lang.String getProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>

---


### CodepipelineVariableList <a name="CodepipelineVariableList" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineVariableList;

new CodepipelineVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get"></a>

```java
public CodepipelineVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>>

---


### CodepipelineVariableOutputReference <a name="CodepipelineVariableOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codepipeline.CodepipelineVariableOutputReference;

new CodepipelineVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>

---



