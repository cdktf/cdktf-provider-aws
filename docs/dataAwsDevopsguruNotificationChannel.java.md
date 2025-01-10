# `dataAwsDevopsguruNotificationChannel` Submodule <a name="`dataAwsDevopsguruNotificationChannel` Submodule" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDevopsguruNotificationChannel <a name="DataAwsDevopsguruNotificationChannel" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannel;

DataAwsDevopsguruNotificationChannel.Builder.create(Construct scope, java.lang.String id)
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
    .id(java.lang.String)
//  .filters(IResolvable)
//  .filters(java.util.List<DataAwsDevopsguruNotificationChannelFilters>)
//  .sns(IResolvable)
//  .sns(java.util.List<DataAwsDevopsguruNotificationChannelSns>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.filters">filters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.sns">sns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>></code> | sns block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.filters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.sns"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetSns">resetSns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters"></a>

```java
public void putFilters(IResolvable OR java.util.List<DataAwsDevopsguruNotificationChannelFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>>

---

##### `putSns` <a name="putSns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns"></a>

```java
public void putSns(IResolvable OR java.util.List<DataAwsDevopsguruNotificationChannelSns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>>

---

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetSns` <a name="resetSns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetSns"></a>

```java
public void resetSns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannel;

DataAwsDevopsguruNotificationChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannel;

DataAwsDevopsguruNotificationChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannel;

DataAwsDevopsguruNotificationChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannel;

DataAwsDevopsguruNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsDevopsguruNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsDevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsDevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList">DataAwsDevopsguruNotificationChannelFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList">DataAwsDevopsguruNotificationChannelSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filtersInput">filtersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.snsInput">snsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filters"></a>

```java
public DataAwsDevopsguruNotificationChannelFiltersList getFilters();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList">DataAwsDevopsguruNotificationChannelFiltersList</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.sns"></a>

```java
public DataAwsDevopsguruNotificationChannelSnsList getSns();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList">DataAwsDevopsguruNotificationChannelSnsList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filtersInput"></a>

```java
public java.lang.Object getFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.snsInput"></a>

```java
public java.lang.Object getSnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDevopsguruNotificationChannelConfig <a name="DataAwsDevopsguruNotificationChannelConfig" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelConfig;

DataAwsDevopsguruNotificationChannelConfig.builder()
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
    .id(java.lang.String)
//  .filters(IResolvable)
//  .filters(java.util.List<DataAwsDevopsguruNotificationChannelFilters>)
//  .sns(IResolvable)
//  .sns(java.util.List<DataAwsDevopsguruNotificationChannelSns>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.filters">filters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.sns">sns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>></code> | sns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.filters"></a>

```java
public java.lang.Object getFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.sns"></a>

```java
public java.lang.Object getSns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}

---

### DataAwsDevopsguruNotificationChannelFilters <a name="DataAwsDevopsguruNotificationChannelFilters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelFilters;

DataAwsDevopsguruNotificationChannelFilters.builder()
    .build();
```


### DataAwsDevopsguruNotificationChannelSns <a name="DataAwsDevopsguruNotificationChannelSns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelSns;

DataAwsDevopsguruNotificationChannelSns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDevopsguruNotificationChannelFiltersList <a name="DataAwsDevopsguruNotificationChannelFiltersList" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelFiltersList;

new DataAwsDevopsguruNotificationChannelFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get"></a>

```java
public DataAwsDevopsguruNotificationChannelFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>>

---


### DataAwsDevopsguruNotificationChannelFiltersOutputReference <a name="DataAwsDevopsguruNotificationChannelFiltersOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelFiltersOutputReference;

new DataAwsDevopsguruNotificationChannelFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.messageTypes">messageTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageTypes`<sup>Required</sup> <a name="messageTypes" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.messageTypes"></a>

```java
public java.util.List<java.lang.String> getMessageTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>

---


### DataAwsDevopsguruNotificationChannelSnsList <a name="DataAwsDevopsguruNotificationChannelSnsList" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelSnsList;

new DataAwsDevopsguruNotificationChannelSnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get"></a>

```java
public DataAwsDevopsguruNotificationChannelSnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>>

---


### DataAwsDevopsguruNotificationChannelSnsOutputReference <a name="DataAwsDevopsguruNotificationChannelSnsOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_devopsguru_notification_channel.DataAwsDevopsguruNotificationChannelSnsOutputReference;

new DataAwsDevopsguruNotificationChannelSnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>

---



