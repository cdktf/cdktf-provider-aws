# `athenaWorkgroup` Submodule <a name="`athenaWorkgroup` Submodule" id="@cdktf/provider-aws.athenaWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkgroup <a name="AthenaWorkgroup" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup aws_athena_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroup;

AthenaWorkgroup.Builder.create(Construct scope, java.lang.String id)
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
//  .configuration(AthenaWorkgroupConfiguration)
//  .description(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration"></a>

```java
public void putConfiguration(AthenaWorkgroupConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroup;

AthenaWorkgroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroup;

AthenaWorkgroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroup;

AthenaWorkgroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration"></a>

```java
public AthenaWorkgroupConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput"></a>

```java
public AthenaWorkgroupConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkgroupConfig <a name="AthenaWorkgroupConfig" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfig;

AthenaWorkgroupConfig.builder()
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
//  .configuration(AthenaWorkgroupConfiguration)
//  .description(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration"></a>

```java
public AthenaWorkgroupConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

### AthenaWorkgroupConfiguration <a name="AthenaWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfiguration;

AthenaWorkgroupConfiguration.builder()
//  .bytesScannedCutoffPerQuery(java.lang.Number)
//  .enforceWorkgroupConfiguration(java.lang.Boolean)
//  .enforceWorkgroupConfiguration(IResolvable)
//  .engineVersion(AthenaWorkgroupConfigurationEngineVersion)
//  .executionRole(java.lang.String)
//  .publishCloudwatchMetricsEnabled(java.lang.Boolean)
//  .publishCloudwatchMetricsEnabled(IResolvable)
//  .requesterPaysEnabled(java.lang.Boolean)
//  .requesterPaysEnabled(IResolvable)
//  .resultConfiguration(AthenaWorkgroupConfigurationResultConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration">enforceWorkgroupConfiguration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | engine_version block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | result_configuration block. |

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

##### `enforceWorkgroupConfiguration`<sup>Optional</sup> <a name="enforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration"></a>

```java
public java.lang.Object getEnforceWorkgroupConfiguration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion"></a>

```java
public AthenaWorkgroupConfigurationEngineVersion getEngineVersion();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Object getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled"></a>

```java
public java.lang.Object getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

##### `resultConfiguration`<sup>Optional</sup> <a name="resultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfiguration getResultConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

### AthenaWorkgroupConfigurationEngineVersion <a name="AthenaWorkgroupConfigurationEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationEngineVersion;

AthenaWorkgroupConfigurationEngineVersion.builder()
//  .selectedEngineVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

### AthenaWorkgroupConfigurationResultConfiguration <a name="AthenaWorkgroupConfigurationResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfiguration;

AthenaWorkgroupConfigurationResultConfiguration.builder()
//  .aclConfiguration(AthenaWorkgroupConfigurationResultConfigurationAclConfiguration)
//  .encryptionConfiguration(AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration)
//  .expectedBucketOwner(java.lang.String)
//  .outputLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationAclConfiguration getAclConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

### AthenaWorkgroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;

AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.builder()
    .s3AclOption(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}. |

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;

AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.builder()
//  .encryptionOption(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkgroupConfigurationEngineVersionOutputReference <a name="AthenaWorkgroupConfigurationEngineVersionOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference;

new AthenaWorkgroupConfigurationEngineVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```java
public void resetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```java
public java.lang.String getEffectiveEngineVersion();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```java
public java.lang.String getSelectedEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```java
public AthenaWorkgroupConfigurationEngineVersion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---


### AthenaWorkgroupConfigurationOutputReference <a name="AthenaWorkgroupConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationOutputReference;

new AthenaWorkgroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration">putResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration">resetEnforceWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration">resetResultConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion"></a>

```java
public void putEngineVersion(AthenaWorkgroupConfigurationEngineVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `putResultConfiguration` <a name="putResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration"></a>

```java
public void putResultConfiguration(AthenaWorkgroupConfigurationResultConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```java
public void resetBytesScannedCutoffPerQuery()
```

##### `resetEnforceWorkgroupConfiguration` <a name="resetEnforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration"></a>

```java
public void resetEnforceWorkgroupConfiguration()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```java
public void resetPublishCloudwatchMetricsEnabled()
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```java
public void resetRequesterPaysEnabled()
```

##### `resetResultConfiguration` <a name="resetResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration"></a>

```java
public void resetResultConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput">enforceWorkgroupConfigurationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput">resultConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration">enforceWorkgroupConfiguration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion"></a>

```java
public AthenaWorkgroupConfigurationEngineVersionOutputReference getEngineVersion();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a>

---

##### `resultConfiguration`<sup>Required</sup> <a name="resultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationOutputReference getResultConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a>

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQueryInput();
```

- *Type:* java.lang.Number

---

##### `enforceWorkgroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkgroupConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput"></a>

```java
public java.lang.Object getEnforceWorkgroupConfigurationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput"></a>

```java
public AthenaWorkgroupConfigurationEngineVersion getEngineVersionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```java
public java.lang.Object getPublishCloudwatchMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```java
public java.lang.Object getRequesterPaysEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resultConfigurationInput`<sup>Optional</sup> <a name="resultConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```java
public AthenaWorkgroupConfigurationResultConfiguration getResultConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

---

##### `enforceWorkgroupConfiguration`<sup>Required</sup> <a name="enforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration"></a>

```java
public java.lang.Object getEnforceWorkgroupConfiguration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Object getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```java
public java.lang.Object getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaWorkgroupConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference;

new AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```java
public java.lang.String getS3AclOptionInput();
```

- *Type:* java.lang.String

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationAclConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;

new AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```java
public void resetEncryptionOption()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_workgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference;

new AthenaWorkgroupConfigurationResultConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```java
public void putAclConfiguration(AthenaWorkgroupConfigurationResultConfigurationAclConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```java
public void resetAclConfiguration()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference getAclConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationAclConfiguration getAclConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```java
public AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```java
public java.lang.String getOutputLocationInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaWorkgroupConfigurationResultConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---



