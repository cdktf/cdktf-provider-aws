# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktf/provider-aws.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.Builder.create(Construct scope, java.lang.String id)
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
    .groups(IResolvable)
    .groups(java.util.List<EvidentlyLaunchGroups>)
    .name(java.lang.String)
    .project(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .metricMonitors(IResolvable)
//  .metricMonitors(java.util.List<EvidentlyLaunchMetricMonitors>)
//  .randomizationSalt(java.lang.String)
//  .scheduledSplitsConfig(EvidentlyLaunchScheduledSplitsConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EvidentlyLaunchTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups">groups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors">metricMonitors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `scheduledSplitsConfig`<sup>Optional</sup> <a name="scheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">putMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">putScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">resetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">resetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig">resetScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroups` <a name="putGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```java
public void putGroups(IResolvable OR java.util.List<EvidentlyLaunchGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---

##### `putMetricMonitors` <a name="putMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```java
public void putMetricMonitors(IResolvable OR java.util.List<EvidentlyLaunchMetricMonitors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---

##### `putScheduledSplitsConfig` <a name="putScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```java
public void putScheduledSplitsConfig(EvidentlyLaunchScheduledSplitsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts"></a>

```java
public void putTimeouts(EvidentlyLaunchTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId"></a>

```java
public void resetId()
```

##### `resetMetricMonitors` <a name="resetMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```java
public void resetMetricMonitors()
```

##### `resetRandomizationSalt` <a name="resetRandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```java
public void resetRandomizationSalt()
```

##### `resetScheduledSplitsConfig` <a name="resetScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig"></a>

```java
public void resetScheduledSplitsConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunch;

EvidentlyLaunch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution">execution</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">metricMonitors</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">groupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">metricMonitorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">randomizationSaltInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">scheduledSplitsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `execution`<sup>Required</sup> <a name="execution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution"></a>

```java
public EvidentlyLaunchExecutionList getExecution();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```java
public EvidentlyLaunchGroupsList getGroups();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `metricMonitors`<sup>Required</sup> <a name="metricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```java
public EvidentlyLaunchMetricMonitorsList getMetricMonitors();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigOutputReference getScheduledSplitsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts"></a>

```java
public EvidentlyLaunchTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```java
public java.lang.Object getGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricMonitorsInput`<sup>Optional</sup> <a name="metricMonitorsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```java
public java.lang.Object getMetricMonitorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `randomizationSaltInput`<sup>Optional</sup> <a name="randomizationSaltInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```java
public java.lang.String getRandomizationSaltInput();
```

- *Type:* java.lang.String

---

##### `scheduledSplitsConfigInput`<sup>Optional</sup> <a name="scheduledSplitsConfigInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```java
public EvidentlyLaunchScheduledSplitsConfig getScheduledSplitsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `randomizationSalt`<sup>Required</sup> <a name="randomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```java
public java.lang.String getRandomizationSalt();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchConfig;

EvidentlyLaunchConfig.builder()
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
    .groups(IResolvable)
    .groups(java.util.List<EvidentlyLaunchGroups>)
    .name(java.lang.String)
    .project(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .metricMonitors(IResolvable)
//  .metricMonitors(java.util.List<EvidentlyLaunchMetricMonitors>)
//  .randomizationSalt(java.lang.String)
//  .scheduledSplitsConfig(EvidentlyLaunchScheduledSplitsConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EvidentlyLaunchTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">groups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">metricMonitors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">randomizationSalt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```java
public java.lang.Object getGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```java
public java.lang.Object getMetricMonitors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```java
public java.lang.String getRandomizationSalt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `scheduledSplitsConfig`<sup>Optional</sup> <a name="scheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```java
public EvidentlyLaunchScheduledSplitsConfig getScheduledSplitsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts"></a>

```java
public EvidentlyLaunchTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

### EvidentlyLaunchExecution <a name="EvidentlyLaunchExecution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchExecution;

EvidentlyLaunchExecution.builder()
    .build();
```


### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchGroups;

EvidentlyLaunchGroups.builder()
    .feature(java.lang.String)
    .name(java.lang.String)
    .variation(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">feature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">variation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```java
public java.lang.String getVariation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchMetricMonitors;

EvidentlyLaunchMetricMonitors.builder()
    .metricDefinition(EvidentlyLaunchMetricMonitorsMetricDefinition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition">metricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | metric_definition block. |

---

##### `metricDefinition`<sup>Required</sup> <a name="metricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition"></a>

```java
public EvidentlyLaunchMetricMonitorsMetricDefinition getMetricDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

metric_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}

---

### EvidentlyLaunchMetricMonitorsMetricDefinition <a name="EvidentlyLaunchMetricMonitorsMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchMetricMonitorsMetricDefinition;

EvidentlyLaunchMetricMonitorsMetricDefinition.builder()
    .entityIdKey(java.lang.String)
    .name(java.lang.String)
    .valueKey(java.lang.String)
//  .eventPattern(java.lang.String)
//  .unitLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey">entityIdKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey"></a>

```java
public java.lang.String getEntityIdKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfig;

EvidentlyLaunchScheduledSplitsConfig.builder()
    .steps(IResolvable)
    .steps(java.util.List<EvidentlyLaunchScheduledSplitsConfigSteps>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>></code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps"></a>

```java
public java.lang.Object getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

### EvidentlyLaunchScheduledSplitsConfigSteps <a name="EvidentlyLaunchScheduledSplitsConfigSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigSteps;

EvidentlyLaunchScheduledSplitsConfigSteps.builder()
    .groupWeights(java.util.Map<java.lang.String, java.lang.Number>)
    .startTime(java.lang.String)
//  .segmentOverrides(IResolvable)
//  .segmentOverrides(java.util.List<EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights">groupWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides">segmentOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>></code> | segment_overrides block. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getGroupWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `segmentOverrides`<sup>Optional</sup> <a name="segmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides"></a>

```java
public java.lang.Object getSegmentOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>>

segment_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}

---

### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides;

EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.builder()
    .evaluationOrder(java.lang.Number)
    .segment(java.lang.String)
    .weights(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder">evaluationOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment">segment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights">weights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `evaluationOrder`<sup>Required</sup> <a name="evaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder"></a>

```java
public java.lang.Number getEvaluationOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment"></a>

```java
public java.lang.String getSegment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchTimeouts <a name="EvidentlyLaunchTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchTimeouts;

EvidentlyLaunchTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionList <a name="EvidentlyLaunchExecutionList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchExecutionList;

new EvidentlyLaunchExecutionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get"></a>

```java
public EvidentlyLaunchExecutionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EvidentlyLaunchExecutionOutputReference <a name="EvidentlyLaunchExecutionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchExecutionOutputReference;

new EvidentlyLaunchExecutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime">endedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime">startedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endedTime`<sup>Required</sup> <a name="endedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime"></a>

```java
public java.lang.String getEndedTime();
```

- *Type:* java.lang.String

---

##### `startedTime`<sup>Required</sup> <a name="startedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime"></a>

```java
public java.lang.String getStartedTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue"></a>

```java
public EvidentlyLaunchExecution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchGroupsList;

new EvidentlyLaunchGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```java
public EvidentlyLaunchGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>>

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchGroupsOutputReference;

new EvidentlyLaunchGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">featureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```java
public java.lang.String getFeatureInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```java
public java.lang.String getVariationInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```java
public java.lang.String getVariation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchMetricMonitorsList;

new EvidentlyLaunchMetricMonitorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```java
public EvidentlyLaunchMetricMonitorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>>

---


### EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference <a name="EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference;

new EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern"></a>

```java
public void resetEventPattern()
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel"></a>

```java
public void resetUnitLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput">entityIdKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey">entityIdKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdKeyInput`<sup>Optional</sup> <a name="entityIdKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput"></a>

```java
public java.lang.String getEntityIdKeyInput();
```

- *Type:* java.lang.String

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput"></a>

```java
public java.lang.String getEventPatternInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput"></a>

```java
public java.lang.String getUnitLabelInput();
```

- *Type:* java.lang.String

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput"></a>

```java
public java.lang.String getValueKeyInput();
```

- *Type:* java.lang.String

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey"></a>

```java
public java.lang.String getEntityIdKey();
```

- *Type:* java.lang.String

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue"></a>

```java
public EvidentlyLaunchMetricMonitorsMetricDefinition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchMetricMonitorsOutputReference;

new EvidentlyLaunchMetricMonitorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition">putMetricDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinition` <a name="putMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition"></a>

```java
public void putMetricDefinition(EvidentlyLaunchMetricMonitorsMetricDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition">metricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput">metricDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDefinition`<sup>Required</sup> <a name="metricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition"></a>

```java
public EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference getMetricDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a>

---

##### `metricDefinitionInput`<sup>Optional</sup> <a name="metricDefinitionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput"></a>

```java
public EvidentlyLaunchMetricMonitorsMetricDefinition getMetricDefinitionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigOutputReference;

new EvidentlyLaunchScheduledSplitsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps">putSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable OR java.util.List<EvidentlyLaunchScheduledSplitsConfigSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput"></a>

```java
public java.lang.Object getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```java
public EvidentlyLaunchScheduledSplitsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigStepsList <a name="EvidentlyLaunchScheduledSplitsConfigStepsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigStepsList;

new EvidentlyLaunchScheduledSplitsConfigStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>>

---


### EvidentlyLaunchScheduledSplitsConfigStepsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference;

new EvidentlyLaunchScheduledSplitsConfigStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides">putSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides">resetSegmentOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentOverrides` <a name="putSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides"></a>

```java
public void putSegmentOverrides(IResolvable OR java.util.List<EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>>

---

##### `resetSegmentOverrides` <a name="resetSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides"></a>

```java
public void resetSegmentOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides">segmentOverrides</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput">groupWeightsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput">segmentOverridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights">groupWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentOverrides`<sup>Required</sup> <a name="segmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList getSegmentOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a>

---

##### `groupWeightsInput`<sup>Optional</sup> <a name="groupWeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getGroupWeightsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `segmentOverridesInput`<sup>Optional</sup> <a name="segmentOverridesInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput"></a>

```java
public java.lang.Object getSegmentOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getGroupWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList;

new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get"></a>

```java
public EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>>

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference;

new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput">evaluationOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput">segmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput">weightsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder">evaluationOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights">weights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationOrderInput`<sup>Optional</sup> <a name="evaluationOrderInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```java
public java.lang.Number getEvaluationOrderInput();
```

- *Type:* java.lang.Number

---

##### `segmentInput`<sup>Optional</sup> <a name="segmentInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput"></a>

```java
public java.lang.String getSegmentInput();
```

- *Type:* java.lang.String

---

##### `weightsInput`<sup>Optional</sup> <a name="weightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getWeightsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `evaluationOrder`<sup>Required</sup> <a name="evaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder"></a>

```java
public java.lang.Number getEvaluationOrder();
```

- *Type:* java.lang.Number

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment"></a>

```java
public java.lang.String getSegment();
```

- *Type:* java.lang.String

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyLaunchTimeoutsOutputReference <a name="EvidentlyLaunchTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_launch.EvidentlyLaunchTimeoutsOutputReference;

new EvidentlyLaunchTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



