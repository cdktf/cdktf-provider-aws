# `dataAwsIdentitystoreGroups` Submodule <a name="`dataAwsIdentitystoreGroups` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroups <a name="DataAwsIdentitystoreGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups aws_identitystore_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroups;

DataAwsIdentitystoreGroups.Builder.create(Construct scope, java.lang.String id)
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
    .identityStoreId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.Initializer.parameter.identityStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroups;

DataAwsIdentitystoreGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroups;

DataAwsIdentitystoreGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroups;

DataAwsIdentitystoreGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroups;

DataAwsIdentitystoreGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsIdentitystoreGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsIdentitystoreGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsIdentitystoreGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.groups"></a>

```java
public DataAwsIdentitystoreGroupsGroupsList getGroups();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList">DataAwsIdentitystoreGroupsGroupsList</a>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreIdInput"></a>

```java
public java.lang.String getIdentityStoreIdInput();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupsConfig <a name="DataAwsIdentitystoreGroupsConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsConfig;

DataAwsIdentitystoreGroupsConfig.builder()
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
    .identityStoreId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsConfig.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}.

---

### DataAwsIdentitystoreGroupsGroups <a name="DataAwsIdentitystoreGroupsGroups" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroups;

DataAwsIdentitystoreGroupsGroups.builder()
    .build();
```


### DataAwsIdentitystoreGroupsGroupsExternalIds <a name="DataAwsIdentitystoreGroupsGroupsExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroupsExternalIds;

DataAwsIdentitystoreGroupsGroupsExternalIds.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupsGroupsExternalIdsList <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroupsExternalIdsList;

new DataAwsIdentitystoreGroupsGroupsExternalIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get"></a>

```java
public DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference;

new DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupsGroupsExternalIds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIds">DataAwsIdentitystoreGroupsGroupsExternalIds</a>

---


### DataAwsIdentitystoreGroupsGroupsList <a name="DataAwsIdentitystoreGroupsGroupsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroupsList;

new DataAwsIdentitystoreGroupsGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get"></a>

```java
public DataAwsIdentitystoreGroupsGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIdentitystoreGroupsGroupsOutputReference <a name="DataAwsIdentitystoreGroupsGroupsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_groups.DataAwsIdentitystoreGroupsGroupsOutputReference;

new DataAwsIdentitystoreGroupsGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.externalIds"></a>

```java
public DataAwsIdentitystoreGroupsGroupsExternalIdsList getExternalIds();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsExternalIdsList">DataAwsIdentitystoreGroupsGroupsExternalIdsList</a>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroupsOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupsGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroups.DataAwsIdentitystoreGroupsGroups">DataAwsIdentitystoreGroupsGroups</a>

---



