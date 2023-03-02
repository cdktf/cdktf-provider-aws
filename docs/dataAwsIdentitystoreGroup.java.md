# `dataAwsIdentitystoreGroup` Submodule <a name="`dataAwsIdentitystoreGroup` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroup <a name="DataAwsIdentitystoreGroup" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group aws_identitystore_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroup;

DataAwsIdentitystoreGroup.Builder.create(Construct scope, java.lang.String id)
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
    .identityStoreId(java.lang.String)
//  .alternateIdentifier(DataAwsIdentitystoreGroupAlternateIdentifier)
//  .filter(DataAwsIdentitystoreGroupFilter)
//  .groupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.alternateIdentifier">alternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.identityStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `alternateIdentifier`<sup>Optional</sup> <a name="alternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.alternateIdentifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier">putAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier">resetAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlternateIdentifier` <a name="putAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier"></a>

```java
public void putAlternateIdentifier(DataAwsIdentitystoreGroupAlternateIdentifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter"></a>

```java
public void putFilter(DataAwsIdentitystoreGroupFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---

##### `resetAlternateIdentifier` <a name="resetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier"></a>

```java
public void resetAlternateIdentifier()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroup;

DataAwsIdentitystoreGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroup;

DataAwsIdentitystoreGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroup;

DataAwsIdentitystoreGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier">alternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds">externalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput">alternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alternateIdentifier`<sup>Required</sup> <a name="alternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierOutputReference getAlternateIdentifier();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds"></a>

```java
public DataAwsIdentitystoreGroupExternalIdsList getExternalIds();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter"></a>

```java
public DataAwsIdentitystoreGroupFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a>

---

##### `alternateIdentifierInput`<sup>Optional</sup> <a name="alternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifier getAlternateIdentifierInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput"></a>

```java
public DataAwsIdentitystoreGroupFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput"></a>

```java
public java.lang.String getIdentityStoreIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupAlternateIdentifier <a name="DataAwsIdentitystoreGroupAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifier;

DataAwsIdentitystoreGroupAlternateIdentifier.builder()
//  .externalId(DataAwsIdentitystoreGroupAlternateIdentifierExternalId)
//  .uniqueAttribute(DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId">externalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute">uniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId getExternalId();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}

---

##### `uniqueAttribute`<sup>Optional</sup> <a name="uniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute getUniqueAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}

---

### DataAwsIdentitystoreGroupAlternateIdentifierExternalId <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifierExternalId;

DataAwsIdentitystoreGroupAlternateIdentifierExternalId.builder()
    .id(java.lang.String)
    .issuer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}.

---

### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute;

DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.builder()
    .attributePath(java.lang.String)
    .attributeValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath">attributePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```java
public java.lang.String getAttributePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

### DataAwsIdentitystoreGroupConfig <a name="DataAwsIdentitystoreGroupConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupConfig;

DataAwsIdentitystoreGroupConfig.builder()
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
    .identityStoreId(java.lang.String)
//  .alternateIdentifier(DataAwsIdentitystoreGroupAlternateIdentifier)
//  .filter(DataAwsIdentitystoreGroupFilter)
//  .groupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier">alternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `alternateIdentifier`<sup>Optional</sup> <a name="alternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifier getAlternateIdentifier();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter"></a>

```java
public DataAwsIdentitystoreGroupFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsIdentitystoreGroupExternalIds <a name="DataAwsIdentitystoreGroupExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupExternalIds;

DataAwsIdentitystoreGroupExternalIds.builder()
    .build();
```


### DataAwsIdentitystoreGroupFilter <a name="DataAwsIdentitystoreGroupFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupFilter;

DataAwsIdentitystoreGroupFilter.builder()
    .attributePath(java.lang.String)
    .attributeValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath">attributePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath"></a>

```java
public java.lang.String getAttributePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference;

new DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference;

new DataAwsIdentitystoreGroupAlternateIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId">putExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute">putUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute">resetUniqueAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalId` <a name="putExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId"></a>

```java
public void putExternalId(DataAwsIdentitystoreGroupAlternateIdentifierExternalId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `putUniqueAttribute` <a name="putUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```java
public void putUniqueAttribute(DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetUniqueAttribute` <a name="resetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```java
public void resetUniqueAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId">externalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute">uniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput">externalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput">uniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference getExternalId();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a>

---

##### `uniqueAttribute`<sup>Required</sup> <a name="uniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference getUniqueAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId getExternalIdInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `uniqueAttributeInput`<sup>Optional</sup> <a name="uniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute getUniqueAttributeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference;

new DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">attributePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">attributePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributePathInput`<sup>Optional</sup> <a name="attributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```java
public java.lang.String getAttributePathInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```java
public java.lang.String getAttributePath();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreGroupExternalIdsList <a name="DataAwsIdentitystoreGroupExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupExternalIdsList;

new DataAwsIdentitystoreGroupExternalIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get"></a>

```java
public DataAwsIdentitystoreGroupExternalIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIdentitystoreGroupExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupExternalIdsOutputReference;

new DataAwsIdentitystoreGroupExternalIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupExternalIds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a>

---


### DataAwsIdentitystoreGroupFilterOutputReference <a name="DataAwsIdentitystoreGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_identitystore_group.DataAwsIdentitystoreGroupFilterOutputReference;

new DataAwsIdentitystoreGroupFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput">attributePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath">attributePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributePathInput`<sup>Optional</sup> <a name="attributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput"></a>

```java
public java.lang.String getAttributePathInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `attributePath`<sup>Required</sup> <a name="attributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath"></a>

```java
public java.lang.String getAttributePath();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue"></a>

```java
public DataAwsIdentitystoreGroupFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---



