# `appconfigDeploymentStrategy` Submodule <a name="`appconfigDeploymentStrategy` Submodule" id="@cdktf/provider-aws.appconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeploymentStrategy <a name="AppconfigDeploymentStrategy" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy aws_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appconfig_deployment_strategy.AppconfigDeploymentStrategy;

AppconfigDeploymentStrategy.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentDurationInMinutes(java.lang.Number)
    .growthFactor(java.lang.Number)
    .name(java.lang.String)
    .replicateTo(java.lang.String)
//  .description(java.lang.String)
//  .finalBakeTimeInMinutes(java.lang.Number)
//  .growthType(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.growthFactor">growthFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.replicateTo">replicateTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.growthType">growthType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.deploymentDurationInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}.

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.growthFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}.

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.replicateTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}.

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="finalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.finalBakeTimeInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}.

---

##### `growthType`<sup>Optional</sup> <a name="growthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.growthType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes">resetFinalBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType">resetGrowthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFinalBakeTimeInMinutes` <a name="resetFinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes"></a>

```java
public void resetFinalBakeTimeInMinutes()
```

##### `resetGrowthType` <a name="resetGrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType"></a>

```java
public void resetGrowthType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appconfig_deployment_strategy.AppconfigDeploymentStrategy;

AppconfigDeploymentStrategy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appconfig_deployment_strategy.AppconfigDeploymentStrategy;

AppconfigDeploymentStrategy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appconfig_deployment_strategy.AppconfigDeploymentStrategy;

AppconfigDeploymentStrategy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput">deploymentDurationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput">finalBakeTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput">growthFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput">growthTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput">replicateToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor">growthFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType">growthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo">replicateTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deploymentDurationInMinutesInput`<sup>Optional</sup> <a name="deploymentDurationInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput"></a>

```java
public java.lang.Number getDeploymentDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `finalBakeTimeInMinutesInput`<sup>Optional</sup> <a name="finalBakeTimeInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput"></a>

```java
public java.lang.Number getFinalBakeTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `growthFactorInput`<sup>Optional</sup> <a name="growthFactorInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput"></a>

```java
public java.lang.Number getGrowthFactorInput();
```

- *Type:* java.lang.Number

---

##### `growthTypeInput`<sup>Optional</sup> <a name="growthTypeInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput"></a>

```java
public java.lang.String getGrowthTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replicateToInput`<sup>Optional</sup> <a name="replicateToInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput"></a>

```java
public java.lang.String getReplicateToInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```java
public java.lang.Number getDeploymentDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="finalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```java
public java.lang.Number getFinalBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor"></a>

```java
public java.lang.Number getGrowthFactor();
```

- *Type:* java.lang.Number

---

##### `growthType`<sup>Required</sup> <a name="growthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType"></a>

```java
public java.lang.String getGrowthType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo"></a>

```java
public java.lang.String getReplicateTo();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentStrategyConfig <a name="AppconfigDeploymentStrategyConfig" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appconfig_deployment_strategy.AppconfigDeploymentStrategyConfig;

AppconfigDeploymentStrategyConfig.builder()
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
    .deploymentDurationInMinutes(java.lang.Number)
    .growthFactor(java.lang.Number)
    .name(java.lang.String)
    .replicateTo(java.lang.String)
//  .description(java.lang.String)
//  .finalBakeTimeInMinutes(java.lang.Number)
//  .growthType(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor">growthFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo">replicateTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType">growthType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes"></a>

```java
public java.lang.Number getDeploymentDurationInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}.

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor"></a>

```java
public java.lang.Number getGrowthFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}.

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo"></a>

```java
public java.lang.String getReplicateTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}.

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="finalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes"></a>

```java
public java.lang.Number getFinalBakeTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}.

---

##### `growthType`<sup>Optional</sup> <a name="growthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType"></a>

```java
public java.lang.String getGrowthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}.

---



