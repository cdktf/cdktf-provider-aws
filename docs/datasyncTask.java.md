# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktf/provider-aws.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktf/provider-aws.datasyncTask.DatasyncTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task aws_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTask;

DatasyncTask.Builder.create(Construct scope, java.lang.String id)
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
    .destinationLocationArn(java.lang.String)
    .sourceLocationArn(java.lang.String)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .excludes(DatasyncTaskExcludes)
//  .id(java.lang.String)
//  .includes(DatasyncTaskIncludes)
//  .name(java.lang.String)
//  .options(DatasyncTaskOptions)
//  .schedule(DatasyncTaskSchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatasyncTaskTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.excludes"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.includes"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes">resetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putExcludes` <a name="putExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes"></a>

```java
public void putExcludes(DatasyncTaskExcludes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `putIncludes` <a name="putIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes"></a>

```java
public void putIncludes(DatasyncTaskIncludes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions"></a>

```java
public void putOptions(DatasyncTaskOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule"></a>

```java
public void putSchedule(DatasyncTaskSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts"></a>

```java
public void putTimeouts(DatasyncTaskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

---

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```java
public void resetCloudwatchLogGroupArn()
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId"></a>

```java
public void resetId()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes"></a>

```java
public void resetIncludes()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName"></a>

```java
public void resetName()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTask;

DatasyncTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTask;

DatasyncTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTask;

DatasyncTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destinationLocationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput">includesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput">sourceLocationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes"></a>

```java
public DatasyncTaskExcludesOutputReference getExcludes();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes"></a>

```java
public DatasyncTaskIncludesOutputReference getIncludes();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options"></a>

```java
public DatasyncTaskOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule"></a>

```java
public DatasyncTaskScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts"></a>

```java
public DatasyncTaskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a>

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `destinationLocationArnInput`<sup>Optional</sup> <a name="destinationLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```java
public java.lang.String getDestinationLocationArnInput();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput"></a>

```java
public DatasyncTaskExcludes getExcludesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput"></a>

```java
public DatasyncTaskIncludes getIncludesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput"></a>

```java
public DatasyncTaskOptions getOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```java
public DatasyncTaskSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `sourceLocationArnInput`<sup>Optional</sup> <a name="sourceLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```java
public java.lang.String getSourceLocationArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```java
public java.lang.String getDestinationLocationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskConfig;

DatasyncTaskConfig.builder()
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
    .destinationLocationArn(java.lang.String)
    .sourceLocationArn(java.lang.String)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .excludes(DatasyncTaskExcludes)
//  .id(java.lang.String)
//  .includes(DatasyncTaskIncludes)
//  .name(java.lang.String)
//  .options(DatasyncTaskOptions)
//  .schedule(DatasyncTaskSchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatasyncTaskTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```java
public java.lang.String getDestinationLocationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```java
public DatasyncTaskExcludes getExcludes();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```java
public DatasyncTaskIncludes getIncludes();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options"></a>

```java
public DatasyncTaskOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```java
public DatasyncTaskSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts"></a>

```java
public DatasyncTaskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskExcludes;

DatasyncTaskExcludes.builder()
//  .filterType(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskIncludes;

DatasyncTaskIncludes.builder()
//  .filterType(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskOptions;

DatasyncTaskOptions.builder()
//  .atime(java.lang.String)
//  .bytesPerSecond(java.lang.Number)
//  .gid(java.lang.String)
//  .logLevel(java.lang.String)
//  .mtime(java.lang.String)
//  .overwriteMode(java.lang.String)
//  .posixPermissions(java.lang.String)
//  .preserveDeletedFiles(java.lang.String)
//  .preserveDevices(java.lang.String)
//  .securityDescriptorCopyFlags(java.lang.String)
//  .taskQueueing(java.lang.String)
//  .transferMode(java.lang.String)
//  .uid(java.lang.String)
//  .verifyMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytesPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwriteMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posixPermissions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserveDevices</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing">taskQueueing</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode">transferMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode">verifyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```java
public java.lang.String getAtime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}.

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="bytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```java
public java.lang.Number getBytesPerSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}.

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```java
public java.lang.String getMtime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}.

---

##### `overwriteMode`<sup>Optional</sup> <a name="overwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```java
public java.lang.String getOverwriteMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

##### `posixPermissions`<sup>Optional</sup> <a name="posixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```java
public java.lang.String getPosixPermissions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="preserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```java
public java.lang.String getPreserveDeletedFiles();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

##### `preserveDevices`<sup>Optional</sup> <a name="preserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```java
public java.lang.String getPreserveDevices();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

##### `securityDescriptorCopyFlags`<sup>Optional</sup> <a name="securityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}.

---

##### `taskQueueing`<sup>Optional</sup> <a name="taskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```java
public java.lang.String getTaskQueueing();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

##### `transferMode`<sup>Optional</sup> <a name="transferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```java
public java.lang.String getTransferMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}.

---

##### `verifyMode`<sup>Optional</sup> <a name="verifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```java
public java.lang.String getVerifyMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskSchedule;

DatasyncTaskSchedule.builder()
    .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

### DatasyncTaskTimeouts <a name="DatasyncTaskTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskTimeouts;

DatasyncTaskTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskExcludesOutputReference;

new DatasyncTaskExcludesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```java
public DatasyncTaskExcludes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskIncludesOutputReference;

new DatasyncTaskIncludesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```java
public DatasyncTaskIncludes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskOptionsOutputReference;

new DatasyncTaskOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">resetAtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">resetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">resetMtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">resetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">resetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">resetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">resetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">resetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">resetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">resetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">resetVerifyMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtime` <a name="resetAtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```java
public void resetAtime()
```

##### `resetBytesPerSecond` <a name="resetBytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```java
public void resetBytesPerSecond()
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMtime` <a name="resetMtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```java
public void resetMtime()
```

##### `resetOverwriteMode` <a name="resetOverwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```java
public void resetOverwriteMode()
```

##### `resetPosixPermissions` <a name="resetPosixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```java
public void resetPosixPermissions()
```

##### `resetPreserveDeletedFiles` <a name="resetPreserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```java
public void resetPreserveDeletedFiles()
```

##### `resetPreserveDevices` <a name="resetPreserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```java
public void resetPreserveDevices()
```

##### `resetSecurityDescriptorCopyFlags` <a name="resetSecurityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```java
public void resetSecurityDescriptorCopyFlags()
```

##### `resetTaskQueueing` <a name="resetTaskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```java
public void resetTaskQueueing()
```

##### `resetTransferMode` <a name="resetTransferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```java
public void resetTransferMode()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```java
public void resetUid()
```

##### `resetVerifyMode` <a name="resetVerifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```java
public void resetVerifyMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytesPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwriteModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posixPermissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserveDeletedFilesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserveDevicesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">securityDescriptorCopyFlagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">taskQueueingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transferModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verifyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atimeInput`<sup>Optional</sup> <a name="atimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```java
public java.lang.String getAtimeInput();
```

- *Type:* java.lang.String

---

##### `bytesPerSecondInput`<sup>Optional</sup> <a name="bytesPerSecondInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```java
public java.lang.Number getBytesPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```java
public java.lang.String getGidInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `mtimeInput`<sup>Optional</sup> <a name="mtimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```java
public java.lang.String getMtimeInput();
```

- *Type:* java.lang.String

---

##### `overwriteModeInput`<sup>Optional</sup> <a name="overwriteModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```java
public java.lang.String getOverwriteModeInput();
```

- *Type:* java.lang.String

---

##### `posixPermissionsInput`<sup>Optional</sup> <a name="posixPermissionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```java
public java.lang.String getPosixPermissionsInput();
```

- *Type:* java.lang.String

---

##### `preserveDeletedFilesInput`<sup>Optional</sup> <a name="preserveDeletedFilesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```java
public java.lang.String getPreserveDeletedFilesInput();
```

- *Type:* java.lang.String

---

##### `preserveDevicesInput`<sup>Optional</sup> <a name="preserveDevicesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```java
public java.lang.String getPreserveDevicesInput();
```

- *Type:* java.lang.String

---

##### `securityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="securityDescriptorCopyFlagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlagsInput();
```

- *Type:* java.lang.String

---

##### `taskQueueingInput`<sup>Optional</sup> <a name="taskQueueingInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```java
public java.lang.String getTaskQueueingInput();
```

- *Type:* java.lang.String

---

##### `transferModeInput`<sup>Optional</sup> <a name="transferModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```java
public java.lang.String getTransferModeInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `verifyModeInput`<sup>Optional</sup> <a name="verifyModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```java
public java.lang.String getVerifyModeInput();
```

- *Type:* java.lang.String

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```java
public java.lang.String getAtime();
```

- *Type:* java.lang.String

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```java
public java.lang.Number getBytesPerSecond();
```

- *Type:* java.lang.Number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```java
public java.lang.String getMtime();
```

- *Type:* java.lang.String

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```java
public java.lang.String getOverwriteMode();
```

- *Type:* java.lang.String

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```java
public java.lang.String getPosixPermissions();
```

- *Type:* java.lang.String

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```java
public java.lang.String getPreserveDeletedFiles();
```

- *Type:* java.lang.String

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```java
public java.lang.String getPreserveDevices();
```

- *Type:* java.lang.String

---

##### `securityDescriptorCopyFlags`<sup>Required</sup> <a name="securityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlags();
```

- *Type:* java.lang.String

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```java
public java.lang.String getTaskQueueing();
```

- *Type:* java.lang.String

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```java
public java.lang.String getTransferMode();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```java
public java.lang.String getVerifyMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```java
public DatasyncTaskOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskScheduleOutputReference;

new DatasyncTaskScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```java
public DatasyncTaskSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTimeoutsOutputReference <a name="DatasyncTaskTimeoutsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_task.DatasyncTaskTimeoutsOutputReference;

new DatasyncTaskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



