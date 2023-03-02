# `connectQuickConnect` Submodule <a name="`connectQuickConnect` Submodule" id="@cdktf/provider-aws.connectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQuickConnect <a name="ConnectQuickConnect" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect aws_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .quickConnectConfig(ConnectQuickConnectQuickConnectConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | quick_connect_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}.

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

quick_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig">putQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putQuickConnectConfig` <a name="putQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig"></a>

```java
public void putQuickConnectConfig(ConnectQuickConnectQuickConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId">quickConnectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput">quickConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigOutputReference getQuickConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a>

---

##### `quickConnectId`<sup>Required</sup> <a name="quickConnectId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId"></a>

```java
public java.lang.String getQuickConnectId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quickConnectConfigInput`<sup>Optional</sup> <a name="quickConnectConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput"></a>

```java
public ConnectQuickConnectQuickConnectConfig getQuickConnectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQuickConnectConfig <a name="ConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectConfig;

ConnectQuickConnectConfig.builder()
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
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .quickConnectConfig(ConnectQuickConnectQuickConnectConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | quick_connect_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}.

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfig getQuickConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

quick_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}.

---

### ConnectQuickConnectQuickConnectConfig <a name="ConnectQuickConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfig;

ConnectQuickConnectQuickConnectConfig.builder()
    .quickConnectType(java.lang.String)
//  .phoneConfig(IResolvable)
//  .phoneConfig(java.util.List<ConnectQuickConnectQuickConnectConfigPhoneConfig>)
//  .queueConfig(IResolvable)
//  .queueConfig(java.util.List<ConnectQuickConnectQuickConnectConfigQueueConfig>)
//  .userConfig(IResolvable)
//  .userConfig(java.util.List<ConnectQuickConnectQuickConnectConfigUserConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType">quickConnectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig">phoneConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>></code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig">queueConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>></code> | queue_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig">userConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>></code> | user_config block. |

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType"></a>

```java
public java.lang.String getQuickConnectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}.

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig"></a>

```java
public java.lang.Object getPhoneConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>>

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

##### `queueConfig`<sup>Optional</sup> <a name="queueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig"></a>

```java
public java.lang.Object getQueueConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>>

queue_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

##### `userConfig`<sup>Optional</sup> <a name="userConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig"></a>

```java
public java.lang.Object getUserConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>>

user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

### ConnectQuickConnectQuickConnectConfigPhoneConfig <a name="ConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigPhoneConfig;

ConnectQuickConnectQuickConnectConfigPhoneConfig.builder()
    .phoneNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}. |

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}.

---

### ConnectQuickConnectQuickConnectConfigQueueConfig <a name="ConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigQueueConfig;

ConnectQuickConnectQuickConnectConfigQueueConfig.builder()
    .contactFlowId(java.lang.String)
    .queueId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId">queueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}. |

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}.

---

### ConnectQuickConnectQuickConnectConfigUserConfig <a name="ConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigUserConfig;

ConnectQuickConnectQuickConnectConfigUserConfig.builder()
    .contactFlowId(java.lang.String)
    .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}. |

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQuickConnectQuickConnectConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig">putQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig">putUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig">resetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig">resetQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig">resetUserConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig"></a>

```java
public void putPhoneConfig(IResolvable OR java.util.List<ConnectQuickConnectQuickConnectConfigPhoneConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>>

---

##### `putQueueConfig` <a name="putQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig"></a>

```java
public void putQueueConfig(IResolvable OR java.util.List<ConnectQuickConnectQuickConnectConfigQueueConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>>

---

##### `putUserConfig` <a name="putUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig"></a>

```java
public void putUserConfig(IResolvable OR java.util.List<ConnectQuickConnectQuickConnectConfigUserConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>>

---

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig"></a>

```java
public void resetPhoneConfig()
```

##### `resetQueueConfig` <a name="resetQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig"></a>

```java
public void resetQueueConfig()
```

##### `resetUserConfig` <a name="resetUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig"></a>

```java
public void resetUserConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">userConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput">phoneConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput">queueConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput">quickConnectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput">userConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quickConnectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigPhoneConfigList getPhoneConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a>

---

##### `queueConfig`<sup>Required</sup> <a name="queueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigQueueConfigList getQueueConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a>

---

##### `userConfig`<sup>Required</sup> <a name="userConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigUserConfigList getUserConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a>

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput"></a>

```java
public java.lang.Object getPhoneConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>>

---

##### `queueConfigInput`<sup>Optional</sup> <a name="queueConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput"></a>

```java
public java.lang.Object getQueueConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>>

---

##### `quickConnectTypeInput`<sup>Optional</sup> <a name="quickConnectTypeInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput"></a>

```java
public java.lang.String getQuickConnectTypeInput();
```

- *Type:* java.lang.String

---

##### `userConfigInput`<sup>Optional</sup> <a name="userConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput"></a>

```java
public java.lang.Object getUserConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```java
public java.lang.String getQuickConnectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```java
public ConnectQuickConnectQuickConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigList <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigPhoneConfigList;

new ConnectQuickConnectQuickConnectConfigPhoneConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get"></a>

```java
public ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### ConnectQuickConnectQuickConnectConfigQueueConfigList <a name="ConnectQuickConnectQuickConnectConfigQueueConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigQueueConfigList;

new ConnectQuickConnectQuickConnectConfigQueueConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get"></a>

```java
public ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>>

---


### ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput">queueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput"></a>

```java
public java.lang.String getContactFlowIdInput();
```

- *Type:* java.lang.String

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput"></a>

```java
public java.lang.String getQueueIdInput();
```

- *Type:* java.lang.String

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### ConnectQuickConnectQuickConnectConfigUserConfigList <a name="ConnectQuickConnectQuickConnectConfigUserConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigUserConfigList;

new ConnectQuickConnectQuickConnectConfigUserConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get"></a>

```java
public ConnectQuickConnectQuickConnectConfigUserConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>>

---


### ConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_quick_connect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput"></a>

```java
public java.lang.String getContactFlowIdInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a> OR com.hashicorp.cdktf.IResolvable

---



