# `dataAwsServicequotasTemplates` Submodule <a name="`dataAwsServicequotasTemplates` Submodule" id="@cdktf/provider-aws.dataAwsServicequotasTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicequotasTemplates <a name="DataAwsServicequotasTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates aws_servicequotas_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplates;

DataAwsServicequotasTemplates.Builder.create(Construct scope, java.lang.String id)
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
    .region(java.lang.String)
//  .templates(IResolvable)
//  .templates(java.util.List<DataAwsServicequotasTemplatesTemplates>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.templates">templates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>></code> | templates block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}.

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.templates"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>>

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#templates DataAwsServicequotasTemplates#templates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates">putTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetTemplates">resetTemplates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTemplates` <a name="putTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates"></a>

```java
public void putTemplates(IResolvable OR java.util.List<DataAwsServicequotasTemplatesTemplates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>>

---

##### `resetTemplates` <a name="resetTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetTemplates"></a>

```java
public void resetTemplates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicequotasTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplates;

DataAwsServicequotasTemplates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplates;

DataAwsServicequotasTemplates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplates;

DataAwsServicequotasTemplates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplates;

DataAwsServicequotasTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsServicequotasTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsServicequotasTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsServicequotasTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsServicequotasTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicequotasTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templates">templates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList">DataAwsServicequotasTemplatesTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templatesInput">templatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templates"></a>

```java
public DataAwsServicequotasTemplatesTemplatesList getTemplates();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList">DataAwsServicequotasTemplatesTemplatesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templatesInput"></a>

```java
public java.lang.Object getTemplatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicequotasTemplatesConfig <a name="DataAwsServicequotasTemplatesConfig" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplatesConfig;

DataAwsServicequotasTemplatesConfig.builder()
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
    .region(java.lang.String)
//  .templates(IResolvable)
//  .templates(java.util.List<DataAwsServicequotasTemplatesTemplates>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.templates">templates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>></code> | templates block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}.

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.templates"></a>

```java
public java.lang.Object getTemplates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>>

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/servicequotas_templates#templates DataAwsServicequotasTemplates#templates}

---

### DataAwsServicequotasTemplatesTemplates <a name="DataAwsServicequotasTemplatesTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplatesTemplates;

DataAwsServicequotasTemplatesTemplates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicequotasTemplatesTemplatesList <a name="DataAwsServicequotasTemplatesTemplatesList" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplatesTemplatesList;

new DataAwsServicequotasTemplatesTemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get"></a>

```java
public DataAwsServicequotasTemplatesTemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>>

---


### DataAwsServicequotasTemplatesTemplatesOutputReference <a name="DataAwsServicequotasTemplatesTemplatesOutputReference" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicequotas_templates.DataAwsServicequotasTemplatesTemplatesOutputReference;

new DataAwsServicequotasTemplatesTemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.globalQuota">globalQuota</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaCode">quotaCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaName">quotaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceCode">serviceCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globalQuota`<sup>Required</sup> <a name="globalQuota" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.globalQuota"></a>

```java
public IResolvable getGlobalQuota();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaCode"></a>

```java
public java.lang.String getQuotaCode();
```

- *Type:* java.lang.String

---

##### `quotaName`<sup>Required</sup> <a name="quotaName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaName"></a>

```java
public java.lang.String getQuotaName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceCode"></a>

```java
public java.lang.String getServiceCode();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates">DataAwsServicequotasTemplatesTemplates</a>

---



