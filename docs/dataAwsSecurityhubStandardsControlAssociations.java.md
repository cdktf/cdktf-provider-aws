# `dataAwsSecurityhubStandardsControlAssociations` Submodule <a name="`dataAwsSecurityhubStandardsControlAssociations` Submodule" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociations.Builder.create(Construct scope, java.lang.String id)
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
    .securityControlId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.securityControlId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations">standardsControlAssociations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput">securityControlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `standardsControlAssociations`<sup>Required</sup> <a name="standardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations"></a>

```java
public DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList getStandardsControlAssociations();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a>

---

##### `securityControlIdInput`<sup>Optional</sup> <a name="securityControlIdInput" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput"></a>

```java
public java.lang.String getSecurityControlIdInput();
```

- *Type:* java.lang.String

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId"></a>

```java
public java.lang.String getSecurityControlId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubStandardsControlAssociationsConfig <a name="DataAwsSecurityhubStandardsControlAssociationsConfig" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociationsConfig;

DataAwsSecurityhubStandardsControlAssociationsConfig.builder()
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
    .securityControlId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId"></a>

```java
public java.lang.String getSecurityControlId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations;

DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList;

new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get"></a>

```java
public DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_securityhub_standards_control_associations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference;

new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus">associationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements">relatedRequirements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn">securityControlArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId">securityControlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn">standardsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription">standardsControlDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle">standardsControlTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason">updatedReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associationStatus`<sup>Required</sup> <a name="associationStatus" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus"></a>

```java
public java.lang.String getAssociationStatus();
```

- *Type:* java.lang.String

---

##### `relatedRequirements`<sup>Required</sup> <a name="relatedRequirements" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements"></a>

```java
public java.util.List<java.lang.String> getRelatedRequirements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityControlArn`<sup>Required</sup> <a name="securityControlArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn"></a>

```java
public java.lang.String getSecurityControlArn();
```

- *Type:* java.lang.String

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId"></a>

```java
public java.lang.String getSecurityControlId();
```

- *Type:* java.lang.String

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn"></a>

```java
public java.lang.String getStandardsArn();
```

- *Type:* java.lang.String

---

##### `standardsControlDescription`<sup>Required</sup> <a name="standardsControlDescription" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription"></a>

```java
public java.lang.String getStandardsControlDescription();
```

- *Type:* java.lang.String

---

##### `standardsControlTitle`<sup>Required</sup> <a name="standardsControlTitle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle"></a>

```java
public java.lang.String getStandardsControlTitle();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedReason`<sup>Required</sup> <a name="updatedReason" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason"></a>

```java
public java.lang.String getUpdatedReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue"></a>

```java
public DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a>

---



