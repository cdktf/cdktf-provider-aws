# `devicefarmDevicePool` Submodule <a name="`devicefarmDevicePool` Submodule" id="@cdktf/provider-aws.devicefarmDevicePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmDevicePool <a name="DevicefarmDevicePool" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool aws_devicefarm_device_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePool;

DevicefarmDevicePool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .projectArn(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<DevicefarmDevicePoolRule>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxDevices(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.projectArn">projectArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.maxDevices">maxDevices</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.projectArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#rule DevicefarmDevicePool#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxDevices`<sup>Optional</sup> <a name="maxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.maxDevices"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices">resetMaxDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<DevicefarmDevicePoolRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId"></a>

```java
public void resetId()
```

##### `resetMaxDevices` <a name="resetMaxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices"></a>

```java
public void resetMaxDevices()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePool;

DevicefarmDevicePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePool;

DevicefarmDevicePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePool;

DevicefarmDevicePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput">maxDevicesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput">projectArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices">maxDevices</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn">projectArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule"></a>

```java
public DevicefarmDevicePoolRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxDevicesInput`<sup>Optional</sup> <a name="maxDevicesInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput"></a>

```java
public java.lang.Number getMaxDevicesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectArnInput`<sup>Optional</sup> <a name="projectArnInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput"></a>

```java
public java.lang.String getProjectArnInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxDevices`<sup>Required</sup> <a name="maxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices"></a>

```java
public java.lang.Number getMaxDevices();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn"></a>

```java
public java.lang.String getProjectArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmDevicePoolConfig <a name="DevicefarmDevicePoolConfig" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePoolConfig;

DevicefarmDevicePoolConfig.builder()
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
    .name(java.lang.String)
    .projectArn(java.lang.String)
    .rule(IResolvable)
    .rule(java.util.List<DevicefarmDevicePoolRule>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxDevices(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn">projectArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices">maxDevices</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#name DevicefarmDevicePool#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn"></a>

```java
public java.lang.String getProjectArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#rule DevicefarmDevicePool#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#description DevicefarmDevicePool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#id DevicefarmDevicePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxDevices`<sup>Optional</sup> <a name="maxDevices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices"></a>

```java
public java.lang.Number getMaxDevices();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags DevicefarmDevicePool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}.

---

### DevicefarmDevicePoolRule <a name="DevicefarmDevicePoolRule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePoolRule;

DevicefarmDevicePoolRule.builder()
//  .attribute(java.lang.String)
//  .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#operator DevicefarmDevicePool#operator}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#value DevicefarmDevicePool#value}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#operator DevicefarmDevicePool#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool#value DevicefarmDevicePool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevicefarmDevicePoolRuleList <a name="DevicefarmDevicePoolRuleList" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePoolRuleList;

new DevicefarmDevicePoolRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get"></a>

```java
public DevicefarmDevicePoolRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>>

---


### DevicefarmDevicePoolRuleOutputReference <a name="DevicefarmDevicePoolRuleOutputReference" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_device_pool.DevicefarmDevicePoolRuleOutputReference;

new DevicefarmDevicePoolRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a> OR com.hashicorp.cdktf.IResolvable

---



