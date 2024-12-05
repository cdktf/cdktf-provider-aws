# `dataAwsDatazoneEnvironmentBlueprint` Submodule <a name="`dataAwsDatazoneEnvironmentBlueprint` Submodule" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatazoneEnvironmentBlueprint <a name="DataAwsDatazoneEnvironmentBlueprint" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprint;

DataAwsDatazoneEnvironmentBlueprint.Builder.create(Construct scope, java.lang.String id)
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
    .domainId(java.lang.String)
    .managed(java.lang.Boolean)
    .managed(IResolvable)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}.

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.managed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprint;

DataAwsDatazoneEnvironmentBlueprint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprint;

DataAwsDatazoneEnvironmentBlueprint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprint;

DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprint;

DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsDatazoneEnvironmentBlueprint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsDatazoneEnvironmentBlueprint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDatazoneEnvironmentBlueprint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider">blueprintProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput">managedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `blueprintProvider`<sup>Required</sup> <a name="blueprintProvider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider"></a>

```java
public java.lang.String getBlueprintProvider();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput"></a>

```java
public java.lang.Object getManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatazoneEnvironmentBlueprintConfig <a name="DataAwsDatazoneEnvironmentBlueprintConfig" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_datazone_environment_blueprint.DataAwsDatazoneEnvironmentBlueprintConfig;

DataAwsDatazoneEnvironmentBlueprintConfig.builder()
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
    .domainId(java.lang.String)
    .managed(java.lang.Boolean)
    .managed(IResolvable)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}.

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}.

---



