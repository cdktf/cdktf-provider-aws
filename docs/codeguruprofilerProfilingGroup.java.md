# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroup;

CodeguruprofilerProfilingGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .agentOrchestrationConfig(IResolvable)
//  .agentOrchestrationConfig(java.util.List<CodeguruprofilerProfilingGroupAgentOrchestrationConfig>)
//  .computePlatform(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentOrchestrationConfig">agentOrchestrationConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>></code> | agent_orchestration_config block. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}.

---

##### `agentOrchestrationConfig`<sup>Optional</sup> <a name="agentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentOrchestrationConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>>

agent_orchestration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig">putAgentOrchestrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig">resetAgentOrchestrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">resetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentOrchestrationConfig` <a name="putAgentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig"></a>

```java
public void putAgentOrchestrationConfig(IResolvable OR java.util.List<CodeguruprofilerProfilingGroupAgentOrchestrationConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>>

---

##### `resetAgentOrchestrationConfig` <a name="resetAgentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig"></a>

```java
public void resetAgentOrchestrationConfig()
```

##### `resetComputePlatform` <a name="resetComputePlatform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```java
public void resetComputePlatform()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroup;

CodeguruprofilerProfilingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroup;

CodeguruprofilerProfilingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroup;

CodeguruprofilerProfilingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroup;

CodeguruprofilerProfilingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodeguruprofilerProfilingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig">agentOrchestrationConfig</a></code> | <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput">agentOrchestrationConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">computePlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentOrchestrationConfig`<sup>Required</sup> <a name="agentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig"></a>

```java
public CodeguruprofilerProfilingGroupAgentOrchestrationConfigList getAgentOrchestrationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `agentOrchestrationConfigInput`<sup>Optional</sup> <a name="agentOrchestrationConfigInput" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput"></a>

```java
public java.lang.Object getAgentOrchestrationConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>>

---

##### `computePlatformInput`<sup>Optional</sup> <a name="computePlatformInput" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```java
public java.lang.String getComputePlatformInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfig <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroupAgentOrchestrationConfig;

CodeguruprofilerProfilingGroupAgentOrchestrationConfig.builder()
    .profilingEnabled(java.lang.Boolean)
    .profilingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled">profilingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}. |

---

##### `profilingEnabled`<sup>Required</sup> <a name="profilingEnabled" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

```java
public java.lang.Object getProfilingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}.

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroupConfig;

CodeguruprofilerProfilingGroupConfig.builder()
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
//  .agentOrchestrationConfig(IResolvable)
//  .agentOrchestrationConfig(java.util.List<CodeguruprofilerProfilingGroupAgentOrchestrationConfig>)
//  .computePlatform(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig">agentOrchestrationConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>></code> | agent_orchestration_config block. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}.

---

##### `agentOrchestrationConfig`<sup>Optional</sup> <a name="agentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig"></a>

```java
public java.lang.Object getAgentOrchestrationConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>>

agent_orchestration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfigList <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigList" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList;

new CodeguruprofilerProfilingGroupAgentOrchestrationConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get"></a>

```java
public CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>>

---


### CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeguruprofiler_profiling_group.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference;

new CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput">profilingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled">profilingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `profilingEnabledInput`<sup>Optional</sup> <a name="profilingEnabledInput" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput"></a>

```java
public java.lang.Object getProfilingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `profilingEnabled`<sup>Required</sup> <a name="profilingEnabled" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled"></a>

```java
public java.lang.Object getProfilingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>

---



