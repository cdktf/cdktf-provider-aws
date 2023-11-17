# `data_aws_organizations_policies`

Refer to the Terraform Registory for docs: [`data_aws_organizations_policies`](https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies).

# `dataAwsOrganizationsPolicies` Submodule <a name="`dataAwsOrganizationsPolicies` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsPolicies <a name="DataAwsOrganizationsPolicies" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies aws_organizations_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPolicies;

DataAwsOrganizationsPolicies.Builder.create(Construct scope, java.lang.String id)
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
    .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#filter DataAwsOrganizationsPolicies#filter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#id DataAwsOrganizationsPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#filter DataAwsOrganizationsPolicies#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#id DataAwsOrganizationsPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOrganizationsPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPolicies;

DataAwsOrganizationsPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPolicies;

DataAwsOrganizationsPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPolicies;

DataAwsOrganizationsPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPolicies;

DataAwsOrganizationsPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOrganizationsPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOrganizationsPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOrganizationsPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOrganizationsPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsPoliciesConfig <a name="DataAwsOrganizationsPoliciesConfig" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_organizations_policies.DataAwsOrganizationsPoliciesConfig;

DataAwsOrganizationsPoliciesConfig.builder()
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
    .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#filter DataAwsOrganizationsPolicies#filter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#id DataAwsOrganizationsPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#filter DataAwsOrganizationsPolicies#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsPolicies.DataAwsOrganizationsPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/data-sources/organizations_policies#id DataAwsOrganizationsPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



