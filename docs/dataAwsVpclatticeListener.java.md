# `dataAwsVpclatticeListener` Submodule <a name="`dataAwsVpclatticeListener` Submodule" id="@cdktf/provider-aws.dataAwsVpclatticeListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeListener <a name="DataAwsVpclatticeListener" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener aws_vpclattice_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListener;

DataAwsVpclatticeListener.Builder.create(Construct scope, java.lang.String id)
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
    .listenerIdentifier(java.lang.String)
    .serviceIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.listenerIdentifier">listenerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.listenerIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}.

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.serviceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpclatticeListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListener;

DataAwsVpclatticeListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListener;

DataAwsVpclatticeListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListener;

DataAwsVpclatticeListener.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListener;

DataAwsVpclatticeListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpclatticeListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsVpclatticeListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpclatticeListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpclatticeListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList">DataAwsVpclatticeListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerId">listenerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifierInput">listenerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifier">listenerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.defaultAction"></a>

```java
public DataAwsVpclatticeListenerDefaultActionList getDefaultAction();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList">DataAwsVpclatticeListenerDefaultActionList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerId"></a>

```java
public java.lang.String getListenerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenerIdentifierInput`<sup>Optional</sup> <a name="listenerIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifierInput"></a>

```java
public java.lang.String getListenerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifierInput"></a>

```java
public java.lang.String getServiceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.listenerIdentifier"></a>

```java
public java.lang.String getListenerIdentifier();
```

- *Type:* java.lang.String

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeListenerConfig <a name="DataAwsVpclatticeListenerConfig" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerConfig;

DataAwsVpclatticeListenerConfig.builder()
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
    .listenerIdentifier(java.lang.String)
    .serviceIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.listenerIdentifier">listenerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.listenerIdentifier"></a>

```java
public java.lang.String getListenerIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}.

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}.

---

### DataAwsVpclatticeListenerDefaultAction <a name="DataAwsVpclatticeListenerDefaultAction" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultAction;

DataAwsVpclatticeListenerDefaultAction.builder()
    .build();
```


### DataAwsVpclatticeListenerDefaultActionFixedResponse <a name="DataAwsVpclatticeListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionFixedResponse;

DataAwsVpclatticeListenerDefaultActionFixedResponse.builder()
    .build();
```


### DataAwsVpclatticeListenerDefaultActionForward <a name="DataAwsVpclatticeListenerDefaultActionForward" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForward;

DataAwsVpclatticeListenerDefaultActionForward.builder()
    .build();
```


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroups <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroups" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups;

DataAwsVpclatticeListenerDefaultActionForwardTargetGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpclatticeListenerDefaultActionFixedResponseList <a name="DataAwsVpclatticeListenerDefaultActionFixedResponseList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionFixedResponseList;

new DataAwsVpclatticeListenerDefaultActionFixedResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get"></a>

```java
public DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference <a name="DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference;

new DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse">DataAwsVpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```java
public DataAwsVpclatticeListenerDefaultActionFixedResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponse">DataAwsVpclatticeListenerDefaultActionFixedResponse</a>

---


### DataAwsVpclatticeListenerDefaultActionForwardList <a name="DataAwsVpclatticeListenerDefaultActionForwardList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForwardList;

new DataAwsVpclatticeListenerDefaultActionForwardList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForwardOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpclatticeListenerDefaultActionForwardOutputReference <a name="DataAwsVpclatticeListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference;

new DataAwsVpclatticeListenerDefaultActionForwardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList">DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward">DataAwsVpclatticeListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList getTargetGroups();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList">DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForward getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForward">DataAwsVpclatticeListenerDefaultActionForward</a>

---


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList;

new DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference <a name="DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference;

new DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups">DataAwsVpclatticeListenerDefaultActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```java
public java.lang.String getTargetGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForwardTargetGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardTargetGroups">DataAwsVpclatticeListenerDefaultActionForwardTargetGroups</a>

---


### DataAwsVpclatticeListenerDefaultActionList <a name="DataAwsVpclatticeListenerDefaultActionList" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionList;

new DataAwsVpclatticeListenerDefaultActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get"></a>

```java
public DataAwsVpclatticeListenerDefaultActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpclatticeListenerDefaultActionOutputReference <a name="DataAwsVpclatticeListenerDefaultActionOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_listener.DataAwsVpclatticeListenerDefaultActionOutputReference;

new DataAwsVpclatticeListenerDefaultActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList">DataAwsVpclatticeListenerDefaultActionFixedResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList">DataAwsVpclatticeListenerDefaultActionForwardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction">DataAwsVpclatticeListenerDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.fixedResponse"></a>

```java
public DataAwsVpclatticeListenerDefaultActionFixedResponseList getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionFixedResponseList">DataAwsVpclatticeListenerDefaultActionFixedResponseList</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.forward"></a>

```java
public DataAwsVpclatticeListenerDefaultActionForwardList getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionForwardList">DataAwsVpclatticeListenerDefaultActionForwardList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultActionOutputReference.property.internalValue"></a>

```java
public DataAwsVpclatticeListenerDefaultAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeListener.DataAwsVpclatticeListenerDefaultAction">DataAwsVpclatticeListenerDefaultAction</a>

---



