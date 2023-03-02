# `ec2ManagedPrefixListEntry` Submodule <a name="`ec2ManagedPrefixListEntry` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixListEntryA <a name="Ec2ManagedPrefixListEntryA" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry aws_ec2_managed_prefix_list_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_managed_prefix_list_entry.Ec2ManagedPrefixListEntryA;

Ec2ManagedPrefixListEntryA.Builder.create(Construct scope, java.lang.String id)
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
    .cidr(java.lang.String)
    .prefixListId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}.

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.prefixListId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_managed_prefix_list_entry.Ec2ManagedPrefixListEntryA;

Ec2ManagedPrefixListEntryA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_managed_prefix_list_entry.Ec2ManagedPrefixListEntryA;

Ec2ManagedPrefixListEntryA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_managed_prefix_list_entry.Ec2ManagedPrefixListEntryA;

Ec2ManagedPrefixListEntryA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput">prefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput"></a>

```java
public java.lang.String getPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListEntryAConfig <a name="Ec2ManagedPrefixListEntryAConfig" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_managed_prefix_list_entry.Ec2ManagedPrefixListEntryAConfig;

Ec2ManagedPrefixListEntryAConfig.builder()
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
    .cidr(java.lang.String)
    .prefixListId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}.

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



