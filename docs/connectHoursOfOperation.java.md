# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktf/provider-aws.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation aws_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.Builder.create(Construct scope, java.lang.String id)
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
    .config(IResolvable)
    .config(java.util.List<ConnectHoursOfOperationConfigA>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<ConnectHoursOfOperationConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```java
public ConnectHoursOfOperationConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```java
public java.lang.String getHoursOfOperationArn();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId"></a>

```java
public java.lang.String getHoursOfOperationId();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfig;

ConnectHoursOfOperationConfig.builder()
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
    .config(IResolvable)
    .config(java.util.List<ConnectHoursOfOperationConfigA>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}.

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigA;

ConnectHoursOfOperationConfigA.builder()
    .day(java.lang.String)
    .endTime(ConnectHoursOfOperationConfigEndTime)
    .startTime(ConnectHoursOfOperationConfigStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```java
public ConnectHoursOfOperationConfigEndTime getEndTime();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```java
public ConnectHoursOfOperationConfigStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigEndTime;

ConnectHoursOfOperationConfigEndTime.builder()
    .hours(java.lang.Number)
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigStartTime;

ConnectHoursOfOperationConfigStartTime.builder()
    .hours(java.lang.Number)
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigAList;

new ConnectHoursOfOperationConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```java
public ConnectHoursOfOperationConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigAOutputReference;

new ConnectHoursOfOperationConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```java
public void putEndTime(ConnectHoursOfOperationConfigEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```java
public void putStartTime(ConnectHoursOfOperationConfigStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">endTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```java
public ConnectHoursOfOperationConfigEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```java
public ConnectHoursOfOperationConfigStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```java
public ConnectHoursOfOperationConfigEndTime getEndTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```java
public ConnectHoursOfOperationConfigStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a> OR com.hashicorp.cdktf.IResolvable

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigEndTimeOutputReference;

new ConnectHoursOfOperationConfigEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```java
public ConnectHoursOfOperationConfigEndTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_hours_of_operation.ConnectHoursOfOperationConfigStartTimeOutputReference;

new ConnectHoursOfOperationConfigStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```java
public ConnectHoursOfOperationConfigStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---



